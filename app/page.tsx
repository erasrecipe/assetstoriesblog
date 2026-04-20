import Link from 'next/link';
import Image from 'next/image';
import { getAllComparisonsMetadata, getAllCategories } from '@/lib/comparisons';
import { ComparisonMetadata } from '@/types/comparison';
import ComparisonCard from '@/components/ComparisonCard';
import SearchBar from '@/components/SearchBar';
import NewsletterSignup from '@/components/NewsletterSignup';
import { blogPosts } from '@/lib/blogPosts';

// Helper function to extract image from blog post content
function getPostImage(post: typeof blogPosts[0]): string | null {
  const imgMatch = post.content.match(/src="(https:\/\/assetstories\.com\/wp-content\/uploads\/[^"]+)"/);
  return imgMatch ? imgMatch[1] : null;
}

// Editor's picks - specific articles
const editorsPicks = blogPosts.filter(p => 
  [
    'financial-planning-process',
    'how-compound-interest-works',
    'best-real-estate-investing-books',
    'best-investing-quotes-warren-buffett',
    'is-silver-a-good-investment-in-2026',
    'how-to-start-investing-in-collectibles-in-2026',
    'why-alternative-assets-are-the-future-of-smart-investing'
  ].includes(p.slug)
).map(post => ({
  slug: post.slug,
  title: post.title,
  date: post.date,
  image: getPostImage(post)
}));

// Helper function to get category icon based on category name
function getCategoryIcon(category: string): string {
  const lowerCategory = category.toLowerCase();
  if (lowerCategory.includes('self-help') || lowerCategory.includes('productivity')) return '📖';
  if (lowerCategory.includes('finance') || lowerCategory.includes('wealth')) return '💰';
  if (lowerCategory.includes('literature') || lowerCategory.includes('classic')) return '📚';
  if (lowerCategory.includes('science') || lowerCategory.includes('tech')) return '🔬';
  if (lowerCategory.includes('business') || lowerCategory.includes('entrepreneur')) return '💼';
  if (lowerCategory.includes('psychology') || lowerCategory.includes('behavioral')) return '🧠';
  if (lowerCategory.includes('communication') || lowerCategory.includes('relationship')) return '💬';
  if (lowerCategory.includes('history') || lowerCategory.includes('philosophy')) return '🏛️';
  if (lowerCategory.includes('spiritual') || lowerCategory.includes('fiction')) return '✨';
  if (lowerCategory.includes('leadership')) return '👑';
  return '📕'; // Default icon
}

// Helper function to get category URL slug
function getCategorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
}

