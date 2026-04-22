import LayoutWrapper from '@/components/layout-wrapper'
import { generatePageMetadata } from '@/lib/seo-helpers'
import YounitedCommunitiesClient from '@/components/younited-communities/YounitedCommunitiesClient'

export const metadata = generatePageMetadata({
  title: 'Younited Communities | Community Management Platform',
  description: 'Complete community and association management platform. Streamline member management, event coordination, and approval workflows. Perfect for Samaj, professional associations, and non-profits.',
  keywords: 'community management, member management, event coordination, approval workflows, Samaj management, professional association, non-profit management, Younited Communities',
  path: '/younited-communities',
  ogType: 'website'
})

export default function YounitedCommunitiesPage() {
  return (
    <LayoutWrapper>
      <YounitedCommunitiesClient />
    </LayoutWrapper>
  )
}
