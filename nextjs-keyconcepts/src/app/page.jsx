import LayoutWrapper from '@/components/layout-wrapper'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ProcessSection } from '@/components/process-section'
import { CTASection } from '@/components/cta-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ClientLogos } from '@/components/client-logos'
import { StatsSection } from '@/components/stats-section'

import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('home')

export default function HomePage() {
  return (
    <LayoutWrapper>
      <HeroSection />
      <ClientLogos />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </LayoutWrapper>
  );
}
