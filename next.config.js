/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
      },
      {
        protocol: 'https',
        hostname: 'books.google.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'assetstories.com',
      },
      {
        protocol: 'https',
        hostname: '*.assetstories.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable static optimization
  output: 'standalone',
  // Generate static pages at build time
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  // Fix webpack HMR issues
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Disable webpack cache in development to prevent HMR corruption
      config.cache = false;
    }
    return config;
  },
  // Security and cache headers
  async headers() {
    return [
      // Cache static assets for 1 year
      {
        source: '/public/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|png|webp|avif|otf|ttf|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Security headers for all pages
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: http: blob:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://formspree.io https://www.google-analytics.com https://vercel.live wss://*.pusher.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://formspree.io;",
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
