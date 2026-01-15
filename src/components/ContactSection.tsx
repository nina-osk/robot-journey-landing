
import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Youtube } from 'lucide-react';

const ContactCTA = () => {
  useEffect(() => {
    // Load Calendly script when component mounts
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      console.log('Calendly script loaded successfully');
    };
    script.onerror = () => {
      console.error('Failed to load Calendly script');
    };
    
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existingScript) {
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup: remove script when component unmounts
      const scriptToRemove = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <section id="contacto" className="py-20 bg-[#0a0a0a] relative">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#667eea]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#764ba2]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ¿LISTO PARA <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">REVOLUCIONAR</span> SU NEGOCIO?
          </h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            En <span className="text-[#667eea] font-semibold">RobotsConsultant</span> ofrecemos soluciones robóticas personalizadas para su empresa. 
            Desde robots móviles hasta brazos robóticos, tenemos la tecnología que necesita para optimizar sus procesos.
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            No espere más para incorporar el futuro a su establecimiento. 
            Nuestros robots están disponibles en diferentes modalidades adaptadas a sus necesidades.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border border-white/10 shadow-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] p-8 lg:p-10 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    SOLICITE UNA ASESORÍA GRATUITA
                  </h3>
                  <p className="text-base mb-6 leading-relaxed opacity-95">
                    Compruebe en persona el impacto de nuestros robots. Le visitamos sin compromiso para mostrarle cómo pueden transformar su negocio.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-white/20 flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-base font-medium">Demostraciones en vivo</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-white/20 flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-base font-medium">Presentación personalizada según necesidades</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-white/20 flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                      </div>
                      <span className="text-base font-medium">Respuesta a todas sus preguntas por expertos</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 lg:p-8 flex items-center justify-center">
                  <div className="w-full">
                    <div 
                      className="calendly-inline-widget" 
                      data-url="https://calendly.com/robotsconsultant" 
                      style={{minWidth: '300px', height: '500px'}}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <Card className="border border-white/10 shadow-xl bg-white/[0.03] backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col items-center space-y-8">
                <div className="flex items-center gap-4 mb-4">
                  <Youtube className="w-12 h-12 text-red-500" />
                  <h3 className="text-3xl font-bold text-white">Canal Educativo YouTube</h3>
                </div>
                
                <p className="text-xl leading-relaxed max-w-3xl text-gray-400">
                  Mantente al día con las últimas tendencias en <strong className="text-white">automatización</strong>, <strong className="text-white">robótica</strong> e <strong className="text-white">inteligencia artificial</strong>. 
                  Cada semana subimos contenido educativo especializado para PyMEs y noticias interesantes del sector.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-lg text-gray-300">Automatizaciones para PyMEs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-lg text-gray-300">Tutoriales de Robótica</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-lg text-gray-300">Noticias de IA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-lg text-gray-300">Videos semanales</span>
                  </div>
                </div>

                <div className="w-full mt-8">
                  <h4 className="text-2xl font-bold mb-6 text-white">Últimos Videos</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white/[0.05] border border-white/10 rounded-lg p-4">
                      <div className="aspect-video bg-black rounded-lg mb-3 overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/sOLfQvYjSNs"
                          title="Los Agentes de IA, ¿Que son, te reemplazarán en 2025?"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <h5 className="font-semibold text-lg mb-2 text-white">Los Agentes de IA, ¿Que son, te reemplazarán en 2025?</h5>
                      <p className="text-sm text-gray-400">Descubre cómo los agentes de IA están cambiando el panorama laboral</p>
                    </div>
                    
                    <div className="bg-white/[0.05] border border-white/10 rounded-lg p-4">
                      <div className="aspect-video bg-black rounded-lg mb-3 overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/kh0oYd_EkZk"
                          title="Resumen rápido de las ultimas novedades de la Google IO 2025"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <h5 className="font-semibold text-lg mb-2 text-white">Resumen rápido de las ultimas novedades de la Google IO 2025</h5>
                      <p className="text-sm text-gray-400">Las últimas novedades de la Google IO 2025 en un solo lugar</p>
                    </div>
                    
                    <div className="bg-white/[0.05] border border-white/10 rounded-lg p-4">
                      <div className="aspect-video bg-black rounded-lg mb-3 overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/rTa7yggFCKU"
                          title="¿Por Qué Unos Robots BAILAN y Otros CHOCAN? 🤖 | Tipos de Robots Móviles EXPLICADO"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <h5 className="font-semibold text-lg mb-2 text-white">¿Por Qué Unos Robots BAILAN y Otros CHOCAN? 🤖 | Tipos de Robots Móviles EXPLICADO</h5>
                      <p className="text-sm text-gray-400">Las últimas tendencias en robots móviles, que son, cuales existen y como se utilizan en la industria</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg mt-6"
                >
                  <Youtube className="w-6 h-6" />
                  Suscríbete a Nuestro Canal
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
