import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import About from './components/About';
import Sustainability from './components/Sustainability';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (selectedProject !== null) {
    return (
      <ProjectDetail
        projectId={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <>
      <CustomCursor />

      <div className="relative bg-zinc-950 text-white">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-8 right-8 z-50 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300"
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <Navigation
          isOpen={isMenuOpen}
          onNavigate={scrollToSection}
          activeSection={activeSection}
        />

        <Hero onNavigate={scrollToSection} />

        <div id="projects">
          <ProjectGallery onProjectClick={setSelectedProject} />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="sustainability">
          <Sustainability />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <Footer onNavigate={scrollToSection} />
      </div>
    </>
  );
}

export default App;
