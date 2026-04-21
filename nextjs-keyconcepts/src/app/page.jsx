import LayoutWrapper from '@/components/layout-wrapper'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ProcessSection } from '@/components/process-section'
import { CTASection } from '@/components/cta-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ClientLogos } from '@/components/client-logos'
import { StatsSection } from '@/components/stats-section'

export const metadata = {
  title: 'Website Development Surat | Web Design, Mobile Apps, ERP Solution',
  description: 'Key Concepts is a leading website development and design company in Surat, offering CRM, ERP, eCommerce, and graphics design solutions.',
  keywords: 'website development surat, website design surat, ERP solution surat, odoo development surat, ecommerce website surat, graphics design surat, POS solution Key Concepts IT Services LLP surat india',
  openGraph: {
    title: 'Website Development Surat | Web Design, Mobile Apps, ERP Solution',
    description: 'Key Concepts is a leading website development and design company in Surat, offering CRM, ERP, eCommerce, and graphics design solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Surat | Web Design, Mobile Apps, ERP Solution',
    description: 'Key Concepts is a leading website development and design company in Surat, offering CRM, ERP, eCommerce, and graphics design solutions.',
  },
}

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
