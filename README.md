# eorix-cloud

# Eorix — Multi-Cloud FinOps Static React App

A static, component-driven React application migrated from `Eorix.html` for **Eorix**, building a unified FinOps dashboard for AWS, Microsoft Azure, and Google Cloud.

## 🚀 Key Features

- **Component Hierarchy & Scalability**: Cleanly decoupled into atomic design components (layout, dashboard widgets, sections, carousel, and data layers).
- **100% Static, Secure & SEO-Optimized**:
  - Zero backend dependencies; can be deployed directly to GitHub Pages, Cloudflare Pages, Vercel, Netlify, or AWS S3/CloudFront.
  - Complete Schema.org JSON-LD structured data (`SoftwareApplication`, `Organization`, `BlogPosting`).
  - OpenGraph & Twitter Card tags for rich social sharing.
  - Content Security Policy (CSP) compliant, no `eval`, no inline base64 bloat.
- **Interactive Cloud Cost Management Carousel**:
  - Touch-friendly and responsive carousel featuring 4 deep-dive FinOps playbooks.
  - Left & Right navigation controls, slide counter, and pagination dots.
  - Semantic `<article>` cards with reading time, category badge, and ROI metrics.
- **Interactive Multi-Cloud Dashboard Preview**:
  - **Dynamic Time-Range Filter**: Switch between *Last 30 days*, *Last 60 days*, and *Quarter to date* to see reactive KPI updates.
  - **Daily Spend Trend SVG Chart**: Precision vector line & gradient fill with marked anomalies and interactive hover tooltips.
  - **Proportional Multi-Cloud Spend Split**: Visualizing AWS (58%), Azure (27%), and Google Cloud (15%) allocations.
  - **Real-Time FinOps Insights**: Tagged pills for anomalies (`crit`), rightsizing savings (`good`), and commitment coverage (`warn`).
- **Direct Contact Integration**:
  - Interactive direct contact card for `infrabyanubhav@gamil.com` with instant one-click copy feedback.
- **Rich FinOps Aesthetics & Micro-Animations**:
  - Single dark theme derived from the Eorix brand palette (`#080A0F`, `#0E131C`, `#34B1FE`, `#643CFD`).
  - Google Fonts: `Michroma` (Display), `Hanken Grotesk` (Body), and `IBM Plex Mono` (Data/Chips/Eyebrows).
  - Staggered entrance animations (`fadeInUp`), glowing ambient pulse, and animated SVG chart line draw.

---

## 📁 Component Architecture

```
eorix-react/
├── public/
│   ├── brand-mark.png           # Extracted Eorix logo symbol
│   ├── brand-word.png           # Extracted Eorix wordmark
│   └── band-logo.png            # Large closing banner logo
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Container.tsx         # Responsive max-width wrapper
│   │   │   ├── SectionHeader.tsx     # Reusable eyebrow + H2 title
│   │   │   └── Pill.tsx              # Colored status tags (crit/good/warn)
│   │   ├── layout/
│   │   │   ├── Header.tsx            # Sticky header, logo, pulse badge, contact
│   │   │   └── Footer.tsx            # Footer, copyright, tagline
│   │   ├── dashboard/
│   │   │   ├── DashboardPreview.tsx  # Composite preview container with tabs
│   │   │   ├── KpiCards.tsx          # 3 FinOps key metrics (Spend, Coverage, Savings)
│   │   │   ├── SpendChart.tsx        # Interactive SVG sparkline & anomaly marker
│   │   │   ├── CloudSplit.tsx        # Proportional multi-cloud spend bar
│   │   │   └── InsightsList.tsx      # Actionable recommendations
│   │   └── sections/
│   │       ├── HeroSection.tsx       # Main headline, value prop, direct contact card
│   │       ├── CloudListSection.tsx  # AWS, Azure, GCP, and unified cloud rows
│   │       ├── FeaturesSection.tsx   # 6 core monthly FinOps questions
│   │       ├── FinopsCycleSection.tsx# Inform -> Optimize -> Operate cycle
│   │       ├── BlogCarouselSection.tsx # Interactive Cloud Cost Management carousel
│   │       └── ClosingBandSection.tsx# Status banner & brand emblem
│   ├── data/
│   │   ├── dashboardData.ts     # Chart coordinates, KPIs, cloud splits, insights
│   │   ├── finopsContent.ts     # Cloud platforms, features, cycle steps, copy
│   │   └── blogData.ts          # Curated Cloud Cost Management playbooks
│   ├── styles/
│   │   ├── tokens.css           # CSS variables for colors, typography, radii
│   │   └── main.css             # Base styles, responsive media queries, animations
│   ├── types/
│   │   └── index.ts             # Strict TypeScript interfaces
│   ├── App.tsx                  # Root app composing sections
│   ├── main.tsx                 # React DOM mount point
│   └── index.css                # Global entry point
├── dist/                        # Production static bundle (generated via npm run build)
├── index.html                   # HTML entry with Google Fonts & SEO meta
├── package.json
└── vite.config.ts
```

---

## 🛠️ How to Run

### Development Server
```bash
npm run dev
```
Runs at `http://localhost:5173/`.

### Production Build
```bash
npm run build
```
Generates a 100% static distribution bundle in `dist/`.

### Preview Production Build
```bash
npm run preview
```
