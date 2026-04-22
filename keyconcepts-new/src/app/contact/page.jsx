import Contact from '@/components/contact'
import LayoutWrapper from '@/components/layout-wrapper'
import { generatePageMetadata } from '@/lib/seo-helpers'

export const metadata = generatePageMetadata({
  title: 'Contact Us | Get in Touch | Key Concepts',
  description: 'Contact Key Concepts for IT solutions, web development, mobile apps, and ERP consulting. Reach out to discuss your project requirements and get a free consultation.',
  keywords: ['contact Key Concepts', 'IT solutions contact', 'web development inquiry', 'ERP consultation', 'mobile app development quote', 'technology consulting'],
  path: '/contact',
  ogType: 'website'
})

function ContactPage() {

  return (
    <LayoutWrapper>
      <Contact />
    </LayoutWrapper>
  )
}

export default ContactPage
