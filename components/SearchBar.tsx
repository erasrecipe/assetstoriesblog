'use client';

import { useState, useEffect, useRef } from 'react';
import { ComparisonMetadata } from '@/types/comparison';
import Link from 'next/link';

interface SearchBarProps {
  comparisons: ComparisonMetadata[];
  placeholder?: string;
}

export default function SearchBar({ comparisons, placeholder = "Search books or comparisons..." }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<ComparisonMetadata[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);

  // Search logic
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = comparisons.filter(comparison => 
      comparison.book1Title.toLowerCase().includes(query) ||
      comparison.book2Title.toLowerCase().includes(query) ||
      comparison.title.toLowerCase().includes(query) ||
      comparison.category.toLowerCase().includes(query)
    );

    setResults(filtered.slice(0, 10)); // Limit to 10 results
    setIsOpen(filtered.length > 0);
  }, [searchQuery, comparisons]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) {
      // Escape to clear when not open
      if (e.key === 'Escape') {
        setSearchQuery('');
        setIsOpen(false);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          window.location.href = `/compare/${results[selectedIndex].slug}`;
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <mark key={index} className="bg-gold/30 dark:bg-gold/20 text-primary-dark dark:text-gold font-semibold">{part}</mark> : 
        part
    );
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto z-50">
      {/* Search Input */}
      <div className="relative z-10">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full px-6 py-4 pl-14 rounded-full bg-white/90 dark:bg-gray-900/30 backdrop-blur-xl border-2 border-gray-300 focus:border-gold dark:border-white/20 dark:focus:border-gold-light/60 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/60 focus:outline-none shadow-2xl transition-all duration-300 focus:bg-white dark:focus:bg-gray-900/40"
          style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
          aria-label="Search books and comparisons"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls="search-results"
          aria-activedescendant={selectedIndex >= 0 ? `search-result-${selectedIndex}` : undefined}
        />
        <svg 
          className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/90 dark:text-white/80"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        
        {/* Clear button */}
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setIsOpen(false);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-white/70 dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div 
          id="search-results"
          role="listbox"
          className="absolute z-[100] w-full mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-white/40 dark:border-gray-700/40 max-h-96 overflow-y-auto"
          style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
          <div className="p-2">
            <p className="text-xs text-gray-500 dark:text-gray-400 px-4 py-2 font-semibold">
              Found {results.length} result{results.length !== 1 ? 's' : ''} (Use arrow keys to navigate, Enter to select)
            </p>
            {results.map((comparison, index) => (
              <Link
                key={comparison.slug}
                id={`search-result-${index}`}
                role="option"
                aria-selected={selectedIndex === index}
                href={`/compare/${comparison.slug}`}
                onClick={() => {
                  setIsOpen(false);
                  setSearchQuery('');
                  setSelectedIndex(-1);
                }}
                className={`block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors group ${
                  selectedIndex === index ? 'bg-gray-100 dark:bg-gray-700 ring-2 ring-gold' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gold dark:group-hover:text-gold-light transition-colors">
                      {highlightMatch(comparison.book1Title, searchQuery)} 
                      <span className="text-gold mx-1">vs</span> 
                      {highlightMatch(comparison.book2Title, searchQuery)}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {comparison.category}
                    </p>
                  </div>
                  <svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-gold transition-colors flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          
          {results.length === 10 && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-3 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Showing first 10 results. Keep typing to refine your search.
              </p>
            </div>
          )}
        </div>
      )}

      {/* No Results */}
      {isOpen && searchQuery && results.length === 0 && (
        <div className="absolute z-[100] w-full mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-white/40 dark:border-gray-700/40 p-6 text-center"
          style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
          <p className="text-gray-600 dark:text-gray-400">
            No comparisons found for "<span className="font-semibold text-primary-dark dark:text-gold">{searchQuery}</span>"
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Try different keywords or browse all comparisons
          </p>
        </div>
      )}
    </div>
  );
}
