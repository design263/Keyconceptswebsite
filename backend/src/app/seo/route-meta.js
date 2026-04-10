const DEFAULT_OG_IMAGE = "https://www.keyconcepts.co.in/Areas/Client/asset/images/logo.png";

export const ROUTE_META = {
  "/": {
    title: "Website Development Surat | Web Design, Mobile Apps, ERP Solution",
    description:
      "Key Concepts is a leading website development and design company in Surat, offering CRM, ERP, eCommerce, and graphics design solutions.",
    keywords:
      "website development surat, website design surat, ERP solution surat, odoo development surat, ecommerce website surat",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/services": {
    title: "Our IT Services & Solutions",
    description:
      "Explore our expert IT services: Odoo ERP, Web & Mobile Development, Digital Marketing, AI Solutions, and more. Transform your business today.",
    keywords: "IT services, Odoo ERP, web development, mobile development, digital marketing, AI solutions",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/about": {
    title: "Company Profile | Key Concepts",
    description:
      "Learn more about Key Concepts, our story, mission, and the expert leadership team behind our success.",
    keywords: "about key concepts, company profile, mission, vision, leadership team",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/contact": {
    title: "Contact Us | Key Concepts",
    description:
      "Get in touch with Key Concepts for your next IT project. We offer Odoo ERP, web and mobile development, and digital marketing services.",
    keywords: "contact us, get in touch, business inquiry, support, key concepts contact",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/careers": {
    title: "Careers & Job Opportunities | Key Concepts",
    description:
      "Join the Key Concepts team! Explore career opportunities in software development, UI/UX design, Odoo consulting, and more in a fast-growing IT environment.",
    keywords: "careers, jobs, hiring, software development jobs, UI/UX careers, odoo consultant",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/our-story": {
    title: "Our Story | Key Concepts",
    description:
      "Discover the journey of Key Concepts, a new generation company with a legacy of delivering high-quality software engineering and ERP solutions.",
    keywords: "our story, company history, journey, legacy, key concepts story",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/process": {
    title: "Our Process | How We Build Success",
    description:
      "Discover our agile development process from discovery and planning to deployment and optimization. We ensure transparency, quality, and timely delivery at every stage.",
    keywords: "development process, agile methodology, software development lifecycle, project management",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/blog": {
    title: "Insights & Articles | Key Concepts",
    description:
      "Stay updated with the latest trends, insights, and best practices in technology, Odoo ERP, and digital transformation.",
    keywords: "blog, insights, articles, technology trends, digital transformation, odoo updates",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/visitor-management": {
    title: "Visitor Management System | Secure & Smart Facility Access",
    description:
      "Transform your reception with our touchless visitor management system. Features include instant host alerts, QR check-ins, meeting room booking, and parcel management.",
    keywords: "visitor management, facility access, touchless check-in, QR code, meeting room booking",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/branding-services": {
    title: "Premium Branding Services | Key Concepts",
    description:
      "We craft unforgettable brand identities that resonate with your audience and stand the test of time. 360 branding from strategy to visual identity.",
    keywords: "branding services, brand identity, logo design, brand strategy, visual identity",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/web-solutions": {
    title: "Custom Web Solutions | High-Performance Web Development",
    description:
      "Build lightning-fast, secure, and scalable web applications. We specialize in Next.js, Headless CMS, and cloud-native hosting to deliver 100/100 performance scores.",
    keywords: "web development, custom web solutions, Next.js, headless CMS, performance optimization",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mobile-development": {
    title: "Mobile App Development | iOS & Android",
    description:
      "Expert mobile app development services for iOS and Android. We build high-performance, secure, and user-friendly mobile applications using native and cross-platform technologies.",
    keywords: "mobile app development, iOS development, Android development, React Native, Flutter",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/odoo-erp": {
    title: "Odoo ERP Solutions | Official Odoo Partner",
    description:
      "Comprehensive Odoo ERP implementation, customization, and support services. Streamline your business operations with our expert Odoo development and integration solutions.",
    keywords: "Odoo ERP, ERP implementation, Odoo customization, Odoo development, business management",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/product-development": {
    title: "Custom Product Development | Build Scalable Apps",
    description:
      "End-to-end custom product development services. We build scalable web and mobile applications using modern technology stacks and agile methodology.",
    keywords: "product development, custom software, scalable applications, agile development",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mvp-studio": {
    title: "MVP Studio | Launch Fast & Scalable",
    description:
      "Launch your MVP in 6-10 weeks with Key Concepts. We provide end-to-end MVP development services, including strategy, UI/UX design, development, and launch support.",
    keywords: "MVP development, minimum viable product, startup development, rapid prototyping",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/support-maintenance": {
    title: "Support & Maintenance | 24/7 Monitoring & Optimization",
    description:
      "Ensure your application remains secure, fast, and always online with our comprehensive support and maintenance services. We offer 24/7 monitoring, bug fixes, and performance updates.",
    keywords: "technical support, maintenance services, 24/7 monitoring, bug fixes, performance optimization",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/younited-communities": {
    title: "Younited Communities | Community Management Platform",
    description:
      "A complete community and association management platform. Streamline member management, event coordination, and approval workflows for Samaj, professional associations, and non-profits.",
    keywords: "community management, association management, member management, event coordination",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/election-mobilization": {
    title: "Election Campaign Management Platform",
    description:
      "Power your digital campaign with our centralized platform for voter outreach, digital campaigning, and real-time performance tracking.",
    keywords: "election campaign, voter outreach, digital campaigning, campaign management",
    ogImage: DEFAULT_OG_IMAGE,
  },
};

export const resolveRouteMeta = (pathname) => {
  if (ROUTE_META[pathname]) return ROUTE_META[pathname];
  if (pathname.startsWith("/blog/")) return ROUTE_META["/blog"];
  if (pathname.startsWith("/careers/")) return ROUTE_META["/careers"];
  return ROUTE_META["/"];
};

export { DEFAULT_OG_IMAGE };
