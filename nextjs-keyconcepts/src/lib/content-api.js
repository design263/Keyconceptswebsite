import { endpoints, api } from '@/lib/api'
import { caseStudies as fallbackCaseStudies } from '@/data/case-studies'
import { blogPosts as fallbackBlogPosts } from '@/data/blog-posts'

async function fetchContent(path, { revalidate, cache = 'no-store' } = {}) {
  try {
    const response = await fetch(`${api.baseUrl}${path}`, {
      cache,
      ...(typeof revalidate === 'number' ? { next: { revalidate } } : {}),
    })

    if (!response.ok) {
      if (response.status === 404) return null
      console.error(`Content API ${path} failed: ${response.status}`)
      return null
    }

    return response.json()
  } catch (error) {
    // Incomplete API TLS chain → UNABLE_TO_VERIFY_LEAF_SIGNATURE in Node SSR
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `Content API ${path} unreachable:`,
        error?.cause?.code || error.message
      )
    }
    return null
  }
}

const formatDate = (value) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

export function normalizeBlogPost(post) {
  if (!post) return null

  return {
    ...post,
    id: post._id || post.id,
    content: post.contentHtml || post.content || '',
    date: formatDate(post.publishedAt || post.updatedAt || post.createdAt),
    tags: Array.isArray(post.tags) ? post.tags : [],
    featured: Boolean(post.featured),
  }
}

export function normalizeCaseStudy(caseStudy) {
  if (!caseStudy) return null

  return {
    ...caseStudy,
    id: caseStudy._id || caseStudy.id,
    metrics: Array.isArray(caseStudy.metrics) ? caseStudy.metrics : [],
    featured: Boolean(caseStudy.featured),
  }
}

export async function getBlogPosts() {
  const response = await fetchContent(`${endpoints.BLOGS}?limit=100&sort=-publishedAt`)
  const list = Array.isArray(response) ? response : response?.data || []
  const normalized = list.map(normalizeBlogPost).filter(Boolean)
  return normalized.length > 0 ? normalized : fallbackBlogPosts
}

export function getBlogPostBySlug(slug) {
  // If slug is not found from API, check fallback
  return getBlogPosts().then((posts) => posts.find((post) => post.slug === slug) ?? null)
}

export async function getFeaturedBlogPost() {
  const posts = await getBlogPosts()
  return posts.find((post) => post.featured) ?? posts[0] ?? null
}

export async function getRegularBlogPosts() {
  const posts = await getBlogPosts()
  const featured = posts.find((post) => post.featured) ?? posts[0]
  return featured ? posts.filter((post) => post.id !== featured.id) : posts
}

export async function getCaseStudies() {
  const response = await fetchContent(`${endpoints.CASE_STUDIES}?limit=100&sort=-publishedAt`)
  const list = Array.isArray(response) ? response : response?.data || []
  const normalized = list.map(normalizeCaseStudy).filter(Boolean)
  return normalized.length > 0 ? normalized : fallbackCaseStudies
}

export function getCaseStudyBySlug(slug) {
  return getCaseStudies().then((studies) => studies.find((study) => study.slug === slug) ?? null)
}

export async function getFeaturedCaseStudy() {
  const caseStudies = await getCaseStudies()
  return caseStudies.find((item) => item.featured) ?? caseStudies[0] ?? null
}

export async function getRegularCaseStudies() {
  const caseStudies = await getCaseStudies()
  const featured = caseStudies.find((item) => item.featured) ?? caseStudies[0]
  return featured ? caseStudies.filter((item) => item.id !== featured.id) : caseStudies
}
