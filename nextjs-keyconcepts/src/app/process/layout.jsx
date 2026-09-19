import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('process')

export default function ProcessLayout({ children }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Process', url: '/process' },
        ])}
      />
      {children}
    </>
  )
}

