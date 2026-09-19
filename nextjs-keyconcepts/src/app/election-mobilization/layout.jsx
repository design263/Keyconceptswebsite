import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { softwareApplicationSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('election-mobilization')

export default function ElectionMobilizationLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema({
            name: 'Election Campaign & Voter Management Software',
            description:
              'Run winning campaigns in India with our election campaign management software. Track voters, manage booth committees, and coordinate volunteers in real time.',
            path: '/election-mobilization',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, Android, iOS',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Election Mobilization', url: '/election-mobilization' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

