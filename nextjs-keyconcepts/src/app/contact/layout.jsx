import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('contact')

export default function ContactLayout({ children }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ])}
      />
      {children}
    </>
  )
}

