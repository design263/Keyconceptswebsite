import LayoutWrapper from '@/components/layout-wrapper'
import CareersClient from '@/components/careers/CareersClient'
import { generatePageMetadata } from '@/lib/seo-helpers'

export const metadata = generatePageMetadata({
  title: 'Careers | Join Our Team | Key Concepts',
  description: 'Explore career opportunities at Key Concepts. Join our team of talented developers, designers, and technology professionals. Grow your career with us.',
  keywords: 'careers, job opportunities, technology jobs, developer jobs, designer careers, IT jobs, software development careers, join our team',
  path: '/careers',
  ogType: 'website'
})

export default function CareersPage() {
  return (
    <LayoutWrapper>
      <CareersClient />
    </LayoutWrapper>
  )
}
