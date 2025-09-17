import { useEffect } from 'react';
import { Phone, Mail, CheckCircle, Users, Clock, DollarSign, BarChart3, Bot, Globe, Cpu, MessageSquare, Calendar, ShoppingCart, Headphones } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AgentesIA = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revoluciona tu Atención al Cliente con <span className="text-primary-foreground">Agentes Telefónicos IA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              La Nueva Era de la Comunicación Empresarial Ha Llegado
            </p>
            <p className="text-lg mb-12 max-w-5xl mx-auto leading-relaxed">
              Imagina un mundo donde tus clientes reciben atención instantánea, personalizada y profesional las 24 horas del día, los 7 días de la semana, sin costos adicionales de personal ni tiempos de espera frustrantes. Esa realidad es hoy posible con nuestra solución de Agentes Telefónicos IA.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Agenda tu Demo Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose AI Agents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            ¿Por Qué Elegir Agentes Telefónicos IA?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-section">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">🚀 Disponibilidad Total</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Atención 24/7/365 sin descansos ni vacaciones</li>
                  <li>• Respuesta inmediata en menos de 2 segundos</li>
                  <li>• Cero tiempos de espera para tus clientes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">💰 Reducción de Costos Operativos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Hasta 70% menos costos que un call center tradicional</li>
                  <li>• Sin gastos de contratación, capacitación ni rotación</li>
                  <li>• Escalabilidad inmediata sin inversión adicional</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">🎯 Experiencia Superior del Cliente</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Conversaciones naturales e inteligentes</li>
                  <li>• Personalización basada en historial del cliente</li>
                  <li>• Consistencia en cada interacción</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Solution */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            Nuestra Solución Tecnológica de Vanguardia
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-in-section">
              <Card className="h-full">
                <CardHeader>
                  <Bot className="w-16 h-16 text-primary mb-4" />
                  <CardTitle className="text-2xl">RetellAI: El Cerebro de la Conversación</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Procesamiento de Lenguaje Natural avanzado que entiende contexto y emociones</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Integración multiidioma para atender clientes globales</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Aprendizaje continuo que mejora con cada conversación</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Personalización completa según tu marca y procesos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="slide-in-section">
              <Card className="h-full">
                <CardHeader>
                  <Cpu className="w-16 h-16 text-primary mb-4" />
                  <CardTitle className="text-2xl">LiveKit: La Infraestructura de Comunicación</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Audio en tiempo real con calidad cristalina</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Latencia ultra-baja para conversaciones fluidas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Escalabilidad empresarial que crece con tu negocio</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Integración robusta con sistemas existentes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            Casos de Uso que Transformarán tu Negocio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-section">
              <CardHeader>
                <Headphones className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">📞 Atención al Cliente</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Resolución de consultas frecuentes</li>
                  <li>• Seguimiento de pedidos y servicios</li>
                  <li>• Soporte técnico de primer nivel</li>
                  <li>• Gestión de quejas y reclamos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">💼 Ventas y Prospección</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Calificación automática de leads</li>
                  <li>• Seguimiento de cotizaciones</li>
                  <li>• Programación de citas comerciales</li>
                  <li>• Cross-selling y up-selling inteligente</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">📋 Servicios Administrativos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Confirmación de citas médicas</li>
                  <li>• Recordatorios de pagos</li>
                  <li>• Encuestas de satisfacción</li>
                  <li>• Recopilación de datos</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            Beneficios Comprobados
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-in-section">
              <h3 className="text-2xl font-bold mb-6 text-center">Para tu Empresa:</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">ROI del 300% en los primeros 12 meses</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Reducción del 60% en tiempo de respuesta</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Aumento del 40% en satisfacción del cliente</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Disponibilidad del 99.9% garantizada</span>
                </li>
              </ul>
            </div>

            <div className="slide-in-section">
              <h3 className="text-2xl font-bold mb-6 text-center">Para tus Clientes:</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Atención inmediata sin esperas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Resolución eficiente de consultas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Experiencia consistente y profesional</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Disponibilidad total cuando la necesiten</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            Implementación Sin Complicaciones
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-xl">Fase 1: Análisis y Configuración (Semana 1-2)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Análisis de procesos actuales</li>
                  <li>• Configuración personalizada del agente IA</li>
                  <li>• Integración con sistemas existentes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-xl">Fase 2: Entrenamiento y Pruebas (Semana 3-4)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Entrenamiento con datos específicos de tu empresa</li>
                  <li>• Pruebas internas y ajustes finos</li>
                  <li>• Validación de flujos de conversación</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-xl">Fase 3: Lanzamiento y Optimización (Semana 5+)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Implementación gradual</li>
                  <li>• Monitoreo continuo y optimización</li>
                  <li>• Soporte técnico especializado</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            Casos de Éxito
          </h2>
          <div className="max-w-4xl mx-auto text-center slide-in-section">
            <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-8">
              "Implementamos los agentes IA y en el primer mes redujimos los costos de call center en un 65% mientras mejoramos significativamente la satisfacción del cliente."
            </blockquote>
            <cite className="text-lg font-semibold text-primary">
              — Director de Operaciones, Empresa de Telecomunicaciones
            </cite>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            Inversión y Paquetes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-2xl">Starter Plan</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">Desde $299/mes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Hasta 1,000 llamadas mensuales</li>
                  <li>• 1 agente IA personalizado</li>
                  <li>• Integración básica</li>
                  <li>• Soporte por email</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Professional Plan</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">Desde $899/mes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Hasta 10,000 llamadas mensuales</li>
                  <li>• 3 agentes IA especializados</li>
                  <li>• Integraciones avanzadas</li>
                  <li>• Analytics y reportes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise Plan</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">Consultar</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Llamadas ilimitadas</li>
                  <li>• Agentes IA ilimitados</li>
                  <li>• Personalización completa</li>
                  <li>• Soporte dedicado 24/7</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white slide-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Listo para el Futuro?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            No esperes a que tu competencia tome la delantera. Los agentes telefónicos IA no son el futuro, son el presente.
          </p>
          <h3 className="text-2xl font-bold mb-8">Agenda tu Demo Gratuita Hoy</h3>
          
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
            La revolución de la atención al cliente comienza con una llamada.<br />
            ¿Estás listo para liderar el cambio?
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentesIA;