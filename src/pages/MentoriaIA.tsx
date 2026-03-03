import { useEffect } from "react";
import { ArrowRight, Brain, Target, Rocket, CheckCircle2, Users, TrendingUp, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const MentoriaIA = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".slide-in-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 text-[#667eea] px-4 py-2 rounded-full mb-6">
            <Brain className="w-5 h-5" />
            <span className="font-semibold text-sm">Mentoría Personalizada</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Mentoría en{" "}
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Inteligencia Artificial
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Acelera tu transformación digital con mentoría personalizada en IA.
            Aprende a implementar soluciones reales que generen impacto en tu negocio.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:opacity-90 text-white border-0 rounded-full px-8" asChild>
            <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
              Solicitar Información <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-4 slide-in-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-14">
            ¿Por Qué Mentoría en IA?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Aprendizaje Práctico", desc: "No solo teoría. Aprende implementando soluciones reales aplicables a tu negocio desde el primer día." },
              { icon: Rocket, title: "Resultados Rápidos", desc: "Metodología enfocada en resultados tangibles. Ve el ROI de la IA en semanas, no en meses." },
              { icon: Users, title: "Atención Personalizada", desc: "Sesiones 1-a-1 adaptadas a tu industria, objetivos y nivel de conocimiento técnico." },
            ].map((item, i) => (
              <Card key={i} className="bg-white/[0.04] border border-white/10 hover:border-[#667eea]/30 transition-all duration-300">
                <CardContent className="pt-8 pb-6 px-6">
                  <item.icon className="w-12 h-12 text-[#667eea] mb-5" />
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programa */}
      <section className="py-20 px-4 slide-in-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-14">
            Programa de Mentoría
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Fundamentos de IA para Negocios",
                items: [
                  "Entendiendo los diferentes tipos de IA y sus aplicaciones",
                  "Identificación de oportunidades de IA en tu sector",
                  "ROI y casos de éxito empresariales",
                  "Herramientas de IA accesibles y prácticas",
                ],
              },
              {
                icon: TrendingUp,
                title: "Implementación Práctica",
                items: [
                  "Chatbots y asistentes virtuales personalizados",
                  "Automatización de procesos con IA",
                  "Análisis predictivo y toma de decisiones",
                  "Integración de IA en sistemas existentes",
                ],
              },
            ].map((block, i) => (
              <Card key={i} className="bg-white/[0.04] border border-white/10">
                <CardContent className="pt-8 pb-6 px-6">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <block.icon className="w-6 h-6 text-[#764ba2]" />
                    {block.title}
                  </h3>
                  <ul className="space-y-4">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-20 px-4 slide-in-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-14">
            Modalidades de Mentoría
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sesión Individual */}
            <Card className="bg-white/[0.04] border border-white/10 hover:border-[#667eea]/30 transition-all duration-300">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Sesión Individual</h3>
                <p className="text-4xl font-extrabold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-1">150€</p>
                <p className="text-gray-500 mb-6">Por sesión de 90 min</p>
                <ul className="space-y-3 mb-8 text-left">
                  {["Sesión personalizada 1-a-1", "Material de apoyo incluido", "Seguimiento por email 7 días"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{t}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full border border-white/20 bg-transparent hover:bg-white/[0.06] text-white rounded-full" asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">Reservar Sesión</a>
                </Button>
              </CardContent>
            </Card>

            {/* Pack Mensual - Popular */}
            <Card className="bg-white/[0.04] border-2 border-[#667eea] relative scale-105 shadow-[0_0_40px_rgba(102,126,234,0.15)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-5 py-1.5 rounded-full text-sm font-bold">
                  Más Popular
                </span>
              </div>
              <CardContent className="pt-10 pb-6 px-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Pack Mensual</h3>
                <p className="text-4xl font-extrabold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-1">500€</p>
                <p className="text-gray-500 mb-6">4 sesiones al mes</p>
                <ul className="space-y-3 mb-8 text-left">
                  {["4 sesiones de 90 min", "Soporte continuo por WhatsApp", "Revisión de implementaciones", "Plan de acción personalizado"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{t}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:opacity-90 text-white border-0 rounded-full" asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">Comenzar Ahora</a>
                </Button>
              </CardContent>
            </Card>

            {/* Pack Trimestral */}
            <Card className="bg-white/[0.04] border border-white/10 hover:border-[#667eea]/30 transition-all duration-300">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Pack Trimestral</h3>
                <p className="text-4xl font-extrabold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-1">1.200€</p>
                <p className="text-gray-500 mb-6">12 sesiones + extras</p>
                <ul className="space-y-3 mb-8 text-left">
                  {["12 sesiones distribuidas", "Soporte premium 24/7", "Implementación asistida", "Certificado de finalización"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{t}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full border border-white/20 bg-transparent hover:bg-white/[0.06] text-white rounded-full" asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">Consultar Detalles</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 slide-in-section">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 border border-white/10 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              ¿Listo para Dominar la IA?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Agenda una sesión de consulta gratuita de 30 minutos para evaluar tus necesidades
              y diseñar un plan de mentoría personalizado.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:opacity-90 text-white border-0 rounded-full px-8" asChild>
              <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                Agendar Consulta Gratuita <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentoriaIA;
