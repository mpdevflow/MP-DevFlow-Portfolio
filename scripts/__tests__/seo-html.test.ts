import { describe, expect, it } from 'vitest';
import { renderPageFiles, renderSeoHtml, renderSitemap } from '../seo-html';
import { canonicalUrl, getPageSeo, SEO_PAGES, SITE } from '../../src/data/seo';
import { PROJECTS } from '../../src/data/projects';

const template =
  '<!doctype html><html><head><!-- site-seo:start --><!-- site-seo:end --><script type="module" src="/assets/app.js"></script></head><body><div id="root"></div></body></html>';
const parse = (html: string) => new DOMParser().parseFromString(html, 'text/html');

describe('crawler-facing page metadata', () => {
  it.each(SEO_PAGES.map((page) => [page.path, page] as const))(
    'renders complete metadata for %s without executing JavaScript',
    (_path, page) => {
      const document = parse(renderSeoHtml(template, page));
      expect(document.title).toBe(page.title);
      expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(
        page.description
      );
      expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
        canonicalUrl(page)
      );
      expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(
        canonicalUrl(page)
      );
      expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe(
        page.title
      );
      expect(document.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe(
        `${SITE.url}${SITE.image}`
      );
      expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute('content')).toBe(
        page.title
      );
      const data = JSON.parse(document.getElementById('mpdevflow-structured-data')!.textContent!);
      expect(data['@graph'][0].logo.url).toBe(`${SITE.url}${SITE.logo}`);
      expect(data['@graph'][2].url).toBe(canonicalUrl(page));
      expect(document.querySelector('script[type="module"]')?.getAttribute('src')).toBe(
        '/assets/app.js'
      );
    }
  );

  it('escapes markup and script-like text without adding elements', () => {
    const text = 'Build </script><script>alert("test")</script> & "ship"';
    const document = parse(
      renderSeoHtml(template, { ...SEO_PAGES[0], title: text, description: text })
    );
    expect(document.title).toBe(text);
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(text);
    expect(document.querySelectorAll('script')).toHaveLength(2);
    expect(
      JSON.parse(document.getElementById('mpdevflow-structured-data')!.textContent!)['@graph'][2]
        .name
    ).toBe(text);
  });

  it('replaces an existing page block instead of duplicating tags', () => {
    const contact = getPageSeo('/contact')!;
    const document = parse(renderSeoHtml(renderSeoHtml(template, SEO_PAGES[0]), contact));
    expect(document.title).toBe(contact.title);
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.querySelectorAll('#mpdevflow-structured-data')).toHaveLength(1);
  });

  it('fails the build when the metadata insertion boundary is missing', () => {
    expect(() => renderSeoHtml('<html></html>', SEO_PAGES[0])).toThrow('site-seo');
  });

  it('normalizes queries, fragments and trailing slashes', () => {
    expect(getPageSeo('/services/?ref=share#service-1')?.path).toBe('/services');
    expect(getPageSeo('/not-a-page')).toBeUndefined();
  });
});

describe('sitemap and route coverage', () => {
  it('includes every public page exactly once, including every project', () => {
    const xml = new DOMParser().parseFromString(renderSitemap(), 'application/xml');
    expect(xml.querySelector('parsererror')).toBeNull();
    const urls = [...xml.querySelectorAll('loc')].map((node) => node.textContent);
    expect(urls).toEqual(SEO_PAGES.map(canonicalUrl));
    expect(new Set(urls).size).toBe(10);
    for (const project of PROJECTS) expect(urls).toContain(`${SITE.url}${project.caseStudyPath}`);
    expect(xml.querySelector('lastmod')).toBeNull();
    expect(SEO_PAGES.every((page) => page.description && page.title)).toBe(true);
  });
});

describe('static host page resolution', () => {
  it('emits metadata for both clean-URL and directory-index forms', () => {
    const files = renderPageFiles(template);
    expect(files).toHaveLength((SEO_PAGES.length - 1) * 2);
    for (const page of SEO_PAGES.filter((page) => page.path !== '/')) {
      for (const name of [`${page.path.slice(1)}.html`, `${page.path.slice(1)}/index.html`]) {
        const file = files.find((file) => file.fileName === name)!;
        expect(file).toBeDefined();
        expect(parse(file.source).title).toBe(page.title);
        expect(
          parse(file.source).querySelector('link[rel="canonical"]')?.getAttribute('href')
        ).toBe(canonicalUrl(page));
      }
    }
  });
});
