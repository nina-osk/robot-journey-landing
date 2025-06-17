
import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

// NUEVAS PREGUNTAS FRECUENTES
const FAQs = [
  {
    question: '¿Puedo alquilar un robot por días o solo por meses?',
    answer: 'Ofrecemos opciones flexibles de alquiler: puedes alquilar por días, semanas o meses según tus necesidades específicas.'
  },
  {
    question: '¿El soporte técnico está incluido en la compra o alquiler?',
    answer: 'Sí, tanto en la venta como en el alquiler de robots, tienes acceso a soporte técnico especializado sin costo adicional.'
  },
  {
    question: '¿Realizan envíos a cualquier parte del país?',
    answer: 'Entregamos robots y piezas en toda la República. Consulta condiciones especiales para envíos internacionales.'
  }
];

const ContactSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section id="enroll" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* HubSpot Form */}
            <div className="animate-fade-in-up">
              <span className="inline-block bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                Comienza Hoy Mismo
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-6">
                ¿Listo para Avanzar en tu Carrera?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Completa el formulario a continuación para solicitar más información sobre nuestros robots colaborativos y servicios.
              </p>
              
              <div className="hs-form-frame" data-region="eu1" data-form-id="3ed163b6-4dee-4555-8c12-943c18ade29a" data-portal-id="146031285"></div>
            </div>
            
            {/* FAQs */}
            <div className="animate-fade-in-up delay-300">
              <span className="inline-block bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                Preguntas Frecuentes
              </span>
              <h2 className="text-3xl font-bold text-robotics-dark mb-6">
                Preguntas Comunes
              </h2>
              <div className="space-y-4">
                {FAQs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="glass-card rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 flex justify-between items-center text-left"
                    >
                      <span className="font-medium text-robotics-dark">{faq.question}</span>
                      {expandedFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-robotics-blue" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 rounded-xl border border-robotics-blue/20 bg-robotics-blue/5">
                <h3 className="text-xl font-semibold text-robotics-dark mb-4">
                  Nuestra Garantía
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-robotics-blue shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">Garantía de devolución de dinero de 14 días</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-robotics-blue shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">Acceso de por vida a los materiales del curso</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-robotics-blue shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">Certificado al completar con éxito</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-robotics-blue shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">Soporte dedicado durante tu proceso de aprendizaje</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
