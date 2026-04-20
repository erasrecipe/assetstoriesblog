'use client';

import { useState } from 'react';

interface QuotesSectionProps {
  book1Title: string;
  book2Title: string;
  book1Quotes: string[];
  book2Quotes: string[];
}

export default function QuotesSection({
  book1Title,
  book2Title,
  book1Quotes,
  book2Quotes,
}: QuotesSectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyQuote = async (quote: string, bookTitle: string, index: number, bookNumber: number) => {
    const textToCopy = `"${quote}" - ${bookTitle}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedIndex(`${bookNumber}-${index}`);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      {/* Book 1 Quotes */}
      <div className="bg-amber-50/30 dark:bg-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-amber-100/50 dark:border-gray-600">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-dark dark:text-gold mb-6">{book1Title}</h3>
        <div className="space-y-6">
          {book1Quotes.map((quote, index) => (
            <div key={index} className="relative group">
              <blockquote 
                className="border-l-4 border-primary-darker dark:border-gold pl-4 sm:pl-6 py-2 pr-10 italic text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg hover:border-l-8 transition-all duration-300"
              >
                💭 &quot;{quote}&quot;
              </blockquote>
              <button
                onClick={() => copyQuote(quote, book1Title, index, 1)}
                className="absolute top-2 right-2 p-2 rounded-lg bg-amber-50 dark:bg-gray-600 hover:bg-gold/20 dark:hover:bg-gold/30 transition-all opacity-0 group-hover:opacity-100 shadow-md hover:shadow-lg border border-amber-200 dark:border-gray-500"
                title="Copy quote with book name"
              >
                {copiedIndex === `1-${index}` ? (
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Book 2 Quotes */}
      <div className="bg-amber-50/30 dark:bg-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-amber-100/50 dark:border-gray-600">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-dark dark:text-gold mb-6">{book2Title}</h3>
        <div className="space-y-6">
          {book2Quotes.map((quote, index) => (
            <div key={index} className="relative group">
              <blockquote 
                className="border-l-4 border-primary-dark dark:border-gold-light pl-4 sm:pl-6 py-2 pr-10 italic text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg hover:border-l-8 transition-all duration-300"
              >
                💭 &quot;{quote}&quot;
              </blockquote>
              <button
                onClick={() => copyQuote(quote, book2Title, index, 2)}
                className="absolute top-2 right-2 p-2 rounded-lg bg-amber-50 dark:bg-gray-600 hover:bg-gold/20 dark:hover:bg-gold/30 transition-all opacity-0 group-hover:opacity-100 shadow-md hover:shadow-lg border border-amber-200 dark:border-gray-500"
                title="Copy quote with book name"
              >
                {copiedIndex === `2-${index}` ? (
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
