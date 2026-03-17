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
      "name": "¿Necesito saber de tecnología para digitalizar mi restaurante?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Nosotros lo dejamos todo listo para que solo tengas que usarlo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda la instalación en un restaurante?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Desde 3 a 7 días, dependiendo del tamaño de tu restaurante."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo pagar en cuotas el pack para restaurante?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrecemos opciones de financiación."
      }
    }
  ]
};

const PackRestaurante = () => {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🍽️</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Digitaliza tu Restaurante sin Complicaciones
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transforma tu restaurante en una operación eficiente y automatizada que mejora la experiencia del cliente, 
            reduce errores y aumenta la rentabilidad… sin depender de ti todo el tiempo.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
            👉 Quiero digitalizar mi restaurante ahora
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">😩 ¿Te suena familiar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Pierdes pedidos por errores humanos o falta de atención rápida',
              'Colas largas que afectan la experiencia del cliente',
              'Tienes que estar presente todo el tiempo para que las cosas funcionen',
              'Tus procesos son manuales y te quitan horas valiosas',
              'Falta de control de inventario (productos que se acaban sin aviso)',
              'Sientes que la tecnología es cara o muy complicada',
              'Dificultad para fidelizar clientes o hacer seguimiento'
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
              ✅ Tenemos la solución perfecta para ti
            </h2>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Pack de Digitalización para Restaurantes
            </h3>
            <p className="text-lg text-gray-600">
              Automatiza tu atención, ventas y gestión con herramientas simples, efectivas y listas para usar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'TPV conectado con cocina y caja',
              'Menú digital con código QR',
              'Pedidos automatizados por WhatsApp',
              'Gestión de reservas y entregas',
              'Control de inventario y compras',
              'Reportes de ventas en tiempo real',
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
                  "Antes tenía que estar en el restaurante todo el día. Ahora todo fluye solo. 
                  Las reservas, los pedidos, la caja… ¡hasta los reportes me llegan al móvil!"
                </p>
                <p className="font-semibold text-gray-900">— Laura, dueña de restaurante en Valencia</p>
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
                  "Automatizamos la atención por WhatsApp y aumentamos las ventas un 30% en dos meses."
                </p>
                <p className="font-semibold text-gray-900">— Carlos, restaurante de comida rápida en Madrid</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📦 ¿Qué incluye el Pack "Supervivencia Rentable"?
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
                  ['TPV + Cocina', 'Flujo de pedidos sin errores'],
                  ['WhatsApp Bot', 'Atención automática 24/7'],
                  ['Menú QR', 'Sin contacto, sin papel'],
                  ['Reservas Online', 'Ahorra tiempo y evita confusiones'],
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
                a: 'Desde 3 a 7 días, dependiendo del tamaño de tu restaurante.'
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
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">📞 ¿Listo para transformar tu restaurante?</h2>
          <p className="text-xl mb-8">
            Completa el formulario y recibe un diagnóstico gratuito sin compromiso.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            👉 Solicitar diagnóstico gratuito
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackRestaurante;