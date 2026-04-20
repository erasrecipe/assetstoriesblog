'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ComparisonMetadata } from '@/types/comparison';
import ComparisonCard from '@/components/ComparisonCard';
import SearchBar from '@/components/SearchBar';

interface ComparisonsClientProps {
  comparisons: ComparisonMetadata[];
  categories: string[];
}

const INITIAL_LOAD = 30; // Show 30 articles initially
const LOAD_MORE_INCREMENT = 30; // Load 30 more each time

export default function ComparisonsClient({ comparisons, categories }: ComparisonsClientProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_LOAD);
  
  // Set initial category from URL parameter
  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam, categories]);

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(INITIAL_LOAD);
  }, [selectedCategory]);

  const filteredComparisons = useMemo(() => {
    if (selectedCategory === 'all') {
      return comparisons;
    }
    return comparisons.filter(comp => comp.category === selectedCategory);
  }, [selectedCategory, comparisons]);

  // Get visible comparisons based on current count
  const visibleComparisons = useMemo(() => {
    return filteredComparisons.slice(0, visibleCount);
  }, [filteredComparisons, visibleCount]);

  const hasMore = visibleCount < filteredComparisons.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + LOAD_MORE_INCREMENT, filteredComparisons.length));
  };

  // Infinite scroll: Load more when user scrolls near bottom
  useEffect(() => {
    const handleScroll = () => {
      if (visibleCount >= filteredComparisons.length) return;
      
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 500; // 500px before bottom
      
      if (scrollPosition >= threshold) {
        setVisibleCount(prev => Math.min(prev + LOAD_MORE_INCREMENT, filteredComparisons.length));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount, filteredComparisons.length]);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-amber-50/40 dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300 border border-amber-100 dark:border-gray-700">
          <h1 className="text-5xl font-bold text-primary-dark dark:text-gold mb-4 text-center">
            All Book Comparisons
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-8 text-lg max-w-2xl mx-auto">
            Explore our comprehensive collection of book comparisons. Each comparison provides detailed analysis to help you choose the perfect book.
          </p>
          
          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar comparisons={comparisons} placeholder="Find your next great read..." />
          </div>
          
          {/* Category Filter - Dropdown on mobile, buttons on desktop */}
          <div className="mb-6">
            {/* Mobile Dropdown */}
            <div className="block sm:hidden">
              <label htmlFor="category-select" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Filter by Category:
              </label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-2 border-gold/30 focus:border-gold focus:outline-none font-medium"
              >
                <option value="all">All Categories ({comparisons.length})</option>
                {categories.map((category) => {
                  const count = comparisons.filter(c => c.category === category).length;
                  return (
                    <option key={category} value={category}>
                      {category} ({count})
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden sm:flex flex-wrap gap-2 justify-center items-center">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">Filter:</span>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-gold text-primary-dark shadow-md'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                All ({comparisons.length})
              </button>
              
              {categories.map((category) => {
                const count = comparisons.filter(c => c.category === category).length;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-gold text-primary-dark shadow-md'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              Showing <span className="font-bold text-primary-dark dark:text-gold">{visibleComparisons.length}</span> of <span className="font-bold text-primary-dark dark:text-gold">{filteredComparisons.length}</span> comparison{filteredComparisons.length !== 1 ? 's' : ''}
              {selectedCategory !== 'all' && (
                <span> in <span className="font-bold text-primary-dark dark:text-gold">{selectedCategory}</span></span>
              )}
            </p>
          </div>
          
          {/* Comparisons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleComparisons.map((comparison) => (
              <ComparisonCard key={comparison.slug} comparison={comparison} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="bg-gradient-to-r from-gold to-gold-light text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              >
                Load More ({filteredComparisons.length - visibleCount} remaining)
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                or scroll down to load more automatically
              </p>
            </div>
          )}

          {filteredComparisons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-xl mb-4">
                No comparisons found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-gradient-to-r from-gold to-gold-light text-primary-dark px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all"
              >
                View All Comparisons
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
