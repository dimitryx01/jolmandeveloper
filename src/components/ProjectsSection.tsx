
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { ScrollArea } from '@/components/ui/scroll-area';

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
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      imageUrl: "autovidrios2peque.jpg",
      tags: ["Wordpress"],
      demoUrl: "https://autovidriosdeoriente.com/",
      repoUrl: "#",
      fullDescription: t('projects.project1.fullDescription')
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      imageUrl: "heropeque.jpg",
      tags: ["Vite","React","TypeScript","JavaScript","Vercel"],
      demoUrl: "#",
      repoUrl: "#",
      fullDescription: t('projects.project2.fullDescription')
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "D3.js", "Express"],
      demoUrl: "#",
      repoUrl: "#",
      fullDescription: t('projects.project3.fullDescription')
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
          <h2 className="text-3xl font-bold mb-4">{t('projects.sectionTitle')}</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('projects.sectionDescription')}
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
                    <Github size={16} className="mr-1" /> {t('projects.codeLink')}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal detallado del proyecto */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-4xl max-h-[95vh]">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                
                <ScrollArea className="pr-4 max-h-[calc(90vh-8rem)]">
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
                        <h3 className="text-lg font-semibold mb-2">{t('projects.technologiesTitle')}</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="bg-secondary text-secondary-foreground dark:bg-secondary/80 dark:text-secondary-foreground font-medium">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
                
                {/* Enlaces - Mantenerlos fuera del ScrollArea para que estén siempre visibles */}
                <div className="flex flex-wrap gap-4 pt-4 mt-4 border-t border-border">
                  <Button asChild>
                    <a 
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} /> {t('projects.visitSiteButton')}
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild>
                    <a 
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} /> {t('projects.viewCodeButton')}
                    </a>
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
