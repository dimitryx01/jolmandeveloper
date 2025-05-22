
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {t('hero.hello')} <span className="text-teal-400">Jolman</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-500 mb-8">
          {t('hero.role')}
        </h2>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          {t('hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white">
            <a href="#contact">{t('hero.contactMe')}</a>
          </Button>
          {/* Contact me button 
          <Button asChild variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">{t('hero.downloadCV')}</a>
          </Button>
          */}          
          
        </div>
        
        <a 
          href="#about" 
          className="flex flex-col items-center mt-16 sm:mt-20 text-gray-400 hover:text-teal-500 transition-colors group"
        >
          <span className="text-sm mb-2">{t('hero.learnMore')}</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </div>
    </section>
  );
}
