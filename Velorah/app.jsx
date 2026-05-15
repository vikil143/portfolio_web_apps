const { useState, useEffect, useRef } = React;

/* -------------------- NAV -------------------- */
function Nav() {
  const links = ["Work", "Studio", "About", "Journal", "Reach Us"];
  const [active, setActive] = useState("Work");
  return (
    <nav className="nav" style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "24px 32px", maxWidth: 1280, margin: "0 auto"
    }}>
      <div style={{
        fontFamily: "'Instrument Serif', serif",
        fontSize: 30, letterSpacing: "-0.5px", color: "hsl(var(--foreground))"
      }}>
        Velorah<sup style={{fontSize: 12, marginLeft: 2, opacity: .8}}>®</sup>
      </div>
      <div className="nav-links" style={{ display: "flex", gap: 32 }}>
        {links.map(l => (
          <a key={l}
             onClick={(e) => { e.preventDefault(); setActive(l); }}
             href={`#${l.toLowerCase().replace(' ','-')}`}
             style={{
               fontSize: 13,
               color: active === l ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
               transition: "color .2s ease",
               fontFamily: "var(--font-body)",
               fontWeight: 500,
             }}
             onMouseEnter={e => e.currentTarget.style.color = "hsl(var(--foreground))"}
             onMouseLeave={e => e.currentTarget.style.color = active === l ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"}
          >
            {l}
          </a>
        ))}
      </div>
      <button
        className="liquid-glass"
        onClick={() => window.dispatchEvent(new CustomEvent('phoenix:flap'))}
        onMouseEnter={() => window.dispatchEvent(new CustomEvent('phoenix:look', { detail: { dx: 0.4 } }))}
        style={{
          borderRadius: 999,
          padding: "10px 22px",
          fontSize: 13,
          fontFamily: "var(--font-body)",
          fontWeight: 500,
        }}>
        Begin Journey
      </button>
    </nav>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.85;
  }, []);
  return (
    <section data-screen-label="01 Hero" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay loop muted playsInline
        poster=""
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      ></video>
      <div className="hero-scrim"></div>

      <Nav />

      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center", padding: "120px 24px 160px",
        maxWidth: 1200, margin: "0 auto"
      }}>
        <div className="status-chip animate-fade-rise" style={{ marginBottom: 32 }}>
          <span className="pulse"></span>
          Open for senior engineering roles — Q3 2026
        </div>

        <h1 className="animate-fade-rise" style={{
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 400,
          fontSize: "clamp(46px, 8.2vw, 124px)",
          lineHeight: 0.95,
          letterSpacing: "-2.46px",
          margin: 0,
          maxWidth: 1180,
        }}>
          Where <em className="not-italic" style={{ fontStyle: "normal", color: "hsl(var(--muted-foreground))" }}>interfaces</em> rise
          {" "}through <em className="not-italic" style={{ fontStyle: "normal", color: "hsl(var(--muted-foreground))" }}>deliberate code.</em>
        </h1>

        <p className="animate-fade-rise-delay" style={{
          fontSize: 18, lineHeight: 1.6,
          color: "hsl(var(--muted-foreground))",
          maxWidth: 620, marginTop: 32
        }}>
          I'm Vikil — a senior software engineer crafting calm, high‑performance interfaces in React, Next.js and TypeScript.
          Seven years of shipping enterprise dashboards, real‑time platforms, and mobile apps that feel quietly inevitable.
        </p>

        <button
          className="liquid-glass animate-fade-rise-delay-2"
          onClick={() => {
            window.dispatchEvent(new CustomEvent('phoenix:flap'));
            setTimeout(() => window.dispatchEvent(new CustomEvent('phoenix:spin')), 80);
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onMouseEnter={() => window.dispatchEvent(new CustomEvent('phoenix:look', { detail: { dx: -0.5 } }))}
          style={{
            borderRadius: 999, padding: "20px 56px",
            fontSize: 15, fontWeight: 500,
            fontFamily: "var(--font-body)",
            marginTop: 48,
          }}>
          Begin Journey
        </button>

        <div className="animate-fade-rise-delay-3" style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          fontFamily: "var(--font-mono)", fontSize: 10,
          letterSpacing: "0.25em", textTransform: "uppercase",
          color: "hsla(0,0%,100%,.5)",
          display: "flex", alignItems: "center", gap: 12
        }}>
          <span style={{ width: 1, height: 36, background: "linear-gradient(180deg, transparent, hsla(0,0%,100%,.45))" }}></span>
          Scroll to enter
        </div>
      </div>
    </section>
  );
}

