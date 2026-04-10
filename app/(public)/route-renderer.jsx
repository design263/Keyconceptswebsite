"use client";

import { ServicesPage } from "@/app/pages/services";
import { AboutPage } from "@/app/pages/about";
import { OurStoryPage } from "@/app/pages/our-story";
import { ProcessPage } from "@/app/pages/process";
import { BlogPage } from "@/app/pages/blog";
import { BlogDetailPage } from "@/app/pages/blog-detail";
import { ContactPage } from "@/app/pages/contact";
import { VisitorManagementPage } from "@/app/pages/visitor-management";
import { BrandingServicesPage } from "@/app/pages/branding-services";
import { WebSolutionsPage } from "@/app/pages/web-solutions";
import { MobileDevelopmentPage } from "@/app/pages/mobile-development";
import { OdooERPPage } from "@/app/pages/odoo-erp";
import { ProductDevelopmentPage } from "@/app/pages/product-development";
import { MVPStudioPage } from "@/app/pages/mvp-studio";
import { SupportMaintenancePage } from "@/app/pages/support-maintenance";
import { YounitedCommunitiesPage } from "@/app/pages/younited-communities";
import { ElectionMobilizationPage } from "@/app/pages/election-mobilization";
import { CareersPage } from "@/app/pages/careers";
import { JobDetailPage } from "@/app/pages/job-detail";
import { IndustryTrendsPage } from "@/app/pages/industry-trends";
import { CaseStudiesPage } from "@/app/pages/case-studies";
import { CaseStudyDetailPage } from "@/app/pages/case-study-detail";

const STATIC_ROUTES = {
  services: ServicesPage,
  about: AboutPage,
  "our-story": OurStoryPage,
  process: ProcessPage,
  blog: BlogPage,
  contact: ContactPage,
  "visitor-management": VisitorManagementPage,
  "branding-services": BrandingServicesPage,
  "web-solutions": WebSolutionsPage,
  "mobile-development": MobileDevelopmentPage,
  "odoo-erp": OdooERPPage,
  "product-development": ProductDevelopmentPage,
  "mvp-studio": MVPStudioPage,
  "support-maintenance": SupportMaintenancePage,
  "younited-communities": YounitedCommunitiesPage,
  "election-mobilization": ElectionMobilizationPage,
  careers: CareersPage,
};

export function renderRouteComponent(slug = []) {
  const path = slug.join("/");

  if (slug.length === 1 && STATIC_ROUTES[path]) {
    const Page = STATIC_ROUTES[path];
    return <Page />;
  }

  if (slug[0] === "blog" && slug.length === 2) return <BlogDetailPage />;
  if (slug[0] === "careers" && slug.length === 2) return <JobDetailPage />;
  if (slug[0] === "case-study" && slug.length === 2) return <CaseStudyDetailPage />;
  if (path === "insights/trends") return <IndustryTrendsPage />;
  if (path === "insights/case-studies") return <CaseStudiesPage />;

  return null;
}

export default function RouteRenderer({ slug = [] }) {
  return renderRouteComponent(slug);
}
