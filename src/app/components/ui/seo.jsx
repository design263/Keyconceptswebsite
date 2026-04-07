import { Helmet } from 'react-helmet-async'

const SEO = ({
  title,
  description,
  keywords,
  ogImage = 'https://www.keyconcepts.co.in/Areas/Client/asset/images/logo.png',
  ogUrl = 'https://v2.keyconcepts.co.in/',
  twitterHandle = '@KCITSindia',
  twitterUrl = 'https://twitter.com/KCITSindia',
  robots = 'index, follow',
  canonical,
}) => {
  const siteTitle = 'Key Concepts'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:url" content={twitterUrl} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta property="article:publisher" content="https://www.facebook.com/KeyConceptsIT/" />
      <meta property="article:author" content="https://www.facebook.com/KeyConceptsIT/" />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Key Concepts",
          url: "https://www.keyconcepts.co.in",
          logo: ogImage,
          sameAs: [
            "https://www.facebook.com/KeyConceptsIT/",
            "https://twitter.com/KCITSindia"
          ]
        })}
      </script>

    </Helmet>
  )
}

export { SEO }
