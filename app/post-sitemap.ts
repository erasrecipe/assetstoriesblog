import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://assetstories.com';
  
  return blogPosts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    priority: 0.8,
  }));
}