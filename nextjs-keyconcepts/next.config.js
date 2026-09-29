/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer'

// api.keyconcepts.co.in ships an incomplete TLS chain; Node SSR fails with
// UNABLE_TO_VERIFY_LEAF_SIGNATURE. Enable only for local/dev via .env.local.
// Fix the cert on the API host for a proper production solution.
if (process.env.ALLOW_INSECURE_TLS === 'true') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  allowedDevOrigins: [
    'https://enlargeable-kaycee-creamlaid.ngrok-free.dev',
  ],
  output: 'standalone',
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/insights/trends',
        permanent: true,
      },
      {
        source: '/odoo-erp',
        destination: '/custom-erp-solutions',
        permanent: true,
      },
      {
        source: '/our-story',
        destination: '/keyconcepts-story',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/web-solutions',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/keyconcepts-story',
        permanent: true,
      },
      {
        source: '/terms-of-use',
        destination: '/terms-of-service',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/cookie-policy',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/terms-of-service',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
}

export default withBundleAnalyzer(nextConfig)
