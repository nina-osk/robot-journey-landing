
import { useState, useEffect, useRef } from 'react';
import { Bot, Server, Code, Brain, Settings, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    id: 'cobots',
    title: 'Robótica Colaborativa',
    icon: <Bot className="h-10 w-10 text-primary" />,
    description: 'Implementación y programación de cobots Universal Robots y KUKA para optimizar procesos productivos y mejorar la eficiencia operativa.',
    benefits: [
      'Mayor flexibilidad en la línea de producción',
      'Rápido retorno de inversión (ROI)',
      'Fácil integración con los sistemas existentes',
      'Mejora de la seguridad laboral'
    ]
  },
  {
    id: 'ros',
    title: 'Desarrollo con ROS 2',
    icon: <Code className="h-10 w-10 text-primary" />,
    description: 'Creación de aplicaciones robóticas avanzadas utilizando Robot Operating System ROS2 para integración de sensores, visión artificial y control de movimiento.',
    benefits: [
      'Arquitectura modular y escalable',
      'Compatibilidad con múltiples plataformas',
      'Acceso a una amplia biblioteca de algoritmos',
      'Soluciones robóticas personalizadas'
    ]
  },
  {
    id: 'ai',
    title: 'Automatización Inteligente',
    icon: <Brain className="h-10 w-10 text-primary" />,
    description: 'Implementación de soluciones de IA para automatizar procesos, análisis de datos y toma de decisiones en tiempo real.',
    benefits: [
      'Optimización de procesos basada en datos',
      'Reducción de errores operativos',
      'Predicción de mantenimiento preventivo',
      'Sistemas adaptativos a condiciones variables'
    ]
  },
  {
    id: 'integration',
    title: 'Integración de Sistemas',
    icon: <Settings className="h-10 w-10 text-primary" />,
    description: 'Conectamos sus sistemas existentes con nuevas tecnologías para crear flujos de trabajo optimizados y sin interrupciones.',
    benefits: [
      'Comunicación entre sistemas heterogéneos',
      'Automatización de flujos de datos',
      'Monitoreo centralizado',
      'Escalabilidad tecnológica'
    ]
  },
  {
    id: 'chatbots',
    title: 'Chatbots y Atención al Cliente',
    icon: <Server className="h-10 w-10 text-primary" />,
    description: 'Desarrollo de asistentes virtuales inteligentes para mejorar la experiencia del cliente y optimizar el servicio de atención.',
    benefits: [
      'Atención 24/7 sin interrupciones',
      'Escalabilidad para manejar múltiples consultas',
      'Integración con CRM y sistemas existentes',
      'Aprendizaje continuo y mejora del servicio'
    ]
  },
  {
    id: 'analytics',
    title: 'Análisis y Optimización',
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    description: 'Implementación de soluciones para análisis de datos y mejora continua de procesos industriales.',
    benefits: [
      'Dashboards personalizados de rendimiento',
      'Identificación de cuellos de botella',
      'Optimización basada en análisis predictivo',
      'Toma de decisiones informada'
    ]
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const [activeService, setActiveService] = useState('cobots');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Stagger the animations
          const interval = setInterval(() => {
            setVisibleServices((prev) => {
              const next = [...prev, prev.length];
              if (next.length === services.length) clearInterval(interval);
              return next;
            });
          }, 200);
          
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const selectedService = services.find(service => service.id === activeService) || services[0];

  return (
    <section 
      id="services" 
      className="py-24 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Soluciones Empresariales
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-4">
            Servicios Tecnológicos Especializados
          </h2>
          <p className="text-lg text-gray-600">
            Proporcionamos soluciones innovadoras para impulsar la competitividad de PYMES y medianas empresas mediante tecnologías avanzadas.
          </p>
        </div>

        <div className="slide-in-section visible">
          {/* Service selection tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeService === service.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Main service showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                {selectedService.icon}
              </div>
              <h3 className="text-2xl font-bold text-robotics-dark mb-4">{selectedService.title}</h3>
              <p className="text-gray-600 mb-6">{selectedService.description}</p>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-robotics-dark">Beneficios clave:</h4>
                <ul className="space-y-2">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90"
              >
                <a href="#contacto">Solicitar consulta</a>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="glass-card rounded-2xl p-8 h-full shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-robotics-accent/10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    {selectedService.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-robotics-dark mb-4">Nuestro enfoque</h4>
                  <p className="text-gray-600 mb-8">
                    Entendemos las necesidades únicas de su empresa y diseñamos soluciones personalizadas
                    que se adaptan a sus procesos y objetivos de negocio.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <span className="text-primary font-semibold">1</span>
                      </div>
                      <span className="text-gray-700">Análisis inicial y consultoría</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <span className="text-primary font-semibold">2</span>
                      </div>
                      <span className="text-gray-700">Diseño de solución personalizada</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <span className="text-primary font-semibold">3</span>
                      </div>
                      <span className="text-gray-700">Implementación y capacitación</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <span className="text-primary font-semibold">4</span>
                      </div>
                      <span className="text-gray-700">Soporte continuo y optimización</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`transition-all duration-700 transform ${
                  visibleServices.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <Card className="h-full hover:shadow-lg transition-shadow glass-card">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-robotics-dark">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href="#contacto">Solicitar consulta</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
