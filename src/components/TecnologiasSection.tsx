
import { useEffect, useState, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import { useCarousel } from '@/components/ui/carousel';

interface Technology {
  name: string;
  logo: string;
}

export default function TecnologiasSection() {
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  const technologies: Technology[] = [
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "NoSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ];

  const [carouselApi, setCarouselApi] = useState<ReturnType<typeof useCarousel>["api"]>(null);

  const handleIndicatorClick = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
      setActiveIndex(index);
    }
    handleInteraction();
  };
  
  // Callback function to handle carousel slide change
  const handleSlideChange = useCallback(() => {
    if (!carouselApi) return;
    
    const currentIndex = carouselApi.selectedScrollSnap();
    setActiveIndex(currentIndex);
  }, [carouselApi]);
  
  // Set up autoplay functionality
  useEffect(() => {
    let interval: number | undefined;
    
    if (autoPlay && carouselApi) {
      interval = window.setInterval(() => {
        const nextIndex = (activeIndex + 1) % technologies.length;
        carouselApi.scrollTo(nextIndex);
        setActiveIndex(nextIndex);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, activeIndex, technologies.length, carouselApi]);
  
  // Initialize carousel event listeners
  useEffect(() => {
    if (!carouselApi) return;
    
    carouselApi.on("select", handleSlideChange);
    
    return () => {
      carouselApi.off("select", handleSlideChange);
    };
  }, [carouselApi, handleSlideChange]);

  // Pause autoplay when user interacts
  const handleInteraction = () => {
    setAutoPlay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <section id="tecnologias" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Tecnologías</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Actualmente desarrollo principalmente en: Java y JSP, React, Node.js, WordPress. Además, tengo experiencia con tecnologías web como HTML, CSS, JavaScript y bases de datos SQL/NoSQL. Si tu proyecto requiere otras tecnologías, no dudes en consultarme. Estoy abierto a aprender y adaptarme a nuevas herramientas para ofrecerte la mejor solución posible.
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl px-8" onClick={handleInteraction} onMouseEnter={handleInteraction}>
          <Carousel
            opts={{ loop: true, align: "center" }}
            className="w-full"
            setApi={setCarouselApi}
          >
            <CarouselContent>
              {technologies.map((tech, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className={cn(
                    "flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300",
                    "hover:scale-105 h-36",
                    "bg-secondary/30 dark:bg-secondary/10",
                    "border border-border/40"
                  )}>
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`} 
                      className="h-16 w-16 object-contain mb-3" 
                    />
                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 left-0 right-auto mr-2" />
              <div className="flex space-x-1">
                {technologies.map((_, i) => (
                  <button
                    key={i}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      i === activeIndex 
                        ? "bg-primary w-4" 
                        : "bg-secondary/70"
                    )}
                    onClick={() => handleIndicatorClick(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="relative inset-0 translate-y-0 left-auto right-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
