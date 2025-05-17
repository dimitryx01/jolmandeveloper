
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, DollarSign } from "lucide-react";

export default function ContratacionTarifasSection() {
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
              <h2 className="text-2xl font-bold">Contratación</h2>
            </div>
            <div className="h-1 w-16 bg-teal-400 mb-6"></div>
            <p className="text-muted-foreground mb-8">
              Profesional independiente en Colombia, cumpliendo con todas las normativas legales. Desarrollo en Java, React, Node.js y WordPress. 
              Abierto a proyectos en Colombia y en el extranjero. Confidencialidad garantizada y pagos flexibles, incluyendo pagos online seguros.
            </p>
            <Button 
              onClick={() => setContratacionModalOpen(true)}
              className="flex items-center gap-2"
            >
              Ver más
            </Button>
          </div>

          {/* Columna 2: Tarifas */}
          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Tarifas</h2>
            </div>
            <div className="h-1 w-16 bg-teal-400 mb-6"></div>
            <p className="text-muted-foreground mb-8">
              Precios de referencia para los servicios más comunes: Página web con CMS desde 120 USD, tienda online desde 280 USD, 
              página a medida desde 450 USD, app híbrida desde 900 USD. Hosting a cargo del cliente.
            </p>
            <Button 
              onClick={() => setTarifasModalOpen(true)}
              className="flex items-center gap-2"
            >
              Ver más
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Contratación */}
      <Dialog open={contratacionModalOpen} onOpenChange={setContratacionModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <FileText className="h-5 w-5" /> Contratación
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-foreground">
            <p>
              Como profesional independiente en Colombia, cumplo con todas las normativas legales vigentes para la prestación de servicios de desarrollo 
              de software. Puedo emitir facturas válidas tanto para clientes en Colombia como en el extranjero.
            </p>
            
            <h3 className="text-lg font-bold text-primary">Programación Directa:</h3>
            <p>
              Quiero destacar que yo mismo desarrollo en todas las tecnologías que menciono en mi portafolio. Esto significa que los proyectos son realizados 
              directamente por mí, garantizando un alto nivel de calidad y atención al detalle. Solo recurro a la subcontratación en casos muy específicos que 
              requieran habilidades o conocimientos fuera de mi área de expertise.
            </p>
            
            <h3 className="text-lg font-bold text-primary">¿Quién puede contratarme?</h3>
            <p>Estoy disponible para trabajar con:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Particulares y empresas en Colombia y en el extranjero.</li>
              <li>Proyectos propios o como parte de un equipo de desarrollo.</li>
              <li>Proyectos completos o colaboraciones específicas.</li>
            </ul>
            <p>
              Tengo experiencia trabajando con sistemas de control de versiones en entornos colaborativos.
              A menudo colaboro con empresas de diseño gráfico y multimedia que necesitan un programador para complementar sus proyectos visuales.
            </p>
            
            <h3 className="text-lg font-bold text-primary">Confidencialidad:</h3>
            <p>
              Para garantizar la seguridad de tu proyecto, puedo firmar un acuerdo de confidencialidad (NDA) en el que me comprometo a no divulgar información 
              sensible o detalles específicos acordados.
            </p>
            
            <h3 className="text-lg font-bold text-primary">Pagos:</h3>
            <p>
              Estoy abierto a discutir diferentes modalidades de pago que se ajusten a tus necesidades, siempre y cuando se cumplan los términos acordados.
            </p>
            
            <h3 className="text-lg font-bold text-primary">Pagos Online:</h3>
            <p>
              Para mayor comodidad de mis clientes, especialmente aquellos en el extranjero, acepto pagos online a través de la pasarela de pagos segura 
              PayU Latam integrada en mi sitio web. Esto facilita las transacciones y garantiza la seguridad de los pagos.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal Tarifas */}
      <Dialog open={tarifasModalOpen} onOpenChange={setTarifasModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <DollarSign className="h-5 w-5" /> Tarifas
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-foreground">
            <p>
              Estos son los precios de referencia para los trabajos más comunes que suelo realizar. Sin embargo, estoy abierto a cualquier tipo de proyecto 
              que requiera programación. ¡No dudes en consultarme!
            </p>
            
            <h3 className="text-lg font-bold text-primary">Página web con CMS (WordPress, etc.): Desde 120 USD</h3>
            <p>
              Este tipo de proyecto se basa en una plantilla adaptable a un diseño o requerimientos gráficos específicos. Incluye la instalación de plugins 
              estándar (SEO, aviso de cookies, caché, etc.) y los plugins adicionales que el cliente necesite. También se incluye la importación de datos, 
              la configuración multi-idioma y cualquier otro ajuste necesario para lograr el resultado deseado.
            </p>
            
            <h3 className="text-lg font-bold text-primary">Tienda online con CMS (WooCommerce): Desde 280 USD</h3>
            <p>
              Similar al anterior, pero con un mayor nivel de complejidad debido a la configuración de tarifas, productos, variaciones, descuentos, 
              pasarelas de pago, etc. También puede incluir integraciones con TPV/ERP o APIs de diversas agencias de transporte.
            </p>
            
            <h3 className="text-lg font-bold text-primary">Página web a medida: Desde 450 USD</h3>
            <p>
              Este tipo de desarrollo ofrece total libertad en cuanto a la temática y funcionalidades de la página: portales, tiendas online, paneles de 
              administración, etc. El diseño puede ser a medida o basado en una plantilla. Si el cliente ha realizado un estudio de SEO, puedo aplicar las 
              conclusiones al desarrollo. Suelo programar en entornos MERN, pero también puedo trabajar con otras tecnologías según sea necesario. La página 
              puede ser multi-idioma sin costo adicional. Puedo adaptar la página para cumplir con estándares de accesibilidad (WCAG AA, etc.).
            </p>
            
            <h3 className="text-lg font-bold text-primary">App híbrida para iOS y Android: Desde 900 USD</h3>
            <p>
              Desarrolladas con React Native. Este tipo de desarrollo es fácil de mantener, se adapta a cualquier diseño, es económico y compatible con 
              todos los dispositivos. Incluye el servicio API Rest y el panel de administración de datos.
            </p>
            
            <h3 className="text-lg font-bold text-primary">Aclaraciones importantes:</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <span className="font-medium">Hosting:</span> Los servicios de hosting son responsabilidad del cliente, quien puede administrarlos a través de 
                plataformas como GoDaddy o la que prefiera.
              </li>
              <li>
                <span className="font-medium">Otros desarrollos:</span> Si tienes un proyecto en mente que no se ajusta a las categorías anteriores, ¡no dudes en 
                consultarme! He trabajado en proyectos diversos, incluyendo desarrollos con IA, bots, programación de IoT, etc.
              </li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
