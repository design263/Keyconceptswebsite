import { HeroSection } from '../components/hero-section'
import { ServicesSection } from '../components/services-section'
import { ProcessSection } from '../components/process-section'
import { CTASection } from '../components/cta-section'
import { TestimonialsSection } from '../components/testimonials-section'
import { ClientLogos } from '../components/client-logos'
import { StatsSection } from '../components/stats-section'
function HomePage() {
  return (
    <>
      {' '}
      <HeroSection /> <ClientLogos /> <StatsSection /> <ServicesSection /> <ProcessSection />{' '}
      <TestimonialsSection /> <CTASection />
    </>
  )
}
export { HomePage }
