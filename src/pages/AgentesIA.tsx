import { Link } from 'react-router-dom';
import {
  MessageCircle, CalendarCheck, ShoppingBag, Bot, Clock, Zap,
  ArrowRight, Check, ShieldCheck,
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

const PAGE_URL = `${SITE_URL}/agentes-ia`;
const TITLE = 'Agentes de IA para tu Negocio | WhatsApp, Reservas y Atención 24/7';
const DESCRIPTION =
  'Agentes de inteligencia artificial que atienden por WhatsApp 24/7: toman reservas y pedidos en hostelería y resuelven la atención al cliente de tu ecommerce, con el contexto real de tu negocio.';

const breadcrumb = breadcrumbSchema([
  { name: 'Inicio', path: '/' },
  { name: 'Agentes de IA', path: '/agentes-ia' },
]);

const FAQS = [
  {
    q: '¿Un agente de IA sustituye a mi equipo?',
    a: 'No: lo libera. El agente se encarga de lo repetitivo (dudas, disponibilidad, «¿dónde está mi pedido?») a cualquier hora, y cuando algo se sale del guion lo pasa a una persona con todo el contexto ya cargado. Tu equipo atiende mejor porque deja de apagar fuegos.',
  },
  {
    q: '¿Responde con datos reales o se los inventa?',
    a: 'Con datos reales. Lo conectamos a tu sistema (Odoo, tu tienda online, tu agenda de reservas), así que responde con tu stock, tus horarios y tus pedidos de verdad. Y le ponemos límites: lo que no sabe, no se lo inventa, lo escala.',
  },
  {
    q: '¿En qué canales funciona?',
    a: 'El principal es WhatsApp, que es donde ya te escriben tus clientes. También puede vivir en el chat de tu web. Para reservas y pedidos de hostelería tenemos además un agente que atiende el teléfono.',
  },
  {
    q: '¿Cuánto se tarda en ponerlo en marcha?',
    a: 'Depende de a qué lo conectemos, pero un agente básico de WhatsApp con la información de tu negocio se monta en pocos días. Empezamos por lo esencial y lo ampliamos por fases.',
  },
  {
    q: '¿Cumple con la protección de datos?',
    a: 'Sí. Se recoge el consentimiento y se trata la información conforme al RGPD. El agente no hace spam: contesta a quien te escribe y avisa solo a quien lo ha aceptado.',
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
  name: 'Agentes de IA para atención, reservas y pedidos',
  serviceType: 'Agentes de inteligencia artificial para WhatsApp, hostelería y ecommerce',
  provider: { '@type': 'Organization', name: 'RobotsConsultant', url: SITE_URL },
  description: DESCRIPTION,
  areaServed: [
    { '@type': 'City', name: 'Madrid' },
    { '@type': 'Country', name: 'España' },
  ],
  url: PAGE_URL,
};

const UseCase = ({
  icon: Icon, eyebrow, title, lead, items, links, dark = false,
}: {
  icon: typeof Bot;
  eyebrow: string;
  title: string;
  lead: string;
  items: string[];
  links: { label: string; to: string }[];
  dark?: boolean;
}) => (
  <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
    <div className="lg:sticky lg:top-28">
      <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-card-sm ${dark ? 'bg-cian-glow/10 text-cian-glow' : 'bg-teal/10 text-teal'}`}>
        <Icon className="h-7 w-7" />
      </div>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h3 className={`text-2xl md:text-3xl lg:text-4xl mb-4 text-balance ${dark ? 'text-hueso' : ''}`}>{title}</h3>
      <p className={`text-lg mb-6 ${dark ? 'text-hueso/75' : 'text-pantalla/75'}`}>{lead}</p>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className={`font-semibold ${dark ? 'text-cian-glow hover:text-white' : 'text-teal hover:text-teal-dark'}`}>
            → {l.label}
          </Link>
        ))}
      </div>
    </div>

    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className={`flex gap-3 rounded-card-sm px-5 py-4 ${dark ? 'border border-white/10 bg-white/[0.04] text-hueso/80' : 'border border-greige bg-white text-pantalla/80'}`}>
          <Check aria-hidden className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? 'text-cian-glow' : 'text-teal'}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const AgentesIA = () => {
  useScrollReveal();

  const ctaHero = whatsappUrl('Hola, quiero una demo de los agentes de IA para mi negocio.');
  const ctaFinal = whatsappUrl('Hola, quiero mi diagnóstico gratuito para automatizar la atención con IA.');

  return (
    <div className="min-h-screen bg-hueso text-pantalla">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/agentes-ia"
        image="/roberta/saludando.png"
        schemas={[serviceSchema, faqSchema, breadcrumb]}
      />

      <Navbar />

      {/* ═══ HERO ═══ */}
      <header className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">🤖 Agentes de IA · Atención 24/7</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
                Un agente de IA que atiende a tus clientes cuando tú no puedes
              </h1>
              <p className="text-lg md:text-xl text-pantalla/75 mb-8 max-w-2xl">
                Contesta por WhatsApp a cualquier hora, toma reservas y pedidos en tu restaurante y
                resuelve las dudas de tu tienda online — con la información real de tu negocio y sin
                dejar a nadie sin respuesta.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={ctaHero} target="_blank" rel="noopener noreferrer" className="btn-coral">
                  Quiero una demo <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#casos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-greige bg-white px-6 py-3 font-semibold text-teal-dark hover:border-teal"
                >
                  Ver los 3 casos
                </a>
              </div>

              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-greige bg-white px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-teal-dark">
                <span className="h-2 w-2 rounded-full bg-teal" />
                24/7 · WhatsApp · conectado a tu sistema
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Roberta pose="saludando" width={460} priority className="animate-float" />
            </div>
          </div>
        </div>
      </header>

      {/* ═══ PROBLEMA ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">El problema</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
              Cada mensaje sin contestar es un cliente que se va con otro
            </h2>
            <p className="text-lg text-pantalla/75">
              Te escriben a las 23:00, en plena hora punta o en tu día libre. Preguntan lo de siempre:
              si hay mesa, si te queda la talla, dónde está su pedido. Y si nadie contesta a tiempo,
              se van. No te falta interés — te falta un par de manos que no duerman.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Clock, cifra: '24/7', label: 'sin horarios ni festivos' },
              { icon: Zap, cifra: 'Al instante', label: 'respuesta en segundos' },
              { icon: Bot, cifra: 'Cero', label: 'mensajes sin atender' },
            ].map((item) => (
              <div key={item.label} className="card-roberta text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-teal/10 text-teal">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="font-display text-4xl md:text-5xl font-extrabold text-coral mb-2">{item.cifra}</p>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal-dark">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASO 1 — WHATSAPP ═══ */}
      <section id="casos" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <UseCase
            icon={MessageCircle}
            eyebrow="Caso 1 · WhatsApp"
            title="El agente vive donde ya te escriben: WhatsApp"
            lead="Un solo número para tu negocio, atendido siempre. El agente entiende lo que preguntan y responde con el tono de tu marca."
            items={[
              'Responde 24/7 a dudas frecuentes: horarios, ubicación, precios, disponibilidad.',
              'Un único número para todo el equipo — se acaba el WhatsApp del negocio en el móvil de alguien.',
              'Cada conversación con el contexto del cliente: sus pedidos, sus reservas, su historial.',
              'Lo que no sabe, lo escala a una persona con toda la conversación ya cargada.',
              'Recoge el consentimiento y cumple con el RGPD: nada de spam.',
            ]}
            links={[
              { label: 'Agente telefónico para restaurantes', to: '/agentes-ia/restaurantes' },
            ]}
          />
        </div>
      </section>

      {/* ═══ CASO 2 — HOSTELERÍA (oscuro) ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <UseCase
            dark
            icon={CalendarCheck}
            eyebrow="Caso 2 · Hostelería"
            title="Toma reservas y pedidos sin que suene el teléfono en mal momento"
            lead="Para restaurantes, cafeterías y bares: el agente gestiona la reserva y el pedido de principio a fin, y no deja pasar ni una en hora punta."
            items={[
              'Toma reservas: consulta disponibilidad real, confirma y las registra solas.',
              'Gestiona pedidos para recoger o a domicilio, con tu carta y tus precios.',
              'Responde horarios, alérgenos y «¿tenéis mesa para 6 esta noche?» al instante.',
              'Avisos automáticos: reserva confirmada, pedido listo, recordatorio.',
              'Se integra con tu TPV y tu Odoo, así que todo queda en un único sitio.',
            ]}
            links={[
              { label: 'Agente telefónico para restaurantes', to: '/agentes-ia/restaurantes' },
              { label: 'TPV para restaurantes', to: '/tpv-hosteleria' },
            ]}
          />
        </div>
      </section>

      {/* ═══ CASO 3 — ECOMMERCE ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <UseCase
            icon={ShoppingBag}
            eyebrow="Caso 3 · Ecommerce"
            title="Atención al cliente de tu tienda, resuelta antes de que te frustre"
            lead="El agente contesta las preguntas que más repiten tus clientes de tienda online — con tu stock y tus pedidos de verdad, no adivinando."
            items={[
              '«¿Dónde está mi pedido?» respondido con el estado real del envío.',
              'Consultas de stock y tallas contestadas con el inventario en tiempo real.',
              'Cambios y devoluciones guiados paso a paso, sin que tu equipo repita lo mismo.',
              'Recuperación de carritos abandonados por WhatsApp, no por un email que nadie abre.',
              'Atención 24/7 que escala a una persona cuando el caso lo pide.',
            ]}
            links={[
              { label: 'TPV Inteligente para tiendas', to: '/tpv-inteligente' },
              { label: 'Odoo para ecommerce', to: '/odoo/ecommerce' },
            ]}
          />
        </div>
      </section>

      {/* ═══ CÓMO FUNCIONA ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Cómo funciona</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">De la idea a atendiendo clientes, por fases</h2>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'Diagnóstico gratuito', d: 'Vemos qué te preguntan más y por dónde se te escapan clientes.' },
              { t: 'Conexión a tu sistema', d: 'Lo enlazamos con tu Odoo, tu tienda y tu agenda para que responda con datos reales.' },
              { t: 'Lo entrenamos con tu negocio', d: 'Tu carta, tus horarios, tus políticas y tu tono. Y le ponemos límites.' },
              { t: 'En marcha y acompañando', d: 'Arranca por WhatsApp y lo afinamos con las conversaciones reales.' },
            ].map((paso, index) => (
              <li key={paso.t} className="card-roberta">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal font-mono text-base font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-xl mb-2">{paso.t}</h3>
                <p className="text-pantalla/75">{paso.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 md:py-24 bg-white">
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

      {/* ═══ CTA FINAL ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
                Deja de perder clientes por no llegar a tiempo. Pon un agente a atender por ti.
              </h2>
              <a href={ctaFinal} target="_blank" rel="noopener noreferrer" className="btn-coral">
                Quiero mi diagnóstico gratuito <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-5 inline-flex items-center gap-2 text-base text-hueso/70">
                <ShieldCheck className="h-4 w-4 text-cian-glow" /> Respuesta en 24 h · sin compromiso
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Roberta pose="guino" width={300} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentesIA;
