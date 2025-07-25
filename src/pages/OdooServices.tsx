import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, ArrowRight, Search, Settings, Users, LifeBuoy, Zap, TrendingUp, Shield, Clock, Target, Star, MessageCircle, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OdooServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <img 
              src="https://www.odoo.com/web/image/website/1/logo/Odoo?unique=689cb1c" 
              alt="Odoo Official Partner" 
              className="mx-auto h-12 mb-4"
            />
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Partner Oficial de Odoo
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Transforma tu Empresa. Crece sin Límites.
            <span className="block text-primary">Todo con un Único Sistema: Odoo</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Como Partners Oficiales de Odoo, convertimos tus procesos complejos en un sistema integrado, 
            eficiente y hecho a la medida de tu negocio. Deja que la tecnología trabaje para ti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8">
              Agenda tu Diagnóstico Gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Solicitar una Demo Personalizada
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Más de 50+ implementaciones exitosas | Experiencia en Odoo Community y Enterprise
          </p>
        </div>
      </section>

      {/* Sección de Problema */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Tu empresa sufre de "caos operativo"?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Si te identificas with alguno de estos puntos, no estás solo. Y tenemos la solución.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Procesos Desconectados</h3>
                    <p className="text-muted-foreground">
                      Usas un programa para facturas, otro para clientes (CRM), un Excel para el inventario... 
                      y nada se comunica entre sí.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Pérdida de Tiempo y Dinero</h3>
                    <p className="text-muted-foreground">
                      Tareas manuales y repetitivas que consumen horas de tu equipo y provocan errores costosos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Falta de Visibilidad</h3>
                    <p className="text-muted-foreground">
                      No tienes una visión 360° de tu negocio en tiempo real. Tomar decisiones se basa en intuición, no en datos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Crecimiento Estancado</h3>
                    <p className="text-muted-foreground">
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
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Odoo es la Solución. Nosotros, tu Socio Estratégico para Implementarla.
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground">
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
            <h3 className="text-2xl font-bold text-center mb-8">
              La Solución Perfecta para Ti, sin Importar tu Presupuesto
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold mb-2">Odoo Community</h4>
                    <p className="text-muted-foreground">Código abierto y potente</p>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Ideal para startups y PYMES que buscan una solución potente y de código abierto. 
                    Te ayudamos a instalarlo, configurarlo y personalizarlo para exprimir todo su 
                    potencial sin costes de licencia.
                  </p>
                  <Button variant="outline" className="w-full">
                    Conocer Community
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="p-8 border-primary">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-2">
                      Recomendado
                    </div>
                    <h4 className="text-xl font-bold mb-2">Odoo Enterprise</h4>
                    <p className="text-muted-foreground">Funcionalidades avanzadas</p>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Para empresas que necesitan funcionalidades avanzadas, soporte oficial y una 
                    escalabilidad sin precedentes. Como partners, te damos acceso a la versión más 
                    completa y nos encargamos de todo.
                  </p>
                  <Button className="w-full">
                    Conocer Enterprise
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Proceso de Transformación Digital: Simple y Transparente
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Paso 1: Diagnóstico y Estrategia</h3>
                  <p className="text-muted-foreground text-sm">
                    Escuchamos. Analizamos tus procesos actuales, identificamos cuellos de botella 
                    y definimos juntos los objetivos. Te entregamos una hoja de ruta clara.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Paso 2: Implementación y Adecuación</h3>
                  <p className="text-muted-foreground text-sm">
                    Nuestro equipo de expertos instala y configura los módulos de Odoo que necesitas. 
                    No adaptamos tu empresa a Odoo; adaptamos Odoo a tu empresa.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Paso 3: Formación y Puesta en Marcha</h3>
                  <p className="text-muted-foreground text-sm">
                    Capacitamos a tu equipo para que dominen la herramienta. Aseguramos una adopción 
                    rápida y exitosa para que empiecen a ver los beneficios de inmediato.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LifeBuoy className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Paso 4: Soporte y Optimización</h3>
                  <p className="text-muted-foreground text-sm">
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
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios Odoo</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <Search className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Consultoría Estratégica</h3>
                <p className="text-muted-foreground">
                  Te ayudamos a decidir si Odoo es para ti y qué versión se ajusta mejor.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Implementación desde Cero</h3>
                <p className="text-muted-foreground">
                  Instalamos y configuramos todo el ecosistema Odoo para tu empresa.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <ArrowRight className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Migración a Odoo</h3>
                <p className="text-muted-foreground">
                  Movemos tus datos de forma segura desde tus sistemas antiguos a Odoo.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <Settings className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Personalización de Módulos</h3>
                <p className="text-muted-foreground">
                  Desarrollamos funcionalidades específicas que tu negocio requiere.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Integración con Terceros</h3>
                <p className="text-muted-foreground">
                  Conectamos Odoo con tus otras herramientas favoritas (ej. pasarelas de pago, n8n, etc.).
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <LifeBuoy className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Soporte Técnico y Mantenimiento</h3>
                <p className="text-muted-foreground">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que Nuestros Clientes Dicen</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Antes teníamos 5 programas distintos para gestionar el negocio. Era un caos. 
                  El equipo de RobotsConsultant centralizó todo en Odoo y el proceso fue increíblemente fácil. 
                  Ahora ahorramos unas 10 horas de trabajo administrativo a la semana."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">María González</p>
                    <p className="text-sm text-muted-foreground">CEO de Distribuidora MG</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Su experiencia con Odoo Enterprise fue clave. Personalizaron el módulo de CRM para 
                  nuestro equipo de ventas y los resultados son tangibles: un 20% más de oportunidades 
                  cerradas este trimestre."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Carlos Ruiz</p>
                    <p className="text-sm text-muted-foreground">Director Comercial de TechSales</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Dejar el Caos Atrás y Empezar a Crecer de Forma Ordenada?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Hablemos. En una sesión gratuita de 30 minutos, sin compromiso, analizaremos tu caso 
            y te mostraremos en vivo cómo Odoo puede transformar tu negocio. Saldrás de la llamada 
            con un plan de acción claro.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-12 py-6">
            SÍ, QUIERO MI DIAGNÓSTICO GRATUITO
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  ¿Cuánto cuesta implementar Odoo?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Depende totalmente de la complejidad de tu empresa y la versión elegida (Community o Enterprise). 
                  Por eso, nuestro primer paso es siempre un diagnóstico gratuito para darte un presupuesto 
                  cerrado y sin sorpresas.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  ¿Cuánto tiempo tarda el proceso?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Una implementación básica puede tardar unas pocas semanas, mientras que proyectos más complejos 
                  pueden llevar varios meses. En nuestra hoja de ruta inicial te daremos una estimación de tiempo precisa.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Mi equipo no es muy tecnológico, ¿será difícil para ellos?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Odoo es conocido por su interfaz amigable. Además, nuestro servicio incluye una formación completa 
                  y práctica para asegurar que todo tu equipo se sienta cómodo y aproveche la herramienta al máximo.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  ¿Qué diferencias hay entre Odoo Community y Enterprise?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Odoo Community es gratuito y de código abierto, ideal para PyMES con funcionalidades básicas. 
                  Odoo Enterprise incluye módulos avanzados, soporte oficial, hosting en la nube y mayor escalabilidad. 
                  Te ayudamos a elegir la versión que mejor se adapte a tu presupuesto y necesidades.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  ¿Puedo migrar mis datos desde mi sistema actual?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sí, ofrecemos servicios de migración completos. Podemos transferir datos desde Excel, Access, 
                  otros ERPs o sistemas contables. Garantizamos la integridad de tus datos y minimizamos el tiempo 
                  de inactividad durante la transición.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  ¿Qué tipo de soporte ofrecen después de la implementación?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ofrecemos soporte técnico continuo, actualizaciones, mantenimiento y nuevas personalizaciones. 
                  También disponemos de planes de soporte mensual y formación adicional según las necesidades de tu equipo.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  ¿Odoo funciona en la nube o necesito servidores propios?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Odoo puede funcionar en ambos modos. Podemos instalarlo en tus servidores locales para mayor control, 
                  o configurarlo en la nube (Odoo.sh, AWS, Azure) para mayor flexibilidad y menor mantenimiento. 
                  Te asesoramos sobre la mejor opción según tu caso.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  ¿Qué módulos de Odoo necesita mi empresa?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Cada empresa es diferente. En nuestro diagnóstico gratuito analizamos tus procesos actuales y 
                  te recomendamos exactamente qué módulos necesitas: CRM, Ventas, Inventario, Contabilidad, 
                  Proyectos, eCommerce, etc. Solo implementamos lo que realmente vas a usar.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  ¿Puedo integrar Odoo con mis herramientas actuales?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sí, Odoo tiene una excelente capacidad de integración. Podemos conectarlo con tu software de 
                  facturación, pasarelas de pago, tiendas online, herramientas de marketing, sistemas bancarios 
                  y muchas otras aplicaciones que ya uses en tu negocio.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  ¿Qué pasa si mi negocio crece? ¿Odoo puede escalarse?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutamente. Odoo está diseñado para crecer contigo. Puedes añadir nuevos usuarios, módulos 
                  y funcionalidades sin límites. Muchas empresas empiezan con funciones básicas y van expandiendo 
                  el sistema según van creciendo sus necesidades.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OdooServices;