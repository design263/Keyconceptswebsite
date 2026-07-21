import { notFound } from 'next/navigation'
import { CaseStudyDetail } from '@/components/case-study-detail'
import { JsonLd } from '@/components/json-ld'
import { createPageMetadata, SITE_URL } from '@/lib/seo'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'
import { getCaseStudyBySlug } from '@/lib/content-api'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
  const { id: slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

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
    path: `/case-study/${slug}`,
    type: 'article',
    image: caseStudy.image,
    keywords,
  })
}

export default async function CaseStudyDetailPage({ params }) {
  const { id: slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <JsonLd
        data={[
          articleSchema(caseStudy, slug),
          breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Case Studies', url: `${SITE_URL}/insights/case-studies` },
            { name: caseStudy.title, url: `${SITE_URL}/case-study/${slug}` },
          ]),
        ]}
      />
      <CaseStudyDetail caseStudy={caseStudy} />
    </>
  )
}
