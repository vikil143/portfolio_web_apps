const PROJECTS = [
  {
    title: 'Option Chain',
    subtitle: 'Stock Trading Platform',
    tags: ['React.js', 'WebSockets', 'Virtualization', 'MongoDB', 'Keycloak'],
    desc: 'Architected the Option Chain module from scratch — 2x performance gain via custom virtualization, API restructuring, and DB query tuning. Real-time WebSocket market data, 2FA via Keycloak + TOTP.',
    period: '2025',
    accent: 'from-[#89AACC] to-[#4E85BF]',
    span: 'md:col-span-7',
    big: true,
    label: 'Lead · Front-end Architect',
  },
  {
    title: 'Docs Platform',
    subtitle: 'Scalable Documentation (Docusaurus)',
    tags: ['Next.js', 'Tailwind', 'TS', 'WebSockets'],
    desc: 'Real-time collaborative editing across multiple users via WebSockets. Custom reusable code editor with live preview, pixel-perfect Figma translation.',
    period: '2025',
    accent: 'from-[#7E9BBB] to-[#4E85BF]',
    span: 'md:col-span-5',
    label: 'Team Lead',
  },
  {
    title: 'Content Editor',
    subtitle: 'Microfrontend WYSIWYG',
    tags: ['Microfrontend', 'React', 'JS', 'Git'],
    desc: 'Real-time DOM modification editor with Undo/Redo, History, DOM Picker, and Click Tracking. Templates: Back-to-Top, Coupon Drawer, Progress Bar, Recently Viewed.',
    period: '2024–25',
    accent: 'from-[#6B8EB3] to-[#3E70A8]',
    span: 'md:col-span-5',
    label: 'Frontend Lead',
  },
  {
    title: 'Maak & Packarma',
    subtitle: 'React Native — Services & Packaging',
    tags: ['React Native', 'Redux', 'Firebase', 'Razorpay', 'JWT'],
    desc: 'Multi-service booking platform and B2B packaging recommender. Secure JWT auth, multi-language, utility bill payments, custom reusable components shipped to Play Store.',
    period: '2021–23',
    accent: 'from-[#89AACC] to-[#5E8FC0]',
    span: 'md:col-span-7',
    big: true,
    label: 'Senior Mobile Engineer',
  },
];

function ProjectCard({ p }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group relative bg-surface border border-stroke rounded-3xl overflow-hidden ${p.span} ${p.big ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}
    >
      {/* Backdrop "image" — gradient + stripes placeholder */}
      <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-90 transition-transform duration-700 group-hover:scale-105`}></div>
      <div className="absolute inset-0 stripe-placeholder opacity-30"></div>
      <div className="absolute inset-0 halftone opacity-20 mix-blend-multiply"></div>

      {/* Big subtle word */}
      <div className="absolute -bottom-4 -right-2 text-[9rem] md:text-[12rem] font-display italic text-white/10 leading-none select-none pointer-events-none">
        {p.title.split(' ')[0]}
      </div>

      {/* Top label row */}
      <div className="absolute top-0 left-0 right-0 p-6 md:p-7 flex items-start justify-between text-white">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-2">{p.label}</div>
          <h3 className="text-2xl md:text-3xl font-display italic">{p.title}</h3>
          <div className="text-sm opacity-80 mt-1">{p.subtitle}</div>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] opacity-70 font-mono">{p.period}</div>
      </div>

      {/* Bottom tags */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/15 text-white/90">
            {t}
          </span>
        ))}
      </div>

      {/* Hover overlay */}
      <div className={`absolute inset-0 bg-bg/80 backdrop-blur-md flex items-center justify-center p-8 transition-opacity duration-500 ${hover ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-md text-center">
          <p className="text-sm md:text-base text-text-primary/90 leading-relaxed mb-6">{p.desc}</p>
          <div className="grad-border inline-flex items-center gap-2 rounded-full bg-text-primary text-bg px-4 py-2 text-xs font-medium">
            View — <span className="font-display italic">{p.title}</span> <ArrowUpRight />
          </div>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="work" className="bg-bg py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured"
          italic="projects"
          subtext="A selection of high-impact engineering work — from real-time trading dashboards to mobile platforms. Performance, architecture, and shipped outcomes."
          action={
            <GhostButton href="#experience" className="hidden md:inline-flex">
              View all work <ArrowRight />
            </GhostButton>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}

window.Projects = Projects;
