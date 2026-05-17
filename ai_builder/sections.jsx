// ════════════════════════════════════════════════════════════════
//  Portfolio sections — Stats, Experience, Projects, Skills,
//  Competencies, Education, Contact
// ════════════════════════════════════════════════════════════════

// Reveal-on-scroll helper
const useReveal = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    el.querySelectorAll('.reveal').forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
};

// ──────────────────────────────────────────────────────────────
// Stats bar (above experience)
// ──────────────────────────────────────────────────────────────
const Stats = () => (
  <div className="stats reveal">
    <div className="stat">
      <div className="n">7<span className="sup">+</span></div>
      <div className="lbl">Years building<br/>production React apps</div>
    </div>
    <div className="stat">
      <div className="n">3<span className="sup">×</span></div>
      <div className="lbl">Perf gain on Option<br/>Chain enterprise module</div>
    </div>
    <div className="stat">
      <div className="n">5<span className="sup">+</span></div>
      <div className="lbl">Enterprise apps shipped<br/>at NeoSoft</div>
    </div>
    <div className="stat">
      <div className="n">3<span className="sup">+</span></div>
      <div className="lbl">Junior devs mentored<br/>through code reviews</div>
    </div>
  </div>
);

// ──────────────────────────────────────────────────────────────
// Experience
// ──────────────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    company: "NeoSoft Technologies",
    dates: "Jun 2025 — Present",
    location: "Mumbai, India",
    role: "Senior Software Engineer",
    tag: "Current",
    bullets: [
      <span>Drove technical vision and scalable architecture across <strong>3+ enterprise applications</strong> for the front-end team, leveraging Next.js, Node.js, and React.js — accelerated implementation and code quality through AI-assisted development with Claude Code and ChatGPT.</span>,
      <span>Led performance work that delivered a <strong>3× improvement</strong> on the Option Chain module via component refactoring, custom virtualization, and API restructuring.</span>,
      <span>Conducted code reviews and mentored 3+ juniors and interns, enforcing standards and component-driven patterns.</span>,
      <span>Architected real-time enterprise dashboards (Option Chain, Mutual Funds) with WebSocket-based market data streaming.</span>,
      <span>Built custom D3.js visualisations — interactive graphs and optimised SVG rendering for large datasets.</span>,
    ]
  },
  {
    company: "Netcore Cloud",
    dates: "Feb 2024 — Mar 2025",
    location: "Thane, India",
    role: "Senior React Developer",
    bullets: [
      <span>Revamped a legacy React web application to modern standards — <strong>90% improvement</strong> in UI consistency and accuracy.</span>,
      <span>Resolved critical legacy bugs with root-cause analysis and optimised fixes, raising stability and maintainability.</span>,
      <span>Delivered the quarter's headline feature (Undo/Redo, Version Management, Click Tracking) with minimal bugs.</span>,
      <span>Partnered with the Tech Lead on feature analysis, estimation, and scalable Agile delivery.</span>,
    ]
  },
  {
    company: "Shifa Infotech",
    dates: "Apr 2023 — Jan 2024",
    location: "Jogeshwari, Mumbai",
    role: "Software React Native Developer",
    bullets: [
      <span>Planned and aligned quarterly deliverables with stakeholders, ensuring timely delivery of prioritised work.</span>,
    ]
  },
  {
    company: "Mypcot Infotech",
    dates: "Feb 2021 — Mar 2023",
    location: "Mumbai, India",
    role: "Senior React Native Developer",
    bullets: [
      <span>Built <strong>pixel-perfect React Native UIs</strong> for iOS and Android, partnering closely with design for fidelity.</span>,
      <span>Created reusable cross-platform components and integrated Firebase, Razorpay, CCAvenue, GPS, Camera, Biometrics.</span>,
      <span>Built and deployed iOS / Android binaries to App Store and Play Store.</span>,
      <span>Mentored junior developers, lifting team productivity.</span>,
    ]
  },
  {
    company: "Blocklogy",
    dates: "Mar 2020 — Jan 2021",
    location: "Navi Mumbai, India",
    role: "Software Developer",
    bullets: [
      <span>Built blockchain DApps on Ethereum v4 & v5 with reusable React components.</span>,
      <span>Integrated third-party APIs and resolved complex bugs.</span>,
    ]
  },
  {
    company: "Tantra-Gyan",
    dates: "Feb 2019 — Mar 2020",
    location: "Mumbai, India",
    role: "Software Solution Developer",
    bullets: [
      <span>Developed UI components using React.js and Laravel Blade.</span>,
      <span>Integrated Camera and Location APIs into applications.</span>,
    ]
  },
];

