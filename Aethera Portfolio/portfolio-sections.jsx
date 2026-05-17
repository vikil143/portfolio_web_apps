// =============================================
// Aethera® — Body Sections
// =============================================

const PROJECTS = [
  {
    n: '01',
    name: 'Option Chain — Stock Trading Platform',
    services: 'Architecture · Performance · Real-time',
    year: '2025',
    summary:
      'Front-end lead on a real-time options trading module. Custom virtualization, refactored components, restructured APIs — yielding a 3× performance gain on data-heavy enterprise dashboards.',
    stack: ['React.js', 'Node.js', 'Express', 'WebSockets', 'MongoDB', 'MySQL', 'Keycloak'],
    bullets: [
      'Architected the Option Chain module from scratch as front-end lead',
      'Custom visible-area virtualization — slashed DOM load, smoothed scroll',
      'WebSocket-based market data streaming at scale',
      '2FA via Keycloak + external TOTP for hardened login security',
    ],
    org: 'NeoSoft Technologies',
  },
  {
    n: '02',
    name: 'Scalable Documentation Platform',
    services: 'Docusaurus · Real-time collab',
    year: '2025',
    summary:
      'A Docusaurus-based knowledge platform with real-time collaborative editing — multiple authors editing the same docs simultaneously via WebSockets, with a live-preview code editor component.',
    stack: ['React.js', 'Next.js', 'Tailwind', 'TypeScript', 'WebSockets', 'Docusaurus'],
    bullets: [
      'Pixel-perfect Figma → production translation',
      'Reusable code editor component with live preview',
      'Multi-user real-time editing with conflict resolution',
    ],
    org: 'NeoSoft Technologies',
  },
  {
    n: '03',
    name: 'Dynamic Content Editor',
    services: 'Microfrontend · DOM tooling',
    year: '2024 — 2025',
    summary:
      'A microfrontend-based visual editor for real-time modification of webpage elements — text, images, links, styles. Shipped Undo/Redo, history management, DOM picker, and click-tracking.',
    stack: ['React.js', 'Microfrontend', 'JavaScript', 'Git', 'Linux'],
    bullets: [
      'Undo/Redo + History Management',
      'DOM Picker + Click Tracking',
      'Reusable templates: Back to Top, Coupon Drawer, Progress Bar, Recently Viewed',
    ],
    org: 'Netcore Cloud',
  },
  {
    n: '04',
    name: 'Maak — Services Booking',
    services: 'React Native · iOS + Android',
    year: '2022 — 2023',
    summary:
      'A multi-service booking and payments platform with end-user app + admin panel. Multi-language support, JWT auth, utility bill payments, secure checkout.',
    stack: ['React Native', 'Redux', 'REST', 'GraphQL', 'Firebase', 'JWT', 'TypeScript'],
    bullets: [
      'Booking + secure payment flows shipped to Play Store',
      'Multi-language support for cross-region accessibility',
      'JWT token-based authentication for secure sessions',
    ],
    org: 'Mypcot Infotech',
  },
  {
    n: '05',
    name: 'Packarma — Packaging Recommendations',
    services: 'React Native · ML inputs',
    year: '2021 — 2022',
    summary:
      'Helps businesses pick cost-effective laminate packaging by product type, material strength, shelf life, and sealing. Razorpay-secured checkout and Firebase analytics.',
    stack: ['React Native', 'JavaScript', 'REST', 'GraphQL', 'Firebase', 'Razorpay'],
    bullets: [
      'Razorpay integration for secure payment processing',
      'Firebase analytics + user management',
      'Pixel-perfect Figma → production UI',
    ],
    org: 'Mypcot Infotech',
  },
];

