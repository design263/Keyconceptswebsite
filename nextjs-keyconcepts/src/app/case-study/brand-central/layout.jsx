import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('case-study-brand-central')

export default function BrandCentralLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          articleSchema(
            {
              title: 'E-commerce Multi-Channel Retail',
              challenge:
                'Engineered a unified marketplace dashboard for Brand Central to synchronize inventory, automate product listings, and scale sales growth.',
            },
            'brand-central',
          ),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Case Studies', url: '/insights/case-studies' },
            { name: 'Brand Central Case Study', url: '/case-study/brand-central' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

