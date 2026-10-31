import { useEffect } from 'react';
import { canonicalUrl, getMetaTags, getPageSeo, serializeStructuredData } from '@/data/seo';

export default function SEO({ path = '/' }: { path?: string }) {
  const page = getPageSeo(path);
  useEffect(() => {
    if (!page) return;
    document.title = page.title;
    for (const tag of getMetaTags(page)) {
      let element = document.head.querySelector<HTMLMetaElement>(
        `meta[${tag.attribute}="${tag.key}"]`
      );
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(tag.attribute, tag.key);
        document.head.append(element);
      }
      element.content = tag.content;
    }
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl(page);
    let structuredData = document.getElementById('mpdevflow-structured-data');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'mpdevflow-structured-data';
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.append(structuredData);
    }
    structuredData.textContent = serializeStructuredData(page);
  }, [page]);
  return null;
}
