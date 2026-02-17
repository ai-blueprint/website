/**
 * Nuxt 配置文件
 */
export default defineNuxtConfig({
  ssr: true,                                                             // 开启服务端渲染以利于SEO

  app: {                                                                 // 应用全局配置
    head: {                                                              // 头部标签配置
      charset: "utf-8",                                                  // 字符集
      viewport: "width=device-width, initial-scale=1",                   // 视口适配移动端
      titleTemplate: "%s - 炼丹蓝图",                                    // 统一标题后缀
      htmlAttrs: { lang: "zh-CN" },                                      // 页面语言为中文
      meta: [
        { name: "description", content: "炼丹蓝图 - 用蓝图的形式设计AI架构" }, // 网站描述
        { name: "keywords", content: "炼丹蓝图,AI架构,可视化设计" },      // 关键词
        { name: "theme-color", content: "#6366f1" },                     // 浏览器主题色
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },       // 网站图标
      ],
    },
  },

  css: ["~/assets/styles/global.css"],                                   // 全局样式表

  modules: [
    "@nuxt/image",                                                       // 图片优化模块
    "@vueuse/nuxt",                                                      // 实用组合式函数库
  ],

  image: {                                                               // 图片处理规则
    formats: ["webp", "jpeg", "png"],                                    // 优先使用webp格式
    quality: 80,                                                         // 压缩质量
  },

  compatibilityDate: "2024-12-18",                                       // Nuxt版本兼容日期
});
