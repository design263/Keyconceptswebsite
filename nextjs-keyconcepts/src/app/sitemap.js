import { SITE_URL, pageSeo } from '@/lib/seo'
import { blogPosts } from '@/data/blog-posts'
import { caseStudies } from '@/data/case-studies'
import { endpoints } from '@/lib/api'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.VITE_API_BASE_URL ||
  'http://localhost:5000/api'

async function getJobRoutes() {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoints.JOBS}`, {
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

export default async function sitemap() {
  const staticRoutes = Object.values(pageSeo)
    .filter((page) => page.path !== '/blog')
    .map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.path === '/' ? 'weekly' : 'monthly',
      priority: page.path === '/' ? 1 : 0.8,
    }))

  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.id}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${SITE_URL}/case-study/${study.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const jobRoutes = await getJobRoutes()

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes, ...jobRoutes]
}
