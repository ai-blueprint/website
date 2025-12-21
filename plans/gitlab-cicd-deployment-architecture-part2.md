
# GitLab CI/CD 增量部署架构设计方案 (续)

## 5. 性能优化预期

### 5.1 优化前后对比

| 阶段 | 优化前 | 优化后（首次） | 优化后（增量） | 优化幅度 |
|------|--------|---------------|---------------|---------|
| **依赖安装** | 3-5 分钟 | 3-5 分钟 | <10 秒 | ↓ 95%+ |
| **构建阶段** | 1-3 分钟 | 1-3 分钟 | 1-3 分钟 | → |
| **部署阶段** | 5-10 分钟 | 5-10 分钟 | 30秒-2分钟 | ↓ 70-90% |
| **总耗时** | **9-18 分钟** | **9-18 分钟** | **2-5 分钟** | **↓ 60-75%** |

### 5.2 性能提升分析

#### **依赖安装阶段**
```
优化前：每次 yarn install（3-5 分钟）
优化后：
  - 缓存命中：仅恢复缓存（<10秒）
  - 缓存未命中：yarn install + 保存缓存（3-5分钟）
  
预期缓存命中率：>90%（依赖变更频率低）
```

#### **部署阶段**
```
优化前：全量递归上传所有文件（5-10分钟）
优化后：
  - 仅上传变更文件（通常 <20% 文件变更）
  - WinSCP 并行传输优化
  - 断点续传减少重传

典型场景：
  - 修改单个页面：上传 3-5 个文件（30秒-1分钟）
  - 修改多个页面：上传 10-20 个文件（1-2分钟）
  - 全量更新：上传所有文件（5-10分钟）
```

### 5.3 资源消耗对比

| 资源类型 | 优化前 | 优化后 | 节省 |
|---------|--------|--------|------|
| **GitLab Runner CPU 时间** | 9-18 分钟 | 2-5 分钟 | 60-75% |
| **网络带宽消耗** | 100% 文件 | 10-30% 文件 | 70-90% |
| **FTP 服务器负载** | 高 | 低 | 显著降低 |
| **存储空间（Cache）** | 0 MB | ~500 MB | 可接受 |

---

## 6. 风险评估与应对

### 6.1 风险识别矩阵

| 风险类别 | 风险描述 | 影响等级 | 概率 | 应对措施 |
|---------|---------|---------|------|---------|
| **缓存污染** | node_modules 缓存损坏导致构建失败 | 高 | 低 | 增加缓存校验，失败时自动清除重建 |
| **增量检测误判** | WinSCP 未检测到变更文件 | 中 | 极低 | 提供手动全量部署选项 |
| **WinSCP 未安装** | Runner 缺少 WinSCP 工具 | 高 | 中 | 部署前检查，提供安装脚本 |
| **网络中断** | FTP 上传过程网络故障 | 中 | 低 | 启用断点续传和重试机制 |
| **部分文件上传失败** | 单个文件失败阻塞整体部署 | 中 | 低 | 收集失败文件列表，提供重试选项 |
| **缓存空间占满** | GitLab Cache 空间不足 | 低 | 低 | 定期清理旧缓存，设置过期时间 |

### 6.2 详细应对方案

#### **风险1: 缓存污染**

**问题场景**：
- node_modules 缓存在不同分支间共享时可能出现版本冲突
- 缓存恢复过程中断导致部分文件损坏

**应对措施**：
```yaml
install-deps:
  script:
    # 检查 node_modules 健康状态
    - |
      if (Test-Path node_modules) {
        Write-Host "Validating node_modules cache..."
        $health = yarn check --verify-tree 2>&1
        if ($LASTEXITCODE -ne 0) {
          Write-Warning "Cache corrupted, clearing..."
          Remove-Item node_modules -Recurse -Force
        }
      }
    
    # 正常安装
    - yarn install --frozen-lockfile --prefer-offline
    
    # 验证安装结果
    - |
      if ($LASTEXITCODE -ne 0) {
        Write-Error "Dependency installation failed"
        exit 1
      }
```

**回滚方案**：
```yaml
# 提供手动清除缓存的 manual job
clear-cache:
  stage: setup
  when: manual
  script:
    - Write-Host "Clearing GitLab CI cache..."
    - Remove-Item node_modules -Recurse -Force -ErrorAction SilentlyContinue
  cache:
    key: $CI_COMMIT_REF_SLUG-deps
    policy: push  # 强制更新缓存为空
```

#### **风险2: WinSCP 环境依赖**

**问题场景**：
- 新的 Runner 机器未安装 WinSCP
- WinSCP 版本不兼容

**应对措施**：
```powershell
# 在 deploy-job 的 before_script 中检查
- |
  $winscp_path = "C:\Program Files (x86)\WinSCP\WinSCP.com"
  
  if (-not (Test-Path $winscp_path)) {
    Write-Error "WinSCP not found at $winscp_path"
    Write-Host "Please install WinSCP on the GitLab Runner"
    Write-Host "Download: https://winscp.net/eng/downloads.php"
    Write-Host "Or run: choco install winscp -y"
    exit 1
  }
  
  # 检查版本
  $version = & $winscp_path /help | Select-String "WinSCP Version"
  Write-Host "WinSCP detected: $version"
```

