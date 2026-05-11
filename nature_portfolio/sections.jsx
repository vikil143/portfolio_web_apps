// sections.jsx — page sections
const { useState, useEffect, useRef } = React;

// ===== Nav =====
function TopNav() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const opts = { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false };
      setTime(now.toLocaleTimeString("en-GB", opts) + " IST");
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <nav className="nav">
      <div className="nav-brand">
        <span className="nav-brand-dot"></span>
        <span>VL · Portfolio · 2026</span>
      </div>
      <div className="nav-links">
        {window.NAV_ITEMS.map((n) => (
          <a key={n.id} href={`#${n.id}`}>{n.label}</a>
        ))}
      </div>
      <div>{time}</div>
    </nav>
  );
}

// ===== Hero =====
function Hero() {
  return (
    <header className="hero" data-screen-label="01 Hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source
          src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-vignette"></div>

      <div className="hero-content">
        <div>
          <div className="hero-eyebrow">Senior Software Engineer · Available Q2 2026</div>
          <h1 className="hero-title">
            Vikil<br />
            Lakka<span className="it">vatri</span>
          </h1>
          <p className="hero-sub">
            Seven years architecting React, Next.js, and TypeScript systems for
            data-heavy enterprise products — from real-time trading dashboards
            to microfrontend editors. Currently shipping at NeoSoft Technologies.
          </p>
        </div>
        <div className="hero-meta">
          <div className="hero-meta-row"><span>LAT</span>19.0 N · Mumbai</div>
          <div className="hero-meta-row"><span>FOCUS</span>React · Next.js · TS</div>
          <div className="hero-meta-row"><span>SINCE</span>2019</div>
          <div className="hero-meta-row"><span>STATUS</span>Open to roles</div>
        </div>
      </div>

      <div className="scroll-cue">Scroll</div>
    </header>
  );
}

// ===== About =====
function About() {
  return (
    <section className="section" id="about" data-screen-label="02 About">
      <div className="section-head">
        <div className="section-num"><span>01</span>About</div>
        <h2 className="section-title">
          A frontend lead who treats <span className="it">performance,</span> craft, and<br />
          mentorship as the same discipline.
        </h2>
      </div>

      <div className="about-grid">
        <aside className="about-sidebar">
          <div className="about-sidebar-block">
            <strong>Based</strong>
            <span>Worli, Mumbai · India</span>
          </div>
          <div className="about-sidebar-block">
            <strong>Education</strong>
            <span>BSc Information Technology<br />D.G. Ruparel College, Mumbai University · 2018</span>
          </div>
          <div className="about-sidebar-block">
            <strong>Core</strong>
            <span>Architecture · Code Review · Mentoring · Perf · Figma → Production</span>
          </div>
        </aside>

        <div>
          <p className="about-lead">
            I lead frontend on enterprise products where <em>milliseconds matter</em> — trading
            screens, dashboards, real-time editors. My work sits at the intersection of
            scalable React architecture, deep performance profiling, and the day-to-day
            craft of design-faithful UI translation.
          </p>

          <div className="about-stats">
            {window.PROFILE.stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="stat-num">{s.num}<sup>{s.suffix}</sup></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Experience =====
function Experience() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="section" id="experience" data-screen-label="03 Experience">
      <div className="section-head">
        <div className="section-num"><span>02</span>Experience</div>
        <h2 className="section-title">
          Six roles, one thread:<br />
          <span className="it">building things that scale.</span>
        </h2>
      </div>

      <div className="exp-list">
        {window.EXPERIENCE.map((e, i) => (
          <div
            key={i}
            className={"exp-row" + (openIdx === i ? " open" : "")}
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
          >
            <div className="exp-period">
              <strong>{e.period.split(" — ")[0]}</strong>
              {e.period.split(" — ")[1] || ""}
              <div style={{ marginTop: 8, color: "var(--ink-3)" }}>{e.location}</div>
            </div>

            <div className="exp-main">
              <div className="exp-company">
                {e.company}
                <span className="exp-arrow">↗</span>
              </div>
              <div className="exp-role">{e.role}</div>
              <ul className="exp-highlights">
                {e.highlights.map((h, j) => <li key={j}>{h}</li>)}
              </ul>
            </div>

            <div className="exp-tags">
              {e.tags.map((t) => <span key={t} className="exp-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ===== Skills =====
function Skills() {
  return (
    <section className="section" id="skills" data-screen-label="04 Stack">
      <div className="section-head">
        <div className="section-num"><span>03</span>Stack</div>
        <h2 className="section-title">
          The toolkit, <span className="it">chosen deliberately.</span>
        </h2>
      </div>

      <div className="skills-grid">
        {window.SKILLS.map((s) => (
          <div className="skill-cat" key={s.label}>
            <div className="skill-cat-label">CAT · {s.label}</div>
            <div className="skill-cat-title">{s.title}</div>
            <div className="skill-list">
              {s.items.map((it) => <span key={it} className="skill-pill">{it}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ===== Projects =====
function Projects() {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <section className="section" id="work" data-screen-label="05 Work">
      <div className="section-head">
        <div className="section-num"><span>04</span>Selected Work</div>
        <h2 className="section-title">
          Five projects that shaped<br />
          the <span className="it">last three years.</span>
        </h2>
      </div>

      <div className="proj-grid">
        {window.PROJECTS.map((p) => (
          <article className="proj-card" key={p.num} onMouseMove={onMove}>
            <div className="proj-head">
              <div className="proj-num">Project · {p.num}</div>
              <div className="proj-year">{p.year}</div>
            </div>
            <h3 className="proj-title">{p.title}<br /><em>{p.accent}</em></h3>
            <div className="proj-stack">{p.stack}</div>
            <p className="proj-desc">{p.desc}</p>
            <ul className="proj-bullets">
              {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="proj-footer">
              <span>{p.team}</span>
              <span>{p.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ===== Contact =====
function Contact() {
  return (
    <section className="contact" id="contact" data-screen-label="06 Contact">
      <div className="contact-eyebrow">Currently open to roles</div>
      <h2 className="contact-title">
        Let&rsquo;s build<br />
        <span className="it">something fast.</span>
      </h2>
      <a className="contact-mail" href={`mailto:${window.PROFILE.email}`}>
        {window.PROFILE.email}
      </a>
      <div className="contact-channels">
        <a href={`tel:${window.PROFILE.phone.replace(/\s/g, "")}`}>{window.PROFILE.phone}</a>
        <a href={`https://${window.PROFILE.github}`} target="_blank" rel="noreferrer">GitHub · vikil143</a>
        <a href={`https://${window.PROFILE.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div>© 2026 Vikil Lakkavatri</div>
      <div>Designed &amp; built in React · Mumbai</div>
    </footer>
  );
}

Object.assign(window, { TopNav, Hero, About, Experience, Skills, Projects, Contact, SiteFooter });
