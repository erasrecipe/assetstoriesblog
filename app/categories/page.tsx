import { Metadata } from 'next';
import Link from 'next/link';
import { getAllCategories, getComparisonsByCategory } from '@/lib/comparisons';

export const metadata: Metadata = {
  title: 'Explore Topics - Finance, Books & AI',
  description: 'Discover content organized by topic! Browse Finance, Books, Artificial Intelligence, and more.',
  openGraph: {
    title: 'Explore Topics | Asset Stories',
    description: 'Discover content organized by topic! Browse Finance, Books, AI, and more.',
  },
};

// Helper function to get emoji for category
function getCategoryEmoji(category: string): string {
  const lowerCategory = category.toLowerCase();
  if (lowerCategory.includes('fiction') || lowerCategory.includes('literature')) return '📚';
  if (lowerCategory.includes('self-help') || lowerCategory.includes('personal development')) return '🦋';
  if (lowerCategory.includes('business') && lowerCategory.includes('leadership')) return '💼';
  if (lowerCategory.includes('business') && lowerCategory.includes('marketing')) return '📊';
  if (lowerCategory.includes('romance') && lowerCategory.includes('young adult')) return '💕';
  if (lowerCategory.includes('romance') && !lowerCategory.includes('young adult')) return '💖';
  if (lowerCategory.includes('finance') && lowerCategory.includes('investing')) return '💰';
  if (lowerCategory.includes('personal finance')) return '💵';
  if (lowerCategory.includes('sales') || lowerCategory.includes('marketing')) return '📊';
  if (lowerCategory.includes('technology') || lowerCategory.includes('innovation')) return '💻';
  if (lowerCategory.includes('psychology') || lowerCategory.includes('behavior')) return '🧠';
  if (lowerCategory.includes('history') || lowerCategory.includes('philosophy')) return '🏛️';
  if (lowerCategory.includes('biography') || lowerCategory.includes('memoir')) return '📝';
  if (lowerCategory.includes('productivity') || lowerCategory.includes('time management')) return '⏰';
  if (lowerCategory.includes('health') || lowerCategory.includes('wellness')) return '💪';
  if (lowerCategory.includes('cookbook') || lowerCategory.includes('food')) return '🍳';
  if (lowerCategory.includes('parenting') || lowerCategory.includes('child')) return '👶';
  if (lowerCategory.includes('personal development')) return '🌱';
  return '📖'; // Default
}

export default function CategoriesPage() {
  // Get actual categories from data
  const allCategories = getAllCategories();
  
  const categoryData = allCategories
    .map(category => ({
      name: category,
      emoji: getCategoryEmoji(category),
      count: getComparisonsByCategory(category).length,
    }))
    .sort((a, b) => b.count - a.count); // Sort by count, most comparisons first

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-amber-50/40 dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300 border border-amber-100 dark:border-gray-700">
          <h1 className="text-5xl font-bold text-primary-dark dark:text-gold mb-4 text-center">
            Browse by Category
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 text-lg max-w-2xl mx-auto">
            Discover book comparisons organized by genre and topic. Find exactly what you&apos;re looking for.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryData.map((category) => (
              <Link
                key={category.name}
                href={`/comparisons?category=${encodeURIComponent(category.name)}`}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gold/30 hover:border-gold dark:border-gold/40 dark:hover:border-gold-light shadow-md"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform text-center">
                  {category.emoji}
                </div>
                <h2 className="text-xl font-bold text-primary-dark dark:text-gold group-hover:text-gold dark:group-hover:text-gold-light transition-colors mb-2 text-center">
                  {category.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {category.count} comparison{category.count !== 1 ? 's' : ''}
                </p>
              </Link>
            ))}
          </div>

          {categoryData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl">No categories found yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
