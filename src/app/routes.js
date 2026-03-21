import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/root-layout";
import { HomePage } from "./pages/home";
import { ServicesPage } from "./pages/services";
import { AboutPage } from "./pages/about";
import { BlogPage } from "./pages/blog";
import { BlogDetailPage } from "./pages/blog-detail";
import { ContactPage } from "./pages/contact";
import { VisitorManagementPage } from "./pages/visitor-management";
import { BrandingServicesPage } from "./pages/branding-services";
import { WebSolutionsPage } from "./pages/web-solutions";
import { MobileDevelopmentPage } from "./pages/mobile-development";
import { OdooERPPage } from "./pages/odoo-erp";
import { ProductDevelopmentPage } from "./pages/product-development";
import { MVPStudioPage } from "./pages/mvp-studio";
import { SupportMaintenancePage } from "./pages/support-maintenance";
import { YounitedCommunitiesPage } from "./pages/younited-communities";
import { ElectionMobilizationPage } from "./pages/election-mobilization";
import { CareersPage } from "./pages/careers";
import { JobDetailPage } from "./pages/job-detail";
import { OurStoryPage } from "./pages/our-story";
import { ProcessPage } from "./pages/process";
import { IndustryTrendsPage } from "./pages/industry-trends";
import { CaseStudiesPage } from "./pages/case-studies";
import { CaseStudyDetailPage } from "./pages/case-study-detail";
import { NotFoundPage } from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "about", Component: AboutPage },
      { path: "our-story", Component: OurStoryPage },
      { path: "process", Component: ProcessPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:id", Component: BlogDetailPage },
      { path: "contact", Component: ContactPage },
      { path: "visitor-management", Component: VisitorManagementPage },
      { path: "branding-services", Component: BrandingServicesPage },
      { path: "web-solutions", Component: WebSolutionsPage },
      { path: "mobile-development", Component: MobileDevelopmentPage },
      { path: "odoo-erp", Component: OdooERPPage },
      { path: "product-development", Component: ProductDevelopmentPage },
      { path: "mvp-studio", Component: MVPStudioPage },
      { path: "support-maintenance", Component: SupportMaintenancePage },
      { path: "younited-communities", Component: YounitedCommunitiesPage },
      { path: "election-mobilization", Component: ElectionMobilizationPage },
      { path: "careers", Component: CareersPage },
      { path: "careers/:id", Component: JobDetailPage },
      { path: "insights/trends", Component: IndustryTrendsPage },
      { path: "insights/case-studies", Component: CaseStudiesPage },
      { path: "case-study/:id", Component: CaseStudyDetailPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
