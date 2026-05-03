import { BlogPostClient } from './BlogPostClient';
import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Stratosport Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Stratosport`,
      description: post.excerpt,
      type: 'article',
      url: `https://stratosport.in/blog/${post.slug}`,
    },
    alternates: {
      canonical: `https://stratosport.in/blog/${post.slug}`,
    },
  };
}

export default function Page({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return <BlogPostClient post={post} />;
}
