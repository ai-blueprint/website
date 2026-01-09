<!--
  首页组件
  
  功能：
  - 展示网站主要内容板块
  - 配置完整的SEO元数据
  - 注入丰富的结构化数据
  - 支持国际化
  
  板块：
  - Hero: 首屏横幅
  - Features: 核心功能展示
  - Audience: 目标用户群体
  - Cta: 行动号召
-->
<template>
  <div class="home-page">
    <!-- 首屏横幅 -->
    <Hero />
    
    <!-- 核心功能展示 -->
    <Features />
    
    <!-- 目标用户群体 -->
    <Audience />
    
    <!-- 行动号召 -->
    <Cta />
  </div>
</template>

<script setup>
import { computed } from 'vue'
// 导入结构化数据创建函数
import { 
  createOrganizationSchema, 
  createWebSiteSchema, 
  createSoftwareApplicationSchema,
  createWebPageSchema
} from '~/composables/useSchemaOrg'

// 获取运行时配置
const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public.siteUrl

// 获取 i18n
const { t, locale } = useI18n()

// ==================== SEO配置 ====================
// 根据当前语言动态设置SEO内容
const seoTitle = computed(() => t('seo.defaultTitle'))
const seoDescription = computed(() => t('seo.defaultDescription'))
const seoKeywords = computed(() => {
  const kw = t('seo.keywords')
  return typeof kw === 'string' ? kw.split(',') : []
})
const seoAuthor = computed(() => t('site.name'))
const seoLocale = computed(() => locale.value === 'zh-CN' ? 'zh_CN' : 'en_US')
const seoAlternateLocales = computed(() => locale.value === 'zh-CN' ? ['en_US'] : ['zh_CN'])

useSEO({
  title: seoTitle,
  description: seoDescription,
  keywords: seoKeywords,
  image: `${baseUrl}/og-image.jpg`,
  type: 'website',
  author: seoAuthor,
  locale: seoLocale,
  alternateLocales: seoAlternateLocales
})

// ==================== 结构化数据 ====================
// 注入多个Schema.org结构化数据，提升搜索引擎理解和富媒体展示
const siteName = computed(() => t('site.name'))
const footerDesc = computed(() => t('footer.description'))
const siteDesc = computed(() => t('site.description'))
const heroDesc = computed(() => t('hero.description'))
const heroBadge = computed(() => t('hero.badge'))

useSchemaOrg([
  // 1. 组织信息 - 描述网站所属组织
  createOrganizationSchema({
    name: siteName.value,
    description: footerDesc.value,
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    sameAs: [
      'https://github.com/ai-blueprint'
    ]
  }),
  
  // 2. 网站信息 - 描述整个网站
  createWebSiteSchema({
    name: siteName.value,
    description: siteDesc.value,
    url: baseUrl,
    inLanguage: locale.value,
    hasSearch: false
  }),
  
  // 3. 软件应用信息 - 描述产品本身
  createSoftwareApplicationSchema({
    name: siteName.value,
    description: heroDesc.value,
    url: baseUrl,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, Windows, macOS',
    // 功能特性列表
    featureList: [],
    // 价格信息
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
      availability: 'https://schema.org/PreOrder',
      description: heroBadge.value
    },
    // 软件版本
    softwareVersion: '1.0.0-beta',
    // 发布日期
    datePublished: '2025-01-01',
    // 截图
    screenshot: `${baseUrl}/og-image.jpg`
  }),
  
  // 4. 网页信息 - 描述当前页面
  createWebPageSchema({
    type: 'WebPage',
    name: seoTitle.value,
    description: seoDescription.value,
    url: baseUrl,
    inLanguage: locale.value,
    // 面包屑导航
    breadcrumb: [
      { name: locale.value === 'zh-CN' ? '首页' : 'Home', url: baseUrl }
    ]
  })
])
</script>

<style scoped>
/* 首页容器样式 */
.home-page {
  width: 100%;
  min-height: 100vh;
}
</style>
