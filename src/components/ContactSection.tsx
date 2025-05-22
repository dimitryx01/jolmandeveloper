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


const SERVICE_ID = 'service_kydr2v4';
const TEMPLATE_ID = 'template_86gpnve';
const PUBLIC_KEY = 'egqgJTklNtO9Hnsnh';
const RECAPTCHA_SITE_KEY = '6LdAtEQrAAAAAG_P_SoVbJGKgTA9kriebU_73cgA';

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
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        PUBLIC_KEY
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
    { icon: <FaWhatsapp className="h-5 w-5" />, label: 'WhatsApp', href: 'https://wa.me/573108801832?text=Hola%2C%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios%20de%20desarrollo%20web.' },
      {/* 
        { icon: <Github className="h-5 w-5" />, label: 'GitHub', href: 'https://github.com/tu-usuario' },
      { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', href: 'https://linkedin.com/in/tu-usuario' }

          */}    
    
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
                className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 min-h-[150px]"
              />
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleReCAPTCHA}
              />
              <Button 
                type="submit" 
                className="w-full bg-teal-500 hover:bg-teal-600 text-white" 
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">{t('contact.info.title')}</h3>
            <p className="text-gray-600 mb-8">
              {t('contact.info.description')}
            </p>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="flex items-center text-gray-700 hover:text-teal-500 transition-colors p-2 -ml-2"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="bg-gray-100 p-2 rounded-full mr-3">{link.icon}</span>
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