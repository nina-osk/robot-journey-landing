import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Users, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Necesito saber de tecnología para digitalizar mi hotel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Nosotros lo dejamos todo listo para que solo tengas que usarlo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda la instalación en un hotel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Desde 3 a 7 días, dependiendo del tamaño de tu hotel."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo pagar en cuotas el pack para hotel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrecemos opciones de financiación."
      }
    }
  ]
};

const PackHotel = () => {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🏨</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Digitaliza tu Hotel sin Complicaciones Técnicas
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Automatiza la recepción, reservas y atención al huésped para ofrecer una experiencia moderna y fluida,
            mientras optimizas la gestión interna sin depender de expertos ni perder tiempo.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            👉 Quiero modernizar mi hotel ahora
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">😩 ¿Tu hotel enfrenta estos problemas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Reservas manuales que generan errores y confusión',
              'Check-in lento y poco profesional, falta de recepción de huéspedes las 24 horas',
              'Atención al huésped lenta o poco profesional',
              'Procesos internos desorganizados y sin control',
              'Tecnología costosa o difícil de implementar',
              'Dificultad para gestionar pagos, facturas y cero reportes por falta de tiempo',
              'No tienes CRM para seguimiento y fidelización de clientes'
            ].map((problem, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ✅ Solución lista para usar: Pack de Digitalización para Hoteles
            </h2>
            <p className="text-lg text-gray-600">
              Automatiza tu hotel desde la recepción hasta la gestión interna con herramientas simples, efectivas y adaptadas a tu tamaño.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Motor de reservas online integrado',
              'Atención automatizada por WhatsApp',
              'Check-in y check-out digital',
              'Gestión de habitaciones, limpieza y mantenimiento',
              'Facturación automática y reportes en tiempo real',
              'Integración con Odoo + Make/n8n'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">💬 Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Ahora los huéspedes reservan online, reciben atención por WhatsApp y hacen check-in sin pasar por recepción. 
                  ¡Mi hotel parece de 5 estrellas!"
                </p>
                <p className="font-semibold text-gray-900">— Ana, hotel boutique en Málaga</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Automatizamos todo y ahora tengo más tiempo para mejorar la experiencia del cliente."
                </p>
                <p className="font-semibold text-gray-900">— Jorge, hostal en Salamanca</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📦 ¿Qué incluye el Pack "Supervivencia Rentable" para Hoteles?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-4 text-left font-semibold">Módulo</th>
                  <th className="border border-gray-300 p-4 text-left font-semibold">Función</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Reservas Online', 'Evita errores y aumenta ocupación'],
                  ['WhatsApp Bot', 'Atención rápida y profesional'],
                  ['Check-in Digital', 'Ahorra tiempo y mejora la experiencia'],
                  ['Gestión Interna', 'Limpieza, mantenimiento y habitaciones'],
                  ['Reportes', 'Control total desde tu móvil'],
                  ['Soporte', 'Te acompañamos paso a paso']
                ].map(([module, func], index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 p-4 font-medium">{module}</td>
                    <td className="border border-gray-300 p-4">{func}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">❓ Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Necesito saber de tecnología?',
                a: 'No. Nosotros lo dejamos todo listo para que solo tengas que usarlo.'
              },
              {
                q: '¿Cuánto tarda la instalación?',
                a: 'Desde 3 a 7 días, dependiendo del tamaño de tu hotel.'
              },
              {
                q: '¿Puedo pagar en cuotas?',
                a: 'Sí, ofrecemos opciones de financiación.'
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">📞 ¿Listo para transformar tu hotel?</h2>
          <p className="text-xl mb-8">
            Completa el formulario y recibe un diagnóstico gratuito sin compromiso.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            👉 Solicitar diagnóstico gratuito
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackHotel;