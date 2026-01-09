# 炼丹蓝图官网

炼丹蓝图的官方网站，基于 Nuxt 3 构建的现代化单页应用。

## 技术栈

- **Nuxt 3** - 基于 Vue 3 的全栈框架
- **@nuxtjs/i18n** - 国际化支持（中文/英文）
- **@nuxt/image** - 图片优化
- **@vueuse/nuxt** - Vue 组合式工具函数
- **纯 CSS** - 使用 CSS 变量管理主题

## 快速开始

```bash
# 安装依赖
yarn install

# 启动开发服务器
yarn dev

# 构建生产版本
yarn build

# 静态生成
yarn generate

# 预览构建结果
yarn preview
```

开发服务器默认运行在 `http://localhost:3000`

## 项目结构

```
├── app.vue                 # 应用入口
├── nuxt.config.js          # Nuxt 配置
├── pages/                  # 页面
│   └── index.vue           # 首页
├── layouts/                # 布局
│   └── default.vue         # 默认布局
├── components/             # 组件
│   ├── Navbar.vue          # 导航栏
│   ├── Hero.vue            # 首屏横幅
│   ├── Features.vue        # 核心功能
│   ├── Audience.vue        # 目标用户
│   ├── Cta.vue             # 行动号召
│   ├── Footer.vue          # 页脚
│   └── LanguageSwitcher.vue # 语言切换
├── composables/            # 组合式函数
│   ├── useSEO.js           # SEO 元数据管理
│   └── useSchemaOrg.js     # Schema.org 结构化数据
├── server/routes/          # 服务端路由
│   ├── sitemap.xml.js      # 动态 sitemap
│   └── robots.txt.js       # 动态 robots.txt
├── i18n/locales/           # 国际化文件
│   ├── zh-CN.js            # 中文
│   └── en-US.js            # 英文
├── data/                   # 数据文件
├── assets/styles/          # 样式文件
│   └── global.css          # 全局样式和 CSS 变量
└── public/                 # 静态资源
```

## 主要功能

### 服务端渲染 (SSR)

启用 SSR 以提升首屏加载速度和 SEO 效果。

### 国际化

支持中文（默认）和英文，使用 `prefix_except_default` 策略：
- 中文：`/`
- 英文：`/en-US`

### SEO 优化

- Open Graph 和 Twitter Card 元标签
- Schema.org 结构化数据（JSON-LD）
- 动态生成 sitemap.xml 和 robots.txt
- 多语言 hreflang 标签

### 图片优化

使用 `@nuxt/image` 自动优化图片，支持 WebP 格式转换和响应式图片。

## 样式管理

使用 CSS 变量管理主题色和样式，定义在 [`assets/styles/global.css`](assets/styles/global.css)：

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #3b82f6;
  /* ... */
}
```

## 添加新页面

1. 在 `pages/` 目录创建 `.vue` 文件
2. 使用 `useSEO()` 设置页面 SEO
3. 在 `i18n/locales/` 添加对应的翻译文本

## 部署

```bash
# 构建
yarn build

# 或静态生成
yarn generate
```

构建产物位于 `.output/` 目录，静态生成产物位于 `.output/public/` 目录。

## 相关文档

- [SEO 指南](docs/seo-guide.md)
- [架构文档](docs/architecture.md)
- [Nuxt 3 迁移计划](docs/nuxt3-migration-plan.md)

## License 许可证

GNU General Public License v3.0 (GPL v3.0)

**重要说明**：如果你修改了这个网站的代码并分享给他人，必须遵守以下要求：

- 提供修改后的完整源代码
- 继续使用 GPL v3.0 许可证
- 保留原作者信息

**核心原则**：修改后分享必须开源，不能闭源收费！