/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://themattcode.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
