import LayoutWrapper from '@/components/layout-wrapper'
import { generatePageMetadata } from '@/lib/seo-helpers'
import ElectionMobilizationClient from '@/components/election-mobilization/ElectionMobilizationClient'

export const metadata = generatePageMetadata({
  title: 'Election Mobilization | Digital Campaign Platform',
  description: 'Comprehensive digital campaign platform for voter outreach, volunteer coordination, and real-time analytics. Perfect for national, regional, and grassroots election campaigns.',
  keywords: 'election campaign, digital campaigning, voter outreach, volunteer coordination, campaign management, political campaigns, GOTV, voter mobilization',
  path: '/election-mobilization',
  ogType: 'website'
})

export default function ElectionMobilizationPage() {
  return (
    <LayoutWrapper>
      <ElectionMobilizationClient />
    </LayoutWrapper>
  )
}
