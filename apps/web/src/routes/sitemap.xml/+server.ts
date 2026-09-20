import { whatWeDo } from '@kstar/content';

export const prerender = true;

const ORIGIN = 'https://kstar.co.tz';

const paths = [
  '/',
  '/about',
  '/what-we-do',
  ...whatWeDo.departments.map((d) => `/what-we-do/${d.slug}`),
  '/organizations',
  '/kstar-malezi-foundation',
  '/clickdata-tanzania',
  '/updates',
  '/careers',
  '/get-involved',
  '/partner-with-us',
  '/contact',
  '/privacy-policy',
  '/terms-of-use'
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) =>
      `  <url>\n    <loc>${ORIGIN}${path}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
