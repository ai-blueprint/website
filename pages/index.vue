<template>
  <div class="home-page">
    <Navbar />
    <Hero />
    <Features />
    <Audience />
    <Cta />
    <Footer />
  </div>
</template>

<script setup>
// SEO配置
useHead({
  title: '首页',
  meta: [
    { name: 'description', content: '炼丹蓝图是一款专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案。' },
    { name: 'keywords', content: 'AI架构设计,架构工具,AI应用,技术架构,系统设计' },
    { property: 'og:title', content: '炼丹蓝图 - AI架构设计工具' },
    { property: 'og:description', content: '专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '炼丹蓝图 - AI架构设计工具' },
    { name: 'twitter:description', content: '专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案' }
  ],
  link: [
    { rel: 'canonical', href: 'https://liandanlp.com/' }
  ]
});

// Schema.org结构化数据 - SoftwareApplication
useSchemaOrg([
  {
    '@type': 'SoftwareApplication',
    name: '炼丹蓝图',
    applicationCategory: 'DeveloperApplication',
    description: '专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY'
    }
  },
  {
    '@type': 'WebSite',
    name: '炼丹蓝图',
    url: 'https://liandanlp.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://liandanlp.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }
]);
</script>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
}
</style>