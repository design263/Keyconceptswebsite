import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { softwareApplicationSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('claim-genie')

export default function ClaimGenieLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema({
            name: 'Claim Genie',
            description:
              'Claim Genie is an AI-powered insurance claims management platform providing automated surveyor assignment, AI damage estimation, fraud detection, and mobile claim processing.',
            path: '/claim-genie',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, Android, iOS',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Claim Genie', url: '/claim-genie' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

