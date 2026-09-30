import { NextResponse } from 'next/server'

/** Permanent redirects so old routes never serve stale pages on live. */
const REDIRECTS = {
  '/about': '/keyconcepts-story',
  '/our-story': '/keyconcepts-story',
  '/services': '/',
  '/web-solutions': '/',
  '/branding-services': '/',
  '/mobile-development': '/',
  '/odoo-erp': '/custom-erp-solutions',
  '/blog': '/insights/trends',
  '/terms-of-use': '/terms-of-service',
  '/visitor-management-system': 'https://visitorz.io/',
}

const NOINDEX_PATHS = new Set(['/cookie-policy', '/terms-of-service'])

export function middleware(request) {
  const { pathname } = request.nextUrl
  const destination = REDIRECTS[pathname]

  if (destination) {
    if (destination.startsWith('http://') || destination.startsWith('https://')) {
      return NextResponse.redirect(destination, 308)
    }

    const url = request.nextUrl.clone()
    url.pathname = destination
    return NextResponse.redirect(url, 308)
  }

  if (NOINDEX_PATHS.has(pathname)) {
    const response = NextResponse.next()
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/about',
    '/about/:path*',
    '/our-story',
    '/our-story/:path*',
    '/services',
    '/services/:path*',
    '/web-solutions',
    '/web-solutions/:path*',
    '/branding-services',
    '/branding-services/:path*',
    '/mobile-development',
    '/mobile-development/:path*',
    '/visitor-management-system',
    '/visitor-management-system/:path*',
    '/odoo-erp',
    '/odoo-erp/:path*',
    '/blog',
    '/terms-of-use',
    '/cookie-policy',
    '/terms-of-service',
  ],
}
