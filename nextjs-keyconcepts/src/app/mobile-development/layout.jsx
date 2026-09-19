import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('mobile-development')

export default function MobileDevelopmentLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Mobile App Development Services',
            description:
              'Native and cross-platform mobile apps by Key Concepts. UI/UX, development, testing, and App Store or Play Store deployment.',
            path: '/mobile-development',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Mobile Development', url: '/mobile-development' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

