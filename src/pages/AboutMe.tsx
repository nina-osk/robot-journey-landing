
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      {/* Sobre Mí Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-4">
                Sobre Mí - Ing. Oscarina Hernández
              </h1>
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
                <h2 className="text-2xl font-bold text-robotics-dark mb-6">Mi Experiencia y Especialización</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-robotics-blue mb-3">🤖 Robótica Colaborativa</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Implementación y programación de robots UR (Universal Robots)</li>
                      <li>• Especialización en sistemas KUKA</li>
                      <li>• Desarrollo con ROS (Robot Operating System)</li>
                      <li>• Integración de cobots en líneas de producción existentes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-robotics-blue mb-3">👁️ Visión Artificial</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Sistemas de inspección automatizada</li>
                      <li>• Control de calidad mediante visión computacional</li>
                      <li>• Integración de cámaras industriales con sistemas robóticos</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-robotics-blue mb-3">⚙️ Automatización</h3>
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
                <h2 className="text-2xl font-bold text-robotics-dark mb-6">Mi Filosofía de Trabajo</h2>
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
                <h2 className="text-2xl font-bold text-robotics-dark mb-6">Lo Que Me Diferencia</h2>
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
                <h2 className="text-2xl font-bold text-robotics-dark mb-6">Mi Compromiso Contigo</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Mi misión es democratizar el acceso a la robótica colaborativa, especialmente para pequeñas y medianas empresas que tradicionalmente han visto esta tecnología como inaccesible. Creo que toda empresa, sin importar su tamaño, merece tener acceso a las ventajas de la automatización inteligente.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cuando trabajas conmigo, no solo obtienes un proveedor de tecnología, sino un socio estratégico comprometido con el éxito de tu proyecto de automatización.
                </p>
              </div>

              {/* Certifications */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-robotics-dark mb-6">Certificaciones y Formación Continua</h2>
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
                <h2 className="text-2xl font-bold text-robotics-dark mb-6">¿Por Qué Elegir Trabajar Conmigo?</h2>
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
                <h2 className="text-2xl font-bold mb-6">Mi Visión</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Visualizo un futuro donde la colaboración entre humanos y robots sea la norma, no la excepción. Donde las empresas, independientemente de su tamaño, puedan acceder a tecnología que las haga más competitivas, sostenibles y exitosas en el mercado global.
                </p>
                <p className="text-lg leading-relaxed font-semibold">
                  Mi trabajo es hacer realidad esa visión, un proyecto a la vez.
                </p>
              </div>

              {/* Contact CTA */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <h2 className="text-2xl font-bold text-robotics-dark mb-6">
                  ¿Listo para transformar tu empresa con robótica colaborativa?
                </h2>
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
                  <a href="/#contacto">Contactar Ahora</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutMe;
