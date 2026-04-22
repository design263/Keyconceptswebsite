import LayoutWrapper from '@/components/layout-wrapper'
import BrandingServicesClient from '@/components/branding-services/BrandingServicesClient'
import { generateServiceMetadata } from '@/lib/seo-helpers'

export const metadata = generateServiceMetadata({
  title: 'Branding Services | 360° Brand Identity Solutions',
  description: 'Complete branding services including brand strategy, visual identity, brand voice, and comprehensive brand guidelines. Build a powerful brand presence.',
  path: '/branding-services',
  keywords: ['branding services', 'brand identity', 'logo design', 'brand strategy', 'visual identity', 'brand guidelines', 'brand voice']
})

export default function BrandingServicesPage() {
  return (
    <LayoutWrapper>
      <BrandingServicesClient />
    </LayoutWrapper>
  )
}
