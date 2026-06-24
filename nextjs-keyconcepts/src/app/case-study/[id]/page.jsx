import { notFound } from 'next/navigation'
import { CaseStudyDetail } from '@/components/case-study-detail'
import { JsonLd } from '@/components/json-ld'
import { getCaseStudyById } from '@/data/case-studies'
import { createPageMetadata, SITE_URL } from '@/lib/seo'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'

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

  return createPageMetadata('insights-case-studies', {
    title: `${caseStudy.title} Case Study`,
    description: caseStudy.challenge,
    path: `/case-study/${id}`,
    type: 'article',
    image: caseStudy.image,
    keywords,
  })
}

export default async function CaseStudyDetailPage({ params }) {
  const { id } = await params
  const caseStudy = getCaseStudyById(id)

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <JsonLd
        data={[
          articleSchema(caseStudy, id),
          breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Case Studies', url: `${SITE_URL}/insights/case-studies` },
            { name: caseStudy.title, url: `${SITE_URL}/case-study/${id}` },
          ]),
        ]}
      />
      <CaseStudyDetail caseStudy={caseStudy} />
    </>
  )
}
