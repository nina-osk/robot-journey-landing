import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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

    // Load HubSpot form script
    const hubspotScript = document.createElement('script');
    hubspotScript.src = 'https://js-eu1.hsforms.net/forms/embed/146031285.js';
    hubspotScript.defer = true;
    document.head.appendChild(hubspotScript);

    return () => {
      observer.disconnect();
      // Clean up script when component unmounts
      if (document.head.contains(hubspotScript)) {
        document.head.removeChild(hubspotScript);
      }
    };
  }, []);

  const constructionRobots = [
    {
      name: "AutoBuilder Pro",
      description: "Robot autónomo para construcción de estructuras modulares",
      features: ["Precisión milimétrica", "Trabajo 24/7", "Sensores LiDAR"],
      price: "Desde €8,500"
    },
    {
      name: "SiteGuard Mobile",
      description: "Sistema de vigilancia y monitoreo móvil para obras",
      features: ["Patrullaje autónomo", "Detección de intrusos", "Reportes en tiempo real"],
      price: "Desde €12,200"
    },
    {
      name: "MaterialMover X1",
      description: "Transporte autónomo de materiales pesados",
      features: ["Carga hasta 2 toneladas", "Navegación GPS", "Evita obstáculos"],
      price: "Desde €16,800"
    }
  ];

  const logisticsRobots = [
    {
      name: "WareHouse Navigator",
      description: "Robot móvil para gestión de almacenes automatizada",
      features: ["Picking automatizado", "Inventario en tiempo real", "Integración ERP"],
      price: "Desde €4,500"
    },
    {
      name: "DeliveryBot Fleet",
      description: "Flota de robots para última milla de entrega",
      features: ["Entrega autónoma", "Rutas optimizadas", "Seguimiento GPS"],
      price: "Desde €12,800"
    },
    {
      name: "SortMaster Pro",
      description: "Sistema de clasificación automática de paquetes",
      features: ["1000+ paquetes/hora", "Reconocimiento óptico", "Zero errores"],
      price: "Desde €17,200"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Helmet>
        <title>Robots Móviles para Empresas | RobotsConsultant Agency</title>
        <meta name="description" content="Robots móviles autónomos para restaurantes, hoteles y retail. Servicio, reparto, atención al cliente y logística interna automatizados. Aumenta eficiencia y reduce costes." />
        <link rel="canonical" href="https://robotsconsultant.net/robots-moviles" />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#667eea]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#764ba2]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Robots Móviles para <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Construcción y Logística</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revoluciona tu industria con robots móviles autónomos. Aumenta la productividad, 
              reduce costos operativos y mejora la seguridad en construcción y logística.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white border-0">
                <Construction className="mr-2 h-5 w-5" />
                Ver Robots Construcción
              </Button>
              <Button size="lg" className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08] text-white">
                <Truck className="mr-2 h-5 w-5" />
                Ver Robots Logística
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative slide-in-section">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#764ba2]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Por qué Robots Móviles?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Los robots móviles transforman las operaciones industriales con beneficios medibles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#667eea]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#667eea]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Reducción de Personal</h3>
              <p className="text-gray-400">Hasta 70% menos personal necesario para tareas repetitivas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#764ba2]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#764ba2]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Operación 24/7</h3>
              <p className="text-gray-400">Trabajo continuo sin descansos, aumentando productividad</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#667eea]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#667eea]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Mayor Seguridad</h3>
              <p className="text-gray-400">Reducción de accidentes laborales en un 85%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Robots Section */}
      <section id="construccion" className="py-16 relative slide-in-section">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#667eea]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Construction className="h-12 w-12 text-[#764ba2] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Robots para Construcción
            </h2>
            <p className="text-lg text-gray-400">
              Automatiza tareas de construcción con precisión y eficiencia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {constructionRobots.map((robot, index) => (
              <Card key={index} className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
                <CardHeader>
                  <CardTitle className="text-white">{robot.name}</CardTitle>
                  <CardDescription className="text-gray-400">{robot.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {robot.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-lg font-semibold text-[#667eea] mb-3">{robot.price}</p>
                    <Button className="w-full bg-white/[0.05] border-white/10 hover:bg-white/[0.08] text-white" asChild>
                      <a href="/#contacto">
                        Solicitar Información
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Robots Section */}
      <section id="logistica" className="py-16 relative slide-in-section">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#764ba2]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Truck className="h-12 w-12 text-[#667eea] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Robots para Logística
            </h2>
            <p className="text-lg text-gray-400">
              Optimiza tu cadena de suministro con automatización inteligente
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {logisticsRobots.map((robot, index) => (
              <Card key={index} className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
                <CardHeader>
                  <CardTitle className="text-white">{robot.name}</CardTitle>
                  <CardDescription className="text-gray-400">{robot.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {robot.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-lg font-semibold text-[#764ba2] mb-3">{robot.price}</p>
                    <Button className="w-full bg-white/[0.05] border-white/10 hover:bg-white/[0.08] text-white" asChild>
                      <a href="/#contacto">
                        Solicitar Información
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#667eea]/30 to-[#764ba2]/30">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#667eea]/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              ¿Listo para Automatizar tu Industria?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Contacta con nuestros expertos para una consulta personalizada
            </p>
          </div>
          
          {/* HubSpot Form */}
          <div className="max-w-2xl mx-auto">
            <div 
              className="hs-form-frame bg-white/[0.05] border border-white/10 p-8 rounded-lg" 
              data-region="eu1" 
              data-form-id="3ed163b6-4dee-4555-8c12-943c18ade29a" 
              data-portal-id="146031285"
            ></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileRobots;
