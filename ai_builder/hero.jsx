const { useEffect, useRef, useState } = React;

// ────────────────────────────────────────────────────────────────
// Icons (inline SVGs — replaces lucide-react)
// ────────────────────────────────────────────────────────────────
const ArrowRight = ({ size = 20, color = "currentColor", className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ChevronDown = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Sunburst = () => (
  <svg className="sunburst" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <circle cx="12" cy="12" r="3.2" />
    <line x1="12" y1="2" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="2" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="4.93" x2="6.94" y2="6.94" />
    <line x1="17.06" y1="17.06" x2="19.07" y2="19.07" />
    <line x1="4.93" y1="19.07" x2="6.94" y2="17.06" />
    <line x1="17.06" y1="6.94" x2="19.07" y2="4.93" />
  </svg>
);

const Download = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// ────────────────────────────────────────────────────────────────
// HLS Video background
// ────────────────────────────────────────────────────────────────
const HeroVideo = ({ enabled }) => {
  const ref = useRef(null);
  const POSTER = "https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Njg5NzIyNTV8MA&ixlib=rb-4.1.0&q=80&w=1600";
  const VIDEO_SRC = "https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8";

  useEffect(() => {
    if (!enabled) return;
    const video = ref.current;
    if (!video) return;
    let hls;
    if (window.Hls && window.Hls.isSupported()) {
      hls = new window.Hls();
      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);
      hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_SRC;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
    return () => { if (hls) hls.destroy(); };
  }, [enabled]);

  return (
    <React.Fragment>
      <img className="hero-poster" src={POSTER} alt="" aria-hidden="true" />
      {enabled && (
        <video ref={ref} className="hero-video" muted loop playsInline poster={POSTER} />
      )}
    </React.Fragment>
  );
};

// ────────────────────────────────────────────────────────────────
// Navbar
// ────────────────────────────────────────────────────────────────
const Navbar = () => (
  <nav className="navbar anim-nav">
    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#fff' }}>
      <Sunburst />
      <span style={{ fontFamily: 'Instrument Serif, serif', fontSize: 20, letterSpacing: '0.02em' }}>
        Vikil <em style={{ fontStyle: 'italic', opacity: 0.7 }}>L.</em>
      </span>
    </a>

    <div className="nav-center">
      <a className="nav-link" href="#work">Work <ChevronDown /></a>
      <a className="nav-link" href="#projects">Projects</a>
      <a className="nav-link" href="#stack">Stack</a>
      <a className="nav-link" href="#experience">Experience</a>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <a href="#contact" className="nav-demo">Book a call</a>
      <a href="#contact" className="nav-cta">Get in touch</a>
    </div>
  </nav>
);

// ────────────────────────────────────────────────────────────────
// Hero
// ────────────────────────────────────────────────────────────────
const STACK = [
  "React.js", "Next.js (App Router)", "TypeScript", "Redux Toolkit",
  "React Native", "Node.js", "Express", "GraphQL", "WebSockets",
  "D3.js", "Three.js", "Tailwind CSS", "Material UI", "MongoDB",
  "MySQL", "Firebase", "Keycloak", "Jest", "GitHub Actions",
  "Microfrontends", "Docusaurus", "Razorpay"
];

const HEADLINE_VARIANTS = {
  name:   { row1: "Vikil",        row2: "Lakkavatri", amp: null },
  ship:   { row1: "Ship",         row2: "Faster",     amp: "&" },
  craft:  { row1: "Code",         row2: "with Craft", amp: null },
  scale:  { row1: "Built",        row2: "to Scale",   amp: null },
};

const PRE_VARIANTS = {
  role:     "Senior Software Engineer",
  pitch:    "React · Next.js · TypeScript",
  intro:    "Hi — I'm Vikil.",
  long:     "Senior Software Engineer · 7+ years"
};

const Hero = () => {
  const [t, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "video": true,
    "accent": "#3054ff",
    "headline": "name",
    "pre": "role",
    "showStackTicker": true,
    "showCorners": true
  }/*EDITMODE-END*/);

  const head = HEADLINE_VARIANTS[t.headline] || HEADLINE_VARIANTS.name;
  const pre = PRE_VARIANTS[t.pre] || PRE_VARIANTS.role;

  // Compute hover variant of accent (slightly darker)
  const accentHover = darken(t.accent, 0.12);

  return (
    <React.Fragment>
      <Navbar />

      <section
        className="hero"
        style={{ '--accent': t.accent, '--accent-hover': accentHover }}
      >
        {/* Background layers */}
        <HeroVideo enabled={t.video} />
        <div className="hero-overlay" />
        <div className="blob blob-1" />
        <div className="blob blob-2" style={{ background: hexToRgba(t.accent, 0.18) }} />
        <div className="hero-grain" />
        <div className="hero-vignette" />

        {/* Architectural accents */}
        {t.showCorners && (
          <React.Fragment>
            <span className="corner tl" />
            <span className="corner tr" />
            <span className="corner bl" />
            <span className="corner br" />
            <div className="rail left">VL · MUMBAI · IN</div>
            <div className="rail right">PORTFOLIO · 2026</div>
          </React.Fragment>
        )}

        {/* Content */}
        <div className="hero-content">
          <div className="pre-headline anim-pre">
            <em>{pre}</em>
          </div>

          <h1 className="headline anim-head">
            <span className="row grad-text">{head.row1}</span>
            <span className="row grad-text">
              {head.amp && <span className="amp">{head.amp}</span>}
              {head.row2}
            </span>
          </h1>

          <p className="sub-headline anim-sub">
            Senior front-end engineer with 7+ years building scalable React.js & Next.js
            applications. Specialised in TypeScript, microfrontend architecture, and
            custom D3.js visualisations — delivering up to <strong style={{ color: '#fff', fontWeight: 600 }}>3× performance gains</strong> on
            data-heavy enterprise dashboards.
          </p>

          <div className="cta-row anim-cta">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <span className="arrow"><ArrowRight color="#fff" /></span>
            </a>
            <a href="uploads/vikil_11_may_2026.pdf" className="btn-secondary" download="vikil_11_may_2026.pdf">
              <Download />
              <span>Download CV</span>
              <ArrowRight size={16} className="arrow-icon" />
            </a>
          </div>

          <div className="meta-row anim-meta">
            <span className="available">
              <span className="pulse" />
              Available for senior frontend roles
            </span>
            <span className="divider" />
            <span>Worli, Mumbai · IST</span>
            <span className="divider" />
            <a href="mailto:vikil.lakkavatri25@gmail.com" style={{ color: 'inherit', borderBottom: '1px dotted rgba(255,255,255,0.3)' }}>
              vikil.lakkavatri25@gmail.com
            </a>
          </div>
        </div>

        {/* Stack ticker */}
        {t.showStackTicker && (
          <div className="stack-strip">
            <div className="stack-track">
              {[...STACK, ...STACK].map((s, i) => (
                <span key={i} className="stack-item">{s}</span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Tweaks panel */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Headline">
          <TweakSelect
            label="Wordmark"
            value={t.headline}
            options={[
              { value: 'name',  label: 'Vikil Lakkavatri' },
              { value: 'ship',  label: 'Ship & Faster' },
              { value: 'craft', label: 'Code with Craft' },
              { value: 'scale', label: 'Built to Scale' },
            ]}
            onChange={v => setTweak('headline', v)}
          />
          <TweakSelect
            label="Pre-headline"
            value={t.pre}
            options={[
              { value: 'role',  label: 'Senior Software Engineer' },
              { value: 'pitch', label: 'React · Next.js · TS' },
              { value: 'intro', label: "Hi — I'm Vikil." },
              { value: 'long',  label: '7+ years tagline' },
            ]}
            onChange={v => setTweak('pre', v)}
          />
        </TweakSection>

        <TweakSection label="Accent">
          <TweakColor
            label="Color"
            value={t.accent}
            options={['#3054ff', '#7c3aed', '#10b981', '#f97316', '#e11d48']}
            onChange={v => setTweak('accent', v)}
          />
        </TweakSection>

        <TweakSection label="Background">
          <TweakToggle label="Live HLS video" value={t.video} onChange={v => setTweak('video', v)} />
          <TweakToggle label="Stack ticker" value={t.showStackTicker} onChange={v => setTweak('showStackTicker', v)} />
          <TweakToggle label="Corner crosshairs" value={t.showCorners} onChange={v => setTweak('showCorners', v)} />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
};

// ────────────────────────────────────────────────────────────────
// Color helpers
// ────────────────────────────────────────────────────────────────
function hexToRgba(hex, a = 1) {
  const m = hex.replace('#','');
  const n = m.length === 3 ? m.split('').map(c => c + c).join('') : m;
  const r = parseInt(n.slice(0,2),16), g = parseInt(n.slice(2,4),16), b = parseInt(n.slice(4,6),16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
function darken(hex, amt = 0.1) {
  const m = hex.replace('#','');
  const n = m.length === 3 ? m.split('').map(c => c + c).join('') : m;
  let r = parseInt(n.slice(0,2),16), g = parseInt(n.slice(2,4),16), b = parseInt(n.slice(4,6),16);
  r = Math.max(0, Math.round(r * (1 - amt)));
  g = Math.max(0, Math.round(g * (1 - amt)));
  b = Math.max(0, Math.round(b * (1 - amt)));
  return `#${[r,g,b].map(v => v.toString(16).padStart(2,'0')).join('')}`;
}

// Site shell — hero + all sections
const Site = () => (
  <React.Fragment>
    <Hero />
    <CompetenciesSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </React.Fragment>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Site />);
