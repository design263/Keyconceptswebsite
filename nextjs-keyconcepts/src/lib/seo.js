export const SITE_NAME = 'Key Concepts'
export const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : (process.env.NEXT_PUBLIC_SITE_URL || 'https://v2.keyconcepts.co.in')
export const DEFAULT_OG_IMAGE = '/opengraph-image'
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630
export const TWITTER_HANDLE = '@KCITSindia'

export const META_TITLE_MAX = 80
export const META_DESC_MIN = 50
export const META_DESC_MAX = 160

/** Trim title to max chars, preferring segment/word boundaries. */
export function trimMetaTitle(text, max = META_TITLE_MAX) {
  if (!text) return text
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (normalized.length <= max) return normalized

  const cut = normalized.slice(0, max - 1)
  const lastSep = Math.max(
    cut.lastIndexOf(' | '),
    cut.lastIndexOf(' - '),
    cut.lastIndexOf(' '),
  )

  return (lastSep > 20 ? cut.slice(0, lastSep) : cut).trim()
}

/** Trim description to 50–160 chars for SEO snippets. */
export function trimMetaDescription(text, max = META_DESC_MAX) {
  if (!text) return text
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (normalized.length <= max) return normalized

  const cut = normalized.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  const trimmed = (lastSpace >= META_DESC_MIN ? cut.slice(0, lastSpace) : cut).trim()

  return trimmed.endsWith('.') ? trimmed : `${trimmed}.`
}

/** Build a single display title (avoids duplicate brand from layout template). */
export function resolveFullTitle(title) {
  if (typeof title === 'object' && title?.absolute) {
    return trimMetaTitle(title.absolute)
  }

  if (typeof title === 'string') {
    const base = title.trim()
    if (base.includes(SITE_NAME)) {
      return trimMetaTitle(base)
    }
    return trimMetaTitle(`${base} | ${SITE_NAME}`)
  }

  return SITE_NAME
}

