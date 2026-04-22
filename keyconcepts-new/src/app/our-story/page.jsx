import LayoutWrapper from '@/components/layout-wrapper'
import { generatePageMetadata } from '@/lib/seo-helpers'
import OurStoryClient from '@/components/our-story/OurStoryClient'

export const metadata = generatePageMetadata({
  title: 'Our Story | Key Concepts | Modern Engineering with Legacy Reliability',
  description: 'Learn about Key Concepts Innovations - a new generation technology company with legacy reliability. Discover our hybrid approach, core values, and why clients stay with us.',
  keywords: 'about Key Concepts, our story, company history, technology partner, software engineering, modern engineering, legacy reliability, Key Concepts Innovations',
  path: '/our-story',
  ogType: 'website'
})

export default function OurStoryPage() {
  return (
    <LayoutWrapper>
      <OurStoryClient />
    </LayoutWrapper>
  )
}