/* -------------------- MARQUEE -------------------- */
function Marquee() {
  const items = [
    "React.js", "Next.js (App Router)", "TypeScript", "Microfrontends",
    "D3.js", "Three.js", "WebSockets", "Redux Toolkit", "Tailwind", "Node.js"
  ];
  const row = (
    <>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <span>{t}</span>
          <span className="sep"></span>
        </React.Fragment>
      ))}
    </>
  );
  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {row}{row}
      </div>
    </div>
  );
}

/* -------------------- ABOUT + 3D MODEL -------------------- */
function About() {
  const PhoenixComp = window.Phoenix3D;
  const chapters = [
    {
      h: "Origin · 2018",
      t: "Architecture",
      p: "BSc-IT from Mumbai University. First commits in React.js and Laravel Blade — discovered the quiet joy of components that compose."
    },
    {
      h: "Craft · 2021—2023",
      t: "Mobile in motion",
      p: "Two years deep in React Native — pixel-perfect iOS / Android, Firebase, Razorpay, biometrics, GPS. Owned binaries end-to-end on Play Store and App Store."
    },
    {
      h: "Scale · 2024—2025",
      t: "Legacy made new",
      p: "At Netcore Cloud, revamped a tired React product to modern usability standards. Delivered the quarter's hero feature — Undo/Redo, versioning, click-tracking — with negligible regressions."
    },
    {
      h: "Lead · 2025—Now",
      t: "Architecture & mentorship",
      p: "Senior engineer at NeoSoft. Driving frontend vision across 5+ enterprise apps. 3× performance lift on the Option Chain module via custom virtualization. Mentoring engineers and interns into a craft mindset."
    },
  ];

  return (
    <section id="about" data-screen-label="02 About" className="section">
      <div className="bio-grid">
        <div>
          <span className="eyebrow">About — Index 01</span>
          <h2 className="display">
            A senior engineer who treats every <em>component</em> like a sentence.
          </h2>
          <p className="lead">
            Based in Worli, Mumbai. Seven years building enterprise React platforms for fintech, marketing,
            and consumer mobile. I care about render budgets, type-safety, and the quiet space between elements.
          </p>

          <div className="bio-stats">
            <div className="bio-stat"><div className="v">7+</div><div className="l">Years shipping</div></div>
            <div className="bio-stat"><div className="v">3×</div><div className="l">Avg perf gain</div></div>
            <div className="bio-stat"><div className="v">5+</div><div className="l">Enterprise apps</div></div>
            <div className="bio-stat"><div className="v">12+</div><div className="l">Devs mentored</div></div>
          </div>

          <div className="bio-chapters" style={{ marginTop: 96 }}>
            {chapters.map((c, i) => (
              <ScrollChapter key={i} index={i} c={c} total={chapters.length} />
            ))}
          </div>
        </div>

        {/* 3D MODEL STAGE — Phoenix */}
        <div className="model-sticky">
          <div className="model-stage" id="model-slot">
            <span className="model-corner tl">VLR—STAGE / 01</span>
            <span className="model-corner tr">PHOENIX.GLB</span>
            <span className="model-corner bl">SCROLL-SYNC</span>
            <span className="model-corner br">v.026</span>
            {PhoenixComp && <PhoenixComp stageId="phoenix-stage" scrollTargetId="about" />}
          </div>
          <div style={{
            marginTop: 18,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "hsl(var(--muted-foreground))",
            display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap"
          }}>
            <span>Drag cursor · scroll · click</span>
            <div style={{ display: "flex", gap: 8 }}>
              <StageBtn label="Flap" evt="phoenix:flap" />
              <StageBtn label="Spin ▸" evt="phoenix:spin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StageBtn({ label, evt }) {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent(evt))}
      style={{
        background: "transparent",
        border: "1px solid hsla(0,0%,100%,.18)",
        color: "hsl(var(--foreground))",
        padding: "8px 14px",
        borderRadius: 999,
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: ".18em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "background .2s ease, color .2s ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#000"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "hsl(var(--foreground))"; }}
    >{label}</button>
  );
}

function ScrollChapter({ c, index, total }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisible(true);
          window.dispatchEvent(new CustomEvent('phoenix:look', { detail: { dx: (index - (total - 1) / 2) * 0.5 } }));
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [index, total]);

  return (
    <div
      ref={ref}
      className="bio-chapter"
      style={{
        opacity: visible ? 1 : 0.25,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity .8s ease, transform .8s ease",
      }}
    >
      <div className="ch-h">{c.h}</div>
      <h3>{c.t}</h3>
      <p>{c.p}</p>
    </div>
  );
}

/* -------------------- WORK -------------------- */
function Work() {
  const projects = [
    {
      idx: "001",
      title: "Option Chain — Stock Trading Platform",
      meta: "React · Node · WebSockets · MongoDB",
      year: "2025",
    },
    {
      idx: "002",
      title: "Docusaurus Knowledge Platform",
      meta: "Next.js · Tailwind · WebSocket collab",
      year: "2025",
    },
    {
      idx: "003",
      title: "Dynamic Content Editor",
      meta: "Microfrontend · DOM picker · Undo/Redo",
      year: "2024",
    },
    {
      idx: "004",
      title: "Maak — Services Booking App",
      meta: "React Native · Firebase · Razorpay",
      year: "2023",
    },
    {
      idx: "005",
      title: "Packarma — Packaging Advisor",
      meta: "React Native · GraphQL · Razorpay",
      year: "2022",
    },
  ];
  return (
    <section id="work" data-screen-label="03 Work" className="section">
      <span className="eyebrow">Selected Work — Index 02</span>
      <h2 className="display">
        Five chapters of <em>shipped</em> work.
      </h2>
      <p className="lead">
        A small selection — enterprise dashboards, real‑time collaborative tooling, and mobile experiences
        that crossed millions of sessions. Detailed case studies available on request.
      </p>

      <div className="work-list">
        {projects.map((p, i) => (
          <div
            className="work-row"
            key={p.idx}
            onMouseEnter={() => window.dispatchEvent(new CustomEvent('phoenix:look', { detail: { dx: (i - 2) * 0.35 } }))}
            onClick={() => window.dispatchEvent(new CustomEvent('phoenix:flap'))}
          >
            <div className="idx">{p.idx}</div>
            <div className="title">{p.title}</div>
            <div className="meta">{p.meta}</div>
            <div className="year" style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
              {p.year}
              <span className="arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- EXPERIENCE -------------------- */
function Experience() {
  const items = [
    {
      when: "Jun 2025 — Now",
      role: "Senior Software Engineer",
      at: "NeoSoft Technologies",
      detail: "Driving frontend architecture across 5+ enterprise React apps. Led a 3× performance lift on the Option Chain module via custom virtualization and API restructuring. Mentor a growing team of engineers and interns.",
    },
    {
      when: "Feb 2024 — Mar 2025",
      role: "Senior React Developer",
      at: "Netcore Cloud",
      detail: "Revamped a legacy React product to modern usability and performance standards (≈90% UI consistency gain). Delivered the quarter's hero feature — Undo/Redo, version management and click tracking — with minimal regressions.",
    },
    {
      when: "Apr 2023 — Jan 2024",
      role: "Software React Native Developer",
      at: "Shifa Infotech",
      detail: "Planned and shipped quarterly mobile deliverables in tight collaboration with product and design.",
    },
    {
      when: "Feb 2021 — Mar 2023",
      role: "Senior React Native Developer",
      at: "Mypcot Infotech",
      detail: "Built pixel-perfect cross-platform UIs for iOS and Android. Owned Firebase, Razorpay/CCAvenue, biometrics and binary builds end-to-end.",
    },
    {
      when: "Mar 2020 — Jan 2021",
      role: "Software Developer",
      at: "Blocklogy",
      detail: "Shipped Ethereum (v4/v5) DApps with reusable React components and third-party integrations.",
    },
    {
      when: "Feb 2019 — Mar 2020",
      role: "Software Solution Developer",
      at: "Tantra-Gyan",
      detail: "Developed UI components in React.js and Laravel Blade; integrated camera and location APIs.",
    },
  ];
  return (
    <section id="experience" data-screen-label="04 Experience" className="section">
      <span className="eyebrow">Trajectory — Index 03</span>
      <h2 className="display">
        Seven years, six stops, <em>one obsession.</em>
      </h2>

      <div style={{ marginTop: 56 }}>
        {items.map((it, i) => (
          <div className="xp-item" key={i}>
            <div className="xp-when">{it.when}</div>
            <div>
              <div className="xp-role">
                {it.role} <span className="at">— {it.at}</span>
              </div>
              <p className="xp-detail">{it.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- SKILLS -------------------- */
function Skills() {
  const cells = [
    { h: "Languages", b: "TypeScript · JavaScript (ES6+) · HTML · CSS · Java" },
    { h: "Frameworks", b: "React · Next.js (App Router) · React Native · Svelte" },
    { h: "State & Arch", b: "Redux Toolkit · Context · Microfrontends · CDA" },
    { h: "Styling", b: "Tailwind · MUI · Styled Components · CSS Modules" },
    { h: "Backend", b: "Node · Express · REST · GraphQL · WebSockets" },
    { h: "Data Viz", b: "D3.js · Three.js · SVG · Custom virtualization" },
    { h: "Auth", b: "JWT · OAuth · Keycloak · 2FA (TOTP)" },
    { h: "Tooling", b: "Jest · RTL · Webpack · GitHub Actions · CI/CD" },
  ];
  return (
    <section id="studio" data-screen-label="05 Studio" className="section">
      <span className="eyebrow">Toolkit — Index 04</span>
      <h2 className="display">
        The instruments <em>I reach for.</em>
      </h2>

      <div className="skills-grid">
        {cells.map((c, i) => (
          <div className="skill-cell" key={i}>
            <div className="h">{c.h}</div>
            <div className="b">{c.b}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */
function Contact() {
  return (
    <section id="reach-us" data-screen-label="06 Reach" className="section">
      <div className="contact-card">
        <div className="contact-inner">
          <span className="eyebrow">Reach Us — Index 05</span>
          <h2 className="display" style={{ maxWidth: 1000 }}>
            Have a quiet ambition? <em>Let's build it.</em>
          </h2>
          <p className="lead" style={{ maxWidth: 640 }}>
            Currently open to senior engineering roles and select consulting collaborations.
            The fastest way in is email — I reply within a day.
          </p>

          <div className="contact-row">
            <a className="contact-pill" href="mailto:vikil.lakkavatri25@gmail.com"
               onMouseEnter={() => window.dispatchEvent(new CustomEvent('phoenix:look', { detail: { dx: 0.6 } }))}
               onClick={() => window.dispatchEvent(new CustomEvent('phoenix:flap'))}>
              <Dot /> vikil.lakkavatri25@gmail.com
            </a>
            <a className="contact-pill" href="tel:+918082443869"
               onMouseEnter={() => window.dispatchEvent(new CustomEvent('phoenix:look', { detail: { dx: 0.2 } }))}>
              <Dot /> +91 80824 43869
            </a>
            <a className="contact-pill" href="https://linkedin.com/in/vikil-lakkavatri-36b818178" target="_blank" rel="noreferrer"
               onMouseEnter={() => window.dispatchEvent(new CustomEvent('phoenix:look', { detail: { dx: -0.2 } }))}>
              <Dot /> LinkedIn
            </a>
            <a className="contact-pill" href="https://github.com/vikil143" target="_blank" rel="noreferrer"
               onMouseEnter={() => window.dispatchEvent(new CustomEvent('phoenix:look', { detail: { dx: -0.6 } }))}
               onClick={() => window.dispatchEvent(new CustomEvent('phoenix:spin'))}>
              <Dot /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span style={{
    width: 6, height: 6, borderRadius: 999, background: "currentColor",
    display: "inline-block"
  }} />;
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer>
      <div>© 2026 Velorah Studio · Vikil Lakkavatri</div>
      <div>Mumbai, IN · 19.0° N</div>
      <div>v.026 — Crafted in silence</div>
    </footer>
  );
}

/* -------------------- APP -------------------- */
function App() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
