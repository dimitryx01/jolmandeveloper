import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PoliticasPrivacidad() {
  const { t } = useTranslation();
  const privacidadContent = t('legal.privacidadContent', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 pt-32 pb-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-10 text-primary">{t('legal.privacidadTitle')}</h1>
        <div className="prose dark:prose-invert max-w-none text-foreground/80 space-y-4">
          {Array.isArray(privacidadContent) && privacidadContent.map((paragraph, index) => {
            const isHeading = !paragraph.endsWith('.') && !paragraph.startsWith('•') && paragraph.length < 100;
            return (
              <p 
                key={index} 
                className={`${paragraph.startsWith('•') ? "ml-4" : ""} ${isHeading ? "font-semibold text-xl text-foreground mt-8 mb-2" : ""}`}
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
