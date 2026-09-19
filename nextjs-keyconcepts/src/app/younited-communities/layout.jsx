import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { softwareApplicationSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('younited-communities')

export default function YounitedCommunitiesLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema({
            name: 'Younited Communities',
            description:
              'Simplify society accounting, member billing, helper tracking & communications with Younited, housing society management software & app in India.',
            path: '/younited-communities',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, Android, iOS',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Younited Communities', url: '/younited-communities' },
          ]),
        ]}
      />
      {children}
    </>
  )
}

