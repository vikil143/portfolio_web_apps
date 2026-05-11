function LoadingScreen({ onComplete }) {
  const [count, setCount] = React.useState(0);
  const [wordIndex, setWordIndex] = React.useState(0);
  const words = ['Architect', 'Engineer', 'Mentor'];

  React.useEffect(() => {
    const start = performance.now();
    const dur = 2700;
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setCount(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onComplete, 400);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  React.useEffect(() => {
    const iv = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 900);
    return () => clearInterval(iv);
  }, []);

  const pct = count / 100;

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 md:p-10 overflow-hidden">
      {/* Top-left */}
      <div className="flex justify-between items-start">
        <div className="opacity-0 animate-[role-fade-in_0.6s_ease-out_forwards]">
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Portfolio</span>
        </div>
        <div className="opacity-0 animate-[role-fade-in_0.6s_ease-out_0.2s_forwards] text-xs text-muted uppercase tracking-[0.3em]">
          v26.05
        </div>
      </div>

      {/* Center rotating word */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative h-[1.2em] overflow-hidden">
          <span
            key={wordIndex}
            className="block text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80 animate-[role-fade-in_0.4s_ease-out]"
          >
            {words[wordIndex]}
          </span>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex items-end justify-between">
        <div className="opacity-0 animate-[role-fade-in_0.6s_ease-out_0.3s_forwards]">
          <div className="text-xs text-muted uppercase tracking-[0.3em] mb-2">Loading</div>
          <div className="text-xs text-muted font-mono">Vikil Lakkavatri</div>
        </div>
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none">
          {String(count).padStart(3, '0')}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="h-full accent-gradient origin-left glow-shadow"
          style={{ transform: `scaleX(${pct})`, transition: 'transform 0.1s linear' }}
        ></div>
      </div>
    </div>
  );
}

window.LoadingScreen = LoadingScreen;