export const pageSeo = {
  home: {
    title: {
      absolute: 'Custom Software Development Company in Surat | Key Concepts',
    },
    description:
      'Key Concepts is a top software development company in Surat. We build custom ERP, CRM, mobile apps, and Next.js web solutions that accelerate business growth.',
    keywords:
      'Software Development Company, ERP Software Company, CRM Development, Mobile App Development, Web Development, Odoo ERP, software company Surat',
    path: '/',
  },
  about: {
    title: {
      absolute: 'About Key Concepts | Software Development & IT Company',
    },
    description:
      'Key Concepts is a premier software development company and IT company since 2009. Discover our mission, values, and expert team building custom software and Odoo ERP solutions.',
    keywords:
      'Software Company, Software Development Company, IT Company, Odoo ERP, custom software, developer team Surat, Key Concepts about',
    path: '/about',
  },
  'our-story': {
    title: {
      absolute: 'Our Story | Key Concepts Software Company Journey',
    },
    description:
      'How Key Concepts grew from a small team to a leading software company in Surat — engineering excellence in web, mobile, and product development.',
    keywords:
      'Key Concepts story, company history, software company Surat, web development journey',
    path: '/our-story',
  },
  process: {
    title: {
      absolute: '6-Step Agile Software Development Process',
    },
    description:
      'Key Concepts follows Discovery, UI/UX Design, Agile Sprints, QA, Deployment, and Support — transparent milestones and regular client updates.',
    keywords:
      'software development process, agile delivery, web app development workflow, project process, QA process',
    path: '/process',
  },
  contact: {
    title: {
      absolute: 'Contact Key Concepts | Web & App Development',
    },
    description:
      'Contact Key Concepts for website design, mobile apps, custom software, Odoo ERP, and MVP builds. Office in Surat, Gujarat. Call or email today.',
    keywords:
      'contact Key Concepts, software company Surat, web development enquiry, app development quote',
    path: '/contact',
  },
  careers: {
    title: {
      absolute: 'Careers at Key Concepts | Developer Jobs in Surat',
    },
    description:
      'Join Key Concepts in Surat. Openings for developers, designers, and DevOps engineers. Apply now for software development careers.',
    keywords:
      'Key Concepts careers, developer jobs Surat, designer jobs, software jobs Gujarat',
    path: '/careers',
  },
  services: {
    title: {
      absolute: 'IT Services | Web, Mobile, ERP & MVP Solutions',
    },
    description:
      'Complete IT services: product development, web solutions, mobile apps, Odoo ERP, MVP studio, branding, support, and custom software platforms.',
    keywords:
      'Key Concepts services, web development, mobile apps, Odoo ERP, MVP development, branding, software support',
    path: '/services',
  },
  'product-development': {
    title: {
      absolute: 'Product Development | Custom Software & Web Apps',
    },
    description:
      'End-to-end product development: web apps, mobile apps, backend systems, and AI integrations using agile sprints and scalable architecture.',
    keywords:
      'product development, custom software, web app development, mobile app development, full stack development',
    path: '/product-development',
  },
  'mvp-studio': {
    title: {
      absolute: 'MVP Studio | Rapid App Development in 6-10 Weeks',
    },
    description:
      'Launch your startup fast with Key Concepts MVP Studio. Discovery, design, development, testing, and launch support in 6-10 weeks.',
    keywords:
      'MVP development, startup product build, minimum viable product, rapid app development, MVP studio',
    path: '/mvp-studio',
  },
  'custom-erp-solutions': {
    title: {
      absolute: 'Custom ERP Solutions for Businesses in India | Key Concepts',
    },
    description:
      'Streamline operations with custom ERP solutions tailored to your business. Automate workflows, manage resources, and improve productivity with Key Concepts.',
    keywords:
      'custom ERP solutions, custom ERP software, ERP development company, ERP solutions, business ERP software, enterprise ERP solutions, custom ERP development',
    path: '/custom-erp-solutions',
  },
  'support-maintenance': {
    title: {
      absolute: 'Support & Maintenance | 24/7 Application Services',
    },
    description:
      'Reliable support for web and mobile apps. Monitoring, bug fixes, security updates, and performance tuning by the Key Concepts team.',
    keywords:
      'application support, software maintenance, web app support, mobile app maintenance, performance optimization',
    path: '/support-maintenance',
  },
  'web-solutions': {
    title: {
      absolute: 'Web Development | Next.js, E-commerce & APIs',
    },
    description:
      'Professional web development: business websites, e-commerce, web apps, Chrome extensions, and APIs using Next.js and modern technologies.',
    keywords:
      'web development Surat, Next.js development, ecommerce website, web application, API development',
    path: '/web-solutions',
  },
  'mobile-development': {
    title: {
      absolute: 'Mobile App Development | iOS & Android Apps',
    },
    description:
      'Native and cross-platform mobile apps by Key Concepts. UI/UX, development, testing, and App Store or Play Store deployment.',
    keywords:
      'mobile app development Surat, iOS app development, Android app development, cross platform apps',
    path: '/mobile-development',
  },
  'branding-services': {
    title: {
      absolute: 'Branding & Identity Design | Logo & Visual ID',
    },
    description:
      'Branding services by Key Concepts: brand strategy, logo design, visual identity, brand voice, and guidelines for web, app, and marketing.',
    keywords:
      'branding services, logo design Surat, brand identity, visual design, brand guidelines',
    path: '/branding-services',
  },
  'claim-genie': {
    title: {
      absolute: 'AI Claims Processing Automation Software | Claim Genie',
    },
    description:
      'Automate your insurance claims lifecycle with Claim Genie. Features automated surveyor assignment, AI photo damage estimation, fraud detection, and offline mobile surveying.',
    keywords:
      'claims processing software, insurance claims automation, surveyor app, damage estimation AI, fraud detection claims, Claim Genie India',
    path: '/claim-genie',
  },
  'case-study-legaltech': {
    title: {
      absolute: 'LegalTech Document Automation Case Study | Key Concepts',
    },
    description:
      'Discover how we helped a leading Indian LegalTech platform automate legal document draft creation, dynamically calculate state-wise stamp duty, and integrate Aadhaar e-signing.',
    keywords:
      'legaltech case study, document automation, online stamp duty, aadhaar e-sign integration, automated clause builder, legal documentation India',
    path: '/case-study/legaltech',
  },
  'case-study-brand-central': {
    title: {
      absolute: 'E-commerce Multi-Channel Retail Case Study | Key Concepts',
    },
    description:
      'Discover how we engineered a unified marketplace dashboard for Brand Central to synchronize inventory, automate product listings, and scale sales growth across Amazon, Myntra, Ajio.',
    keywords:
      'ecommerce case study, marketplace integration, inventory sync, product listing automation, multi-channel selling, Brand Central, Amazon Myntra Ajio sync',
    path: '/case-study/brand-central',
  },
  'case-study-custom-erp': {
    title: {
      absolute: 'Custom ERP Manufacturing Case Study | Key Concepts',
    },
    description:
      'Read how we scaled operations for a chemical manufacturer using a custom-engineered Odoo ERP connecting sales, inventory, production, and exports.',
    keywords:
      'erp case study, custom erp development, chemical manufacturing software, odoo customization Surat, export documentation automation, production planner',
    path: '/case-study/custom-erp',
  },
  'visitor-management': {
    title: {
      absolute: 'Visitor Management System & Gate Pass Software | Visitorz',
    },
    description:
      'Implement Visitorz, India\'s leading visitor management system for offices, corporate parks & schools. Features touchless QR check-in, host alerts & e-badges.',
    keywords:
      'visitor management system, gate pass software, visitor check-in app, visitor tracking system, reception management, Visitorz India',
    path: '/visitor-management',
  },
  'younited-communities': {
    title: {
      absolute: 'Housing Society Management Software & App India | Younited',
    },
    description:
      'Simplify society accounting, member billing, helper tracking & communications with Younited, the best housing society management software & app in India.',
    keywords:
      'housing society management software, society management app, housing society accounting software, community management app, Younited India',
    path: '/younited-communities',
  },
  'election-mobilization': {
    title: {
      absolute: 'Election Campaign & Voter Management Software | Key Concepts',
    },
    description:
      'Run winning campaigns in India with our election campaign management software. Track voters, manage booth committees, and coordinate volunteers in real time.',
    keywords:
      'election campaign management software, voter management app, political campaign software, booth management system, volunteer tracking India',
    path: '/election-mobilization',
  },
  'insights-trends': {
    title: {
      absolute: 'Industry Trends & Insights | Software Blog',
    },
    description:
      'Insights on software development, web and mobile technology, Odoo ERP, MVPs, UI/UX design, and practical topics from Key Concepts.',
    keywords:
      'technology articles, software development insights, web development trends, mobile app topics',
    path: '/insights/trends',
  },
  'insights-case-studies': {
    title: {
      absolute: 'Case Studies | Web, Mobile & ERP Projects',
    },
    description:
      'Real case studies: web apps, mobile applications, ERP systems, and custom software with client challenges, approach, and results.',
    keywords:
      'software case studies, web development projects, mobile app projects, ERP case studies',
    path: '/insights/case-studies',
  },
  blog: {
    title: {
      absolute: 'Industry Trends & Insights | Software Blog',
    },
    description:
      'Insights on software development, web and mobile technology, Odoo ERP, MVPs, UI/UX design, and practical topics from Key Concepts.',
    keywords:
      'Key Concepts blog, web development articles, mobile app articles, Odoo ERP blog, software development',
    path: '/blog',
  },
  'privacy-policy': {
    title: {
      absolute: 'Privacy Policy | Key Concepts',
    },
    description:
      'Read our Privacy Policy to understand how Key Concepts collects, uses, protects, and manages your personal and business data.',
    keywords:
      'privacy policy, data protection, privacy terms, data safety, Key Concepts privacy',
    path: '/privacy-policy',
  },
  'terms-of-service': {
    title: {
      absolute: 'Terms of Service | Key Concepts',
    },
    description:
      'Read our Terms of Service. Understand the terms, conditions, and rules for using Key Concepts software development and IT services.',
    keywords:
      'terms of service, terms and conditions, terms of use, service agreement, Key Concepts terms',
    path: '/terms-of-service',
  },
  'cookie-policy': {
    title: {
      absolute: 'Cookie Policy | Key Concepts',
    },
    description:
      'Learn about our Cookie Policy. Find out how Key Concepts uses cookies and tracking technologies to optimize your experience on our website.',
    keywords:
      'cookie policy, web cookies, tracking technologies, browser cookies, user tracking',
    path: '/cookie-policy',
  },
}

export function createPageMetadata(pageKey, overrides = {}) {
  const aliases = {
    'odoo-erp': 'custom-erp-solutions',
  }
  const resolvedKey = aliases[pageKey] || pageKey
  const page = pageSeo[resolvedKey]

  if (!page && !overrides.title && !overrides.description) {
    throw new Error(`Unknown SEO page key: ${pageKey}`)
  }

  const title = overrides.title ?? page?.title
  const description = trimMetaDescription(
    overrides.description ?? page?.description,
  )
  const keywords = overrides.keywords ?? page?.keywords
  const path = overrides.path ?? page?.path ?? '/'
  const canonicalUrl = `${SITE_URL}${path}`
  const ogImage = overrides.image ?? page?.image ?? DEFAULT_OG_IMAGE

  const fullTitle = resolveFullTitle(title)

  return {
    title: { absolute: fullTitle },
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: overrides.type ?? 'website',
      locale: 'en_IN',
      ...(overrides.publishedTime
        ? { publishedTime: overrides.publishedTime }
        : {}),
      images: [
        {
          url: ogImage,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}

export const adminMetadata = {
  title: 'Admin',
}
