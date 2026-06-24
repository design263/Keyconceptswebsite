import { notFound } from 'next/navigation'
import { BlogPostDetail } from '@/components/blog-post-detail'
import { JsonLd } from '@/components/json-ld'
import { getBlogPostById } from '@/data/blog-posts'
import { createPageMetadata, SITE_URL } from '@/lib/seo'
import { blogPostingSchema, breadcrumbSchema } from '@/lib/structured-data'

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

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema(post, id),
          breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Industry Trends', url: `${SITE_URL}/insights/trends` },
            { name: post.title, url: `${SITE_URL}/blog/${id}` },
          ]),
        ]}
      />
      <BlogPostDetail post={post} />
    </>
  )
}
