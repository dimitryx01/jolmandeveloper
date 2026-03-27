import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AvisoLegal() {
  useLanguage();
  const { t } = useTranslation();
  const avisoContent = t('legal.avisoContent', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 pt-32 pb-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">{t('legal.avisoTitle')}</h1>
        <div className="prose dark:prose-invert max-w-none text-foreground/80 space-y-4">
          {Array.isArray(avisoContent) && avisoContent.map((paragraph, index) => (
            <p key={index} className={paragraph.startsWith('•') ? "ml-4" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
