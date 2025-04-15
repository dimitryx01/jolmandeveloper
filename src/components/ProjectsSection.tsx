
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "App de Gestión de Tareas",
      description: "Una aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, etiquetas personalizadas y filtrado avanzado.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "Firebase"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Plataforma de E-learning",
      description: "Una plataforma de aprendizaje en línea con cursos, seguimiento de progreso y certificaciones.",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "TypeScript", "MongoDB"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Dashboard Analítico",
      description: "Un dashboard interactivo para visualizar datos analíticos con gráficos personalizables.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "D3.js", "Express"],
      demoUrl: "#",
      repoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Una selección de mis proyectos recientes que muestran mis habilidades y experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-gray-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center text-teal-600 hover:text-teal-800 transition-colors text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" /> Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" /> Código
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
