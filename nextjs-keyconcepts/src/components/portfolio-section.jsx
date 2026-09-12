import { getCaseStudies } from '@/lib/content-api'
import { PortfolioSectionClient } from './portfolio-section-client'
import { USE_STATIC_CASE_STUDIES, staticCaseStudies } from '@/data/static-case-studies'

async function PortfolioSection() {
  const caseStudies = USE_STATIC_CASE_STUDIES
    ? staticCaseStudies
    : (await getCaseStudies()).slice(0, 3)

  return <PortfolioSectionClient studies={caseStudies} />
}

export { PortfolioSection }


