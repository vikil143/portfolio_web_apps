function StatNumber({ value, suffix, delay = 0 }) {
  const [ref, inView] = useInView();
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    const target = parseFloat(value);
    const start = performance.now() + delay;
    const dur = 1400;
    let raf;
    const tick = (t) => {
      const p = Math.min(1, Math.max(0, (t - start) / dur));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(eased * target);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);
  const display = Number.isInteger(parseFloat(value)) ? Math.floor(n) : n.toFixed(1);
  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

function Stats() {
  const stats = [
    { value: '7', suffix: '+', label: 'Years experience', sub: 'across 6 companies' },
    { value: '20', suffix: '+', label: 'Projects shipped', sub: 'web, mobile, blockchain' },
    { value: '3', suffix: 'x', label: 'Performance gains', sub: 'Option Chain module' },
    { value: '5', suffix: '+', label: 'Enterprise React apps', sub: 'architected at NeoSoft' },
  ];
  return (
    <section className="bg-bg py-20 md:py-28 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
          {stats.map((s, i) => (
            <div key={i} className="group">
              <div className="text-6xl md:text-7xl lg:text-8xl font-display text-text-primary leading-none">
                <StatNumber value={s.value} suffix={s.suffix} delay={i * 80} />
              </div>
              <div className="mt-4 text-sm text-text-primary/80">{s.label}</div>
              <div className="text-xs text-muted mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Stats = Stats;
