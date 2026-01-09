/**
 * SEO元数据管理组合式函数
 * 
 * 功能：
 * - 设置页面标题和描述
 * - 配置Open Graph元标签（Facebook、微信、QQ等）
 * - 配置Twitter Card元标签
 * - 配置其他社交媒体元标签（LinkedIn、Pinterest等）
 * - 设置规范链接（canonical）
 * - 支持多语言SEO
 * 
 * @param {Object} options - SEO配置选项
 * @param {string} options.title - 页面标题
 * @param {string} options.description - 页面描述（建议50-160字符）
 * @param {string[]} options.keywords - 关键词数组
 * @param {string} options.image - 分享图片URL（建议1200x630像素）
 * @param {string} options.type - 页面类型（website/article/product等）
 * @param {string} options.author - 作者名称
 * @param {string} options.publishedTime - 发布时间（ISO格式）
 * @param {string} options.modifiedTime - 修改时间（ISO格式）
 * @param {string} options.section - 文章分类
 * @param {string[]} options.tags - 文章标签
 * @param {string} options.twitterSite - Twitter账号（如@username）
 * @param {string} options.twitterCreator - Twitter作者账号
 * @param {string} options.locale - 页面语言
 * @param {Object[]} options.alternateLocales - 备用语言版本
 */
export const useSEO = (options = {}) => {
  // 获取路由和运行时配置
  const route = useRoute()
  const config = useRuntimeConfig()
  
  // 构建基础URL
  const baseUrl = config.public.siteUrl || 'https://aib.hujiarong.site'
  const siteName = config.public.siteName || '炼丹蓝图'
  const currentUrl = `${baseUrl}${route.path}`
  
  // 辅助函数：获取值（支持 ref 和普通值）
  const getValue = (val, defaultVal = '') => {
    if (val === undefined || val === null) return defaultVal
    // 如果是 ref 或 computed，获取其 value
    if (typeof val === 'object' && 'value' in val) {
      return val.value ?? defaultVal
    }
    return val ?? defaultVal
  }

  // 解构配置选项，设置默认值
  const title = getValue(options.title, '')
  const description = getValue(options.description, '')
  const keywordsRaw = getValue(options.keywords, [])
  const keywords = Array.isArray(keywordsRaw) ? keywordsRaw : []
  const image = getValue(options.image, '')
  const type = getValue(options.type, 'website')
  const author = getValue(options.author, '')
  const publishedTime = getValue(options.publishedTime, '')
  const modifiedTime = getValue(options.modifiedTime, '')
  const section = getValue(options.section, '')
  const tagsRaw = getValue(options.tags, [])
  const tags = Array.isArray(tagsRaw) ? tagsRaw : []
  const twitterSite = getValue(options.twitterSite, '')
  const twitterCreator = getValue(options.twitterCreator, '')
  const locale = getValue(options.locale, 'zh_CN')
  const alternateLocalesRaw = getValue(options.alternateLocales, [])
  const alternateLocales = Array.isArray(alternateLocalesRaw) ? alternateLocalesRaw : []
  
  // 分享图片URL（默认使用og-image.jpg）
  const ogImage = image || `${baseUrl}/og-image.jpg`
  
  // 图片尺寸（用于社交媒体优化显示）
  const imageWidth = '1200'
  const imageHeight = '630'

  // 构建meta标签数组
  const metaTags = [
    // ==================== 基础SEO元标签 ====================
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'author', content: author || siteName },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { name: 'googlebot', content: 'index, follow' },
    { name: 'bingbot', content: 'index, follow' },
    
    // ==================== Open Graph 元标签（Facebook、微信、QQ、LinkedIn等） ====================
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:url', content: currentUrl },
    { property: 'og:site_name', content: siteName },
    { property: 'og:locale', content: locale },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:secure_url', content: ogImage },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: imageWidth },
    { property: 'og:image:height', content: imageHeight },
    { property: 'og:image:alt', content: title },
    
    // ==================== Twitter Card 元标签 ====================
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    { name: 'twitter:image:alt', content: title },
    
    // ==================== 其他社交媒体元标签 ====================
    // Pinterest
    { name: 'pinterest-rich-pin', content: 'true' },
    
    // 移动端优化
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: siteName },
    
    // Microsoft/Bing
    { name: 'msapplication-TileColor', content: '#6366f1' },
    { name: 'msapplication-config', content: '/browserconfig.xml' },
  ]

  // 添加Twitter账号（如果提供）
  if (twitterSite) {
    metaTags.push({ name: 'twitter:site', content: twitterSite })
  }
  if (twitterCreator) {
    metaTags.push({ name: 'twitter:creator', content: twitterCreator })
  }

  // 添加文章特定的元标签（当type为article时）
  if (type === 'article') {
    if (publishedTime) {
      metaTags.push({ property: 'article:published_time', content: publishedTime })
    }
    if (modifiedTime) {
      metaTags.push({ property: 'article:modified_time', content: modifiedTime })
    }
    if (author) {
      metaTags.push({ property: 'article:author', content: author })
    }
    if (section) {
      metaTags.push({ property: 'article:section', content: section })
    }
    // 添加文章标签
    tags.forEach(tag => {
      metaTags.push({ property: 'article:tag', content: tag })
    })
  }

  // 添加备用语言版本的Open Graph标签
  alternateLocales.forEach(altLocale => {
    metaTags.push({ property: 'og:locale:alternate', content: altLocale })
  })

  // 构建link标签数组
  const linkTags = [
    // 规范链接
    { rel: 'canonical', href: currentUrl },
  ]

  // 添加多语言备用链接（hreflang）
  if (alternateLocales.length > 0) {
    // 当前语言
    linkTags.push({
      rel: 'alternate',
      hreflang: locale.replace('_', '-').toLowerCase(),
      href: currentUrl
    })
    // 备用语言
    alternateLocales.forEach(altLocale => {
      const langCode = altLocale.replace('_', '-').toLowerCase()
      const altUrl = langCode.startsWith('en') 
        ? `${baseUrl}/en-US${route.path}` 
        : currentUrl
      linkTags.push({
        rel: 'alternate',
        hreflang: langCode,
        href: altUrl
      })
    })
    // x-default（默认语言）
    linkTags.push({
      rel: 'alternate',
      hreflang: 'x-default',
      href: currentUrl
    })
  }

  // 应用SEO配置
  useHead({
    title,
    meta: metaTags,
    link: linkTags,
  })
}

/**
 * 快速设置基础SEO的辅助函数
 * 适用于简单页面，只需要标题和描述
 * 
 * @param {string} title - 页面标题
 * @param {string} description - 页面描述
 */
export const useBasicSEO = (title, description) => {
  useSEO({ title, description })
}
