import { createPageMetadata, SITE_URL, trimMetaDescription } from '@/lib/seo'
import { endpoints } from '@/lib/api'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, jobPostingSchema } from '@/lib/structured-data'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.VITE_API_BASE_URL ||
  'http://localhost:5000/api'

async function fetchJob(id) {
  const response = await fetch(`${API_BASE_URL}${endpoints.JOB_BY_ID(id)}`, {
    next: { revalidate: 3600 },
  })

  if (!response.ok) return null
  return response.json()
}

export async function generateMetadata({ params }) {
  const { id } = await params

  try {
    const job = await fetchJob(id)

    if (!job) {
      return {
        title: 'Job Not Found',
        description: 'The career opportunity you are looking for is no longer available.',
      }
    }

    const description = trimMetaDescription(
      typeof job.description === 'string'
        ? job.description
        : `Apply for the ${job.title} role at Key Concepts and join our growing technology team.`,
    )

    return createPageMetadata('careers', {
      title: `${job.title} Job Opening`,
      description,
      path: `/careers/${id}`,
      keywords: [
        job.title,
        job.department,
        job.location,
        job.employmentType || job.type,
        'Key Concepts careers',
        'jobs Surat',
      ]
        .filter(Boolean)
        .join(', '),
    })
  } catch {
    return {
      title: 'Career Opportunity',
      description: 'Explore career opportunities at Key Concepts.',
      alternates: { canonical: `${SITE_URL}/careers/${id}` },
    }
  }
}

export default async function CareerJobLayout({ children, params }) {
  const { id } = await params
  let structuredData = null

  try {
    const job = await fetchJob(id)

    if (job) {
      structuredData = [
        jobPostingSchema(job, id),
        breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Careers', url: `${SITE_URL}/careers` },
          { name: job.title, url: `${SITE_URL}/careers/${id}` },
        ]),
      ]
    }
  } catch {
    structuredData = null
  }

  return (
    <>
      {structuredData ? <JsonLd data={structuredData} /> : null}
      {children}
    </>
  )
}
