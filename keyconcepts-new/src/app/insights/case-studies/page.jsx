import LayoutWrapper from '@/components/layout-wrapper'
import { generatePageMetadata } from '@/lib/seo-helpers'
import CaseStudy from '@/components/insights/caseStudy'

export const metadata = generatePageMetadata({
  title: 'Case Studies | Success Stories | Key Concepts',
  description: 'Explore our success stories and case studies. See how we helped businesses transform with our IT solutions, ERP implementations, and digital services.',
  keywords: 'case studies, success stories, client testimonials, IT solutions case studies, ERP implementation success, digital transformation examples',
  path: '/insights/case-studies',
  ogType: 'website'
})

function CaseStudiesPage() {

  return (
    <LayoutWrapper>
      <CaseStudy />
    </LayoutWrapper>
  )
}

export default CaseStudiesPage
