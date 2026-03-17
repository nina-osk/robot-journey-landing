import { ArrowLeft, CheckCircle, MessageSquare, Calendar, BarChart3, Shield, Users, Clock, Star, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

const PacksPorSector = () => {
  const [selectedPack, setSelectedPack] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Necesito saber de tecnología para usar vuestros packs?",
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
        "name": "¿Cuánto tarda la instalación en una tienda online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Desde 3 a 7 días, dependiendo del tamaño de tu catálogo."
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
        "name": "¿Puedo pagar en cuotas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ofrecemos opciones de financiación."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <div className="pt-20">
        {/* Header Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-[#667eea] hover:text-blue-700 mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Volver al inicio
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                🧩 Soluciones por tipo de negocio
              </h1>
              <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-400">
                <p>
                  <strong>Otros negocios se están digitalizando y tú te sientes estancado y sin tiempo.</strong>
                </p>
                <p>
                  ¿Tu negocio necesita digitalizarse pero no sabes por dónde empezar?
                </p>
                <p>
                  No tienes tiempo para aprender herramientas complejas pero necesitas datos y reportes para tomar decisiones.
                </p>
                <p className="text-xl text-blue-700 font-semibold">
                  Descubre nuestros packs diseñados para restaurantes, hoteles y tiendas online.
                  <br />
                  Automatiza, ahorra tiempo y aumenta tus ingresos sin complicaciones técnicas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Packs Grid Section */}
        <section className="py-16 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pack Restaurantes */}
              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-green-400 bg-gradient-to-br from-green-50 to-emerald-50 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">🍽️</div>
                  <CardTitle className="text-2xl font-bold text-green-800">
                    Pack Restaurantes
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-green-700">
                    Supervivencia Rentable para Restaurantes
                  </CardDescription>
                  <p className="text-[#667eea] mt-2">
                    Automatiza pedidos, atención y gestión sin depender del dueño.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#667eea] mr-3" />
                      <span>TPV + cocina + menú QR</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#667eea] mr-3" />
                      <span>WhatsApp Bot</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#667eea] mr-3" />
                      <span>Gestión de mesas</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#667eea] mr-3" />
                      <span>Sistema de fidelización</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#667eea] mr-3" />
                      <span>Reservas y reportes</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:transition-all hover:shadow-[#667eea]/40"
                    onClick={() => scrollToSection('pack-restaurantes')}
                  >
                    Ver detalles
                  </Button>
                </CardContent>
              </Card>

              {/* Pack Hoteles */}
              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-400 bg-gradient-to-br from-blue-50 to-sky-50 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">🏨</div>
                  <CardTitle className="text-2xl font-bold text-blue-800">
                    Pack Hoteles
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-blue-700">
                    Supervivencia Rentable para Hoteles
                  </CardDescription>
                  <p className="text-[#667eea] mt-2">
                    Moderniza la recepción, reservas y atención al huésped.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#667eea] mr-3" />
                      <span>Motor de reservas + check-in digital</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#667eea] mr-3" />
                      <span>WhatsApp Bot</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#667eea] mr-3" />
                      <span>Sistema de fidelización</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#667eea] mr-3" />
                      <span>Gestión de reservas y servicios</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#667eea] mr-3" />
                      <span>Facturación integrada</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#667eea] mr-3" />
                      <span>Portal del huésped</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#667eea] mr-3" />
                      <span>Gestión interna y reportes</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:transition-all hover:shadow-[#667eea]/40"
                    onClick={() => scrollToSection('pack-hoteles')}
                  >
                    Ver detalles
                  </Button>
                </CardContent>
              </Card>

              {/* Pack eCommerce */}
              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-yellow-400 bg-gradient-to-br from-yellow-50 to-white/[0.03] bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <CardTitle className="text-2xl font-bold text-orange-800">
                    Pack Retail y Tiendas Online
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-orange-700">
                    Supervivencia Rentable para eCommerce
                  </CardDescription>
                  <p className="text-[#764ba2] mt-2">
                    Automatiza ventas, atención, pagos y envíos para escalar.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#764ba2] mr-3" />
                      <span>Tienda online profesional</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#764ba2] mr-3" />
                      <span>WhatsApp Bot</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#764ba2] mr-3" />
                      <span>Gestión de stock</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#764ba2] mr-3" />
                      <span>CRM Integrado</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#764ba2] mr-3" />
                      <span>E-commerce conectado</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#764ba2] mr-3" />
                      <span>Sistema de fidelización</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#764ba2] mr-3" />
                      <span>Integración con pagos y envíos</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:transition-all hover:shadow-[#667eea]/40"
                    onClick={() => scrollToSection('pack-ecommerce')}
                  >
                    Ver detalles
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Pack Sections */}
        
        {/* Pack Restaurantes Detail */}
        <section id="pack-restaurantes" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-8xl mb-6">🍽️</div>
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                Digitaliza tu Restaurante sin Complicaciones
              </h2>
              <p className="text-xl text-green-700 max-w-4xl mx-auto leading-relaxed mb-8">
                Transforma tu restaurante en una operación eficiente y automatizada que mejora la experiencia del cliente, 
                reduce errores y aumenta la rentabilidad… sin depender de ti todo el tiempo.
              </p>
              <Button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:transition-all hover:shadow-[#667eea]/40 text-white px-8 py-4 text-lg font-semibold">
                👉 Quiero digitalizar mi restaurante ahora
              </Button>
            </div>

            {/* Problemas */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
                  😩 ¿Te suena familiar?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Pierdes pedidos por errores humanos o falta de atención rápida.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Colas largas que afectan la experiencia del cliente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Tienes que estar presente todo el tiempo para que las cosas funcionen.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Tus procesos son manuales y te quitan horas valiosas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Falta de control de inventario (productos que se acaban sin aviso)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Sientes que la tecnología es cara o muy complicada.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Dificultad para fidelizar clientes o hacer seguimiento</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#667eea] mb-6 flex items-center">
                  ✅ Tenemos la solución perfecta para ti
                </h3>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-green-700 mb-4">Pack de Digitalización para Restaurantes</h4>
                  <p className="text-gray-300 mb-4">
                    Automatiza tu atención, ventas y gestión con herramientas simples, efectivas y listas para usar.
                  </p>
                  <div className="text-sm font-semibold text-[#667eea] mb-4">Incluye:</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                      <span>TPV conectado con cocina y caja.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                      <span>Menú digital con código QR.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                      <span>Pedidos automatizados por WhatsApp.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                      <span>Gestión de reservas y entregas.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                      <span>Control de inventario y compras.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                      <span>Reportes de ventas en tiempo real.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                      <span>Integración con Odoo + Make/n8n.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonios */}
            <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl mb-16">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                💬 Lo que dicen nuestros clientes
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">
                    "Antes tenía que estar en el restaurante todo el día. Ahora todo fluye solo. 
                    Las reservas, los pedidos, la caja… ¡hasta los reportes me llegan al móvil!"
                  </p>
                  <p className="font-semibold text-[#667eea]">— Laura, dueña de restaurante en Valencia</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">
                    "Automatizamos la atención por WhatsApp y aumentamos las ventas un 30% en dos meses."
                  </p>
                  <p className="font-semibold text-[#667eea]">— Carlos, restaurante de comida rápida en Madrid</p>
                </div>
              </div>
            </div>

            {/* Por qué elegirnos */}
            <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-2xl p-8 shadow-xl mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">
                🎯 ¿Por qué elegirnos?
              </h3>
              <div className="grid md:grid-cols-5 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🚀</div>
                  <p className="font-semibold">Sin conocimientos técnicos</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="font-semibold">Implementación en pocos días</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎓</div>
                  <p className="font-semibold">Formación incluida</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🤝</div>
                  <p className="font-semibold">Soporte cercano y en tu idioma</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <p className="font-semibold">Packs adaptados a tu tipo de restaurante</p>
                </div>
              </div>
            </div>

            {/* Tabla de funciones */}
            <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl mb-16">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                📦 ¿Qué incluye el Pack "Supervivencia Rentable"?
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-green-200">
                      <th className="text-left py-4 px-6 font-bold text-green-800">Módulo</th>
                      <th className="text-left py-4 px-6 font-bold text-green-800">Función</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">TPV + Cocina</td>
                      <td className="py-4 px-6">Flujo de pedidos sin errores</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">WhatsApp Bot</td>
                      <td className="py-4 px-6">Atención automática 24/7</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">Menú QR</td>
                      <td className="py-4 px-6">Sin contacto, sin papel</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">Reservas Online</td>
                      <td className="py-4 px-6">Ahorra tiempo y evita confusiones</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">Reportes</td>
                      <td className="py-4 px-6">Control total desde tu móvil</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold">Soporte</td>
                      <td className="py-4 px-6">Te acompañamos paso a paso</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl mb-16">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                ❓ Preguntas Frecuentes
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">¿Necesito saber de tecnología?</h4>
                  <p className="text-gray-300">No. Nosotros lo dejamos todo listo para que solo tengas que usarlo.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">¿Cuánto tarda la instalación?</h4>
                  <p className="text-gray-300">Desde 3 a 7 días, dependiendo del tamaño de tu restaurante.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">¿Puedo pagar en cuotas?</h4>
                  <p className="text-gray-300">Sí, ofrecemos opciones de financiación.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                📞 ¿Listo para transformar tu restaurante?
              </h3>
              <p className="text-green-100 mb-6">
                Completa el formulario y recibe un diagnóstico gratuito sin compromiso.
              </p>
              <Button className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] text-[#667eea] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                👉 Solicitar diagnóstico gratuito
              </Button>
            </div>
          </div>
        </section>

        {/* Pack eCommerce Detail */}
        <section id="pack-ecommerce" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-8xl mb-6">🛒</div>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">
                Convierte tu Tienda Online en una Máquina de Ventas Automatizada
              </h2>
              <p className="text-xl text-orange-700 max-w-4xl mx-auto leading-relaxed mb-8">
                Transforma tu eCommerce en una plataforma profesional que integra ventas, atención, pagos y envíos,
                para escalar sin perder tiempo en tareas manuales ni depender de terceros.
              </p>
              <Button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:transition-all hover:shadow-[#667eea]/40 text-white px-8 py-4 text-lg font-semibold">
                👉 Quiero automatizar mi tienda ahora
              </Button>
            </div>

            {/* Problemas y Soluciones */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-red-600 mb-6">
                  😩 ¿Tu tienda enfrenta estos problemas?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Tienes que responder manualmente cada mensaje o pedido.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Pierdes tiempo gestionando pagos, envíos y stock, por falta de integración entre ventas, inventario y atención.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>No hay automatización en el seguimiento de envíos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Problemas de pagos, envíos y devoluciones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Tu tienda no parece profesional y eso afecta la confianza.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>No sabes cómo conectar todo sin gastar una fortuna.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#764ba2] mb-6">
                  ✅ Solución lista para escalar: Pack de Digitalización para eCommerce
                </h3>
                <p className="text-gray-300 mb-4">
                  Automatiza tu tienda online con herramientas que trabajan por ti, mientras tú te enfocas en vender más.
                </p>
                <div className="text-sm font-semibold text-[#764ba2] mb-4">Incluye:</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#764ba2] mr-2" />
                    <span>Tienda online profesional con diseño responsive.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#764ba2] mr-2" />
                    <span>Atención automatizada por WhatsApp.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#764ba2] mr-2" />
                    <span>Integración con pasarelas de pago y envíos.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#764ba2] mr-2" />
                    <span>Gestión de productos, stock y pedidos.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#764ba2] mr-2" />
                    <span>Facturación automática y reportes de ventas.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#764ba2] mr-2" />
                    <span>Integración con Odoo + Make/n8n.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Testimonios */}
            <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl mb-16">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                💬 Lo que dicen nuestros clientes
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">
                    "Antes tenía que hacer todo manual. Ahora los pedidos se procesan solos, los pagos se confirman y los envíos se gestionan automáticamente."
                  </p>
                  <p className="font-semibold text-[#764ba2]">— Lucía, tienda de cosmética natural</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">
                    "Automatizamos la atención por WhatsApp y duplicamos las conversiones en menos de un mes."
                  </p>
                  <p className="font-semibold text-[#764ba2]">— David, tienda de gadgets tecnológicos</p>
                </div>
              </div>
            </div>

            {/* Por qué elegirnos */}
            <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-2xl p-8 shadow-xl mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">
                🎯 ¿Por qué elegirnos?
              </h3>
              <div className="grid md:grid-cols-5 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🚀</div>
                  <p className="font-semibold">Sin conocimientos técnicos</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="font-semibold">Implementación rápida y personalizada</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎓</div>
                  <p className="font-semibold">Formación incluida para ti o tu equipo</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🤝</div>
                  <p className="font-semibold">Soporte cercano y en tu idioma</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <p className="font-semibold">Packs adaptados a tu tipo de tienda</p>
                </div>
              </div>
            </div>

            {/* Tabla de funciones */}
            <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl mb-16">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                📦 ¿Qué incluye el Pack "Supervivencia Rentable" para eCommerce?
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-orange-200">
                      <th className="text-left py-4 px-6 font-bold text-orange-800">Módulo</th>
                      <th className="text-left py-4 px-6 font-bold text-orange-800">Función</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">Tienda Online</td>
                      <td className="py-4 px-6">Diseño profesional y funcional</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">WhatsApp Bot</td>
                      <td className="py-4 px-6">Atención automática 24/7</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">Pagos y Envíos</td>
                      <td className="py-4 px-6">Integración con pasarelas y operadores</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">Gestión de Stock</td>
                      <td className="py-4 px-6">Control total de inventario</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">Reportes</td>
                      <td className="py-4 px-6">Ventas, clientes y productos en tiempo real</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold">Soporte</td>
                      <td className="py-4 px-6">Te acompañamos paso a paso</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl mb-16">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                ❓ Preguntas Frecuentes
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">¿Necesito saber de tecnología?</h4>
                  <p className="text-gray-300">No. Nosotros lo dejamos todo listo para que solo tengas que usarlo.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">¿Cuánto tarda la instalación?</h4>
                  <p className="text-gray-300">Desde 3 a 7 días, dependiendo del tamaño de tu catálogo.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">¿Puedo pagar en cuotas?</h4>
                  <p className="text-gray-300">Sí, ofrecemos opciones de financiación.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                📞 ¿Listo para escalar tu tienda online?
              </h3>
              <p className="text-orange-100 mb-6">
                Completa el formulario y recibe un diagnóstico gratuito sin compromiso.
              </p>
              <Button className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] text-[#764ba2] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                👉 Solicitar diagnóstico gratuito
              </Button>
            </div>
          </div>
        </section>

        {/* Pack Hoteles Detail */}
        <section id="pack-hoteles" className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-8xl mb-6">🏨</div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
                Digitaliza tu Hotel sin Complicaciones Técnicas
              </h2>
              <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed mb-8">
                Automatiza la recepción, reservas y atención al huésped para ofrecer una experiencia moderna y fluida,
                mientras optimizas la gestión interna sin depender de expertos ni perder tiempo.
              </p>
              <Button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:transition-all hover:shadow-[#667eea]/40 text-white px-8 py-4 text-lg font-semibold">
                👉 Quiero modernizar mi hotel ahora
              </Button>
            </div>

            {/* Problemas y Soluciones */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-red-600 mb-6">
                  😩 ¿Tu hotel enfrenta estos problemas?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Reservas manuales que generan errores y confusión.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Check-in lento y poco profesional, falta de recepción de huéspedes las 24 horas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Atención al huésped lenta o poco profesional.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Procesos internos desorganizados y sin control.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Tecnología costosa o difícil de implementar.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>Dificultad para gestionar pagos, facturas y cero reportes por falta de tiempo.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <span>No tienes CRM para seguimiento y fidelización de clientes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#667eea] mb-6">
                  ✅ Solución lista para usar: Pack de Digitalización para Hoteles
                </h3>
                <p className="text-gray-300 mb-4">
                  Automatiza tu hotel desde la recepción hasta la gestión interna con herramientas simples, efectivas y adaptadas a tu tamaño.
                </p>
                <div className="text-sm font-semibold text-[#667eea] mb-4">Incluye:</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                    <span>Motor de reservas online integrado.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                    <span>Atención automatizada por WhatsApp.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                    <span>Check-in y check-out digital.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                    <span>Gestión de habitaciones, limpieza y mantenimiento.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                    <span>Facturación automática y reportes en tiempo real.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#667eea] mr-2" />
                    <span>Integración con Odoo + Make/n8n.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Testimonios */}
            <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl mb-16">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                💬 Lo que dicen nuestros clientes
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">
                    "Ahora los huéspedes reservan online, reciben atención por WhatsApp y hacen check-in sin pasar por recepción. ¡Mi hotel parece de 5 estrellas!"
                  </p>
                  <p className="font-semibold text-[#667eea]">— Ana, hotel boutique en Málaga</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">
                    "Automatizamos todo y ahora tengo más tiempo para mejorar la experiencia del cliente."
                  </p>
                  <p className="font-semibold text-[#667eea]">— Jorge, hostal en Salamanca</p>
                </div>
              </div>
            </div>

            {/* Por qué elegirnos */}
            <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-2xl p-8 shadow-xl mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">
                🎯 ¿Por qué elegirnos?
              </h3>
              <div className="grid md:grid-cols-5 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🚀</div>
                  <p className="font-semibold">Sin conocimientos técnicos</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="font-semibold">Implementación rápida y personalizada</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎓</div>
                  <p className="font-semibold">Formación incluida para tu equipo</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🤝</div>
                  <p className="font-semibold">Soporte cercano y en tu idioma</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <p className="font-semibold">Packs adaptados a hoteles pequeños y medianos</p>
                </div>
              </div>
            </div>

            {/* Tabla de funciones */}
            <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl mb-16">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                📦 ¿Qué incluye el Pack "Supervivencia Rentable" para Hoteles?
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-blue-200">
                      <th className="text-left py-4 px-6 font-bold text-blue-800">Módulo</th>
                      <th className="text-left py-4 px-6 font-bold text-blue-800">Función</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">Reservas Online</td>
                      <td className="py-4 px-6">Evita errores y aumenta ocupación</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">WhatsApp Bot</td>
                      <td className="py-4 px-6">Atención rápida y profesional</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">Check-in Digital</td>
                      <td className="py-4 px-6">Ahorra tiempo y mejora la experiencia</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">Gestión Interna</td>
                      <td className="py-4 px-6">Limpieza, mantenimiento y habitaciones</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-semibold">Reportes</td>
                      <td className="py-4 px-6">Control total desde tu móvil</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold">Soporte</td>
                      <td className="py-4 px-6">Te acompañamos paso a paso</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] rounded-2xl p-8 shadow-xl mb-16">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                ❓ Preguntas Frecuentes
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">¿Necesito saber de tecnología?</h4>
                  <p className="text-gray-300">No. Nosotros lo dejamos todo listo para que solo tengas que usarlo.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">¿Cuánto tarda la instalación?</h4>
                  <p className="text-gray-300">Desde 3 a 7 días, dependiendo del tamaño de tu hotel.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">¿Puedo pagar en cuotas?</h4>
                  <p className="text-gray-300">Sí, ofrecemos opciones de financiación.</p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                📞 ¿Listo para transformar tu hotel?
              </h3>
              <p className="text-blue-100 mb-6">
                Completa el formulario y recibe un diagnóstico gratuito sin compromiso.
              </p>
              <Button className="bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.05] border-white/10 hover:bg-white/[0.08] text-[#667eea] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                👉 Solicitar diagnóstico gratuito
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default PacksPorSector;