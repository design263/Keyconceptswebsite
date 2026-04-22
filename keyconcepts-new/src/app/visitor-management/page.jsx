import LayoutWrapper from '@/components/layout-wrapper'
import VisitorManagement from '@/components/platforms/visitorManagement'
import { generateServiceMetadata } from '@/lib/seo-helpers'

export const metadata = generateServiceMetadata({
  title: 'Visitor Management System | Digital Check-in Solutions | Key Concepts',
  description: 'Modern visitor management system with digital check-in, badge printing, visitor tracking, and security features. Streamline your front desk operations.',
  path: '/visitor-management',
  keywords: ['visitor management system', 'digital check-in', 'visitor tracking', 'badge printing', 'front desk solutions', 'visitor security', 'office management', 'visitor registration']
})

function VisitorManagementPage() {
  return (
    <LayoutWrapper>
      <VisitorManagement />
    </LayoutWrapper>
  )
}

export default VisitorManagementPage
