import { useEffect } from 'react';
import { Phone, Mail, CheckCircle, Users, Clock, DollarSign, BarChart3, Bot, Globe, Cpu, MessageSquare, Calendar, ShoppingCart, Headphones, ChefHat, Utensils } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AgentesIARestaurantes = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.slide-in-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white slide-in-section">
            <div className="text-6xl mb-4">🍽️</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary-foreground">Agente Telefónico IA para Restaurantes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-semibold">
              Nunca Más Pierdas Una Reserva Por No Poder Contestar
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Agenda tu Demo Gastronómica
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            El Drama Diario de Cada Restaurante
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="slide-in-section">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl font-bold">❌</span>
                  <span className="text-lg">Viernes 20:30h - El teléfono suena pero tienes las manos ocupadas sirviendo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl font-bold">❌</span>
                  <span className="text-lg">Hora punta - Camareros corriendo, nadie puede atender las llamadas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl font-bold">❌</span>
                  <span className="text-lg">Día libre - Clientes llaman pero el restaurante está cerrado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl font-bold">❌</span>
                  <span className="text-lg">Mesa para 8 personas - Reserva compleja que se pierde por falta de tiempo</span>
                </li>
              </ul>
            </div>
            <div className="slide-in-section">
              <div className="bg-red-100 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Resultado:</h3>
                <p className="text-xl text-red-700 font-semibold">
                  Hasta 40 mesas vacías por semana que pudiste llenar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center slide-in-section mb-16">
            <div className="text-6xl mb-4">🤖</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Tu Maitre Virtual 24/7
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Un asistente de reservas que nunca se estresa, siempre es amable y convierte cada llamada en una oportunidad de venta.
              Nuestro Agente IA especializado en restauración entiende el ritmo de tu cocina y la presión del servicio.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            ✨ Tu Agente de Reservas Gastronómico
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-section">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">📅 Gestión Inteligente de Mesas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Consulta disponibilidad en tiempo real según tu capacidad</li>
                  <li>• Optimiza ocupación sugiriendo horarios alternativos</li>
                  <li>• Gestiona turnos de comida y cena automáticamente</li>
                  <li>• Controla aforo máximo y distancias entre mesas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">🗣️ Conversaciones Naturales y Profesionales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Tono cálido y profesional adaptado a tu estilo</li>
                  <li>• Multiidioma para turistas y clientes internacionales</li>
                  <li>• Preguntas inteligentes sobre alergias y preferencias</li>
                  <li>• Información completa sobre carta, precios y especialidades</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <Cpu className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">🔗 Integración con tu Operativa Diaria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sistema de reservas - OpenTable, Resy, TheFork, etc.</li>
                  <li>• TPV y caja - Sincronización de mesas y pedidos</li>
                  <li>• WhatsApp Business - Confirmaciones y recordatorios</li>
                  <li>• Calendario Google - Eventos especiales y cierres</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            🍴 Casos de Uso Específicos para Restaurantes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-xl">🌅 Reservas de Almuerzo Express</CardTitle>
                <CardDescription className="italic">"Hola, ¿tienen mesa para 4 personas a las 14:00?"</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Verifica disponibilidad instantánea</li>
                  <li>• Sugiere horarios próximos si no hay mesa exacta</li>
                  <li>• Pregunta por menú del día o carta</li>
                  <li>• Confirma y envía recordatorio por WhatsApp</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-xl">🌙 Cenas de Fin de Semana</CardTitle>
                <CardDescription className="italic">"Queremos reservar para mañana sábado, somos una pareja"</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ofrece horarios disponibles (primera o segunda sesión)</li>
                  <li>• Pregunta por ocasión especial (cumpleaños, aniversario)</li>
                  <li>• Sugiere mesa romántica o con vistas</li>
                  <li>• Ofrece menú degustación o carta de vinos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-xl">👨‍👩‍👧‍👦 Grupos y Celebraciones</CardTitle>
                <CardDescription className="italic">"Necesitamos mesa para 12 personas, es un cumpleaños"</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Verifica capacidad para grupos grandes</li>
                  <li>• Ofrece menús grupales o presupuestos cerrados</li>
                  <li>• Pregunta por decoración especial o postre de cumpleaños</li>
                  <li>• Solicita confirmación 24h antes del evento</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-xl">🌮 Pedidos para Llevar y Delivery</CardTitle>
                <CardDescription className="italic">"¿Hacen comida para llevar?"</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Informa sobre opciones de take-away y delivery</li>
                  <li>• Toma pedidos completos con especificaciones</li>
                  <li>• Calcula tiempos de preparación reales</li>
                  <li>• Ofrece opciones de pago y recogida</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            🎯 Beneficios Específicos para tu Restaurante
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="slide-in-section">
              <h3 className="text-2xl font-bold mb-6 text-center">💸 Aumenta tus Ventas</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">+35% más reservas captadas fuera del horario de servicio</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">+20% ticket medio por sugerencias y upselling</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">85% ocupación vs 65% promedio del sector</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Reducción del 50% en no-shows con recordatorios automáticos</span>
                </li>
              </ul>
            </div>

            <div className="slide-in-section">
              <h3 className="text-2xl font-bold mb-6 text-center">⚡ Mejora tu Operativa</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Personal liberado para atender mejor a los clientes presentes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Menos interrupciones durante el servicio</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Gestión automática de listas de espera</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Datos precisos sobre demanda y preferencias</span>
                </li>
              </ul>
            </div>

            <div className="slide-in-section">
              <h3 className="text-2xl font-bold mb-6 text-center">😊 Experiencia Superior del Cliente</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Atención inmediata sin esperas ni música de fondo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Información completa sobre menús, precios y alergias</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Recordatorios personalizados de reservas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Flexibilidad total para modificaciones de última hora</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            📈 Caso de Éxito Real
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 slide-in-section">
              <h3 className="text-2xl font-bold mb-4">Restaurante "La Mesa Redonda" (45 plazas) - Centro Madrid</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="slide-in-section">
                <h4 className="text-xl font-bold mb-4 text-red-600">Antes del Agente IA:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-red-500">💔</span>
                    <span>Perdía 25-30 reservas semanales en hora punta</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-red-500">📉</span>
                    <span>65% ocupación promedio</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-red-500">😤</span>
                    <span>Camareros estresados contestando teléfonos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-red-500">💸</span>
                    <span>15% de no-shows sin confirmación previa</span>
                  </li>
                </ul>
              </div>

              <div className="slide-in-section">
                <h4 className="text-xl font-bold mb-4 text-green-600">Después de 2 meses con Agente IA:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>+120 reservas adicionales captadas mensualmente</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>82% ocupación promedio</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Reducción del 70% en no-shows con recordatorios</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>+€8,500 ingresos mensuales adicionales</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center slide-in-section">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "Ahora mis camareros se dedican a lo que saben hacer mejor: atender clientes. El agente IA se encarga de llenar el restaurante mientras nosotros nos enfocamos en la experiencia gastronómica."
              </blockquote>
              <cite className="text-lg font-semibold text-primary">
                - Carlos, Propietario
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            🍕 Paquetes Especializados por Tipo de Restaurante
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-2xl">🍽️ BISTRÓ/TASCA STARTER</CardTitle>
                <CardDescription className="text-sm">Perfecto para restaurantes de 20-40 plazas</CardDescription>
                <div className="text-3xl font-bold text-primary">€149/mes</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Hasta 300 reservas/mes</li>
                  <li>✅ Gestión básica de mesas</li>
                  <li>✅ 2 idiomas (Español + 1 adicional)</li>
                  <li>✅ Integración con 1 sistema de reservas</li>
                  <li>✅ Recordatorios por SMS</li>
                </ul>
                <p className="text-sm mt-4 text-gray-500">(instalación incluida)</p>
              </CardContent>
            </Card>

            <Card className="slide-in-section border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">🍴 RESTAURANTE PROFESSIONAL</CardTitle>
                <CardDescription className="text-sm">Ideal para restaurantes de 40-100 plazas</CardDescription>
                <div className="text-3xl font-bold text-primary">€299/mes</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Hasta 1,000 reservas/mes</li>
                  <li>✅ Gestión avanzada con turnos</li>
                  <li>✅ 4 idiomas incluidos</li>
                  <li>✅ Upselling automático de vinos y postres</li>
                  <li>✅ Integración TPV + reservas</li>
                  <li>✅ WhatsApp + Email + SMS</li>
                  <li>✅ Analytics y reportes</li>
                </ul>
                <p className="text-sm mt-4 text-gray-500">+ configuración gratuita</p>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-2xl">🏛️ RESTAURANTE ENTERPRISE</CardTitle>
                <CardDescription className="text-sm">Para grupos gastronómicos y restaurantes premium</CardDescription>
                <div className="text-3xl font-bold text-primary">Desde €599/mes</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Reservas ilimitadas</li>
                  <li>✅ Multi-restaurante</li>
                  <li>✅ Todos los idiomas</li>
                  <li>✅ Personalización completa</li>
                  <li>✅ Integración con sistemas propios</li>
                  <li>✅ Account Manager dedicado</li>
                </ul>
                <p className="text-sm mt-4 text-gray-500">(consultar necesidades)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            🚀 Implementación Rápida - 5 Días
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-xl">Día 1-2: Configuración de tu Restaurante</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Análisis de tu carta, horarios y capacidad</li>
                  <li>• Configuración de mesas y gestión de turnos</li>
                  <li>• Integración con tu sistema de reservas actual</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-xl">Día 3-4: Entrenamiento Gastronómico</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Carga de información sobre platos y especialidades</li>
                  <li>• Configuración de promociones y ofertas especiales</li>
                  <li>• Pruebas con diferentes tipos de reservas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-xl">Día 5: ¡A Funcionar!</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Lanzamiento en horario de menor actividad</li>
                  <li>• Monitoreo en tiempo real durante el primer servicio</li>
                  <li>• ¡Tu maitre virtual ya está trabajando!</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center slide-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">🎁 Oferta Especial Gastronómica</h2>
          <h3 className="text-2xl font-bold mb-8">PROMOCIÓN RESTAURANTES 2024</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <ul className="space-y-4 text-lg">
                <li>🍾 Primer mes GRATIS (ahorra hasta €299)</li>
                <li>🎯 Configuración sin coste (valor €400)</li>
                <li>📊 Reporting gastronómico incluido</li>
                <li>🔄 Prueba sin compromiso 15 días</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="text-xl font-bold">¡Solo para los primeros 15 restaurantes!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white slide-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">⏰ La Hora Punta No Espera</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Cada llamada perdida es una mesa vacía. Mientras lees esto, otros restaurantes ya están usando agentes IA para llenar mesas, captar reservas de última hora y aumentar el ticket medio.
          </p>
          <h3 className="text-2xl font-bold mb-8">📱 Agenda tu Degustación Digital</h3>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a href="mailto:info@robotsconsultant.net" className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>info@robotsconsultant.net</span>
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+34 654 94 27 20</span>
              </a>
            </Button>
          </div>
          
          <p className="text-xl font-semibold">
            🔥 AGENDA TU DEMO HOY<br />
            La gastronomía del futuro empieza por no perder ni una sola reserva.<br />
            ¿Tu restaurante está listo para estar siempre abierto para reservas? 🍽️✨
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentesIARestaurantes;