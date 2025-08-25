import { CheckCircle, MessageSquare, ShoppingCart, Calendar, Package, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SolutionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tu negocio digitalizado en días, no en meses
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Soluciones probadas que transforman tu empresa desde el primer día
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <MessageSquare className="h-10 w-10 text-green-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Atención Automatizada</h3>
            </div>
            <p className="text-gray-600">
              WhatsApp automático que responde 24/7, toma pedidos y agenda citas
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <ShoppingCart className="h-10 w-10 text-blue-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Ventas Integradas</h3>
            </div>
            <p className="text-gray-600">
              TPV, eCommerce y kioscos conectados para vender en todos los canales
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Calendar className="h-10 w-10 text-purple-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Gestión Completa</h3>
            </div>
            <p className="text-gray-600">
              Citas, inventario y facturación automatizados sin complicaciones
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Package className="h-10 w-10 text-orange-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Packs por Sector</h3>
            </div>
            <p className="text-gray-600">
              Soluciones específicas para restaurantes, hoteles, tiendas y más
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Zap className="h-10 w-10 text-yellow-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Implementación Rápida</h3>
            </div>
            <p className="text-gray-600">
              Tu sistema funcionando en días, con formación incluida
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-10 w-10 text-green-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Soporte Continuo</h3>
            </div>
            <p className="text-gray-600">
              Acompañamiento técnico y actualizaciones constantes
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Solicita tu diagnóstico gratuito
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Analizamos tu negocio y te mostramos exactamente cómo digitalizarlo
            </p>
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Diagnóstico Gratuito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;