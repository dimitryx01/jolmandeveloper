
import { Code, Users, Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();
  
  const skills = [
    {
      icon: <Code className="h-8 w-8 mb-4 text-teal-500" />,
      title: t('about.skills.frontend.title'),
      description: t('about.skills.frontend.description')
    },
    {
      icon: <Terminal className="h-8 w-8 mb-4 text-teal-500" />,
      title: t('about.skills.backend.title'),
      description: t('about.skills.backend.description')
    },
    {
      icon: <Users className="h-8 w-8 mb-4 text-teal-500" />,
      title: t('about.skills.uxui.title'),
      description: t('about.skills.uxui.description')
    }
  ];
  
  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('about.description')}
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
