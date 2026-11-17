# Eorix

Public website for Eorix, a multi-cloud FinOps project in development. Built with React, TypeScript, and Vite. Dashboard figures and the cloud pipeline are illustrative; this repository does not connect to cloud accounts or process payments.

## Development

```sh
npm ci
npm run dev
```

## Production and validation

```sh
npm run build
npm run check:site
```

The build first compiles the browser bundle, then renders React to static HTML using `react-dom/server`. The intermediate server bundle lives in ignored `dist-ssr/`; deploy only `dist/`. The site needs no production Node server.

Generated routes:

- `/` — homepage, animated pipeline, sample dashboard, FinOps case study, and contact
- `/terms/` — Terms of Service for the informational website
- `/privacy/` — Privacy Policy covering the current website and contact correspondence
- `/security/` — no root access, scoped IAM, least privilege, and planned integration boundaries
- `/about/` — project information, development status, and version from `package.json`
- `/404.html` — not-found document with `noindex`

Each public route has prerendered content, a unique title and description, a canonical URL, absolute social-sharing metadata, and JSON-LD. The build also produces `robots.txt` and `sitemap.xml`. `src/data/site.ts` is the source for the canonical origin, contact details, policy revision date, and metadata. Update the origin there if the production domain changes.

The validation script checks rendered page content, metadata uniqueness, canonical URLs, structured data, sitemap coverage, local assets, footer links, the package version, and the not-found page.

## Hosting

Serve `dist/` at the root of `https://eorix.cloud`. Configure directory-index handling so `/terms/`, `/privacy/`, `/security/`, and `/about/` serve their respective `index.html` files. Serve `404.html` with HTTP status 404 for unknown paths; avoid rewriting all unknown routes to the homepage. Platform-specific hosting configuration is outside this repository.

After deployment, check the direct page URLs and submit `https://eorix.cloud/sitemap.xml` through the domain owner's search-console account. Metadata and prerendering improve crawlability; search engines control indexing and ranking.

## Privacy scope

The website code does not include analytics, advertising scripts, cookies, browser storage, accounts, uploads, or cloud integrations. Fonts use the visitor's system stack. Contact links open an email application; social links open external providers. Hosting/CDN logging and email retention depend on the external services and must be confirmed by the site operator. Update the privacy notice before adding new data collection.

## Branding

Eorix logos are local assets. Cloud-provider SVGs and their provenance are documented in `public/providers/README.md`. Third-party trademarks belong to their owners.
