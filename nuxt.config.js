// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 启用SSR
  ssr: true,

  // 应用配置
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      // 移除全局title，由页面级别的useSEO控制
      titleTemplate: "%s",
      meta: [
        {
          name: "description",
          content:
            "专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#6366f1" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      ],
    },
  },

  // 开发服务器配置
  devtools: { enabled: true },

  // CSS配置
  css: ["~/assets/styles/global.css"],

  // 路由规则 - 实现SSR/SSG混合渲染
  routeRules: {
    // 首页：SSR + 边缘缓存（1小时）
    "/": {
      swr: 3600,
      prerender: true,
    },

    // API路由
    "/api/**": { cors: true },

    // Sitemap和Robots
    "/sitemap.xml": { prerender: true },
    "/robots.txt": { prerender: true },
  },

  // 国际化配置
  i18n: {
    locales: [
      { code: "zh-CN", iso: "zh-CN", name: "简体中文", file: "zh-CN.js" },
      { code: "en-US", iso: "en-US", name: "English", file: "en-US.js" },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: "zh-CN",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  // 图片优化配置
  image: {
    // 支持的图片格式（优先使用现代格式）
    formats: ["webp", "avif", "jpeg", "png"],
    
    // 图片质量
    quality: 80,
    
    // 响应式断点
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    
    // 默认图片提供商配置
    provider: "ipx",
    
    // IPX提供商选项
    ipx: {
      maxAge: 31536000, // 1年缓存
    },
    
    // 预设配置
    presets: {
      hero: {
        modifiers: {
          format: "webp",
          quality: 85,
          fit: "cover",
        },
      },
      thumbnail: {
        modifiers: {
          format: "webp",
          quality: 75,
          width: 300,
          height: 300,
          fit: "cover",
        },
      },
    },
    
    // 懒加载配置
    densities: [1, 2],
    
    // 图片尺寸
    sizes: "xs:100vw sm:100vw md:100vw lg:1024px xl:1280px",
  },

  // 实验性功能
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    typedPages: false,
  },

  // Nitro服务器配置
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ["/", "/sitemap.xml", "/robots.txt"],
      failOnError: false, // 允许404页面不中断构建
    },
  },

  // 运行时配置
  runtimeConfig: {
    public: {
      // 直接硬编码siteUrl，避免环境变量未设置导致undefined
      siteUrl: "https://aib.hujiarong.site",
      siteName: "炼丹蓝图",
      siteDescription:
        "专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案",
      language: "zh-CN",
    },
  },

  // 模块配置
  modules: ["@nuxt/image", "@nuxtjs/i18n", "@vueuse/nuxt"],

  // 兼容性配置
  compatibilityDate: "2024-12-18",
});
