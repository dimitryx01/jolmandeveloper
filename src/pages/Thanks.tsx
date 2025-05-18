
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Thanks() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full mx-auto text-center space-y-6">
        <div className="rounded-full bg-primary/20 p-3 w-16 h-16 mx-auto flex items-center justify-center">
          <Check className="h-8 w-8 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold">{t('thanks.title')}</h1>
        
        <p className="text-lg text-muted-foreground">
          {t('thanks.description')}
        </p>
        
        <div className="bg-secondary/30 rounded-lg p-6 my-6">
          <p className="text-sm text-muted-foreground">
            {t('thanks.emailInfo')}
          </p>
        </div>
        
        <Button asChild size="lg" className="mt-6">
          <Link to="/">{t('thanks.backHome')}</Link>
        </Button>
      </div>
    </div>
  );
}
