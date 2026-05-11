// data.jsx — CV content for portfolio
const PROFILE = {
  name: "Vikil Lakkavatri",
  role: "Senior Software Engineer",
  focus: "React.js · Next.js · TypeScript",
  location: "Worli, Mumbai",
  email: "vikil.lakkavatri25@gmail.com",
  phone: "+91 80824 43869",
  github: "github.com/vikil143",
  linkedin: "linkedin.com/in/vikil-lakkavatri-36b818178",
  summary:
    "Senior Software Engineer with 7+ years driving technical vision, code quality, and scalable React architecture across enterprise web applications. Specialised in Next.js App Router, TypeScript, Redux, and microfrontend systems — delivering up to 3× performance gains on data-heavy enterprise dashboards.",
  stats: [
    { num: "7", suffix: "+", label: "Years building production frontends" },
    { num: "3", suffix: "×", label: "Perf gain on enterprise dashboards" },
    { num: "5", suffix: "+", label: "Enterprise React apps led" },
    { num: "3", suffix: "+", label: "Engineers mentored & reviewed" },
  ],
};

const EXPERIENCE = [
  {
    period: "Jun 2025 — Present",
    company: "NeoSoft Technologies",
    role: "Senior Software Engineer",
    location: "Mumbai, IN",
    tags: ["Next.js", "TypeScript", "D3.js", "WebSockets", "Redux"],
    highlights: [
      "Drove technical vision across 5+ enterprise React apps; defined scalable Next.js + TS architecture and component-driven patterns.",
      "Led performance work on the Option Chain module — 3× improvement via custom virtualization, API restructuring, and rendering profiling.",
      "Mentored 3+ junior devs and interns; enforced coding standards and ran code reviews across the team.",
      "Introduced agentic AI tooling (Claude Code, Codex) and custom virtualization libraries to lift team productivity.",
      "Architected real-time dashboards (Option Chain, Mutual Funds) with WebSocket market-data streaming.",
      "Built full-stack flows on Next.js App Router — server actions, RBAC, dynamic routing, SEO.",
    ],
  },
  {
    period: "Feb 2024 — Mar 2025",
    company: "Netcore Cloud",
    role: "Senior React Developer",
    location: "Thane, IN",
    tags: ["React", "Microfrontend", "Agile", "PI"],
    highlights: [
      "Revamped a legacy React app — 90% improvement in UI consistency and accuracy.",
      "Resolved critical legacy bugs by root-cause analysis; raised stability and maintainability.",
      "Delivered the quarter's flagship features: Undo/Redo, Version Management, Click Tracking.",
      "Collaborated with Tech Lead on feature analysis, estimation, and scalable solution design.",
    ],
  },
  {
    period: "Apr 2023 — Jan 2024",
    company: "Shifa Infotech",
    role: "React Native Developer",
    location: "Jogeshwari, Mumbai",
    tags: ["React Native", "Stakeholder Mgmt"],
    highlights: [
      "Partnered with stakeholders on quarterly planning and on-time delivery of prioritised features.",
    ],
  },
  {
    period: "Feb 2021 — Mar 2023",
    company: "Mypcot Infotech",
    role: "Senior React Native Developer",
    location: "Mumbai, IN",
    tags: ["React Native", "Firebase", "Razorpay", "iOS · Android"],
    highlights: [
      "Built pixel-perfect React Native UIs for iOS & Android in close partnership with design.",
      "Created reusable cross-platform components ensuring consistent behavior.",
      "Integrated Firebase, Razorpay, CCAvenue, GPS, Camera, and biometric APIs.",
      "Built and shipped binaries to App Store and Play Store; mentored juniors.",
    ],
  },
  {
    period: "Mar 2020 — Jan 2021",
    company: "Blocklogy",
    role: "Software Developer",
    location: "Navi Mumbai, IN",
    tags: ["Ethereum", "DApps", "React"],
    highlights: [
      "Built blockchain-based DApps on Ethereum v4 & v5 with reusable React components.",
      "Integrated third-party APIs and resolved complex cross-stack bugs.",
    ],
  },
  {
    period: "Feb 2019 — Mar 2020",
    company: "Tantra-Gyan",
    role: "Software Solution Developer",
    location: "Mumbai, IN",
    tags: ["React", "Laravel Blade"],
    highlights: [
      "Built UI components in React.js and Laravel Blade.",
      "Integrated Camera and Location APIs across applications.",
    ],
  },
];

