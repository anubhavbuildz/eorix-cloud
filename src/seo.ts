import { PAGE_METADATA, SITE, normalizePath, pageMetadata, structuredData } from './data/site';

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]!));

export function renderHead(path: string) {
  const normalized = normalizePath(path);
  const meta = pageMetadata(normalized);
  const url = `${SITE.origin}${normalized}`;
  const known = normalized in PAGE_METADATA;
  const tags = [
    `<title data-page-seo>${escapeHtml(meta.title)}</title>`,
    `<meta data-page-seo name="description" content="${escapeHtml(meta.description)}">`,
    `<meta data-page-seo name="robots" content="${known ? 'index,follow,max-image-preview:large' : 'noindex,follow'}">`,
    ...(known ? [`<link data-page-seo rel="canonical" href="${escapeHtml(url)}">`] : []),
    ...Object.entries({ 'og:type': 'website', 'og:site_name': SITE.name, 'og:locale': 'en_US', 'og:title': meta.title, 'og:description': meta.description, 'og:url': url, 'og:image': `${SITE.origin}/band-logo.png`, 'og:image:alt': 'Eorix multi-cloud FinOps logo' }).map(([name, value]) => `<meta data-page-seo property="${name}" content="${escapeHtml(value)}">`),
    ...Object.entries({ 'twitter:card': 'summary_large_image', 'twitter:site': '@anubhavbuildz', 'twitter:title': meta.title, 'twitter:description': meta.description, 'twitter:image': `${SITE.origin}/band-logo.png`, 'twitter:image:alt': 'Eorix multi-cloud FinOps logo' }).map(([name, value]) => `<meta data-page-seo name="${name}" content="${escapeHtml(value)}">`),
    ...(known ? [`<script data-page-seo type="application/ld+json">${JSON.stringify(structuredData(path)).replace(/</g, '\\u003c')}</script>`] : []),
  ];
  return tags.join('\n    ');
}
