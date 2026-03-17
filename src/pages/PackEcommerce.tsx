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
      "name": "¿Necesito saber de tecnología para automatizar mi tienda online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Nosotros lo dejamos todo listo para que solo tengas que usarlo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda la instalación del pack eCommerce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Desde 3 a 7 días, dependiendo del tamaño de tu catálogo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo pagar en cuotas el pack eCommerce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrecemos opciones de financiación."
      }
    }
  ]
};

const PackEcommerce = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#0a0a0a] to-white/[0.03]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Convierte tu Tienda Online en una Máquina de Ventas Automatizada
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Transforma tu eCommerce en una plataforma profesional que integra ventas, atención, pagos y envíos,
            para escalar sin perder tiempo en tareas manuales ni depender de terceros.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:transition-all hover:shadow-[#667eea]/40 text-white">
            👉 Quiero automatizar mi tienda ahora
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.03]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-4">😩 ¿Tu tienda enfrenta estos problemas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Tienes que responder manualmente cada mensaje o pedido',
              'Pierdes tiempo gestionando pagos, envíos y stock, por falta de integración entre ventas, inventario y atención',
              'No hay automatización en el seguimiento de envíos',
              'Problemas de pagos, envíos y devoluciones',
              'Tu tienda no parece profesional y eso afecta la confianza',
              'No sabes cómo conectar todo sin gastar una fortuna'
            ].map((problem, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.03]0 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.03]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              ✅ Solución lista para escalar: Pack de Digitalización para eCommerce
            </h2>
            <p className="text-lg text-gray-400">
              Automatiza tu tienda online con herramientas que trabajan por ti, mientras tú te enfocas en vender más.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Tienda online profesional con diseño responsive',
              'Atención automatizada por WhatsApp',
              'Integración con pasarelas de pago y envíos',
              'Gestión de productos, stock y pedidos',
              'Facturación automática y reportes de ventas',
              'Integración con Odoo + Make/n8n'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-[#0a0a0a] p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#667eea] flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.03]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">💬 Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-400 mb-4">
                  "Antes tenía que hacer todo manual. Ahora los pedidos se procesan solos, los pagos se confirman y los envíos se gestionan automáticamente."
                </p>
                <p className="font-semibold text-white">— Lucía, tienda de cosmética natural</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-400 mb-4">
                  "Automatizamos la atención por WhatsApp y duplicamos las conversiones en menos de un mes."
                </p>
                <p className="font-semibold text-white">— David, tienda de gadgets tecnológicos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Table */}
      <section className="py-16 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            📦 ¿Qué incluye el Pack "Supervivencia Rentable" para eCommerce?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.03]">
                  <th className="border border-gray-300 p-4 text-left font-semibold">Módulo</th>
                  <th className="border border-gray-300 p-4 text-left font-semibold">Función</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tienda Online', 'Diseño profesional y funcional'],
                  ['WhatsApp Bot', 'Atención automática 24/7'],
                  ['Pagos y Envíos', 'Integración con pasarelas y operadores'],
                  ['Gestión de Stock', 'Control total de inventario'],
                  ['Reportes', 'Ventas, clientes y productos en tiempo real'],
                  ['Soporte', 'Te acompañamos paso a paso']
                ].map(([module, func], index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-white/[0.03]'}>
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
      <section className="py-16 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.03]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">❓ Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Necesito saber de tecnología?',
                a: 'No. Nosotros lo dejamos todo listo para que solo tengas que usarlo.'
              },
              {
                q: '¿Cuánto tarda la instalación?',
                a: 'Desde 3 a 7 días, dependiendo del tamaño de tu catálogo.'
              },
              {
                q: '¿Puedo pagar en cuotas?',
                a: 'Sí, ofrecemos opciones de financiación.'
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">📞 ¿Listo para escalar tu tienda online?</h2>
          <p className="text-xl mb-8">
            Completa el formulario y recibe un diagnóstico gratuito sin compromiso.
          </p>
          <Button size="lg" className="bg-[#0a0a0a] text-purple-600 hover:bg-gray-100">
            👉 Solicitar diagnóstico gratuito
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackEcommerce;