import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('case-study-legaltech')

export default function LegalTechLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          articleSchema(
            {
              title: 'LegalTech Document Automation',
              challenge:
                'Automated legal document draft creation, dynamically calculated state-wise stamp duty, and integrated Aadhaar e-signing.',
            },
            'legaltech',
          ),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Case Studies', url: '/insights/case-studies' },
            { name: 'LegalTech Case Study', url: '/case-study/legaltech' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