**自动安装脚本**（需管理员权限）：
```powershell
# 可在 Runner 初始化时执行
if (-not (Get-Command choco -ErrorAction SilentlyContinue)) {
    Write-Host "Installing Chocolatey..."
    Set-ExecutionPolicy Bypass -Scope Process -Force
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
    iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
}

Write-Host "Installing WinSCP..."
choco install winscp -y --no-progress
```

#### **风险3: 增量部署失败回滚**

**问题场景**：
- 增量部署过程中部分文件上传失败
- 需要快速回滚到上一个稳定版本

**应对措施**：
```yaml
deploy-incremental:
  script:
    # 部署前备份当前远程状态（可选）
    - |
      Write-Host "Creating deployment backup..."
      $backupScript = @"
      open ftp://${env:FTP_USER}:${env:FTP_PASS}@${env:FTP_HOST}
      synchronize local backup/previous /aib
      close
      exit
      "@
      $backupScript | Out-File backup.txt
      & $winscp_path /script=backup.txt /log=backup.log
    
    # 执行增量部署
    - # ... WinSCP 同步脚本 ...
    
    # 部署后验证
    - |
      if ($LASTEXITCODE -ne 0) {
        Write-Error "Deployment failed, check logs"
        Write-Host "To rollback manually, restore from backup/previous"
        exit 1
      }

# 手动回滚 job
rollback-deployment:
  stage: deploy
  when: manual
  script:
    - |
      Write-Host "Rolling back to previous deployment..."
      $rollbackScript = @"
      open ftp://${env:FTP_USER}:${env:FTP_PASS}@${env:FTP_HOST}
      synchronize remote backup/previous /aib -delete
      close
      exit
      "@
      $rollbackScript | Out-File rollback.txt
      & $winscp_path /script=rollback.txt /log=rollback.log
```

### 6.3 监控和告警

#### **关键指标监控**

| 指标 | 监控方式 | 告警阈值 | 处理措施 |
|------|---------|---------|---------|
| **Pipeline 成功率** | GitLab CI 统计 | <90% | 检查失败原因，优化脚本 |
| **缓存命中率** | 自定义日志统计 | <80% | 检查 yarn.lock 变更频率 |
| **部署耗时** | GitLab CI 统计 | >10 分钟 | 检查网络和 FTP 性能 |
| **WinSCP 错误率** | 日志分析 | >5% | 检查 FTP 服务器和网络 |

#### **日志收集**

```powershell
# 在每个 job 结束时收集关键日志
artifacts:
  reports:
    dotenv: build.env
  paths:
    - winscp.log
    - deployment-report.json
  when: always
  expire_in: 7 days

# 生成部署报告
- |
  $report = @{
    commit = $env:CI_COMMIT_SHA
    branch = $env:CI_COMMIT_REF_NAME
    pipeline_id = $env:CI_PIPELINE_ID
    deployment_time = (Get-Date).ToString("o")
    cache_hit = $cacheHit
    files_uploaded = $filesUploaded
    deployment_duration = $deploymentDuration
  }
  $report | ConvertTo-Json | Out-File deployment-report.json
```

---

## 7. 分阶段实施路线图

### 7.1 实施阶段划分

```mermaid
graph LR
    A[阶段0_准备] --> B[阶段1_缓存优化]
    B --> C[阶段2_增量部署]
    C --> D[阶段3_监控优化]
    D --> E[阶段4_持续优化]
```

### 7.2 详细实施计划

#### **阶段 0: 环境准备（前置工作）**

**目标**：确保 Runner 环境满足优化方案要求

**任务清单**：
- [ ] 在 GitLab Runner 上安装 WinSCP
- [ ] 验证 PowerShell 版本（需 5.1+）
- [ ] 测试 FTP 连接和权限
- [ ] 备份当前 `.gitlab-ci.yml`

**验证标准**：
- WinSCP 命令行工具可正常执行
- FTP 连接测试成功
- 具有 FTP 目标目录的完整读写权限

**预计产出**：
- WinSCP 安装文档
- 环境检查清单
- 测试脚本

---

#### **阶段 1: 依赖缓存优化（快速见效）**

**目标**：实现 node_modules 缓存，减少依赖安装时间

**优先级**：⭐⭐⭐⭐⭐（高）

**实施步骤**：

1. 修改 `.gitlab-ci.yml` 添加 cache 配置
2. 优化 install-deps job 脚本
3. 测试缓存命中和失效场景
4. 监控缓存效果

**配置变更**：
```yaml
cache:
  key:
    files:
      - yarn.lock
  paths:
    - node_modules/
    - .yarn-cache/

install-deps:
  stage: setup
  script:
    - yarn install --frozen-lockfile --prefer-offline
  cache:
    key:
      files:
        - yarn.lock
    