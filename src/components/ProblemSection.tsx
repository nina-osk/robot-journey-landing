import { Settings, Clock, Package, BarChart3, Shield, Users, TrendingUp, Cpu, HeadphonesIcon } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <Settings className="h-6 w-6 text-[#667eea]" />,
      title: 'Caos Operativo',
      description: 'Procesos manuales y fragmentados que generan ruido crítico en el día a día.'
    },
    {
      icon: <Clock className="h-6 w-6 text-[#667eea]" />,
      title: 'Pérdida de Tiempo',
      description: 'Horas interminables desperdiciadas en tareas repetitivas que no aportan valor real.'
    },
    {
      icon: <Package className="h-6 w-6 text-[#667eea]" />,
      title: 'Errores de Stock',
      description: 'Desajustes constantes en el inventario que afectan a las ventas y la rentabilidad.'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-[#667eea]" />,
      title: 'Falta de Control',
      description: 'Incapacidad total de ver el estado real de tu negocio en tiempo real.'
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-[#667eea]" />,
      title: 'Control total',
      description: 'Visibilidad completa de cada área operativa desde una única pantalla centralizada.'
    },
    {
      icon: <Users className="h-6 w-6 text-[#667eea]" />,
      title: 'Delegar sin miedo',
      description: 'Crea sistemas que funcionan con total autonomía, sin necesidad de tu supervisión constante.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#667eea]" />,
      title: 'Datos en tiempo real',
      description: 'Toma decisiones estratégicas basadas en realidades tangibles, no en intuiciones.'
    },
    {
      icon: <Settings className="h-6 w-6 text-[#667eea]" />,
      title: 'Escalabilidad',
      description: 'Estructura técnica y operativa lista para absorber el crecimiento sin colapsos.'
    },
    {
      icon: <Cpu className="h-6 w-6 text-[#667eea]" />,
      title: 'Eficiencia ERP',
      description: 'Integración perfecta de todos tus procesos bajo un entorno digital unificado.'
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6 text-[#667eea]" />,
      title: 'Soporte Estratégico',
      description: 'Acompañamiento personalizado en cada fase de tu transformación digital.'
    }
  ];

  return (
    <>
      {/* Problem Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
            ¿Tu empresa te tiene{' '}
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">atrapado</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center hover:border-[#667eea]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-[#667eea]/10 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tu negocio, bajo{' '}
              <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">control total</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Nuestra metodología permite delegar con absoluta confianza gracias a sistemas inteligentes y datos precisos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#667eea]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 mb-4 bg-[#667eea]/10 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