function WorkSection() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section id="studio" style={{ padding: '8rem 2rem 6rem', background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Studio · Selected Work</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: 1, margin: 0, maxWidth: '60rem' }}>
              Quiet systems, <em style={{ color: '#6F6F6F' }}>loud impact.</em>
            </h2>
          </div>
          <p style={{ maxWidth: '24rem', color: '#6F6F6F', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
            A short list of recent engagements. Each shipped to production, each held to the same bar: clarity, performance, and craft.
          </p>
        </div>

        <div className="reveal reveal-delay-1">
          {PROJECTS.map((p, i) => (
            <div
              key={p.n}
              className={`work-card ${open === i ? 'open' : ''}`}
              onClick={() => toggle(i)}
            >
              <div className="font-mono" style={{ fontSize: '0.7rem', color: '#6F6F6F', paddingTop: '0.35rem', letterSpacing: '0.1em' }}>
                ({p.n})
              </div>

              <div>
                <div className="font-display" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.25rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
                  {p.name}
                </div>
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#6F6F6F' }}>
                  {p.org}
                </div>
              </div>

              <div className="col-services" style={{ color: '#6F6F6F', fontSize: '0.875rem', paddingTop: '0.5rem', lineHeight: 1.5 }}>
                {p.services}
              </div>

              <div className="col-year font-mono" style={{ color: '#6F6F6F', fontSize: '0.75rem', paddingTop: '0.65rem', letterSpacing: '0.1em' }}>
                {p.year}
              </div>

              <div style={{ paddingTop: '0.5rem' }}>
                <svg className="plus-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4v12M4 10h12" stroke="#000" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>

              <div className="work-detail">
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1.4fr 1fr 24px', gap: '2rem' }}>
                  <div></div>
                  <div style={{ color: '#6F6F6F', fontSize: '0.95rem', lineHeight: 1.65 }}>
                    {p.summary}
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', color: '#000', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {p.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                        <span style={{ color: '#6F6F6F', marginTop: '0.55em', width: 6, height: 1, background: '#6F6F6F', flexShrink: 0 }}></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', alignItems: 'flex-start' }}>
                    {p.stack.map((s) => (
                      <span key={s} className="pill" style={{ fontSize: '0.7rem', padding: '0.25rem 0.65rem' }}>{s}</span>
                    ))}
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }}></div>
        </div>
      </div>
    </section>
  );
}

// ---- About / Capabilities ----------------------------------
const CAPABILITIES = [
  { k: 'Frontend Architecture', v: 'Next.js (App Router), React, microfrontend, component-driven' },
  { k: 'State Management',      v: 'Redux Toolkit, React Hooks, Context, Custom Hooks' },
  { k: 'Performance',           v: 'Profiling, virtualization, render optimization, code-splitting' },
  { k: 'Data Visualization',    v: 'D3.js, Three.js, SVG, large-dataset rendering' },
  { k: 'Real-time Systems',     v: 'WebSockets, market data streams, collaborative editing' },
  { k: 'Mobile',                v: 'React Native — iOS & Android, App / Play Store delivery' },
  { k: 'Tooling',               v: 'TypeScript, Webpack, Babel, ESLint, Prettier, Jest, RTL' },
  { k: 'Auth & Security',       v: 'JWT, OAuth, Keycloak, 2FA (TOTP), MD5, SHA' },
  { k: 'Leadership',            v: 'Code reviews, mentoring 3+ devs, sprint planning, estimations' },
  { k: 'Delivery',              v: 'Figma → Production, CI/CD, app signing, binary builds' },
];

function AboutSection() {
  return (
    <section id="about" style={{ padding: '6rem 2rem', background: '#FAFAF9' }}>
      <div className="max-w-7xl mx-auto" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: '5rem', alignItems: 'start' }}>
        <div className="reveal">
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>About · The Maker</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
            Seven years spent on the <em style={{ color: '#6F6F6F' }}>quiet half</em> of software — the part you only notice when it works.
          </h2>

          <div style={{ marginTop: '2rem', maxWidth: '34rem', color: '#3a3a3a', lineHeight: 1.7, fontSize: '1.05rem' }}>
            <p>
              I'm <strong style={{ color: '#000' }}>Vikil Lakkavatri</strong>, a Senior Software Engineer based in Worli, Mumbai. I work on enterprise React applications — trading platforms, content editors, real-time dashboards — where the difference between fine and remarkable comes down to careful architecture and a refusal to ship slop.
            </p>
            <p style={{ color: '#6F6F6F' }}>
              At NeoSoft I lead the front-end vision across 5+ apps, drove a 3× perf win on the Option Chain module, and mentor three junior devs into shape. Before that: Netcore, Shifa, Mypcot, Blocklogy. I read code reviews like poetry and have opinions about hooks.
            </p>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span className="pill">7+ years</span>
            <span className="pill">Mumbai, India</span>
            <span className="pill">BSc-IT, D.G. Ruparel</span>
            <span className="pill">Open to senior / staff roles</span>
          </div>
        </div>

        <div className="reveal reveal-delay-1">
          <div className="font-mono" style={{ fontSize: '0.7rem', color: '#6F6F6F', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Capabilities
          </div>
          <div>
            {CAPABILITIES.map((c) => (
              <div key={c.k} className="skill-cell">
                <div style={{ fontSize: '0.95rem', color: '#000', fontWeight: 500, flexShrink: 0, minWidth: '180px' }}>{c.k}</div>
                <div style={{ fontSize: '0.85rem', color: '#6F6F6F', textAlign: 'right', lineHeight: 1.5 }}>{c.v}</div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--border-soft)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Philosophy block --------------------------------------
function PhilosophyBlock() {
  return (
    <section style={{ padding: '8rem 2rem', background: '#fff' }}>
      <div className="max-w-5xl mx-auto text-center reveal">
        <div className="eyebrow" style={{ marginBottom: '2rem', justifyContent: 'center', display: 'inline-flex' }}>Philosophy</div>
        <p className="font-display" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#000', margin: 0, textWrap: 'balance' }}>
          "Performance is a feature. Clarity is the first dependency. Mentorship is how a team's craft compounds."
          <span style={{ display: 'block', marginTop: '2rem', fontSize: '0.85rem', color: '#6F6F6F', fontFamily: 'Inter', letterSpacing: '0.1em', textTransform: 'uppercase', fontStyle: 'normal' }}>
            — Operating principles
          </span>
        </p>
      </div>
    </section>
  );
}

// ---- Journal / Experience ----------------------------------
const TIMELINE = [
  {
    year: '2025 — Now',
    role: 'Senior Software Engineer',
    org: 'NeoSoft Technologies — Mumbai',
    notes: [
      'Drove technical vision and scalable architecture across 3+ enterprise applications for the front-end team, leveraging Next.js, Node.js, and React.js — accelerated implementation and code quality through AI-assisted development with Claude Code and ChatGPT',
      '3× perf gain on the Option Chain module via custom virtualization',
      'Mentoring 3+ junior devs; led adoption of Agentic AI tooling',
      'Real-time WebSocket dashboards for Option Chain & Mutual Funds',
    ],
  },
  {
    year: '2024 — 2025',
    role: 'Senior React Developer',
    org: 'Netcore Cloud — Thane',
    notes: [
      '90% UI consistency improvement on a legacy React revamp',
      'Shipped Undo/Redo, Version Management, Click Tracking — flagship features of the PI',
      'Estimated effort + recommended scalable solutions with Tech Lead',
    ],
  },
  {
    year: '2023 — 2024',
    role: 'React Native Developer',
    org: 'Shifa Infotech — Jogeshwari',
    notes: [
      'Quarterly stakeholder alignment and timely shipping of prioritized work',
    ],
  },
  {
    year: '2021 — 2023',
    role: 'Senior React Native Developer',
    org: 'Mypcot Infotech — Mumbai',
    notes: [
      'Pixel-perfect cross-platform UIs for iOS + Android',
      'Integrated Firebase, Razorpay, CCAvenue, GPS, Camera, Biometrics',
      'Built + shipped binaries to App Store and Play Store',
    ],
  },
  {
    year: '2020 — 2021',
    role: 'Software Developer',
    org: 'Blocklogy — Navi Mumbai',
    notes: [
      'Ethereum v4 & v5 DApps with reusable React components',
      'Integrated third-party APIs, resolved complex chain-side bugs',
    ],
  },
  {
    year: '2019 — 2020',
    role: 'Software Solution Developer',
    org: 'Tantra-Gyan — Mumbai',
    notes: [
      'React.js + Laravel Blade UI components',
      'Camera and Location API integrations',
    ],
  },
];

function JournalSection() {
  return (
    <section id="journal" style={{ padding: '8rem 2rem', background: '#FAFAF9' }}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal" style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Journal · Career arc</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: 1, margin: 0 }}>
              The long <em style={{ color: '#6F6F6F' }}>through-line.</em>
            </h2>
          </div>
          <p style={{ maxWidth: '24rem', color: '#6F6F6F', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
            Six chapters. One discipline. From blockchain DApps to enterprise trading platforms — always the front-end, always at depth.
          </p>
        </div>

        <div className="reveal reveal-delay-1">
          {TIMELINE.map((t, i) => (
            <div key={i} className="tl-row">
              <div className="tl-year">{t.year}</div>
              <div>
                <div className="font-display" style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.25rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  {t.role}
                </div>
                <div style={{ color: '#6F6F6F', fontSize: '0.95rem', marginTop: '0.35rem', marginBottom: '1rem' }}>
                  {t.org}
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', color: '#3a3a3a', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {t.notes.map((n, j) => (
                    <li key={j} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                      <span style={{ width: 6, height: 6, background: '#000', borderRadius: 999, marginTop: '0.7em', flexShrink: 0 }}></span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }}></div>
        </div>
      </div>
    </section>
  );
}

// ---- Reach Us ----------------------------------------------
function ReachSection() {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard?.writeText('vikil.lakkavatri25@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="reach" style={{ padding: '10rem 2rem 6rem', background: '#0A0A0A', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto reveal" style={{ position: 'relative', zIndex: 2 }}>
        <div className="eyebrow" style={{ marginBottom: '2rem', color: '#7a7a7a' }}>
          <span style={{ background: '#7a7a7a' }}></span>
          Reach Us
        </div>
        <h2 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', letterSpacing: '-0.04em', lineHeight: 0.95, margin: 0, maxWidth: '80rem', color: '#fff' }}>
          Have a difficult <em style={{ color: '#7a7a7a' }}>front-end</em> problem?{' '}
          <em style={{ color: '#7a7a7a' }}>Let's talk.</em>
        </h2>

        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
          <div>
            <div className="font-mono" style={{ fontSize: '0.7rem', color: '#7a7a7a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Email</div>
            <button
              onClick={copyEmail}
              style={{
                background: 'transparent', border: 'none', color: '#fff', padding: 0,
                fontSize: '1.1rem', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              }}
            >
              vikil.lakkavatri25@gmail.com
              <span style={{ fontSize: '0.7rem', color: copied ? '#86efac' : '#7a7a7a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {copied ? '✓ copied' : '↗ copy'}
              </span>
            </button>
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: '0.7rem', color: '#7a7a7a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Phone</div>
            <div style={{ fontSize: '1.1rem' }}>+91 80824 43869</div>
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: '0.7rem', color: '#7a7a7a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Location</div>
            <div style={{ fontSize: '1.1rem' }}>Worli, Mumbai · IST</div>
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: '0.7rem', color: '#7a7a7a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Elsewhere</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <a className="footer-link" style={{ color: '#fff' }} href="https://github.com/vikil143" target="_blank" rel="noreferrer">github.com/vikil143 ↗</a>
              <a className="footer-link" style={{ color: '#fff' }} href="https://linkedin.com/in/vikil-lakkavatri-36b818178" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="footer-link" style={{ color: '#fff' }} href="https://vikil-portfolio.netlify.app" target="_blank" rel="noreferrer">vikil-portfolio.netlify.app ↗</a>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '5rem' }}>
          <a
            href="mailto:vikil.lakkavatri25@gmail.com?subject=Let's%20build%20something"
            className="btn-primary btn-lg"
            style={{ background: '#fff', color: '#000' }}
          >
            Start a conversation →
          </a>
        </div>
      </div>

      {/* big background mark */}
      <div
        className="font-display"
        style={{
          position: 'absolute',
          bottom: '-3rem',
          right: '-2rem',
          fontSize: 'clamp(14rem, 30vw, 28rem)',
          color: '#141414',
          lineHeight: 0.8,
          letterSpacing: '-0.04em',
          pointerEvents: 'none',
          zIndex: 1,
          userSelect: 'none',
        }}
      >
        Aethera
      </div>
    </section>
  );
}

// ---- Footer ------------------------------------------------
function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', color: '#7a7a7a', padding: '2.5rem 2rem', borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
        <div className="flex items-center" style={{ gap: '0.75rem' }}>
          <span className="font-display" style={{ color: '#fff', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
            Aethera<sup style={{ fontSize: '0.55em' }}>®</sup>
          </span>
          <span>— Vikil Lakkavatri · Senior Software Engineer</span>
        </div>
        <div>© 2026 · Crafted in Mumbai · v.7.1</div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  WorkSection, AboutSection, PhilosophyBlock, JournalSection, ReachSection, Footer
});
