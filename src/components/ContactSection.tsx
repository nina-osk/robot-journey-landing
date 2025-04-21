
import { useState } from 'react';
import { Button } from '@/components/ui/button';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log({ name, email, course, message });
    // Reset form
    setName('');
    setEmail('');
    setCourse('');
    setMessage('');
    // Show success message
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section id="enroll" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <span className="inline-block bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                Comienza Hoy Mismo
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-6">
                ¿Listo para Avanzar en tu Carrera?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Completa el formulario a continuación para inscribirte en uno de nuestros cursos de robótica o para solicitar más información.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-robotics-blue/50 focus:border-robotics-blue"
                    placeholder="Ingresa tu nombre completo"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-robotics-blue/50 focus:border-robotics-blue"
                    placeholder="Ingresa tu correo electrónico"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                    Curso de Interés
                  </label>
                  <select
                    id="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-robotics-blue/50 focus:border-robotics-blue"
                    required
                  >
                    <option value="">Selecciona un curso</option>
                    <option value="ur">Universal Robots (UR)</option>
                    <option value="kuka">Programación de Robots KUKA</option>
                    <option value="ros">Robot Operating System (ROS)</option>
                    <option value="bundle">Paquete Completo</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje (Opcional)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-robotics-blue/50 focus:border-robotics-blue"
                    placeholder="¿Alguna pregunta o requisito especial?"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-robotics-blue hover:bg-robotics-blue/90 text-white py-3 rounded-md"
                >
                  Enviar Solicitud de Inscripción
                </Button>
              </form>
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

