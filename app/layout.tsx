import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SkipLinks from '@/components/SkipLinks';
import CookieConsent from '@/components/CookieConsent';
import PageTransition from '@/components/PageTransition';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: true, preload: true });

export const metadata: Metadata = {
  metadataBase: new URL('https://assetstories.com'),
  title: {
    default: 'Asset Stories - Finance, Books & AI (2026)',
    template: '%s | Asset Stories',
  },
  description: 'Explore in-depth articles on finance, books, and artificial intelligence. Get expert insights, book comparisons, and stay updated with the latest in AI and personal finance.',
  keywords: ['finance', 'books', 'artificial intelligence', 'AI', 'book comparison', 'book reviews', 'personal finance', 'investment', 'technology'],
  authors: [
    { name: 'Mehrab Musa', url: 'https://assetstories.com' },
  ],
  creator: 'Mehrab Musa',
  publisher: 'Asset Stories',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://assetstories.com',
    siteName: 'Asset Stories',
    title: 'Asset Stories - Finance, Books & AI (2026)',
    description: 'Explore in-depth articles on finance, books, and artificial intelligence.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Asset Stories - Finance, Books & Artificial Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asset Stories - Finance, Books & AI (2026)',
    description: 'Explore in-depth articles on finance, books, and artificial intelligence.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/astra/Astra-6RGXq.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <SkipLinks />
        
        {/* Google Analytics - Only loads if user accepts cookies */}
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Check if user has consented to analytics
            function loadGoogleAnalytics() {
              const consent = localStorage.getItem('cookie-consent');
              if (consent === 'accepted') {
                // Load Google Analytics script
                const script = document.createElement('script');
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
                script.async = true;
                document.head.appendChild(script);
                
                script.onload = function() {
                  gtag('js', new Date());
                  gtag('config', 'G-XXXXXXXXXX', {
                    'anonymize_ip': true,
                    'cookie_flags': 'SameSite=None;Secure'
                  });
                };
              }
            }
            
            // Load GA if already consented
            if (typeof window !== 'undefined') {
              loadGoogleAnalytics();
              
              // Listen for consent changes
              window.addEventListener('cookie-consent-changed', function(e) {
                if (e.detail === 'accepted') {
                  loadGoogleAnalytics();
                } else {
                  // Remove GA cookies if rejected
                  document.cookie.split(";").forEach(function(c) {
                    if (c.trim().startsWith('_ga')) {
                      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                    }
                  });
                }
              });
            }
          `}
        </Script>
        
        <CookieConsent />
        <Header />
        <PageTransition>
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
        </PageTransition>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

