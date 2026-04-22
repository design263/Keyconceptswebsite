import LayoutWrapper from '@/components/layout-wrapper'
import Process from '@/components/process/process'
import { generatePageMetadata } from '@/lib/seo-helpers'

export const metadata = generatePageMetadata({
  title: 'Our Process | Development Methodology | Key Concepts',
  description: 'Learn about our proven development process and methodology. From discovery to deployment, we ensure quality and efficiency in every project.',
  keywords: 'development process, software methodology, agile development, project management, development lifecycle, quality assurance, deployment process',
  path: '/process',
  ogType: 'website'
})

function ProcessPage() {
  return (
    <LayoutWrapper>
      <Process />
    </LayoutWrapper>
  )
}

export default ProcessPage
