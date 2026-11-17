import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SITE, pageMetadata } from '../data/site';
import { SecurityPage } from './SecurityPage';

const contact = <a href={`mailto:${SITE.email}`}>{SITE.email}</a>;

function Terms() {
  return <>
    <p className="document-lead">These terms cover the Eorix website and its illustrative product previews. Please read them before using the site.</p>
    <section><h2>1. About this website</h2><p>Eorix is a multi-cloud FinOps project maintained by Anubhav. The current website introduces a product in development. It does not provide a production cloud-management service, accept payments, or connect to your cloud accounts.</p></section>
    <section><h2>2. Using the site</h2><p>You may browse the site and use its demonstrations for lawful informational purposes. Do not attempt to disrupt the site, bypass security measures, impersonate another person, or use it to distribute malicious material.</p></section>
    <section><h2>3. Previews and financial examples</h2><p>Dashboard figures and animated data flows are illustrative, not live billing data. Planned capabilities and launch timing may change. Financial examples explain general concepts and are not financial advice or a promise of savings. Linked case studies describe third parties’ reported results, not Eorix customer outcomes.</p></section>
    <section><h2>4. Content and trademarks</h2><p>Eorix branding and original site content belong to their respective rights holders. You may link to this website and quote brief excerpts with attribution. Other uses require permission unless applicable law allows them. AWS, Microsoft Azure, Google Cloud, and other third-party names and logos belong to their owners; their appearance does not imply endorsement or a partnership.</p></section>
    <section><h2>5. External links and contact</h2><p>External websites and email services operate under their own terms and policies. Sending an inquiry does not create a subscription, a service agreement, or a commitment to provide access. Do not send passwords, cloud keys, or confidential billing exports by email.</p></section>
    <section><h2>6. Availability and responsibility</h2><p>The site is provided on an “as available” basis. We aim to keep information useful and accurate but do not guarantee uninterrupted access, completeness, or fitness for a particular purpose. To the extent permitted by applicable law, we are not responsible for losses arising from reliance on previews, external content, or interruptions. Nothing in these terms excludes rights or liabilities that cannot lawfully be excluded.</p></section>
    <section><h2>7. Updates and questions</h2><p>These terms may change as the project develops. The date above identifies the current revision. Any future hosted product, cloud integration, or paid offering will need terms appropriate to that service. Questions about these terms can be sent to {contact}.</p></section>
  </>;
}

function Privacy() {
  return <>
    <p className="document-lead">This policy describes the current Eorix informational website and contact email. The website is maintained by Anubhav, who can be reached at {contact}.</p>
    <section><h2>1. Information you choose to share</h2><p>If you email us, we receive your email address, any name supplied by your email service, the message, and attachments you send. We use that information to answer your inquiry and manage the resulting conversation. An inquiry does not automatically subscribe you to marketing emails. Please do not send cloud credentials or sensitive account data.</p></section>
    <section><h2>2. Technical requests and hosting</h2><p>Your browser sends technical information, such as an IP address, requested URL, and browser details, to the infrastructure serving the website. Hosting and network providers may process or retain access and security logs under their own settings and policies. Infrastructure-level logging and retention are separate from the website’s application code.</p></section>
    <section><h2>3. Cookies, analytics, and previews</h2><p>The current website code does not set cookies, use browser storage, or include advertising, analytics, or social-media tracking scripts. Dashboard filters and animation controls keep temporary state in memory and reset when the page reloads. The demonstrations use sample data; they do not fetch information from your cloud accounts.</p><p>Logos and other website assets are served with the site. The site uses system fonts and does not load a third-party font service.</p></section>
    <section><h2>4. How information is shared</h2><p>Contact correspondence is handled through the email services used to send and receive it. Hosting and email providers process information needed to deliver those services. We do not sell inquiry information or use it for targeted advertising. Information may also be disclosed where legally required or necessary to address misuse or protect legal rights.</p></section>
    <section><h2>5. Retention and security</h2><p>We retain correspondence while it is needed to handle your request, maintain relevant records, or meet applicable obligations, and review it for deletion when no longer needed. Provider backups or legally required records may persist longer. We take reasonable care with correspondence, but no website or email system can guarantee absolute security.</p></section>
    <section><h2>6. Your choices and requests</h2><p>You can browse without contacting us. To ask about information you have shared, request a correction or deletion, or raise a privacy concern, email {contact}. We will consider requests under applicable law and may ask for enough information to verify that the request concerns your data. Any future optional communications will include a way to stop receiving them.</p></section>
    <section><h2>7. Third-party websites</h2><p>LinkedIn, X, and linked case-study publishers receive information when you visit their websites. Their privacy policies apply there. Social profiles are links, not embedded tracking widgets. Email services and external providers may process information in countries different from yours.</p></section>
    <section><h2>8. Changes to this policy</h2><p>We will revise this policy if the site’s data practices change. Accounts, uploads, cloud connections, analytics, and payment features are not part of this version. Appropriate privacy information will be needed before any such feature is introduced. The date above shows when this policy was last updated.</p></section>
  </>;
}

