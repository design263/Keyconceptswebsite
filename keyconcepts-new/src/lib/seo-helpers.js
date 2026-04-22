/**
 * SEO Helper Functions for consistent metadata across all routes
 */

const SITE_BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://keyconcepts.com'
const SITE_NAME = 'Key Concepts'
const DEFAULT_OG_IMAGE = '/86d73f4575e82c2f8cca971638d48b77628092fb.png' // Add this to your public folder

/**
 * Generate consistent metadata for any page
 * @param {Object} params - SEO parameters
 * @param {string} params.title - Page title
 * @param {string} params.description - Page description
 * @param {string} params.keywords - Comma-separated keywords
 * @param {string} params.path - Current path (e.g., '/about', '/services/web-development')
 * @param {string} params.ogImage - OpenGraph image URL
 * @param {string} params.ogType - OpenGraph type ('website', 'article', 'blog', etc.)
 * @param {string} params.publishedTime - Publication time for articles
 * @param {string[]} params.authors - Authors for articles
 * @param {string} params.twitterCard - Twitter card type ('summary', 'summary_large_image')
 * @returns {Object} Next.js metadata object
 */
export function generatePageMetadata({
  title,
  description,
  keywords = '',
  path = '',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  publishedTime,
  authors = [],
  twitterCard = 'summary_large_image'
}) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  const fullUrl = `${SITE_BASE_URL}${path}`
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_BASE_URL}${ogImage}`

  return {
    title: fullTitle,
    description,
    keywords: keywords ? `${keywords}, Key Concepts, IT solutions, technology consulting` : 'Key Concepts, IT solutions, technology consulting, digital transformation',
    openGraph: {
      title: fullTitle,
      description,
      type: ogType,
      url: fullUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(authors.length > 0 && { authors }),
    },
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      images: [fullOgImage],
    },
    alternates: {
      canonical: fullUrl,
    },
    metadataBase: new URL(SITE_BASE_URL),
  }
}

/**
 * Generate metadata for blog posts and articles
 * @param {Object} article - Article data
 * @param {string} article.title - Article title
 * @param {string} article.excerpt - Article excerpt/description
 * @param {string} article.id - Article ID
 * @param {string} article.image - Article image
 * @param {string} article.category - Article category
 * @param {string} article.author - Article author
 * @param {string} article.date - Publication date
 * @param {string} articleType - Type of article ('blog', 'case-study')
 * @returns {Object} Next.js metadata object
 */
export function generateArticleMetadata(article, articleType = 'blog') {
  const path = articleType === 'case-study' ? `/case-study/${article.id}` : `/blog/${article.id}`
  const keywords = [
    article.category,
    articleType === 'case-study' ? 'case study' : 'blog post',
    article.industry || '',
    ...(article.tags || [])
  ].filter(Boolean).join(', ')

  return generatePageMetadata({
    title: article.title,
    description: article.excerpt,
    keywords,
    path,
    ogImage: article.image,
    ogType: 'article',
    publishedTime: article.date || article.publishedDate,
    authors: article.author ? [article.author] : [],
    twitterCard: 'summary_large_image'
  })
}

/**
 * Generate metadata for service pages
 * @param {Object} service - Service data
 * @param {string} service.title - Service title
 * @param {string} service.description - Service description
 * @param {string} service.path - Service path
 * @param {string[]} service.keywords - Service-specific keywords
 * @returns {Object} Next.js metadata object
 */
export function generateServiceMetadata(service) {
  const keywords = [
    ...(service.keywords || []),
    'IT services',
    'technology solutions',
    'digital transformation',
    'business solutions'
  ].join(', ')

  return generatePageMetadata({
    title: service.title,
    description: service.description,
    keywords,
    path: service.path,
    ogType: 'website'
  })
}

/**
 * Generate metadata for 404 pages
 * @returns {Object} Next.js metadata object
 */
export function generate404Metadata() {
  return generatePageMetadata({
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    path: '/404',
    ogType: 'website'
  })
}

/**
 * Generate metadata for pagination pages
 * @param {Object} params - Pagination parameters
 * @param {string} params.baseTitle - Base title for the page type
 * @param {string} params.baseDescription - Base description
 * @param {string} params.path - Current path
 * @param {number} params.page - Current page number
 * @param {number} params.totalPages - Total pages
 * @returns {Object} Next.js metadata object
 */
export function generatePaginationMetadata({
  baseTitle,
  baseDescription,
  path,
  page,
  totalPages
}) {
  const title = page > 1 ? `${baseTitle} - Page ${page}` : baseTitle
  const description = page > 1 ? `${baseDescription} - Page ${page} of ${totalPages}` : baseDescription
  const currentPath = page > 1 ? `${path}?page=${page}` : path

  return generatePageMetadata({
    title,
    description,
    path: currentPath,
    ogType: 'website'
  })
}
