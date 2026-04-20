import { Metadata } from 'next';
import PromptArticle from '@/components/PromptArticle';
import { promptPosts } from '@/lib/promptPosts';
import { notFound } from 'next/navigation';
import StructuredDataPrompt from '@/components/StructuredDataPrompt';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return promptPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const post = promptPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }
  
  return {
    title: `${post.title} | Prompt Guides`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function PromptSlugPage({ params }: Props) {
  const { slug } = await params;
  
  const post = promptPosts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <>
      <StructuredDataPrompt article={post} />
      <PromptArticle article={post} />
    </>
  );
}