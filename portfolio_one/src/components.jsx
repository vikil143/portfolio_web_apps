// Shared UI primitives
const { useEffect, useRef, useState, useMemo } = React;

function SectionHeader({ eyebrow, title, italic, subtext, action, dark }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-8');
      }
    }, { rootMargin: '-100px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-stroke"></div>
          <span className="text-xs text-muted uppercase tracking-[0.3em]">{eyebrow}</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-text-primary leading-[1.05] tracking-tight mb-4">
          {title} <span className="font-display italic accent-text">{italic}</span>
        </h2>
        {subtext && <p className="text-sm md:text-base text-muted max-w-lg leading-relaxed">{subtext}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

function GhostButton({ children, href, className = '', onClick }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick} className={`grad-border relative inline-flex items-center gap-2 rounded-full border border-stroke bg-surface/40 backdrop-blur-md px-5 py-2.5 text-sm text-text-primary hover:bg-surface transition-colors ${className}`}>
      {children}
    </Tag>
  );
}

function SolidButton({ children, href, className = '', onClick }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick} className={`grad-border group relative inline-flex items-center gap-2 rounded-full bg-text-primary text-bg hover:bg-bg hover:text-text-primary border border-text-primary hover:border-transparent transition-all duration-300 px-7 py-3.5 text-sm font-medium hover:scale-105 ${className}`}>
      {children}
    </Tag>
  );
}

function ArrowUpRight({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function useInView(opts = { rootMargin: '-80px' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), opts);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

Object.assign(window, { SectionHeader, GhostButton, SolidButton, ArrowUpRight, ArrowRight, useInView });
