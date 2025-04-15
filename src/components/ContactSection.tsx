
import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé lo antes posible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    { icon: <Mail className="h-5 w-5" />, label: 'Email', href: 'mailto:tu-email@ejemplo.com' },
    { icon: <Github className="h-5 w-5" />, label: 'GitHub', href: 'https://github.com/tu-usuario' },
    { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', href: 'https://linkedin.com/in/tu-usuario' }
  ];

  return (
    <section id="contact" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta o quieres colaborar en un proyecto? No dudes en contactarme.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tu mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 min-h-[150px]"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-teal-500 hover:bg-teal-600 text-white" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Información de contacto</h3>
            <p className="text-gray-600 mb-8">
              Estoy abierto a oportunidades de trabajo freelance, colaboraciones o posiciones a tiempo completo. 
              No dudes en contactarme a través de cualquiera de los siguientes medios.
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
