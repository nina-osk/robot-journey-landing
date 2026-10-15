import {
  ArrowRight, Check, X, Clock, Wrench, Map, LifeBuoy,
  ShieldCheck, Sparkles, Phone, BarChart3, Workflow, PlayCircle,
  MessageCircle, ChevronDown,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Roberta from '@/components/Roberta';
import RetellSlot from '@/components/RetellSlot';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';
import { whatsappUrl, SITE_URL } from '@/config/contact';

const TITLE = 'Mentoría IA 1:1 para ecommerce | Tu primer asistente en 21 días';
const DESCRIPTION =
  'Mentoría privada 1:1 para dueñas de ecommerce. En 3 semanas elegimos UNA tarea que te roba tiempo e implementamos juntas una solución de IA funcionando. 5 plazas fundadoras · 297 €.';

const CTA = whatsappUrl(
  'Hola Oscarina, quiero ver si la Mentoría IA encaja con mi negocio.',
);

/* ─── Las tres condiciones que debe cumplir la tarea elegida ─── */
const CONDICIONES = [
  {
    n: '01',
    icon: Workflow,
    title: 'La haces repetidamente',
    desc: 'Responder las mismas preguntas. Preparar contenido. Buscar información. Revisar ventas. Consultar catálogo. Clasificar información.',
  },
  {
    n: '02',
    icon: Clock,
    title: 'Te consume tiempo o provoca pérdidas',
    desc: 'No automatizamos porque esté de moda. Automatizamos porque existe un problema real.',
  },
  {
    n: '03',
    icon: BarChart3,
    title: 'Podemos comprobar si funciona',
    desc: 'De 3 horas a la semana a 30 minutos. De 40 consultas repetitivas a revisar solo las excepciones. Si no podemos medirlo, no es la primera prioridad.',
  },
];

/* ─── Qué se puede construir (sección oscura: momento producto) ─── */
const SOLUCIONES = [
  {
    icon: Sparkles,
    title: 'Un asistente que conozca tu marca',
    desc: 'Le damos contexto sobre tus productos, tu cliente ideal, tu tono, tus promociones y tu forma de comunicar.',
  },
  {
    icon: Phone,
    title: 'Atención telefónica con voz',
    desc: 'Un asistente de voz que conoce tu catálogo y tu agenda, y resuelve a los clientes que quieren preguntar y reservar por teléfono.',
  },
  {
    icon: LifeBuoy,
    title: 'Apoyo en atención al cliente',
    desc: 'Le damos tus preguntas frecuentes, tus políticas y tu catálogo para preparar respuestas en segundos. Tú mantienes el control, la IA ayuda.',
  },
  {
    icon: BarChart3,
    title: 'Un analista para tu ecommerce',
    desc: 'Qué productos vendieron menos esta semana, qué deberías revisar, qué puedes promocionar. Preparamos tus datos para poder preguntarles.',
  },
  {
    icon: Workflow,
    title: 'Una automatización pequeña',
    desc: 'Shopify, datos, IA, resumen, email. No necesitas entender qué pasa por dentro. Necesitas poder usarlo.',
  },
];

/* ─── Las tres sesiones ─── */
const SESIONES = [
  {
    n: 1,
    title: 'Mapa IA de tu negocio',
    dur: '60 minutos',
    body: 'Antes completas un cuestionario sobre tu tienda. En la sesión analizamos qué tareas repites, dónde pierdes tiempo, dónde se escapan ventas, qué información ya tienes y qué procesos NO debemos tocar todavía.',
    out: 'Problema, solución, herramienta y resultado. No veinte ideas: una prioridad.',
  },
  {
    n: 2,
    title: 'La construimos juntas',
    dur: '60 minutos',
    body: 'Nada de presentaciones sobre inteligencia artificial. Abrimos las herramientas, abrimos tu negocio y construimos. Un asistente, una base de conocimiento, un flujo de trabajo o una automatización.',
    out: 'Al terminar puedes decir que eso ya funciona, y entiendes lo suficiente para usarlo sin depender de mí.',
  },
  {
    n: 3,
    title: 'Mejoramos y construimos tu Plan IA de 90 días',
    dur: '60 minutos',
    body: 'Revisamos qué pasó durante la prueba. Corregimos y ajustamos. Después miramos el resto de tu negocio: te diré qué automatizaría a continuación, y también qué no.',
    out: 'Un plan de 90 días para avanzar sin caer en comprar cada herramienta nueva que aparece.',
  },
];

/* ─── Entregables ─── */
const ENTREGABLES = [
  { icon: Wrench, title: 'Una solución de IA funcionando', desc: 'Configurada para resolver una tarea concreta de tu negocio.' },
  { icon: Sparkles, title: 'Tus prompts y configuraciones', desc: 'Para que puedas modificarlos y seguir usándolos por tu cuenta.' },
  { icon: PlayCircle, title: 'Tutorial personalizado', desc: 'Un vídeo corto explicando cómo usar y mantener lo que hemos construido.' },
  { icon: Map, title: 'Mapa IA de tu negocio', desc: 'Problemas detectados, prioridad elegida, solución implementada, oportunidades futuras y plan de 90 días.' },
  { icon: LifeBuoy, title: 'Soporte durante 30 días', desc: 'Después de terminar puedes consultarme dudas sobre la solución que hemos implementado.' },
];

const PARA_TI = [
  'Tienes una tienda online que ya está vendiendo.',
  'Usas Shopify, WooCommerce o un sistema similar.',
  'Hay tareas que repites cada semana y sabes que no deberías seguir haciendo a mano.',
  'Has probado ChatGPT, pero sientes que solo arañas la superficie.',
  'Quieres usar IA sin convertirte en técnica ni programadora.',
  'Y sobre todo: quieres implementar, no solo aprender.',
];

const NO_PARA_TI = [
  'Tu tienda todavía no vende.',
  'Buscas el negocio con IA que te hará ganar dinero.',
  'Quieres automatizar todo en una semana.',
  'No quieres dedicar tiempo a probar la solución.',
  'Buscas un curso completo para aprender inteligencia artificial.',
];

const FAQ = [
  {
    q: '¿Y si mi negocio es raro y ninguna herramienta encaja?',
    a: 'Todos los negocios tienen tareas repetitivas. En la Sesión 1 identificamos las tuyas. La solución se adapta a tu caso, no al revés.',
  },
  {
    q: '¿Necesito saber programar o saber de IA?',
    a: 'No. Yo pongo el conocimiento técnico, tú pones el conocimiento de tu negocio: qué preguntan tus clientes, qué problemas aparecen, qué tareas odias. Yo traduzco eso en algo que puedas usar.',
  },
  {
    q: '¿Y si después no sé mantenerlo?',
    a: 'Por eso no implemento y desaparezco. Lo construimos juntas, te dejo la configuración, tus prompts, un vídeo-tutorial y 30 días de soporte. La idea es que dependas cada vez menos de mí, no más.',
  },
  {
    q: '¿Las sesiones son grabadas o en vivo?',
    a: 'En vivo, 1:1, por Zoom o Google Meet. Quedan grabadas para que puedas revisarlas después.',
  },
  {
    q: '¿Cuánto tiempo necesito?',
    a: 'Calcula unas 8 horas repartidas en tres semanas: cuestionario y preparación, las tres sesiones y probar la solución entre medias. No necesitas bloquear semanas enteras, pero sí usar lo que construimos.',
  },
];

const MentoriaIA = () => {
  useScrollReveal();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mentoría IA 1:1 para ecommerce',
    description: DESCRIPTION,
    provider: { '@type': 'Organization', name: 'RobotsConsultant', url: SITE_URL },
    areaServed: 'ES',
    offers: {
      '@type': 'Offer',
      price: '297',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/LimitedAvailability',
      url: SITE_URL + '/mentoria-ia',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <div className="min-h-screen bg-hueso text-pantalla">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/mentoria-ia"
        image="/oscarina-mentoria.jpg"
        schemas={[serviceSchema, faqSchema]}
      />

      <Navbar />

      {/* ═══ HERO ═══ */}
      <header className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div className="hero-rise">
              <p className="eyebrow mb-4">Mentoría privada 1:1 · Ecommerce</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] mb-6 text-balance">
                Tu primer asistente de IA de voz trabajando en tu tienda online en 21 días
              </h1>
              <p className="text-lg md:text-xl text-pantalla/75 mb-6 max-w-2xl">
                Para dueñas de ecommerce que quieren empezar a usar IA sin convertirse en expertas,
                sin probar 50 herramientas y sin automatizar su negocio entero.
              </p>
              <p className="text-lg text-pantalla/75 mb-8 max-w-2xl">
                En tres semanas elegimos <strong className="text-pantalla">una</strong> tarea concreta
                que hoy te roba tiempo e implementamos juntas una solución que puedas usar de verdad.
              </p>

              <p className="font-display text-2xl md:text-3xl mb-8 text-teal-dark">
                No vas a terminar con una lista de herramientas.<br />
                Vas a terminar con algo funcionando.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href={CTA} target="_blank" rel="noopener noreferrer" className="btn-coral">
                  Quiero ver si encaja con mi negocio <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#como-funciona" className="btn-secondary">Ver cómo funciona</a>
              </div>

              {/* Barra de datos: mono para las cifras, como pide el brief */}
              <dl className="flex flex-wrap gap-x-8 gap-y-3 border-t border-greige pt-6">
                {[
                  ['3', 'sesiones privadas'],
                  ['3', 'semanas'],
                  ['1', 'solución implementada'],
                ].map(([n, label]) => (
                  <div key={label}>
                    <dt className="font-display text-3xl leading-none text-teal">{n}</dt>
                    <dd className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-pantalla/55 mt-1">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Foto enmarcada + precio flotante */}
            <div className="relative hero-rise" style={{ animationDelay: '0.15s' }}>
              <div className="rounded-card overflow-hidden border border-greige shadow-[0_18px_50px_-20px_rgba(23,23,27,0.28)]">
                <img
                  src="/oscarina-mentoria.jpg"
                  alt="Oscarina Hernández, ingeniera y dueña de ecommerce, mentora del programa"
                  className="w-full h-auto object-cover"
                  width={800}
                  height={800}
                  loading="eager"
                />
              </div>
              {/* La flotación va en un envoltorio: la tarjeta ya usa transform para aparecer */}
              <div className="animate-float -mt-10 mx-4 relative z-10">
                <div className="card-roberta text-center">
                  <p className="eyebrow mb-1">Precio de lanzamiento</p>
                  <p className="font-display text-4xl leading-none">297 €</p>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-coral-dark mt-2">
                    Solo 5 plazas fundadoras
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ EL PROBLEMA ═══ */}
      <section className="py-16 md:py-24 border-t border-greige">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="eyebrow mb-4">El problema de verdad</p>
          <h2 className="text-3xl md:text-4xl mb-8 text-balance">
            Probablemente no necesitas más herramientas
          </h2>
          <div className="space-y-5 text-lg text-pantalla/75">
            <p>
              Tal vez ya usas ChatGPT. Has visto vídeos de automatizaciones, agentes, asistentes,
              prompts, n8n, Claude, Gemini… y sabes que la inteligencia artificial podría ayudarte.
            </p>
            <p className="font-display text-2xl md:text-3xl text-pantalla">
              Pero… ¿por dónde demonios empiezo?
            </p>
            <p>
              Una cosa es ver a alguien en Instagram diciendo que la IA puede automatizar tu
              negocio. Otra muy distinta es saber qué merece la pena automatizar, qué herramienta
              usar, qué información necesita, cuánto tiempo te va a ahorrar y cómo hacer para que
              siga funcionando cuando yo ya no esté.
            </p>
            <p className="text-pantalla font-semibold">Eso es exactamente lo que vamos a resolver.</p>
          </div>
        </div>
      </section>

      {/* ═══ LAS TRES CONDICIONES ═══ */}
      <section className="py-16 md:py-24 bg-white/60 border-y border-greige">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">Primero, elegir bien</p>
            <h2 className="text-3xl md:text-4xl mb-5 text-balance">
              No vamos a meter IA en todo tu negocio
            </h2>
            <p className="text-lg text-pantalla/75">
              De hecho, probablemente te diga que <strong className="text-pantalla">no</strong>{' '}
              automatices muchas cosas todavía. Buscamos una tarea que cumpla tres condiciones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CONDICIONES.map(({ n, icon: Icon, title, desc }) => (
              <article key={n} className="card-roberta slide-in-section">
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm text-greige">{n}</span>
                </div>
                <h3 className="text-xl mb-3">{title}</h3>
                <p className="text-pantalla/70">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUÉ PODEMOS CONSTRUIR — sección oscura (momento producto) ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">Depende de tu negocio</p>
            <h2 className="text-3xl md:text-4xl mb-5 text-balance">¿Qué podemos construir?</h2>
            <p className="text-lg text-hueso/70">
              Dependerá completamente de tu caso. Estas son algunas de las soluciones que
              implementamos con más frecuencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUCIONES.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="card-roberta slide-in-section">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cian-glow/10 text-cian-glow">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl mb-3 text-hueso">{title}</h3>
                <p className="text-hueso/70">{desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 max-w-3xl rounded-card border border-cian-glow/25 bg-cian-glow/[0.06] p-7">
            <h3 className="text-xl mb-3 text-hueso">Y no, la IA no va a decidir por ti</h3>
            <p className="text-hueso/70 mb-3">
              No quiero que salgas de esta mentoría pensando que ahora ChatGPT maneja tu negocio.
              Todo lo contrario: la IA será un asistente.
            </p>
            <p className="text-hueso/70">
              Tú sigues teniendo el criterio, el conocimiento del cliente, las decisiones, la
              estrategia y el control. La IA hace parte del trabajo repetitivo; tú haces el trabajo
              que realmente necesita una persona.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PRUÉBALO — Roberta con su cartel + demo de voz (Retell) ═══ */}
      <section id="pruebalo" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-[auto_1fr] items-center gap-4 md:gap-10 max-w-2xl mx-auto mb-10">
            <div className="roberta-sway w-28 sm:w-40 md:w-[200px]">
              <Roberta pose="saludando" width={200} />
            </div>

            {/* Cartel en forma de bocadillo: sale de Roberta y se mece hacia ella */}
            <div className="sign-swing relative" style={{ transformOrigin: '0% 60%' }}>
              <span
                className="absolute left-0 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b-2 border-l-2 border-teal-dark bg-white"
                aria-hidden
              />
              <div className="rounded-card border-2 border-teal-dark bg-white p-4 sm:p-6 text-center shadow-[0_18px_40px_-18px_rgba(23,23,27,0.3)]">
                <p className="eyebrow mb-2">¿Te quedan dudas?</p>
                <p className="font-display text-lg sm:text-2xl leading-tight mb-4 sm:mb-5 text-balance">
                  Escríbeme por WhatsApp o prueba mi asistente de voz aquí abajo
                </p>
                <a
                  href={CTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-coral w-full px-4 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  <span className="sm:hidden">Abrir WhatsApp</span>
                  <span className="hidden sm:inline">Escribir por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="nudge-down mb-6 flex justify-center text-teal-dark" aria-hidden>
            <ChevronDown className="h-9 w-9" />
          </div>

          <RetellSlot />
        </div>
      </section>

      {/* ═══ CÓMO FUNCIONA ═══ */}
      <section id="como-funciona" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">Tres semanas, tres sesiones</p>
            <h2 className="text-3xl md:text-4xl text-balance">¿Cómo funciona la mentoría?</h2>
          </div>

          <ol className="space-y-6 max-w-4xl">
            {SESIONES.map(({ n, title, dur, body, out }) => (
              <li key={n} className="card-roberta slide-in-section">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="shrink-0">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-coral text-pantalla font-display text-2xl border-2 border-coral-dark">
                      {n}
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                      <h3 className="text-xl md:text-2xl">{title}</h3>
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-pantalla/50">
                        {dur}
                      </span>
                    </div>
                    <p className="text-pantalla/70 mb-4">{body}</p>
                    <p className="rounded-card-sm bg-teal/[0.07] border border-teal/20 px-5 py-3 text-pantalla/80">
                      <strong className="text-teal-dark">Te llevas:</strong> {out}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 max-w-4xl rounded-card border border-dashed border-greige p-7">
            <p className="eyebrow mb-3">Entre las sesiones</p>
            <p className="text-pantalla/75">
              Lo pruebas con situaciones reales y anotas qué funcionó, qué no, dónde se equivocó y
              qué podría mejorar. Esto es fundamental: una demo bonita no sirve de nada, tiene que
              funcionar en tu negocio real.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ ENTREGABLES ═══ */}
      <section className="py-16 md:py-24 bg-white/60 border-y border-greige">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">Al terminar</p>
            <h2 className="text-3xl md:text-4xl text-balance">Esto es lo que te llevas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENTREGABLES.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="card-roberta slide-in-section">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-coral/15 text-coral-dark">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg mb-2">{title}</h3>
                <p className="text-pantalla/70">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARA TI / NO PARA TI ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card-roberta slide-in-section">
              <p className="eyebrow mb-4">Encajas</p>
              <h3 className="text-2xl mb-6">Esta mentoría es para ti si…</h3>
              <ul className="space-y-3">
                {PARA_TI.map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check className="h-5 w-5 shrink-0 mt-0.5 text-teal" />
                    <span className="text-pantalla/75">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-card border border-greige bg-transparent p-7 slide-in-section">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-pantalla/40 mb-4">
                Mejor no
              </p>
              <h3 className="text-2xl mb-6 text-pantalla/70">No es para ti si…</h3>
              <ul className="space-y-3">
                {NO_PARA_TI.map((t) => (
                  <li key={t} className="flex gap-3">
                    <X className="h-5 w-5 shrink-0 mt-0.5 text-pantalla/30" />
                    <span className="text-pantalla/55">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-5 border-t border-greige text-pantalla/55">
                Esta mentoría no pretende convertirte en experta en IA. Pretende que tengas una
                primera victoria real usándola en tu empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GARANTÍA ═══ */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto rounded-card border-2 border-teal/30 bg-teal/[0.06] p-8 md:p-10 text-center">
            <span className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white">
              <ShieldCheck className="h-7 w-7" />
            </span>
            <h2 className="text-2xl md:text-3xl mb-4">Una garantía muy sencilla</h2>
            <p className="text-lg text-pantalla/75 mb-4">
              Después de la primera sesión tendremos que haber encontrado una oportunidad clara
              donde yo crea que puedo ayudarte. Si al terminarla ninguna de las dos ve un caso
              suficientemente bueno para continuar,{' '}
              <strong className="text-pantalla">paramos y te devuelvo el dinero</strong>.
            </p>
            <p className="text-pantalla/60">
              Prefiero perder una venta antes que implementar IA solo para decir que hemos
              implementado IA.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BIO ═══ */}
      <section className="py-16 md:py-24 bg-white/60 border-y border-greige">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
            <div className="rounded-card overflow-hidden border border-greige shadow-[0_18px_50px_-20px_rgba(23,23,27,0.25)]">
              <img
                src="/oscarina-mentoria.jpg"
                alt="Oscarina Hernández, ingeniera y dueña de ecommerce"
                className="w-full h-auto object-cover"
                width={800}
                height={800}
                loading="lazy"
              />
            </div>
            <div>
              <p className="eyebrow mb-4">Quién te acompaña</p>
              <h2 className="text-3xl md:text-4xl mb-5">Soy Oscarina</h2>
              <div className="space-y-4 text-lg text-pantalla/75">
                <p>
                  Ingeniera y dueña de ecommerce. Llevo años trabajando con programación, ecommerce,
                  automatización, ERP e inteligencia artificial.
                </p>
                <p>
                  Pero lo más importante para esta mentoría es otra cosa: también he sido la persona
                  que compra tecnología creyendo que va a resolver un problema, y después descubre
                  que no era la solución.
                </p>
                <p className="font-display text-2xl text-teal-dark">
                  Problema primero. Tecnología después.
                </p>
                <p>
                  No voy a recomendarte una herramienta porque esté de moda. Voy a ayudarte a
                  encontrar el punto de tu negocio donde la tecnología pueda darte una ventaja real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="eyebrow mb-4">Dudas frecuentes</p>
          <h2 className="text-3xl md:text-4xl mb-10 text-balance">
            Lo que probablemente te estás preguntando
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {FAQ.map(({ q, a }, i) => (
              <AccordionItem
                key={q}
                value={'faq-' + i}
                className="rounded-card border border-greige bg-white px-7 shadow-[0_1px_3px_rgba(23,23,27,0.04)]"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-5">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-pantalla/70 pb-5 text-base">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <p className="eyebrow mb-4">Empezamos con una sola cosa</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
            No tienes que convertir tu empresa en una empresa de IA
          </h2>
          <p className="text-lg text-hueso/70 mb-4">
            No tienes que aprender 50 herramientas. No tienes que entender cómo funciona un modelo
            de lenguaje.
          </p>
          <p className="text-lg text-hueso/70 mb-10">
            Solo necesitamos encontrar esa tarea que todavía haces tú y que una máquina ya podría
            estar ayudándote a hacer. Y empezar por ahí.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-cian-glow">
            <span>5 plazas fundadoras</span>
            <span className="text-hueso/25">·</span>
            <span>297 €</span>
            <span className="text-hueso/25">·</span>
            <span>3 semanas</span>
          </div>

          <a href={CTA} target="_blank" rel="noopener noreferrer" className="btn-coral text-lg">
            Quiero aplicar a la mentoría <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-hueso/40">
            Esta primera edición está limitada a 5 negocios
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentoriaIA;
