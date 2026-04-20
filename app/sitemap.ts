import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://assetstories.com';
  
  return [
    {
      url: `${baseUrl}/post-sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/page-sitemap.xml`,
      lastModified: new Date(),
    },
  ];
}