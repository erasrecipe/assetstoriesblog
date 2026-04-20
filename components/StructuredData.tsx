import { ComparisonData } from '@/types/comparison';

interface StructuredDataProps {
  data: ComparisonData;
}

export default function StructuredData({ data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // Article Schema
      {
        '@type': 'Article',
        headline: data.title,
        description: data.metaDescription,
        datePublished: data.lastUpdated,
        dateModified: data.lastUpdated,
        author: [
          {
            '@type': 'Person',
            name: 'Mehrab Musa',
          },
          {
            '@type': 'Person',
            name: 'Rufatul Islam',
          },
          {
            '@type': 'Person',
            name: 'Safial Muntasir',
          },
          {
            '@type': 'Person',
            name: 'Shoyaib Dipto',
          },
          {
            '@type': 'Person',
            name: 'Abdullah Al Mamun',
          },
        ],
        publisher: {
          '@type': 'Organization',
          name: 'Asset Stories',
          url: 'https://assetstories.com',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://assetstories.com/compare/${data.slug}`,
        },
      },
      // Book 1 Schema
      {
        '@type': 'Book',
        name: data.book1.title,
        author: {
          '@type': 'Person',
          name: data.book1.author,
        },
        isbn: data.book1.isbn,
        numberOfPages: data.book1.pages,
        datePublished: data.book1.publishedYear.toString(),
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: data.book1.rating,
          reviewCount: data.book1.ratingCount,
          bestRating: 5,
          worstRating: 1,
        },
        offers: {
          '@type': 'Offer',
          price: data.book1.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: data.book1.amazonUrl,
        },
      },
      // Book 2 Schema
      {
        '@type': 'Book',
        name: data.book2.title,
        author: {
          '@type': 'Person',
          name: data.book2.author,
        },
        isbn: data.book2.isbn,
        numberOfPages: data.book2.pages,
        datePublished: data.book2.publishedYear.toString(),
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: data.book2.rating,
          reviewCount: data.book2.ratingCount,
          bestRating: 5,
          worstRating: 1,
        },
        offers: {
          '@type': 'Offer',
          price: data.book2.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: data.book2.amazonUrl,
        },
      },
      // Breadcrumb Schema
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://assetstories.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Comparisons',
            item: 'https://assetstories.com/comparisons',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: data.title,
            item: `https://assetstories.com/compare/${data.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
