import type { Plugin } from 'vite';
import {
  canonicalUrl,
  getMetaTags,
  getPageSeo,
  SEO_PAGES,
  serializeStructuredData,
  SITE,
} from '../src/data/seo';
import type { PageSeo } from '../src/data/seo';

const BLOCK = /<!-- site-seo:start -->[\s\S]*?<!-- site-seo:end -->/;
const escapeHtml = (text: string) =>
  text.replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!
  );

export function renderSeoHtml(html: string, page: PageSeo): string {
  if (!BLOCK.test(html)) throw new Error('Missing site-seo markers in index.html');
  const tags = [
    `<title>${escapeHtml(page.title)}</title>`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl(page))}" />`,
    ...getMetaTags(page).map(
      (tag) => `<meta ${tag.attribute}="${tag.key}" content="${escapeHtml(tag.content)}" />`
    ),
    `<script id="mpdevflow-structured-data" type="application/ld+json">${serializeStructuredData(page)}</script>`,
  ];
  return html.replace(
    BLOCK,
    () => `<!-- site-seo:start -->\n    ${tags.join('\n    ')}\n    <!-- site-seo:end -->`
  );
}

export function renderSitemap(): string {
  // Deliberately omit lastmod: do not assert a new content-modification date on every build.
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${SEO_PAGES.map((page) => `  <url><loc>${escapeHtml(canonicalUrl(page))}</loc></url>`).join('\n')}\n</urlset>\n`;
}

export function renderPageFiles(template: string) {
  return SEO_PAGES.filter((page) => page.path !== '/').flatMap((page) => {
    const source = renderSeoHtml(template, page);
    // Cover directory-index hosts and extensionless .html resolution (including Vite preview).
    return [
      { fileName: `${page.path.slice(1)}/index.html`, source },
      { fileName: `${page.path.slice(1)}.html`, source },
    ];
  });
}

export function seoPages(): Plugin {
  return {
    name: 'mpdevflow-seo-pages',
    enforce: 'post',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        if (new URL(request.url ?? '/', SITE.url).pathname !== '/sitemap.xml') return next();
        response.setHeader('Content-Type', 'application/xml; charset=utf-8');
        response.end(renderSitemap());
      });
    },
    transformIndexHtml: {
      order: 'post',
      handler(html, context) {
        const path = new URL(context.originalUrl ?? context.path, SITE.url).pathname;
        return renderSeoHtml(html, getPageSeo(path) ?? SEO_PAGES[0]);
      },
    },
    generateBundle: {
      order: 'post',
      handler(_options, bundle) {
        const template = bundle['index.html'];
        if (!template || template.type !== 'asset' || typeof template.source !== 'string')
          throw new Error('Missing built index.html');
        for (const file of renderPageFiles(template.source)) {
          this.emitFile({ type: 'asset', ...file });
        }
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: renderSitemap() });
      },
    },
  };
}
