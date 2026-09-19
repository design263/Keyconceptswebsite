import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('web-solutions')

export default function WebSolutionsLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Web Development Services',
            description:
              'Professional web development: business websites, e-commerce, web apps, Chrome extensions, and APIs using Next.js and modern technologies.',
            path: '/web-solutions',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Web Solutions', url: '/web-solutions' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

