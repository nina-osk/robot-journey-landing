const NewServicesSection = () => {
  const services = [
    {
      icon: '⚙️',
      title: 'Instalación de Odoo',
      description: 'Implementación completa del ERP Odoo adaptado a tu negocio',
      features: [
        'Análisis de procesos',
        'Configuración personalizada',
        'Migración de datos',
        'Formación del equipo'
      ]
    },
    {
      icon: '🤖',
      title: 'Automatización Make/n8n',
      description: 'Conectamos tus herramientas y automatizamos procesos repetitivos',
      features: [
        'Workflows personalizados',
        'Integración de APIs',
        'Automatización de emails',
        'Sincronización de datos'
      ]
    },
    {
      icon: '🎓',
      title: 'Formación',
      description: 'Capacitamos a tu equipo para aprovechar al máximo la tecnología',
      features: [
        'Cursos presenciales',
        'Formación online',
        'Manuales personalizados',
        'Soporte continuo'
      ]
    },
    {
      icon: '🛠️',
      title: 'Soporte Técnico',
      description: 'Asistencia técnica especializada cuando la necesites',
      features: [
        'Soporte 24/7',
        'Resolución remota',
        'Mantenimiento preventivo',
        'Actualizaciones incluidas'
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🧠 <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Servicios especializados para transformar digitalmente tu negocio con tecnología de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] hover:border-[#667eea]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#667eea]/20"
            >
              {/* Icon */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#667eea] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] flex-shrink-0"></div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;
