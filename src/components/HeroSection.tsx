
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Create intersection observer for this section specifically
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sectionElement = document.getElementById('hero-section');
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div id="hero-section" className="relative min-h-screen flex items-center overflow-hidden py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white z-0" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-robotics-blue/5 animate-pulse-subtle" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-robotics-blue/10 animate-float" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-robotics-accent/5 animate-pulse-subtle" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="inline-block bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Domina la Robótica Industrial
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-robotics-dark mb-6 text-balance leading-tight">
              Impulsa Tu Carrera Con <br />
              <span className="text-robotics-blue">Robótica Industrial</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl text-balance">
              Cursos completos de programación de robots UR, KUKA y ROS. Aprende de expertos de la industria y obtén experiencia práctica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-robotics-blue hover:bg-robotics-blue/90 text-white rounded-md"
              >
                <a href="#enroll" className="inline-flex items-center">
                  Comienza a Aprender
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md"
              >
                <a href="#courses">Ver Cursos</a>
              </Button>
            </div>
          </div>
          
          <div 
            className={`relative transition-all duration-1000 delay-500 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="glass-card p-6 rounded-2xl border border-white/30">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-robotics-dark">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                        <svg 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white"
                        >
                          <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                        </svg>
                      </div>
                      <p className="mt-4 text-white font-medium">Ver Introducción</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500">Curso Destacado</div>
                    <div className="text-sm font-medium text-robotics-blue">4.9 ★★★★★</div>
                  </div>
                  <h3 className="text-xl font-semibold text-robotics-dark mb-2">Ruta de Dominio en Robótica Industrial</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Paquete completo de cursos que incluye programación de UR, KUKA y ROS
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-robotics-dark font-bold">$2399</span>
                    <span className="text-xs text-gray-500">+300 inscritos</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-robotics-blue/10 animate-pulse-subtle z-0" />
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-robotics-accent/10 animate-float z-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
