

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import RobotPartsSection from '@/components/CourseSection';
import FeatureSection from '@/components/FeatureSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AutomationVisionSection from "@/components/AutomationVisionSection";
import SocialRobotsSection from '@/components/SocialRobotsSection';
import GDPRConsent from '@/components/GDPRConsent';
import OnlineStorePopup from '@/components/OnlineStorePopup';
import ImageCarousel from '@/components/ImageCarousel';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

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
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      {/* Introduction Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-relaxed">
                <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                  💬 "No necesitas ser experto en tecnología para automatizar tu negocio."
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-4">
                Sólo necesitas la herramienta adecuada que trabaje por ti.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-robotics-dark font-semibold mb-6">
                Somos Especialistas en ERP Odoo, automatizaciones y soluciones robóticas colaborativas
              </p>
              
              <div className="flex items-center justify-center space-x-12 opacity-70">
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/bfe6bd59-2f34-4a21-8391-eec584496997.png" 
                    alt="Odoo ERP" 
                    className="h-12 mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-600 font-medium">ERP Odoo</p>
                </div>
                
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/5a99c305-6368-4347-a88f-7234f99136be.png" 
                    alt="n8n Automation" 
                    className="h-12 mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-600 font-medium">Automatización n8n</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 z-0" />
        <div className="relative z-10 max-w-6xl w-full px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-robotics-dark mb-6 leading-tight">
              Automatiza sin gastar una fortuna
            </h2>
            <p className="text-2xl sm:text-3xl text-gray-700 mb-6 font-medium">
              Kioscos inteligentes + CRM con IA + Odoo = Tu negocio funcionando solo, 24/7.
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Reduce errores, ahorra tiempo y ofrece una experiencia moderna a tus clientes.
            </p>
            
            <div className="flex flex-col items-center space-y-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Sin ataduras (código abierto)</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Integra ventas, stock y CRM en un solo sistema</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Ideal para retail, clínicas, restaurantes y más</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-gray-600 hover:bg-gray-700 text-white rounded-md text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                >
                  <a href="/kioscos-pago" className="inline-flex items-center">
                    Más información de los kioscos
                  </a>
                </Button>
                
                <Button 
                  asChild
                  size="lg" 
                  className="bg-robotics-blue hover:bg-robotics-blue/90 text-white rounded-md text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                >
                  <a href="#contacto" className="inline-flex items-center">
                    Solicita tu demo gratuita
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-500 animate-bounce">
                <ArrowDown className="w-5 h-5" />
                <span className="text-sm">Descubre más</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Hero Section - now secondary */}
      <section className="relative flex flex-col items-center justify-center py-8 bg-gradient-to-r from-white via-blue-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white z-0" />
        <div className="relative z-10 max-w-6xl w-full px-4">
          <div className="text-center">
            <div className="mb-6">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <AutomationVisionSection />
      
      {/* Sobre Mí Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white slide-in-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-4">
                Sobre Mí - Ing. Oscarina Hernández
              </h2>
              <p className="text-xl text-robotics-blue font-semibold">
                Especialista en Robótica Industrial y Automatización
              </p>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Soy Ingeniera Oscarina Hernández, especialista en robótica industrial y automatización con más de 10 años de experiencia transformando la manera en que las empresas optimizan sus procesos productivos. Mi pasión por la tecnología y la innovación me ha llevado a especializarme en robots colaborativos (cobots), visión artificial y sistemas de automatización inteligente.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  A lo largo de mi carrera, he tenido el privilegio de trabajar con empresas de diversos sectores, desde pequeñas y medianas empresas hasta corporaciones multinacionales, ayudándolas a implementar soluciones robóticas que no solo mejoran su productividad, sino que también crean entornos de trabajo más seguros y eficientes.
                </p>
              </div>

              {/* Experience and Specialization */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-robotics-dark mb-6">Mi Experiencia y Especialización</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-robotics-blue mb-3">🤖 Robótica Colaborativa</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Implementación y programación de robots UR (Universal Robots)</li>
                      <li>• Especialización en sistemas KUKA</li>
                      <li>• Desarrollo con ROS (Robot Operating System)</li>
                      <li>• Integración de cobots en líneas de producción existentes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-robotics-blue mb-3">👁️ Visión Artificial</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Sistemas de inspección automatizada</li>
                      <li>• Control de calidad mediante visión computacional</li>
                      <li>• Integración de cámaras industriales con sistemas robóticos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-robotics-blue mb-3">⚙️ Automatización</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Diseño de ERP-CRM, con sistemas POS</li>
                      <li>• Optimización digital de procesos</li>
                      <li>• Análisis de ROI en proyectos de automatización</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-robotics-dark mb-6">Mi Filosofía de Trabajo</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Creo firmemente que la automatización no reemplaza a las personas, sino que las potencia. Mi enfoque se centra en crear soluciones que:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-robotics-blue rounded-full"></div>
                    <span className="text-gray-700">Mejoran la seguridad de los trabajadores</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-robotics-blue rounded-full"></div>
                    <span className="text-gray-700">Aumentan la productividad sin comprometer la calidad</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-robotics-blue rounded-full"></div>
                    <span className="text-gray-700">Reducen costos operativos de manera sostenible</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-robotics-blue rounded-full"></div>
                    <span className="text-gray-700">Facilitan la adaptación tecnológica paso a paso</span>
                  </div>
                </div>
              </div>

              {/* What Makes Me Different */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-robotics-dark mb-6">Lo Que Me Diferencia</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✅</span>
                    <div>
                      <strong className="text-robotics-dark">Enfoque Integral:</strong>
                      <span className="text-gray-700"> No solo vendo equipos, sino que acompaño todo el proceso desde el análisis inicial hasta la implementación y formación del personal.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✅</span>
                    <div>
                      <strong className="text-robotics-dark">Soluciones Personalizadas:</strong>
                      <span className="text-gray-700"> Cada empresa es única, por eso diseño soluciones específicas para cada cliente y sector.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✅</span>
                    <div>
                      <strong className="text-robotics-dark">Formación Especializada:</strong>
                      <span className="text-gray-700"> Transfiero conocimiento a través de programas de capacitación práctica en robótica colaborativa.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✅</span>
                    <div>
                      <strong className="text-robotics-dark">Soporte Continuo:</strong>
                      <span className="text-gray-700"> Mi compromiso va más allá de la instalación, ofreciendo soporte técnico y mantenimiento especializado.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Commitment */}
              <div className="bg-gradient-to-r from-robotics-blue/10 to-blue-50 rounded-2xl p-8 shadow-lg border border-blue-200">
                <h3 className="text-2xl font-bold text-robotics-dark mb-6">Mi Compromiso Contigo</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Mi misión es democratizar el acceso a la robótica colaborativa, especialmente para pequeñas y medianas empresas que tradicionalmente han visto esta tecnología como inaccesible. Creo que toda empresa, sin importar su tamaño, merece tener acceso a las ventajas de la automatización inteligente.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cuando trabajas conmigo, no solo obtienes un proveedor de tecnología, sino un socio estratégico comprometido con el éxito de tu proyecto de automatización.
                </p>
              </div>

              {/* Certifications */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-robotics-dark mb-6">Certificaciones y Formación Continua</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-robotics-blue rounded-full"></div>
                    <span className="text-gray-700">Certificación en programación de robots Universal Robots</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-robotics-blue rounded-full"></div>
                    <span className="text-gray-700">Especialización en sistemas KUKA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-robotics-blue rounded-full"></div>
                    <span className="text-gray-700">Formación avanzada en ROS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-robotics-blue rounded-full"></div>
                    <span className="text-gray-700">Certificación de AWS Arquitect</span>
                  </div>
                </div>
              </div>

              {/* Why Choose Me */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-robotics-dark mb-6">¿Por Qué Elegir Trabajar Conmigo?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <strong className="text-robotics-dark">Experiencia Comprobada:</strong>
                      <span className="text-gray-700"> Proyectos exitosos implementados</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📚</span>
                    <div>
                      <strong className="text-robotics-dark">Formación Continua:</strong>
                      <span className="text-gray-700"> Siempre actualizada con las últimas tecnologías</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <strong className="text-robotics-dark">Enfoque Humano:</strong>
                      <span className="text-gray-700"> Entiendo que detrás de cada proyecto hay personas y objetivos empresariales reales</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <strong className="text-robotics-dark">Innovación Práctica:</strong>
                      <span className="text-gray-700"> Combino tecnología de vanguardia con soluciones pragmáticas</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔧</span>
                    <div>
                      <strong className="text-robotics-dark">Soporte Integral:</strong>
                      <span className="text-gray-700"> Desde la consultoría inicial hasta el soporte post-implementación</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-r from-blue-600 to-robotics-blue rounded-2xl p-8 shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-6">Mi Visión</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Visualizo un futuro donde la colaboración entre humanos y robots sea la norma, no la excepción. Donde las empresas, independientemente de su tamaño, puedan acceder a tecnología que las haga más competitivas, sostenibles y exitosas en el mercado global.
                </p>
                <p className="text-lg leading-relaxed font-semibold">
                  Mi trabajo es hacer realidad esa visión, un proyecto a la vez.
                </p>
              </div>

              {/* Contact CTA */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <h3 className="text-2xl font-bold text-robotics-dark mb-6">
                  ¿Listo para transformar tu empresa con robótica colaborativa?
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Conversemos sobre cómo puedo ayudarte a alcanzar tus objetivos de automatización.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="text-sm text-gray-600">Contacto:</p>
                      <a href="mailto:info@robotsconsultant.net" className="text-robotics-blue hover:underline font-medium">
                        info@robotsconsultant.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-sm text-gray-600">WhatsApp:</p>
                      <a href="https://wa.me/34602632981" className="text-robotics-blue hover:underline font-medium">
                        +34 602 63 29 81
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl">💼</span>
                    <div>
                      <p className="text-sm text-gray-600">LinkedIn:</p>
                      <a href="https://www.linkedin.com/in/ing-oscarina-hernandez/" target="_blank" rel="noopener noreferrer" className="text-robotics-blue hover:underline font-medium">
                        Ing. Oscarina Hernández
                      </a>
                    </div>
                  </div>
                </div>
                <Button 
                  asChild
                  size="lg" 
                  className="bg-robotics-blue hover:bg-robotics-blue/90 text-white rounded-md text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                >
                  <a href="#contacto">Contactar Ahora</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RobotPartsSection />
      <SocialRobotsSection />
      <ContactSection />
      <Footer />
      <GDPRConsent />
      <OnlineStorePopup />
    </div>
  );
};

export default Index;
