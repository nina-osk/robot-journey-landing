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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🤖 <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Robots de Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Implementamos robots especializados que revolucionan la eficiencia operativa en múltiples sectores
          </p>
        </div>

        {/* Robot Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {robotServices.map((robot, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={robot.image}
                  alt={robot.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {robot.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {robot.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {robot.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {robot.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Applications by Sector */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Aplicaciones por Sector
            </h3>
            <p className="text-gray-600">
              Nuestros robots se adaptan a las necesidades específicas de cada industria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div 
                key={index}
                className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {app.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {app.sector}
                  </h4>
                  <p className="text-sm text-gray-600">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para automatizar con robots?
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Analizamos tu proceso productivo y diseñamos la solución robótica perfecta para tu negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Solicitar Análisis Gratuito
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
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