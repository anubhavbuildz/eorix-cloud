import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, Layers, ChartNoAxesCombined, ShieldCheck, ChevronDown, Menu, X, CircleDollarSign, Bell, ScanLine, SlidersHorizontal, Check } from 'lucide-react';
import { FINOPS_FEATURES, FINOPS_CYCLE } from './data/finopsContent';
import './styles/main.css';
import { CloudDataFlow } from './components/sections/CloudDataFlow';
import { FinopsCaseStudy } from './components/sections/FinopsCaseStudy';
import { InformationPage } from './pages/InformationPage';
import { normalizePath, SITE } from './data/site';
import { renderHead } from './seo';

const email = SITE.email;
const providers = ['All clouds', 'AWS', 'Azure', 'Google Cloud'];
const icons = [Layers, Bell, ShieldCheck, ChartNoAxesCombined, ScanLine, CircleDollarSign];
const amounts = ['$48,562', '$24,281', '$15,540', '$8,741'];

function SocialLinks() {
  return <div className="social-links" aria-label="Anubhav on social media">
    <a href="https://www.linkedin.com/in/anubhavbuildz/" target="_blank" rel="noopener noreferrer" aria-label="Anubhav on LinkedIn (opens in a new tab)">LinkedIn <ArrowUpRight size={14} aria-hidden="true"/></a>
    <a href="https://x.com/anubhavbuildz" target="_blank" rel="noopener noreferrer" aria-label="Anubhav on X (opens in a new tab)">X <ArrowUpRight size={14} aria-hidden="true"/></a>
  </div>;
}

function Dashboard() {
  const [provider, setProvider] = useState(0);
  const [period, setPeriod] = useState('This month');
  return <div className="dashboard" id="preview">
    <aside className="dash-sidebar"><div className="mini-brand"><img src="/brand-mark.png" alt="Eorix" width="24" height="19"/></div><div className="side-active"><Layers size={18}/></div><ChartNoAxesCombined size={18}/><CircleDollarSign size={18}/><Bell size={18}/><SlidersHorizontal size={18}/><span className="avatar">AC</span></aside>
    <div className="dash-content"><div className="dash-top"><span>Workspace <span className="slash">/</span> <b>Overview</b></span><span className="demo-label">Illustrative demo</span></div>
      <div className="dash-title"><div><h3>Cloud overview</h3><p>Spend, savings, and ownership in one workspace.</p></div><label className="period"><select aria-label="Spending period" value={period} onChange={e => setPeriod(e.target.value)}><option>This month</option><option>Last month</option></select><ChevronDown size={12}/></label></div>
      <div className="provider-tabs" role="group" aria-label="Cloud provider">{providers.map((p,i)=><button key={p} aria-pressed={provider===i} onClick={()=>setProvider(i)} className={provider===i?'selected':''}>{i===0&&<Layers size={12}/>} {p}</button>)}</div>
      <div className="metrics"><div><span>Total cloud spend</span><strong>{period==='This month'?amounts[provider]:['$52,615','$26,307','$16,837','$9,471'][provider]}<small>.00</small></strong><em>↘ 7.7% <span>vs. previous month</span></em></div><div><span>Potential monthly savings</span><strong>{['$8,240','$4,120','$2,637','$1,483'][provider]}<small>.00</small></strong><em className="blue-note"><span className="tiny-dot"/> 12 opportunities identified</em></div></div>
      <div className="chart-head"><b>Spend over time</b><span><i/> {providers[provider]} <span className="chart-unit">USD</span></span></div>
      <div className="chart"><div className="chart-axis"><span>$3k</span><span>$2k</span><span>$1k</span><span>$0</span></div><div className="graph"><div className="grid-lines"/><svg viewBox="0 0 600 150" preserveAspectRatio="none" role="img" aria-label={`Illustrative ${providers[provider]} cloud spending trend`}><defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8b8dff" stopOpacity=".2"/><stop offset="1" stopColor="#8b8dff" stopOpacity="0"/></linearGradient></defs><path d="M0 115 L22 110 L42 119 L63 92 L84 99 L105 75 L126 87 L147 68 L168 81 L189 69 L210 82 L231 46 L252 59 L273 37 L294 51 L315 28 L336 44 L357 34 L378 55 L399 43 L420 59 L441 49 L462 68 L483 56 L504 66 L525 40 L546 49 L567 34 L600 41 L600 150 L0 150 Z" fill="url(#fill)"/><path d={`M0 ${115-provider*6} L22 110 L42 119 L63 92 L84 99 L105 75 L126 87 L147 68 L168 81 L189 69 L210 82 L231 46 L252 59 L273 37 L294 51 L315 28 L336 44 L357 34 L378 55 L399 43 L420 59 L441 49 L462 68 L483 56 L504 66 L525 40 L546 49 L567 34 L600 41`} fill="none" stroke="#8b8dff" strokeWidth="2.5"/></svg><div className="chart-dates">{(period==='This month'?['Jun 1','Jun 7','Jun 14','Jun 21','Jun 30']:['May 1','May 7','May 14','May 21','May 31']).map(date=><span key={date}>{date}</span>)}</div></div></div>
      <div className="dash-bottom"><div><span className="insight-icon"><Check size={13}/></span><span><b>Your cloud, working smarter.</b><small>Find the next opportunity in your spend.</small></span></div><ArrowUpRight size={16}/></div>
    </div>
  </div>;
}

