import { promptPosts } from '@/lib/promptPosts';

export async function GET() {
  const baseUrl = 'https://assetstories.com';
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${promptPosts.map((post) => `
  <url>
    <loc>${baseUrl}/prompts/${post.slug}</loc>
    <lastmod>${post.date || new Date().toISOString().split('T')[0]}</lastmod>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}