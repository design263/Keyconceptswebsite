import IndustryTrends from '@/components/insights/industryTrends'
import LayoutWrapper from '@/components/layout-wrapper'
import { generatePageMetadata } from '@/lib/seo-helpers'

export const metadata = generatePageMetadata({
  title: 'Technology Trends | Industry Insights | Key Concepts',
  description: 'Stay updated with the latest technology trends and industry insights. Explore articles on AI, cloud computing, digital transformation, and emerging technologies.',
  keywords: 'technology trends, industry insights, AI trends, cloud computing, digital transformation, emerging technologies, technology news',
  path: '/insights/trends',
  ogType: 'website'
})

function IndustryTrendsPage() {

  return (
    <LayoutWrapper>
      <IndustryTrends />
    </LayoutWrapper>
  )
}

export default IndustryTrendsPage
