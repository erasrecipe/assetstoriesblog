'use client';

import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogPosts';

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  image?: string;
}

interface BlogPostContentProps {
  post: BlogPost;
}

function cleanContent(content: string, featuredImage: string | undefined) {
  let cleaned = content;
  
  // Remove the first image if we have a featured image (to avoid duplication)
  if (featuredImage) {
    cleaned = cleaned.replace(/<figure[^>]*>[\s\S]*?<img[^>]*src="[^"]*"[^>]*>[\s\S]*?<\/figure>/i, '');
    cleaned = cleaned.replace(/^<img[^>]*>/i, '');
  }
  
  // Remove inline styles and dir attributes that might conflict with dark mode
  cleaned = cleaned.replace(/style="[^"]*"/g, '');
  cleaned = cleaned.replace(/\s*dir="ltr"/g, '');
  
  // Add dark mode friendly styles to common elements - match both <p> and <p something>
  cleaned = cleaned.replace(/<p[^>]*>/g, '<p class="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">');
  cleaned = cleaned.replace(/<h2[^>]*>/g, '<h2 class="text-3xl font-bold text-primary-dark dark:text-gold mt-12 mb-6">');
  cleaned = cleaned.replace(/<h3[^>]*>/g, '<h3 class="text-2xl font-bold text-primary-dark dark:text-gold mt-10 mb-4">');
  cleaned = cleaned.replace(/<h4[^>]*>/g, '<h4 class="text-xl font-bold text-primary-dark dark:text-gold mt-8 mb-3">');
  cleaned = cleaned.replace(/<ul[^>]*>/g, '<ul class="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300 space-y-2">');
  cleaned = cleaned.replace(/<ol[^>]*>/g, '<ol class="list-decimal list-inside mb-6 text-gray-700 dark:text-gray-300 space-y-2">');
  cleaned = cleaned.replace(/<li[^>]*>/g, '<li class="mb-2 text-gray-700 dark:text-gray-300">');
  cleaned = cleaned.replace(/<a /g, '<a class="text-orange-600 dark:text-gold hover:underline" ');
  cleaned = cleaned.replace(/<strong>/g, '<strong class="font-bold text-primary-dark dark:text-gold">');
  cleaned = cleaned.replace(/<b>/g, '<b class="font-bold text-primary-dark dark:text-gold">');
  cleaned = cleaned.replace(/<figcaption>/g, '<figcaption class="text-sm text-gray-500 dark:text-gray-400 text-center mt-4 mb-6">');
  cleaned = cleaned.replace(/<br\s*\/?>/g, '<br class="mb-4" />');
  
  // Remove empty paragraphs
  cleaned = cleaned.replace(/<p class="[^"]*">\s*<\/p>/g, '');
  
  // Remove "Latest Articles:" section from content
  cleaned = cleaned.replace(/<h2[^>]*>Latest Articles:<\/h2>/gi, '');
  cleaned = cleaned.replace(/<h2>Latest Articles:<\/h2>/gi, '');
  
  return cleaned;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  if (!post) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-primary-dark dark:text-gold mb-4">
              Article Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The article you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
              href="/blog"
              className="inline-block bg-gradient-to-r from-gold to-gold-light text-primary-dark px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const cleanTitle = post.title?.replace(/&#\d+;/g, '').replace(/&amp;/g, '&') || '';

  // Extract first image from content if no featured image
  let featuredImage = post.image;
  if (!featuredImage) {
    const imgMatch = post.content?.match(/src="([^"]+\.(?:jpg|jpeg|png|webp|svg))"/);
    if (imgMatch) {
      featuredImage = imgMatch[1];
    }
  }

  // Extract alt text from image
  const altMatch = post.content?.match(/alt="([^"]+)"/);
  const imageAlt = altMatch ? altMatch[1] : cleanTitle;

  // Clean the content to remove duplicate image and add dark mode styles
  const cleanedContent = cleanContent(post.content, featuredImage);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <article className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-orange-600 dark:hover:text-gold">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/blog" className="text-gray-500 hover:text-orange-600 dark:hover:text-gold">
            Blog
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700 dark:text-gray-300">{cleanTitle}</span>
        </nav>

        {/* Featured Image */}
        {featuredImage && (
          <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={featuredImage}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Title and Meta */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-gold mb-4">
            {cleanTitle}
          </h1>
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:dark:text-gold prose-p:dark:text-gray-300 prose-li:dark:text-gray-300 prose-a:dark:text-gold"
          dangerouslySetInnerHTML={{ __html: cleanedContent }}
        />

        {/* Related Articles */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-primary-dark dark:text-gold mb-6">
            More Finance Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => {
                const relatedTitle = relatedPost.title?.replace(/&#\d+;/g, '').replace(/&amp;/g, '&') || '';
                return (
                  <Link
                    key={relatedPost.slug}
                    href={`/${relatedPost.slug}`}
                    className="block p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-primary-dark dark:text-gold mb-2 line-clamp-2">
                      {relatedTitle}
                    </h4>
                    <span className="text-sm text-orange-600 dark:text-gold font-medium">
                      Read more →
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/blog"
            className="inline-flex items-center text-orange-600 dark:text-gold hover:text-orange-700 dark:hover:text-gold-light font-semibold"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}