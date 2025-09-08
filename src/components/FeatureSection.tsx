
import { useEffect, useRef, useState } from 'react';
import { 
  Award, 
  Code2, 
  Users, 
  BookOpen, 
  GraduationCap, 
  FileSpreadsheet 
} from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: 'Plan de Estudios Completo',
    description: 'Ruta de aprendizaje estructurada que cubre conceptos teóricos y aplicaciones prácticas de programación robótica.',
  },
  {
    icon: <Code2 className="h-10 w-10" />,
    title: 'Ejercicios Prácticos',
    description: 'Ejercicios de programación interactivos con escenarios del mundo real para desarrollar habilidades prácticas.',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Instructores Expertos',
    description: 'Aprende de profesionales de la industria con años de experiencia en implementación de robótica industrial.',
  },
  {
    icon: <FileSpreadsheet className="h-10 w-10" />,
    title: 'Aprendizaje Basado en Proyectos',
    description: 'Completa proyectos relevantes para la industria y construye un portafolio sólido para tus solicitudes de empleo.',
  },
  {
    icon: <GraduationCap className="h-10 w-10" />,
    title: 'Certificación',
    description: 'Obtén una certificación reconocida por la industria al completar el curso para validar tus habilidades.',
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: 'Apoyo Profesional',
    description: 'Revisión de currículum, preparación para entrevistas y asistencia para la colocación laboral por parte de nuestro equipo.',
  },
];

const FeatureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Stagger the animations
          const interval = setInterval(() => {
            setVisibleFeatures((prev) => {
              const next = [...prev, prev.length];
              if (next.length === features.length) clearInterval(interval);
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

  return (
    <section 
      id="features" 
      className="py-24 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Beneficios del Programa
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-4">
            Por Qué Elegir Nuestros Cursos de Robótica
          </h2>
          <p className="text-lg text-gray-600">
            Nuestro plan de estudios integral y métodos de enseñanza innovadores aseguran que adquieras 
            habilidades prácticas valoradas por los empleadores en la industria de la automatización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 delay-${index * 100} transform ${
                visibleFeatures.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-robotics-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
