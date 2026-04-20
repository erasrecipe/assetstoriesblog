import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blogPosts';

export const metadata: Metadata = {
  title: 'Finance Blog - Expert Financial Insights',
  description: 'Explore our finance blogs for expert insights on personal finance, investing, budgeting, and wealth building.',
};

export default function FinanceBlogsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-gold mb-4">
            Finance Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Expert insights on personal finance, investing, budgeting, and wealth building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            let featuredImage = post.image;
            if (!featuredImage) {
              const imgMatch = post.content?.match(/src="([^"]+\.(?:jpg|jpeg|png|webp|svg))"/);
              if (imgMatch) {
                featuredImage = imgMatch[1];
              }
            }
            
            const cleanTitle = post.title?.replace(/&#\d+;/g, '').replace(/&amp;/g, '&') || '';
            const cleanExcerpt = post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 150) || '';

            return (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {featuredImage && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={featuredImage}
                      alt={cleanTitle}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h2 className="text-xl font-bold text-primary-dark dark:text-gold mb-3 group-hover:text-orange-600 dark:group-hover:text-gold-light transition-colors">
                    {cleanTitle}
                  </h2>
                  {cleanExcerpt && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {cleanExcerpt}...
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}