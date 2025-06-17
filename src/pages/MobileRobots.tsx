
import { useEffect } from 'react';
import { Truck, Construction, ArrowRight, CheckCircle, Users, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MobileRobots = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.slide-in-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const constructionRobots = [
    {
      name: "AutoBuilder Pro",
      description: "Robot autónomo para construcción de estructuras modulares",
      features: ["Precisión milimétrica", "Trabajo 24/7", "Sensores LiDAR"],
      price: "Desde €8,500/mes"
    },
    {
      name: "SiteGuard Mobile",
      description: "Sistema de vigilancia y monitoreo móvil para obras",
      features: ["Patrullaje autónomo", "Detección de intrusos", "Reportes en tiempo real"],
      price: "Desde €3,200/mes"
    },
    {
      name: "MaterialMover X1",
      description: "Transporte autónomo de materiales pesados",
      features: ["Carga hasta 2 toneladas", "Navegación GPS", "Evita obstáculos"],
      price: "Desde €6,800/mes"
    }
  ];

  const logisticsRobots = [
    {
      name: "WareHouse Navigator",
      description: "Robot móvil para gestión de almacenes automatizada",
      features: ["Picking automatizado", "Inventario en tiempo real", "Integración ERP"],
      price: "Desde €4,500/mes"
    },
    {
      name: "DeliveryBot Fleet",
      description: "Flota de robots para última milla de entrega",
      features: ["Entrega autónoma", "Rutas optimizadas", "Seguimiento GPS"],
      price: "Desde €2,800/mes"
    },
    {
      name: "SortMaster Pro",
      description: "Sistema de clasificación automática de paquetes",
      features: ["1000+ paquetes/hora", "Reconocimiento óptico", "Zero errores"],
      price: "Desde €7,200/mes"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-robotics-dark mb-6">
              Robots Móviles para <span className="text-robotics-blue">Construcción y Logística</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Revoluciona tu industria con robots móviles autónomos. Aumenta la productividad, 
              reduce costos operativos y mejora la seguridad en construcción y logística.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-robotics-blue hover:bg-robotics-blue/90">
                <Construction className="mr-2 h-5 w-5" />
                Ver Robots Construcción
              </Button>
              <Button size="lg" variant="outline" className="border-robotics-blue text-robotics-blue hover:bg-robotics-blue hover:text-white">
                <Truck className="mr-2 h-5 w-5" />
                Ver Robots Logística
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white slide-in-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-robotics-dark mb-4">
              ¿Por qué Robots Móviles?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los robots móviles transforman las operaciones industriales con beneficios medibles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-robotics-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-robotics-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reducción de Personal</h3>
              <p className="text-gray-600">Hasta 70% menos personal necesario para tareas repetitivas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-robotics-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-robotics-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Operación 24/7</h3>
              <p className="text-gray-600">Trabajo continuo sin descansos, aumentando productividad</p>
            </div>
            
            <div className="text-center">
              <div className="bg-robotics-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-robotics-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mayor Seguridad</h3>
              <p className="text-gray-600">Reducción de accidentes laborales en un 85%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Robots Section */}
      <section className="py-16 bg-gray-50 slide-in-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Construction className="h-12 w-12 text-robotics-blue mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-robotics-dark mb-4">
              Robots para Construcción
            </h2>
            <p className="text-lg text-gray-600">
              Automatiza tareas de construcción con precisión y eficiencia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {constructionRobots.map((robot, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-robotics-dark">{robot.name}</CardTitle>
                  <CardDescription>{robot.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {robot.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-lg font-semibold text-robotics-blue mb-3">{robot.price}</p>
                    <Button className="w-full" variant="outline">
                      Solicitar Información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Robots Section */}
      <section className="py-16 bg-white slide-in-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Truck className="h-12 w-12 text-robotics-blue mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-robotics-dark mb-4">
              Robots para Logística
            </h2>
            <p className="text-lg text-gray-600">
              Optimiza tu cadena de suministro con automatización inteligente
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {logisticsRobots.map((robot, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-robotics-dark">{robot.name}</CardTitle>
                  <CardDescription>{robot.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {robot.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-lg font-semibold text-robotics-blue mb-3">{robot.price}</p>
                    <Button className="w-full" variant="outline">
                      Solicitar Información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-robotics-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para Automatizar tu Industria?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contacta con nuestros expertos para una consulta personalizada
          </p>
          <Button size="lg" className="bg-robotics-blue hover:bg-robotics-blue/90">
            Solicitar Consulta Gratuita
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileRobots;
