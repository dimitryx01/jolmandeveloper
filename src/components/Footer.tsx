
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

export default function Footer() {
  const { t } = useTranslation();
  const [legalOpen, setLegalOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Get legal and privacy content as arrays
  const legalContent = t('legalNotice.content', { returnObjects: true });
  const privacyContent = t('privacyPolicy.content', { returnObjects: true });

  // Ensure lists are treated as arrays
  const safeLegalContent = Array.isArray(legalContent) ? legalContent : [t('legalNotice.content')];
  const safePrivacyContent = Array.isArray(privacyContent) ? privacyContent : [t('privacyPolicy.content')];

  return (
    <>
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-xl font-semibold">Tu Nombre</p>
              <p className="text-gray-400 mt-1">© {new Date().getFullYear()} {t('footer.rights')}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 md:mb-0">
              <button 
                onClick={() => setLegalOpen(true)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.legal')}
              </button>
              <button 
                onClick={() => setPrivacyOpen(true)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.privacy')}
              </button>
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-3 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </footer>

      {/* Aviso Legal Modal */}
      <Dialog open={legalOpen} onOpenChange={setLegalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden">
          <DialogTitle>{t('legalNotice.title')}</DialogTitle>
          <ScrollArea className="h-[calc(80vh-8rem)]">
            <div className="p-1 text-sm space-y-4">
              {safeLegalContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Política de Privacidad Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden">
          <DialogTitle>{t('privacyPolicy.title')}</DialogTitle>
          <ScrollArea className="h-[calc(80vh-8rem)]">
            <div className="p-1 text-sm space-y-4">
              {safePrivacyContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
