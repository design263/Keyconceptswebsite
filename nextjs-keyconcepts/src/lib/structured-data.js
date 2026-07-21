import { SITE_NAME, SITE_URL } from '@/lib/seo'

const ORGANIZATION_LOGO = '/images/logo.png'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${ORGANIZATION_LOGO}`,
    sameAs: [
      'https://www.facebook.com/KeyConceptsIT/',
      'https://twitter.com/kcitsindia',
      'https://www.linkedin.com/company/keyconcepts/',
      'https://www.instagram.com/keyconceptsit/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@keyconcepts.co.in',
      contactType: 'customer service',
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  }
}

export function blogPostingSchema(post, slug) {
  const url = `${SITE_URL}/blog/${slug}`
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
    image: post.image,
    url,
    mainEntityOfPage: url,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}${ORGANIZATION_LOGO}`,
      },
    },
    ...(published ? { datePublished: published } : {}),
    keywords: [...(post.tags || []), post.category].filter(Boolean).join(', '),
  }
}

export function articleSchema(caseStudy, slug) {
  const url = `${SITE_URL}/case-study/${slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${caseStudy.title} Case Study`,
    description: caseStudy.challenge,
    image: caseStudy.image,
    url,
    mainEntityOfPage: url,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}${ORGANIZATION_LOGO}`,
      },
    },
  }
}

export function jobPostingSchema(job, id) {
  const url = `${SITE_URL}/careers/${id}`

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
      '@type': 'Organization',
      name: SITE_NAME,
      sameAs: SITE_URL,
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
    datePosted: job.createdAt || job.postedAt || undefined,
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${ORGANIZATION_LOGO}`,
    image: `${SITE_URL}${ORGANIZATION_LOGO}`,
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
