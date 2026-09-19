import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('custom-erp-solutions')

export default function CustomErpLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Custom ERP Development & Enterprise Solutions',
            description:
              'Custom ERP development and enterprise software solutions tailored to your business workflows, supply chain, financial management, and operational automation.',
            path: '/custom-erp-solutions',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Custom ERP Solutions', url: '/custom-erp-solutions' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

