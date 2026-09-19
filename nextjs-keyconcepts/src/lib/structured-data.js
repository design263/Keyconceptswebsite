import { SITE_NAME, PRODUCTION_SITE_URL } from '@/lib/seo'

const ORGANIZATION_LOGO = '/images/logo.png'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${PRODUCTION_SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: 'Key Concepts Innovations Pvt. Ltd.',
    url: PRODUCTION_SITE_URL,
    logo: `${PRODUCTION_SITE_URL}${ORGANIZATION_LOGO}`,
    image: `${PRODUCTION_SITE_URL}${ORGANIZATION_LOGO}`,
    foundingDate: '2008',
    description:
      'Key Concepts Innovations Pvt. Ltd. is an AI-native product engineering and technology partner helping startups and enterprises build, modernise, automate and scale software, SaaS products and enterprise systems.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '301 Highfield Ascot, Opp Palm Avenue, VIP Road, Vesu',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      postalCode: '395007',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919374356357',
      email: 'info@keyconcepts.co.in',
      contactType: 'customer service',
    },
    sameAs: [
      'https://www.facebook.com/KeyConceptsIT/',
      'https://twitter.com/kcitsindia',
      'https://www.linkedin.com/company/keyconcepts/',
      'https://www.instagram.com/keyconceptsit/',
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${PRODUCTION_SITE_URL}/#website`,
    name: SITE_NAME,
    url: PRODUCTION_SITE_URL,
    publisher: {
      '@id': `${PRODUCTION_SITE_URL}/#organization`,
    },
  }
}

export function aboutPageSchema(path = '/keyconcepts-story', name = 'About Key Concepts') {
  const url = `${PRODUCTION_SITE_URL}${path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description:
      'Discover Key Concepts Innovations Pvt. Ltd., an AI-native product engineering company built in Surat and trusted worldwide for custom enterprise software and SaaS solutions.',
    mainEntity: {
      '@id': `${PRODUCTION_SITE_URL}/#organization`,
    },
  }
}

export function serviceSchema({ name, description, path }) {
  const url = `${PRODUCTION_SITE_URL}${path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    provider: {
      '@id': `${PRODUCTION_SITE_URL}/#organization`,
    },
  }
}

export function softwareApplicationSchema({
  name,
  description,
  path,
  applicationCategory = 'BusinessApplication',
  operatingSystem = 'Web, Android, iOS',
}) {
  const url = `${PRODUCTION_SITE_URL}${path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${url}#software`,
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    author: {
      '@id': `${PRODUCTION_SITE_URL}/#organization`,
    },
    publisher: {
      '@id': `${PRODUCTION_SITE_URL}/#organization`,
    },
  }
}

export function blogPostingSchema(post, slug) {
  const url = `${PRODUCTION_SITE_URL}/blog/${slug}`
  const published = post.publishedAt
    ? new Date(post.publishedAt).toISOString()
    : post.date
      ? new Date(post.date).toISOString()
      : undefined

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    ...(post.image
      ? { image: post.image.startsWith('http') ? post.image : `${PRODUCTION_SITE_URL}${post.image}` }
      : {}),
    url,
    mainEntityOfPage: url,
    ...(post.author ? { author: { '@type': 'Person', name: post.author } } : {}),
    publisher: {
      '@id': `${PRODUCTION_SITE_URL}/#organization`,
    },
    ...(published ? { datePublished: published } : {}),
    ...(post.updatedAt ? { dateModified: new Date(post.updatedAt).toISOString() } : {}),
    ...(post.tags || post.category ? { keywords: [...(post.tags || []), post.category].filter(Boolean).join(', ') } : {}),
  }
}

export function articleSchema(caseStudy, slug) {
  const url = `${PRODUCTION_SITE_URL}/case-study/${slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title ? `${caseStudy.title} Case Study` : 'Case Study',
    description: caseStudy.challenge || caseStudy.description,
    ...(caseStudy.image
      ? { image: caseStudy.image.startsWith('http') ? caseStudy.image : `${PRODUCTION_SITE_URL}${caseStudy.image}` }
      : {}),
    url,
    mainEntityOfPage: url,
    author: {
      '@id': `${PRODUCTION_SITE_URL}/#organization`,
    },
    publisher: {
      '@id': `${PRODUCTION_SITE_URL}/#organization`,
    },
  }
}

export function jobPostingSchema(job, id) {
  const url = `${PRODUCTION_SITE_URL}/careers/${id}`

  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description:
      typeof job.description === 'string'
        ? job.description.replace(/\s+/g, ' ').trim()
        : `Apply for the ${job.title} role at ${SITE_NAME}.`,
    url,
    hiringOrganization: {
      '@id': `${PRODUCTION_SITE_URL}/#organization`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location || 'Surat',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },
    employmentType: job.employmentType || job.type || 'FULL_TIME',
    ...(job.createdAt || job.postedAt
      ? { datePosted: new Date(job.createdAt || job.postedAt).toISOString() }
      : {}),
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const fullUrl = item.url.startsWith('http')
        ? item.url
        : `${PRODUCTION_SITE_URL}${item.url.startsWith('/') ? item.url : '/' + item.url}`
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: fullUrl,
      }
    }),
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${PRODUCTION_SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: 'Key Concepts Innovations Pvt. Ltd.',
    url: PRODUCTION_SITE_URL,
    logo: `${PRODUCTION_SITE_URL}${ORGANIZATION_LOGO}`,
    image: `${PRODUCTION_SITE_URL}${ORGANIZATION_LOGO}`,
    telephone: '+919374356357',
    email: 'info@keyconcepts.co.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '301 Highfield Ascot, Opp Palm Avenue, VIP Road, Vesu',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      postalCode: '395007',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '21.141237',
      longitude: '72.779298',
    },
    sameAs: [
      'https://www.facebook.com/KeyConceptsIT/',
      'https://twitter.com/kcitsindia',
      'https://www.linkedin.com/company/keyconcepts/',
      'https://www.instagram.com/keyconceptsit/',
    ],
    priceRange: '$$',
  }
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
