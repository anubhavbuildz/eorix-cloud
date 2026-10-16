# Eorix — Multi-Cloud FinOps Static React App

A static, component-driven React application migrated from `Eorix.html` for **Eorix**, building unified FinOps dashboards for AWS, Microsoft Azure, and Google Cloud.

## 🚀 Key Features

- **Component Hierarchy & Scalability**: Cleanly decoupled into atomic design components (layout, dashboard widgets, sections, common UI primitives, and data layers).
- **100% Static & Secure**:
  - Zero backend dependencies; can be deployed instantly to GitHub Pages, Cloudflare Pages, Vercel, Netlify, or AWS S3/CloudFront.
  - Safe, sanitized form validation with localStorage persistence for early access registration.
  - Content Security Policy (CSP) compliant, no `eval`, no inline base64 bloat.
- **Interactive Multi-Cloud Dashboard Preview**:
  - **Dynamic Time-Range Filter**: Switch between *Last 30 days*, *Last 60 days*, and *Quarter to date* to see reactive KPI updates.
  - **Daily Spend Trend SVG Chart**: Precision vector line & gradient fill with marked anomalies and interactive hover tooltips.
  - **Proportional Multi-Cloud Spend Split**: Visualizing AWS (58%), Azure (27%), and Google Cloud (15%) allocations.
  - **Real-Time FinOps Insights**: Tagged pills for anomalies (`crit`), rightsizing savings (`good`), and commitment coverage (`warn`).
- **Curated FinOps Aesthetics**:
  - Single dark theme derived from the Eorix brand palette (`#080A0F`, `#0E131C`, `#34B1FE`, `#643CFD`).
  - Google Fonts: `Michroma` (Display), `Hanken Grotesk` (Body), and `IBM Plex Mono` (Data/Chips/Eyebrows).
  - Subtle micro-animations (pulsing status dot, hover cards, interactive data points).

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
│   │   │   ├── Header.tsx            # Sticky header, logo, pulse badge, CTA
│   │   │   └── Footer.tsx            # Footer, copyright, tagline
│   │   ├── dashboard/
│   │   │   ├── DashboardPreview.tsx  # Composite preview container with tabs
│   │   │   ├── KpiCards.tsx          # 3 FinOps key metrics (Spend, Coverage, Savings)
│   │   │   ├── SpendChart.tsx        # Interactive SVG sparkline & anomaly marker
│   │   │   ├── CloudSplit.tsx        # Proportional multi-cloud spend bar
│   │   │   └── InsightsList.tsx      # Actionable recommendations
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Main headline, value prop, waitlist form
│   │   │   ├── CloudListSection.tsx  # AWS, Azure, GCP, and unified cloud rows
│   │   │   ├── FeaturesSection.tsx   # 6 core monthly FinOps questions
│   │   │   ├── FinopsCycleSection.tsx# Inform -> Optimize -> Operate cycle
│   │   │   └── ClosingBandSection.tsx# Status banner & brand emblem
│   │   └── modals/
│   │       └── EarlyAccessModal.tsx  # Accessible waitlist registration modal
│   ├── data/
│   │   ├── dashboardData.ts     # Chart coordinates, KPIs, cloud splits, insights
│   │   └── finopsContent.ts     # Cloud platforms, features, cycle steps, copy
│   ├── styles/
│   │   ├── tokens.css           # CSS variables for colors, typography, radii
│   │   └── main.css             # Base styles, responsive media queries, animations
│   ├── types/
│   │   └── index.ts             # Strict TypeScript interfaces
│   ├── App.tsx                  # Root app composing sections and modals
│   ├── main.tsx                 # React DOM mount point
│   └── index.css                # Global entry point
├── dist/                        # Production static bundle (generated via npm run build)
├── index.html                   # HTML entry with Google Fonts & security meta
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
# eorix-cloud
