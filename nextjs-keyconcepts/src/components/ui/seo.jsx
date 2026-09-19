import { Helmet } from 'react-helmet-async'
import { usePathname } from 'next/navigation'

const SEO = ({
  title,
  description,
  keywords,
  ogImage = 'https://www.keyconcepts.co.in/Areas/Client/asset/images/logo.png',
  ogUrl,
  twitterHandle = '@KCITSindia',
  twitterUrl = 'https://twitter.com/KCITSindia',
  canonical,
}) => {
  const pathname = usePathname()
  const siteTitle = 'Key Concepts'
  const baseUrl = 'https://keyconcepts.co.in'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const currentFullUrl = ogUrl || `${baseUrl}${pathname}`
  const siteDescription = description || 'Key Concepts is an AI-native product engineering and technology partner helping businesses build, automate, modernise and scale software, SaaS and enterprise systems.'

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
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
          "url": "https://keyconcepts.co.in/",
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
