import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { aboutPageSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('keyconcepts-story')

export default function KeyConceptsStoryLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          aboutPageSchema('/keyconcepts-story', 'About Key Concepts'),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Our Story', url: '/keyconcepts-story' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

