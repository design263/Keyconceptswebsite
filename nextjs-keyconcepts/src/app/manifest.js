import { SITE_NAME } from '@/lib/seo'

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description:
      'Web, app, and software development company in Surat, India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f1592a',
    icons: [
      {
        src: '/images/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
