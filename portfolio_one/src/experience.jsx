const EXPERIENCE = [
  {
    company: 'NeoSoft Technologies',
    role: 'Senior Software Engineer',
    period: 'Jun 2025 — Present',
    location: 'Mumbai, India',
    bullets: [
      'Drove technical vision across 5+ enterprise React.js apps using Next.js, TypeScript, component-driven patterns.',
      'Led 3x performance gains on Option Chain via virtualization, refactoring, and API restructuring.',
      'Mentored 3+ junior devs; enforced coding standards and architecture reviews.',
      'Built real-time WebSocket dashboards (Option Chain, Mutual Funds) and D3.js visualizations.',
    ],
    tags: ['Next.js', 'TypeScript', 'D3.js', 'WebSockets', 'Microfrontend'],
  },
  {
    company: 'Netcore Cloud',
    role: 'Senior React Developer',
    period: 'Feb 2024 — Mar 2025',
    location: 'Thane, India',
    bullets: [
      'Revamped legacy React app — 90% improvement in UI consistency and accuracy.',
      'Delivered key PI features: Undo/Redo, Version Management, Click Tracking — with minimal bugs.',
      'Collaborated with Tech Lead on estimations and scalable architecture in Agile env.',
    ],
    tags: ['React', 'Redux', 'Agile'],
  },
  {
    company: 'Shifa Infotech',
    role: 'React Native Developer',
    period: 'Apr 2023 — Jan 2024',
    location: 'Jogeshwari, Mumbai',
    bullets: [
      'Quarterly delivery planning with stakeholders; on-time prioritized releases.',
    ],
    tags: ['React Native'],
  },
  {
    company: 'Mypcot Infotech',
    role: 'Senior React Native Developer',
    period: 'Feb 2021 — Mar 2023',
    location: 'Mumbai, India',
    bullets: [
      'Pixel-perfect RN UIs across iOS/Android with custom reusable components.',
      'Integrated Firebase, Razorpay, CCAvenue, GPS, Camera, Biometrics APIs.',
      'Built and shipped iOS/Android binaries to Play Store and App Store.',
      'Mentored junior developers — improved team output.',
    ],
    tags: ['React Native', 'Firebase', 'Razorpay', 'iOS/Android'],
  },
  {
    company: 'Blocklogy',
    role: 'Software Developer',
    period: 'Mar 2020 — Jan 2021',
    location: 'Navi Mumbai, India',
    bullets: [
      'Built blockchain DApps on Ethereum v4/v5 with reusable React components.',
      'Integrated third-party APIs and resolved complex bugs.',
    ],
    tags: ['Ethereum', 'React', 'DApps'],
  },
  {
    company: 'Tantra-Gyan',
    role: 'Software Solution Developer',
    period: 'Feb 2019 — Mar 2020',
    location: 'Mumbai, India',
    bullets: [
      'Built UI components with React.js and Laravel Blade.',
      'Integrated Camera and Location APIs.',
    ],
    tags: ['React.js', 'Laravel'],
  },
];

function ExperienceRow({ e, i }) {
  const [ref, inView] = useInView({ rootMargin: '-60px' });
  return (
    <article
      ref={ref}
      className={`group relative border-t border-stroke py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${i * 60}ms` }}
    >
      {/* index */}
      <div className="col-span-2 md:col-span-1 text-xs text-muted font-mono pt-1">
        {String(i + 1).padStart(2, '0')}
      </div>

      {/* company + role */}
      <div className="col-span-10 md:col-span-4">
        <h3 className="text-2xl md:text-3xl font-display italic text-text-primary leading-tight">{e.company}</h3>
        <div className="text-sm text-muted mt-1">{e.role}</div>
        <div className="text-xs text-muted/70 uppercase tracking-[0.2em] mt-3 font-mono">{e.period}</div>
        <div className="text-xs text-muted/70 mt-1">{e.location}</div>
      </div>

      {/* bullets */}
      <div className="col-span-12 md:col-span-5 space-y-3">
        {e.bullets.map((b, k) => (
          <p key={k} className="text-sm text-muted leading-relaxed flex gap-3">
            <span className="text-text-primary/40 mt-1.5">—</span>
            <span>{b}</span>
          </p>
        ))}
      </div>

      {/* tags */}
      <div className="col-span-12 md:col-span-2 flex md:flex-col flex-wrap gap-2 md:items-end md:text-right">
        {e.tags.map((t) => (
          <span key={t} className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-stroke text-muted">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-bg py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Experience"
          title="A timeline of"
          italic="craft"
          subtext="Seven years across enterprise React, microfrontend platforms, blockchain, and mobile — shipped features, mentored teams, owned architecture."
          action={
            <GhostButton href="#contact" className="hidden md:inline-flex">
              Download CV <ArrowUpRight />
            </GhostButton>
          }
        />
        <div className="border-b border-stroke">
          {EXPERIENCE.map((e, i) => <ExperienceRow key={e.company} e={e} i={i} />)}
        </div>
      </div>
    </section>
  );
}

window.Experience = Experience;
