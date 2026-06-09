import { notFound } from 'next/navigation'
import { BlogPostDetail } from '@/components/blog-post-detail'
import { getBlogPostById } from '@/data/blog-posts'
import { createPageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }) {
  const { id } = await params
  const post = getBlogPostById(id)

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    }
  }

  return createPageMetadata('blog', {
    title: post.title,
    description: post.excerpt,
    path: `/blog/${id}`,
    type: 'article',
    image: post.image,
    keywords: [...(post.tags || []), post.category, 'blog', 'industry trends'].join(', '),
  })
}

export default async function BlogPostPage({ params }) {
  const { id } = await params
  const post = getBlogPostById(id)

  if (!post) {
    notFound()
  }

  return <BlogPostDetail post={post} />
}
