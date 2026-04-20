import { getAllComparisonsMetadata } from '@/lib/comparisons';

export async function GET() {
  const baseUrl = 'https://assetstories.com';
  
  // Static pages
  const staticPages = [
    { url: '', priority: 1 },
    { url: '/blog', priority: 0.9 },
    { url: '/finance-blogs', priority: 0.9 },
    { url: '/comparisons', priority: 0.9 },
    { url: '/categories', priority: 0.8 },
    { url: '/faq', priority: 0.7 },
    { url: '/about', priority: 0.6 },
    { url: '/contact', priority: 0.6 },
    { url: '/privacy-policy', priority: 0.3 },
    { url: '/terms-of-service', priority: 0.3 },
    { url: '/cookie-policy', priority: 0.3 },
    { url: '/affiliate-disclosure', priority: 0.3 },
    { url: '/disclaimer', priority: 0.3 },
  ];

  // Comparisons
  const comparisons = getAllComparisonsMetadata();
  const comparisonUrls = comparisons.map((comp) => ({
    url: `/compare/${comp.slug}`,
    lastmod: comp.lastUpdated ? new Date(comp.lastUpdated).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    priority: 0.9,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map((page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${comparisonUrls.map((comp) => `
  <url>
    <loc>${baseUrl}${comp.url}</loc>
    <lastmod>${comp.lastmod}</lastmod>
    <priority>${comp.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
