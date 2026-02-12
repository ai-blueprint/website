/**
 * Nuxt 配置文件
 * 
 * 包含：
 * - 全局SEO配置
 * - 图片优化配置
 * - 性能优化配置
 * - 动画库集成
 */
export default defineNuxtConfig({
  // --- 基础配置 ---
  ssr: true,                                                            // 开启服务端渲染以利于SEO

  app: {                                                                // 应用全局配置
    head: {                                                             // 头部标签配置
      charset: "utf-8",                                                 // 设置字符集为UTF-8
      viewport: "width=device-width, initial-scale=1",                  // 设置视口大小以适配移动端
      titleTemplate: "%s - 炼丹蓝图",                                   // 统一标题后缀
      htmlAttrs: {                                                      // 根元素属性
        lang: "zh-CN",                                                  // 设置页面语言为中文
      },
      meta: [                                                           // 元信息配置
        { name: "description", content: "炼丹蓝图 - 用蓝图的形式设计AI架构" }, // 网站描述
        { name: "keywords", content: "炼丹蓝图,AI架构,可视化设计" },     // 关键词
        { name: "theme-color", content: "#6366f1" },                    // 移动端浏览器主题色
      ],
      link: [                                                           // 外部资源链接
        { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },      // 网站图标
      ],
    },
  },

  // --- 静态资源 ---
  css: ["~/assets/styles/global.css"],                                  // 引入全局样式表

  // --- 模块集成 ---
  modules: [
    "@nuxt/image",                                                      // 图片优化模块
    "@vueuse/nuxt",                                                     // 实用组合式函数库
    "@vueuse/motion/nuxt"                                               // 动画库模块
  ],

  // --- 动画库配置 ---
  motion: {                                                             // 动画全局默认配置
    directives: {                                                       // 自定义指令配置
      'pop-in': {                                                       // 弹入动画
        initial: { scale: 0, opacity: 0 },                              // 初始状态
        enter: { scale: 1, opacity: 1 },                                // 进入状态
      }
    }
  },

  // --- 图片优化 ---
  image: {                                                              // 图片处理规则
    formats: ["webp", "jpeg", "png"],                                   // 优先使用webp格式
    quality: 80,                                                        // 设置压缩质量为80
  },

  // --- 兼容性设置 ---
  compatibilityDate: "2024-12-18",                                      // 指定Nuxt版本兼容日期
});
