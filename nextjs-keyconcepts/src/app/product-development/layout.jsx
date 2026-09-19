import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('product-development')

export default function ProductDevelopmentLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Product Development & Product Engineering Services',
            description:
              'End-to-end product engineering and custom software development. We help startups and enterprises design, build, test, and scale modern web apps, SaaS platforms, and mobile products.',
            path: '/product-development',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Product Development', url: '/product-development' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

