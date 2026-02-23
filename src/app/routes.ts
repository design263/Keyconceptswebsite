import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home";
import { ServicesPage } from "./pages/services";
import { AboutPage } from "./pages/about";
import { BlogPage } from "./pages/blog";
import { ContactPage } from "./pages/contact";
import { VisitorManagementPage } from "./pages/visitor-management";
import { BrandingServicesPage } from "./pages/branding-services";
import { WebSolutionsPage } from "./pages/web-solutions";
import { MobileDevelopmentPage } from "./pages/mobile-development";
import { RootLayout } from "./layouts/root-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "about", Component: AboutPage },
      { path: "blog", Component: BlogPage },
      { path: "contact", Component: ContactPage },
      { path: "visitor-management", Component: VisitorManagementPage },
      { path: "branding-services", Component: BrandingServicesPage },
      { path: "web-solutions", Component: WebSolutionsPage },
      { path: "mobile-development", Component: MobileDevelopmentPage },
    ],
  },
]);