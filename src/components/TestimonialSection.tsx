
import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ShoppingCart, Info, Headset } from 'lucide-react';
import { Button } from '@/components/ui/button';

const robotsForSale = [
  {
    name: 'Universal Robots UR5',
    condition: 'Excelente estado',
    description: 'Cobot UR5 de segunda mano en excelente estado. Solo 1200 horas de uso. Incluye controlador, tablet y todas las piezas originales. Ideal para aplicaciones de pick and place, paletizado o atornillado.',
    image: 'https://media.istockphoto.com/id/1010435424/photo/robotic-arm-on-black-background.jpg?s=612x612&w=0&k=20&c=YVJLUBgaYq5oYhwRkrpqacKYuqnZuWSUOu-mDJ8FdqE=',
    price: '19.500€',
    year: '2019',
  },
  {
    name: 'KUKA LBR iiwa 7 R800',
    condition: 'Buen estado',
    description: 'Cobot KUKA LBR iiwa de segunda mano con 2400 horas de operación. Mantenimiento al día con certificados. Perfecto para tareas de precisión, ensamblaje e interacción con humanos en entornos industriales.',
    image: 'https://media.istockphoto.com/id/1010435420/photo/robotic-arm-on-black-background.jpg?s=612x612&w=0&k=20&c=GKuuOhgxXbFnFQSqAboUJgzj3P0rxBTqQk4wJKtysCE=',
    price: '22.800€',
    year: '2018',
  },
  {
    name: 'Universal Robots UR10e',
    condition: 'Como nuevo',
    description: 'UR10e con menos de 800 horas de uso. El robot colaborativo más avanzado de Universal Robots con payload de 10kg. Incluye carro móvil, controlador actualizado y gripper eléctrico OnRobot.',
    image: 'https://media.istockphoto.com/id/1010435426/photo/robotic-arm-on-black-background.jpg?s=612x612&w=0&k=20&c=Brc6yroQAB6MgQEjZWMO2MHnZ4m8P0Y4USFn8A9X9Jg=',
    price: '28.300€',
    year: '2020',
  },
];

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % robotsForSale.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? robotsForSale.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % robotsForSale.length
    );
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-white overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-robotics-blue mb-4">
            Venta y Asesoramiento
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-4">
            Cobots de Segunda Mano
          </h2>
          <p className="text-lg text-gray-600">
            Ofrecemos robots colaborativos de alta calidad a precios competitivos junto con asesoría especializada para su implementación.
          </p>
        </div>

        <div className={`slide-in-section ${isVisible ? 'visible' : ''}`}>
          <div className="relative">
            <div className="flex overflow-hidden max-w-5xl mx-auto">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {robotsForSale.map((robot, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="glass-card rounded-2xl p-8 md:p-10">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-2/5">
                          <div className="rounded-lg overflow-hidden h-64 bg-gray-100">
                            <img 
                              src={robot.image} 
                              alt={robot.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-3/5">
                          <div className="bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-3 py-1 rounded-full inline-block mb-2">
                            {robot.condition}
                          </div>
                          <h3 className="text-2xl font-bold text-robotics-dark mb-2">{robot.name}</h3>
                          <p className="text-lg font-semibold text-robotics-blue mb-1">
                            {robot.price} <span className="text-gray-500 text-sm font-normal">(Año {robot.year})</span>
                          </p>
                          <p className="text-gray-700 mb-4">{robot.description}</p>
                          <div className="flex flex-wrap gap-3">
                            <Button 
                              variant="default" 
                              className="bg-robotics-blue hover:bg-robotics-blue/90 text-white rounded-md flex items-center gap-2"
                            >
                              <ShoppingCart className="w-4 h-4" />
                              Solicitar Precio
                            </Button>
                            <Button
                              variant="outline"
                              className="border-robotics-blue text-robotics-blue hover:bg-robotics-blue/10 rounded-md flex items-center gap-2"
                            >
                              <Headset className="w-4 h-4" />
                              Asesoría Técnica
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={goToPrev}
                aria-label="Anterior robot"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex space-x-2">
                {robotsForSale.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-robotics-blue w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir al robot ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={goToNext}
                aria-label="Siguiente robot"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Sección de asesoría especializada */}
          <div className="mt-20 glass-card rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                  Servicio Exclusivo
                </span>
                <h3 className="text-2xl font-bold text-robotics-dark mb-4">Asesoría Especializada en Robótica Colaborativa</h3>
                <p className="text-gray-700 mb-6">
                  Nuestro equipo de expertos en robótica colaborativa te proporciona asesoramiento técnico personalizado 
                  para ayudarte a seleccionar el cobot adecuado según tus necesidades específicas, optimizar su integración 
                  en tu línea de producción y maximizar su rendimiento.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <Star className="h-4 w-4 text-robotics-blue" />
                    </div>
                    <span className="text-gray-700">Evaluación de necesidades y recomendación personalizada</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <Star className="h-4 w-4 text-robotics-blue" />
                    </div>
                    <span className="text-gray-700">Configuración y programación inicial</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <Star className="h-4 w-4 text-robotics-blue" />
                    </div>
                    <span className="text-gray-700">Capacitación para tu equipo técnico</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <Star className="h-4 w-4 text-robotics-blue" />
                    </div>
                    <span className="text-gray-700">Soporte técnico post-venta</span>
                  </li>
                </ul>
                <Button 
                  variant="default" 
                  className="bg-robotics-blue hover:bg-robotics-blue/90 text-white rounded-md flex items-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  Consultar disponibilidad
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden h-full bg-gray-100">
                <img 
                  src="https://media.istockphoto.com/id/1452841865/photo/engineers-are-programming-collaborative-robot-in-modern-laboratory.jpg?s=612x612&w=0&k=20&c=QJ2d7pMj2dT9EfWXlkkDWGJ_6Qku6z63wVwHQjY2TZA=" 
                  alt="Asesoría especializada" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
