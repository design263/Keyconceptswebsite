import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('support-maintenance')

export default function SupportMaintenanceLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Support & Maintenance Services',
            description:
              'Reliable support for web and mobile apps. Monitoring, bug fixes, security updates, and performance tuning by the Key Concepts team.',
            path: '/support-maintenance',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Support & Maintenance', url: '/support-maintenance' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

