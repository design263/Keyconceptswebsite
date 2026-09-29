import { NextResponse } from 'next/server'

/** Permanent redirects so old routes never serve stale pages on live. */
const REDIRECTS = {
  '/about': '/keyconcepts-story',
  '/our-story': '/keyconcepts-story',
  '/services': '/',
  '/web-solutions': '/',
  '/odoo-erp': '/custom-erp-solutions',
  '/blog': '/insights/trends',
  '/terms-of-use': '/terms-of-service',
}

const NOINDEX_PATHS = new Set(['/cookie-policy', '/terms-of-service'])

export function middleware(request) {
  const { pathname } = request.nextUrl
  const destination = REDIRECTS[pathname]

  if (destination) {
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
    '/odoo-erp',
    '/odoo-erp/:path*',
    '/blog',
    '/terms-of-use',
    '/cookie-policy',
    '/terms-of-service',
  ],
}
