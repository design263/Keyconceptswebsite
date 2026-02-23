import { HeroSection } from "../components/hero-section";
import { ServicesSection } from "../components/services-section";
import { CTASection } from "../components/cta-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { ClientLogos } from "../components/client-logos";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}