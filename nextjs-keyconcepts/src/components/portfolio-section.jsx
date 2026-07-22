import { getCaseStudies } from '@/lib/content-api'
import { PortfolioSectionClient } from './portfolio-section-client'

async function PortfolioSection() {
  const caseStudies = await getCaseStudies()
  const displayStudies = caseStudies.slice(0, 3)

  return <PortfolioSectionClient studies={displayStudies} />
}

export { PortfolioSection }
