import React, { useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, Download, Github,
  Linkedin, Mail, Menu, X, MapPin, MoveUpRight
} from 'lucide-react';
import profilePhoto from './assets/images/profile-photo.jpg';

const projects = [
  {
    number: '01',
    type: 'MARKET ANALYTICS',
    title: 'Market regime & execution analysis',
    question: 'When does an intraday setup have an edge — and when should it stay out?',
    approach: 'A research workflow combining market data, VWAP context and execution rules to study how conditions affect trade quality.',
    tools: ['Python', 'Pandas', 'Market data', 'Backtesting'],
    visual: 'market',
  },
  {
    number: '02',
    type: 'CUSTOMER ANALYTICS',
    title: 'Customer segmentation',
    question: 'Which customer groups behave differently, and what should a business do about it?',
    approach: 'An exploratory segmentation workflow using behavioural and spending signals, clustering and dimensionality reduction to make customer groups easier to interpret.',
    tools: ['Python', 'Scikit-learn', 'K-Means', 'PCA'],
    visual: 'segments',
  },
  {
    number: '03',
    type: 'BUSINESS INTELLIGENCE',
    title: 'E-commerce performance analysis',
    question: 'What is driving revenue, repeat purchases and product performance?',
    approach: 'A SQL-led analysis of transactional data using joins, aggregations and time-based comparisons to turn raw orders into decision-ready metrics.',
    tools: ['SQL', 'Joins', 'CTEs', 'KPI analysis'],
    visual: 'sql',
  },
  {
    number: '04',
    type: 'FINANCIAL ANALYTICS',
    title: 'Trading strategy research',
    question: 'How robust is a strategy after costs, risk and changing market conditions?',
    approach: 'A systematic research process for testing rule-based ideas, reviewing drawdowns and examining the effect of position sizing.',
    tools: ['Python', 'Backtesting', 'Risk', 'Statistics'],
    visual: 'risk',
  },
];

const experience = [
  {
    period: 'MAY — JUL 2025',
    role: 'Business & Data Analyst Intern',
    organisation: 'Hightide · FinTech',
    detail: 'Worked with marketing and user datasets, developed KPI views around acquisition and engagement, and translated behavioural patterns into inputs for product and growth discussions.',
  },
  {
    period: 'VENTURE PROJECT',
    role: 'Co-founder',
    organisation: 'MentorQ Pro · EdTech',
    detail: 'Helped shape an early mentoring-platform concept, exploring demand validation, lead generation and user engagement. The venture is no longer active.',
  },
  {
    period: 'AUG 2024 — MAR 2025',
    role: 'Senior Induction Mentor',
    organisation: 'Student Counselling Services · IIT (BHU)',
    detail: 'Supported onboarding and mentoring for a cohort of 60+ students, helping them navigate their transition into campus life.',
  },
  {
    period: 'JUL — OCT 2023',
    role: 'Marketing Executive',
    organisation: 'Spardha · IIT (BHU)',
    detail: 'Contributed to sponsorship outreach and partner communication for the institute’s annual sports festival, supporting sponsorships of ₹5 lakh+.',
  },
];

