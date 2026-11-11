import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { seoRoutes } from './src/data/seoRoutes.js'

const SITEMAP_LASTMOD = '2026-11-11'

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function replaceTag(html, pattern, replacement) {
  return html.replace(pattern, () => replacement)
}

function buildNoscriptMarkup(route) {
  const heading = escapeHtml(route.heading || route.title)
  const description = escapeHtml(route.description)
  const links = seoRoutes
    .map(
      (item) =>
        `<a href="${escapeHtml(item.canonical)}">${escapeHtml(item.heading || item.title)}</a>`,
    )
    .join(' | ')

  return `<noscript data-seo-static="true"><main><h1>${heading}</h1><p>${description}</p><nav aria-label="Site navigation">${links}</nav></main></noscript>`
}

function renderRouteHtml(templateHtml, route) {
  const safeTitle = escapeHtml(route.title)
  const safeDescription = escapeHtml(route.description)
  const safeKeywords = escapeHtml(route.keywords || '')
  const safeCanonical = escapeHtml(route.canonical)

  let html = templateHtml.replace(/\s*<noscript data-seo-static="true">[\s\S]*?<\/noscript>/g, '')

  const tagReplacements = [
    [/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`],
    [
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${safeDescription}" />`,
    ],
    [
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${safeCanonical}" />`,
    ],
    [
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${safeCanonical}" />`,
    ],
    [
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${safeTitle}" />`,
    ],
    [
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${safeDescription}" />`,
    ],
    [
      /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:url" content="${safeCanonical}" />`,
    ],
    [
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${safeTitle}" />`,
    ],
    [
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${safeDescription}" />`,
    ],
  ]

  if (safeKeywords) {
    tagReplacements.push([
      /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/,
      `<meta name="keywords" content="${safeKeywords}" />`,
    ])
  }

  for (const [pattern, replacement] of tagReplacements) {
    html = replaceTag(html, pattern, replacement)
  }

  html = replaceTag(
    html,
    /<div id="root"><\/div>/,
    `<div id="root"></div>\n    ${buildNoscriptMarkup(route)}`,
  )

  return html
}

function buildSitemapXml(routes, lastmod) {
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${escapeHtml(route.canonical)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${route.priority ?? '0.8'}</priority>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

function staticRouteSeoPlugin() {
  let outDir = 'dist'

  return {
    name: 'static-route-seo',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const indexPath = path.join(outDir, 'index.html')
      if (!fs.existsSync(indexPath)) return

      const templateHtml = fs.readFileSync(indexPath, 'utf8')

      for (const route of seoRoutes) {
        const routeHtml = renderRouteHtml(templateHtml, route)
        const segments =
          route.path === '/'
            ? []
            : route.path.replace(/^\/+|\/+$/g, '').split('/')
        const targetPath = path.join(outDir, ...segments, 'index.html')
        fs.mkdirSync(path.dirname(targetPath), { recursive: true })
        fs.writeFileSync(targetPath, routeHtml, 'utf8')
      }

      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        buildSitemapXml(seoRoutes, SITEMAP_LASTMOD),
        'utf8',
      )
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    staticRouteSeoPlugin(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
