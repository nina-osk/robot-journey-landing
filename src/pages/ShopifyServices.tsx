import { useEffect } from 'react';
import { Phone, Mail, CheckCircle, Zap, Code, Palette, ShoppingBag, Bot, Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ShopifyServices = () => {
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
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white slide-in-section">
            <ShoppingBag className="w-20 h-20 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Desarrollo <span className="text-emerald-200">Shopify</span> Personalizado
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Temas únicos, Apps personalizadas y Automatizaciones con IA para tu tienda Shopify
            </p>
            <p className="text-lg mb-12 max-w-5xl mx-auto leading-relaxed">
              Transformamos tu visión en una tienda Shopify de alto rendimiento con diseño exclusivo, 
              funcionalidades a medida y automatizaciones inteligentes que impulsan tus ventas.
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Solicita tu Presupuesto Personalizado
            </Button>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            Nuestros Servicios Shopify
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-section border-t-4 border-t-purple-500">
              <CardHeader>
                <Palette className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-2xl">🎨 Temas Personalizados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Diseñamos y desarrollamos temas Shopify únicos que reflejan perfectamente tu marca
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Diseño 100% personalizado y responsive</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Optimizado para conversiones y SEO</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Compatible con todas las apps de Shopify</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Velocidad de carga ultrarrápida</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Editor personalizado para tu equipo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section border-t-4 border-t-blue-500">
              <CardHeader>
                <Code className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">⚙️ Apps Personalizadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Creamos aplicaciones a medida para añadir funcionalidades específicas a tu tienda
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Integraciones con sistemas externos (ERP, CRM)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Calculadoras de precios personalizadas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Sistemas de suscripciones avanzados</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Gestión de inventario personalizada</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Soluciones B2B y mayoristas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section border-t-4 border-t-emerald-500">
              <CardHeader>
                <Bot className="w-12 h-12 text-emerald-600 mb-4" />
                <CardTitle className="text-2xl">🤖 Automatizaciones con IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Implementamos inteligencia artificial para automatizar y optimizar tu negocio
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Chatbots IA para atención al cliente 24/7</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Recomendaciones de productos inteligentes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Optimización de precios dinámica</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automatización de marketing y emails</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Análisis predictivo de ventas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            ¿Por Qué Elegirnos para tu Proyecto Shopify?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="slide-in-section">
              <CardContent className="p-6">
                <Sparkles className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Experiencia Especializada</h3>
                <p className="text-gray-600">
                  Somos expertos certificados en Shopify con años de experiencia desarrollando 
                  soluciones para todo tipo de negocios, desde pequeñas boutiques hasta grandes retailers.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Enfoque en Resultados</h3>
                <p className="text-gray-600">
                  No solo creamos código bonito, creamos soluciones que aumentan tus ventas, 
                  mejoran la experiencia del cliente y reducen tus costos operativos.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardContent className="p-6">
                <Code className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Código de Calidad</h3>
                <p className="text-gray-600">
                  Seguimos las mejores prácticas de Shopify y escribimos código limpio, 
                  documentado y fácil de mantener para que tu tienda sea escalable.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-in-section">
              <CardContent className="p-6">
                <Bot className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Innovación con IA</h3>
                <p className="text-gray-600">
                  Integramos las últimas tecnologías de inteligencia artificial para 
                  automatizar procesos y ofrecer experiencias de compra únicas a tus clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso IA */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 slide-in-section">
            Casos de Uso de IA en Shopify
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Descubre cómo la inteligencia artificial puede transformar tu tienda Shopify
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="slide-in-section bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="w-6 h-6 text-blue-600" />
                  <span>Asistente de Ventas IA</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un chatbot inteligente que atiende consultas, recomienda productos y 
                  ayuda a completar la compra, aumentando la conversión hasta un 40%.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    <span>Respuestas instantáneas 24/7</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    <span>Recomendaciones personalizadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    <span>Gestión de carritos abandonados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  <span>Generación de Contenido</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  IA que genera descripciones de productos optimizadas para SEO, 
                  emails de marketing personalizados y contenido para redes sociales.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    <span>Descripciones SEO optimizadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    <span>Emails automáticos personalizados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    <span>Posts para redes sociales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-orange-600" />
                  <span>Optimización de Precios</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Algoritmos de IA que ajustan precios dinámicamente según demanda, 
                  competencia y otros factores para maximizar tus ganancias.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    <span>Precios dinámicos automáticos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    <span>Análisis de competencia</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    <span>Maximización de márgenes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingBag className="w-6 h-6 text-green-600" />
                  <span>Búsqueda Visual Inteligente</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Los clientes pueden buscar productos subiendo fotos, 
                  y la IA encuentra artículos similares en tu catálogo.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    <span>Búsqueda por imagen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    <span>Reconocimiento de productos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    <span>Experiencia de compra mejorada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 slide-in-section">
            Nuestro Proceso de Trabajo
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="slide-in-section text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Consulta Inicial</h3>
                <p className="text-sm text-gray-600">
                  Entendemos tus necesidades, objetivos y visión para tu tienda Shopify
                </p>
              </CardContent>
            </Card>

            <Card className="slide-in-section text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Propuesta & Diseño</h3>
                <p className="text-sm text-gray-600">
                  Creamos mockups y una propuesta técnica detallada con presupuesto
                </p>
              </CardContent>
            </Card>

            <Card className="slide-in-section text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Desarrollo</h3>
                <p className="text-sm text-gray-600">
                  Desarrollamos tu solución con actualizaciones regulares y feedback
                </p>
              </CardContent>
            </Card>

            <Card className="slide-in-section text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Lanzamiento & Soporte</h3>
                <p className="text-sm text-gray-600">
                  Implementamos y te acompañamos con soporte continuo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white slide-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            ¿Listo para Llevar tu Tienda Shopify al Siguiente Nivel?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contáctanos hoy y descubre cómo podemos transformar tu visión en una tienda Shopify exitosa
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <a href="mailto:info@robotsconsultant.net" className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>info@robotsconsultant.net</span>
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+34 654 94 27 20</span>
              </a>
            </Button>
          </div>
          
          <p className="text-lg font-semibold">
            Consulta gratuita sin compromiso • Presupuesto personalizado en 48h
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopifyServices;