import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ContactCTA = () => {
  // Load HubSpot script when component mounts
  useEffect(() => {
    // Create a script element for HubSpot
    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/146031285.js';
    script.defer = true;
    
    // Add the script to the document
    document.head.appendChild(script);
    
    // Cleanup function to remove the script when component unmounts
    return () => {
      // Find and remove the script
      const scripts = document.head.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.includes('js-eu1.hsforms.net/forms/embed/146031285.js')) {
          document.head.removeChild(scripts[i]);
          break;
        }
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section id="contacto" className="section bg-gradient-to-b from-black to-white-500 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white md:text-4xl font-bold mb-6">
            ¿LISTO PARA <span className="text-blue-700">REVOLUCIONAR</span> SU NEGOCIO?
          </h2>
          <p className="text-lg text-bg-robotics-white mb-6">
            En <span className="text-robot-600">RobotsConsultant</span> ofrecemos soluciones robóticas personalizadas para su empresa. 
            Desde robots móviles hasta brazos robóticos, tenemos la tecnología que necesita para optimizar sus procesos.
          </p>
          <p className="text-lg text-bg-robotics-white mb-6">
            No espere más para incorporar el futuro a su establecimiento. 
            Nuestros robots están disponibles en diferentes modalidades adaptadas a sus necesidades.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gradient-to-br from-robot-600 to-tech-700 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">SOLICITE UNA ASESORIA GRATUITA</h3>
                  <p className="mb-6">
                    Compruebe en persona el impacto de nuestros robots. Le visitamos sin compromiso para mostrarle cómo pueden transformar su negocio.
                  </p>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-white/20 flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span>Demostraciónes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-white/20 flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span>Presentación personalizada según necesidades</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-white/20 flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                      </div>
                      <span>Respuesta a todas sus preguntas por expertos</span>
                    </div>
                  </div>
                </div>
                
                  <div 
                    className="hs-form-frame" 
                    data-region="eu1" 
                    data-form-id="3ed163b6-4dee-4555-8c12-943c18ade29a" 
                    data-portal-id="146031285">
                  </div>
                </div>
  
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

