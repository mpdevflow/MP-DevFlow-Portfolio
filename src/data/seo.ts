import { PROJECTS } from './projects';

export const SITE = {
  name: 'MPDevFlow',
  url: 'https://mpdevflow.com',
  title: 'MPDevFlow — Senior-led Web & Product Studio',
  description:
    'Senior-led websites, MVPs, web apps and internal tools. MPDevFlow helps founders and teams turn rough ideas into working products from the Philippines.',
  email: 'hello@mpdevflow.com',
  mark: '/assets/mpdevflow-mark.svg',
  logo: '/assets/mpdevflow-logo.png',
  image: '/assets/mpdevflow-share.png',
  imageAlt:
    'MPDevFlow — From rough idea to working product. Senior-led product studio in the Philippines.',
} as const;

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  type: 'website' | 'article';
}

const projectDescriptions: Record<string, string> = {
  DinkOS:
    'DinkOS helps pickleball clubs prevent double bookings. Explore the live booking and operations product handling 500+ bookings per month for active clients.',
  'Serbisyo Barangay':
    'Explore Serbisyo Barangay, a GovTech product concept connecting resident records, digital identity and public-service requests in one operating system.',
  'Diwata AI':
    'Explore Diwata AI, an offline-first teacher assistant for lesson planning, quizzes and classroom support across mobile and web, even with limited connectivity.',
  'Supra Data':
    'Explore the Supra Data project: a readable real-time crypto price-feed interface designed for stable layouts, clear updates and smooth browsing.',
  GameLobbyPH:
    'Explore the GameLobbyPH project: real-time match management, structured tournaments, automated prize distribution and dispute resolution.',
};

export const SEO_PAGES: PageSeo[] = [
  { path: '/', title: SITE.title, description: SITE.description, type: 'website' },
  {
    path: '/services',
    title: 'Services — MPDevFlow',
    type: 'website',
    description:
      'Senior-led websites, MVPs, web apps, internal tools and ongoing development support. Clear scope and practical delivery from the Philippines.',
  },
  {
    path: '/contact',
    title: 'Contact — MPDevFlow',
    type: 'website',
    description:
      'Bring your rough idea. Talk directly with MPDevFlow about scope, timing and the practical next step for your website or product.',
  },
  ...PROJECTS.map((project) => ({
    path: project.caseStudyPath!,
    title: `${project.title} — Project journal — MPDevFlow`,
    description: projectDescriptions[project.title],
    type: 'article' as const,
  })),
  {
    path: '/privacy',
    title: 'Privacy Policy — MPDevFlow',
    type: 'website',
    description:
      'Read the MPDevFlow privacy policy for how project inquiries, booking details and communication data are handled.',
  },
  {
    path: '/terms',
    title: 'Terms of Service — MPDevFlow',
    type: 'website',
    description:
      'Review the MPDevFlow terms of service for project partnerships, communication, delivery, intellectual property and limitations of liability.',
  },
];

export function getPageSeo(path: string): PageSeo | undefined {
  const pathname = new URL(path, SITE.url).pathname.replace(/\/+$/, '') || '/';
  return SEO_PAGES.find((page) => page.path === pathname);
}

export function canonicalUrl(page: PageSeo): string {
  return new URL(page.path, SITE.url).href;
}

export interface SeoMetaTag {
  attribute: 'name' | 'property';
  key: string;
  content: string;
}

export function getMetaTags(page: PageSeo): SeoMetaTag[] {
  const url = canonicalUrl(page);
  const image = new URL(SITE.image, SITE.url).href;
  return [
    { attribute: 'name', key: 'description', content: page.description },
    { attribute: 'name', key: 'robots', content: 'index, follow, max-image-preview:large' },
    ...Object.entries({
      type: page.type,
      url,
      title: page.title,
      description: page.description,
      site_name: SITE.name,
      locale: 'en_PH',
      image,
      'image:width': '1200',
      'image:height': '630',
      'image:type': 'image/png',
      'image:alt': SITE.imageAlt,
    }).map(([key, content]) => ({ attribute: 'property' as const, key: `og:${key}`, content })),
    ...Object.entries({
      card: 'summary_large_image',
      url,
      title: page.title,
      description: page.description,
      image,
      'image:alt': SITE.imageAlt,
    }).map(([key, content]) => ({ attribute: 'name' as const, key: `twitter:${key}`, content })),
  ];
}

export function getStructuredData(page: PageSeo) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE.url}/#organization`,
        name: SITE.name,
        url: `${SITE.url}/`,
        description: SITE.description,
        email: SITE.email,
        logo: {
          '@type': 'ImageObject',
          url: new URL(SITE.logo, SITE.url).href,
          width: 512,
          height: 512,
        },
        image: new URL(SITE.image, SITE.url).href,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: `${SITE.url}/`,
        name: SITE.name,
        publisher: { '@id': `${SITE.url}/#organization` },
        inLanguage: 'en',
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl(page)}#webpage`,
        url: canonicalUrl(page),
        name: page.title,
        description: page.description,
        inLanguage: 'en',
        isPartOf: { '@id': `${SITE.url}/#website` },
        about: { '@id': `${SITE.url}/#organization` },
      },
    ],
  };
}

export function serializeStructuredData(page: PageSeo): string {
  return JSON.stringify(getStructuredData(page)).replace(/</g, '\\u003c');
}
