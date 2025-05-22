
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-semibold">Jolman Developer</p>
            <p className="text-gray-400 mt-1">© {new Date().getFullYear()} {t('footer.rights')}</p>
           

          </div>
          <a href="/aviso_legal.html" className="text-gray-400 mt-1">Aviso legal</a>
          <a href="/politicas_privacidad.html" className="text-gray-400 mt-1">Política de Privacidad</a>
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
  );
}
