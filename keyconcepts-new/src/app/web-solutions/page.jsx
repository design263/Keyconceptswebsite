import LayoutWrapper from '@/components/layout-wrapper'
import WebSolutions from '@/components/webSolutions'
import { generateServiceMetadata } from '@/lib/seo-helpers'

export const metadata = generateServiceMetadata({
  title: 'Web Solutions | Custom Web Development | Key Concepts',
  description: 'Professional web development services including custom websites, web applications, e-commerce platforms, and enterprise web solutions. Modern, scalable, and secure.',
  path: '/web-solutions',
  keywords: ['web development', 'custom websites', 'web applications', 'e-commerce', 'enterprise web solutions', 'full-stack development', 'responsive design', 'web security']
})

function WebSolutionsPage() {

  return (
    <LayoutWrapper>
      <WebSolutions />
    </LayoutWrapper>
  )
}

export default WebSolutionsPage
