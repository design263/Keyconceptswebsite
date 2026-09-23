export const SITE_NAME = 'Key Concepts'
export const PRODUCTION_SITE_URL = 'https://keyconcepts.co.in'
export const SITE_URL = 'https://keyconcepts.co.in'
// export const SITE_URL =
//   process.env.NODE_ENV === 'development'
//     ? 'http://localhost:3000'
//     : (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_SITE_URL)

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
      absolute: 'AI-Native Product Engineering & Software Development | Key Concepts',
    },
    description:
      'Key Concepts is an AI-native product engineering and technology partner helping businesses build, automate, modernise and scale software, SaaS and enterprise systems.',
    keywords:
      'AI-Native Product Engineering, Software Development, Custom Software Company, Enterprise Systems, SaaS Development, Surat, India',
    path: '/',
  },
  'keyconcepts-story': {
    title: {
      absolute: 'About Key Concepts | Product Engineering Company Since 2008',
    },
    description:
      'Discover the story of Key Concepts — built in Surat and trusted worldwide. 16+ years of engineering excellence in SaaS, custom ERP, AI automation, and web applications.',
    keywords:
      'Key Concepts story, company history, software company Surat, product engineering journey',
    path: '/keyconcepts-story',
  },
  process: {
    title: {
      absolute: '6-Step Agile Software Development Process | Key Concepts',
    },
    description:
      'Key Concepts follows Discovery, UI/UX Design, Agile Sprints, QA, Deployment, and Support — transparent milestones and regular client updates.',
    keywords:
      'software development process, agile delivery, web app development workflow, project process, QA process',
    path: '/process',
  },
  contact: {
    title: {
      absolute: 'Contact Key Concepts | Product Engineering & AI',
    },
    description:
      'Contact Key Concepts for AI product engineering, custom software development, SaaS builds, and ERP solutions. Office in Surat, Gujarat.',
    keywords:
      'contact Key Concepts, software company Surat, AI product engineering quote, app development contact',
    path: '/contact',
  },
  careers: {
    title: {
      absolute: 'Software & AI Careers in Surat | Key Concepts',
    },
    description:
      'Explore software engineering and tech careers at Key Concepts in Surat. Build modern SaaS products, AI automation tools, and enterprise applications.',
    keywords:
      'Key Concepts careers, developer jobs Surat, software jobs Surat, AI careers Gujarat',
    path: '/careers',
  },
  services: {
    title: {
      absolute: 'Software Development Services | Web, Mobile, ERP & MVP | Key Concepts',
    },
    description:
      'Complete IT services from Key Concepts: product development, web solutions, mobile apps, custom ERP, MVP studio, branding, and ongoing support.',
    keywords:
      'Key Concepts services, web development, mobile apps, custom ERP, MVP development, software support, Surat',
    path: '/services',
  },
  'product-development': {
    title: {
      absolute: 'Product Development & Product Engineering Services | Key Concepts',
    },
    description:
      'End-to-end product engineering and custom software development. We help startups and enterprises design, build, test, and scale modern web apps, SaaS platforms, and mobile products.',
    keywords:
      'product development, product engineering services, custom software, web app development, mobile app development',
    path: '/product-development',
  },
  'mvp-studio': {
    title: {
      absolute: 'MVP Development Services for Startups | Key Concepts',
    },
    description:
      'Rapid MVP development services for startups. Turn your vision into a launch-ready SaaS or mobile product in weeks with Key Concepts.',
    keywords:
      'MVP development, startup product build, minimum viable product, rapid app development, MVP studio',
    path: '/mvp-studio',
  },
  'custom-erp-solutions': {
    title: {
      absolute: 'Custom ERP Development & Enterprise Solutions | Key Concepts',
    },
    description:
      'Custom ERP development and enterprise software solutions tailored to your business workflows, supply chain, financial management, and operational automation.',
    keywords:
      'custom ERP development, custom ERP software, ERP enterprise solutions, business ERP software, Odoo ERP India',
    path: '/custom-erp-solutions',
  },
  'support-maintenance': {
    title: {
      absolute: 'Support & Maintenance | 24/7 Application Services | Key Concepts',
    },
    description:
      'Reliable support for web and mobile apps. Monitoring, bug fixes, security updates, and performance tuning by the Key Concepts team.',
    keywords:
      'application support, software maintenance, web app support, mobile app maintenance, performance optimization',
    path: '/support-maintenance',
  },
  'web-solutions': {
    title: {
      absolute: 'Web Development | Next.js, E-commerce & APIs | Key Concepts',
    },
    description:
      'Professional web development: business websites, e-commerce, web apps, Chrome extensions, and APIs using Next.js and modern technologies.',
    keywords:
      'web development Surat, Next.js development, ecommerce website, web application, API development',
    path: '/web-solutions',
  },
  'mobile-development': {
    title: {
      absolute: 'Mobile App Development | iOS & Android Apps | Key Concepts',
    },
    description:
      'Native and cross-platform mobile apps by Key Concepts. UI/UX, development, testing, and App Store or Play Store deployment.',
    keywords:
      'mobile app development Surat, iOS app development, Android app development, cross platform apps',
    path: '/mobile-development',
  },
  'claim-genie': {
    title: {
      absolute: 'AI-Powered Insurance Claims Management Platform | Key Concepts',
    },
    description:
      'Claim Genie is an AI-powered insurance claims management platform providing automated surveyor assignment, AI damage estimation, fraud detection, and mobile claim processing.',
    keywords:
      'claims processing software, insurance claims automation, surveyor app, damage estimation AI, fraud detection claims, Claim Genie India',
    path: '/claim-genie',
  },
  'case-study': {
    title: {
      absolute: 'Software & AI Product Engineering Case Studies | Key Concepts',
    },
    description:
      'Explore Key Concepts software and AI product engineering case studies. Discover how we build custom ERPs, marketplace sync engines, and document automation platforms.',
    keywords:
      'software case studies, AI case studies, web development projects, mobile app projects, ERP case studies',
    path: '/insights/case-studies',
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
      'Discover how we engineered a unified marketplace dashboard for Brand Central to synchronize inventory, automate product listings, and scale sales growth.',
    keywords:
      'ecommerce case study, marketplace integration, inventory sync, product listing automation, multi-channel selling, Brand Central',
    path: '/case-study/brand-central',
  },
  'case-study-custom-erp': {
    title: {
      absolute: 'Custom ERP Manufacturing Case Study | Key Concepts',
    },
    description:
      'Read how we scaled operations for a chemical manufacturer using a custom-engineered Odoo ERP connecting sales, inventory, production, and exports.',
    keywords:
      'erp case study, custom erp development, chemical manufacturing software, odoo customization Surat, export documentation automation',
    path: '/case-study/custom-erp',
  },
  'visitor-management': {
    title: {
      absolute: 'Visitor Management & Workplace Access Platform | Key Concepts',
    },
    description:
      'Visitorz by Key Concepts is an enterprise visitor management and workplace access platform with touchless QR check-in, host alerts, and visitor badge printing.',
    keywords:
      'visitor management system, workplace access platform, visitor check-in app, visitor tracking system, reception management, Visitorz India',
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
      absolute: 'Industry Trends & Insights | Software Blog | Key Concepts',
    },
    description:
      'Insights on software development, web and mobile technology, Odoo ERP, MVPs, UI/UX design, and practical topics from Key Concepts.',
    keywords:
      'technology articles, software development insights, web development trends, mobile app topics',
    path: '/insights/trends',
  },
  'insights-case-studies': {
    title: {
      absolute: 'Software & AI Product Engineering Case Studies | Key Concepts',
    },
    description:
      'Explore Key Concepts software and AI product engineering case studies. Discover how we build custom ERPs, marketplace sync engines, and document automation platforms.',
    keywords:
      'software case studies, web development projects, mobile app projects, ERP case studies',
    path: '/insights/case-studies',
  },
  blog: {
    title: {
      absolute: 'Industry Trends & Insights | Software Blog | Key Concepts',
    },
    description:
      'Insights on software development, web and mobile technology, Odoo ERP, MVPs, UI/UX design, and practical topics from Key Concepts.',
    keywords:
      'Key Concepts blog, web development articles, mobile app articles, Odoo ERP blog, software development',
    path: '/insights/trends',
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
    'custom-erp': 'custom-erp-solutions',
    'mvp-development': 'mvp-studio',
    'odoo-erp': 'custom-erp-solutions',
    'our-story': 'keyconcepts-story',
    about: 'keyconcepts-story',
    'branding-services': 'services',
  }
  const resolvedKey = aliases[pageKey] || pageKey
  const page = pageSeo[resolvedKey]

  // Never throw during build — unknown keys fall back to home SEO
  if (!page && !overrides.title && !overrides.description) {
    console.warn(`[seo] Unknown page key "${pageKey}", falling back to home metadata`)
  }

  const fallback = pageSeo.home

  const meta = page || fallback
  const title = overrides.title ?? meta?.title
  const description = trimMetaDescription(
    overrides.description ?? meta?.description,
  )
  const keywords = overrides.keywords ?? meta?.keywords
  const rawPath = overrides.path ?? page?.path ?? `/${String(pageKey).replace(/^\/+/, '')}`
  const path = rawPath.startsWith('/') ? rawPath : `/${rawPath}`

  // Production canonical URL strictly uses HTTPS and production domain
  const canonicalUrl = `${PRODUCTION_SITE_URL}${path}`

  const rawOgImage = overrides.image ?? page?.image ?? DEFAULT_OG_IMAGE
  const ogImageUrl = rawOgImage.startsWith('http')
    ? rawOgImage
    : `${PRODUCTION_SITE_URL}${rawOgImage.startsWith('/') ? rawOgImage : '/' + rawOgImage}`

  const fullTitle = resolveFullTitle(title)

  const robots = overrides.robots ?? {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }

  return {
    title: { absolute: fullTitle },
    description,
    ...(keywords ? { keywords } : {}),
    robots,
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
          url: ogImageUrl,
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
      images: [ogImageUrl],
    },
  }
}

export const adminMetadata = {
  title: { absolute: 'Admin | Key Concepts' },
  robots: {
    index: false,
    follow: true,
  },
}

