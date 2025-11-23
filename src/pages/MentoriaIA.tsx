import { ArrowRight, Brain, Target, Rocket, CheckCircle2, Users, TrendingUp, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const MentoriaIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Brain className="w-5 h-5" />
              <span className="font-semibold">Mentoría Personalizada</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Mentoría en Inteligencia Artificial
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Acelera tu transformación digital con mentoría personalizada en IA. 
              Aprende a implementar soluciones reales que generen impacto en tu negocio.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                Solicitar Información <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ¿Por Qué Mentoría en IA?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Aprendizaje Práctico</h3>
                <p className="text-muted-foreground">
                  No solo teoría. Aprende implementando soluciones reales aplicables a tu negocio desde el primer día.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <Rocket className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Resultados Rápidos</h3>
                <p className="text-muted-foreground">
                  Metodología enfocada en resultados tangibles. Ve el ROI de la IA en semanas, no en meses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Atención Personalizada</h3>
                <p className="text-muted-foreground">
                  Sesiones 1-a-1 adaptadas a tu industria, objetivos y nivel de conocimiento técnico.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programa Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Programa de Mentoría
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  Fundamentos de IA para Negocios
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Entendiendo los diferentes tipos de IA y sus aplicaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Identificación de oportunidades de IA en tu sector</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>ROI y casos de éxito empresariales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Herramientas de IA accesibles y prácticas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Implementación Práctica
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Chatbots y asistentes virtuales personalizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Automatización de procesos con IA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Análisis predictivo y toma de decisiones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Integración de IA en sistemas existentes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modalidades Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Modalidades de Mentoría
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Sesión Individual</h3>
                  <p className="text-3xl font-bold text-primary mb-2">150€</p>
                  <p className="text-muted-foreground">Por sesión de 90 min</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Sesión personalizada 1-a-1</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Material de apoyo incluido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Seguimiento por email 7 días</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                    Reservar Sesión
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg scale-105">
              <CardContent className="pt-6">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Pack Mensual</h3>
                  <p className="text-3xl font-bold text-primary mb-2">500€</p>
                  <p className="text-muted-foreground">4 sesiones al mes</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>4 sesiones de 90 min</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Soporte continuo por WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Revisión de implementaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Plan de acción personalizado</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                    Comenzar Ahora
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Pack Trimestral</h3>
                  <p className="text-3xl font-bold text-primary mb-2">1.200€</p>
                  <p className="text-muted-foreground">12 sesiones + extras</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>12 sesiones distribuidas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Soporte premium 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Implementación asistida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Certificado de finalización</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                    Consultar Detalles
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Dominar la IA?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Agenda una sesión de consulta gratuita de 30 minutos para evaluar tus necesidades
            y diseñar un plan de mentoría personalizado.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
              Agendar Consulta Gratuita <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentoriaIA;