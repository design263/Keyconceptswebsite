import { notFound } from 'next/navigation'
import { BlogPostDetail } from '@/components/blog-post-detail'
import { JsonLd } from '@/components/json-ld'
import { createPageMetadata, SITE_URL } from '@/lib/seo'
import { blogPostingSchema, breadcrumbSchema } from '@/lib/structured-data'
import { getBlogPostBySlug } from '@/lib/content-api'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
  const { id: slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    }
  }

  return createPageMetadata('blog', {
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    type: 'article',
    image: post.image,
    keywords: [...(post.tags || []), post.category, 'blog', 'industry trends'].join(', '),
  })
}

export default async function BlogPostPage({ params }) {
  const { id: slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema(post, slug),
          breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Industry Trends', url: `${SITE_URL}/insights/trends` },
            { name: post.title, url: `${SITE_URL}/blog/${slug}` },
          ]),
        ]}
      />
      <BlogPostDetail post={post} />
    </>
  )
}
