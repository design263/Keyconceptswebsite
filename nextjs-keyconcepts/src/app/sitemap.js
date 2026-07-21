import { SITE_URL, pageSeo } from '@/lib/seo'
import { endpoints, api } from '@/lib/api'

async function getJobRoutes() {
  try {
    const response = await fetch(`${api.baseUrl}${endpoints.JOBS}`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) return []

    const jobs = await response.json()
    const list = Array.isArray(jobs) ? jobs : jobs?.data || []

    return list
      .filter((job) => job?._id || job?.id)
      .map((job) => ({
        url: `${SITE_URL}/careers/${job._id || job.id}`,
        lastModified: new Date(job.updatedAt || job.createdAt || Date.now()),
        changeFrequency: 'weekly',
        priority: 0.6,
      }))
  } catch {
    return []
  }
}

async function getBlogRoutes() {
  try {
    const response = await fetch(`${api.baseUrl}${endpoints.BLOGS}?limit=100&sort=-publishedAt`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) return []

    const blogs = await response.json()
    const list = Array.isArray(blogs) ? blogs : blogs?.data || []

    return list
      .filter((post) => post?.slug)
      .map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt || post.createdAt || Date.now()),
        changeFrequency: 'monthly',
        priority: 0.7,
      }))
  } catch {
    return []
  }
}

async function getCaseStudyRoutes() {
  try {
    const response = await fetch(`${api.baseUrl}${endpoints.CASE_STUDIES}?limit=100&sort=-publishedAt`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) return []

    const caseStudies = await response.json()
    const list = Array.isArray(caseStudies) ? caseStudies : caseStudies?.data || []

    return list
      .filter((study) => study?.slug)
      .map((study) => ({
        url: `${SITE_URL}/case-study/${study.slug}`,
        lastModified: new Date(study.updatedAt || study.publishedAt || study.createdAt || Date.now()),
        changeFrequency: 'monthly',
        priority: 0.7,
      }))
  } catch {
    return []
  }
}

export default async function sitemap() {
  const staticRoutes = Object.values(pageSeo)
    .filter((page) => page.path !== '/blog')
    .map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.path === '/' ? 'weekly' : 'monthly',
      priority: page.path === '/' ? 1 : 0.8,
    }))

  const blogRoutes = await getBlogRoutes()
  const caseStudyRoutes = await getCaseStudyRoutes()
  const jobRoutes = await getJobRoutes()

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes, ...jobRoutes]
}
