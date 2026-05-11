// app.jsx — root
const App = () => (
  <React.Fragment>
    <div className="grain"></div>
    <TopNav />
    <Hero />
    <main>
      <About />
      <Experience />
      <Skills />
      <Projects />
    </main>
    <Contact />
    <SiteFooter />
  </React.Fragment>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
