import { getAllComparisonsMetadata, getAllCategories } from '@/lib/comparisons';
import ComparisonsClient from '@/components/ComparisonsClient';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'All Comparisons - Books, Finance & AI Reviews',
  description: 'Explore our complete library of expert comparisons! Find your next perfect read with detailed side-by-side analysis, ratings, and honest insights.',
  openGraph: {
    title: 'All Comparisons | Asset Stories',
    description: 'Explore our complete library of expert comparisons!',
  },
};

export default function ComparisonsPage() {
  const allComparisons = getAllComparisonsMetadata();
  
  // Define all possible categories (same as categories page)
  const allCategories = [
    'Fiction & Literature',
    'Self-Help & Personal Development',
    'Business & Leadership',
    'Romance & Young Adult',
    'Finance & Investing',
    'Sales & Marketing',
    'Technology & Innovation',
    'Psychology & Human Behavior',
    'History & Philosophy',
    'Biography & Memoir',
    'Productivity & Time Management',
    'Health & Wellness',
    'Cookbooks & Food',
    'Parenting & Child Development',
  ];

  return (
    <Suspense fallback={
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-2xl text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    }>
      <ComparisonsClient comparisons={allComparisons} categories={allCategories} />
    </Suspense>
  );
}
