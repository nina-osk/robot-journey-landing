import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check, Smartphone, Printer, QrCode, BarChart, Settings, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const KioscosPago = () => {
  const kioskImages = [
    {
      src: "/lovable-uploads/185c69eb-b011-48b3-999d-f598b65e9d63.png",
      alt: "Kiosco de pago con escáner QR"
    },
    {
      src: "/lovable-uploads/2ba5809e-a197-4378-9cb8-f65fada390ab.png",
      alt: "Kiosco de pago con reconocimiento facial"
    },
    {
      src: "/lovable-uploads/ce523968-b623-4adc-9cf1-c1140d583924.png",
      alt: "Kiosco de pago para restaurantes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kioscos de Pago <span className="text-robotics-blue">Inteligentes</span>
            </h1>
          </div>
          
          {/* Carrusel y Descripción */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            {/* Carrusel a la izquierda */}
            <div className="w-full">
              <Carousel className="w-full">
                <CarouselContent>
                  {kioskImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="glass-card p-6 rounded-2xl border border-white/30">
                          <div className="relative aspect-video rounded-lg overflow-hidden bg-white">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Descripción a la derecha */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Quiosco de pantalla táctil de 21,5 pulgadas con escáner 2D y impresora de 80 mm, 
                  máquina de pedido automático de escritorio, POS de pedido sin acceso de montaje en pared.
                </p>
              </div>
              
              <Button 
                className="bg-robotics-blue hover:bg-robotics-blue/90 text-white px-8 py-3 text-lg font-semibold rounded-md"
                asChild
              >
                <Link to="/#contacto">
                  Solicitar Información
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-robotics-blue/20">
              <CardContent className="p-6 text-center">
                <Smartphone className="w-12 h-12 text-robotics-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Pantalla Táctil 21.5"</h3>
                <p className="text-gray-600 text-sm">Interfaz intuitiva y responsive</p>
              </CardContent>
            </Card>
            <Card className="border-robotics-blue/20">
              <CardContent className="p-6 text-center">
                <QrCode className="w-12 h-12 text-robotics-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Escáner 2D</h3>
                <p className="text-gray-600 text-sm">Lectura de códigos QR y barras</p>
              </CardContent>
            </Card>
            <Card className="border-robotics-blue/20">
              <CardContent className="p-6 text-center">
                <Printer className="w-12 h-12 text-robotics-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Impresora 80mm</h3>
                <p className="text-gray-600 text-sm">Tickets y recibos instantáneos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor Técnica */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Propuesta de Valor Técnica con <span className="text-robotics-blue">Odoo</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-6 h-6 text-robotics-blue" />
                  Integración Completa con Odoo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Sincronización automática con módulos de ventas, inventario y contabilidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Reportes en tiempo real desde el ERP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Gestión centralizada de múltiples quioscos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-robotics-blue" />
                  Desarrollo Personalizado en Python
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Interfaces adaptadas a la marca del cliente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Lógica de negocio específica (promociones, descuentos, horarios)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">APIs personalizadas para integraciones adicionales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-robotics-blue" />
                  Características Técnicas Diferenciadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dashboard de analytics en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Mantenimiento remoto y actualizaciones automáticas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Integración con sistemas de pago locales e internacionales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sectores de Aplicación */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sectores de Aplicación</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Restaurantes y Cafeterías */}
            <Card className="border-2 border-robotics-blue/20">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-orange-100 text-orange-800">Restaurantes y Cafeterías</Badge>
                <CardTitle className="text-xl">
                  "Transforma la experiencia de pedido de tus clientes mientras reduces costos operativos"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Beneficios Clave:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Reducción de tiempo de espera:</strong> Los clientes ordenan inmediatamente sin esperar mesero</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Pedidos más grandes:</strong> Sugerencias automáticas aumentan ticket promedio 15-25%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Cero errores de pedido:</strong> Eliminación de malentendidos entre cliente-mesero-cocina</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Disponibilidad 24/7:</strong> Funciona incluso con personal mínimo</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Funcionalidades Específicas con Python/Odoo:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Menú dinámico que se actualiza según disponibilidad de inventario</li>
                      <li>• Sistema de promociones inteligente basado en horarios/días</li>
                      <li>• Integración directa con cocina (impresión automática de órdenes)</li>
                      <li>• Analytics de productos más vendidos y horarios pico</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Retail */}
            <Card className="border-2 border-robotics-blue/20">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">Retail (Tiendas, Farmacias, etc.)</Badge>
                <CardTitle className="text-xl">
                  "Mejora la experiencia de compra mientras optimizas tu operación"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Beneficios Clave:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Atención inmediata:</strong> Cliente se autoatiende sin esperar personal disponible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Información completa:</strong> Detalles de productos, stock, precios actualizados</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Reducción de colas:</strong> Especialmente útil para productos básicos y repetitivos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Ventas fuera de horario:</strong> Pedidos para recoger al día siguiente</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Funcionalidades Específicas:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Catálogo completo sincronizado con Odoo</li>
                      <li>• Sistema de apartado y reserva de productos</li>
                      <li>• Integración con programa de lealtad/puntos</li>
                      <li>• Búsqueda inteligente por categorías o síntomas (farmacias)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciadores Técnicos */}
      <section className="py-16 bg-gradient-to-r from-robotics-blue to-blue-600 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Diferenciadores Técnicos que Ofrecemos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Integración Total con Odoo</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Un solo sistema para gestionar ventas presenciales y de quiosco</li>
                  <li>• Reportes unificados de performance</li>
                  <li>• Gestión centralizada de promociones y precios</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Desarrollo Personalizado en Python</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Interfaz adaptada a los colores y estilo de cada marca</li>
                  <li>• Flujos de pedido optimizados para cada tipo de negocio</li>
                  <li>• Integraciones específicas (sistemas de pago locales, delivery, etc.)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Propuesta Comercial */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Propuesta Comercial</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-robotics-blue/50 transition-colors">
              <CardHeader>
                <Badge className="mx-auto mb-2 bg-gray-100 text-gray-800">Básico</Badge>
                <CardTitle>Paquete Básico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Quiosco + configuración básica + capacitación
                </p>
                <Button variant="outline" className="w-full">
                  Consultar Precio
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-robotics-blue bg-robotics-blue/5">
              <CardHeader>
                <Badge className="mx-auto mb-2 bg-robotics-blue text-white">Premium</Badge>
                <CardTitle>Paquete Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  + Integración Odoo + personalización de interfaz + soporte 6 meses
                </p>
                <Button className="w-full bg-robotics-blue hover:bg-robotics-blue/90">
                  Más Popular
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-robotics-blue/50 transition-colors">
              <CardHeader>
                <Badge className="mx-auto mb-2 bg-purple-100 text-purple-800">Empresarial</Badge>
                <CardTitle>Paquete Empresarial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  + Desarrollo de funcionalidades específicas + analytics avanzados + mantenimiento anual
                </p>
                <Button variant="outline" className="w-full">
                  Contactar
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-robotics-blue hover:bg-robotics-blue/90 text-white px-8 py-3" asChild>
              <Link to="/#contacto">
                Solicitar Cotización Personalizada
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KioscosPago;
