
import { useEffect, useRef, useState } from 'react';
import { Bot, Code, Database, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  {
    id: 'ur',
    title: 'Universal Robots (UR)',
    icon: <Bot className="h-8 w-8 text-robotics-blue" />,
    description: 'Domina la programación y operación de robots colaborativos UR.',
    features: [
      'Fundamentos de programación UR Script',
      'Configuraciones de seguridad y mejores prácticas',
      'Planificación y optimización de trayectorias',
      'Integración con sistemas de visión',
      'Implementación de proyectos de automatización complejos'
    ],
    duration: '10 semanas',
    level: 'Principiante a Avanzado',
    price: '$299'
  },
  {
    id: 'kuka',
    title: 'Programación de Robots KUKA',
    icon: <Database className="h-8 w-8 text-robotics-blue" />,
    description: 'Formación completa en programación y operación de robots KUKA.',
    features: [
      'Dominio del lenguaje de programación KRL',
      'Diseño y configuración de celdas robóticas',
      'Técnicas avanzadas de control de movimiento',
      'Integración con WorkVisual y KUKA.Sim',
      'Flujos de trabajo de automatización industrial'
    ],
    duration: '12 semanas',
    level: 'Intermedio',
    price: '$349'
  },
  {
    id: 'ros',
    title: 'Robot Operating System (ROS)',
    icon: <Code className="h-8 w-8 text-robotics-blue" />,
    description: 'Aprende el framework ROS para desarrollar aplicaciones robóticas complejas.',
    features: [
      'Arquitectura ROS y conceptos fundamentales',
      'Modelado de robots con URDF',
      'Integración y procesamiento de sensores',
      'Navegación y planificación de rutas',
      'Desarrollo de nodos personalizados en Python'
    ],
    duration: '14 semanas',
    level: 'Avanzado',
    price: '$399'
  }
];

const CourseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('ur');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
      id="courses" 
      className="py-24 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Nuestros Programas Especializados
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-4">
            Cursos Completos de Robótica
          </h2>
          <p className="text-lg text-gray-600">
            Elige la plataforma robótica que se alinee con tus objetivos profesionales y necesidades de la industria.
            Cada curso está diseñado por expertos con ejercicios prácticos.
          </p>
        </div>

        <div className={`slide-in-section ${isVisible ? 'visible' : ''}`}>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setActiveTab(course.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === course.id
                    ? 'bg-robotics-blue text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {course.title}
              </button>
            ))}
          </div>

          {/* Course details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`transition-all duration-500 transform ${
                  activeTab === course.id
                    ? 'scale-105 opacity-100 z-10'
                    : 'scale-95 opacity-70 hover:opacity-90'
                }`}
              >
                <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
                  <div className="mb-6">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-robotics-dark mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-robotics-blue shrink-0 mr-3 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Duración</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-sm text-gray-500">Nivel</span>
                        <span className="font-medium">{course.level}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-2xl font-bold text-robotics-dark">{course.price}</span>
                      <span className="text-sm text-gray-500">Pago único</span>
                    </div>
                    
                    <Button 
                      asChild
                      className={`w-full ${
                        activeTab === course.id
                          ? 'bg-robotics-blue hover:bg-robotics-blue/90'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      <a href="#enroll">Inscribirse Ahora</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
