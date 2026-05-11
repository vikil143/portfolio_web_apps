function Navbar({ scrolled }) {
  const [active, setActive] = React.useState('Home');
  const links = ['Home', 'Work', 'Experience', 'Skills'];
  const ids = { Home: 'home', Work: 'work', Experience: 'experience', Skills: 'skills' };

  const go = (key) => {
    setActive(key);
    const el = document.getElementById(ids[key]);
    if (el) window.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 transition-all`}>
      <div className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-2 py-2 ${scrolled ? 'shadow-md shadow-black/40' : ''}`}>
        {/* Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); go('Home'); }} className="group relative">
          <div className="w-9 h-9 rounded-full accent-gradient animate-gradient p-[1.5px] transition-transform group-hover:scale-110">
            <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
              <span className="font-display italic text-[13px] text-text-primary">VL</span>
            </div>
          </div>
        </a>
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block"></div>
        {links.map((l) => (
          <button
            key={l}
            onClick={() => go(l)}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
              active === l ? 'text-text-primary bg-stroke/70' : 'text-muted hover:text-text-primary hover:bg-stroke/50'
            }`}
          >
            {l}
          </button>
        ))}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block"></div>
        <a
          href="mailto:vikil.lakkavatri25@gmail.com"
          className="grad-border relative inline-flex items-center gap-1.5 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary bg-surface backdrop-blur-md hover:bg-stroke/50 transition-colors"
        >
          Say hi <span className="text-[11px]">↗</span>
        </a>
      </div>
    </nav>
  );
}

function HeroBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg"></div>
      <div className="glow-orb" style={{ width: 600, height: 600, top: '-200px', left: '-150px', background: '#4E85BF' }}></div>
      <div className="glow-orb" style={{ width: 500, height: 500, bottom: '-150px', right: '-100px', background: '#89AACC', opacity: 0.25 }}></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent"></div>
    </div>
  );
}

function Hero() {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const roles = ['Senior Engineer', 'React Architect', 'Team Lead', 'Builder'];
  const nameRef = React.useRef(null);
  const blurRefs = React.useRef([]);

  React.useEffect(() => {
    const iv = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2000);
    return () => clearInterval(iv);
  }, []);

  React.useEffect(() => {
    if (!window.gsap) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(nameRef.current, { opacity: 0, y: 50, duration: 1.2, delay: 0.1 })
      .from(blurRefs.current.filter(Boolean), { opacity: 0, filter: 'blur(10px)', y: 20, duration: 1, stagger: 0.1 }, '-=0.8');
  }, []);

  const addBlur = (el) => { if (el && !blurRefs.current.includes(el)) blurRefs.current.push(el); };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <HeroBackdrop />

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        <div ref={addBlur} className="text-xs text-muted uppercase tracking-[0.3em] mb-8">
          COLLECTION '26 — SENIOR ENGINEER
        </div>
        <h1 ref={nameRef} className="text-6xl md:text-8xl lg:text-[9.5rem] font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Vikil Lakkavatri
        </h1>
        <div ref={addBlur} className="text-base md:text-xl text-muted mb-6">
          A{' '}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {roles[roleIndex]}
          </span>{' '}
          based in Mumbai, India.
        </div>
        <p ref={addBlur} className="text-sm md:text-base text-muted max-w-md mb-12 leading-relaxed">
          7+ years architecting scalable React.js & Next.js platforms — performance, mentorship, and component systems that ship.
        </p>
        <div ref={addBlur} className="inline-flex flex-wrap gap-4 justify-center">
          <SolidButton href="#work">See Works <ArrowRight /></SolidButton>
          <a
            href="mailto:vikil.lakkavatri25@gmail.com"
            className="grad-border relative inline-flex items-center gap-2 rounded-full border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all duration-300 px-7 py-3.5 text-sm font-medium hover:scale-105"
          >
            Reach out <ArrowUpRight />
          </a>
        </div>

        {/* Quick stats strip */}
        <div ref={addBlur} className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted uppercase tracking-[0.25em]">
          <span>7+ Years</span>
          <span className="w-1 h-1 rounded-full bg-stroke"></span>
          <span>React · Next · TS</span>
          <span className="w-1 h-1 rounded-full bg-stroke"></span>
          <span>Microfrontend · D3</span>
          <span className="w-1 h-1 rounded-full bg-stroke"></span>
          <span>Mumbai, IN</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] text-muted uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-stroke overflow-hidden relative">
          <div className="absolute inset-x-0 h-4 accent-gradient animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
}

window.Navbar = Navbar;
window.Hero = Hero;
