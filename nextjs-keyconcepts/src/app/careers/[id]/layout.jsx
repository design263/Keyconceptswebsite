import { createPageMetadata, SITE_URL } from '@/lib/seo'
import { endpoints } from '@/lib/api'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.VITE_API_BASE_URL ||
  'http://localhost:5000/api'

export async function generateMetadata({ params }) {
  const { id } = await params

  try {
    const response = await fetch(`${API_BASE_URL}${endpoints.JOB_BY_ID(id)}`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      return {
        title: 'Job Not Found',
        description: 'The career opportunity you are looking for is no longer available.',
      }
    }

    const job = await response.json()
    const description =
      typeof job.description === 'string'
        ? job.description.replace(/\s+/g, ' ').trim().slice(0, 160)
        : `Apply for the ${job.title} role at Key Concepts and join our growing technology team.`

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

export default function CareerJobLayout({ children }) {
  return children
}
