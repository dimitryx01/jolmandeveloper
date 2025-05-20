
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  
  // Sync state with i18n.language when component mounts
  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);
  
  const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang)
      .then(() => {
        setCurrentLang(newLang);
        // Force reload the translations
        i18n.reloadResources([newLang], ['translation']);
      })
      .catch(err => console.error('Error changing language:', err));
  };
  
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage} 
      className="font-medium"
    >
      {currentLang === 'es' ? 'EN' : 'ES'}
    </Button>
  );
}
