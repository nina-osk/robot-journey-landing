const RobotsServicesSection = () => {
  const robotServices = [
    {
      icon: '🤖',
      title: 'Robots Móviles',
      description: 'Robots autónomos para transporte y logística interna',
      image: '/lovable-uploads/RobotsMovil.png',
      features: [
        'Navegación autónoma',
        'Transporte de materiales',
        'Integración con WMS',
        'Mapeo inteligente'
      ]
    },
    {
      icon: '🦾',
      title: 'Robots Colaborativos',
      description: 'Brazos robóticos que trabajan junto al personal humano',
      image: '/lovable-uploads/armRobotMovil.png',
      features: [
        'Seguridad certificada',
        'Fácil programación',
        'Tareas repetitivas',
        'Flexibilidad total'
      ]
    },
    {
      icon: '🏭',
      title: 'Robots Industriales',
      description: 'Soluciones robóticas para automatización industrial',
      image: '/lovable-uploads/robotArm.png',
      features: [
        'Alta precisión',
        'Producción 24/7',
        'Control de calidad',
        'ROI garantizado'
      ]
    }
  ];

  const applications = [
    { sector: 'Hostelería', icon: '🍽️', description: 'Robots camareros y de cocina' },
    { sector: 'Logística', icon: '📦', description: 'Automatización de almacenes' },
    { sector: 'Construcción', icon: '🏗️', description: 'Robots para trabajos pesados' },
    { sector: 'Sanitario', icon: '🏥', description: 'Desinfección y asistencia' },
    { sector: 'Retail', icon: '🛒', description: 'Inventario y atención al cliente' },
    { sector: 'Manufactura', icon: '⚙️', description: 'Ensamblaje y control calidad' }
  ];

  return (
    <section className="py-20 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🤖 <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Robots de Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Implementamos robots especializados que revolucionan la eficiencia operativa en múltiples sectores
          </p>
        </div>

        {/* Robot Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {robotServices.map((robot, index) => (
            <div 
              key={index}
              className="group bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.05] hover:border-[#667eea]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#667eea]/20 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-video bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10">
                <img
                  src={robot.image}
                  alt={robot.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl border border-white/20">
                    {robot.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#667eea] transition-colors">
                  {robot.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {robot.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {robot.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Applications by Sector */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Aplicaciones por Sector
            </h3>
            <p className="text-gray-400">
              Nuestros robots se adaptan a las necesidades específicas de cada industria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div 
                key={index}
                className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {app.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-[#667eea] transition-colors">
                    {app.sector}
                  </h4>
                  <p className="text-sm text-gray-400">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 border-2 border-[#667eea]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para automatizar con robots?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Analizamos tu proceso productivo y diseñamos la solución robótica perfecta para tu negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Solicitar Análisis Gratuito
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Ver Casos de Éxito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RobotsServicesSection;
