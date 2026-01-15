import { CheckCircle, MessageSquare, ShoppingCart, Calendar, Package, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SolutionSection = () => {
  const solutions = [
    {
      icon: MessageSquare,
      title: 'Atención Automatizada',
      description: 'WhatsApp automático que responde 24/7, toma pedidos y agenda citas'
    },
    {
      icon: ShoppingCart,
      title: 'Ventas Integradas',
      description: 'TPV, eCommerce y kioscos conectados para vender en todos los canales'
    },
    {
      icon: Calendar,
      title: 'Gestión Completa',
      description: 'Citas, inventario y facturación automatizados sin complicaciones'
    },
    {
      icon: Package,
      title: 'Packs por Sector',
      description: 'Soluciones específicas para restaurantes, hoteles, tiendas y más'
    },
    {
      icon: Zap,
      title: 'Implementación Rápida',
      description: 'Tu sistema funcionando en días, con formación incluida'
    },
    {
      icon: CheckCircle,
      title: 'Soporte Continuo',
      description: 'Acompañamiento técnico y actualizaciones constantes'
    }
  ];

  return (
    <section className="py-16 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tu negocio <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">digitalizado</span> en días, no en meses
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Soluciones probadas que transforman tu empresa desde el primer día
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-[#667eea]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#667eea]/10"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{solution.title}</h3>
              </div>
              <p className="text-gray-400">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 border border-[#667eea]/30 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              Solicita tu diagnóstico gratuito
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Analizamos tu negocio y te mostramos exactamente cómo digitalizarlo
            </p>
            <Button 
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-0 rounded-full"
              onClick={() => window.location.href = '/kioscos-pago'}
            >
              Ver Soluciones por Sector
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
