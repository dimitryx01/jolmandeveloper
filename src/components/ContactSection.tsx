import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import { env, validateEnv } from '@/config/env';

// Validate environment variables on module load
validateEnv();

export default function ContactSection() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'es';
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [acceptedPolicies, setAcceptedPolicies] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReCAPTCHA = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptedPolicies) {
      toast({ title: t('contact.form.acceptPoliciesError') });
      return;
    }

    if (!recaptchaToken) {
      toast({ title: 'reCAPTCHA', description: 'Por favor completa el reCAPTCHA.' });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        env.emailjs.serviceId,
        env.emailjs.templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
          'g-recaptcha-response': recaptchaToken,
        },
        env.emailjs.publicKey
      );

      toast({
        title: t('contact.form.success'),
        description: t('contact.form.thankYou'),
      });

      setFormData({ name: '', email: '', message: '' });
      setRecaptchaToken(null);
      setAcceptedPolicies(false);
    } catch (error) {
      toast({ title: 'Error', description: 'Hubo un problema al enviar el mensaje.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-muted/30 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-background border border-border shadow-sm rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-8 text-center">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
              <Input
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={handleChange}
                required
                className="border-input focus:border-teal-500 focus:ring-teal-500 bg-background h-12"
              />
              <Input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                value={formData.email}
                onChange={handleChange}
                required
                className="border-input focus:border-teal-500 focus:ring-teal-500 bg-background h-12"
              />
              <Textarea
                name="message"
                placeholder={t('contact.form.message')}
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="border-input focus:border-teal-500 focus:ring-teal-500 bg-background resize-none"
              />
              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="policies"
                  checked={acceptedPolicies}
                  onChange={(e) => setAcceptedPolicies(e.target.checked)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary cursor-pointer"
                  required
                />
                <label htmlFor="policies" className="text-sm text-foreground/80 cursor-pointer">
                  {t('contact.form.acceptPolicies')}{' '}
                  <Link 
                    to={`/${currentLang}/politicas-privacidad`} 
                    className="text-primary hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.form.seeMore')}
                  </Link>
                </label>
              </div>
              <div className="flex justify-center py-2">
                <ReCAPTCHA
                  sitekey={env.recaptcha.siteKey}
                  onChange={handleReCAPTCHA}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-base font-semibold bg-teal-500 hover:bg-teal-600 text-white transition-colors"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}