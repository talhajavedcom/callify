/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://callify.ai',

  generateRobotsTxt: false, // you already have manual robots.txt
  generateIndexSitemap: false,

  trailingSlash: true,
  outDir: 'out',

  exclude: ['/apple-icon.png', '/icon.png'],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
