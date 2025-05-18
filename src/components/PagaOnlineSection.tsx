
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { CreditCard, SendHorizontal } from 'lucide-react';

export default function PagaOnlineSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    monto: '',
    comentario: '',
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.nombre || !formData.email || !formData.monto) {
      toast({
        title: "Datos incompletos",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive",
      });
      return;
    }

    try {
      // Here you would connect to your backend to generate the PayU redirect
      // This is a placeholder - replace with actual implementation
      toast({
        title: "Procesando tu pago",
        description: "Serás redirigido a la pasarela de pagos en unos segundos...",
      });
      
      // Simulating a backend call (replace with actual implementation)
      setTimeout(() => {
        // Redirect to PayU would happen here from your backend
        console.log("Payment data submitted:", formData);
        
        // Close the dialog
        setIsDialogOpen(false);
        
        // Reset form
        setFormData({
          nombre: '',
          email: '',
          monto: '',
          comentario: '',
        });
        
      }, 2000);
    } catch (error) {
      console.error("Error processing payment:", error);
      toast({
        title: "Error de procesamiento",
        description: "Hubo un problema al procesar tu solicitud. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="paga-online" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Realiza tu Pago</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            ¿Ya acordamos tu servicio? Paga fácil y seguro directamente desde aquí utilizando nuestra 
            pasarela de pagos segura.
          </p>
          
          <Button 
            size="lg" 
            onClick={() => setIsDialogOpen(true)}
            className="font-medium text-lg group hover:scale-105 transition-all duration-300"
          >
            <CreditCard className="mr-2" />
            Realizar Pago
            <span className="bg-primary-foreground/10 w-8 h-8 flex items-center justify-center rounded-full ml-2 group-hover:bg-primary-foreground/20 transition-colors">
              →
            </span>
          </Button>
        </div>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl">Formulario de Pago</DialogTitle>
            <DialogDescription>
              Completa los siguientes datos para procesar tu pago de forma segura a través de PayU Latam.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo *</Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Tu nombre completo"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico *</Label>
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
              <Label htmlFor="monto">Monto a pagar (USD) *</Label>
              <Input
                id="monto"
                name="monto"
                type="number"
                min="1"
                step="0.01"
                placeholder="100.00"
                value={formData.monto}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="comentario">Descripción o comentario (opcional)</Label>
              <Input
                id="comentario"
                name="comentario"
                placeholder="Detalles del servicio o proyecto"
                value={formData.comentario}
                onChange={handleInputChange}
              />
            </div>
            
            <DialogFooter className="mt-6">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" className="gap-2">
                <SendHorizontal size={18} />
                Procesar Pago
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
