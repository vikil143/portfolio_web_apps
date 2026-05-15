// =============================================
// Aethera® — Root
// =============================================

const { useEffect: rUseEffect, useState: rUseState } = React;

function App() {
  useReveal();
  const [active, setActive] = rUseState('home');

  rUseEffect(() => {
    const sections = ['home', 'studio', 'about', 'journal', 'reach'];
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div data-screen-label="01 Aethera Portfolio">
      <NavBar active={active} />
      <Hero />
      <Marquee />
      <WorkSection />
      <AboutSection />
      <PhilosophyBlock />
      <JournalSection />
      <ReachSection />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
