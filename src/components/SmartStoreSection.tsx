import { Button } from '@/components/ui/button';

const SmartStoreSection = () => {
  const features = [
    {
      icon: '🤖',
      title: 'Agente IA Integrado',
      description: 'Asistente virtual inteligente que atiende a tus clientes 24/7, responde preguntas y guía el proceso de compra de manera personalizada.'
    },
    {
      icon: '🛍️',
      title: 'Shopify Optimizado',
      description: 'Tiendas online profesionales en Shopify, completamente personalizadas y optimizadas para conversión y experiencia de usuario.'
    },
    {
      icon: '🔗',
      title: 'Integración con Odoo',
      description: 'Sincronización perfecta con tu ERP Odoo para gestión unificada de inventario, pedidos, contabilidad y operaciones.'
    },
    {
      icon: '📸',
      title: 'Imágenes IA Hiperrealistas',
      description: 'Creación de contenido visual impactante con inteligencia artificial para tus campañas publicitarias y productos.'
    },
    {
      icon: '📊',
      title: 'Analytics Avanzado',
      description: 'Dashboards inteligentes que te permiten tomar decisiones basadas en datos reales del comportamiento de tus clientes.'
    },
    {
      icon: '🚀',
      title: 'Escalabilidad Total',
      description: 'Infraestructura preparada para crecer con tu negocio, desde startup hasta enterprise, sin límites técnicos.'
    }
  ];

  const services = [
    {
      number: '01',
      title: 'E-commerce Inteligente',
      description: 'Desarrollamos tu tienda Shopify con agentes de IA que automatizan ventas, soporte y recomendaciones personalizadas.'
    },
    {
      number: '02',
      title: 'Integración Odoo',
      description: 'Conectamos tu e-commerce con Odoo para automatizar inventarios, facturación, CRM y toda tu operación empresarial.'
    },
    {
      number: '03',
      title: 'Publicidad con IA',
      description: 'Generamos imágenes de producto hiperrealistas con IA para tus anuncios, aumentando el engagement y las conversiones.'
    },
    {
      number: '04',
      title: 'Optimización Continua',
      description: 'Análisis y mejora constante de tu tienda con IA que aprende del comportamiento de tus clientes.'
    }
  ];

  return (
    <>
      {/* Features Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Potencia tu <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">E-commerce</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:bg-white/[0.05] hover:border-[#667eea]/50 hover:shadow-xl hover:shadow-[#667eea]/20 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center text-3xl mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pack Agente IA Pro */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 border border-[#667eea]/30 text-sm font-medium text-[#667eea] mb-6">
              🚀 Sistema de Agente IA para Ecommerce
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Agente IA Pro para{' '}
              <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Ecommerce</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Implementa tu propio agente de IA en WhatsApp para vender, responder clientes y automatizar atención sin depender de agencias ni técnicos.
            </p>
          </div>

          {/* 3 Pilares */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Pilar 1 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#667eea]/40 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center text-2xl mb-5">📋</div>
              <h3 className="text-xl font-bold text-white mb-2">Arquitectura Conversacional</h3>
              <p className="text-sm text-gray-500 mb-4">Plantillas estratégicas optimizadas para ventas</p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-[#667eea] mb-2">Módulo Ventas</h4>
                  <ul className="space-y-1.5 text-sm text-gray-400">
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Flujos de bienvenida</li>
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Respuestas para objeciones</li>
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Recuperación de carrito</li>
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Cross-selling / Upselling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#667eea] mb-2">Módulo Atención al Cliente</h4>
                  <ul className="space-y-1.5 text-sm text-gray-400">
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Atención automatizada 24/7</li>
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Psicología de venta aplicada</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#667eea] mb-2">Módulo Postventa</h4>
                  <ul className="space-y-1.5 text-sm text-gray-400">
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Seguimiento post-compra</li>
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Fidelización automatizada</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#667eea]/40 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center text-2xl mb-5">🎥</div>
              <h3 className="text-xl font-bold text-white mb-2">Implementación Técnica Guiada</h3>
              <p className="text-sm text-gray-500 mb-4">Videos paso a paso — sin fricción</p>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Cómo crear el agente IA</li>
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Cómo conectarlo a WhatsApp</li>
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Cómo entrenarlo con tus datos</li>
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Integración con Shopify / WooCommerce</li>
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Cómo testearlo antes de lanzar</li>
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">✔️</span>Optimización de respuestas</li>
              </ul>
            </div>

            {/* Pilar 3 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#667eea]/40 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center text-2xl mb-5">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">2 Sesiones Estratégicas 1:1</h3>
              <p className="text-sm text-gray-500 mb-4">Consultoría personalizada para tu negocio</p>
              <div className="space-y-4">
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-sm font-semibold text-white mb-2">Sesión 1: Diseño del Sistema</h4>
                  <ul className="space-y-1.5 text-sm text-gray-400">
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">•</span>Definimos objetivos</li>
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">•</span>Revisamos flujo de ventas</li>
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">•</span>Adaptamos plantillas a tu negocio</li>
                  </ul>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-sm font-semibold text-white mb-2">Sesión 2: Optimización</h4>
                  <ul className="space-y-1.5 text-sm text-gray-400">
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">•</span>Revisamos métricas</li>
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">•</span>Mejoramos prompts</li>
                    <li className="flex items-start gap-2"><span className="text-[#667eea] mt-0.5">•</span>Detectamos oportunidades</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Ideal para */}
          <div className="bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 border border-[#667eea]/20 rounded-2xl p-8 md:p-10 mb-16">
            <h3 className="text-xl font-bold text-white mb-5">🎯 Ideal para ecommerce que:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 bg-[#667eea] rounded-full flex-shrink-0" />Ya venden online
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 bg-[#667eea] rounded-full flex-shrink-0" />Tienen volumen de mensajes en WhatsApp
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 bg-[#667eea] rounded-full flex-shrink-0" />Quieren escalar sin contratar más equipo
              </div>
            </div>
          </div>

          {/* Bonus */}
          <div className="mb-16">
            <h3 className="text-lg font-bold text-white mb-5">🔥 Bonus incluidos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {['Checklist de optimización', 'Banco de prompts optimizados', 'Mini módulo de métricas', 'Acceso a actualizaciones', 'Comunidad privada'].map((bonus, i) => (
                <div key={i} className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 text-center">
                  {bonus}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white border-0 rounded-full px-10 py-6 text-lg font-semibold transition-all hover:-translate-y-1"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quiero mi Agente IA Pro
            </Button>
          </div>
        </div>
      </section>

      {/* YouTube Learning Section */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border-2 border-red-500/30 rounded-3xl p-10 md:p-14">
            <div className="flex items-start gap-6">
              <svg className="w-16 h-16 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.54 6.42c-.26-.83-1.04-1.48-1.94-1.63-.98-.16-4.94-.16-4.94-.16s-3.96 0-4.94.16c-.9.15-1.68.8-1.94 1.63-.38 1.23-.58 2.52-.58 3.85 0 1.33.2 2.62.58 3.85.26.83 1.04 1.48 1.94 1.63.98.16 4.94.16 4.94.16s3.96 0 4.94-.16c.9-.15 1.68-.8 1.94-1.63.38-1.23.58-2.52.58-3.85 0-1.33-.2-2.62-.58-3.85z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon>
              </svg>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Aprende en nuestro Canal de YouTube
                </h3>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  ¿Necesitas ayuda? En nuestro canal de YouTube compartimos tutoriales para <span className="font-semibold text-white">E-commerce</span> y estrategias para hacer tu vida más fácil. Desde cómo optimizar tu tienda Shopify hasta integración con IA, encontrarás todo lo que necesitas para dominar tu negocio online.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <span className="text-gray-400 font-medium">Nuevos videos cada semana</span>
                  <span className="hidden sm:block w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  <span className="text-gray-400 font-medium">Tutoriales paso a paso</span>
                  <span className="hidden sm:block w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  <span className="text-gray-400 font-medium">Suscríbete gratis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 border-2 border-[#667eea]/30 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              ¿Listo para <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Revolucionar</span> tu Negocio?
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Únete a las empresas que ya están transformando sus ventas con inteligencia artificial
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white border-0 rounded-full px-10 py-6 text-lg font-semibold transition-all hover:-translate-y-1"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Demo Gratuita
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmartStoreSection;