const SKILLS = [
  { label: "01", title: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Java"] },
  { label: "02", title: "Frameworks", items: ["React.js", "Next.js (App Router)", "React Native", "Svelte", "jQuery"] },
  { label: "03", title: "State & Architecture", items: ["Redux Toolkit", "Context API", "Custom Hooks", "Microfrontend", "Component-Driven", "MVC"] },
  { label: "04", title: "Styling", items: ["Tailwind CSS", "Material UI", "Styled Components", "CSS Modules", "Bootstrap"] },
  { label: "05", title: "Backend & APIs", items: ["Node.js", "Express.js", "REST", "GraphQL", "WebSockets"] },
  { label: "06", title: "Data Viz", items: ["D3.js", "Three.js", "SVG"] },
  { label: "07", title: "Databases", items: ["MongoDB", "MySQL", "Firebase"] },
  { label: "08", title: "Auth & Security", items: ["JWT", "OAuth", "Keycloak", "2FA (TOTP)", "MD5", "SHA"] },
  { label: "09", title: "Tooling & DevOps", items: ["Jest", "RTL", "Webpack", "Babel", "ESLint", "GitHub Actions", "CI/CD"] },
  { label: "10", title: "Cloud & Payments", items: ["Vercel", "Firebase Hosting", "Razorpay", "CCAvenue"] },
  { label: "11", title: "Other", items: ["Electron", "Docusaurus", "Moment.js", "Claude Code", "Codex"] },
  { label: "12", title: "Methodology", items: ["Agile", "Scrum", "Code Reviews", "Sprint Planning", "Estimation"] },
];

const PROJECTS = [
  {
    num: "01",
    year: "2025",
    title: "Stock Trading Platform",
    accent: "Option Chain",
    stack: "React.js · Node.js · Express · WebSockets · MongoDB · MySQL · Keycloak",
    desc: "Architected the Option Chain module from scratch as front-end lead — a real-time market-data interface for active traders.",
    bullets: [
      "2× performance via custom virtualization, API restructuring, and DB query tuning.",
      "Visible-area listing technique cut DOM load and lifted scroll responsiveness.",
      "REST APIs in Node/Express for service-to-service communication.",
      "2FA via Keycloak + external TOTP library for hardened login.",
    ],
    team: "Team of 3",
    role: "Front-end Lead",
  },
  {
    num: "02",
    year: "2025",
    title: "Documentation Platform",
    accent: "Docusaurus",
    stack: "React · Next.js · Tailwind · TypeScript · WebSockets",
    desc: "Scalable documentation platform with real-time collaborative editing and a customisable, reusable code-editor component.",
    bullets: [
      "Multi-user real-time edits over WebSockets.",
      "Pixel-perfect, fully responsive translation from Figma.",
      "Reusable live-preview code editor component.",
    ],
    team: "Team of 3",
    role: "Front-end",
  },
  {
    num: "03",
    year: "2024 — 2025",
    title: "Dynamic Content Editor",
    accent: "Microfrontend",
    stack: "React · JavaScript · Microfrontend · Git · Linux",
    desc: "Real-time editor for modifying webpage elements — text, images, links, styles — inside a microfrontend host.",
    bullets: [
      "Undo/Redo, History Management, DOM Picker, Click Tracking.",
      "Reusable templates: Back-to-Top, Coupon Drawer, Progress Bar, Recently Viewed.",
    ],
    team: "Team of 2",
    role: "Front-end",
  },
  {
    num: "04",
    year: "2022 — 2023",
    title: "Maak — Services Booking",
    accent: "Mobile",
    stack: "React Native · Redux · REST · GraphQL · Firebase · JWT · TypeScript",
    desc: "Multi-service booking platform with secure payments, admin panel, and end-user mobile app — shipped on Play Store.",
    bullets: [
      "Booking flow and secure payment integration end-to-end.",
      "Multi-language support across regions; JWT sessions.",
      "Utility bill payments — electricity, mobile recharge.",
    ],
    team: "Team of 3",
    role: "RN Senior",
  },
  {
    num: "05",
    year: "2021",
    title: "Packarma",
    accent: "Packaging Recs",
    stack: "React Native · ES6 · REST · GraphQL · Firebase · JWT · Razorpay",
    desc: "Mobile app recommending cost-effective laminate packaging by product type, material strength, shelf life, and sealing.",
    bullets: [
      "Firebase for analytics & user management; Razorpay for payments.",
      "Pixel-perfect Figma → production with reusable component system.",
    ],
    team: "Team of 3",
    role: "RN Developer",
  },
];

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

window.PROFILE = PROFILE;
window.EXPERIENCE = EXPERIENCE;
window.SKILLS = SKILLS;
window.PROJECTS = PROJECTS;
window.NAV_ITEMS = NAV_ITEMS;
