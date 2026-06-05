import { notFound } from 'next/navigation'
import { BlogPostDetail } from '@/components/blog-post-detail'
import { getBlogPostById } from '@/data/blog-posts'

export async function generateMetadata({ params }) {
  const { id } = await params
  const post = getBlogPostById(id)

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    }
  }

  return {
    title: `${post.title} | Key Concepts`,
    description: post.excerpt,
    keywords: [...(post.tags || []), post.category, 'blog', 'industry trends'].join(', '),
    openGraph: {
      title: `${post.title} | Key Concepts`,
      description: post.excerpt,
      type: 'article',
      authors: [post.author],
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Key Concepts`,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { id } = await params
  const post = getBlogPostById(id)

  if (!post) {
    notFound()
  }

  return <BlogPostDetail post={post} />
}
