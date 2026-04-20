'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [financeMenuOpen, setFinanceMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Disclaimer Bar */}
      <div className="bg-amber-50 dark:bg-amber-950/50 border-b border-amber-200 dark:border-amber-800 py-1 px-4 text-center">
        <p className="text-xs sm:text-xs text-amber-700 dark:text-amber-300">
          <span className="font-semibold">Disclaimer:</span> Investing involves risk. You should always do your own research. We are not a financial advisor.
        </p>
      </div>
      <header id="navigation" className="md:sticky md:top-0 z-50 bg-gradient-to-r from-white via-amber-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 backdrop-blur-md shadow-lg transition-colors duration-300 no-print border-b-2 border-amber-300 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold" style={{ fontFamily: "'Astra', serif" }}>
              <span className="text-orange-700 dark:text-gold-light">Asset</span>
              <span className="text-amber-600 dark:text-gold"> Stories</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`text-sm font-medium hover:scale-105 transition-all duration-300 ${
                pathname === '/' 
                  ? 'text-orange-600 dark:text-gold border-b-2 border-orange-600 dark:border-gold' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-gold'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/comparisons" 
              className={`text-sm font-medium hover:scale-105 transition-all duration-300 ${
                pathname === '/comparisons' 
                  ? 'text-orange-600 dark:text-gold border-b-2 border-orange-600 dark:border-gold' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-gold'
              }`}
            >
              Comparisons
            </Link>
            <Link 
              href="/categories" 
              className={`text-sm font-medium hover:scale-105 transition-all duration-300 ${
                pathname === '/categories' 
                  ? 'text-orange-600 dark:text-gold border-b-2 border-orange-600 dark:border-gold' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-gold'
              }`}
            >
              Categories
            </Link>
            {/* Blog Dropdown */}
            <div 
              className="relative h-full"
              onMouseEnter={() => setFinanceMenuOpen(true)}
              onMouseLeave={() => setFinanceMenuOpen(false)}
            >
              <button 
                className={`text-sm font-medium hover:scale-105 transition-all duration-300 flex items-center gap-1 h-full ${
                  pathname?.startsWith('/finance') || pathname?.startsWith('/blog')
                    ? 'text-orange-600 dark:text-gold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-gold'
                }`}
              >
                Blog 
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className="absolute top-full left-0 pt-1"
                onMouseEnter={() => setFinanceMenuOpen(true)}
                onMouseLeave={() => setFinanceMenuOpen(false)}
              >
                {financeMenuOpen && (
                  <div className="w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                    <Link 
                      href="/blog" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-gold"
                      onClick={() => setFinanceMenuOpen(false)}
                    >
                      All Articles
                    </Link>
                    <Link 
                      href="/faq" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-gold"
                      onClick={() => setFinanceMenuOpen(false)}
                    >
                      Finance FAQ
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <Link 
              href="/about" 
              className={`text-sm font-medium hover:scale-105 transition-all duration-300 ${
                pathname === '/about' 
                  ? 'text-orange-600 dark:text-gold border-b-2 border-orange-600 dark:border-gold' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-gold'
              }`}
            >
              About
            </Link>
            <DarkModeToggle />
            <Link 
              href="/contact" 
              className={`px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all ${
                pathname === '/contact'
                  ? 'bg-orange-600 dark:bg-gold text-white ring-2 ring-orange-400 dark:ring-gold-light'
                  : 'bg-gradient-to-r from-gold to-gold-light text-primary-dark'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Dark mode toggle for mobile */}
          <div className="md:hidden flex items-center space-x-3">
            <DarkModeToggle />
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-darker dark:hover:text-gold hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`text-sm font-medium ${
                  pathname === '/' 
                    ? 'text-orange-600 dark:text-gold font-bold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-gold'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {pathname === '/' && '→ '}Home
              </Link>
              <Link 
                href="/comparisons" 
                className={`text-sm font-medium ${
                  pathname === '/comparisons' 
                    ? 'text-orange-600 dark:text-gold font-bold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-gold'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {pathname === '/comparisons' && '→ '}Comparisons
              </Link>
              <Link 
                href="/categories" 
                className={`text-sm font-medium ${
                  pathname === '/categories' 
                    ? 'text-orange-600 dark:text-gold font-bold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-gold'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {pathname === '/categories' && '→ '}Categories
              </Link>
              <Link 
                href="/blog" 
                className={`text-sm font-medium ${
                  pathname === '/blog' || pathname?.startsWith('/blog')
                    ? 'text-orange-600 dark:text-gold font-bold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-gold'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {pathname === '/blog' || pathname?.startsWith('/blog') ? '→ ' : ''}All Articles
              </Link>
              <Link 
                href="/faq" 
                className={`text-sm font-medium ${
                  pathname === '/faq' 
                    ? 'text-orange-600 dark:text-gold font-bold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-gold'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {pathname === '/faq' && '→ '}Finance FAQ
              </Link>
              <Link 
                href="/about" 
                className={`text-sm font-medium ${
                  pathname === '/about' 
                    ? 'text-orange-600 dark:text-gold font-bold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-gold'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {pathname === '/about' && '→ '}About
              </Link>
              <Link 
                href="/contact" 
                className={`px-6 py-2 rounded-full font-bold text-center ${
                  pathname === '/contact'
                    ? 'bg-orange-600 dark:bg-gold text-white ring-2 ring-orange-400 dark:ring-gold-light'
                    : 'bg-gradient-to-r from-gold to-gold-light text-primary-dark'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
}
