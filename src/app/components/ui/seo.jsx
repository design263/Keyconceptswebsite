import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SEO = ({
  title,
  description,
  keywords,
  ogImage = 'https://www.keyconcepts.co.in/Areas/Client/asset/images/logo.png',
  ogUrl,
  twitterHandle = '@KCITSindia',
  twitterUrl = 'https://twitter.com/KCITSindia',
  robots = 'index, follow',
  canonical,
}) => {
  const location = useLocation()
  const siteTitle = 'Key Concepts'
  const baseUrl = 'https://v2.keyconcepts.co.in'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const currentFullUrl = ogUrl || `${baseUrl}${location.pathname}`
  const siteDescription = description || 'Key Concepts delivers innovative IT solutions including software development, UI/UX design, Odoo ERP consulting, and more.'

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentFullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:url" content={currentFullUrl} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Key Concepts",
          "url": "https://v2.keyconcepts.co.in/",
          "logo": ogImage,
          "sameAs": [
            "https://www.facebook.com/KeyConceptsIT/",
            "https://twitter.com/KCITSindia"
          ]
        })}
      </script>
    </Helmet>
  )
}

export { SEO }