const capabilities = [
  { label: 'ANALYSE', items: 'Python · SQL · Excel · Statistics' },
  { label: 'EXPLAIN', items: 'Power BI · Tableau · Data storytelling · KPI design' },
  { label: 'INVESTIGATE', items: 'Product analytics · Customer behaviour · Market research' },
  { label: 'BUILD', items: 'Scikit-learn · Streamlit · Automation · AI workflows' },
];

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === 'market') return (
    <div className="visual-market">
      <div className="visual-topline"><span>INTRADAY / NIFTY</span><span className="visual-live">RESEARCH VIEW</span></div>
      <div className="market-value">VWAP <b>—</b> PRICE <b>↗</b></div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Illustrative market line chart">
        <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#b7a27a" stopOpacity=".22"/><stop offset="1" stopColor="#b7a27a" stopOpacity="0"/></linearGradient></defs>
        {[35,75,115,155].map(y => <line key={y} x1="0" x2="520" y1={y} y2={y} stroke="currentColor" opacity=".12" strokeDasharray="3 6"/>)}
        <path d="M0 126 C28 120 40 92 67 103 S106 132 132 98 S169 72 195 87 S232 112 260 77 S300 82 325 60 S366 79 392 49 S432 63 455 36 S490 51 520 19 L520 170 L0 170Z" fill="url(#chartFill)"/>
        <path d="M0 126 C28 120 40 92 67 103 S106 132 132 98 S169 72 195 87 S232 112 260 77 S300 82 325 60 S366 79 392 49 S432 63 455 36 S490 51 520 19" fill="none" stroke="#c6b18a" strokeWidth="2.5"/>
        <path d="M0 139 C90 130 130 123 210 116 S330 104 410 89 S475 83 520 75" fill="none" stroke="#7c9d98" strokeWidth="1.8" strokeDasharray="5 5"/>
      </svg>
      <div className="visual-legend"><span><i className="legend-gold"/> Price action</span><span><i className="legend-sage"/> VWAP reference</span></div>
    </div>
  );
  if (kind === 'segments') return (
    <div className="visual-segments">
      <div className="visual-topline"><span>BEHAVIOURAL GROUPS</span><span>CLUSTER VIEW</span></div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Illustrative customer cluster plot">
        <line x1="30" y1="160" x2="490" y2="160" stroke="currentColor" opacity=".3"/><line x1="30" y1="18" x2="30" y2="160" stroke="currentColor" opacity=".3"/>
        {Array.from({length:38},(_,i)=>{const groups=[[100+(i%7)*13,108+Math.floor(i/7)*10],[290+(i%6)*14,52+Math.floor(i/6)*11],[385+(i%5)*13,125+Math.floor(i/5)*8]];const p=groups[i%3];return <circle key={i} cx={p[0]+Math.sin(i*3)*5} cy={p[1]+Math.cos(i*2)*5} r="4.5" fill={['#c6b18a','#8ca9a1','#b9a8bb'][i%3]} opacity=".88"/>})}
        <text x="260" y="184" fill="currentColor" opacity=".5" fontSize="10" textAnchor="middle">BEHAVIOURAL DIMENSION 01</text>
      </svg>
      <div className="visual-legend"><span><i className="legend-gold"/> Group A</span><span><i className="legend-sage"/> Group B</span><span><i className="legend-lilac"/> Group C</span></div>
    </div>
  );
  if (kind === 'sql') return (
    <div className="visual-code">
      <div className="code-bar"><span/><span/><span/><small>revenue_analysis.sql</small></div>
      <pre><code><em>WITH</em> monthly_orders <em>AS</em> ({'\n'}  <em>SELECT</em>{'\n'}    DATE_TRUNC(<i>'month'</i>, order_date) <em>AS</em> month,{'\n'}    <em>COUNT</em>(<em>DISTINCT</em> customer_id) customers,{'\n'}    <em>SUM</em>(order_value) revenue{'\n'}  <em>FROM</em> orders{'\n'}  <em>GROUP BY</em> 1{'\n'}){'\n'}<em>SELECT</em> month, customers, revenue{'\n'}<em>FROM</em> monthly_orders{'\n'}<em>ORDER BY</em> month;</code></pre>
    </div>
  );
  return (
    <div className="visual-risk">
      <div className="visual-topline"><span>STRATEGY REVIEW</span><span>RISK FIRST</span></div>
      <div className="risk-grid"><div><small>MAX DRAWDOWN</small><b>—</b><span>Measure downside</span></div><div><small>POSITION SIZE</small><b>ƒ(x)</b><span>Control exposure</span></div><div><small>ROBUSTNESS</small><b>↗</b><span>Test regimes</span></div></div>
      <div className="risk-note">A good backtest is a hypothesis, not a promise.</div>
    </div>
  );
}

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Anurag Parkhe home">AP<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> ANALYTICS · BUSINESS · FINANCE</div>
            <h1>I make data<br/><span>useful.</span></h1>
            <p className="hero-lede">I’m Anurag Parkhe — an analyst with an engineering mindset, interested in the questions behind business performance, customer behaviour and financial markets.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={16}/></a>
              <a className="button button-quiet" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> Download résumé</a>
            </div>
            <div className="hero-meta"><span><MapPin size={14}/> India</span><span className="meta-separator"/> <span>IIT (BHU), Varanasi · B.Tech 2026</span></div>
          </div>
          <div className="hero-aside">
            <div className="portrait-frame"><img src={profilePhoto} alt="Portrait of Anurag Parkhe"/><span className="portrait-index">PROFILE / 001</span></div>
            <div className="hero-note"><span className="note-mark">“</span><p>Curiosity is the starting point.<br/>Clarity is the deliverable.</p></div>
            <div className="vertical-label">INDEPENDENT THINKING / MEASURABLE WORK</div>
          </div>
          <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15}/></a>
        </section>

        <section className="intro-band">
          <div className="section-wrap intro-inner"><span className="section-kicker">01 / PERSPECTIVE</span><p>Good analysis doesn’t stop at a chart. It connects <em>what happened</em>, <em>why it happened</em>, and <em>what to do next</em>.</p><span className="intro-signature">ANURAG PARKHE</span></div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading"><div><span className="section-kicker">02 / SELECTED WORK</span><h2>Questions worth<br/><span>working on.</span></h2></div><p className="section-aside">A selection of analytical explorations across markets, customers and business performance.</p></div>
          <div className="project-list">
            {projects.map(project => (
              <article className="project-row" key={project.number}>
                <div className="project-copy">
                  <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
                  <h3>{project.title}</h3>
                  <p className="project-question">{project.question}</p>
                  <p className="project-approach">{project.approach}</p>
                  <div className="tag-list">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
                </div>
                <div className={'project-visual project-visual-' + project.visual}><ProjectVisual kind={project.visual}/></div>
              </article>
            ))}
          </div>
          <div className="work-footnote"><span className="small-dot"/> Project visuals are explanatory illustrations. Detailed repositories and supporting analysis can be shared where available.</div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap">
            <div className="section-heading"><div><span className="section-kicker">03 / EXPERIENCE</span><h2>Where I’ve<br/><span>contributed.</span></h2></div><p className="section-aside">A mix of analytical work, early-stage building and people-focused leadership.</p></div>
            <div className="experience-list">
              {experience.map((item, index) => (
                <article className="experience-row" key={item.organisation}>
                  <span className="experience-number">0{index + 1}</span>
                  <div className="experience-main"><span className="experience-period">{item.period}</span><h3>{item.role}</h3><span className="experience-org">{item.organisation}</span></div>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="section-heading"><div><span className="section-kicker">04 / ABOUT</span><h2>Engineering mindset.<br/><span>Business curiosity.</span></h2></div></div>
          <div className="about-grid">
            <div className="about-story"><p className="about-lede">My starting point was ceramic engineering at IIT (BHU). Along the way, I became increasingly interested in how organisations make decisions — how products grow, how customers behave, how markets move, and how operations can improve.</p><p>That curiosity led me towards analytics, finance and building small ventures. I enjoy moving between detail and the bigger picture: writing a query, questioning a metric, testing an assumption, and explaining what the evidence means in plain language.</p><p>I’m most energised by work where analysis is close to a real decision.</p><div className="education-line"><span>EDUCATION</span><b>Indian Institute of Technology (BHU), Varanasi</b><small>B.Tech · Ceramic Engineering · 2022—2026</small></div></div>
            <div className="capability-panel"><span className="capability-title">HOW I WORK</span>{capabilities.map(item => <div className="capability-row" key={item.label}><b>{item.label}</b><span>{item.items}</span></div>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <span className="section-kicker">05 / CONTACT</span>
            <h2>Let’s make the<br/><span>next decision clearer.</span></h2>
            <p>I’m open to thoughtful conversations about analytics, business, finance and opportunities where structured problem-solving creates value.</p>
            <a className="button button-primary" href="mailto:anuragparkhe7755@gmail.com">Start a conversation <ArrowUpRight size={16}/></a>
            <div className="contact-links"><a href="mailto:anuragparkhe7755@gmail.com"><Mail size={15}/> Email</a><a href="https://www.linkedin.com/in/anuragparkhe" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn <MoveUpRight size={12}/></a><a href="https://github.com/Anuragp7788" target="_blank" rel="noreferrer"><Github size={15}/> GitHub <MoveUpRight size={12}/></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="wordmark" href="#top">AP<span>.</span></a><span>© {new Date().getFullYear()} Anurag Parkhe</span><span>BUILT WITH INTENTION.</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
};

export default App;