export default function App({ path = '/' }: { path?: string }) {
 const currentPath = normalizePath(path);
 useEffect(() => {
   document.head.querySelectorAll('[data-page-seo]').forEach(element => element.remove());
   document.head.insertAdjacentHTML('beforeend', renderHead(currentPath));
 }, [currentPath]);
 const [menu, setMenu] = useState(false);
 return <><a className="skip-link" href="#main-content">Skip to content</a><div className="launch-banner" role="status"><span className="status-dot"/><span><strong>Launching soon.</strong> A clearer view of your cloud costs is on the way.</span><a href="/#contact">Get in touch <ArrowRight size={14}/></a></div><header className="header"><div className="wrap nav"><a className="brand" href="/" aria-label="Eorix home"><img src="/brand-mark.png" alt="" className="brand-symbol"/><img src="/brand-word.png" alt="Eorix" className="brand-wordmark"/></a><nav id="main-navigation" className={menu?'navigation open':'navigation'} aria-label="Main navigation"><a href="/#platform" onClick={()=>setMenu(false)}>Platform</a><a href="/#capabilities" onClick={()=>setMenu(false)}>Capabilities</a><a href="/#case-study" onClick={()=>setMenu(false)}>Case study</a><a href="/#contact" onClick={()=>setMenu(false)}>Contact</a></nav><a className="button small" href={`mailto:${email}`}>Let’s talk <ArrowUpRight size={15}/></a><button className="menu-toggle" aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu} aria-controls="main-navigation" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
 <main id="main-content">{currentPath === '/' ? <><section className="hero wrap"><div className="hero-copy"><div className="eyebrow"><span/> THE MULTI-CLOUD FINOPS PLATFORM</div><h1>Every cloud connected.<span>Every cost understood.</span></h1><p>From cloud billing exports to a unified database. Eorix brings AWS, Azure, and Google Cloud data together, so engineering and finance can work from the same picture.</p><div className="hero-actions"><a href={`mailto:${email}`} className="button">Get in touch <ArrowUpRight size={17}/></a><a href="#preview" className="text-link">Explore the dashboard <ArrowRight size={17}/></a></div><div className="development"><span className="status-dot"/> In development <span className="divider"/> Built for a more efficient cloud</div></div><CloudDataFlow/></section>
 <section className="product-section wrap"><div className="product-heading"><h2>From raw data to clear decisions.</h2><p>Explore an illustrative view of the workspace we’re building.</p></div><div className="preview-wrapper"><div className="preview-caption"><span><span className="status-dot"/> WORKSPACE / CLOUD OVERVIEW</span><span>PRODUCT PREVIEW <ArrowUpRight size={13}/></span></div><Dashboard/></div></section>
 <section className="cloud-strip wrap" id="platform"><p>THREE CLOUDS. ONE SHARED LANGUAGE.</p><div className="cloud-logos"><span><img className="cloud-provider-logo" src="/providers/aws.svg" width="38" height="38" alt=""/>AWS</span><span><img className="cloud-provider-logo" src="/providers/azure.svg" width="30" height="30" alt=""/>Microsoft Azure</span><span><img className="cloud-provider-logo" src="/providers/gcp.svg" width="34" height="34" alt=""/>Google Cloud</span><span className="unified"><Layers size={22}/> All together.</span></div></section>
 <section className="capabilities wrap" id="capabilities"><div className="section-intro"><div><div className="eyebrow">BUILT FOR CLOUD OPERATIONS</div><h2>Everything you need.<br/>One financial picture.</h2></div><p>Six connected capabilities, designed to turn fragmented billing data into clear decisions. All currently in development.</p></div><div className="feature-grid">{FINOPS_FEATURES.map((f,i)=>{const Icon=icons[i];return <article className="feature" key={f.id}><div className="feature-top"><Icon size={22}/><span>0{i+1}</span></div><h3>{f.title}</h3><p>{f.description}</p><span className="feature-category">{f.category}</span></article>})}</div></section>
 <section className="approach" id="approach"><div className="wrap"><div className="section-intro"><div><div className="eyebrow">A CONTINUOUS PRACTICE</div><h2>Better cloud economics.<br/>One cycle at a time.</h2></div><p>FinOps is a shared habit. Bring engineering, finance, and business together around the same numbers.</p></div><div className="steps">{FINOPS_CYCLE.map(s=><article key={s.name}><div className="step-number">0{s.stepNumber}<ArrowRight size={20}/></div><h3>{s.name}</h3><p>{s.description}</p></article>)}</div></div></section>
 <FinopsCaseStudy/>
 <section className="closing wrap" id="contact" aria-labelledby="contact-title"><div className="eyebrow"><span/> LET’S TALK</div><h2 id="contact-title">Your next cloud conversation starts here.</h2><div className="closing-bottom"><div className="contact-details"><p>Have a question about Eorix, or want to hear about the launch?<br className="desktop-break"/> Send me a message. I’d love to hear from you.</p><a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight size={18}/></a><SocialLinks/></div><a className="button" href={`mailto:${email}`}>Say hello <ArrowUpRight size={18}/></a></div></section></> : <InformationPage path={currentPath}/>}</main>
 <footer className="footer wrap"><a className="brand" href="/"><img src="/brand-mark.png" alt="" className="brand-symbol"/><img src="/brand-word.png" alt="Eorix" className="brand-wordmark"/></a><span>Clarity across every cloud.</span><small>© {new Date().getFullYear()} Eorix</small><SocialLinks/><a className="footer-contact" href={`mailto:${email}`}>Contact <ArrowUpRight size={14}/></a><nav className="footer-pages" aria-label="Website information"><a href="/terms/">Terms of Service</a><a href="/privacy/">Privacy Policy</a><a href="/security/">Security</a><a href="/about/">About · v{SITE.version}</a></nav></footer></>;
}
