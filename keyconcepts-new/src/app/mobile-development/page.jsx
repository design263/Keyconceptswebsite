import LayoutWrapper from '@/components/layout-wrapper'
import MobileDevelopment from '@/components/services/mobileDevelopment'
import { generateServiceMetadata } from '@/lib/seo-helpers'

export const metadata = generateServiceMetadata({
  title: 'Mobile App Development | iOS & Android Apps | Key Concepts',
  description: 'Professional mobile app development services for iOS and Android. Native and cross-platform apps with modern UI/UX design and enterprise-grade security.',
  path: '/mobile-development',
  keywords: ['mobile app development', 'iOS development', 'Android development', 'cross-platform apps', 'React Native', 'Flutter', 'mobile UI/UX', 'enterprise mobile apps']
})

function MobileDevelopmentPage() {

  return (
    <LayoutWrapper>
      <MobileDevelopment />
    </LayoutWrapper>
  )
}

export default MobileDevelopmentPage
