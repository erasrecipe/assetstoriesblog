import { MetadataRoute } from 'next';
import { promptPosts } from '@/lib/promptPosts';
import { blogPosts } from '@/lib/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://assetstories.com';
  const today = new Date();

  const staticPages = [
    '',
    '/about',
    '/blog',
    '/prompts',
    '/categories',
    '/comparisons',
    '/contact',
    '/faq',
    '/terms-of-service',
    '/privacy-policy',
    '/cookie-policy',
    '/affiliate-disclosure',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.8,
    })),
    // Blog posts
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Prompt articles
    ...promptPosts.map((post) => ({
      url: `${baseUrl}/prompts/${post.slug}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  return sitemapEntries;
}