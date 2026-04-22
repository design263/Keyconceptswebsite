import LayoutWrapper from '@/components/layout-wrapper'
import MvpDevelopment from '@/components/services/mvpDevelopment'
import { generateServiceMetadata } from '@/lib/seo-helpers'

export const metadata = generateServiceMetadata({
  title: 'MVP Development Studio | Fast Prototype Development | Key Concepts',
  description: 'Rapid MVP development services for startups and enterprises. Build, test, and launch your minimum viable product with our expert development team.',
  path: '/mvp-studio',
  keywords: ['MVP development', 'minimum viable product', 'startup development', 'prototype development', 'rapid development', 'product validation', 'lean startup', 'agile development']
})

function MVPStudioPage() {

  return (
    <LayoutWrapper>
      <MvpDevelopment />
    </LayoutWrapper>
  )
}

export default MVPStudioPage
