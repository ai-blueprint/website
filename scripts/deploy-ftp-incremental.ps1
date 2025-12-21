# PowerShell 原生 FTP 增量部署脚本
# 用途：将本地构建产物增量同步到 FTP 服务器
# 特点：使用 PowerShell 原生 FTP 功能，无需第三方工具
# 跨平台：支持 Windows Runner 连接 Linux FTP Server

param(
    [string]$LocalPath = "website",
    [string]$RemotePath = $env:FTP_REMOTE_PATH,
    [string]$FtpHost = $env:FTP_HOST,
    [string]$FtpUser = $env:FTP_USER,
    [string]$FtpPass = $env:FTP_PASS
)

# ============================================
# 初始化统计变量
# ============================================
$script:UploadedFiles = 0
$script:SkippedFiles = 0
$script:Errors = @()

# ============================================
# FTP 辅助函数
# ============================================

# 执行 FTP 命令的通用函数
function Invoke-FtpCommand {
    param(
        [string]$Url,
        [string]$Method = "ListDirectory",
        [string]$Username,
        [string]$Password,
        [byte[]]$Content = $null
    )
    
    try {
        $request = [System.Net.FtpWebRequest]::Create($Url)
        $request.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
        $request.Method = $Method
        $request.UseBinary = $true
        $request.UsePassive = $true
        $request.KeepAlive = $false
        
        # 如果有内容需要上传
        if ($Content) {
            $request.ContentLength = $Content.Length
            $requestStream = $request.GetRequestStream()
            $requestStream.Write($Content, 0, $Content.Length)
            $requestStream.Close()
        }
        
        $response = $request.GetResponse()
        
        # 读取响应内容
        if ($Method -eq "ListDirectoryDetails" -or $Method -eq "ListDirectory") {
            $reader = New-Object System.IO.StreamReader($response.GetResponseStream())
            $result = $reader.ReadToEnd()
            $reader.Close()
        }
        else {
            $result = $response.StatusDescription
        }
        
        $response.Close()
        return $result
    }
    catch {
        Write-Warning "FTP command failed: $($_.Exception.Message)"
        return $null
    }
}

# 获取远程文件信息（修改时间和大小）
function Get-RemoteFileInfo {
    param(
        [string]$RemoteUrl,
        [string]$Username,
        [string]$Password
    )
    
    try {
        # 获取文件修改时间
        $request = [System.Net.FtpWebRequest]::Create($RemoteUrl)
        $request.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
        $request.Method = [System.Net.WebRequestMethods+Ftp]::GetDateTimestamp
        $request.UsePassive = $true
        $request.KeepAlive = $false
        
        $response = $request.GetResponse()
        $lastModified = $response.LastModified
        $response.Close()
        
        # 获取文件大小
        $request = [System.Net.FtpWebRequest]::Create($RemoteUrl)
        $request.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
        $request.Method = [System.Net.WebRequestMethods+Ftp]::GetFileSize
        $request.UsePassive = $true
        $request.KeepAlive = $false
        
        $response = $request.GetResponse()
        $fileSize = $response.ContentLength
        $response.Close()
        
        return @{
            LastModified = $lastModified
            Size = $fileSize
            Exists = $true
        }
    }
    catch {
        # 文件不存在或其他错误
        return @{ Exists = $false }
    }
}

# 创建远程目录
function New-FtpDirectory {
    param(
        [string]$Url,
        [string]$Username,
        [string]$Password
    )
    
    try {
        $request = [System.Net.FtpWebRequest]::Create($Url)
        $request.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
        $request.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
        $request.UsePassive = $true
        $request.KeepAlive = $false
        
        $response = $request.GetResponse()
        $response.Close()
        Write-Host "  Created directory: $Url" -ForegroundColor Green
        return $true
    }
    catch {
        # 目录可能已存在，忽略错误
        return $false
    }
}

# 上传文件到 FTP 服务器
function Upload-FtpFile {
    param(
        [string]$LocalFile,
        [string]$RemoteUrl,
        [string]$Username,
        [string]$Password
    )
    
    try {
        # 读取本地文件内容
        $content = [System.IO.File]::ReadAllBytes($LocalFile)
        
        # 创建 FTP 上传请求
        $request = [System.Net.FtpWebRequest]::Create($RemoteUrl)
        $request.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
        $request.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
        $request.UseBinary = $true
        $request.UsePassive = $true
        $request.KeepAlive = $false
        $request.ContentLength = $content.Length
        
        # 写入文件内容
        $requestStream = $request.GetRequestStream()
        $requestStream.Write($content, 0, $content.Length)
        $requestStream.Close()
        
        # 获取响应
        $response = $request.GetResponse()
        $response.Close()
        
        return $true
    }
    catch {
        Write-Error "Failed to upload $LocalFile : $($_.Exception.Message)"
        $script:Errors += $LocalFile
        return $false
    }
}

# 判断文件是否需要上传（基于大小和修改时间）
function Test-FileNeedsUpload {
    param(
        [System.IO.FileInfo]$LocalFile,
        [hashtable]$RemoteInfo
    )
    
    # 远程文件不存在，需要上传
    if (-not $RemoteInfo.Exists) {
        return $true
    }
    
    # 比较文件大小
    if ($LocalFile.Length -ne $RemoteInfo.Size) {
        return $true
    }
    
    # 比较修改时间（允许1秒误差，因为FTP时间戳精度问题）
    $timeDiff = ($LocalFile.LastWriteTime - $RemoteInfo.LastModified).TotalSeconds
    if ([Math]::Abs($timeDiff) > 1) {
        return $true
    }
    
    # 文件未变化，跳过上传
    return $false
}

