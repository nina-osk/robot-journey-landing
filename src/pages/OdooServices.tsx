import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, ArrowRight, Search, Settings, Users, LifeBuoy, Zap, TrendingUp, Shield, Clock, Target, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OdooServices = () => {
  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('.calendly-inline-widget');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existingScript) {
      document.head.appendChild(script);
    }
    return () => {
      const scriptToRemove = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta implementar Odoo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende totalmente de la complejidad de tu empresa y la versión elegida (Community o Enterprise). Por eso, nuestro primer paso es siempre un diagnóstico gratuito para darte un presupuesto cerrado y sin sorpresas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo tarda el proceso de implementación de Odoo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una implementación básica puede tardar unas pocas semanas, mientras que proyectos más complejos pueden llevar varios meses. En nuestra hoja de ruta inicial te daremos una estimación de tiempo precisa."
        }
      },
      {
        "@type": "Question",
        "name": "Mi equipo no es muy tecnológico, ¿será difícil para ellos usar Odoo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Odoo es conocido por su interfaz amigable. Además, nuestro servicio incluye una formación completa y práctica para asegurar que todo tu equipo se sienta cómodo y aproveche la herramienta al máximo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué diferencias hay entre Odoo Community y Enterprise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Odoo Community es gratuito y de código abierto, ideal para PyMES con funcionalidades básicas. Odoo Enterprise incluye módulos avanzados, soporte oficial, hosting en la nube y mayor escalabilidad. Te ayudamos a elegir la versión que mejor se adapte a tu presupuesto y necesidades."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo migrar mis datos desde mi sistema actual a Odoo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ofrecemos servicios de migración completos. Podemos transferir datos desde Excel, Access, otros ERPs o sistemas contables. Garantizamos la integridad de tus datos y minimizamos el tiempo de inactividad durante la transición."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipo de soporte ofrecen después de la implementación de Odoo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos soporte técnico continuo, actualizaciones, mantenimiento y nuevas personalizaciones. También disponemos de planes de soporte mensual y formación adicional según las necesidades de tu equipo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Odoo funciona en la nube o necesito servidores propios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Odoo puede funcionar en ambos modos. Podemos instalarlo en tus servidores locales para mayor control, o configurarlo en la nube (Odoo.sh, AWS, Azure) para mayor flexibilidad y menor mantenimiento. Te asesoramos sobre la mejor opción según tu caso."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué módulos de Odoo necesita mi empresa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cada empresa es diferente. En nuestro diagnóstico gratuito analizamos tus procesos actuales y te recomendamos exactamente qué módulos necesitas: CRM, Ventas, Inventario, Contabilidad, Proyectos, eCommerce, etc. Solo implementamos lo que realmente vas a usar."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo integrar Odoo con mis herramientas actuales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, Odoo tiene una excelente capacidad de integración. Podemos conectarlo con tu software de facturación, pasarelas de pago, tiendas online, herramientas de marketing, sistemas bancarios y muchas otras aplicaciones que ya uses en tu negocio."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué pasa si mi negocio crece? ¿Odoo puede escalarse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutamente. Odoo está diseñado para crecer contigo. Puedes añadir nuevos usuarios, módulos y funcionalidades sin límites. Muchas empresas empiezan con funciones básicas y van expandiendo el sistema según van creciendo sus necesidades."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white/[0.03]">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <img 
              src="https://www.odoo.com/web/image/website/1/logo/Odoo?unique=689cb1c" 
              alt="Odoo Official Partner" 
              className="mx-auto h-12 mb-4"
            />
            <span className="inline-block bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 text-[#667eea] px-3 py-1 rounded-full text-sm font-medium">
              Partner Oficial de Odoo
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transforma tu Empresa. Crece sin Límites.
            <span className="block bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Todo con un Único Sistema: Odoo</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Como Partners Oficiales de Odoo, convertimos tus procesos complejos en un sistema integrado, 
            eficiente y hecho a la medida de tu negocio. Deja que la tecnología trabaje para ti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white" asChild>
              <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                Agenda tu Diagnóstico Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-gray-400">
            Más de 50+ implementaciones exitosas | Experiencia en Odoo Community y Enterprise
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SERVICIO DESTACADO: KIOSCOS & MENÚS INTERACTIVOS
          ════════════════════════════════════════════════════════ */}

      {/* — Intro — */}
      <section className="py-20 px-4 border-t border-white/[0.06]">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block bg-gradient-to-r from-[#667eea]/15 to-[#764ba2]/15 text-[#667eea] border border-[#667eea]/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            🖥️ Servicio destacado
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Vende más sin contratar más personal
          </h2>
          <p className="text-xl text-gray-200 mb-4 leading-relaxed">
            El sistema de kioscos y menús interactivos que usan los restaurantes y tiendas modernas
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Reduce colas, aumenta el ticket medio y recupera el control de tu negocio con un sistema
            de pedidos y cobro automatizado, conectado a tu gestión.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['Instalación rápida', 'Sin complicaciones', 'Resultados reales'].map((tag, i) => (
              <span key={i} className="flex items-center gap-2 text-[#667eea] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#667eea]" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* — Problemas — */}
      <section className="py-16 px-4 bg-white/[0.025]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              ¿Te suena alguno de estos problemas?
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '⏳', text: 'Colas en horas punta' },
              { icon: '🚶', text: 'Clientes que se marchan sin comprar' },
              { icon: '😓', text: 'Personal saturado o difícil de encontrar' },
              { icon: '❌', text: 'Errores en pedidos o cobros' },
              { icon: '📊', text: 'Poco control real de ventas y stock' },
            ].map((p, i) => (
              <div key={i}
                className="flex items-center gap-3 bg-red-500/[0.06] border border-red-400/10 rounded-xl px-5 py-4">
                <span className="text-2xl">{p.icon}</span>
                <span className="text-gray-200 font-medium text-sm">{p.text}</span>
              </div>
            ))}
            <div className="flex items-center justify-center bg-[#667eea]/[0.08] border border-[#667eea]/20 rounded-xl px-5 py-4">
              <p className="text-[#667eea] font-semibold text-sm text-center">
                El problema no es tu producto. Es el sistema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* — Solución — */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              La solución que ya están usando los negocios rentables
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Un sistema de kioscos de autoservicio y menús interactivos, donde:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'El cliente pide o paga solo',
              'El sistema sugiere extras y packs automáticamente',
              'El pedido o la venta se registra en tiempo real',
              'Tu equipo se dedica a atender y vender mejor',
              'Toda la información se centraliza en la gestión',
            ].map((item, i) => (
              <div key={i}
                className="flex items-start gap-3 bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
            <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 border border-[#667eea]/20 rounded-xl p-5 flex items-center justify-center">
              <p className="text-center text-white font-semibold text-sm leading-relaxed">
                Resultado: más ventas, menos colas y menos dependencia del personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* — Para quién + Resultados — */}
      <section className="py-20 px-4 bg-white/[0.025]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Para quién */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                ¿Para quién es este sistema?
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🍽️</span>
                    <h4 className="font-semibold text-white">Restaurantes</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {['Cafeterías', 'Hamburgueserías', 'Pizzerías', 'Fast food', 'Restaurantes pequeños y medianos'].map((t, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#667eea] flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🏪</span>
                    <h4 className="font-semibold text-white">Tiendas</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {['Alimentación', 'Panaderías', 'Tiendas de conveniencia', 'Tiendas especializadas', 'Franquicias pequeñas'].map((t, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#764ba2] flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Resultados */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Resultados habituales
              </h3>
              <div className="space-y-3">
                {[
                  { icon: '📈', label: '+10% a +30%', sub: 'de ticket medio' },
                  { icon: '⏱', label: 'Menos tiempo de espera', sub: 'para tus clientes' },
                  { icon: '💸', label: 'Ahorro real', sub: 'en costes de personal' },
                  { icon: '⭐', label: 'Mejor experiencia', sub: 'de cliente' },
                  { icon: '🧠', label: 'Control total', sub: 'del negocio en tiempo real' },
                ].map((r, i) => (
                  <div key={i}
                    className="flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 hover:bg-white/[0.07] transition-colors">
                    <span className="text-2xl">{r.icon}</span>
                    <div>
                      <span className="text-white font-bold">{r.label}</span>
                      <span className="text-gray-400"> {r.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* — Packs de precios — */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Elige el pack que mejor se adapta a tu negocio
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">

            {/* Pack Esencial */}
            <Card className="p-8 bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] transition-all">
              <CardContent className="p-0">
                <div className="mb-6">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-400 mb-3" />
                  <h4 className="text-xl font-bold text-white">Pack Esencial</h4>
                  <p className="text-green-400 text-sm font-semibold mt-1">"Pedidos o cobros sin colas"</p>
                  <p className="text-gray-500 text-xs mt-1">Ideal para empezar sin complicaciones</p>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {[
                    '1 kiosco de pedidos o cobro',
                    'Menú o catálogo digital',
                    'Configuración de productos y precios',
                    'Integración básica',
                    'Formación inicial',
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-6 mb-6">
                  <p className="text-white font-bold text-2xl">1.200 €</p>
                  <p className="text-gray-400 text-sm mt-1">+ 99 €/mes</p>
                </div>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20" asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                    Quiero este pack
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Pack Profesional — destacado */}
            <Card className="p-8 bg-gradient-to-b from-[#667eea]/10 to-[#764ba2]/10 border border-[#667eea]/40 hover:border-[#667eea]/60 transition-all relative">
              <CardContent className="p-0">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg">
                    ⭐ El más contratado
                  </span>
                </div>
                <div className="mb-6 mt-3">
                  <span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mb-3" />
                  <h4 className="text-xl font-bold text-white">Pack Profesional</h4>
                  <p className="text-yellow-400 text-sm font-semibold mt-1">"Vende más en automático"</p>
                  <p className="text-gray-500 text-xs mt-1">El pack más contratado</p>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {[
                    '1–2 kioscos',
                    'Menú o catálogo con sugerencias y packs',
                    'Pedidos y pagos automatizados',
                    'Integración completa con ventas y stock',
                    'Panel de control',
                    'Optimización del ticket medio',
                    'Formación + acompañamiento',
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-200 text-sm">
                      <CheckCircle className="h-4 w-4 text-[#667eea] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-6 mb-6">
                  <p className="text-white font-bold text-2xl">2.500 €</p>
                  <p className="text-gray-400 text-sm mt-1">+ 149 €/mes</p>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white border-0"
                  asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                    Quiero este pack
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Pack Escala */}
            <Card className="p-8 bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] transition-all">
              <CardContent className="p-0">
                <div className="mb-6">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-400 mb-3" />
                  <h4 className="text-xl font-bold text-white">Pack Escala</h4>
                  <p className="text-blue-400 text-sm font-semibold mt-1">"Negocio inteligente"</p>
                  <p className="text-gray-500 text-xs mt-1">Para crecer sin perder control</p>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {[
                    'Varios kioscos',
                    'Gestión centralizada multi-local',
                    'Control avanzado de stock y ventas',
                    'Informes y análisis detallados',
                    'Automatizaciones personalizadas',
                    'Soporte continuo',
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-6 mb-6">
                  <p className="text-white font-bold text-2xl">5.000 €</p>
                  <p className="text-gray-400 text-sm mt-1">+ 299 €/mes</p>
                </div>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20" asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                    Quiero este pack
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* — Por qué nosotros + CTA análisis gratuito — */}
      <section className="py-20 px-4 bg-white/[0.025]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Por qué nosotros */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                ¿Por qué trabajar con nosotros?
              </h3>
              <div className="space-y-4">
                {[
                  { icon: '⚡', title: 'Implantación rápida y guiada', desc: 'Sin semanas de espera ni interrupciones en tu negocio.' },
                  { icon: '🎯', title: 'Pensado para negocios reales', desc: 'No para técnicos. Soluciones prácticas desde el primer día.' },
                  { icon: '🤝', title: 'Acompañamiento continuo', desc: 'Estamos contigo después de la instalación.' },
                  { icon: '📈', title: 'Sistema escalable', desc: 'Crece cuando tú crezcas, sin empezar desde cero.' },
                  { icon: '🔑', title: 'Un único proveedor para todo', desc: 'Hardware, software, integración y soporte.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    <span className="text-2xl mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA análisis gratuito */}
            <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 border border-[#667eea]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                ¿Encajará este sistema en tu negocio?
              </h3>
              <p className="text-gray-300 mb-2 leading-relaxed">
                En la mayoría de casos, sí. Pero cada local es diferente.
              </p>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Por eso ofrecemos un <span className="text-white font-semibold">análisis gratuito</span>, donde:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Revisamos tu negocio',
                  'Calculamos el impacto real',
                  'Vemos qué pack te encaja',
                  'Explicamos cómo sería la instalación',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs mb-6 text-center">Sin compromiso.</p>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-xl hover:shadow-[#667eea]/40 text-white border-0 py-6 text-base font-semibold"
                asChild>
                <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                  📲 Quiero mi análisis gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-center text-gray-500 text-xs mt-4">
                Descubre cuánto podrías vender más con kioscos y menús interactivos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* — FAQ Kioscos — */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Preguntas frecuentes
            </h3>
          </div>
          <Accordion type="single" collapsible>
            {[
              { q: '¿Es complicado de usar?', a: 'No. El sistema es intuitivo tanto para clientes como para el personal. En horas ya funciona sin ayuda.' },
              { q: '¿Cuánto tarda la instalación?', a: 'Normalmente entre uno y tres días. Planificamos todo para que no interrumpir tu actividad.' },
              { q: '¿Necesito conocimientos técnicos?', a: 'No. Nos encargamos de todo: hardware, software, configuración e integración con tu gestión.' },
              { q: '¿Funciona con varios locales?', a: 'Sí, el sistema está preparado para escalar. Con el Pack Escala gestionas todos los locales desde un único panel.' },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`kiosco-${i}`}>
                <AccordionTrigger className="text-left text-white hover:text-[#667eea]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* — Tagline final — */}
      <div className="py-8 bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 border-y border-white/[0.06]">
        <div className="container mx-auto text-center">
          <p className="text-white text-lg font-semibold tracking-wide">
            ✅ Menos colas · Más ventas · Más control
          </p>
        </div>
      </div>

      {/* Sección de Problema */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              ¿Tu empresa sufre de "caos operativo"?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Si te identificas con alguno de estos puntos, no estás solo. Y tenemos la solución.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Procesos Desconectados</h3>
                    <p className="text-gray-400">
                      Usas un programa para facturas, otro para clientes (CRM), un Excel para el inventario... 
                      y nada se comunica entre sí.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Pérdida de Tiempo y Dinero</h3>
                    <p className="text-gray-400">
                      Tareas manuales y repetitivas que consumen horas de tu equipo y provocan errores costosos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Falta de Visibilidad</h3>
                    <p className="text-gray-400">
                      No tienes una visión 360° de tu negocio en tiempo real. Tomar decisiones se basa en intuición, no en datos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Crecimiento Estancado</h3>
                    <p className="text-gray-400">
                      Tu sistema actual no puede escalar. Cada nuevo cliente o producto añade más complejidad y desorden.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de Solución */}
      <section className="py-20 px-4 bg-white/[0.03]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Odoo es la Solución. Nosotros, tu Socio Estratégico para Implementarla.
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-400">
              <p>
                Odoo centraliza TODO lo que tu negocio necesita en una única plataforma: CRM, Ventas, 
                Inventario, Contabilidad, Proyectos, Sitio Web y mucho más. Es el sistema operativo para tu empresa.
              </p>
              <p>
                Pero una herramienta potente necesita una implementación experta. Aquí es donde entramos nosotros. 
                No solo instalamos Odoo, lo adecuamos a la perfección a tus flujos de trabajo, asegurando una 
                transición suave y resultados desde el primer día.
              </p>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              La Solución Perfecta para Ti, sin Importar tu Presupuesto
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold mb-2 text-white">Odoo Community</h4>
                    <p className="text-gray-400">Código abierto y potente</p>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Ideal para startups y PYMES que buscan una solución potente y de código abierto. 
                    Te ayudamos a instalarlo, configurarlo y personalizarlo para exprimir todo su 
                    potencial sin costes de licencia.
                  </p>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10" asChild>
                    <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">Conocer Community</a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-white/[0.05] border-[#667eea]/30 hover:bg-white/[0.08]">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 text-[#667eea] px-3 py-1 rounded-full text-xs font-medium mb-2">
                      Recomendado
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-white">Odoo Enterprise</h4>
                    <p className="text-gray-400">Funcionalidades avanzadas</p>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Para empresas que necesitan funcionalidades avanzadas, soporte oficial y una 
                    escalabilidad sin precedentes. Como partners, te damos acceso a la versión más 
                    completa y nos encargamos de todo.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:shadow-lg hover:shadow-[#667eea]/40" asChild>
                    <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">Conocer Enterprise</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Proceso */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Nuestro Proceso de Transformación Digital: Simple y Transparente
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-[#667eea]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">Paso 1: Diagnóstico y Estrategia</h3>
                  <p className="text-gray-400 text-sm">
                    Escuchamos. Analizamos tus procesos actuales, identificamos cuellos de botella 
                    y definimos juntos los objetivos. Te entregamos una hoja de ruta clara.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-[#667eea]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">Paso 2: Implementación y Adecuación</h3>
                  <p className="text-gray-400 text-sm">
                    Nuestro equipo de expertos instala y configura los módulos de Odoo que necesitas. 
                    No adaptamos tu empresa a Odoo; adaptamos Odoo a tu empresa.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#667eea]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">Paso 3: Formación y Puesta en Marcha</h3>
                  <p className="text-gray-400 text-sm">
                    Capacitamos a tu equipo para que dominen la herramienta. Aseguramos una adopción 
                    rápida y exitosa para que empiecen a ver los beneficios de inmediato.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LifeBuoy className="h-8 w-8 text-[#667eea]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">Paso 4: Soporte y Optimización</h3>
                  <p className="text-gray-400 text-sm">
                    No desaparecemos después de la instalación. Ofrecemos soporte continuo y te ayudamos 
                    a optimizar y añadir nuevas funcionalidades a medida que tu negocio crece.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-20 px-4 bg-white/[0.03]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nuestros Servicios Odoo</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-0">
                <Search className="h-10 w-10 text-[#667eea] mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">Consultoría Estratégica</h3>
                <p className="text-gray-400">
                  Te ayudamos a decidir si Odoo es para ti y qué versión se ajusta mejor.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-0">
                <Zap className="h-10 w-10 text-[#667eea] mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">Implementación desde Cero</h3>
                <p className="text-gray-400">
                  Instalamos y configuramos todo el ecosistema Odoo para tu empresa.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-0">
                <ArrowRight className="h-10 w-10 text-[#667eea] mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">Migración a Odoo</h3>
                <p className="text-gray-400">
                  Movemos tus datos de forma segura desde tus sistemas antiguos a Odoo.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-0">
                <Settings className="h-10 w-10 text-[#667eea] mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">Personalización de Módulos</h3>
                <p className="text-gray-400">
                  Desarrollamos funcionalidades específicas que tu negocio requiere.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-0">
                <Shield className="h-10 w-10 text-[#667eea] mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">Integración con Terceros</h3>
                <p className="text-gray-400">
                  Conectamos Odoo con tus otras herramientas favoritas (ej. pasarelas de pago, n8n, etc.).
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-0">
                <LifeBuoy className="h-10 w-10 text-[#667eea] mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">Soporte Técnico y Mantenimiento</h3>
                <p className="text-gray-400">
                  Somos tu equipo técnico de Odoo de confianza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Lo que Nuestros Clientes Dicen</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-400 mb-6 italic">
                  "Antes teníamos 5 programas distintos para gestionar el negocio. Era un caos. 
                  El equipo de RobotsConsultant centralizó todo en Odoo y el proceso fue increíblemente fácil. 
                  Ahora ahorramos unas 10 horas de trabajo administrativo a la semana."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#667eea]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">María González</p>
                    <p className="text-sm text-gray-400">CEO de Distribuidora MG</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-white/[0.05] border-white/10 hover:bg-white/[0.08]">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-400 mb-6 italic">
                  "Su experiencia con Odoo Enterprise fue clave. Personalizaron el módulo de CRM para 
                  nuestro equipo de ventas y los resultados son tangibles: un 20% más de oportunidades 
                  cerradas este trimestre."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-[#667eea]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Carlos Ruiz</p>
                    <p className="text-sm text-gray-400">Director Comercial de TechSales</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#667eea] to-[#764ba2]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ¿Listo para Dejar el Caos Atrás y Empezar a Crecer de Forma Ordenada?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Hablemos. En una sesión gratuita de 30 minutos, sin compromiso, analizaremos tu caso 
            y te mostraremos en vivo cómo Odoo puede transformar tu negocio. Saldrás de la llamada 
            con un plan de acción claro.
          </p>
          <Button size="lg" className="text-lg px-12 py-6 bg-white text-[#667eea] hover:bg-white/90" asChild>
            <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
              SÍ, QUIERO MI DIAGNÓSTICO GRATUITO
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Preguntas Frecuentes</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-white">
                  ¿Cuánto cuesta implementar Odoo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Depende totalmente de la complejidad de tu empresa y la versión elegida (Community o Enterprise). 
                  Por eso, nuestro primer paso es siempre un diagnóstico gratuito para darte un presupuesto 
                  cerrado y sin sorpresas.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-white">
                  ¿Cuánto tiempo tarda el proceso?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Una implementación básica puede tardar unas pocas semanas, mientras que proyectos más complejos 
                  pueden llevar varios meses. En nuestra hoja de ruta inicial te daremos una estimación de tiempo precisa.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-white">
                  Mi equipo no es muy tecnológico, ¿será difícil para ellos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Odoo es conocido por su interfaz amigable. Además, nuestro servicio incluye una formación completa 
                  y práctica para asegurar que todo tu equipo se sienta cómodo y aproveche la herramienta al máximo.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-white">
                  ¿Qué diferencias hay entre Odoo Community y Enterprise?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Odoo Community es gratuito y de código abierto, ideal para PyMES con funcionalidades básicas. 
                  Odoo Enterprise incluye módulos avanzados, soporte oficial, hosting en la nube y mayor escalabilidad. 
                  Te ayudamos a elegir la versión que mejor se adapte a tu presupuesto y necesidades.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-white">
                  ¿Puedo migrar mis datos desde mi sistema actual?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Sí, ofrecemos servicios de migración completos. Podemos transferir datos desde Excel, Access, 
                  otros ERPs o sistemas contables. Garantizamos la integridad de tus datos y minimizamos el tiempo 
                  de inactividad durante la transición.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-white">
                  ¿Qué tipo de soporte ofrecen después de la implementación?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Ofrecemos soporte técnico continuo, actualizaciones, mantenimiento y nuevas personalizaciones. 
                  También disponemos de planes de soporte mensual y formación adicional según las necesidades de tu equipo.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left text-white">
                  ¿Odoo funciona en la nube o necesito servidores propios?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Odoo puede funcionar en ambos modos. Podemos instalarlo en tus servidores locales para mayor control, 
                  o configurarlo en la nube (Odoo.sh, AWS, Azure) para mayor flexibilidad y menor mantenimiento. 
                  Te asesoramos sobre la mejor opción según tu caso.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left text-white">
                  ¿Qué módulos de Odoo necesita mi empresa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Cada empresa es diferente. En nuestro diagnóstico gratuito analizamos tus procesos actuales y 
                  te recomendamos exactamente qué módulos necesitas: CRM, Ventas, Inventario, Contabilidad, 
                  Proyectos, eCommerce, etc. Solo implementamos lo que realmente vas a usar.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left text-white">
                  ¿Puedo integrar Odoo con mis herramientas actuales?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Sí, Odoo tiene una excelente capacidad de integración. Podemos conectarlo con tu software de 
                  facturación, pasarelas de pago, tiendas online, herramientas de marketing, sistemas bancarios 
                  y muchas otras aplicaciones que ya uses en tu negocio.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left text-white">
                  ¿Qué pasa si mi negocio crece? ¿Odoo puede escalarse?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Absolutamente. Odoo está diseñado para crecer contigo. Puedes añadir nuevos usuarios, módulos 
                  y funcionalidades sin límites. Muchas empresas empiezan con funciones básicas y van expandiendo 
                  el sistema según van creciendo sus necesidades.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white/[0.03]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ¿LISTO PARA <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">IMPLEMENTAR ODOO</span> EN SU EMPRESA?
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              En <span className="text-[#667eea] font-semibold">RobotsConsultant</span> ofrecemos servicios especializados de implementación y consultoría en Odoo. 
              Desde la instalación hasta la capacitación completa de su equipo.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              No espere más para digitalizar completamente su empresa. 
              Nuestros servicios están adaptados a las necesidades específicas de su negocio.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-0 shadow-2xl overflow-hidden bg-white/[0.05] border-white/10">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                  <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] p-8 lg:p-10 text-white flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 leading-tight">
                      SOLICITE UNA ASESORÍA GRATUITA EN ODOO
                    </h3>
                    <p className="text-base mb-6 leading-relaxed opacity-95">
                      Compruebe cómo Odoo puede transformar su gestión empresarial. Le ofrecemos una consultoría personalizada sin compromiso.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-white/20 flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <span className="text-base font-medium">Análisis de procesos actuales</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-white/20 flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <span className="text-base font-medium">Propuesta personalizada de módulos</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-white/20 flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                          </svg>
                        </div>
                        <span className="text-base font-medium">Presupuesto detallado sin compromiso</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/[0.05] p-6 lg:p-8 flex items-center justify-center">
                    <div className="w-full">
                      <div 
                        className="calendly-inline-widget" 
                        data-url="https://calendly.com/robotsconsultant" 
                        style={{minWidth: '300px', height: '500px'}}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OdooServices;
