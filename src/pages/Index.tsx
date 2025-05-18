
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TecnologiasSection from '@/components/TecnologiasSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContratacionTarifasSection from '@/components/ContratacionTarifasSection';
import PagaOnlineSection from '@/components/PagaOnlineSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        // If the top of the section is within the viewport
        if (sectionTop < windowHeight - sectionHeight / 3) {
          section.classList.add('visible');
        }
      });
    };
    
    // Run once on mount
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update document title
  useEffect(() => {
    document.title = 'Portfolio - Tu Nombre';
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="fade-in-section">
        <HeroSection />
      </div>
      
      <div className="fade-in-section">
        <AboutSection />
      </div>
      
      <div className="fade-in-section">
        <TecnologiasSection />
      </div>
      
      <div className="fade-in-section">
        <ProjectsSection />
      </div>
      
      <div className="fade-in-section">
        <ContratacionTarifasSection />
      </div>
      
      <div className="fade-in-section">
        <PagaOnlineSection />
      </div>
      
      <div className="fade-in-section">
        <ContactSection />
      </div>
      
      <Footer />
    </main>
  );
};

export default Index;
