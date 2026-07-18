import {
  ArrowRight, Check, Cpu, HeartHandshake, Target, Rocket, Users,
  Lightbulb, TrendingUp, Map,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { whatsappUrl, SITE_URL } from '@/config/contact';

const TITLE = 'Mentoría en IA y Experiencia de Cliente | RobotsConsultant';
const DESCRIPTION =
  'Mentoría 1-a-1 con la Ing. Oscarina Hernández: implementa IA y automatización en tu negocio sin perder de vista lo importante — la experiencia de tus clientes.';

/**
 * Foto principal de Oscarina. El archivo nuevo (sesión con las gafas VR) va en
 * /public/oscarina-vr.jpg; hasta que exista, cae a la foto anterior para no
 * romper nada.
 */
const FotoOscarina = ({ className = '' }: { className?: string }) => (
  <img
    src="/oscarina-vr.jpg"
    alt="Ing. Oscarina Hernández, fundadora de RobotsConsultant, con unas gafas de realidad virtual"
    className={`rounded-card object-cover ${className}`}
    loading="lazy"
    onError={(e) => {
      const img = e.currentTarget;
      if (img.dataset.fallback) return;
      img.dataset.fallback = '1';
      img.src = '/fotomiav2.png';
    }}
  />
);

/** Los dos lados de la mentora: rigor técnico + obsesión por el cliente. */
const LADO_TECNICO = [
  'Ingeniera especialista en robótica industrial y automatización',
  'Certificada en Universal Robots, sistemas KUKA y ROS',
  'Partner oficial de Odoo: ERP, TPV y ecommerce conectados',
  'AWS Architect: arquitecturas cloud que escalan contigo',
  'Agentes de IA y automatización de procesos en negocios reales',
];

const LADO_CX = [
  'Cada automatización se diseña desde la experiencia del cliente, no desde la tecnología',
  'Mapa del customer journey: dónde gana (o pierde) tu negocio en cada interacción',
  'Detectar fricciones que cuestan ventas: colas, esperas, respuestas tardías',
  'Automatizar sin deshumanizar: la IA atiende, tu equipo enamora',
  'Métricas de experiencia: repetición, ticket medio y recomendación',
];

const BENEFICIOS = [
  {
    icon: Target,
    title: 'Aprendizaje práctico',
    desc: 'Nada de teoría suelta. Trabajamos sobre tu negocio, con tus datos y tus clientes reales, desde la primera sesión.',
  },
  {
    icon: HeartHandshake,
    title: 'Tecnología + experiencia de cliente',
    desc: 'No implementamos IA por moda: cada herramienta se elige por cómo mejora la experiencia de quien te compra.',
  },
  {
    icon: Users,
    title: 'Atención personalizada',
    desc: 'Sesiones 1-a-1 adaptadas a tu sector, tus objetivos y tu nivel técnico. Tú marcas el ritmo.',
  },
];

const PROGRAMA = [
  {
    icon: Lightbulb,
    title: 'Fundamentos de IA para negocios',
    items: [
      'Entender los tipos de IA y sus aplicaciones reales',
      'Identificar oportunidades de IA en tu sector',
      'ROI y casos de éxito empresariales',
      'Herramientas de IA accesibles y prácticas',
    ],
  },
  {
    icon: Map,
    title: 'Experiencia de cliente',
    items: [
      'Mapear el journey de tu cliente de punta a punta',
      'Detectar fricciones y momentos de la verdad',
      'Diseñar el servicio antes de automatizarlo',
      'Medir la experiencia: repetición, ticket, recomendación',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Implementación práctica',
    items: [
      'Chatbots y asistentes virtuales personalizados',
      'Automatización de procesos con IA',
      'Análisis predictivo y toma de decisiones',
      'Integración de IA en tus sistemas existentes',
    ],
  },
  {
    icon: Rocket,
    title: 'Escalar sin romper nada',
    items: [
      'Priorizar: qué automatizar primero y qué dejar humano',
      'Formar a tu equipo para que lo adopte de verdad',
      'Plan de acción con hitos medibles',
      'Acompañamiento en la puesta en marcha',
    ],
  },
];

type Plan = {
  name: string;
  price: string;
  detail: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PLANES: Plan[] = [
  {
    name: 'Sesión individual',
    price: '150€',
    detail: 'Por sesión de 90 min',
    features: ['Sesión personalizada 1-a-1', 'Material de apoyo incluido', 'Seguimiento por email 7 días'],
    cta: 'Reservar sesión',
  },
  {
    name: 'Pack mensual',
    price: '500€',
    detail: '4 sesiones al mes',
    featured: true,
    features: ['4 sesiones de 90 min', 'Soporte continuo por WhatsApp', 'Revisión de implementaciones', 'Plan de acción personalizado'],
    cta: 'Comenzar ahora',
  },
  {
    name: 'Pack trimestral',
    price: '1.200€',
    detail: '12 sesiones + extras',
    features: ['12 sesiones distribuidas', 'Soporte premium', 'Implementación asistida', 'Certificado de finalización'],
    cta: 'Consultar detalles',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mentoría en IA y experiencia de cliente',
  serviceType: 'Mentoría personalizada en inteligencia artificial y customer experience',
  provider: { '@type': 'Organization', name: 'RobotsConsultant', url: SITE_URL },
  description: DESCRIPTION,
  areaServed: 'ES',
  url: `${SITE_URL}/mentoria-ia`,
};

const MentoriaIA = () => {
  const ctaInfo = whatsappUrl('Hola, quiero información sobre la mentoría en IA.');

  return (
    <div className="min-h-screen bg-hueso text-pantalla">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/mentoria-ia"
        type="article"
        image="/oscarina-vr.jpg"
        schemas={[serviceSchema]}
      />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <header className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Mentoría 1-a-1 · IA y experiencia de cliente</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
                Aprende a implantar IA sin perder de vista a tu cliente
              </h1>
              <p className="text-lg md:text-xl text-pantalla/75 mb-8 max-w-2xl">
                La tecnología es la mitad del trabajo. La otra mitad es que tu cliente lo note:
                menos esperas, mejor atención, ganas de volver. En esta mentoría aprendes las dos.
              </p>
              <a href={ctaInfo} target="_blank" rel="noopener noreferrer" className="btn-coral">
                Solicitar información <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="flex justify-center lg:justify-end">
              <FotoOscarina className="w-full max-w-md aspect-[4/5] shadow-[0_1px_3px_rgba(23,23,27,0.06),0_24px_48px_-16px_rgba(23,23,27,0.18)]" />
            </div>
          </div>
        </div>
      </header>

      {/* ═══ QUIÉN TE MENTORIZA ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Quién te mentoriza</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 text-balance">
              Ing. Oscarina Hernández
            </h2>
            <p className="text-lg text-pantalla/75">
              Ingeniera de robótica que un día entendió algo: la mejor automatización del mundo
              no sirve de nada si el cliente sale peor atendido. Desde entonces trabaja con las
              dos lentes a la vez.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* El lado técnico */}
            <div className="card-roberta">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-teal/12 text-teal">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-2xl mb-4">El lado técnico</h3>
              <ul className="space-y-3">
                {LADO_TECNICO.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-pantalla/80">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* El lado de la experiencia de cliente */}
            <div className="card-roberta border-2 border-coral">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-coral/12 text-coral">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="text-2xl mb-4">El lado del cliente</h3>
              <ul className="space-y-3">
                {LADO_CX.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-pantalla/80">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-coral" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ POR QUÉ ESTA MENTORÍA ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Por qué funciona</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              ¿Por qué mentoría y no otro curso más?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BENEFICIOS.map((beneficio) => (
              <div key={beneficio.title} className="card-roberta">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-teal/12 text-teal">
                  <beneficio.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl mb-2">{beneficio.title}</h3>
                <p className="text-pantalla/75">{beneficio.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROGRAMA ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">El programa</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 text-balance text-hueso">
              Cuatro módulos, un objetivo: que funcione en tu negocio
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROGRAMA.map((bloque) => (
              <div key={bloque.title} className="card-roberta">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-cian-glow/10 text-cian-glow">
                  <bloque.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl mb-4 text-hueso">{bloque.title}</h3>
                <ul className="space-y-3">
                  {bloque.items.map((item) => (
                    <li key={item} className="flex gap-3 text-base text-hueso/75">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-cian-glow" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MODALIDADES ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Modalidades</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              Elige cómo quieres avanzar
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PLANES.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.featured
                    ? 'relative rounded-card border-2 border-coral bg-white p-7 shadow-lg md:-mt-3'
                    : 'rounded-card border border-greige bg-hueso p-7'
                }
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-coral px-4 py-1 font-mono text-xs uppercase tracking-[0.14em] text-pantalla">
                    El más elegido
                  </span>
                )}
                <h3 className="text-2xl mb-1">{plan.name}</h3>
                <p className="font-display text-4xl font-extrabold text-teal-dark mb-1">{plan.price}</p>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-pantalla/50 mb-6">
                  {plan.detail}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-base text-pantalla/80">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(`Hola, me interesa la mentoría (${plan.name}, ${plan.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.featured ? 'btn-coral w-full' : 'btn-secondary w-full'}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-card border-2 border-coral bg-white p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-5 text-balance">
              ¿Hablamos de tu caso?
            </h2>
            <p className="text-lg text-pantalla/75 mb-8">
              Consulta gratuita de 30 minutos para evaluar dónde estás, qué necesita tu cliente
              y diseñar tu plan de mentoría.
            </p>
            <a
              href={whatsappUrl('Hola, quiero mi consulta gratuita de mentoría (30 min).')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral"
            >
              Agendar consulta gratuita <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-5 text-base text-pantalla/70">
              Respuesta en menos de 24 h. Sin compromiso.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentoriaIA;