# 递归同步目录
function Sync-FtpDirectory {
    param(
        [string]$LocalDir,
        [string]$RemoteBase,
        [string]$Username,
        [string]$Password
    )
    
    # 确保远程目录存在
    $remoteDirUrl = "ftp://$FtpHost$RemoteBase"
    New-FtpDirectory -Url $remoteDirUrl -Username $Username -Password $Password | Out-Null
    
    # 获取所有本地文件
    $files = Get-ChildItem -Path $LocalDir -File
    
    foreach ($file in $files) {
        $relativePath = $file.Name
        $remoteUrl = "ftp://$FtpHost$RemoteBase/$relativePath"
        
        # 获取远程文件信息
        $remoteInfo = Get-RemoteFileInfo -RemoteUrl $remoteUrl -Username $Username -Password $Password
        
        # 判断是否需要上传
        if (Test-FileNeedsUpload -LocalFile $file -RemoteInfo $remoteInfo) {
            Write-Host "  Uploading: $relativePath" -ForegroundColor Yellow
            
            if (Upload-FtpFile -LocalFile $file.FullName -RemoteUrl $remoteUrl -Username $Username -Password $Password) {
                Write-Host "  ✓ Uploaded: $relativePath" -ForegroundColor Green
                $script:UploadedFiles++
            }
        }
        else {
            Write-Host "  - Skipped (unchanged): $relativePath" -ForegroundColor Gray
            $script:SkippedFiles++
        }
    }
    
    # 递归处理子目录
    $subDirs = Get-ChildItem -Path $LocalDir -Directory
    
    foreach ($subDir in $subDirs) {
        $subRemotePath = "$RemoteBase/$($subDir.Name)"
        Write-Host "Processing directory: $subRemotePath" -ForegroundColor Cyan
        Sync-FtpDirectory -LocalDir $subDir.FullName -RemoteBase $subRemotePath -Username $Username -Password $Password
    }
}

# ============================================
# 主流程
# ============================================
try {
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Host "GitLab CI/CD - Incremental FTP Deployment" -ForegroundColor Cyan
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Configuration:" -ForegroundColor Yellow
    Write-Host "  Local path:  $LocalPath"
    Write-Host "  Remote path: $RemotePath"
    Write-Host "  FTP host:    $FtpHost"
    Write-Host "  FTP user:    $FtpUser"
    Write-Host ""
    
    # ============================================
    # 验证参数
    # ============================================
    if (!(Test-Path $LocalPath)) {
        throw "Local path not found: $LocalPath"
    }
    
    if (-not $RemotePath) {
        throw "Remote path is not specified!"
    }
    
    if (-not $FtpHost -or -not $FtpUser -or -not $FtpPass) {
        throw "FTP credentials are incomplete! Required: FTP_HOST, FTP_USER, FTP_PASS"
    }
    
    # 记录开始时间
    $startTime = Get-Date
    
    # ============================================
    # 开始同步
    # ============================================
    Write-Host "Starting synchronization..." -ForegroundColor Yellow
    Write-Host "Sync mode: Remote (upload only)" -ForegroundColor Yellow
    Write-Host "Criteria:  File size and modification time" -ForegroundColor Yellow
    Write-Host ""
    
    Sync-FtpDirectory -LocalDir $LocalPath -RemoteBase $RemotePath -Username $FtpUser -Password $FtpPass
    
    # 计算耗时
    $duration = (Get-Date) - $startTime
    
    # ============================================
    # 显示统计信息
    # ============================================
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Host "Deployment Summary" -ForegroundColor Cyan
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Host "  Uploaded files:  $script:UploadedFiles" -ForegroundColor Green
    Write-Host "  Skipped files:   $script:SkippedFiles" -ForegroundColor Gray
    Write-Host "  Failed files:    $($script:Errors.Count)" -ForegroundColor Red
    Write-Host "  Duration:        $([math]::Round($duration.TotalSeconds, 2)) seconds"
    Write-Host ""
    
    # 显示失败的文件列表
    if ($script:Errors.Count -gt 0) {
        Write-Host "Failed files:" -ForegroundColor Red
        $script:Errors | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
        exit 1
    }
    
    # 成功完成
    if ($script:UploadedFiles -eq 0) {
        Write-Host "✓ No files changed - deployment skipped" -ForegroundColor Green
        Write-Host "All files are already up to date on the server." -ForegroundColor Green
    }
    else {
        Write-Host "✓ Deployment completed successfully" -ForegroundColor Green
    }
    
    Write-Host "================================================" -ForegroundColor Cyan
    exit 0
}
catch {
    # ============================================
    # 错误处理
    # ============================================
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Red
    Write-Host "✗ Deployment Failed" -ForegroundColor Red
    Write-Host "================================================" -ForegroundColor Red
    Write-Error "Error message: $($_.Exception.Message)"
    
    # 显示详细的错误堆栈（用于调试）
    if ($_.Exception.StackTrace) {
        Write-Host ""
        Write-Host "Stack trace:"
        Write-Host $_.Exception.StackTrace
    }
    
    # 常见错误提示
    Write-Host ""
    Write-Host "Common troubleshooting steps:" -ForegroundColor Yellow
    Write-Host "1. Verify FTP credentials (FTP_HOST, FTP_USER, FTP_PASS)"
    Write-Host "2. Check network connectivity to FTP server"
    Write-Host "3. Ensure remote path exists or can be created"
    Write-Host "4. Check FTP server logs for detailed error messages"
    Write-Host "5. Verify PowerShell version (requires 5.1+)"
    Write-Host ""
    
    exit 1
}