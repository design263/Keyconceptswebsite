export const SITE_NAME = 'Key Concepts'
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://v2.keyconcepts.co.in'
export const DEFAULT_OG_IMAGE = '/opengraph-image'
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630
export const TWITTER_HANDLE = '@KCITSindia'

export const META_TITLE_MAX = 60
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
      absolute: 'Web, App & Software Development Company | Key Concepts Surat',
    },
    description:
      'Key Concepts is a Surat-based web, app, and software development company since 2009. We design websites, mobile apps, Odoo ERP, and custom digital products.',
    keywords:
      'web development Surat, software development company, mobile app development, Odoo ERP, UI UX design, product development',
    path: '/',
  },
  about: {
    title: {
      absolute: 'About Key Concepts | IT Company in Surat Since 2009',
    },
    description:
      'Trusted IT company in Surat since 2009. We deliver websites, mobile apps, custom software, branding, and Odoo ERP solutions for clients worldwide.',
    keywords:
      'about Key Concepts, IT company Surat, software development company, web development team Surat',
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
  'odoo-erp': {
    title: {
      absolute: 'Odoo ERP Development & Implementation Services',
    },
    description:
      'Odoo ERP by Key Concepts: implementation, custom modules, integrations, data migration, and AMC support for sales, inventory, and HR.',
    keywords:
      'Odoo development Surat, Odoo ERP implementation, Odoo customization, Odoo integration, ERP software',
    path: '/odoo-erp',
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
  'visitor-management': {
    title: {
      absolute: 'Visitorz | Visitor Management for Offices',
    },
    description:
      'Visitorz by Key Concepts: QR check-in, host alerts, visitor badges, blacklist screening, pre-registration, and visitor history.',
    keywords:
      'visitor management system, gate management software, visitor check-in app, reception management, Visitorz',
    path: '/visitor-management',
  },
  'younited-communities': {
    title: {
      absolute: 'Younited Communities | Housing Society Platform',
    },
    description:
      'Younited Communities: manage housing society members, events, communications, payments, and daily operations in one platform.',
    keywords:
      'community management software, association management app, housing society software, member management platform',
    path: '/younited-communities',
  },
  'election-mobilization': {
    title: {
      absolute: 'Election Mobilization | Campaign Management App',
    },
    description:
      'Digital campaigning, voter outreach, volunteer coordination, field mobilization, and campaign activity tracking by Key Concepts.',
    keywords:
      'election campaign app, voter outreach software, political campaign platform, field mobilization app',
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
}

export function createPageMetadata(pageKey, overrides = {}) {
  const page = pageSeo[pageKey]

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
