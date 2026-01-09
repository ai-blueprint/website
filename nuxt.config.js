/**
 * Nuxt 配置文件
 * 
 * 包含：
 * - 全局SEO配置（Open Graph、Twitter Card等）
 * - 国际化配置
 * - 图片优化配置
 * - 性能优化配置
 */
export default defineNuxtConfig({
  // ==================== 服务端渲染 ====================
  ssr: true,

  // ==================== 应用配置 ====================
  app: {
    head: {
      // 字符编码
      charset: 'utf-8',
      // 视口设置
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
      // 标题模板
      titleTemplate: '%s - 炼丹蓝图',
      // HTML属性
      htmlAttrs: { 
        lang: 'zh-CN' 
      },
      // 全局Meta标签
      meta: [
        // 基础SEO - 与网站文案保持一致
        { name: 'description', content: '炼丹蓝图 - 用蓝图的形式设计AI架构，拖拽节点、连线，让灵感瞬间转化为可运行的模型代码。内置数百种AI组件，支持实时数据展示，降低AI架构创新门槛。' },
        { name: 'keywords', content: '炼丹蓝图,AI架构设计,AI可视化设计,蓝图式可视化,AI组件库,神经网络可视化,深度学习架构,AI初学者,算法工程师,拖拽式AI开发' },
        { name: 'author', content: '炼丹蓝图团队' },
        
        // 主题色
        { name: 'theme-color', content: '#6366f1' },
        { name: 'msapplication-TileColor', content: '#6366f1' },
        
        // 搜索引擎指令
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        
        // Open Graph 基础标签（全局默认值）
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: '炼丹蓝图' },
        { property: 'og:locale', content: 'zh_CN' },
        { property: 'og:locale:alternate', content: 'en_US' },
        
        // Twitter Card 基础标签
        { name: 'twitter:card', content: 'summary_large_image' },
        
        // 移动端优化
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: '炼丹蓝图' },
        
        // 安全相关
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      ],
      // 全局Link标签
      link: [
        // 网站图标
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        
        // 预连接（提升性能）
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        
        // DNS预解析
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      ],
    },
  },

  // ==================== 全局CSS ====================
  css: ['~/assets/styles/global.css'],

  // ==================== 路由规则 ====================
  routeRules: {
    // 首页预渲染
    '/': { prerender: true },
    // SEO文件预渲染
    '/sitemap.xml': { prerender: true },
    '/robots.txt': { prerender: true },
    // 英文版本预渲染
    '/en-US': { prerender: true },
    '/en-US/**': { prerender: true },
  },

  // ==================== 国际化配置 ====================
  i18n: {
    locales: [
      { code: 'zh-CN', iso: 'zh-CN', name: '简体中文', file: 'zh-CN.js' },
      { code: 'en-US', iso: 'en-US', name: 'English', file: 'en-US.js' },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'zh-CN',
    strategy: 'prefix_except_default',
    // 浏览器语言自动检测配置
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      cookieCrossOrigin: false,
      cookieSecure: false,
      fallbackLocale: 'zh-CN',
    },
  },

  // ==================== 图片优化配置 ====================
  image: {
    formats: ['webp', 'jpeg', 'png'],
    quality: 80,
    provider: 'ipx',
    // 图片尺寸预设
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  // ==================== Nitro服务器配置 ====================
  nitro: {
    // 压缩静态资源
    compressPublicAssets: true,
    // 预渲染配置
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/sitemap.xml',
        '/robots.txt',
        '/en-US',
      ],
    },
    // 路由规则
    routeRules: {
      // 静态资源缓存
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
      // 图片缓存
      '/images/**': {
        headers: {
          'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
      },
    },
  },

  // ==================== 运行时配置 ====================
  runtimeConfig: {
    public: {
      // 网站URL（用于生成绝对路径）
      siteUrl: 'https://aib.hujiarong.site',
      // 网站名称
      siteName: '炼丹蓝图',
      // 网站描述 - 与文案保持一致
      siteDescription: '用蓝图的形式设计AI架构，拖拽节点、连线，让灵感瞬间转化为可运行的模型代码',
      // 品牌理念
      siteSlogan: '致力于降低AI架构创新门槛，让每个人都能成为AI架构师',
      // 默认分享图片
      ogImage: 'https://aib.hujiarong.site/og-image.jpg',
      // 语言
      language: 'zh-CN',
    },
  },

  // ==================== 模块 ====================
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],

  // ==================== 实验性功能 ====================
  experimental: {
    // 启用payload提取（提升性能）
    payloadExtraction: true,
    // 启用组件岛屿
    componentIslands: true,
  },

  // ==================== 构建配置 ====================
  build: {
    // 转译依赖
    transpile: [],
  },

  // ==================== Vite配置 ====================
  vite: {
    // CSS配置
    css: {
      preprocessorOptions: {
        // 如果使用SCSS，可以在这里配置
      },
    },
    // 构建优化
    build: {
      // 代码分割
      rollupOptions: {
        output: {
          manualChunks: {
            // 将Vue相关库打包到一起
            vue: ['vue', 'vue-router'],
          },
        },
      },
    },
  },

  // ==================== 兼容性日期 ====================
  compatibilityDate: '2024-12-18',
})
