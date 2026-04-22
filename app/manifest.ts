import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Asset Stories',
    short_name: 'AssetStories',
    description: 'AI prompts and book comparisons. Find the perfect prompts and books for you.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
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