const ExperienceSection = () => {
  const ref = useReveal();
  return (
    <section id="experience" className="section" ref={ref}>
      <div className="section-inner">
        <div className="eyebrow reveal">Experience · 2019 → Present</div>
        <div className="section-header">
          <h2 className="section-title reveal">
            Seven years of shipping <em>production</em> React, Next.js & React Native.
          </h2>
          <p className="section-lede reveal">
            From blockchain DApps to enterprise option-chain dashboards — a track record of
            scalable architecture, performance work, and team mentorship across six companies.
          </p>
        </div>

        <Stats />

        <div className="xp-list">
          {EXPERIENCE.map((x, i) => (
            <article key={i} className="xp-item reveal">
              <div className="xp-meta">
                <div className="xp-dates">{x.dates}</div>
                <div className="xp-company">{x.company}</div>
                <div className="xp-location">{x.location}</div>
              </div>
              <div>
                <div className="xp-role">
                  {x.role}
                  {x.tag && <span className="pill">{x.tag}</span>}
                </div>
                <ul className="xp-bullets">
                  {x.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ──────────────────────────────────────────────────────────────
// Projects
// ──────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: "Stock Trading Platform — Option Chain",
    dates: "Jun – Nov 2025",
    role: "Front-end lead · Team of 3",
    feature: true,
    metric: { num: "2×", label: "Performance gain on the Option Chain module" },
    bullets: [
      "Architected the Option Chain module from scratch — code optimisation, custom virtualization, API restructuring, and DB query tuning.",
      "Built a custom visible-area virtualised list that drastically reduced DOM load and improved scroll responsiveness.",
      "Designed RESTful APIs in Node.js + Express for service-to-service communication.",
      "Implemented 2FA by integrating Keycloak with an external TOTP library to strengthen login security.",
    ],
    stack: ["React.js", "Node.js", "Express", "WebSockets", "MongoDB", "MySQL", "Keycloak", "TOTP"],
  },
  {
    title: "Scalable Documentation Platform",
    dates: "2025",
    role: "Front-end · Team of 3",
    bullets: [
      "Built a Docusaurus-based platform for managing and presenting product knowledge.",
      "Implemented real-time collaborative editing via WebSockets — multiple users editing simultaneously.",
      "Translated Figma → pixel-perfect, fully responsive UI; reusable live-preview code-editor component.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Docusaurus", "WebSockets"],
  },
  {
    title: "Dynamic Content Editor",
    dates: "2024 – 2025",
    role: "Frontend · Microfrontend · Team of 2",
    bullets: [
      "Built a dynamic editor for real-time modification of webpage elements (text, images, links, styles) inside a microfrontend.",
      "Implemented Undo/Redo, History Management, DOM Picker, and Click Tracking.",
      "Shipped reusable templates: Back to Top, Coupon Drawer, Progress Bar, Recently Viewed Products.",
    ],
    stack: ["React.js", "JavaScript", "Microfrontend", "Git", "Linux"],
  },
  {
    title: "Maak — Services Booking App",
    dates: "2022 – 2023",
    role: "React Native · Team of 3",
    bullets: [
      "Booking and secure payment for a multi-service platform with admin panel and user mobile app.",
      "Multi-language support across regions; JWT-based authentication for secure sessions.",
      "Enabled utility bill payments — electricity bills, mobile recharges.",
    ],
    stack: ["React Native", "Redux", "REST", "GraphQL", "Firebase", "JWT", "TypeScript"],
  },
  {
    title: "Packarma — Packaging Recommendation",
    dates: "2021",
    role: "React Native · Team of 3",
    bullets: [
      "Mobile app helping businesses pick cost-effective laminate packaging by product type, strength, shelf life, sealing.",
      "Firebase for analytics & user management; Razorpay for secure payments.",
      "Pixel-perfect UI from Figma with reusable components built for maintainability.",
    ],
    stack: ["React Native", "ES6", "REST", "GraphQL", "Firebase", "JWT", "Razorpay"],
  },
];

const ProjectsSection = () => {
  const ref = useReveal();
  return (
    <section id="projects" className="section" ref={ref}>
      <div className="section-inner">
        <div className="eyebrow reveal">Selected work</div>
        <div className="section-header">
          <h2 className="section-title reveal">
            Projects that <em>shipped</em>, scaled, and survived contact with real users.
          </h2>
          <p className="section-lede reveal">
            Enterprise dashboards, microfrontend editors, blockchain DApps, and cross-platform
            mobile apps. Each one shipped to production with a small team and tight deadlines.
          </p>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <article key={i} className={"proj-card reveal" + (p.feature ? " feature" : "")}>
              <div className="proj-head">
                <h3 className="proj-title">{p.title}</h3>
                <span className="proj-dates">{p.dates}</span>
              </div>
              <div className="proj-role">{p.role}</div>

              {p.metric && (
                <div className="proj-metric">
                  <span className="num">{p.metric.num}</span>
                  <span className="label">{p.metric.label}</span>
                </div>
              )}

              <ul className="proj-bullets">
                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>

              <div className="proj-stack">
                {p.stack.map(s => <span key={s} className="proj-chip">{s}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ──────────────────────────────────────────────────────────────
// Skills
// ──────────────────────────────────────────────────────────────
const SKILLS = [
  { cat: "Languages",         items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Java"] },
  { cat: "Frontend",          items: ["React.js", "Next.js (App Router)", "React Native", "Svelte", "jQuery"] },
  { cat: "State Management",  items: ["Redux", "Redux Toolkit", "React Hooks", "Context API", "Custom Hooks"] },
  { cat: "Architecture",      items: ["Microfrontend", "Component-Driven", "MVC", "Monolithic Apps"] },
  { cat: "Styling",           items: ["Tailwind CSS", "Material UI", "Styled Components", "Bootstrap", "CSS Modules"] },
  { cat: "Backend & APIs",    items: ["Node.js", "Express.js", "REST", "GraphQL", "WebSockets"] },
  { cat: "Data Viz",          items: ["D3.js", "Three.js", "SVG"] },
  { cat: "Databases",         items: ["MongoDB", "MySQL", "Firebase"] },
  { cat: "Auth & Security",   items: ["JWT", "OAuth", "Keycloak", "2FA (TOTP)", "MD5", "SHA"] },
  { cat: "Testing & Build",   items: ["Jest", "React Testing Library", "Webpack", "Babel", "ESLint", "Prettier"] },
  { cat: "DevOps & CI/CD",    items: ["Git", "GitHub Actions", "CI/CD Pipelines", "App Signing"] },
  { cat: "Other",             items: ["Electron", "Moment.js", "Docusaurus", "Razorpay", "CCAvenue", "Agentic AI (Claude Code, Codex)"] },
];

const SkillsSection = () => {
  const ref = useReveal();
  return (
    <section id="stack" className="section" ref={ref}>
      <div className="section-inner">
        <div className="eyebrow reveal">The stack</div>
        <div className="section-header">
          <h2 className="section-title reveal">
            Tools I've shipped with — <em>not</em> just heard of.
          </h2>
          <p className="section-lede reveal">
            Deep in React + Next.js + TypeScript every day. Comfortable across the stack —
            APIs, auth, data viz, mobile, CI — wherever the work needs to go.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <div key={i} className="skill-cell reveal">
              <div className="skill-cat">
                <span>{s.cat}</span>
                <span className="ix">/ {String(i + 1).padStart(2,'0')}</span>
              </div>
              <div className="skill-list">
                {s.items.map(it => <span key={it} className="skill-tag">{it}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ──────────────────────────────────────────────────────────────
// Competencies & Education
// ──────────────────────────────────────────────────────────────
const COMPETENCIES = [
  "Technical Vision & Architecture",
  "Code Reviews & Standards",
  "Team Leadership & Mentoring",
  "Performance Optimization",
  "React DevTools & Flipper Profiling",
  "Sprint Planning & Estimation",
  "Agile Delivery",
  "Figma → Production",
  "Cross-Functional Collaboration",
  "End-to-End Feature Ownership",
];

const CompetenciesSection = () => {
  const ref = useReveal();
  return (
    <section id="work" className="section" ref={ref}>
      <div className="section-inner">
        <div className="eyebrow reveal">How I work</div>
        <div className="section-header">
          <h2 className="section-title reveal">
            Beyond the code — <em>the practice</em> that makes engineering teams ship.
          </h2>
          <p className="section-lede reveal">
            Strong opinions on architecture, gentle in code review. Comfortable owning a
            feature end-to-end and equally comfortable making the team around me better.
          </p>
        </div>

        <div className="comp-list reveal">
          {COMPETENCIES.map(c => <span key={c} className="comp">{c}</span>)}
        </div>

        {/* Education card */}
        <div style={{ marginTop: 80 }}>
          <div className="eyebrow reveal">Education</div>
          <div className="edu-card reveal">
            <div>
              <div className="edu-degree">B.Sc. Information Technology</div>
              <div className="edu-school">D.G. Ruparel College · Mumbai University</div>
            </div>
            <div className="edu-year">2018</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ──────────────────────────────────────────────────────────────
// Contact + Footer
// ──────────────────────────────────────────────────────────────
const ContactSection = () => {
  const ref = useReveal();
  return (
    <React.Fragment>
      <section id="contact" className="contact-section" ref={ref}>
        <div className="contact-inner">
          <div className="eyebrow reveal" style={{ justifyContent: 'center' }}>Get in touch</div>
          <h2 className="contact-headline reveal">
            Let's build<br/>something <em>worth shipping.</em>
          </h2>
          <p className="section-lede reveal" style={{ margin: '0 auto', textAlign: 'center' }}>
            Open to senior frontend roles, contract work, and interesting collaborations.
            Based in Worli, Mumbai — working IST, available globally.
          </p>

          <div className="contact-links reveal">
            <a className="contact-link primary" href="mailto:vikil.lakkavatri25@gmail.com">
              <MailIcon /> vikil.lakkavatri25@gmail.com
            </a>
            <a className="contact-link" href="tel:+918082443869">
              <PhoneIcon /> +91 80824 43869
            </a>
            <a className="contact-link" href="https://linkedin.com/in/vikil-lakkavatri-36b818178" target="_blank" rel="noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
            <a className="contact-link" href="https://github.com/vikil143" target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>© 2026 Vikil Lakkavatri · Crafted in Mumbai</div>
        <div style={{ display: 'flex', gap: 18 }}>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </React.Fragment>
  );
};

// ──────────────────────────────────────────────────────────────
// Small icons used in Contact
// ──────────────────────────────────────────────────────────────
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

// Expose for hero.jsx to mount
Object.assign(window, {
  ExperienceSection, ProjectsSection, SkillsSection,
  CompetenciesSection, ContactSection,
});
