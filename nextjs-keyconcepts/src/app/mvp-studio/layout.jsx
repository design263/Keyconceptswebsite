import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('mvp-studio')

export default function MvpStudioLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'MVP Development Services for Startups',
            description:
              'Rapid MVP development services for startups. Turn your vision into a launch-ready SaaS or mobile product in weeks with Key Concepts.',
            path: '/mvp-studio',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'MVP Studio', url: '/mvp-studio' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