function About() {
  return <>
    <p className="document-lead">Eorix is a multi-cloud FinOps project by Anubhav, built around a simple goal: help engineering and finance understand cloud spending together.</p>
    <section><h2>One picture across your clouds</h2><p>The planned product brings AWS, Microsoft Azure, and Google Cloud billing data into a unified workspace. Its focus is cost allocation, anomaly detection, commitments, forecasts, waste identification, and finance reporting.</p></section>
    <section><h2>Current website version</h2><dl className="version-details"><div><dt>Version</dt><dd>{SITE.version}</dd></div><div><dt>Product status</dt><dd>In development · launching soon</dd></div><div><dt>Website details updated</dt><dd><time dateTime={SITE.updated}>{SITE.updatedLabel}</time></dd></div><div><dt>Availability</dt><dd>Public informational website and interactive demo</dd></div></dl></section>
    <section><h2>What you can explore today</h2><ul><li>An animated illustration of cloud exports moving through a database into Eorix.</li><li>A dashboard preview with sample spending data and provider filters.</li><li>Planned FinOps capabilities and a published external case study.</li><li>Contact details, social profiles, and the site’s terms and privacy information.</li></ul><p>This version does not offer account registration, live cloud integrations, billing ingestion, or paid plans. No launch date or pricing has been announced.</p></section>
    <section><h2>Meet the builder</h2><p>Anubhav maintains the Eorix project. Share a question, feedback, or interest in the launch at {contact}.</p><div className="social-links"><a href="https://www.linkedin.com/in/anubhavbuildz/" target="_blank" rel="noopener noreferrer">LinkedIn · anubhavbuildz <ArrowUpRight size={14}/></a><a href="https://x.com/anubhavbuildz" target="_blank" rel="noopener noreferrer">X · anubhavbuildz <ArrowUpRight size={14}/></a></div></section>
  </>;
}

export function InformationPage({ path }: { path: string }) {
  const documents = { '/terms/': Terms, '/privacy/': Privacy, '/about/': About, '/security/': SecurityPage };
  const Page = documents[path as keyof typeof documents];
  const title = pageMetadata(path).heading;
  const known = Boolean(Page);
  return <div className="information-page wrap"><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav><article className="document"><header className="document-header"><div className="eyebrow">{path === '/about/' ? 'THE PROJECT' : known ? 'WEBSITE INFORMATION' : '404'}</div><h1>{title}</h1>{known && <p className="document-date">Updated <time dateTime={SITE.updated}>{SITE.updatedLabel}</time></p>}</header>{Page ? <Page/> : <p className="document-lead">We couldn’t find that page. Explore the Eorix homepage or use the links below.</p>}<a className="text-link document-back" href="/"><ArrowLeft size={16}/>Back to Eorix</a></article></div>;
}
