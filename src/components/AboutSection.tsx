
import { Code, Users, Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  const skills = [
    {
      icon: <Code className="h-8 w-8 mb-4 text-teal-500" />,
      title: 'Desarrollo Frontend',
      description: 'Creo interfaces atractivas y responsivas utilizando HTML, CSS, JavaScript y frameworks modernos como React.'
    },
    {
      icon: <Terminal className="h-8 w-8 mb-4 text-teal-500" />,
      title: 'Desarrollo Backend',
      description: 'Implemento soluciones robustas utilizando Node.js, Express, y bases de datos SQL/NoSQL.'
    },
    {
      icon: <Users className="h-8 w-8 mb-4 text-teal-500" />,
      title: 'Diseño UX/UI',
      description: 'Diseño experiencias de usuario intuitivas y accesibles con un enfoque centrado en el usuario.'
    }
  ];
  
  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soy un desarrollador web apasionado con experiencia en la creación de sitios web y aplicaciones modernas. 
            Mi objetivo es combinar diseño atractivo con funcionalidad intuitiva para crear experiencias digitales memorables.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                {skill.icon}
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
