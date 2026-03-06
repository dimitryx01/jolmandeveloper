import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Sync state with i18n.language when component mounts
  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);
  
  const toggleLanguage = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    const currentPath = location.pathname.replace(`/${lang}`, '');
    navigate(`/${newLang}${currentPath}`);
  };
  
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage} 
      className="font-medium"
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </Button>
  );
}