/**
 * 动态生成 robots.txt
 */
export default defineEventHandler((event) => {
  const config = useRuntimeConfig();                                     // 获取运行时配置
  const siteUrl = config.public.siteUrl || 'https://aib.lingloft.cn'; // 网站域名

  const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_nuxt/

Sitemap: ${siteUrl}/sitemap.xml
`;

  event.node.res.setHeader('Content-Type', 'text/plain; charset=utf-8'); // 设置纯文本类型
  event.node.res.setHeader('Cache-Control', 'public, max-age=86400');    // 缓存24小时

  return robots;                                                         // 返回robots内容
});
