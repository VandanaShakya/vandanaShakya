import  Navbar from './components/Navbar';
import  Hero from './components/Hero';
import  About from './components/About';
import  Skills from './components/Skill';
import  Experience from './components/Experience';
import  Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <footer className="py-8 text-center text-xs text-gray-400 tracking-widest uppercase">
        &copy; 2026 Vandana Shakya
      </footer>
    </div>
  );
}

export default App;