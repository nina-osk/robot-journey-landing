import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, CheckCircle, Users, Clock, DollarSign, BarChart3, Bot, Globe, Cpu, MessageSquare, Calendar, ShoppingCart, Headphones, ChefHat } from 'lucide-react';
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
    <div className="min-h-screen bg-[#0a0a0a]">
      <Helmet>
        <title>Agentes de IA para Empresas | RobotsConsultant Agency</title>
        <meta name="description" content="Implementamos agentes de inteligencia artificial que atienden clientes 24/7, gestionan reservas, ventas y soporte sin intervención humana. Ahorra hasta un 70% en costes operativos." />
        <link rel="canonical" href="https://robotsconsultant.net/agentes-ia" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Agentes de IA para Empresas",
          "provider": { "@type": "Organization", "name": "RobotsConsultant Agency" },
          "description": "Agentes de inteligencia artificial que atienden clientes 24/7, gestionan reservas, pedidos y soporte sin intervención humana.",
          "areaServed": "ES"
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#667eea]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#764ba2]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white slide-in-section">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revoluciona tu Atención al Cliente con <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Agentes Telefónicos IA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              La Nueva Era de la Comunicación Empresarial Ha Llegado
            </p>
            <p className="text-lg mb-12 max-w-5xl mx-auto leading-relaxed text-gray-400">
              Imagina un mundo donde tus clientes reciben atención instantánea, personalizada y profesional las 24 horas del día, los 7 días de la semana, sin costos adicionales de personal ni tiempos de espera frustrantes. Esa realidad es hoy posible con nuestra solución de Agentes Telefónicos IA.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white border-0" asChild>
              <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                Agenda tu Demo Gratuita
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose AI Agents */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section text-white">
            ¿Por Qué Elegir Agentes Telefónicos IA?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-section bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
              <CardHeader>
                <Clock className="w-12 h-12 text-[#667eea] mb-4" />
                <CardTitle className="text-xl text-white">🚀 Disponibilidad Total</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
                  <li>• Atención 24/7/365 sin descansos ni vacaciones</li>
                  <li>• Respuesta inmediata en menos de 2 segundos</li>
                  <li>• Cero tiempos de espera para tus clientes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-[#667eea] mb-4" />
                <CardTitle className="text-xl text-white">💰 Reducción de Costos Operativos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
                  <li>• Hasta 70% menos costos que un call center tradicional</li>
                  <li>• Sin gastos de contratación, capacitación ni rotación</li>
                  <li>• Escalabilidad inmediata sin inversión adicional</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
              <CardHeader>
                <Users className="w-12 h-12 text-[#667eea] mb-4" />
                <CardTitle className="text-xl text-white">🎯 Experiencia Superior del Cliente</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
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
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#764ba2]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section text-white">
            Nuestra Solución Tecnológica de Vanguardia
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-in-section">
              <Card className="h-full bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
                <CardHeader>
                  <Bot className="w-16 h-16 text-[#667eea] mb-4" />
                  <CardTitle className="text-2xl text-white">RetellAI: El Cerebro de la Conversación</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                      <span>Procesamiento de Lenguaje Natural avanzado que entiende contexto y emociones</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                      <span>Integración multiidioma para atender clientes globales</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                      <span>Aprendizaje continuo que mejora con cada conversación</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                      <span>Personalización completa según tu marca y procesos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="slide-in-section">
              <Card className="h-full bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
                <CardHeader>
                  <Cpu className="w-16 h-16 text-[#764ba2] mb-4" />
                  <CardTitle className="text-2xl text-white">LiveKit: La Infraestructura de Comunicación</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#764ba2] mt-0.5 flex-shrink-0" />
                      <span>Audio en tiempo real con calidad cristalina</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#764ba2] mt-0.5 flex-shrink-0" />
                      <span>Latencia ultra-baja para conversaciones fluidas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#764ba2] mt-0.5 flex-shrink-0" />
                      <span>Escalabilidad empresarial que crece con tu negocio</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#764ba2] mt-0.5 flex-shrink-0" />
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
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section text-white">
            Casos de Uso que Transformarán tu Negocio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-section bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
              <CardHeader>
                <Headphones className="w-12 h-12 text-[#667eea] mb-4" />
                <CardTitle className="text-xl text-white">📞 Atención al Cliente</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
                  <li>• Resolución de consultas frecuentes</li>
                  <li>• Seguimiento de pedidos y servicios</li>
                  <li>• Soporte técnico de primer nivel</li>
                  <li>• Gestión de quejas y reclamos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-[#764ba2] mb-4" />
                <CardTitle className="text-xl text-white">💼 Ventas y Prospección</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
                  <li>• Calificación automática de leads</li>
                  <li>• Seguimiento de cotizaciones</li>
                  <li>• Programación de citas comerciales</li>
                  <li>• Cross-selling y up-selling inteligente</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
              <CardHeader>
                <Calendar className="w-12 h-12 text-[#667eea] mb-4" />
                <CardTitle className="text-xl text-white">📋 Servicios Administrativos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
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
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#667eea]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section text-white">
            Beneficios Comprobados
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-in-section">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Para tu Empresa:</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#667eea] flex-shrink-0" />
                  <span className="text-lg text-gray-300">ROI del 300% en los primeros 12 meses</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#667eea] flex-shrink-0" />
                  <span className="text-lg text-gray-300">Reducción del 60% en tiempo de respuesta</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#667eea] flex-shrink-0" />
                  <span className="text-lg text-gray-300">Aumento del 40% en satisfacción del cliente</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#667eea] flex-shrink-0" />
                  <span className="text-lg text-gray-300">Disponibilidad del 99.9% garantizada</span>
                </li>
              </ul>
            </div>

            <div className="slide-in-section">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Para tus Clientes:</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#764ba2] flex-shrink-0" />
                  <span className="text-lg text-gray-300">Atención inmediata sin esperas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#764ba2] flex-shrink-0" />
                  <span className="text-lg text-gray-300">Resolución eficiente de consultas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#764ba2] flex-shrink-0" />
                  <span className="text-lg text-gray-300">Experiencia consistente y profesional</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#764ba2] flex-shrink-0" />
                  <span className="text-lg text-gray-300">Disponibilidad total cuando la necesiten</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section text-white">
            Implementación Sin Complicaciones
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-section bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
              <CardHeader>
                <CardTitle className="text-xl text-white">Fase 1: Análisis y Configuración (Semana 1-2)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
                  <li>• Análisis de procesos actuales</li>
                  <li>• Configuración personalizada del agente IA</li>
                  <li>• Integración con sistemas existentes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
              <CardHeader>
                <CardTitle className="text-xl text-white">Fase 2: Entrenamiento y Pruebas (Semana 3-4)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
                  <li>• Entrenamiento con datos específicos de tu empresa</li>
                  <li>• Pruebas internas y ajustes finos</li>
                  <li>• Validación de flujos de conversación</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
              <CardHeader>
                <CardTitle className="text-xl text-white">Fase 3: Lanzamiento y Optimización (Semana 5+)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
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
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#764ba2]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section text-white">
            Casos de Éxito
          </h2>
          <div className="max-w-4xl mx-auto text-center slide-in-section">
            <blockquote className="text-xl md:text-2xl italic text-gray-300 mb-8">
              "Implementamos los agentes IA y en el primer mes redujimos los costos de call center en un 65% mientras mejoramos significativamente la satisfacción del cliente."
            </blockquote>
            <cite className="text-lg font-semibold text-[#667eea]">
              — Director de Operaciones, Empresa de Telecomunicaciones
            </cite>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section text-white">
            Inversión y Paquetes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-section bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Starter Plan</CardTitle>
                <CardDescription className="text-3xl font-bold text-[#667eea]">Desde $299/mes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
                  <li>• Hasta 1,000 llamadas mensuales</li>
                  <li>• 1 agente IA personalizado</li>
                  <li>• Integración básica</li>
                  <li>• Soporte por email</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 border-[#667eea]/50 border-2 hover:from-[#667eea]/30 hover:to-[#764ba2]/30 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Professional Plan</CardTitle>
                <CardDescription className="text-3xl font-bold text-white">Desde $899/mes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Hasta 10,000 llamadas mensuales</li>
                  <li>• 3 agentes IA especializados</li>
                  <li>• Integraciones avanzadas</li>
                  <li>• Analytics y reportes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/[0.05] border-white/10 hover:bg-white/[0.08] transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Enterprise Plan</CardTitle>
                <CardDescription className="text-3xl font-bold text-[#764ba2]">Consultar</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
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
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20" />
          <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#667eea]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#764ba2]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white slide-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Soluciones Específicas por Sector</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Descubre nuestras soluciones personalizadas para diferentes industrias
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white border-0">
              <a href="/agentes-ia/restaurantes" className="flex items-center space-x-2">
                <ChefHat className="w-5 h-5" />
                <span>🍽️ Solución para Restaurantes</span>
              </a>
            </Button>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Listo para el Futuro?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            No esperes a que tu competencia tome la delantera. Los agentes telefónicos IA no son el futuro, son el presente.
          </p>
          <h3 className="text-2xl font-bold mb-8">Agenda tu Demo Gratuita Hoy</h3>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
              <a href="mailto:info@robotsconsultant.net" className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>info@robotsconsultant.net</span>
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
              <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+34 654 94 27 20</span>
              </a>
            </Button>
          </div>
          
          <p className="text-xl font-semibold text-gray-300">
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