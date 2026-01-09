/**
 * 中文语言包
 * 
 * 包含网站所有中文文案
 * 与原版网站 https://aib.hujiarong.site/ 保持一致
 */
export default {
  // ==================== 网站通用 ====================
  site: {
    name: '炼丹蓝图',
    slogan: 'AI架构设计',
    description: '用蓝图的形式设计AI架构。拖拽节点、连线，让灵感在"炼丹蓝图"中瞬间转化为可运行的模型代码。'
  },

  // ==================== 导航栏 ====================
  nav: {
    features: '核心功能',
    audience: '目标用户',
    tryNow: '立即体验',
    download: '敬请期待'
  },

  // ==================== 首页 Hero 部分 ====================
  hero: {
    badge: '内测阶段即将开始！',
    title: 'AI 架构设计',
    subtitle: '从未如此优雅简单',
    description: '用蓝图的形式设计AI架构。拖拽节点、连线，让灵感在"炼丹蓝图"中瞬间转化为可运行的模型代码。',
    cta: '敬请期待'
  },

  // ==================== 核心功能部分 ====================
  features: {
    title: '化繁为简，专注创新',
    subtitle: '无论是初学者还是资深算法工程师，炼丹蓝图都能为你提供最流畅的架构设计体验。',
    items: [
      {
        title: '蓝图式可视化',
        description: '不需要代码。通过直观的节点拖拽和连线，清晰呈现数据流向，像搭积木一样组装复杂的AI底层架构。',
        icon: 'blueprint',
        color: 'blue'
      },
      {
        title: '丰富的 AI 组件库',
        description: '内置数百种 AI 底层计算组件，即拖即用。支持自定义封装模块，复用你的独家"丹方"。',
        icon: 'beaker',
        color: 'purple'
      },
      {
        title: '实时数据展示',
        description: '实时计算多样数据在您设计的架构下的流通情况，自动发现问题，可单独查看某个节点的输出数据并可视化展示。',
        icon: 'code',
        color: 'teal'
      }
    ]
  },

  // ==================== 目标用户部分 ====================
  audience: {
    title: '目标用户',
    subtitle: '',
    items: [
      {
        title: 'AI 初学者',
        points: [
          '无需深究底层代码语法',
          '直观理解数据流向与维度变化',
          '快速上手复现经典模型'
        ],
        color: 'blue'
      },
      {
        title: '算法工程师',
        points: [
          '分钟级架构验证',
          '快速进行消融实验',
          '自动维度对齐与提示'
        ],
        color: 'purple'
      }
    ]
  },

  // ==================== CTA 行动号召部分 ====================
  cta: {
    title: '准备好开始炼丹了吗',
    subtitle: '下载安装，打开即用。无需配置环境，简单便捷。',
    button: '下载 · 敬请期待'
  },

  // ==================== 页脚 ====================
  footer: {
    description: '致力于降低 AI 架构创新门槛，让每个人都能成为 AI 架构师。',
    links: {
      product: {
        title: '产品',
        items: [
          { name: '开放社区', url: '#' },
          { name: '架构擂台', url: '#' }
        ]
      },
      resources: {
        title: '资源',
        items: [
          { name: '官方文档', url: '#' },
          { name: '组件市场', url: '#' }
        ]
      },
      contact: {
        title: '联系',
        items: [
          { name: 'QQ 群', url: '#' },
          { name: '微信群', url: '#' }
        ]
      }
    },
    copyright: '© 2025 AI Blueprint. All rights reserved.'
  },

  // ==================== 通用按钮和操作 ====================
  common: {
    learnMore: '了解更多',
    getStarted: '开始使用',
    tryFree: '免费试用',
    contactUs: '联系我们',
    loading: '加载中...',
    error: '出错了',
    success: '成功'
  },

  // ==================== SEO相关 ====================
  seo: {
    defaultTitle: '炼丹蓝图 - AI架构设计工具',
    defaultDescription: '用蓝图的形式设计AI架构。拖拽节点、连线，让灵感在"炼丹蓝图"中瞬间转化为可运行的模型代码。',
    keywords: 'AI架构设计,炼丹蓝图,深度学习,神经网络,可视化设计,AI组件库,模型设计'
  },

  // ==================== 语言切换 ====================
  language: {
    switch: '语言',
    zh: '中文',
    en: 'English'
  }
}
