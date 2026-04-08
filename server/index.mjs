import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { resolveRouteMeta, DEFAULT_OG_IMAGE } from '../src/app/seo/route-meta.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DIST_DIR = path.resolve(__dirname, '../dist')
const INDEX_FILE = path.join(DIST_DIR, 'index.html')

const PORT = Number(process.env.PORT || 4173)
const SITE_NAME = 'Key Concepts'
const SITE_URL = (process.env.SITE_URL || 'https://v2.keyconcepts.co.in').replace(/\/$/, '')
const hasSiteTitle = (value = '') => value.toLowerCase().includes(SITE_NAME.toLowerCase())

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const stripManagedMeta = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta[^>]+name=["']title["'][^>]*>/gi, '')
    .replace(/<meta[^>]+name=["']description["'][^>]*>/gi, '')
    .replace(/<meta[^>]+name=["']keywords["'][^>]*>/gi, '')
    .replace(/<meta[^>]+property=["']og:[^"']+["'][^>]*>/gi, '')
    .replace(/<meta[^>]+name=["']twitter:[^"']+["'][^>]*>/gi, '')
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, '')

const buildMetaBlock = ({ pathname, title, description, keywords, ogImage }) => {
  const cleanedPath = pathname === '/' ? '' : pathname
  const canonical = `${SITE_URL}${cleanedPath}`
  const fullTitle = hasSiteTitle(title) ? title : `${title} | ${SITE_NAME}`
  const image = ogImage || DEFAULT_OG_IMAGE

  return `
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="title" content="${escapeHtml(fullTitle)}" />
  <meta name="description" content="${escapeHtml(description)}" />
  ${keywords ? `<meta name="keywords" content="${escapeHtml(keywords)}" />` : ''}
  <link rel="canonical" href="${escapeHtml(canonical)}" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="${escapeHtml(canonical)}" />
  <meta property="og:title" content="${escapeHtml(fullTitle)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${escapeHtml(image)}" />
  <meta property="og:image:secure_url" content="${escapeHtml(image)}" />
  <meta property="og:site_name" content="${SITE_NAME}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${escapeHtml(canonical)}" />
  <meta name="twitter:title" content="${escapeHtml(fullTitle)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${escapeHtml(image)}" />
`
}

const injectMeta = (template, pathname) => {
  const routeMeta = resolveRouteMeta(pathname)
  const base = stripManagedMeta(template)
  const metaBlock = buildMetaBlock({
    pathname,
    title: routeMeta.title,
    description: routeMeta.description,
    keywords: routeMeta.keywords,
    ogImage: routeMeta.ogImage,
  })
  return base.replace('</head>', `${metaBlock}\n</head>`)
}

const app = express()

app.use(
  express.static(DIST_DIR, {
    index: false,
  }),
)

app.get('/{*any}', async (req, res) => {
  try {
    const rawHtml = await fs.readFile(INDEX_FILE, 'utf8')
    const html = injectMeta(rawHtml, req.path || '/')
    res.status(200).set('Content-Type', 'text/html; charset=utf-8').send(html)
  } catch (error) {
    res.status(500).send('Unable to serve application.')
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
