import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { softwareApplicationSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('visitor-management')

export default function VisitorManagementLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema({
            name: 'Visitorz',
            description:
              'Visitorz by Key Concepts is an enterprise visitor management and workplace access platform with touchless QR check-in, host alerts, and visitor badge printing.',
            path: '/visitor-management',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, Android, iOS',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Visitor Management', url: '/visitor-management' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

