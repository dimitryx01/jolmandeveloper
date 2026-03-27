import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'es';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/jolmandeveloper', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/jolmandeveloper', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:info@jolmandeveloper.com', label: 'Email' },
    { icon: <FaWhatsapp size={20} />, href: 'https://wa.me/573108801832', label: 'WhatsApp' }
  ];

  const navLinks = [
    { name: t('navbar.home') || 'Inicio', href: `/${currentLang}/#home` },
    { name: t('navbar.about') || 'Sobre mí', href: `/${currentLang}/#about` },
    { name: t('navbar.projects') || 'Proyectos', href: `/${currentLang}/#projects` },
    { name: t('navbar.contact') || 'Contacto', href: `/${currentLang}/#contact` },
  ];

  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand & Social */}
          <div className="flex flex-col space-y-4 md:col-span-2">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
              Jolman Developer
            </h3>
            <p className="text-foreground/70 max-w-sm text-sm">
              {t('contact.description') || "Creando experiencias digitales modernas y escalables."}
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-accent hover:bg-primary text-white hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3 md:col-span-1">
            <h4 className="text-lg font-semibold">{t('navbar.menu') || 'Menu'}</h4>
            <div className="flex flex-col space-y-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-3 md:col-span-1">
            <h4 className="text-lg font-semibold">Legal</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link
                to={`/${currentLang}/aviso-legal`}
                className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit"
              >
                {t('legal.avisoTitle')}
              </Link>
              <Link
                to={`/${currentLang}/politicas-privacidad`}
                className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit"
              >
                {t('legal.privacidadTitle')}
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/10">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Jolman Developer. {t('footer.rights')}
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground shadow-sm hover:shadow-md transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
