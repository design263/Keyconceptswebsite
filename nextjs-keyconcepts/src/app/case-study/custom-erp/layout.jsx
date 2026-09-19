import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('case-study-custom-erp')

export default function CustomERPLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          articleSchema(
            {
              title: 'Custom ERP Manufacturing',
              challenge:
                'Scaled operations for a chemical manufacturer using a custom-engineered Odoo ERP connecting sales, inventory, production, and exports.',
            },
            'custom-erp',
          ),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Case Studies', url: '/insights/case-studies' },
            { name: 'Custom ERP Case Study', url: '/case-study/custom-erp' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

