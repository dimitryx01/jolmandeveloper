import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { CreditCard, SendHorizontal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function PagaOnlineSection() {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    monto: '',
    comentario: '',
  });
  const { toast } = useToast();

  // Función para validar el formato del email
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Función modificada para manejar el cambio en los inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Si es el campo monto, asegurarse de que solo se ingresen números y un punto decimal
    if (name === 'monto') {
      // Eliminar caracteres no numéricos excepto el punto decimal
      const formattedValue = value.replace(/[^\d.]/g, '');
      // Asegurarse de que solo haya un punto decimal
      const parts = formattedValue.split('.');
      if (parts.length > 2) return;
      // Si hay decimales, limitar a 2
      if (parts[1] && parts[1].length > 2) return;
      
      setFormData(prev => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validaciones mejoradas
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.monto) {
      toast({
        title: t('pagaOnline.messages.incomplete'),
        description: t('pagaOnline.messages.requiredFields'),
        variant: "destructive",
      });
      return;
    }

    // Validar formato de email
    if (!isValidEmail(formData.email)) {
      toast({
        title: t('pagaOnline.messages.error'),
        description: t('pagaOnline.messages.invalidEmail'),
        variant: "destructive",
      });
      return;
    }

    // Validar que el monto sea mayor a 0
    const montoNumerico = parseFloat(formData.monto);
    if (isNaN(montoNumerico) || montoNumerico <= 0) {
      toast({
        title: t('pagaOnline.messages.error'),
        description: t('pagaOnline.messages.invalidAmount'),
        variant: "destructive",
      });
      return;
    }
  
    try {
      toast({
        title: t('pagaOnline.messages.processing'),
        description: t('pagaOnline.messages.redirect'),
      });
  
      // Formatear el monto a dos decimales
      const montoFormateado = montoNumerico.toFixed(2);

      // Enviar los datos al backend
      const response = await fetch('https://payu-backend-delta.vercel.app/api/payu-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre.trim(),
          email: formData.email.trim(),
          monto: montoFormateado,
          comentario: formData.comentario.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const html = await response.text();
  
      // Abrir el HTML en una nueva ventana
      const payuWindow = window.open('', '_blank');
      if (payuWindow) {
        payuWindow.document.write(html);
        payuWindow.document.close();
        
        // Cerrar el diálogo y resetear el formulario
        setIsDialogOpen(false);
        setFormData({
          nombre: '',
          email: '',
          monto: '',
          comentario: '',
        });
      } else {
        // Si no se puede abrir una nueva ventana, mostrar error
        toast({
          title: t('pagaOnline.messages.error'),
          description: t('pagaOnline.messages.popupBlocked'),
          variant: "destructive",
        });
      }
  
    } catch (error) {
      console.error("Error processing payment:", error);
      toast({
        title: t('pagaOnline.messages.error'),
        description: t('pagaOnline.messages.tryAgain'),
        variant: "destructive",
      });
    }
  };

  return (
    <section id="paga-online" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('pagaOnline.title')}</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            {t('pagaOnline.description')}
          </p>
          
          <Button 
            size="lg" 
            onClick={() => setIsDialogOpen(true)}
            className="font-medium text-lg group hover:scale-105 transition-all duration-300"
          >
            <CreditCard className="mr-2" />
            {t('pagaOnline.payButton')}
            <span className="bg-primary-foreground/10 w-8 h-8 flex items-center justify-center rounded-full ml-2 group-hover:bg-primary-foreground/20 transition-colors">
              →
            </span>
          </Button>
        </div>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl">{t('pagaOnline.form.title')}</DialogTitle>
            <DialogDescription>
              {t('pagaOnline.form.description')}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">{t('pagaOnline.form.name')} *</Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder={t('pagaOnline.form.name')}
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">{t('pagaOnline.form.email')} *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="monto">{t('pagaOnline.form.amount')} *</Label>
              <Input
                id="monto"
                name="monto"
                type="text" // Cambiado a text para mejor control
                placeholder="100.00"
                value={formData.monto}
                onChange={handleInputChange}
                required
                pattern="\d+(\.\d{0,2})?" // Permite números y hasta 2 decimales
                title={t('pagaOnline.form.amountFormat')}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="comentario">{t('pagaOnline.form.comment')}</Label>
              <Input
                id="comentario"
                name="comentario"
                placeholder={t('pagaOnline.form.comment')}
                value={formData.comentario}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="flex justify-center mt-6 mb-2">
              <img 
                src="https://prod-developers.s3.amazonaws.com/latam/images/BlancoVerde/Medios_Pago_Blanco_Verde_575x40.jpg" 
                title="PayU - Medios de pago"
                alt="PayU - Medios de pago"
                width="468"
                height="60"
                className="max-w-full h-auto"
              />
            </div>
            
            <DialogFooter className="mt-6">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                {t('pagaOnline.form.cancel')}
              </Button>
              <Button type="submit" className="gap-2">
                <SendHorizontal size={18} />
                {t('pagaOnline.form.submit')}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}