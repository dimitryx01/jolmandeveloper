
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, DollarSign } from "lucide-react";
import { useTranslation } from 'react-i18next';

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
          <div className="space-y-6 text-foreground">
            <p>
              {t('tarifas.fullContent.intro')}
            </p>
            
            <h3 className="text-lg font-bold text-primary">{t('tarifas.fullContent.cms.title')}</h3>
            <p>
              {t('tarifas.fullContent.cms.content')}
            </p>
            
            <h3 className="text-lg font-bold text-primary">{t('tarifas.fullContent.tiendaOnline.title')}</h3>
            <p>
              {t('tarifas.fullContent.tiendaOnline.content')}
            </p>
            
            <h3 className="text-lg font-bold text-primary">{t('tarifas.fullContent.webAMedida.title')}</h3>
            <p>
              {t('tarifas.fullContent.webAMedida.content')}
            </p>
            
            <h3 className="text-lg font-bold text-primary">{t('tarifas.fullContent.appHibrida.title')}</h3>
            <p>
              {t('tarifas.fullContent.appHibrida.content')}
            </p>
            
            <h3 className="text-lg font-bold text-primary">{t('tarifas.fullContent.aclaraciones.title')}</h3>
            <ul className="list-disc ml-6 space-y-1">
              {(t('tarifas.fullContent.aclaraciones.list', { returnObjects: true }) as Array<{title: string, content: string}>).map((item, index: number) => (
                <li key={index}>
                  <span className="font-medium">{item.title}</span> {item.content}
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
