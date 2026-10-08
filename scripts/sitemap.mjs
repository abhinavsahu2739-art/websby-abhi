import fs from 'fs'
const SITE = 'https://websby-abhi.vercel.app'
const svc = JSON.parse(fs.readFileSync('src/data/services.json', 'utf8')).map((s) => `/services/${s.slug}/`)
const urls = ['/', ...svc, '/portfolio/', '/about/', '/contact/']
fs.writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `<url><loc>${SITE}${u}</loc></url>`).join('\n')}\n</urlset>\n`)
if (fs.existsSync('dist/404/index.html')) { fs.copyFileSync('dist/404/index.html', 'dist/404.html'); fs.rmSync('dist/404', { recursive: true }) }
