import { SEO } from '../components/ui/seo'
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
      <SEO 
        title="Website Development Surat | Web Design, Mobile Apps, ERP Solution"
        description="Key Concepts is a leading website development and design company in Surat, offering CRM, ERP, eCommerce, and graphics design solutions."
        keywords="website development surat, website design surat, ERP solution surat, odoo development surat, ecommerce website surat, graphics design surat, POS solution Key Concepts IT Services LLP surat india"
      />

      <HeroSection />
      <ClientLogos />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

export { HomePage };