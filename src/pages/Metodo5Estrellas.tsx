import { Link } from 'react-router-dom';
import {
  Star, QrCode, MessageSquare, TrendingUp, Clock,
  ShieldCheck, ShieldAlert, ArrowRight, Check,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Footer from '@/components/Footer';
import Roberta from '@/components/Roberta';
import Seo from '@/components/Seo';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';
import { whatsappUrl, SITE_URL } from '@/config/contact';
import { breadcrumbSchema } from '@/lib/schema';

const PAGE_URL = `${SITE_URL}/metodo-5-estrellas`;
const TITLE = 'Más Reseñas de 5 Estrellas para tu Restaurante | Método';
const DESCRIPTION =
  'Método 5 Estrellas: la gama que convierte tu operativa en reseñas de 5 estrellas en Google. Tres niveles —Carta, Sala y Total— para dejar de perder mesas por la nota. Diagnóstico gratuito.';

const breadcrumb = breadcrumbSchema([
  { name: 'Inicio', path: '/' },
  { name: 'TPV para Restaurantes', path: '/tpv-hosteleria' },
  { name: 'Método 5 Estrellas', path: '/metodo-5-estrellas' },
]);

/**
 * ⚠️ PRECIOS PENDIENTES. Los tres precios los tiene que fijar el usuario
 * (Carmen). Pon aquí el número "desde" de cada nivel (p. ej. '1.800') y la
 * tarjeta lo muestra sola. Mientras sea null, se muestra «Pídenos presupuesto».
 */
const PRICES: Record<string, string | null> = {
  carta: null,
  sala: null,
  total: null,
};

const TIERS = [
  {
    id: 'carta',
    stars: '⭐',
    name: '5★ Carta',
    tagline: 'Que nadie espere para pedir',
    kills: 'Estuvimos 15 minutos con la carta en la mano sin que nadie viniera.',
    inherits: null as string | null,
    includes: [
      'Carta digital con QR por mesa: fotos, alérgenos y multiidioma',
      'Diseño con tu marca, no una plantilla genérica',
      'Autogestión desde el móvil: precios y platos en 2 minutos',
      'Agotados en un clic (se acabó el «de eso no queda»)',
      'Sugerencia automática de complementos',
      'Motor de reseñas: invitación en el momento justo, con enlace directo a tu ficha',
      'Panel con tu evolución de reseñas y valoración media',
      'Formación de 1 h + QRs impresos',
    ],
    featured: false,
    badge: null as string | null,
  },
  {
    id: 'sala',
    stars: '⭐⭐',
    name: '5★ Sala',
    tagline: 'Que el servicio no falle nunca',
    kills: 'Se equivocaron con el pedido y encima tardó una eternidad.',
    inherits: 'Todo lo de 5★ Carta, y además:',
    includes: [
      'TPV Odoo táctil con tu carta y tus tarifas',
      'Comandas desde tablet en mesa y barra (la comanda viaja sola)',
      'Pantallas de cocina y barra con tiempos y orden de salida',
      'Stock que se descuenta solo con cada venta',
      'Escandallos y margen real por plato',
      'Cierre de caja en 5 minutos, cuadrado al céntimo',
      'División de cuentas, terraza, turnos y multiusuario',
      'Facturación y contabilidad conectadas',
      'Panel Experiencia: cruza tus tiempos de servicio con tus reseñas',
      'Formación del equipo + 1 mes de soporte prioritario',
    ],
    featured: true,
    badge: 'El más contratado',
  },
  {
    id: 'total',
    stars: '⭐⭐⭐',
    name: '5★ Total',
    tagline: 'Que nadie haga cola ni para pedir ni para pagar',
    kills: 'Buenísimo todo, pero las colas para pagar son insufribles.',
    inherits: 'Todo lo de 5★ Sala, y además:',
    includes: [
      'Kiosco de autoservicio táctil con tu marca y pago integrado',
      'Venta sugerida automática (sube el ticket medio un 10–30%)',
      'Pedidos directos a las pantallas de cocina y barra',
      'Opción de cajón de cobro automático: cero descuadres',
      'Invitación a reseñar en la propia pantalla del kiosco',
      'Fidelización básica: clientes identificados y recurrencia medida',
      'Instalación física, rotulación y puesta en marcha',
      'Soporte prioritario',
    ],
    featured: false,
    badge: null as string | null,
  },
];

/** Motor de reseñas — los 4 pilares transversales a los tres niveles. */
const MOTOR = [
  { icon: Clock, t: 'Momento', d: 'La invitación sale justo tras el pago, cuando la satisfacción está en su pico. No al día siguiente por email.' },
  { icon: QrCode, t: 'Canal', d: 'QR en el ticket, pantalla del kiosco o WhatsApp. Un solo clic hasta tu ficha de Google.' },
  { icon: MessageSquare, t: 'Escucha interna', d: 'Un canal privado para quejas: el cliente descontento te habla a ti antes que a internet, y lo arreglas esa misma tarde.' },
  { icon: TrendingUp, t: 'Medición', d: 'Reseñas nuevas al mes, valoración media y la correlación entre tus tiempos de servicio y tu nota.' },
];

const FAQS = [
  {
    q: '¿Por qué me ayuda un TPV a tener mejores reseñas?',
    a: 'Porque las malas reseñas casi nunca hablan de la comida: hablan de la operativa. «Tardaron mucho», «se equivocaron con mi pedido», «no me atendían para pagar». Eso no se arregla cocinando mejor, se arregla con un sistema. El Método 5 Estrellas ataca justo esos fallos.',
  },
  {
    q: '¿Filtráis para que solo reseñen los clientes contentos?',
    a: 'No, y es importante: filtrar reseñas («review gating») viola las políticas de Google y puede costarte tu ficha entera. Enviamos la invitación a todos por igual. El sistema no manipula reseñas: arregla la operativa para que las buenas lleguen solas.',
  },
  {
    q: '¿Es legal pedir reseñas a los clientes?',
    a: 'Sí, siempre que no las compres ni las incentives con descuentos o regalos a cambio de una buena nota. Pedir opinión en el momento justo es totalmente legítimo.',
  },
  {
    q: '¿Cuál de los tres niveles necesito?',
    a: 'La mejor pista está en tus reseñas malas. Si se quejan de la espera para pedir, empieza por 5★ Carta; si fallan el servicio o el pedido, 5★ Sala; si el problema son las colas para pagar, 5★ Total. En el diagnóstico gratuito te lo decimos con tus propios datos.',
  },
  {
    q: '¿Cuánto se tarda en notar el cambio?',
    a: 'Depende de tu volumen de clientes, pero al pedir de forma sistemática la mayoría de locales ve subir el número de reseñas y la nota media en pocas semanas.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Método 5 Estrellas — más reseñas en Google para restaurantes',
  serviceType: 'Gestión de reputación y operativa para hostelería',
  provider: { '@type': 'Organization', name: 'RobotsConsultant', url: SITE_URL },
  description: DESCRIPTION,
  areaServed: [
    { '@type': 'City', name: 'Madrid' },
    { '@type': 'Country', name: 'España' },
  ],
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Gama Método 5 Estrellas',
    itemListElement: TIERS.map((tier) => ({
      '@type': 'Offer',
      name: tier.name,
      description: tier.tagline,
    })),
  },
};

const Metodo5Estrellas = () => {
  useScrollReveal();

  const ctaHero = whatsappUrl('Hola, quiero más reseñas de 5 estrellas para mi restaurante.');
  const ctaFinal = whatsappUrl('Hola, quiero mi diagnóstico gratuito del Método 5 Estrellas.');
  const ctaTier = (name: string) =>
    whatsappUrl(`Hola, me interesa el pack ${name} del Método 5 Estrellas. ¿Me pasáis información y precio?`);

  return (
    <div className="min-h-screen bg-hueso text-pantalla">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/metodo-5-estrellas"
        image="/roberta/saludando.png"
        schemas={[serviceSchema, faqSchema, breadcrumb]}
      />

      <Navbar />

      {/* ═══ HERO ═══ */}
      <header className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">⭐ Método 5 Estrellas · Gama para hostelería</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
                Los demás te ofrecen solo un TPV. Yo te ofrezco un sistema que te ayuda a subir tus estrellas en Google.
              </h1>
              <p className="text-lg md:text-xl text-pantalla/75 mb-8 max-w-2xl">
                Una cafetería con 4,7 y 300 reseñas llena a mediodía; la de enfrente con 3,9, no. El
                Método 5 Estrellas es el sistema que convierte tu operativa en reseñas de cinco
                estrellas — y lo hacemos en tres niveles, según lo que más te duela.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={ctaHero} target="_blank" rel="noopener noreferrer" className="btn-coral">
                  Quiero más reseñas <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="/diagnostico-5-estrellas.html"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-greige bg-white px-6 py-3 font-semibold text-teal-dark hover:border-teal"
                >
                  Hacer el test · 2 min
                </a>
              </div>

              <div className="mt-6 flex items-center gap-1 text-coral" aria-label="Cinco estrellas">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Roberta pose="cara-feliz" width={440} priority className="animate-float" />
            </div>
          </div>
        </div>
      </header>

      {/* ═══ LA IDEA QUE LO CAMBIA TODO ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow mb-3">La idea que lo cambia todo</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
              Las malas reseñas no hablan de tu comida. Hablan de tu operativa.
            </h2>
            <p className="text-lg text-pantalla/75">
              «Tardaron mucho», «se equivocaron con mi pedido», «no había lo que pedí», «no me
              atendían para pagar». Nada de eso se arregla cocinando mejor. Se arregla con un sistema.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <ul className="space-y-3">
              {[
                'Tus reseñas no son marketing: son tu alquiler.',
                'Tu cliente mira tu nota antes de entrar y decide en dos segundos.',
                'Con pocas reseñas o nota baja, pierdes la mesa antes de saludar.',
                'Casi nadie pide reseñas de forma sistemática. Hacerlo bien te pone por delante.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-lg text-pantalla/75">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <div className="card-roberta text-center w-full max-w-xs">
                <p className="font-display text-6xl font-extrabold text-coral mb-1">4,7★</p>
                <p className="text-pantalla/70 mb-4">llena · vs 3,9★ que se queda vacía</p>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal-dark">
                  La nota decide quién come contigo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LA GAMA — 3 NIVELES ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">La gama, en tres niveles</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-balance">
              Elige por lo que más te dicen en las reseñas malas
            </h2>
            <p className="text-lg text-pantalla/75">
              Cada nivel arregla un momento distinto de la experiencia. No hace falta empezar por el
              más grande: hace falta empezar por el que te está costando estrellas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-card bg-white p-7 md:p-8 ${
                  tier.featured ? 'border-2 border-coral shadow-lg lg:-mt-4' : 'border border-greige'
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1 font-mono text-xs uppercase tracking-[0.12em] text-pantalla">
                    {tier.badge}
                  </span>
                )}

                <p className="text-2xl mb-1" aria-hidden>{tier.stars}</p>
                <h3 className="font-display text-2xl font-extrabold mb-1">{tier.name}</h3>
                <p className="text-teal-dark font-semibold mb-4">{tier.tagline}</p>

                <div className="rounded-card-sm bg-hueso border border-greige p-4 mb-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-coral mb-1">
                    Elimina la reseña
                  </p>
                  <p className="text-sm text-pantalla/75 italic">«{tier.kills}»</p>
                </div>

                {tier.inherits && (
                  <p className="text-sm font-semibold text-teal-dark mb-3">{tier.inherits}</p>
                )}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-pantalla/80">
                      <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-greige pt-5 mt-auto text-center">
                  {PRICES[tier.id] ? (
                    <>
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal-dark mb-1">Desde</p>
                      <p className="font-display text-4xl font-extrabold text-coral mb-4">{PRICES[tier.id]} €</p>
                    </>
                  ) : (
                    <p className="text-pantalla/70 mb-4">Presupuesto a medida</p>
                  )}
                  <a
                    href={ctaTier(tier.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={tier.featured ? 'btn-coral w-full justify-center' : 'inline-flex w-full items-center justify-center gap-2 rounded-full border border-teal px-6 py-3 font-semibold text-teal-dark hover:bg-teal/10'}
                  >
                    Lo quiero <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-pantalla/60">
            ¿No sabes cuál? Cuéntanos qué te dicen en las reseñas malas y te lo decimos nosotros.
          </p>
        </div>
      </section>

      {/* ═══ MOTOR DE RESEÑAS ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">El motor de reseñas</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-balance">
              Lo que hace que las buenas reseñas lleguen solas
            </h2>
            <p className="text-lg text-hueso/80">
              Está en los tres niveles. No inventa opiniones: pone fácil que el cliente contento deje
              la suya, y te avisa del descontento antes de que lo haga público.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOTOR.map((pilar) => (
              <div key={pilar.t} className="card-roberta">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-cian-glow/10 text-cian-glow">
                  <pilar.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl mb-2 text-hueso">{pilar.t}</h3>
                <p className="text-hueso/70 text-sm">{pilar.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AVISO: NADA DE REVIEW GATING ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-card border-2 border-coral bg-hueso p-8 md:p-10">
            <div className="flex items-start gap-4">
              <ShieldAlert aria-hidden className="h-8 w-8 shrink-0 text-coral" />
              <div>
                <h2 className="text-2xl md:text-3xl mb-3 text-balance">Reseñas honestas, o no las tocamos</h2>
                <p className="text-lg text-pantalla/75 mb-3">
                  La invitación se envía a <strong className="text-pantalla">todos</strong> los clientes por
                  igual. Filtrar para que solo reseñen los contentos («review gating») viola las
                  políticas de Google y puede costarte tu ficha entera.
                </p>
                <p className="text-lg text-pantalla/75">
                  Nosotros no manipulamos reseñas: arreglamos la operativa para que las buenas lleguen
                  solas. Es lo correcto — y, de paso, tu mejor defensa frente a quien sí hace trampas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-12 items-start">
            <div>
              <p className="eyebrow mb-3">Preguntas frecuentes</p>
              <h2 className="text-3xl md:text-4xl mb-8 text-balance">Lo que suelen preguntarnos</h2>
              <Roberta pose="cara-timida" width={220} />
            </div>

            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem key={faq.q} value={`faq-${index}`} className="border-b border-greige">
                  <AccordionTrigger className="text-left font-display text-lg md:text-xl hover:no-underline hover:text-teal-dark py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-pantalla/75 pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL — DIAGNÓSTICO ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              <p className="eyebrow mb-3">La prueba previa gratis</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
                Te leemos tus últimas 30 reseñas y te decimos las 3 quejas que más se repiten
              </h2>
              <p className="text-lg text-hueso/80 mb-8">
                Gratis y sin compromiso. Verás negro sobre blanco qué te está costando estrellas — y
                qué nivel del Método lo arregla.
              </p>
              <a href={ctaFinal} target="_blank" rel="noopener noreferrer" className="btn-coral">
                Quiero mi diagnóstico gratuito <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-5 inline-flex items-center gap-2 text-base text-hueso/70">
                <ShieldCheck className="h-4 w-4 text-cian-glow" /> Respuesta en 24 h
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Roberta pose="guino" width={280} />
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                <Link to="/tpv-hosteleria" className="font-semibold text-cian-glow hover:text-white">
                  → TPV para restaurantes
                </Link>
                <Link to="/kioscos-autoservicio" className="font-semibold text-cian-glow hover:text-white">
                  → Kioscos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Metodo5Estrellas;
