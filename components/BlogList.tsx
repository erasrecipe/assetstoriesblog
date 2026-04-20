'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

interface BlogListProps {
  initialPosts?: BlogPost[];
}

export default function BlogList({ initialPosts }: BlogListProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);
  const [loading, setLoading] = useState(!initialPosts);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialPosts) {
      setPosts(initialPosts);
      setLoading(false);
      return;
    }
    
    async function fetchPosts() {
      try {
        const res = await fetch('https://assetstories.com/wp-json/wp/v2/posts?per_page=50&_embed');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [initialPosts]);

  if (loading) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary-dark dark:text-gold mb-4">
              Finance Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Expert insights on personal finance, investing, and building wealth.
            </p>
          </div>
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary-dark dark:text-gold mb-4">
            Finance Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Expert insights on personal finance, investing, and building wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
            const cleanTitle = post.title.rendered.replace(/&#\d+;/g, '').replace(/&amp;/g, '&');
            const cleanExcerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '').replace(/&#\d+;/g, '').substring(0, 150) + '...';

            return (
              <Link
                key={post.id}
                href={`/${post.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {featuredImage && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={featuredImage.source_url}
                      alt={featuredImage.alt_text || cleanTitle}
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
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {cleanExcerpt}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}