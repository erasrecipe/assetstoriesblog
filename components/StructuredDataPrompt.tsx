'use client';

interface FAQ {
  question: string;
  answer: string;
}

interface PromptData {
  title: string;
  description: string;
  keyword: string;
  date: string;
  category: string;
  shortPrompts: { prompt: string }[];
  longPrompts: { prompt: string }[];
  faqs: FAQ[];
}

export default function StructuredDataPrompt({ article }: { article: PromptData }) {
  const baseUrl = 'https://assetstories.com';
  const articleUrl = `${baseUrl}/prompts/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-')}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "keywords": article.keyword,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Organization",
      "name": "Asset Stories"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Asset Stories",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "articleSection": article.category,
    "wordCount": article.shortPrompts.length + article.longPrompts.length,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}