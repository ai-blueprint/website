/**
 * 动态生成 sitemap.xml
 */
export default defineEventHandler((event) => {
  const config = useRuntimeConfig();                                     // 获取运行时配置
  const siteUrl = config.public.siteUrl || 'https://aib.hujiarong.site'; // 网站域名
  const currentDate = new Date().toISOString();                          // 当前日期用于lastmod

  // --- 定义所有需要索引的路由 ---
  const routes = [
    { loc: '/', changefreq: 'weekly', priority: 1.0 }                   // 首页，最高优先级
  ];

  // --- 生成XML ---
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${siteUrl}${route.loc === '/' ? '' : route.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  event.node.res.setHeader('Content-Type', 'application/xml');           // 设置XML内容类型
  event.node.res.setHeader('Cache-Control', 'public, max-age=3600');     // 缓存1小时

  return sitemap;                                                        // 返回sitemap内容
});
