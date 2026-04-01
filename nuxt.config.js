/**
 * Nuxt 配置文件
 */
const siteUrl = "https://aib.lingloft.cn";                           // 网站正式域名

export default defineNuxtConfig({
  ssr: true,                                                             // 开启服务端渲染以利于SEO

  runtimeConfig: {                                                       // 运行时配置
    public: { siteUrl }                                                  // 公开给客户端和服务端使用
  },

  app: {                                                                 // 应用全局配置
    head: {                                                              // 头部标签配置
      charset: "utf-8",                                                  // 字符集
      viewport: "width=device-width, initial-scale=1",                   // 视口适配移动端
      titleTemplate: "%s - 炼丹蓝图",                                    // 统一标题后缀
      htmlAttrs: { lang: "zh-CN" },                                      // 页面语言为中文
      meta: [
        { name: "description", content: "炼丹蓝图 - 零基础搭建AI架构。用蓝图的形式设计AI架构，拖拽节点、连线，无需编写任何代码。" }, // 网站描述
        { name: "keywords", content: "炼丹蓝图,AI架构,可视化设计,神经网络,深度学习,拖拽编程,零代码AI" }, // 关键词
        { name: "theme-color", content: "#6366f1" },                     // 浏览器主题色
        { name: "author", content: "炼丹蓝图团队" },                     // 作者信息

        // --- Open Graph 标签（社交分享卡片） ---
        { property: "og:type", content: "website" },                     // 页面类型
        { property: "og:site_name", content: "炼丹蓝图" },               // 站点名称
        { property: "og:title", content: "炼丹蓝图 - 零基础搭建AI架构" }, // 分享标题
        { property: "og:description", content: "用蓝图的形式设计AI架构。拖拽节点、连线，无需编写任何代码。" }, // 分享描述
        { property: "og:url", content: siteUrl },                        // 页面地址
        { property: "og:image", content: `${siteUrl}/logo.svg` },        // 分享图片
        { property: "og:locale", content: "zh_CN" },                     // 语言地区

        // --- Twitter Card 标签 ---
        { name: "twitter:card", content: "summary" },                    // 卡片类型
        { name: "twitter:title", content: "炼丹蓝图 - 零基础搭建AI架构" }, // 推特标题
        { name: "twitter:description", content: "用蓝图的形式设计AI架构。拖拽节点、连线，无需编写任何代码。" }, // 推特描述
        { name: "twitter:image", content: `${siteUrl}/logo.svg` },       // 推特图片
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },       // 网站图标
        { rel: "canonical", href: siteUrl },                              // 规范链接
      ],
    },
  },

  css: ["~/assets/global.css"],                                   // 全局样式表

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
