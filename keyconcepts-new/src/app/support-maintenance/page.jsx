import LayoutWrapper from '@/components/layout-wrapper'
import SupportMaintenance from '@/components/services/supportMaintenance'
import { generateServiceMetadata } from '@/lib/seo-helpers'

export const metadata = generateServiceMetadata({
  title: 'Support & Maintenance Services | 24/7 Technical Support | Key Concepts',
  description: 'Comprehensive support and maintenance services for your digital products. 24/7 technical support, bug fixes, updates, and performance monitoring.',
  path: '/support-maintenance',
  keywords: ['support services', 'maintenance services', 'technical support', '24/7 support', 'bug fixes', 'software updates', 'performance monitoring', 'IT support']
})
function SupportMaintenancePage() {

  return (
    <LayoutWrapper>
      <SupportMaintenance />
    </LayoutWrapper>
  )
}

export default SupportMaintenancePage
