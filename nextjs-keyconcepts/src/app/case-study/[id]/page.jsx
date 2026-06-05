import { notFound } from 'next/navigation'
import { CaseStudyDetail } from '@/components/case-study-detail'
import { getCaseStudyById } from '@/data/case-studies'

export async function generateMetadata({ params }) {
  const { id } = await params
  const caseStudy = getCaseStudyById(id)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The case study you are looking for does not exist.',
    }
  }

  const keywords = [
    ...caseStudy.metrics.map((metric) => metric.label),
    caseStudy.industry,
    'case study',
    'success story',
  ].join(', ')

  return {
    title: `${caseStudy.title} | Case Study | Key Concepts`,
    description: caseStudy.challenge,
    keywords,
    openGraph: {
      title: `${caseStudy.title} | Case Study | Key Concepts`,
      description: caseStudy.challenge,
      type: 'article',
      authors: [caseStudy.client],
      images: [
        {
          url: caseStudy.image,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} | Case Study | Key Concepts`,
      description: caseStudy.challenge,
      images: [caseStudy.image],
    },
  }
}

export default async function CaseStudyDetailPage({ params }) {
  const { id } = await params
  const caseStudy = getCaseStudyById(id)

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudyDetail caseStudy={caseStudy} />
}
