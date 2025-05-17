
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  fullDescription?: string;
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "App de Gestión de Tareas",
      description: "Una aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, etiquetas personalizadas y filtrado avanzado.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "Firebase"],
      demoUrl: "#",
      repoUrl: "#",
      fullDescription: "Una aplicación completa de gestión de tareas que permite a los usuarios organizar sus actividades diarias. Incluye funcionalidades avanzadas como arrastrar y soltar tareas entre diferentes estados, crear etiquetas personalizadas para categorizar las tareas, y un sistema de filtrado que facilita encontrar exactamente lo que estás buscando. La aplicación está construida con React para una interfaz de usuario fluida, estilizada con Tailwind CSS para un diseño moderno y responsivo, y utiliza Firebase como backend para almacenamiento en tiempo real y autenticación de usuarios."
    },
    {
      title: "Plataforma de E-learning",
      description: "Una plataforma de aprendizaje en línea con cursos, seguimiento de progreso y certificaciones.",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "TypeScript", "MongoDB"],
      demoUrl: "#",
      repoUrl: "#",
      fullDescription: "Una plataforma educativa completa diseñada para ofrecer una experiencia de aprendizaje en línea inmersiva. Los estudiantes pueden inscribirse en diversos cursos, seguir su progreso a través de un dashboard personalizado, y obtener certificaciones al completar los módulos. La plataforma está construida con Next.js para un rendimiento optimizado y SEO mejorado, TypeScript para un código más robusto y mantenible, y MongoDB para almacenar información de usuarios, cursos y progreso de aprendizaje."
    },
    {
      title: "Dashboard Analítico",
      description: "Un dashboard interactivo para visualizar datos analíticos con gráficos personalizables.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "D3.js", "Express"],
      demoUrl: "#",
      repoUrl: "#",
      fullDescription: "Un dashboard analítico interactivo que transforma datos complejos en visualizaciones comprensibles y accionables. Los usuarios pueden personalizar sus gráficos, ajustar parámetros en tiempo real y exportar informes detallados. El proyecto está desarrollado con Vue.js para una interfaz de usuario reactiva, D3.js para crear visualizaciones de datos avanzadas y personalizables, y Express como backend para procesar y servir los datos de manera eficiente."
    }
  ];

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Una selección de mis proyectos recientes que muestran mis habilidades y experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => handleOpenModal(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="bg-secondary text-secondary-foreground dark:bg-secondary/80 dark:text-secondary-foreground font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} className="mr-1" /> Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} className="mr-1" /> Código
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal detallado del proyecto */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-4xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                
                <div className="mt-6">
                  {/* Mini Hero con captura de pantalla */}
                  <div className="relative h-72 mb-6 overflow-hidden rounded-lg">
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  </div>

                  {/* Descripción detallada */}
                  <div className="space-y-4">
                    <p className="text-foreground">{selectedProject.fullDescription}</p>
                    
                    {/* Tecnologías */}
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Tecnologías utilizadas</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="bg-secondary text-secondary-foreground dark:bg-secondary/80 dark:text-secondary-foreground font-medium">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Enlaces */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button asChild>
                        <a 
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink size={16} /> Visitar Sitio
                        </a>
                      </Button>
                      
                      <Button variant="outline" asChild>
                        <a 
                          href={selectedProject.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github size={16} /> Ver Código
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
