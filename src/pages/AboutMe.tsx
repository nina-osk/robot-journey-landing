
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Youtube } from 'lucide-react';

const AboutMe = () => {
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-robotics-dark mb-6">
              Sobre Mí - Ing. Oscarina Hernández
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Especialista en Robótica Industrial y Automatización
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Soy Ingeniera Oscarina Hernández, especialista en robótica industrial y automatización con más de 10 años de experiencia transformando la manera en que las empresas optimizan sus procesos productivos. Mi pasión por la tecnología y la innovación me ha llevado a especializarme en robots colaborativos (cobots), visión artificial y sistemas de automatización inteligente.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A lo largo de mi carrera, he tenido el privilegio de trabajar con empresas de diversos sectores, desde pequeñas y medianas empresas hasta corporaciones multinacionales, ayudándolas a implementar soluciones robóticas que no solo mejoran su productividad, sino que también crean entornos de trabajo más seguros y eficientes.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white slide-in-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-robotics-dark mb-12 text-center">
            Mi Experiencia y Especialización
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-robotics-dark mb-4">Robótica Colaborativa</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Implementación y programación de robots UR (Universal Robots)</li>
                <li>• Especialización en sistemas KUKA</li>
                <li>• Desarrollo con ROS (Robot Operating System)</li>
                <li>• Integración de cobots en líneas de producción existentes</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-3xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-robotics-dark mb-4">Visión Artificial</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Sistemas de inspección automatizada</li>
                <li>• Control de calidad mediante visión computacional</li>
                <li>• Integración de cámaras industriales con sistemas robóticos</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-robotics-dark mb-4">Automatización</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Diseño de ERP-CRM, con sistemas POS</li>
                <li>• Optimización digital de procesos</li>
                <li>• Análisis de ROI en proyectos de automatización</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50 slide-in-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <Youtube className="w-12 h-12 text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-robotics-dark">Canal Educativo de YouTube</h2>
            </div>
            
            <h3 className="text-2xl font-semibold text-red-600 mb-6">RobotsConsultant</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Comparto mi conocimiento y experiencia a través de mi canal educativo de YouTube "RobotsConsultant", 
              donde subo videos educativos sobre robótica colaborativa, automatización industrial, y las últimas 
              noticias en inteligencia artificial y tecnología. Mi objetivo es democratizar el acceso al conocimiento 
              en robótica y hacer que estas tecnologías sean más accesibles para todos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 rounded-lg p-6">
                <h4 className="font-bold text-robotics-dark mb-3">📚 Contenido Educativo</h4>
                <p className="text-gray-700">Tutoriales prácticos, guías de implementación y mejores prácticas en robótica colaborativa</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-bold text-robotics-dark mb-3">📰 Noticias de IA y Tecnología</h4>
                <p className="text-gray-700">Análisis de las últimas tendencias, avances tecnológicos y su impacto en la industria</p>
              </div>
            </div>
            
            <Button 
              asChild
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white rounded-md text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
            >
              <a 
                href="https://www.youtube.com/@robotsconsultant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Visitar Canal de YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white slide-in-section">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-robotics-dark mb-8 text-center">
            Mi Filosofía de Trabajo
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Creo firmemente que la automatización no reemplaza a las personas, sino que las potencia. Mi enfoque se centra en crear soluciones que:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700">Mejoran la seguridad de los trabajadores</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700">Aumentan la productividad sin comprometer la calidad</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700">Reducen costos operativos de manera sostenible</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700">Facilitan la adaptación tecnológica paso a paso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section className="py-16 bg-blue-50 slide-in-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-robotics-dark mb-12 text-center">
            Lo Que Me Diferencia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl mb-4">🎯</div>
              <h3 className="font-bold text-robotics-dark mb-3">Enfoque Integral</h3>
              <p className="text-gray-700 text-sm">No solo vendo equipos, sino que acompaño todo el proceso desde el análisis inicial hasta la implementación y formación del personal.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="font-bold text-robotics-dark mb-3">Soluciones Personalizadas</h3>
              <p className="text-gray-700 text-sm">Cada empresa es única, por eso diseño soluciones específicas para cada cliente y sector.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl mb-4">📚</div>
              <h3 className="font-bold text-robotics-dark mb-3">Formación Especializada</h3>
              <p className="text-gray-700 text-sm">Transfiero conocimiento a través de programas de capacitación práctica en robótica colaborativa.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl mb-4">🔧</div>
              <h3 className="font-bold text-robotics-dark mb-3">Soporte Continuo</h3>
              <p className="text-gray-700 text-sm">Mi compromiso va más allá de la instalación, ofreciendo soporte técnico y mantenimiento especializado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white slide-in-section">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-robotics-dark mb-8 text-center">
            Certificaciones y Formación Continua
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Certificación en programación de robots Universal Robots</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Especialización en sistemas KUKA</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Formación avanzada en ROS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Certificación de AWS Architect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-gradient-to-br from-robotics-dark to-gray-800 text-white slide-in-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Mi Visión</h2>
          <p className="text-lg leading-relaxed mb-8">
            Visualizo un futuro donde la colaboración entre humanos y robots sea la norma, no la excepción. 
            Donde las empresas, independientemente de su tamaño, puedan acceder a tecnología que las haga más 
            competitivas, sostenibles y exitosas en el mercado global.
          </p>
          <p className="text-xl font-semibold text-primary">
            Mi trabajo es hacer realidad esa visión, un proyecto a la vez.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-robotics-dark mb-8">
            ¿Listo para transformar tu empresa con robótica colaborativa?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Conversemos sobre cómo puedo ayudarte a alcanzar tus objetivos de automatización.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:info@robotsconsultant.net" 
              className="flex items-center justify-center space-x-3 bg-blue-50 hover:bg-blue-100 rounded-lg p-6 transition-colors group"
            >
              <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="font-semibold text-robotics-dark">Email</p>
                <p className="text-gray-600">info@robotsconsultant.net</p>
              </div>
            </a>
            
            <a 
              href="https://wa.me/34602632981" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-green-50 hover:bg-green-100 rounded-lg p-6 transition-colors group"
            >
              <Phone className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="font-semibold text-robotics-dark">WhatsApp</p>
                <p className="text-gray-600">+34 602 63 29 81</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ing-oscarina-hernandez/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-blue-50 hover:bg-blue-100 rounded-lg p-6 transition-colors group"
            >
              <Linkedin className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="font-semibold text-robotics-dark">LinkedIn</p>
                <p className="text-gray-600">Conectar</p>
              </div>
            </a>
          </div>
          
          <div className="flex flex-col gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-md text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all">
              <a 
                href="https://wa.me/34654942720" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>+34 654 94 27 20</span>
              </a>
            </Button>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-md text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all">
              <a 
                href="mailto:info@robotsconsultant.net"
                className="flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>info@robotsconsultant.net</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutMe;
