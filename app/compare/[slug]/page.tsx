import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllComparisonSlugs, getComparisonBySlug, getRelatedComparisons } from '@/lib/comparisons';
import BookCard from '@/components/BookCard';
import ComparisonTable from '@/components/ComparisonTable';
import ProsConsSection from '@/components/ProsConsSection';
import QuotesSection from '@/components/QuotesSection';
import WhyReadSection from '@/components/WhyReadSection';
import VerdictSection from '@/components/VerdictSection';
import StructuredData from '@/components/StructuredData';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComparisonCard from '@/components/ComparisonCard';
import PrintButton from '@/components/PrintButton';
import SocialShare from '@/components/SocialShare';
import RelatedComparisons from '@/components/RelatedComparisons';

interface ComparisonPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths at build time
export async function generateStaticParams() {
  const slugs = getAllComparisonSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ComparisonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getComparisonBySlug(slug);
  
  if (!data) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: data.title,
    description: data.metaDescription,
    keywords: [
      data.book1.title,
      data.book2.title,
      data.book1.author,
      data.book2.author,
      'book comparison',
      'book review',
      data.category,
    ],
    authors: [
      { name: data.book1.author },
      { name: data.book2.author },
    ],
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      type: 'article',
      publishedTime: data.lastUpdated,
      authors: [data.book1.author, data.book2.author],
      tags: [data.category, data.book1.title, data.book2.title],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.metaDescription,
    },
    alternates: {
      canonical: `/compare/${slug}`,
    },
  };
}

export default async function ComparisonPage({ params }: ComparisonPageProps) {
  const { slug } = await params;
  let data;
  
  try {
    data = getComparisonBySlug(slug);
  } catch (error) {
    notFound();
  }

  // Get related comparisons from same category
  const relatedComparisons = getRelatedComparisons(slug, 3);

  return (
    <>
      <StructuredData data={data} />
      
      <article className="min-h-screen py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Visual Breadcrumbs */}
          <div className="no-print">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Comparisons', href: '/comparisons' },
                { label: data.title, href: `/compare/${slug}` },
              ]}
            />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transition-colors duration-300">
            
            {/* Hero Section with Book Cards */}
            <section className="bg-gradient-to-br from-primary-darker via-primary-dark to-primary-light py-2 sm:py-8 px-2 sm:px-6 relative">
              {/* Last Updated Date */}
              <p className="hidden sm:block absolute top-6 right-6 text-white/70 text-xs sm:text-sm z-10">
                Last updated: {new Date(data.lastUpdated).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              
              <h1 className="text-center text-white text-base sm:text-2xl lg:text-3xl font-bold leading-tight mt-1 sm:mt-4 mb-2 sm:mb-8 px-2">
                {data.title}
              </h1>
              
              {/* Print Button */}
              <div className="hidden sm:block">
                <PrintButton />
              </div>
              
              <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-8 relative scale-95 sm:scale-95 pb-1 sm:pb-0">
                {/* Book 1 */}
                <BookCard book={data.book1} />
                
                {/* VS Badge */}
                <div className="relative z-10 -my-1 sm:my-0">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-primary-dark font-bold text-base sm:text-xl shadow-2xl border-2 sm:border-3 border-white">
                    VS
                  </div>
                </div>
                
                {/* Book 2 */}
                <BookCard book={data.book2} />
              </div>
            </section>

            {/* Main Content */}
            <div className="py-4 sm:py-12 px-2 sm:px-8 lg:px-12">
              
              {/* Quick Comparison Table */}
              <section className="mb-6 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-gold mb-4 sm:mb-6 text-center relative pb-3">
                  Quick Comparison
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-darker to-gold"></span>
                </h2>
                <ComparisonTable data={data.comparison.table} book1Title={data.book1.title} book2Title={data.book2.title} />
              </section>

              {/* Strengths & Weaknesses */}
              <section className="mb-6 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-gold mb-4 sm:mb-6 text-center relative pb-3">
                  Strengths & Weaknesses
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-darker to-gold"></span>
                </h2>
                <ProsConsSection
                  book1Title={data.book1.title}
                  book2Title={data.book2.title}
                  book1Strengths={data.comparison.book1Strengths}
                  book1Weaknesses={data.comparison.book1Weaknesses}
                  book2Strengths={data.comparison.book2Strengths}
                  book2Weaknesses={data.comparison.book2Weaknesses}
                />
              </section>

              {/* Memorable Quotes */}
              <section className="mb-6 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-gold mb-4 sm:mb-6 text-center relative pb-3">
                  Memorable Quotes
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-darker to-gold"></span>
                </h2>
                <QuotesSection
                  book1Title={data.book1.title}
                  book2Title={data.book2.title}
                  book1Quotes={data.quotes.book1}
                  book2Quotes={data.quotes.book2}
                />
              </section>

              {/* Why Read This? */}
              <section className="mb-6 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-gold mb-4 sm:mb-6 text-center relative pb-3">
                  Why Read This?
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-darker to-gold"></span>
                </h2>
                <WhyReadSection
                  book1Title={data.book1.title}
                  book2Title={data.book2.title}
                  book1Reasons={data.whyRead.book1}
                  book2Reasons={data.whyRead.book2}
                />
              </section>

              {/* The Verdict */}
              <VerdictSection verdict={data.verdict} />

              {/* Social Share Section */}
              <section className="mt-12 no-print">
                <SocialShare 
                  title={data.title}
                  url={`https://assetstories.com/compare/${slug}`}
                />
              </section>

              {/* Related Comparisons Section */}
              {relatedComparisons.length > 0 && (
                <div className="no-print">
                  <RelatedComparisons comparisons={relatedComparisons} />
                </div>
              )}

              {/* Related Content Section */}
              <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 no-print">
                <h2 className="text-2xl font-bold text-primary-dark dark:text-gold mb-6 text-center">
                  Explore More Comparisons
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Browse all our book comparisons across different genres
                    </p>
                    <a href="/comparisons" className="inline-block bg-primary-dark dark:bg-gold text-white dark:text-primary-dark px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                      All Comparisons
                    </a>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Explore comparisons by category: <a href="/categories" className="text-primary-dark dark:text-gold hover:underline font-semibold">{data.category}</a> and more
                    </p>
                    <a href="/categories" className="inline-block bg-primary-dark dark:bg-gold text-white dark:text-primary-dark px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                      Browse Categories
                    </a>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Have a comparison request? We'd love to hear from you!
                    </p>
                    <a href="/contact" className="inline-block bg-primary-dark dark:bg-gold text-white dark:text-primary-dark px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                      Request Comparison
                    </a>
                  </div>
                </div>
              </section>
              
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
