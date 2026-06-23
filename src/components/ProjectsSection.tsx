
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/use-toast';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  fullDescription?: string;
  country?: string;
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleCodeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: t('projects.codeProtectedTitle'),
      description: t('projects.codeProtectedDescription'),
    });
  };

  const projects: Project[] = [

    {
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      imageUrl: "/maxfm-2.jpg",
      tags: ["React", "TypeScript", "PHP", "SQLite", "Python"],
      demoUrl: "https://maxfm.es",
      repoUrl: "#",
      fullDescription: t('projects.project6.fullDescription'),
      country: "🇪🇸 España"
    },
    {
      title: t('projects.project7.title'),
      description: t('projects.project7.description'),
      imageUrl: "/economizo-1.jpg",
      tags: ["Shopify", "Liquid", "PHP"],
      demoUrl: "https://economizo.com/",
      repoUrl: "#",
      fullDescription: t('projects.project7.fullDescription'),
      country: "🇫🇷 Francia"
    },
    {
      title: t('projects.project9.title'),
      description: t('projects.project9.description'),
      imageUrl: "/clubecono-1.jpg",
      tags: ["Shopify", "Liquid", "PHP"],
      demoUrl: "https://clubecono.com",
      repoUrl: "#",
      fullDescription: t('projects.project9.fullDescription'),
      country: "🇫🇷 Francia"
    },
    {
      title: t('projects.project10.title'),
      description: t('projects.project10.description'),
      imageUrl: "/abonavantage-1.jpg",
      tags: ["Shopify", "Liquid", "PHP"],
      demoUrl: "https://abonavantage.com",
      repoUrl: "#",
      fullDescription: t('projects.project10.fullDescription'),
      country: "🇫🇷 Francia"
    },
    {
      title: t('projects.project11.title'),
      description: t('projects.project11.description'),
      imageUrl: "/offremaline-1.jpg",
      tags: ["Shopify", "Liquid", "PHP"],
      demoUrl: "https://offremaline.com",
      repoUrl: "#",
      fullDescription: t('projects.project11.fullDescription'),
      country: "🇫🇷 Francia"
    },
    {
      title: t('projects.project8.title'),
      description: t('projects.project8.description'),
      imageUrl: "/n8n-integration.jpg",
      tags: ["n8n", "IA / ChatGPT", "Kommo CRM", "Automatización"],
      demoUrl: "#",
      repoUrl: "#",
      fullDescription: t('projects.project8.fullDescription'),
      country: "🇨🇴 Colombia"
    },

    {
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      imageUrl: "/portafolio_feelhospitality.jpg",
      tags: ["Wordpress"],
      demoUrl: "https://feelhospitality.es",
      repoUrl: "#",
      fullDescription: t('projects.project5.fullDescription'),
      country: "🇪🇸 España"
    },
    {
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      imageUrl: "/portafolio_fundacion.jpg",
      tags: ["Wordpress", "PHP"],
      demoUrl: "https://www.fundaciokalida.org",
      repoUrl: "#",
      fullDescription: t('projects.project4.fullDescription'),
      country: "🇪🇸 España"
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      imageUrl: "/heropeque.jpg",
      tags: ["Vite", "React", "TypeScript", "JavaScript", "Vercel"],
      demoUrl: "#",
      repoUrl: "#",
      fullDescription: t('projects.project2.fullDescription'),
      country: "🇨🇴 Colombia"
    },

    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      imageUrl: "/portafolio_repuestos_3.jpg",
      tags: ["Wordpress"],
      demoUrl: "https://induscom.com.co",
      repoUrl: "#",
      fullDescription: t('projects.project3.fullDescription'),
      country: "🇨🇴 Colombia"
    },

    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      imageUrl: "/autovidrios2peque.jpg",
      tags: ["Wordpress"],
      demoUrl: "https://autovidriosdeoriente.com/",
      repoUrl: "#",
      fullDescription: t('projects.project1.fullDescription'),
      country: "🇨🇴 Colombia"
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
                {project.country && (
                  <Badge className="absolute top-3 left-3 bg-background/90 text-foreground border-border shadow-sm" variant="outline">
                    {project.country}
                  </Badge>
                )}
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
                  {project.repoUrl !== "#" ? (
                    <a
                      href={project.repoUrl}
                      className="flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} className="mr-1" /> {t('projects.codeLink')}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                      onClick={handleCodeClick}
                    >
                      <Github size={16} className="mr-1" /> {t('projects.codeLink')}
                    </button>
                  )}
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
                  <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                    {selectedProject.title}
                    {selectedProject.country && (
                      <Badge variant="outline" className="font-medium">{selectedProject.country}</Badge>
                    )}
                  </DialogTitle>
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

                  {selectedProject.repoUrl !== "#" ? (
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
                  ) : (
                    <Button variant="outline" onClick={handleCodeClick} className="flex items-center gap-2">
                      <Github size={16} /> {t('projects.viewCodeButton')}
                    </Button>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
