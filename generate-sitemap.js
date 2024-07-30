const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const smStream = new SitemapStream({ hostname: 'https://ladent.id' });
const fs = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/home', changefreq: 'weekly', priority: 0.8 },
  { url: '/artist', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  { url: '/service/event-management', changefreq: 'monthly', priority: 0.7 },
  { url: '/service/brand-activation', changefreq: 'monthly', priority: 0.7 },
  { url: '/service/media-planner', changefreq: 'monthly', priority: 0.7 },
  { url: '/service/production', changefreq: 'monthly', priority: 0.7 },
  { url: '/posts/search', changefreq: 'monthly', priority: 0.6 },
  { url: '/maintenance', changefreq: 'monthly', priority: 0.5 },
];

links.forEach(link => smStream.write(link));

smStream.end();

streamToPromise(smStream).then(sm => {
  fs.writeFileSync('./public/sitemap.xml', sm.toString());
});
