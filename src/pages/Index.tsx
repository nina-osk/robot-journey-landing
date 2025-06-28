import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Construction, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-robotics-dark mb-6">
                Automatización Robótica <span className="text-robotics-blue">para tu Negocio</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Impulsa tu empresa con soluciones robóticas innovadoras. Desde robots móviles hasta
                kioscos de pago, optimizamos tus procesos y mejoramos la eficiencia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-robotics-blue hover:bg-robotics-blue/90" asChild>
                  <a href="/robots-moviles#construccion">
                    <Construction className="mr-2 h-5 w-5" />
                    Ver Robots Construcción
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-robotics-blue text-robotics-blue hover:bg-robotics-blue hover:text-white" asChild>
                  <a href="/robots-moviles#logistica">
                    <Truck className="mr-2 h-5 w-5" />
                    Ver Robots Logística
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white slide-in-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-robotics-dark mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre cómo nuestras soluciones robóticas pueden transformar tu negocio
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mobile Robots Card */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <Rocket className="h-10 w-10 text-robotics-blue mb-4" />
                <h3 className="text-xl font-semibold text-robotics-dark mb-2">Robots Móviles</h3>
                <p className="text-gray-600 mb-4">
                  Automatiza tareas en construcción y logística con robots autónomos.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/robots-moviles">
                    Descubre más <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Payment Kiosks Card */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-credit-card h-10 w-10 text-robotics-blue mb-4"
                >
                  <rect width="22" height="16" x="1" y="4" rx="2" ry="2" />
                  <line x1="1" x2="23" y1="10" y2="10" />
                </svg>
                <h3 className="text-xl font-semibold text-robotics-dark mb-2">Kioscos de Pago</h3>
                <p className="text-gray-600 mb-4">
                  Ofrece una experiencia de pago moderna y eficiente con nuestros kioscos personalizados.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/kioscos-pago">
                    Descubre más <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Custom Solutions Card */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings-2 h-10 w-10 text-robotics-blue mb-4"
                >
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                  <path d="M14.5 10.3a7 7 0 0 0-4.5 1.7" />
                  <path d="M9.5 13.7a7 7 0 0 0 4.5-1.7" />
                </svg>
                <h3 className="text-xl font-semibold text-robotics-dark mb-2">Soluciones a Medida</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollamos soluciones robóticas personalizadas para satisfacer tus necesidades
                  específicas.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <a href="#contacto">
                    Contactar <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50 slide-in-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-robotics-dark mb-4">
                ¿Por qué Elegirnos?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nuestra experiencia y compromiso nos convierten en tu mejor aliado en robótica
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Expertise */}
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-brain-circuit h-10 w-10 text-robotics-blue mx-auto mb-4"
                >
                  <path d="M20 12a8 8 0 0 0-8-8" />
                  <path d="M4 12a8 8 0 0 1 8-8" />
                  <path d="M20 12a8 8 0 0 1-8 8" />
                  <path d="M4 12a8 8 0 0 0 8 8" />
                  <path d="M12 4v8" />
                  <path d="M12 20v-8" />
                </svg>
                <h3 className="text-xl font-semibold text-robotics-dark mb-2">Experiencia</h3>
                <p className="text-gray-600">
                  Años de experiencia en el desarrollo e implementación de soluciones robóticas
                </p>
              </div>

              {/* Innovation */}
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-flame h-10 w-10 text-robotics-blue mx-auto mb-4"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-1.11-2.5-2.5-2.5A2.5 2.5 0 0 0 6 12c0 1.38 1.11 2.5 2.5 2.5z" />
                  <path d="M15 9a2 2 0 0 0-2 2c0 2.5-5 2.5-5 5.5.5 1 2 1 3.5 1.5" />
                </svg>
                <h3 className="text-xl font-semibold text-robotics-dark mb-2">Innovación</h3>
                <p className="text-gray-600">
                  Nos mantenemos a la vanguardia de la tecnología robótica para ofrecerte las
                  soluciones más avanzadas
                </p>
              </div>

              {/* Support */}
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-headphones h-10 w-10 text-robotics-blue mx-auto mb-4"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 5a9 9 0 0 1-18 0" />
                  <line x1="3" x2="3" y1="22" y2="18" />
                  <line x1="21" x2="21" y1="22" y2="18" />
                </svg>
                <h3 className="text-xl font-semibold text-robotics-dark mb-2">Soporte</h3>
                <p className="text-gray-600">
                  Ofrecemos soporte técnico y mantenimiento para garantizar el óptimo rendimiento de
                  tus robots
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-robotics-dark text-white slide-in-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Contacta con nuestros expertos para descubrir cómo la robótica puede impulsar tu
              empresa
            </p>
            <Button size="lg" className="bg-robotics-blue hover:bg-robotics-blue/90" asChild>
              <a href="#contacto">Solicitar Consulta Gratuita</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
