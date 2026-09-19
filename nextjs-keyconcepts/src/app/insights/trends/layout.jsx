import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('insights-trends')

export default function InsightsTrendsLayout({ children }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Industry Trends', url: '/insights/trends' },
        ])}
      />
      {children}
    </>
  )
}

