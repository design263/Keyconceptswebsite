import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('insights-case-studies')

export default function InsightsCaseStudiesLayout({ children }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/insights/case-studies' },
        ])}
      />
      {children}
    </>
  )
}

