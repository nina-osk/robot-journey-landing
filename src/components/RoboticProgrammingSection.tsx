const RoboticProgrammingSection = () => {
  const programmingServices = [
    {
      icon: '🦾',
      title: 'Programación ROS2',
      description: 'Desarrollo de aplicaciones robóticas en ROS2 para brazos robóticos y cobots',
      features: [
        'Nodos personalizados',
        'Control de trayectorias',
        'Integración sensores',
        'Simulación Gazebo'
      ],
      technologies: ['Python', 'C++', 'ROS2 Humble', 'MoveIt2']
    },
    {
      icon: '🔧',
      title: 'Universal Robots',
      description: 'Programación especializada en cobots Universal Robots (UR3, UR5, UR10)',
      features: [
        'PolyScope scripting',
        'URScript avanzado',
        'Integración TCP/IP',
        'Safety configuration'
      ],
      technologies: ['URScript', 'PolyScope', 'RTDE', 'Dashboard Server']
    },
    {
      icon: '⚙️',
      title: 'Integración Industrial',
      description: 'Conectividad con sistemas industriales y protocolos de comunicación',
      features: [
        'Modbus TCP/RTU',
        'Ethernet/IP',
        'OPC-UA',
        'PLC integration'
      ],
      technologies: ['Modbus', 'EtherCAT', 'Profinet', 'MQTT']
    }
  ];

  const applications = [
    {
      title: 'Pick & Place',
      description: 'Automatización de tareas de recogida y colocación con visión artificial',
      icon: '📦'
    },
    {
      title: 'Soldadura Colaborativa',
      description: 'Programación de secuencias de soldadura con cobots certificados',
      icon: '🔥'
    },
    {
      title: 'Control de Calidad',
      description: 'Inspección automatizada con cámaras y sensores integrados',
      icon: '🔍'
    },
    {
      title: 'Ensamblaje Flexible',
      description: 'Líneas de montaje adaptables con programación modular',
      icon: '🔩'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Programación de Brazos Robóticos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desarrollo especializado en ROS2 y software Universal Robotics para aplicaciones industriales
          </p>
        </div>

        {/* Programming Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {programmingServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Características:</h4>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Aplicaciones Especializadas
            </h3>
            <p className="text-gray-600">
              Casos de uso donde aplicamos nuestras soluciones de programación robótica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {app.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {app.title}
                </h4>
                <p className="text-sm text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Process */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Nuestro Proceso de Desarrollo
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Metodología probada para implementar soluciones robóticas eficientes y seguras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Análisis</h4>
              <p className="text-sm text-blue-100">Evaluación de requisitos y entorno de trabajo</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Simulación</h4>
              <p className="text-sm text-blue-100">Desarrollo y pruebas en entorno virtual</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Implementación</h4>
              <p className="text-sm text-blue-100">Despliegue en hardware real con calibración</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Optimización</h4>
              <p className="text-sm text-blue-100">Ajuste fino y formación del personal</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Consulta tu Proyecto Robótico
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticProgrammingSection;