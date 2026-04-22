import LayoutWrapper from '@/components/layout-wrapper'
import OdooPage from '@/components/services/odooPage'
import { generateServiceMetadata } from '@/lib/seo-helpers'

export const metadata = generateServiceMetadata({
  title: 'Odoo ERP Solutions | Official Odoo Partner | Key Concepts',
  description: 'Complete Odoo ERP implementation, customization, and support services. As official Odoo partners, we deliver tailored ERP solutions for manufacturing, retail, and service industries.',
  path: '/odoo-erp',
  keywords: ['Odoo ERP', 'ERP implementation', 'Odoo partner', 'business management', 'inventory management', 'CRM', 'accounting software', 'enterprise resource planning']
})

function OdooERPPage() {
  return (
    <LayoutWrapper>
      <OdooPage />
    </LayoutWrapper>
  )
}

export default OdooERPPage