export default function HomePage() {
  const comparisons = getAllComparisonsMetadata();
  
  // Get recent comparisons (already sorted by date in getAllComparisonsMetadata)
  const recentComparisons = comparisons.slice(0, 6);
  
  // Get popular comparisons - manually curated for now
  // In the future, this could be based on views/analytics
  const popularSlugs = [
    'atomic-habits-vs-power-of-habit',
    'thinking-fast-and-slow-vs-predictably-irrational',
    'sapiens-vs-homo-deus',
    '48-laws-of-power-vs-art-of-war',
    'rich-dad-poor-dad-vs-intelligent-investor',
    'cant-hurt-me-vs-extreme-ownership'
  ];
  const popularComparisons = popularSlugs
    .map(slug => comparisons.find(c => c.slug === slug))
    .filter((comparison): comparison is ComparisonMetadata => comparison !== undefined)
    .slice(0, 6);
  
  const allCategories = getAllCategories();
  
  // Define all possible categories (including future ones)
  const allPossibleCategories = [
    'Self-Help & Personal Development',
    'Productivity & Time Management',
    'Business & Entrepreneurship',
    'Finance & Wealth Building',
    'Classic Literature & Fiction',
    'Psychology & Human Behavior',
    'History & Philosophy',
    'Communication & Leadership',
    'Science & Technology',
    'Health & Wellness',
  ];
  
  // Get category data with comparison counts, sorted by count
  const categoryData = allPossibleCategories
    .map(category => ({
      name: category,
      count: comparisons.filter(comp => comp.category === category).length,
      icon: getCategoryIcon(category),
      slug: getCategorySlug(category),
    }))
    .filter(cat => cat.count > 0) // Only show categories with comparisons
    .sort((a, b) => b.count - a.count)
    .slice(0, 4); // Show top 4 categories

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-visible">
        {/* One-line art background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/hero-line-art.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          role="img"
          aria-label="Decorative line art background"
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10" style={{ position: 'relative' }}>
          <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Welcome to <span className="gradient-text">Asset Stories</span>
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-light to-white mb-8 max-w-3xl mx-auto animate-fade-in tracking-wide" style={{ animationDelay: '0.1s', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>
            We Talk About Finance, Books and Artificial Intelligence
          </p>
          
          {/* Search Bar */}
          <div className="mb-12 animate-fade-in relative" style={{ animationDelay: '0.2s', zIndex: 100 }}>
            <SearchBar comparisons={comparisons} placeholder="Search your favorite books or authors..." />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link 
              href="/comparisons"
              className="bg-gradient-to-r from-gold to-gold-light text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Browse Comparisons
            </Link>
            <Link 
              href="/categories"
              className="bg-white text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Explore Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-4xl">⭐</span>
              <h2 className="text-4xl font-bold text-primary-dark dark:text-gold text-center">
                Editor's Picks
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {editorsPicks.map((post) => (
                <Link 
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="group block bg-gray-50 dark:bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-40 w-full bg-gray-200 dark:bg-gray-700">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-6xl">
                        📄
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-primary-dark dark:text-gold mb-2 group-hover:text-orange-600 dark:group-hover:text-gold-light transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link 
                href="/blog"
                className="inline-block bg-gradient-to-r from-gold to-gold-light text-primary-dark px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
              >
                View All Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Comparisons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-4xl font-bold text-primary-dark dark:text-gold text-center">
                Most Popular Comparisons
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 text-lg">
              Check Now
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularComparisons.map((comparison) => (
                <ComparisonCard key={comparison.slug} comparison={comparison} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Comparisons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-4xl font-bold text-primary-dark dark:text-gold text-center">
                Latest Additions
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 text-lg">
              Check Now
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentComparisons.map((comparison) => (
                <ComparisonCard key={comparison.slug} comparison={comparison} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/comparisons"
                className="inline-block bg-primary-dark dark:bg-gray-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                View All {comparisons.length} Comparisons →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Asset Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300">
            <h2 className="text-4xl font-bold text-primary-dark dark:text-gold mb-12 text-center">
              Why Choose Asset Stories?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🎯</div>
                <h3 className="text-2xl font-bold text-primary-dark dark:text-gold mb-3">Unbiased Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We provide objective, data-driven comparisons based on reviews, ratings, and comprehensive analysis.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📚</div>
                <h3 className="text-2xl font-bold text-primary-dark dark:text-gold mb-3">Expert Reviews</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our <a href="/about" className="text-primary-dark dark:text-gold hover:underline font-semibold">team of passionate readers</a> carefully analyzes each book to give you the full picture.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">⚡</div>
                <h3 className="text-2xl font-bold text-primary-dark dark:text-gold mb-3">Quick Decisions</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Save time with our side-by-side comparisons and clear winner recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-200 text-center mb-12 text-lg max-w-2xl mx-auto">
            Find book comparisons in your favorite genres
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categoryData.map((category) => (
              <Link 
                key={category.slug}
                href={`/comparisons?category=${encodeURIComponent(category.name)}`}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-gold/30 hover:border-gold dark:border-gold/40 dark:hover:border-gold-light shadow-md"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-dark dark:text-gold">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {category.count} comparison{category.count !== 1 ? 's' : ''}
                </p>
              </Link>
            ))}
          </div>
          
          {categoryData.length > 0 && (
            <div className="text-center mt-8">
              <Link 
                href="/categories"
                className="inline-block text-white hover:text-gold-light font-semibold text-lg transition-colors underline"
              >
                View All Categories →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300">
            <h2 className="text-4xl font-bold text-primary-dark dark:text-gold mb-4 text-center">
              Find Your Perfect Book in 4 Easy Steps
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 text-lg max-w-2xl mx-auto">
              Your journey to the perfect read starts here
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-primary-dark font-bold text-2xl mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-primary-dark dark:text-gold mb-2">Browse</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Explore our curated book comparisons across various genres
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-primary-dark font-bold text-2xl mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-primary-dark dark:text-gold mb-2">Compare</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Read detailed side-by-side comparisons with pros, cons, and ratings
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-primary-dark font-bold text-2xl mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-primary-dark dark:text-gold mb-2">Decide</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Make an informed choice based on our expert analysis
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-primary-dark font-bold text-2xl mx-auto mb-4 shadow-lg">
                  4
                </div>
                <h3 className="text-xl font-bold text-primary-dark dark:text-gold mb-2">Enjoy</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Purchase your chosen book and start reading with confidence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Dynamic */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary-darker via-primary-dark to-primary-light rounded-3xl shadow-2xl p-8 sm:p-12 text-white">
            <h2 className="text-4xl font-bold text-center mb-12 text-gold">
              Asset Stories by the Numbers
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-gold mb-2">{comparisons.length}</div>
                <p className="text-gray-200">Book Comparisons</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-gold mb-2">{allCategories.length}</div>
                <p className="text-gray-200">Categories</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-gold mb-2">100%</div>
                <p className="text-gray-200">Unbiased Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300">
            <h2 className="text-4xl font-bold text-primary-dark dark:text-gold mb-8 text-center">
              Meet the Founder
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Author Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gold via-gold-light to-primary-darker p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                    <img
                      src="/team/mehrab-musa.jpg"
                      alt="Mehrab Musa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Author Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-primary-dark dark:text-gold mb-2">
                  Mehrab Musa
                </h3>
                <p className="text-xl text-gold dark:text-gold-light font-semibold mb-4">
                  Developer & Owner
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Hey there! I&apos;m Mehrab, and I&apos;m absolutely obsessed with books and technology. As a software developer by day and a bookworm by night, I found myself stuck in a frustrating loop—spending more time trying to decide which book to read than actually reading! That&apos;s when Asset Stories was born.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I built this platform for people like you and me—readers who want honest, straightforward comparisons without the marketing fluff. My mission? Help you discover your next favorite book in minutes, not hours. Whether you&apos;re torn between <Link href="/compare/atomic-habits-vs-power-of-habit" className="text-primary-dark dark:text-gold hover:underline font-semibold">two self-help classics</Link> or can&apos;t decide which <Link href="/compare/1984-vs-brave-new-world" className="text-primary-dark dark:text-gold hover:underline font-semibold">dystopian novel</Link> to dive into, I&apos;ve got you covered. Let&apos;s make choosing your next read the easiest part of your day!
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                  <a href="https://www.facebook.com/share/17fid12Sst/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all" aria-label="Facebook">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/the_mehrab_musa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:scale-110 transition-all" aria-label="Instagram">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/the_mehrab_musa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-110 transition-all" aria-label="X (Twitter)">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.threads.com/@the_mehrab_musa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-110 transition-all" aria-label="Threads">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 192 192">
                      <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.78 9.452c5.73-8.695 14.686-10.653 21.515-10.653h.227c6.72.076 12.15 2.23 16.164 6.407 3.046 3.174 5.176 7.65 6.354 13.362a90.67 90.67 0 0 0-11.75-.792c-22.206 0-37.086 12.29-37.086 30.603 0 8.318 3.033 15.327 8.773 20.273 5.74 4.947 13.578 7.665 22.064 7.665 11.12 0 20.406-4.093 26.855-11.839 5.486-6.578 8.83-15.73 9.935-27.23 7.428 4.05 12.928 9.916 15.687 16.736 2.27 5.606 2.924 13.041 1.942 22.1-2.095 19.36-16.236 30.725-37.816 30.726-10.147 0-19.926-3.025-28.343-8.765-8.418-5.74-14.963-13.94-18.958-23.714-3.995-9.775-5.99-20.924-5.778-32.28.21-11.356 2.65-22.394 7.07-31.99 4.418-9.594 10.76-17.494 18.386-22.878 7.625-5.384 16.52-8.076 25.767-7.792 15.073.462 27.268 5.918 35.315 15.787 6.153 7.545 10.01 17.11 11.656 28.286l15.134-2.065c-2.012-13.61-6.877-25.54-14.71-35.105C123.135 10.867 108.21 4.41 90.147 3.88c-11.83-.349-23.253 2.933-33.104 9.505-9.85 6.572-17.62 16.05-22.54 27.447-4.918 11.397-7.74 24.35-8.176 37.523-.436 13.173 1.483 26.246 5.566 37.869 4.083 11.624 11.012 21.638 20.08 29.006C61.04 153.598 72.31 158 84.583 158h.09c27.694-.016 47.36-15.623 50.04-39.683 1.273-11.414.335-20.625-2.874-28.164-2.91-6.838-7.627-12.685-13.913-17.232a62.816 62.816 0 0 1 3.61 16.067Zm-45.116 41.318c-5.85 0-10.84-1.565-14.45-4.53-3.61-2.966-5.415-7.04-5.415-12.19 0-10.808 8.81-16.29 22.82-16.29 4.26 0 8.26.424 11.94 1.264-1.02 10.023-3.783 17.72-8.21 22.898-4.428 5.178-10.183 7.776-17.147 7.776l.462.072Z"/>
                    </svg>
                  </a>
                  <a href="https://www.pinterest.com/mmehrabmusa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:scale-110 transition-all" aria-label="Pinterest">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 384 512">
                      <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/>
                    </svg>
                  </a>
                  <a href="https://www.goodreads.com/user/show/154523680-md-mehrab-musa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-amber-700 dark:hover:text-amber-500 hover:scale-110 transition-all" aria-label="Goodreads">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M299.9 191.2c5.1 37.3-4.7 79-35.9 100.7-22.3 15.5-52.8 14.1-70.8 5.7-37.1-17.3-49.5-58.6-46.8-97.2 4.3-60.9 40.9-87.9 75.3-87.5 46.9-.2 71.8 31.8 78.2 78.3zM448 88v336c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V88c0-30.9 25.1-56 56-56h336c30.9 0 56 25.1 56 56zM330 313.2s-.1-34-.1-217.3h-29v40.3c-.8.3-1.2-.5-1.6-1.2-9.6-20.7-35.9-46.3-76-46-51.9.4-87.2 31.2-100.6 77.8-4.3 14.9-5.8 30.1-5.5 45.6 1.7 77.9 45.1 117.8 112.4 115.2 28.9-1.1 54.5-17 69-45.2.5-1 1.1-1.9 1.7-2.9.2.1.4.1.6.2.3 3.8.2 30.7.1 34.5-.2 14.8-2 29.5-7.2 43.5-7.8 21-22.3 34.7-44.5 39.5-17.8 3.9-35.6 3.8-53.2-1.2-21.5-6.1-36.5-19-41.1-41.8-.3-1.6-1.3-1.3-2.3-1.3h-26.8c.8 10.6 3.2 20.3 8.5 29.2 24.2 40.5 82.7 48.5 128.2 37.4 49.9-12.3 67.3-54.9 67.4-106.3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <NewsletterSignup />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 text-center transition-colors duration-300">
            <h2 className="text-4xl font-bold text-primary-dark dark:text-gold mb-4">
              Ready to Find Your Perfect Book?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Stop wasting time on books that don&apos;t deliver. Let us help you make the right choice every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/comparisons"
                className="bg-gradient-to-r from-gold to-gold-light text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Browse All Comparisons
              </Link>
              <Link 
                href="/contact"
                className="bg-primary-dark dark:bg-gray-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Request a Comparison
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
