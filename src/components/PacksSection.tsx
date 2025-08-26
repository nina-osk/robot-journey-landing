import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PacksSection = () => {
  const packs = [
    {
      id: 1,
      icon: '🍽️',
      name: 'Pack Restaurante',
      image: '/lovable-uploads/2ba5809e-a197-4378-9cb8-f65fada390ab.png',
      includes: [
        'Kiosco de pedidos táctil',
        'Sistema TPV integrado',
        'Gestión de mesas',
        'Control de inventario',
        'App de delivery',
        'Reportes en tiempo real'
      ],
      priceFrom: '2,499',
      sector: 'hosteleria'
    },
    {
      id: 2,
      icon: '🛒',
      name: 'Pack Retail',
      image: '/lovable-uploads/0dfddcd1-14f3-4de4-b057-1356b3f4ccfa.png',
      includes: [
        'TPV táctil avanzado',
        'Gestión de stock',
        'CRM integrado',
        'E-commerce conectado',
        'Sistema de fidelización',
        'Analíticas de ventas'
      ],
      priceFrom: '1,899',
      sector: 'retail'
    },
    {
      id: 3,
      icon: '🏨',
      name: 'Pack Hotelero',
      image: '/lovable-uploads/185c69eb-b011-48b3-999d-f598b65e9d63.png',
      includes: [
        'Check-in automático',
        'Gestión de reservas',
        'Control de habitaciones',
        'Facturación integrada',
        'Portal del huésped',
        'Gestión de servicios'
      ],
      priceFrom: '3,299',
      sector: 'hotelero'
    },
    {
      id: 4,
      icon: '💆‍♀️',
      name: 'Pack Wellness',
      image: '/lovable-uploads/c1e36c3f-139a-41f6-a37a-0cf435e2c3a9.png',
      includes: [
        'Agenda digital',
        'Gestión de citas',
        'Historial de clientes',
        'Punto de venta',
        'Marketing automático',
        'Control de stock'
      ],
      priceFrom: '1,699',
      sector: 'wellness'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            📦 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Packs por Sector
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones completas diseñadas específicamente para las necesidades de tu industria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packs.map((pack) => (
            <Card key={pack.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {pack.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-4">
                  {pack.name}
                </CardTitle>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={pack.image}
                    alt={pack.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {pack.includes.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center border-t pt-4">
                  <p className="text-sm text-gray-500 mb-2">Desde</p>
                  <p className="text-3xl font-bold text-blue-600 mb-4">
                    €{pack.priceFrom}
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                    size="lg"
                    onClick={() => {
                      const routes = {
                        'hosteleria': '/pack-restaurante',
                        'retail': '/pack-ecommerce', 
                        'hotelero': '/pack-hotel',
                        'wellness': '/pack-ecommerce'
                      };
                      window.location.href = routes[pack.sector as keyof typeof routes];
                    }}
                  >
                    Ver más
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿No encuentras tu sector?</p>
          <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Consulta Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PacksSection;