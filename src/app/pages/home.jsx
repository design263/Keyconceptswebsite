import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { HeroSection } from "../components/hero-section";
import { ServicesSection } from "../components/services-section";
import { ProcessSection } from "../components/process-section";
import { CTASection } from "../components/cta-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { ClientLogos } from "../components/client-logos";
import { StatsSection } from "../components/stats-section";
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(ClientLogos, {}),
    /* @__PURE__ */ jsx(StatsSection, {}),
    /* @__PURE__ */ jsx(ServicesSection, {}),
    /* @__PURE__ */ jsx(ProcessSection, {}),
    /* @__PURE__ */ jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  HomePage
};
