import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { Helmet } from 'react-helmet-async';
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
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const baseUrl = 'https://jolmandeveloper.com';

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - sectionHeight / 3) {
          section.classList.add('visible');
        }
      });
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Helmet>
  <html lang={lang} />
  <title>{t('meta.title')}</title>
  <meta name="description" content={t('meta.description')} />
  
  <link rel="canonical" href={`${baseUrl}/${lang}`} />
  <link rel="alternate" hrefLang="es" href={`${baseUrl}/es`} />
  <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
  <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/es`} />
  
  <meta property="og:title" content={t('meta.title')} />
  <meta property="og:description" content={t('meta.description')} />
  <meta property="og:url" content={`${baseUrl}/${lang}`} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={`${baseUrl}/social.jpg`} />
  <meta property="og:image:alt" content="Portafolio de Jolman Developer - Desarrollo Web Freelance" />
  <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_US'} />
  <meta property="og:locale:alternate" content={lang === 'es' ? 'en_US' : 'es_ES'} />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@jolmandeveloper" />
  <meta name="twitter:title" content={t('meta.title')} />
  <meta name="twitter:description" content={t('meta.description')} />
  <meta name="twitter:image" content={`${baseUrl}/social.jpg`} />
</Helmet>

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
    </>
  );
};

export default Index;