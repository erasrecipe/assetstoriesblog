import { Metadata } from 'next';
import Link from 'next/link';
import { promptPosts } from '@/lib/promptPosts';

export const metadata: Metadata = {
  title: 'AI Prompts Library | 1000+ Ready-to-Use Prompts',
  description: 'Browse our comprehensive library of AI prompts for ChatGPT, Midjourney, Claude, and more. Copy and use immediately.',
};

export default function PromptsPage() {
  const categories = [...new Set(promptPosts.map((p) => p.category))];
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-gold mb-6">
            AI Prompts Library
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Browse {promptPosts.length}+ ready-to-use prompts for ChatGPT, Midjourney, Claude, and more. 
            Click copy and start using immediately.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </header>

        {/* Prompt Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promptPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/prompts/${post.slug}`}
              className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-primary-dark dark:text-gold mb-3 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{post.shortPrompts.length} short prompts</span>
                <span>•</span>
                <span>{post.longPrompts.length} advanced</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {promptPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No prompts available yet. Coming soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}