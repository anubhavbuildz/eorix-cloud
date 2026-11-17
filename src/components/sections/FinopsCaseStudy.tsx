import { ArrowUpRight, Check } from 'lucide-react';

const source = 'https://www.hcltech.com/blogs/finops-beyond-aws-cost-optimization-hub';
const habits = [
  { title: 'Review spend together', description: 'Regular forums connected FinOps, service owners, architects, and platform engineering.' },
  { title: 'Give every action an owner', description: 'Budget and anomaly alerts led to root-cause investigations and tracked fixes.' },
  { title: 'Verify the operating details', description: 'Teams corrected retention, backup cleanup, duplicate logging, and idle resources.' },
];

export function FinopsCaseStudy() {
  return (
    <section className="case-study wrap" id="case-study" aria-labelledby="case-study-title">
      <div className="section-intro">
        <div><div className="eyebrow">FINOPS IN PRACTICE</div><h2 id="case-study-title">Small habits.<br/>A stronger financial outcome.</h2></div>
        <p>Regular reviews help teams catch waste, act on it, and keep it from returning. Here’s what that looks like in practice.</p>
      </div>
      <article className="case-story">
        <div className="case-story-heading"><span className="case-label">Published case study · HCLTech</span><span>31 August 2026</span></div>
        <h3>Beyond automated recommendations: making cost ownership a habit.</h3>
        <p>In a six-month AWS initiative, HCLTech reported additional savings beyond those achieved through Cost Optimization Hub recommendations. Recurring reviews and operational fixes addressed costs that automated recommendations had missed.</p>
        <dl className="case-results">
          <div><dt>Additional monthly savings</dt><dd>$11,100</dd></div>
          <div><dt>Reduction against baseline</dt><dd>~7.4%</dd></div>
          <div><dt>Initiative duration</dt><dd>6 months</dd></div>
        </dl>
        <div className="case-habits">{habits.map(habit => <div key={habit.title}><Check size={18} aria-hidden="true"/><div><h4>{habit.title}</h4><p>{habit.description}</p></div></div>)}</div>
        <div className="case-source"><span>External example; these are HCLTech’s reported results, not Eorix customer results.</span><a href={source} target="_blank" rel="noopener noreferrer">Read the original case study <ArrowUpRight size={15} aria-hidden="true"/></a></div>
      </article>
      <div className="profit-example">
        <div className="profit-explanation"><span className="case-label">Illustrative profitability example</span><h3>How savings reach the margin.</h3><p>If cloud hosting is a cost of delivering your product, reducing it while keeping revenue and other costs steady increases gross profit.</p><p>For this fictional company, a 20% reduction in its cloud bill adds $10,000 to monthly gross profit—a 2 percentage-point increase in gross margin.</p><small>Assumes no additional implementation or ongoing costs. This is an example, not a forecast or HCLTech’s reported profitability.</small></div>
        <div className="profit-table-wrap"><table className="profit-table"><caption>Illustrative monthly financials · USD</caption><thead><tr><th scope="col">Measure</th><th scope="col">Before</th><th scope="col">After</th></tr></thead><tbody><tr><th scope="row">Revenue</th><td>$500,000</td><td>$500,000</td></tr><tr><th scope="row">Other delivery costs</th><td>$150,000</td><td>$150,000</td></tr><tr><th scope="row">Cloud hosting</th><td>$50,000</td><td>$40,000</td></tr><tr className="profit-row"><th scope="row">Gross profit</th><td>$300,000</td><td>$310,000</td></tr><tr className="profit-row"><th scope="row">Gross margin</th><td>60%</td><td>62%</td></tr></tbody></table></div>
      </div>
    </section>
  );
}
