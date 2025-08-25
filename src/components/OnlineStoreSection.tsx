import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const OnlineStoreSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: '🛍️' },
    { id: 'kioscos', name: 'Kioscos', icon: '📱' },
    { id: 'tpv', name: 'TPV', icon: '💳' },
    { id: 'tablets', name: 'Tablets', icon: '📱' },
    { id: 'impresoras', name: 'Impresoras', icon: '🖨️' },
    { id: 'accesorios', name: 'Accesorios', icon: '🔧' }
  ];

  const products = [
    {
      id: 1,
      name: 'Kiosco Táctil Premium 24"',
      category: 'kioscos',
      image: '/lovable-uploads/0d87c931-53e1-470f-ad83-99c83e63768c.png',
      description: 'Kiosco interactivo con pantalla táctil de 24" y diseño moderno',
      price: '1,299',
      originalPrice: '1,499',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'TPV Todo-en-Uno',
      category: 'tpv',
      image: '/lovable-uploads/2ba5809e-a197-4378-9cb8-f65fada390ab.png',
      description: 'Sistema TPV completo con impresora y cajón portamonedas',
      price: '899',
      originalPrice: null,
      badge: 'Nuevo'
    },
    {
      id: 3,
      name: 'Tablet Android 10" Pro',
      category: 'tablets',
      image: '/lovable-uploads/ce523968-b623-4adc-9cf1-c1140d583924.png',
      description: 'Tablet profesional para TPV móvil y gestión',
      price: '399',
      originalPrice: '449',
      badge: 'Oferta'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🛍️ <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Tienda Online
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra el equipo perfecto para tu negocio con envío gratuito y garantía extendida
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
                  {product.badge && (
                    <Badge 
                      className={`absolute top-2 left-2 z-10 ${
                        product.badge === 'Bestseller' ? 'bg-orange-500' :
                        product.badge === 'Nuevo' ? 'bg-green-500' :
                        'bg-red-500'
                      }`}
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">
                      €{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        €{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0"
                  size="lg"
                >
                  Añadir al Carrito
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OnlineStoreSection;