function Contact() {
  const marqueeRef = React.useRef(null);

  React.useEffect(() => {
    if (!window.gsap || !marqueeRef.current) return;
    const tracks = marqueeRef.current.querySelectorAll('.mt');
    tracks.forEach((t) => {
      gsap.to(t, { xPercent: -100, duration: 40, ease: 'none', repeat: -1 });
    });
  }, []);

  const socials = [
    { name: 'GitHub', href: 'https://github.com/vikil143' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/vikil-lakkavatri-36b818178' },
    { name: 'Email', href: 'mailto:vikil.lakkavatri25@gmail.com' },
    { name: 'Phone', href: 'tel:+918082443869' },
  ];

  return (
    <footer id="contact" className="relative bg-bg pt-20 md:pt-28 pb-8 md:pb-12 overflow-hidden border-t border-stroke">
      {/* Backdrop */}
      <div className="absolute inset-0 grid-bg opacity-30 [transform:scaleY(-1)]"></div>
      <div className="glow-orb" style={{ width: 700, height: 700, top: '-200px', left: '50%', transform: 'translateX(-50%)', background: '#4E85BF', opacity: 0.2 }}></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Marquee */}
        <div ref={marqueeRef} className="marquee mb-16 md:mb-24 -mx-6 md:-mx-10 lg:-mx-16">
          <div className="mt flex gap-12 shrink-0 items-center">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-6xl md:text-8xl lg:text-9xl font-display italic text-text-primary/90 whitespace-nowrap">
                Building the future <span className="inline-block w-3 h-3 rounded-full accent-gradient mx-6 align-middle"></span>
              </span>
            ))}
          </div>
          <div className="mt flex gap-12 shrink-0 items-center" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-6xl md:text-8xl lg:text-9xl font-display italic text-text-primary/90 whitespace-nowrap">
                Building the future <span className="inline-block w-3 h-3 rounded-full accent-gradient mx-6 align-middle"></span>
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <div className="text-xs text-muted uppercase tracking-[0.3em] mb-6">Open to opportunities</div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary leading-[0.95] tracking-tight mb-10">
            Let's build<br />something real.
          </h2>
          <a
            href="mailto:vikil.lakkavatri25@gmail.com"
            className="grad-border relative inline-flex items-center gap-3 rounded-full bg-text-primary text-bg hover:bg-bg hover:text-text-primary border border-text-primary hover:border-transparent transition-all duration-300 px-8 py-4 text-base font-medium hover:scale-105"
          >
            vikil.lakkavatri25@gmail.com <ArrowUpRight />
          </a>
          <div className="mt-6 text-sm text-muted">
            Worli, Mumbai · +91 80824 43869
          </div>
        </div>

        {/* Footer bar */}
        <div className="border-t border-stroke pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs text-muted uppercase tracking-[0.2em]">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 pulse-dot"></span>
              <span className="relative w-2 h-2 rounded-full bg-emerald-400"></span>
            </span>
            Available for projects
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="text-xs text-muted hover:text-text-primary uppercase tracking-[0.2em] transition-colors flex items-center gap-1.5">
                {s.name} <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>

          <div className="text-xs text-muted font-mono">
            © {new Date().getFullYear()} Vikil Lakkavatri
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Contact = Contact;
