# Books War - We Compare Books

A world-class book comparison website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Dynamic Comparison Pages**: Auto-generate comparison pages from JSON data
- **SEO Optimized**: Comprehensive metadata, structured data, sitemap, and robots.txt
- **Pixel-Perfect Design**: Responsive layout matching the reference template
- **Scalable Architecture**: Built to handle 500+ comparisons
- **Performance Optimized**: Static generation, image optimization, and fast loading
- **TypeScript**: Fully typed for better development experience
- **Modern Stack**: Next.js 14 App Router, React 18, Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── compare/[slug]/      # Dynamic comparison pages
│   ├── comparisons/         # All comparisons listing
│   ├── categories/          # Category listing
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── robots.ts            # Robots.txt
│   └── manifest.ts          # PWA manifest
│
├── components/              # React components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── BookCard.tsx        # Book display card
│   ├── ComparisonCard.tsx  # Comparison preview card
│   ├── ComparisonTable.tsx # Feature comparison table
│   ├── ProsConsSection.tsx # Strengths/weaknesses
│   ├── QuotesSection.tsx   # Memorable quotes
│   ├── WhyReadSection.tsx  # Reading recommendations
│   ├── VerdictSection.tsx  # Final verdict
│   └── StructuredData.tsx  # JSON-LD schema
│
├── data/                    # JSON data files
│   └── comparisons/        # Comparison JSON files
│       └── *.json          # Individual comparisons
│
├── lib/                     # Utility functions
│   └── comparisons.ts      # Data fetching utilities
│
├── types/                   # TypeScript types
│   └── comparison.ts       # Type definitions
│
└── public/                  # Static assets
    └── images/             # Book covers, icons, etc.
```

## 📝 Adding New Comparisons

1. Create a new JSON file in `data/comparisons/`:

```json
{
  "slug": "book1-vs-book2",
  "title": "Book 1 vs Book 2",
  "metaDescription": "Comprehensive comparison...",
  "lastUpdated": "2026-01-27",
  "category": "Category Name",
  "book1": { /* book details */ },
  "book2": { /* book details */ },
  "comparison": { /* comparison data */ },
  "quotes": { /* memorable quotes */ },
  "whyRead": { /* reading reasons */ },
  "verdict": { /* final verdict */ }
}
```

2. The page will automatically be generated at build time!

## 🎨 Design System

### Colors
- **Primary Dark**: `#1a2b4a` - Main brand color
- **Primary Darker**: `#6b0f1a` - Accent color
- **Gold**: `#d4af37` - Highlight color
- **Gold Light**: `#f4d03f` - Lighter accent

### Typography
- **Headings**: Georgia serif font family
- **Body**: System font stack for optimal performance

## 🔍 SEO Features

- ✅ Dynamic metadata generation
- ✅ Open Graph tags
- ✅ Twitter Card support
- ✅ Structured data (JSON-LD) for books and articles
- ✅ Automatic sitemap generation
- ✅ Robots.txt configuration
- ✅ PWA manifest
- ✅ Canonical URLs
- ✅ Breadcrumb schema

## 🏗️ Scalability

The architecture is designed to handle 500+ comparisons efficiently:

- **Static Generation**: All pages are pre-rendered at build time
- **JSON-based Content**: Easy to manage and version control
- **Type Safety**: TypeScript prevents runtime errors
- **Modular Components**: Reusable and maintainable
- **Optimized Images**: Next.js Image component for automatic optimization

## 👥 Team

- **Mehrab Musa** - Developer & Owner
- **Rufatul Islam** - Designer & Article Writer
- **Safial Muntasir** - Management & Article Writer
- **Shoyaib Dipto** - Budgeting & Article Writer
- **Abdullah Al Mamun** - Planner & Article Writer

## 📄 License

© 2026 Books War. All rights reserved.

## 🤝 Contributing

To add new comparisons or improve the site:

1. Add your comparison JSON to `data/comparisons/`
2. Test locally with `npm run dev`
3. Build and verify with `npm run build`
4. Deploy to your hosting platform

## 🌐 Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting platform**

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📞 Contact

- Website: [bookswar.com](https://bookswar.com)
- Email: contact@bookswar.com
