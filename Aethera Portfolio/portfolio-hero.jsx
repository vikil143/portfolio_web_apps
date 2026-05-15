// =============================================
// Aethera® — Vikil Lakkavatri Portfolio
// =============================================

const { useState, useEffect, useRef } = React;

const NAV = [
  { label: 'Home',     href: '#home'    },
  { label: 'Studio',   href: '#studio'  },
  { label: 'About',    href: '#about'   },
  { label: 'Journal',  href: '#journal' },
  { label: 'Reach Us', href: '#reach'   },
];

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4';

// ---- Reveal hook -------------------------------------------
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ---- Cinematic video with fade loop ------------------------
function HeroVideo() {
  const videoRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.play().catch(() => {});

    const FADE = 0.5;

    const tick = () => {
      if (v.duration && !isNaN(v.duration)) {
        const t = v.currentTime;
        const d = v.duration;
        let op = 1;
        if (t < FADE) op = t / FADE;
        else if (t > d - FADE) op = Math.max(0, (d - t) / FADE);
        v.style.opacity = String(op);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const onEnded = () => {
      v.style.opacity = '0';
      setTimeout(() => {
        v.currentTime = 0;
        v.play().catch(() => {});
      }, 100);
    };
    v.addEventListener('ended', onEnded);

    return () => {
      cancelAnimationFrame(rafRef.current);
      v.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <div
      className="absolute"
      style={{
        top: '300px',
        inset: 'auto 0 0 0',
        height: 'calc(100% - 300px)',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0,
          transition: 'opacity 0.1s linear',
          filter: 'saturate(0.85) contrast(1.02)',
        }}
      />
      {/* gradient overlays - fade in from white at top, fade to white at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0.0) 22%, rgba(255,255,255,0.0) 55%, rgba(255,255,255,0.85) 92%, #FFFFFF 100%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 60% at 50% 100%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

// ---- Navigation --------------------------------------------
function NavBar({ active }) {
  return (
    <nav
      className="fixed w-full"
      style={{ top: 0, left: 0, zIndex: 50 }}
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between"
        style={{ padding: '1.25rem 2rem' }}
      >
        <a
          href="#home"
          className="font-display"
          style={{
            color: '#000',
            fontSize: '1.875rem',
            letterSpacing: '-0.03em',
            textDecoration: 'none',
            lineHeight: 1,
          }}
        >
          Aethera<sup style={{ fontSize: '0.55em', verticalAlign: 'super', marginLeft: '1px' }}>®</sup>
        </a>

        <div className="flex items-center hide-mobile" style={{ gap: '2.25rem' }}>
          {NAV.map(item => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link ${active === item.href.slice(1) ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#reach" className="btn-primary btn-sm">
          Begin Journey
        </a>
      </div>
    </nav>
  );
}

// ---- Hero --------------------------------------------------
function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      <HeroVideo />

      <div
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          paddingTop: 'calc(8rem - 75px)',
          paddingBottom: '10rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          zIndex: 10,
        }}
      >
        <div className="animate-fade-rise" style={{ marginBottom: '2rem' }}>
          <span className="pill">
            <span className="dot" style={{ background: '#16a34a' }}></span>
            Available · Q3 2026 · Remote / Mumbai
          </span>
        </div>

        <h1
          className="font-display animate-fade-rise-delay"
          style={{
            fontSize: 'clamp(3rem, 9vw, 8.5rem)',
            maxWidth: '80rem',
            lineHeight: 0.95,
            letterSpacing: '-2.46px',
            color: '#000',
            fontWeight: 400,
            margin: 0,
            textWrap: 'balance',
          }}
        >
          Beyond <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>silence,</em> we build{' '}
          <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>the eternal.</em>
        </h1>

        <p
          className="animate-fade-rise-delay-2"
          style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
            maxWidth: '42rem',
            marginTop: '2rem',
            lineHeight: 1.65,
            color: '#6F6F6F',
          }}
        >
          A senior engineer's studio crafting calm, performant interfaces for
          brilliant teams. Through the noise — React, Next.js, and seven years of
          obsession with how software ought to feel.
        </p>

        <div
          className="animate-fade-rise-delay-3 flex items-center"
          style={{ marginTop: '3rem', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="#studio" className="btn-primary btn-lg">Begin Journey</a>
          <a href="#reach" className="btn-ghost" style={{ padding: '1.15rem 2rem', fontSize: '0.95rem' }}>
            vikil.lakkavatri25@gmail.com
          </a>
        </div>

        <div
          className="animate-fade-rise-delay-4"
          style={{ marginTop: '5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#6F6F6F', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          <span style={{ display: 'inline-block', width: 24, height: 1, background: '#B5B5B5' }}></span>
          Scroll to begin
        </div>
      </div>
    </section>
  );
}

// ---- Marquee -----------------------------------------------
function Marquee() {
  const items = [
    'React · Next.js · TypeScript',
    'Microfrontend Architecture',
    'Performance · 3× faster dashboards',
    'D3.js · Custom Visualizations',
    'Real-time · WebSockets',
    'Component-driven design',
    'Figma → Production',
    'Team mentoring · 3+ devs',
  ];
  const stream = [...items, ...items];
  return (
    <section
      className="reveal"
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '1.5rem 0',
        overflow: 'hidden',
        background: '#fff',
      }}
    >
      <div className="marquee-track">
        {stream.map((t, i) => (
          <div
            key={i}
            className="font-display"
            style={{
              fontSize: '2.25rem',
              padding: '0 2.5rem',
              color: i % 2 === 0 ? '#000' : '#6F6F6F',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
            }}
          >
            {t}
            <span style={{ width: 6, height: 6, background: '#6F6F6F', borderRadius: 999, display: 'inline-block' }}></span>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { useReveal, HeroVideo, NavBar, Hero, Marquee });
