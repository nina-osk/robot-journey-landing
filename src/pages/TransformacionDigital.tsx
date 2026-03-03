import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign, 
  Zap, 
  Target, 
  Shield, 
  Settings,
  Award,
  Star,
  ArrowRight,
  Building2,
  Cpu,
  Cloud,
  BarChart3
} from 'lucide-react';

const TransformacionDigital = () => {
  const scrollToCalendly = () => {
    const calendlyElement = document.getElementById('calendly-section');
    if (calendlyElement) {
      calendlyElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#667eea]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#764ba2]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Transforma tu Empresa en 90 Días
            </span>
            <br />
            con Odoo + Automatización IA
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8 max-w-4xl mx-auto">
            Implementamos Odoo ERP, automatizamos tus procesos con IA (Make o n8n) y te proporcionamos toda la infraestructura tecnológica. 
            Una solución completa para empresas que quieren liderar su industria.
          </h2>
          
          <div className="bg-[#0a0a0a]/[0.05] border border-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              ¿Cansado de perder tiempo en tareas repetitivas mientras tus competidores avanzan más rápido?
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-8">
              Imagínate gestionar tu empresa completa desde una sola plataforma, donde la inteligencia artificial 
              trabaja 24/7 automatizando ventas, inventarios, facturación y atención al cliente, mientras tú te 
              enfocas en hacer crecer tu negocio.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center text-green-300">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Odoo ERP completo configurado para tu industria</span>
              </div>
              <div className="flex items-center text-green-300">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Automatización IA que elimina 80% del trabajo manual</span>
              </div>
              <div className="flex items-center text-green-300">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Infraestructura cloud escalable y segura</span>
              </div>
              <div className="flex items-center text-green-300">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Soporte técnico especializado incluido</span>
              </div>
            </div>
          </div>

          <Button
            onClick={scrollToCalendly}
            className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:transition-all hover:shadow-[#667eea]/40 text-white px-8 py-6 rounded-xl text-lg font-semibold border-0 transition-all duration-300 transform hover:scale-105 mb-4"
          >
            SOLICITA TU CONSULTA GRATUITA - Ahorra $50,000+ al Año
          </Button>
          
          <p className="text-sm text-gray-300">
            Más de 500 empresas ya transformaron sus operaciones. Únete al futuro empresarial hoy.
          </p>
        </div>
      </section>

      {/* Problema/Agitación Section */}
      <section className="py-20 bg-gradient-to-br from-white/[0.03] to-white/[0.03]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Tu Empresa Sigue Perdiendo Dinero por Procesos Obsoletos?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Cada día que tu empresa opera con sistemas desconectados y procesos manuales, estás perdiendo:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="bg-[#0a0a0a] transition-all bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">$2,000-5,000 mensuales</h3>
                <p className="text-gray-400">en errores humanos y reprocesos</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0a0a0a] transition-all bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">40+ horas semanales</h3>
                <p className="text-gray-400">de tu equipo en tareas repetitivas</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0a0a0a] transition-all bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Clientes potenciales</h3>
                <p className="text-gray-400">por respuestas lentas y desorganización</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-red-700 mb-2">Estadística de Impacto</h3>
            <p className="text-lg text-red-700">
              Las empresas que no adoptan automatización IA pierden <strong>23% de ingresos anuales</strong> vs 
              sus competidores digitalizados (McKinsey 2024)
            </p>
            <p className="text-xl font-semibold text-red-800 mt-4">
              ¿Cuánto te está costando NO automatizar tu empresa?
            </p>
          </div>
        </div>
      </section>

      {/* Solución Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              La Única Plataforma que Necesitas para Automatizar Completamente tu Empresa
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Combinamos el poder de Odoo ERP con automatización inteligente y la infraestructura más avanzada 
              para crear el sistema empresarial del futuro.
            </p>
          </div>

          {/* Tres Pilares */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pilar 1: Odoo ERP */}
            <Card className="bg-[#0a0a0a] shadow-xl bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">PILAR 1: ODOO ERP COMPLETO</h3>
                  <p className="text-gray-400">Tu centro de comando empresarial</p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>CRM Avanzado:</strong> Gestión completa de clientes y ventas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Inventario Inteligente:</strong> Control automático de stock y compras</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Contabilidad Integrada:</strong> Facturación y reportes financieros en tiempo real</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>RRHH y Nómina:</strong> Gestión completa de personal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>E-commerce:</strong> Tienda online integrada con todo el sistema</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm font-semibold text-blue-800 text-center">
                    "Una sola plataforma para gestionar absolutamente todo tu negocio"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Pilar 2: Automatización IA */}
            <Card className="bg-[#0a0a0a] shadow-xl bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Cpu className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">PILAR 2: AUTOMATIZACIÓN IA</h3>
                  <p className="text-gray-400">Tu equipo de trabajo digital 24/7</p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Lead Nurturing Automático:</strong> IA que convierte prospectos en clientes</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Gestión de Inventario:</strong> Reposición automática basada en demanda predictiva</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Atención al Cliente IA:</strong> Chatbots que resuelven 90% de consultas</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Reportes Automáticos:</strong> Dashboards y análisis generados sin intervención</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Análisis Predictivo:</strong> IA que anticipa tendencias y oportunidades</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm font-semibold text-purple-800 text-center">
                    "Imagina tener 20 empleados virtuales trabajando perfectamente 24/7"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Pilar 3: Infraestructura */}
            <Card className="bg-[#0a0a0a] shadow-xl bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Cloud className="w-16 h-16 text-[#667eea] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">PILAR 3: INFRAESTRUCTURA IA</h3>
                  <p className="text-gray-400">La base tecnológica que necesitas</p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Cloud Escalable:</strong> Capacidad que crece con tu empresa</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Seguridad Avanzada:</strong> Encriptación y backups automáticos</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>APIs Ilimitadas:</strong> Conecta cualquier herramienta o servicio</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Monitoreo 24/7:</strong> Uptime garantizado del 99.9%</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Actualizaciones Automáticas:</strong> Siempre la última tecnología</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm font-semibold text-green-800 text-center">
                    "La infraestructura que usan las empresas Fortune 500, ahora para tu negocio"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios/Transformación Section */}
      <section className="py-20 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Los Resultados que Obtienes en los Primeros 90 Días
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Impacto Financiero */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 transition-all bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-8">
                <DollarSign className="w-12 h-12 text-[#667eea] mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-green-800">IMPACTO FINANCIERO</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Ahorro de $50,000+/año en costos operativos</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Incremento del 35% en eficiencia de ventas</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Reducción del 80% en errores administrativos</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>ROI del 400% en el primer año</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Impacto Operativo */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 transition-all bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-blue-800">IMPACTO OPERATIVO</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Ahorro de 40+ horas semanales en tareas manuales</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Respuesta 10x más rápida a clientes</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Visibilidad 100% en tiempo real de tu negocio</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Escalabilidad ilimitada sin contratar más personal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Impacto Estratégico */}
            <Card className="bg-gradient-to-br from-white/[0.03] to-white/[0.03] transition-all bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-purple-800">IMPACTO ESTRATÉGICO</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Award className="w-5 h-5 text-purple-600 mr-3" />
                    <span>Ventaja competitiva sostenible</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="w-5 h-5 text-purple-600 mr-3" />
                    <span>Toma de decisiones basada en datos precisos</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="w-5 h-5 text-purple-600 mr-3" />
                    <span>Crecimiento acelerado sin aumentar complejidad</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="w-5 h-5 text-purple-600 mr-3" />
                    <span>Preparación total para el futuro digital</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Antes vs Después */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-center mb-8">ANTES vs DESPUÉS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-100 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-red-800 mb-4">ANTES (Sistema Actual)</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• 5+ sistemas desconectados</li>
                  <li>• Reportes manuales semanales</li>
                  <li>• Errores humanos frecuentes</li>
                  <li>• 8 horas para procesar pedidos</li>
                  <li>• Seguimiento por Excel</li>
                  <li>• Costos ocultos constantes</li>
                </ul>
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-800 mb-4">DESPUÉS (Con Nuestra Solución)</h4>
                <ul className="space-y-2 text-green-700">
                  <li>• 1 plataforma unificada</li>
                  <li>• Dashboards en tiempo real</li>
                  <li>• Precisión del 99.9%</li>
                  <li>• 15 minutos automatizados</li>
                  <li>• IA predictiva avanzada</li>
                  <li>• Transparencia total</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precios y Paquetes Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Invierte Menos de lo que Gastas en un Empleado y Obtén el Poder de 20
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Paquete Starter */}
            <Card className="bg-[#0a0a0a] shadow-xl bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">PAQUETE STARTER</h3>
                  <p className="text-gray-400">Para empresas de 1-5 empleados</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">Desde 2,000</span>
                    <span className="text-gray-500"> EUR</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Equivale a 6 meses del salario de 1 empleado</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Odoo ERP completo (5 módulos principales opcional -Adicional)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>2 automatizaciones básicas con IA</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Infraestructura cloud básica</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Implementación en 30 días</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>3 meses de soporte incluido</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={scrollToCalendly}
                  className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:bg-blue-700 text-white"
                >
                  Comenzar Ahora
                </Button>
              </CardContent>
            </Card>

            {/* Paquete Professional - Más Popular */}
            <Card className="bg-[#0a0a0a] shadow-2xl border-4 border-white/500 relative bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  ⭐ MÁS POPULAR
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">PAQUETE PROFESSIONAL</h3>
                  <p className="text-gray-400">Para empresas de 5-10 empleados</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">Desde 5,000</span>
                    <span className="text-gray-500"> EUR</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Se paga solo en 8 meses con los ahorros generados</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Todo del Starter +</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Odoo ERP avanzado (módulos ilimitados)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>10 automatizaciones avanzadas con IA</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Infraestructura cloud premium</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>6 meses de soporte premium</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={scrollToCalendly}
                  className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Elegir Professional
                </Button>
              </CardContent>
            </Card>

            {/* Paquete Enterprise */}
            <Card className="bg-[#0a0a0a] shadow-xl bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">PAQUETE ENTERPRISE</h3>
                  <p className="text-gray-400">Para empresas de 10+ empleados</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">Consultar</span>
                    <span className="text-gray-500"> EUR</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">ROI del 400% en el primer año</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Todo del Professional +</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Personalización completa sin límites</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Automatizaciones ilimitadas y IA avanzada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Infraestructura dedicada de clase mundial</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>12 meses de soporte enterprise</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mr-3" />
                    <span>Consultor dedicado permanente</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={scrollToCalendly}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Contactar Enterprise
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Éxito Section */}
      <section className="py-20 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]/[0.03]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empresas Reales, Resultados Reales, Transformaciones Reales
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Caso 1 */}
            <Card className="bg-[#0a0a0a] transition-all bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">Distribuidora Regional</h3>
                <p className="text-gray-400 mb-4">15 empleados - Alimentos</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-[#667eea]">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Reducción de 60% en procesamiento de pedidos</span>
                  </div>
                  <div className="flex items-center text-[#667eea]">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Incremento de 45% en ventas</span>
                  </div>
                  <div className="flex items-center text-[#667eea]">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Ahorro en costos</span>
                  </div>
                  <div className="flex items-center text-[#667eea]">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Zero errores en facturación</span>
                  </div>
                </div>
                
                <blockquote className="text-sm italic text-gray-300 border-l-4 border-white/500 pl-4">
                  "Pasamos de procesar 50 pedidos diarios a 200, con la mitad del equipo administrativo"
                </blockquote>
                <p className="text-xs text-gray-500 mt-2">- Director de Operaciones</p>
              </CardContent>
            </Card>

            {/* Caso 2 */}
            <Card className="bg-[#0a0a0a] transition-all bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">Cadena de Restaurantes</h3>
    
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-[#667eea]">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Optimización de 35% en inventario</span>
                  </div>
                  <div className="flex items-center text-[#667eea]">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Satisfacción del cliente 95%</span>
                  </div>
                  <div className="flex items-center text-[#667eea]">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Reducción 50% desperdicio de alimentos</span>
                  </div>
                </div>
                
                <blockquote className="text-sm italic text-gray-300 border-l-4 border-white/500 pl-4">
                  "La IA predice exactamente qué y cuánto necesitamos cada día. Nunca habíamos sido tan eficientes"
                </blockquote>
                <p className="text-xs text-gray-500 mt-2">- CEO</p>
              </CardContent>
            </Card>

            {/* Caso 3 */}
            <Card className="bg-[#0a0a0a] transition-all bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">Empresa de Servicios</h3>
                <p className="text-gray-400 mb-4">7 empleados - Consultoría</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-[#667eea]">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Incremento 80% en productividad</span>
                  </div>
                  <div className="flex items-center text-[#667eea]">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Reducción 90% tareas administrativas</span>
                  </div>
                  <div className="flex items-center text-[#667eea]">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Crecimiento 65% en facturación</span>
                  </div>
                  <div className="flex items-center text-[#667eea]">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Perfect score satisfacción cliente</span>
                  </div>
                </div>
                
                <blockquote className="text-sm italic text-gray-300 border-l-4 border-white/500 pl-4">
                  "Ahora nuestro equipo se enfoca 100% en generar valor para clientes. La automatización maneja todo lo demás"
                </blockquote>
                <p className="text-xs text-gray-500 mt-2">- Fundador</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Tu Empresa Puede Seguir Igual... o Puede Liderar su Industria
          </h2>
          
          <div className="bg-[#0a0a0a]/10 backdrop-blur-md rounded-2xl p-8 mb-8">
            <p className="text-xl mb-6">
              La decisión que tomes hoy definirá el futuro de tu empresa.
            </p>
            <p className="text-lg mb-6">
              Mientras lees esto, tus competidores están evaluando automatizar sus procesos. 
              Los que actúen primero tendrán una ventaja imposible de alcanzar.
            </p>
            <p className="text-xl font-bold">
              ¿Vas a ser el líder que transforma su industria, o el que se queda atrás 
              viendo cómo otros crecen más rápido?
            </p>
          </div>
          
          <Button
            onClick={scrollToCalendly}
            className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-2xl font-bold rounded-xl transform hover:scale-105 transition-all duration-300 mb-8"
          >
            🚀 SÍ, QUIERO TRANSFORMAR MI EMPRESA AHORA
          </Button>
          
          <div className="bg-yellow-500 text-black p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">GARANTÍA TOTAL DE SATISFACCIÓN</h3>
            <p className="text-lg">
              Si en cualquier momento de los primeros 30 días no estás completamente satisfecho, 
              te devolvemos el 100% de tu inversión sin preguntas.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section id="calendly-section" className="py-20 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Agenda Tu Consulta Gratuita
            </h2>
            <p className="text-xl text-gray-400">
              Hablemos sobre cómo transformar tu empresa en los próximos 90 días
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-300 mb-4">
              📅 Calendly Widget se cargará aquí
            </p>
            <p className="text-gray-400">
              Selecciona el horario que mejor te convenga para tu consulta personalizada
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransformacionDigital;