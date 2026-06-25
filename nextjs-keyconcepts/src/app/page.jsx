import LayoutWrapper from '@/components/layout-wrapper'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { IndustriesSection } from '@/components/industries-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { ProcessSection } from '@/components/process-section'
import { CTASection } from '@/components/cta-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FAQSection } from '@/components/faq-section'
import { ClientLogos } from '@/components/client-logos'
import { StatsSection } from '@/components/stats-section'

import { createPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'
import { localBusinessSchema } from '@/lib/structured-data'

export const metadata = createPageMetadata('home')

export default function HomePage() {
  return (
    <LayoutWrapper>
      <JsonLd data={localBusinessSchema()} />
      <HeroSection />
      <ClientLogos />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </LayoutWrapper>
  );
}
