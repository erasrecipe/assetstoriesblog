import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogPosts';
import { getAllComparisonsMetadata } from '@/lib/comparisons';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://assetstories.com';
  
  // Static pages
  const staticPages = [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/blog`, priority: 0.9 },
    { url: `${baseUrl}/finance-blogs`, priority: 0.9 },
    { url: `${baseUrl}/comparisons`, priority: 0.9 },
    { url: `${baseUrl}/categories`, priority: 0.8 },
    { url: `${baseUrl}/faq`, priority: 0.7 },
    { url: `${baseUrl}/about`, priority: 0.6 },
    { url: `${baseUrl}/contact`, priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, priority: 0.3 },
    { url: `${baseUrl}/affiliate-disclosure`, priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, priority: 0.3 },
  ].map(page => ({ ...page, lastModified: new Date() }));
  
  // Comparison pages (445 comparisons)
  const comparisons = getAllComparisonsMetadata();
  const comparisonPages = comparisons.map((comp) => ({
    url: `${baseUrl}/compare/${comp.slug}`,
    lastModified: comp.lastUpdated ? new Date(comp.lastUpdated) : new Date(),
    priority: 0.9,
  }));
  
  return [...staticPages, ...comparisonPages];
}