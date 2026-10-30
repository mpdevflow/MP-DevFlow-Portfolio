import { useEffect } from 'react';

const SITE_URL = 'https://mpdevflow.com';
const DEFAULT_IMAGE = '/assets/seo_og_share.png';
interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}
const absoluteUrl = (path: string) => new URL(path, SITE_URL).href;

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    const canonicalUrl = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);
    const meta = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.append(element);
      }
      element.content = content;
    };
    meta('name', 'description', description);
    for (const [key, value] of Object.entries({
      type,
      url: canonicalUrl,
      title,
      description,
      image: imageUrl,
    }))
      meta('property', `og:${key}`, value);
    for (const [key, value] of Object.entries({
      card: 'summary_large_image',
      url: canonicalUrl,
      title,
      description,
      image: imageUrl,
    }))
      meta('name', `twitter:${key}`, value);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description, path, image, type]);
  return null;
}
