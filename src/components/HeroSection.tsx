import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState('');
  
  const baseRole = t('hero.role');
  const guruText = t('hero.guru');

  useEffect(() => {
    let isMounted = true;
    setTypedText('');
    
    const animate = async () => {
      // 1. Esperar 3 segundos
      if (!isMounted) return;
      await new Promise(r => setTimeout(r, 3000));
      
      // 2. Animar 3 puntos suspensivos
      for (let i = 1; i <= 3; i++) {
        if (!isMounted) return;
        setTypedText('.'.repeat(i));
        await new Promise(r => setTimeout(r, 400));
      }
      
      if (!isMounted) return;
      await new Promise(r => setTimeout(r, 300));
      
      // 3. Escribir frase caracter por caracter
      let currentAppend = '...\n';
      setTypedText(currentAppend);
      await new Promise(r => setTimeout(r, 200));

      const chars = Array.from(guruText); 
      for (let i = 1; i <= chars.length; i++) {
        if (!isMounted) return;
        setTypedText(currentAppend + chars.slice(0, i).join(''));
        await new Promise(r => setTimeout(r, 40 + Math.random() * 40));
      }
    };
    
    animate();
    
    return () => {
      isMounted = false;
    };
  }, [baseRole, guruText]);
  
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center section-padding pt-32 pb-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Grid principal: texto + memoji */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: texto alineado a la derecha en desktop */}
          <div className="text-center md:text-right">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t('hero.hello')}{" "}
              <span className="text-teal-400">Jolman</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 mb-8 min-h-[60px] sm:min-h-[72px] md:min-h-[84px] whitespace-pre-wrap">
              <span className="text-gray-500">{baseRole}</span>
              <span className="text-teal-400/90">{typedText}</span>
              <span className="animate-blink ml-1 inline-block w-1.5 h-6 md:h-8 bg-teal-400/70 align-middle"></span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl md:max-w-xl mx-auto md:mx-0 md:ml-auto mb-12">
              {t('hero.description')}
            </p>

           
          </div>

          {/* Columna derecha: Memoji */}
          <div className="flex justify-center">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72">
              <img
                src="/memoji.webp"
                alt="Memoji de Jolman"
                className="w-full h-full object-contain drop-shadow-xl rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bloque centrado global: botón + Saber más */}
      <div className="mt-16 sm:mt-20 flex flex-col items-center gap-6">
        <Button
          asChild
          className="bg-teal-500 hover:bg-teal-600 text-white"
        >
          <a href="#contact">{t('hero.contactMe')}</a>
        </Button>

        <a
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-teal-500 transition-colors group"
        >
          <span className="text-sm mb-2">{t('hero.learnMore')}</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </div>
    </section>
  );
}