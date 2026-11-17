import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';

const origin = 'https://eorix.cloud';
const paths = ['/', '/terms/', '/privacy/', '/about/', '/security/'];
const titles = new Set();
const descriptions = new Set();
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
for (const path of paths) {
  const html = await readFile(resolve('dist', `.${path}`, 'index.html'), 'utf8');
  const title = html.match(/<title[^>]*>(.*?)<\/title>/s)?.[1];
  const description = html.match(/name="description" content="([^"]+)"/)?.[1];
  assert(title && !titles.has(title), `${path}: needs a unique title`);
  assert(description && !descriptions.has(description), `${path}: needs a unique description`);
  titles.add(title);
  descriptions.add(description);
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${path}: exactly one rendered H1`);
  assert(html.includes(`rel="canonical" href="${origin}${path}"`), `${path}: correct canonical`);
  assert(sitemap.includes(`<loc>${origin}${path}</loc>`), `${path}: sitemap entry`);
  assert(html.includes('name="robots" content="index,follow'), `${path}: indexable`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, `${path}: no duplicate element IDs`);
  for (const match of html.matchAll(/href="(#[^"]+)"/g)) assert(ids.includes(match[1].slice(1)), `${path}: anchor ${match[1]} exists`);

  const json = JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)[1]);
  assert(json['@graph'].some(item => item.url === `${origin}${path}`), `${path}: matching structured data`);
  assert(!html.includes('schema.org/PreOrder') && !html.includes('"price":"0"'), `${path}: no unannounced price`);
  for (const link of ['/terms/', '/privacy/', '/about/', '/security/']) assert(html.includes(`href="${link}"`), `${path}: footer ${link}`);
  for (const match of html.matchAll(/(?:src|href)="(\/(?:assets|providers)\/[^"?#]+)"/g)) await access(resolve('dist', `.${match[1]}`));
  assert(!/fonts\.googleapis|googletagmanager|google-analytics/.test(html), `${path}: no undeclared font or tracking request`);
  console.log(`Verified ${path}: rendered content, metadata, structured data, footer links, assets`);
}
const home = await readFile('dist/index.html', 'utf8');
assert(home.includes('How your cloud data connects') && home.includes('Published case study'), 'Homepage content must be present before JavaScript');
const about = await readFile('dist/about/index.html', 'utf8');
const packageInfo = JSON.parse(await readFile('package.json', 'utf8'));
assert(about.includes(`<dd>${packageInfo.version}</dd>`), 'About version must match package.json');
const privacy = await readFile('dist/privacy/index.html', 'utf8');
assert(privacy.includes('Technical requests and hosting') && privacy.includes('infrabyanubhav@gmail.com'), 'Privacy notice needs contact and hosting disclosure');
const security = await readFile('dist/security/index.html', 'utf8');
for (const topic of ['No root access', 'IAM policies', 'Least privilege', 'Reducing the blast radius', 'intended design', 'infrabyanubhav@gmail.com']) assert(security.includes(topic), `Security page needs ${topic}`);
const missing = await readFile('dist/404.html', 'utf8');
assert(missing.includes('noindex,follow') && missing.includes('Page not found'), '404 page must not be indexed');
const robots = await readFile('dist/robots.txt', 'utf8');
assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`), 'Robots must advertise sitemap');
console.log('SEO and static-page checks passed.');
