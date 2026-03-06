import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import { env, validateEnv } from '@/config/env';

// Validate environment variables on module load
validateEnv();

export default function ContactSection() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
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
    } catch (error) {
      toast({ title: 'Error', description: 'Hubo un problema al enviar el mensaje.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <Mail className="h-5 w-5" />, label: 'Email', href: 'mailto:info@jolmandeveloper.com' },
    { icon: <FaWhatsapp className="h-5 w-5" />, label: 'WhatsApp', href: 'https://wa.me/573108801832?text=Hola%2C%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios%20de%20desarrollo%20web.' }
  ];

  return (
    <section id="contact" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
              <Input
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
              <Input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                value={formData.email}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
              <Textarea
                name="message"
                placeholder={t('contact.form.message')}
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={env.recaptcha.siteKey}
                  onChange={handleReCAPTCHA}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-6">{t('contact.info.title')}</h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-teal-500 transition-colors"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}