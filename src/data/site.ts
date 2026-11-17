import packageInfo from '../../package.json';

export const SITE = {
  name: 'Eorix',
  origin: 'https://eorix.cloud',
  email: 'infrabyanubhav@gmail.com',
  version: packageInfo.version,
  updated: '2026-11-17',
  updatedLabel: '17 November 2026',
};

export const PAGE_METADATA = {
  '/': {
    title: 'Eorix — Multi-Cloud FinOps & Cloud Cost Visibility',
    description: 'Eorix is building a unified FinOps workspace for AWS, Azure, and Google Cloud. Explore planned cost allocation, anomaly detection, budgeting, and optimization.',
    heading: 'Every cloud connected.',
  },
  '/terms/': {
    title: 'Terms of Service | Eorix',
    description: 'Read the terms for using the Eorix informational website, including preview content, acceptable use, third-party resources, and contact details.',
    heading: 'Terms of Service',
  },
  '/privacy/': {
    title: 'Privacy Policy | Eorix',
    description: 'Learn how the Eorix website handles contact emails, technical requests, cookies, third-party links, and privacy questions.',
    heading: 'Privacy Policy',
  },
  '/security/': {
    title: 'Security & Least-Privilege Cloud Access | Eorix',
    description: 'Explore Eorix’s security design: no root access, scoped IAM policies, least-privilege permissions, and limiting the blast radius of future cloud integrations.',
    heading: 'Security',
  },
  '/about/': {
    title: 'About Eorix & Current Version | Multi-Cloud FinOps',
    description: `Meet Eorix, a multi-cloud FinOps project by Anubhav. See website version ${SITE.version}, current preview capabilities, development status, and contact information.`,
    heading: 'About Eorix',
  },
};
export type PagePath = keyof typeof PAGE_METADATA;
export function normalizePath(path: string): string {
  const cleaned = path.replace(/\/index\.html$/, '').replace(/\/+$/, '');
  return cleaned ? `${cleaned}/` : '/';
}
export function pageMetadata(path: string) {
  return PAGE_METADATA[normalizePath(path) as PagePath] ?? {
    title: 'Page Not Found | Eorix',
    description: 'This Eorix page could not be found. Return to the multi-cloud FinOps homepage.',
    heading: 'Page not found',
  };
}
export function structuredData(path: string) {
  const normalized = normalizePath(path);
  const meta = pageMetadata(path);
  const url = `${SITE.origin}${normalized}`;
  const organization = {
    '@type': 'Organization', '@id': `${SITE.origin}/#organization`, name: SITE.name,
    url: `${SITE.origin}/`, logo: `${SITE.origin}/brand-mark.png`, email: SITE.email,
    sameAs: ['https://www.linkedin.com/in/anubhavbuildz/', 'https://x.com/anubhavbuildz'],
  };
  const website = {
    '@type': 'WebSite', '@id': `${SITE.origin}/#website`, name: SITE.name,
    url: `${SITE.origin}/`, inLanguage: 'en', publisher: { '@id': organization['@id'] },
  };
  const page = {
    '@type': normalized === '/about/' ? 'AboutPage' : 'WebPage', '@id': `${url}#webpage`,
    url, name: meta.title, description: meta.description, inLanguage: 'en',
    isPartOf: { '@id': website['@id'] },
  };
  const breadcrumb = normalized === '/' ? [] : [{
    '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.origin}/` },
      { '@type': 'ListItem', position: 2, name: meta.heading, item: url },
    ],
  }];
  return { '@context': 'https://schema.org', '@graph': [organization, website, page, ...breadcrumb] };
}
