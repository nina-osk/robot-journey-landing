import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Shield, 
  Zap, 
  Users, 
  CreditCard, 
  Smartphone,
  ArrowLeft,
  Clock,
  Star,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const KioscosPago = () => {
  // Load HubSpot script when component mounts
  useEffect(() => {
    // Load HubSpot forms script
    const script = document.createElement('script');
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "146031285", 
          formId: "569b1f1d-0603-4de0-a885-a0bdbaf74911",
          target: "#hubspot-form-kioscos"
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />,
      title: "Pagos Rápidos",
      description: "Acepta pagos en segundos con tarjetas, efectivo y más.",
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />,
      title: "Fácil de Usar",
      description: "Interfaz intuitiva para clientes y personal.",
    },
    {
      icon: <CreditCard className="w-6 h-6 md:w-8 md:h-8 text-green-500" />,
      title: "Seguro y Confiable",
      description: "Transacciones protegidas con encriptación avanzada.",
    },
    {
      icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />,
      title: "Siempre Conectado",
      description: "Monitorea tus ventas y stock en tiempo real.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <Link to="/" className="inline-flex items-center text-robotics-blue hover:text-robotics-accent transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al inicio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-robotics-dark mb-6 leading-tight">
                Kioscos de Pago Inteligentes para tu Negocio
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Moderniza tu punto de venta y ofrece una experiencia única a tus clientes.
                Nuestros kioscos son ideales para retail, restaurantes, clínicas y más.
              </p>
              <div className="flex space-x-4">
                
              </div>
            </div>

            {/* Right side - Image */}
            <div>
              <img
                src="/lovable-uploads/6964099a-159c-4479-a67d-5e8952b97533.png"
                alt="Kiosco de Pago"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-robotics-dark mb-4">
              Características Principales
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestros kioscos están diseñados para ofrecer la mejor experiencia tanto para ti como para tus clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
                <CardHeader className="p-5">
                  <CardTitle className="flex items-center space-x-3 text-lg font-semibold">
                    {feature.icon}
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5">
                  <p className="text-sm text-gray-700">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-robotics-dark mb-4">
              Beneficios Adicionales
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre cómo nuestros kioscos pueden transformar tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - List of Benefits */}
            <div>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Reduce tiempos de espera</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Aumenta la satisfacción del cliente</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Optimiza la gestión de efectivo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Minimiza errores humanos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Genera reportes detallados de ventas</span>
                </li>
              </ul>
            </div>

            {/* Right side - Testimonial */}
            <Card className="bg-gray-50 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <Star className="w-6 h-6 text-yellow-500" />
                  <Star className="w-6 h-6 text-yellow-500" />
                  <Star className="w-6 h-6 text-yellow-500" />
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Los kioscos de pago han revolucionado nuestro negocio.
                  Ahora nuestros clientes pueden pagar de forma rápida y segura,
                  y nosotros hemos optimizado nuestra gestión de efectivo."
                </p>
                <div className="text-sm font-semibold text-robotics-dark">
                  - Juan Pérez, Gerente de Restaurante
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section with HubSpot Form */}
      <section className="py-20 bg-gradient-to-br from-robotics-dark to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Completa este formulario y te contestaremos a la brevedad
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nuestro equipo de expertos te contactará para ofrecerte una solución personalizada para tu negocio.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Benefits */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-6">¿Por qué elegir nuestros kioscos?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold">Implementación rápida</h4>
                        <p className="text-gray-300">Instalación y configuración en menos de una semana</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold">ROI comprobado</h4>
                        <p className="text-gray-300">Reducción de costos operativos hasta 40%</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold">Seguridad garantizada</h4>
                        <p className="text-gray-300">Encriptación de datos y cumplimiento PCI DSS</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold">Soporte 24/7</h4>
                        <p className="text-gray-300">Asistencia técnica disponible todo el año</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - HubSpot Form */}
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <div id="hubspot-form-kioscos"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} RobotsConsultant. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default KioscosPago;
