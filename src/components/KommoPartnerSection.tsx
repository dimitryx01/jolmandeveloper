import { BadgeCheck, MessageSquare, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const BENEFIT_ICONS = [BadgeCheck, MessageSquare, Zap];

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function KommoPartnerSection() {
  const { t } = useTranslation();

  const kommoBenefits = t('partnersSection.kommo.benefits', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">

        {/* Section header — mismo patrón que el resto de secciones */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('partnersSection.title')}</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('partnersSection.description')}
          </p>
        </div>

        {/* Grid: Kommo (2/3) + n8n (1/3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

          {/* ── Kommo (columna principal) ── */}
          <div className="md:col-span-2 bg-card rounded-xl p-8 border border-border hover:shadow-md transition-shadow flex flex-col">

            {/* Logo */}
            <div className="mb-5">
              <img
                src="/kommo-dark.svg"
                alt="Kommo CRM"
                loading="lazy"
                className="h-14 dark:hidden object-contain object-left"
              />
              <img
                src="/kommo-light.svg"
                alt="Kommo CRM"
                loading="lazy"
                className="h-14 hidden dark:block object-contain object-left"
                style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.25))' }}
              />
            </div>

            {/* Badge partner */}
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4 w-fit">
              <BadgeCheck className="h-3.5 w-3.5" />
              {t('partnersSection.kommo.badge')}
            </div>

            <div className="h-1 w-16 bg-teal-400 mb-5"></div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t('partnersSection.kommo.description')}
            </p>

            {/* Beneficios */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {kommoBenefits.map((benefit, i) => {
                const Icon = BENEFIT_ICONS[i] ?? BadgeCheck;
                return (
                  <div
                    key={i}
                    className="bg-background rounded-xl p-4 border border-border/60 flex flex-col gap-2"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-sm">{benefit.title}</span>
                    <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-auto">
              <Button
                size="lg"
                className="font-medium group hover:scale-105 transition-all duration-300"
                onClick={scrollToContact}
              >
                {t('partnersSection.kommo.cta')}
                <span className="bg-primary-foreground/10 w-7 h-7 flex items-center justify-center rounded-full ml-2 group-hover:bg-primary-foreground/20 transition-colors text-sm">
                  →
                </span>
              </Button>
            </div>
          </div>

          {/* ── n8n (columna secundaria) ── */}
          <div className="md:col-span-1 bg-card rounded-xl p-8 border border-border hover:shadow-md transition-shadow flex flex-col">

            {/* Logo */}
            <div className="mb-5">
              <img
                src="/n8n-logo.png"
                alt="n8n"
                loading="lazy"
                className="h-14 object-contain object-left"
              />
            </div>

            <div className="h-1 w-16 bg-teal-400 mb-5"></div>

            <h3 className="text-xl font-bold mb-3">{t('partnersSection.n8n.title')}</h3>

            <p className="text-muted-foreground leading-relaxed text-sm mb-8">
              {t('partnersSection.n8n.description')}
            </p>

            {/* CTA */}
            <div className="mt-auto">
              <Button
                className="flex items-center gap-2 w-full justify-center"
                onClick={scrollToContact}
              >
                {t('partnersSection.n8n.cta')}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
