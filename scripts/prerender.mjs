import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pages, render, site } from '../dist-ssr/entry-server.js';

const output = resolve('dist');
const template = await readFile(resolve(output, 'index.html'), 'utf8');
for (const path of [...pages, '/404/']) {
  const { body, head } = render(path);
  const html = template.replace(/<!--page-head-start-->[\s\S]*?<!--page-head-end-->/, `<!--page-head-start-->\n    ${head}\n    <!--page-head-end-->`).replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
  const directory = path === '/404/' ? output : resolve(output, `.${path}`);
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, path === '/404/' ? '404.html' : 'index.html'), html);
  console.log(`Prerendered ${path}`);
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(path => `  <url><loc>${site.origin}${path}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile(resolve(output, 'sitemap.xml'), sitemap);
await writeFile(resolve(output, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);
