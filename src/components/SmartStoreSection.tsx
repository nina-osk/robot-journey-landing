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
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/5 w-96 h-96 bg-[#667eea]/15 rounded-full blur-3xl transform -translate-y-1/2" />
          <div className="absolute top-1/2 right-1/5 w-96 h-96 bg-[#764ba2]/15 rounded-full blur-3xl transform -translate-y-1/2" />
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Transforma tu Negocio con nuestras
            <br />
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Tiendas Inteligentes
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            E-commerce potenciado con IA, integración completa con Shopify y Odoo, y publicidad con imágenes hiperrealistas generadas por inteligencia artificial
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold transition-all hover:-translate-y-1"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Descubre Cómo
          </Button>
        </div>
      </section>

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

      {/* Services Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                Soluciones <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">360°</span> para tu Empresa
              </h2>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start p-5 rounded-2xl transition-all duration-300 hover:bg-white/[0.03]"
                  >
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mr-5 min-w-[50px]">
                      {service.number}
                    </span>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="flex-1 h-[500px] bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute inset-[-50%] bg-[radial-gradient(circle,rgba(102,126,234,0.2)_0%,transparent_70%)]" />
              </div>
              <span className="text-9xl relative z-10">💎</span>
            </div>
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
