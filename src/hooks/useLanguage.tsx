import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const VALID_LANGUAGES = ['es', 'en'];

export const useLanguage = () => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!lang || !VALID_LANGUAGES.includes(lang)) {
      navigate('/es', { replace: true });
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, navigate, i18n]);

  return { lang: lang || 'es' };
};