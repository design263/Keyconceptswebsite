import LayoutWrapper from '@/components/layout-wrapper'
import AboutClient from '@/components/about/AboutClient'
import { generatePageMetadata } from '@/lib/seo-helpers'

export const metadata = generatePageMetadata({
  title: 'About Us | Key Concepts | IT Solutions Since 2009',
  description: 'Learn about Key Concepts - a leading IT solutions provider helping businesses transform since 2009. Discover our mission, values, and expert team.',
  keywords: 'about Key Concepts, IT solutions company, technology consulting, digital transformation, Odoo partner, web development, mobile apps',
  path: '/about',
  ogType: 'website'
})

export default function AboutPage() {
  return (
    <LayoutWrapper>
      <AboutClient />
    </LayoutWrapper>
  )
}
