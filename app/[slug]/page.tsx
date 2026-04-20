import { Metadata } from 'next';
import BlogPostContent from '@/components/BlogPostContent';
import { blogPosts } from '@/lib/blogPosts';
import { seoDescriptions } from '@/lib/seoDescriptions';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }
  
  const title = post.title?.replace(/&#\d+;/g, '').replace(/&amp;/g, '&') || '';
  const description = seoDescriptions[slug] || '';
  
  // Extract image from content
  const imgMatch = post.content?.match(/src="(https:\/\/assetstories\.com\/wp-content\/uploads\/[^"]+)"/);
  const image = imgMatch ? imgMatch[1] : null;
  
  return {
    title: `${title} | Asset Stories`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      publishedTime: post.date,
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: image ? [image] : [],
    },
  };
}

export default async function RootSlugPage({ params }: Props) {
  const { slug } = await params;
  
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }
  
  return <BlogPostContent post={post} />;
}