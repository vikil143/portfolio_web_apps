const SKILL_GROUPS = [
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js (App Router)', 'TypeScript', 'React Native', 'Svelte', 'Redux Toolkit', 'Context API', 'Custom Hooks'],
  },
  {
    title: 'Architecture',
    items: ['Microfrontend', 'Component-Driven', 'Custom Virtualization', 'MVC', 'Monolithic Apps', 'SSR / RSC', 'Server Actions', 'RBAC'],
  },
  {
    title: 'Visualization & UI',
    items: ['D3.js', 'Three.js', 'SVG', 'Tailwind', 'Material UI', 'Styled Components', 'CSS Modules', 'Figma → Production'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'REST', 'GraphQL', 'WebSockets', 'MongoDB', 'MySQL', 'Firebase'],
  },
  {
    title: 'Auth & Security',
    items: ['JWT', 'OAuth', 'Keycloak', '2FA (TOTP)', 'MD5', 'SHA'],
  },
  {
    title: 'DevOps & Tooling',
    items: ['Git', 'GitHub Actions', 'CI/CD', 'Jest', 'RTL', 'Webpack', 'Vercel', 'Firebase Hosting'],
  },
];

function SkillPill({ label, delay }) {
  const [ref, inView] = useInView({ rootMargin: '-40px' });
  return (
    <span
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`text-xs md:text-sm px-3.5 py-1.5 rounded-full border border-stroke bg-surface/40 text-text-primary/90 hover:bg-surface hover:border-white/20 transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      {label}
    </span>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative bg-bg py-20 md:py-28 overflow-hidden">
      {/* subtle backdrop */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none"></div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Capabilities"
          title="Technical"
          italic="playground"
          subtext="The toolkit I reach for — composed across enterprise dashboards, blockchain DApps, mobile platforms, and documentation systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_GROUPS.map((g, gi) => (
            <div key={g.title} className="bg-surface/40 border border-stroke rounded-3xl p-7 md:p-9 hover:border-white/15 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted mb-2">{String(gi + 1).padStart(2, '0')} / 06</div>
                  <h3 className="text-2xl md:text-3xl font-display italic text-text-primary">{g.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center text-muted text-xs">
                  {g.items.length}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it, i) => (
                  <SkillPill key={it} label={it} delay={i * 30} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competencies row */}
        <div className="mt-16 md:mt-20 border-t border-stroke pt-12">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted mb-6">Core Competencies</div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-base md:text-xl font-display italic text-text-primary/80">
            {['Technical vision', '— ', 'Architecture planning', '— ', 'Code reviews', '— ', 'Team mentoring', '— ', 'Performance profiling', '— ', 'Sprint planning', '— ', 'Figma → Production', '— ', 'End-to-end ownership'].map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Skills = Skills;
