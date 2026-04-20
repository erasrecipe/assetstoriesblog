import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Books War - We Compare Books',
    short_name: 'Books War',
    description: 'The ultimate book comparison platform. Find the perfect book for you.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a2b4a',
    theme_color: '#d4af37',
    icons: [
      {
        src: '/icon-192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon-512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };
}
