
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  FileText,
  DollarSign,
  Globe,
  Gauge,
  TrendingUp,
  Code2,
  Handshake,
  Server,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from 'react-i18next';

const CATEGORY_ICONS: LucideIcon[] = [
  Globe,       // Sitios web
  Gauge,       // Optimización y rendimiento
  TrendingUp,  // SEO y analítica
  Code2,       // Funcionalidades y desarrollo específico
  Handshake,   // Kommo CRM
  Server,      // Infraestructura y hosting
  LifeBuoy,    // Mantenimiento y soporte
];

export default function ContratacionTarifasSection() {
  const { t } = useTranslation();
  const [contratacionModalOpen, setContratacionModalOpen] = useState(false);
  const [tarifasModalOpen, setTarifasModalOpen] = useState(false);

  return (
    <section id="contratacion-tarifas" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Columna 1: Contratación */}
          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">{t('contratacion.title')}</h2>
            </div>
            <div className="h-1 w-16 bg-teal-400 mb-6"></div>
            <p className="text-muted-foreground mb-8">
              {t('contratacion.summary')}
            </p>
            <Button
              onClick={() => setContratacionModalOpen(true)}
              className="flex items-center gap-2"
            >
              {t('contratacion.viewMore')}
            </Button>
          </div>

          {/* Columna 2: Tarifas */}
          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">{t('tarifas.title')}</h2>
            </div>
            <div className="h-1 w-16 bg-teal-400 mb-6"></div>
            <p className="text-muted-foreground mb-8">
              {t('tarifas.summary')}
            </p>
            <Button
              onClick={() => setTarifasModalOpen(true)}
              className="flex items-center gap-2"
            >
              {t('tarifas.viewMore')}
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Contratación */}
      <Dialog open={contratacionModalOpen} onOpenChange={setContratacionModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <FileText className="h-5 w-5" /> {t('contratacion.title')}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-foreground">
            <p>
              {t('contratacion.fullContent.intro')}
            </p>

            <h3 className="text-lg font-bold text-primary">{t('contratacion.fullContent.programacionDirecta.title')}</h3>
            <p>
              {t('contratacion.fullContent.programacionDirecta.content')}
            </p>

            <h3 className="text-lg font-bold text-primary">{t('contratacion.fullContent.quienPuedeContratarme.title')}</h3>
            <p>{t('contratacion.fullContent.quienPuedeContratarme.intro')}</p>
            <ul className="list-disc ml-6 space-y-1">
              {(t('contratacion.fullContent.quienPuedeContratarme.list', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>
              {t('contratacion.fullContent.quienPuedeContratarme.additional')}
            </p>

            <h3 className="text-lg font-bold text-primary">{t('contratacion.fullContent.confidencialidad.title')}</h3>
            <p>
              {t('contratacion.fullContent.confidencialidad.content')}
            </p>

            <h3 className="text-lg font-bold text-primary">{t('contratacion.fullContent.pagos.title')}</h3>
            <p>
              {t('contratacion.fullContent.pagos.content')}
            </p>

            <h3 className="text-lg font-bold text-primary">{t('contratacion.fullContent.pagosOnline.title')}</h3>
            <p>
              {t('contratacion.fullContent.pagosOnline.content')}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal Tarifas */}
      <Dialog open={tarifasModalOpen} onOpenChange={setTarifasModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <DollarSign className="h-5 w-5" /> {t('tarifas.title')}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-8 text-foreground">
            <p className="text-muted-foreground">
              {t('tarifas.fullContent.intro')}
            </p>

            {(t('tarifas.fullContent.categories', { returnObjects: true }) as Array<{
              title: string;
              description?: string;
              items: Array<{ name: string; price: string; description: string }>;
            }>).map((category, catIndex) => {
              const Icon = CATEGORY_ICONS[catIndex] ?? Globe;
              return (
                <div key={catIndex}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-primary shrink-0" />
                    <h3 className="text-lg font-bold text-primary">{category.title}</h3>
                  </div>
                  {category.description && (
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  )}
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="rounded-lg border border-border bg-muted/40 p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-foreground">{item.name}</span>
                          <span className="text-xs font-medium bg-teal-400/20 text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded-full whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="border-t border-border pt-6">
              <h3 className="text-base font-bold text-primary mb-3">
                {t('tarifas.fullContent.aclaraciones.title')}
              </h3>
              <ul className="space-y-2">
                {(t('tarifas.fullContent.aclaraciones.list', { returnObjects: true }) as Array<{ title: string; content: string }>).map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{item.title}</span>{' '}
                    {item.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
