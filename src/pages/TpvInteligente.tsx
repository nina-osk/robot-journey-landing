import { Link } from 'react-router-dom';
import {
  Boxes, MessageCircle, Bot, Store, Database,
  ArrowRight, Check, ShieldCheck,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';
import { whatsappUrl, SITE_URL } from '@/config/contact';
import { breadcrumbSchema } from '@/lib/schema';
import TpvOdooOffer from '@/components/TpvOdooOffer';

const PAGE_URL = `${SITE_URL}/tpv-inteligente`;
const TITLE = 'TPV para Tiendas | Stock Único en Todos tus Canales';
const DESCRIPTION =
  'TPV Inteligente para comercio: un solo sistema, un solo stock y una sola conversación. Inventario que piensa, WhatsApp centralizado en Odoo y tienda física + online sincronizadas. Auditoría gratuita.';

const breadcrumb = breadcrumbSchema([
  { name: 'Inicio', path: '/' },
  { name: 'TPV para Tiendas', path: '/tpv-inteligente' },
]);

/** Los tres pilares. */
const PILAR_INVENTARIO = [
  'Stock único en todos los canales: vendes la última unidad en el mostrador y desaparece de la web en segundos.',
  'Reposición automática: defines mínimos y Odoo prepara la orden de compra. Tú confirmas desde el móvil.',
  'Previsión de demanda: te avisa de qué se te va a agotar antes de que pase, no después.',
  'Alertas de stock muerto: el producto parado que se come tu caja, señalado.',
  'Multialmacén y variantes: tienda, trastienda, almacén externo, tallas y colores, todo trazado.',
  'Inventarios sin cerrar: recuentos por zonas con lector de códigos.',
];

const PILAR_WHATSAPP = [
  'Un solo número para todo el equipo: se acaba el WhatsApp del negocio en el móvil personal de alguien.',
  'Cada conversación pegada a su cliente: historial de compras, pedidos abiertos y devoluciones a la vista.',
  'Consultas de stock respondidas con el stock real: el agente IA nunca promete lo que no hay.',
  'Pedidos y presupuestos por WhatsApp que entran directos a Odoo, sin picar nada a mano.',
  'Avisos automáticos: pedido confirmado, listo para recoger, envío en camino.',
  'Recuperación de carritos abandonados por WhatsApp, no por un email que nadie abre.',
  'Atención 24/7 con agente IA: lo que no sabe, lo escala a una persona con todo el contexto.',
];

const PILAR_CENTRAL = [
  'TPV táctil de tienda física con el mismo catálogo, precios y clientes que la web.',
  'Ticket, factura y asiento contable generados solos.',
  'Integración nativa con Shopify y WooCommerce + conectores de marketplaces.',
  'Devoluciones y cambios entre canales: compra online, devuelve en tienda.',
  'Fidelización y tarjetas de cliente unificadas entre tienda y web.',
  'Panel de control: ventas por canal, margen real (con comisiones y portes), rotación y recurrencia.',
  'Todo desde el móvil, con la misma cifra en todos lados.',
];

const FAQS = [
  {
    q: '¿De verdad puedo tener un solo stock entre la tienda y la web?',
    a: 'Sí, es el corazón del sistema. Cuando vendes en el mostrador, baja el stock de la web, y al revés. Se acabó vender online algo que ya no está en la estantería.',
  },
  {
    q: '¿Se integra con mi Shopify o WooCommerce actual?',
    a: 'Sí. El TPV va sobre Odoo e integra de forma nativa con Shopify y WooCommerce, más conectores de marketplaces. Catálogo, precios y stock en un único sitio.',
  },
  {
    q: '¿Qué gano metiendo el WhatsApp en el sistema?',
    a: 'Tus clientes ya te escriben por WhatsApp. La cuestión es si esas conversaciones acaban en tu sistema o en el móvil de alguien. Al centralizarlo, cada chat lleva el historial del cliente y el agente IA responde con el stock real.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'El equipo (Windows o Android), el cajón y la impresora vienen incluidos, más Odoo Enterprise con un año de licencia. Solo se presupuesta la puesta en marcha: desde 1.800 € (900 € de configuración de inventario + 900 € de configuración del TPV). En la auditoría gratuita te damos el número cerrado.',
  },
  {
    q: '¿Sirve si tengo varias tiendas o almacenes?',
    a: 'Sí. Al ir sobre Odoo, centraliza varios locales y almacenes con stock, ventas e informes unificados en un único panel.',
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
  name: 'TPV Inteligente para tiendas y comercio omnicanal',
  serviceType: 'TPV con Odoo, inventario único y WhatsApp centralizado',
  provider: { '@type': 'Organization', name: 'RobotsConsultant', url: SITE_URL },
  description: DESCRIPTION,
  areaServed: [
    { '@type': 'City', name: 'Madrid' },
    { '@type': 'Country', name: 'España' },
  ],
  url: PAGE_URL,
  offers: {
    '@type': 'Offer',
    name: 'Puesta en marcha del TPV con Odoo',
    price: '1800',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: PAGE_URL,
  },
};

const PilarBlock = ({
  icon: Icon, kicker, title, lead, items, argument,
}: {
  icon: typeof Boxes;
  kicker: string;
  title: string;
  lead: string;
  items: string[];
  argument: string;
}) => (
  <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
    <div className="lg:sticky lg:top-28">
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-card-sm bg-teal/10 text-teal">
        <Icon className="h-7 w-7" />
      </div>
      <p className="eyebrow mb-3">{kicker}</p>
      <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-balance">{title}</h3>
      <p className="text-lg text-pantalla/75 mb-6">{lead}</p>
      <p className="rounded-card-sm border-l-4 border-coral bg-white px-5 py-4 font-display text-lg text-teal-dark">
        {argument}
      </p>
    </div>

    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-card-sm border border-greige bg-white px-5 py-4 text-pantalla/80">
          <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TpvInteligente = () => {
  useScrollReveal();

  const ctaHero = whatsappUrl('Hola, quiero una auditoría de mi stock y mis canales de venta.');
  const ctaFinal = whatsappUrl('Hola, quiero mi auditoría gratuita de TPV Inteligente para mi tienda.');
  const ctaOferta = whatsappUrl('Hola, me interesa el TPV con Odoo para mi tienda. ¿Me pasáis presupuesto?');

  return (
    <div className="min-h-screen bg-hueso text-pantalla">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/tpv-inteligente"
        schemas={[serviceSchema, faqSchema, breadcrumb]}
      />

      <Navbar />

      {/* ═══ HERO (oscuro, dashboard) ═══ */}
      <header className="section-dark pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">🛍️ TPV Inteligente · Comercio omnicanal</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance text-hueso">
                TPV para tiendas con un solo stock en todos tus canales
              </h1>
              <p className="text-lg md:text-xl text-hueso/80 mb-4 max-w-2xl">
                No tienes un problema de ventas. Tienes un problema de versiones: tres sistemas, tres
                stocks, tres verdades. Y ninguna es la buena.
              </p>
              <p className="text-lg text-hueso/70 mb-8 max-w-2xl">
                Un solo sistema. Un solo stock. Una sola conversación — el TPV que es la misma base de
                datos que tu tienda online, tu almacén y tu WhatsApp.
              </p>

              <a href={ctaHero} target="_blank" rel="noopener noreferrer" className="btn-coral">
                Solicitar auditoría gratuita <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Mini-dashboard: stock único sincronizado */}
            <div className="rounded-card border border-cian-glow/25 bg-cian-glow/[0.05] p-6 font-mono text-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="uppercase tracking-[0.14em] text-xs text-cian-glow">Stock único</span>
                <span className="inline-flex items-center gap-2 text-xs text-cian-glow">
                  <span className="h-2 w-2 rounded-full bg-cian-glow animate-pulse" /> sincronizado
                </span>
              </div>
              <div className="space-y-2.5">
                {[
                  { p: 'Zapatilla Runner · T42', t: 3, w: 3, ok: true },
                  { p: 'Sudadera Gris · M', t: 1, w: 1, ok: true },
                  { p: 'Gorra Logo · única', t: 0, w: 0, ok: false },
                ].map((row) => (
                  <div key={row.p} className="flex items-center justify-between rounded-card-sm bg-white/[0.04] px-3 py-2.5 text-hueso/85">
                    <span className="truncate pr-2">{row.p}</span>
                    <span className="flex items-center gap-3 shrink-0">
                      <span className="text-hueso/55">tienda {row.t}</span>
                      <span className="text-hueso/55">web {row.w}</span>
                      <span className={row.ok ? 'text-cian-glow' : 'text-coral'}>
                        {row.ok ? '✓' : 'agotado'}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-hueso/50">
                Vendes la última unidad en caja → baja en la web en segundos.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ LA TESIS ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow mb-3">La tesis</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
              Tu problema no es de ventas. Es de versiones.
            </h2>
            <p className="text-lg text-pantalla/75">
              TPV por un lado, Shopify por otro, el WhatsApp del negocio en el móvil de tu empleada y
              un Excel de stock que ya nadie se cree. Cada sistema tiene su propia versión de la
              verdad. El TPV Inteligente las unifica en una sola fuente.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { n: '3', l: 'sistemas que no se hablan', bad: true },
              { n: '3', l: 'stocks que no cuadran', bad: true },
              { n: '1', l: 'sola fuente de verdad', bad: false },
            ].map((item) => (
              <div
                key={item.l}
                className={`card-roberta text-center ${item.bad ? '' : 'border-2 border-teal'}`}
              >
                <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-card-sm bg-teal/10 text-teal">
                  <Database className="h-5 w-5" />
                </div>
                <p className={`font-display text-5xl font-extrabold mb-2 ${item.bad ? 'text-pantalla/30' : 'text-coral'}`}>
                  {item.n}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal-dark">{item.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PILAR 1 — INVENTARIO ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PilarBlock
            icon={Boxes}
            kicker="Pilar 1 · Inventario inteligente"
            title="Que el stock piense, no solo que esté en un programa"
            lead="No es tener el inventario en un sistema: es que el sistema te avise antes de que algo falle."
            items={PILAR_INVENTARIO}
            argument="Tu stock actual te dice lo que hay. Este te dice lo que va a faltar."
          />
        </div>
      </section>

      {/* ═══ PILAR 2 — WHATSAPP (oscuro) ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-card-sm bg-cian-glow/10 text-cian-glow">
                <MessageCircle className="h-7 w-7" />
              </div>
              <p className="eyebrow mb-3">Pilar 2 · WhatsApp centralizado en Odoo</p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-balance text-hueso">
                El canal por el que vendes de verdad, dentro de tu sistema
              </h3>
              <p className="text-lg text-hueso/75 mb-6">
                Aquí está tu ventaja frente a cualquier empresa de TPV: ellos venden una caja; nosotros
                conectamos el WhatsApp por el que Javier ya vende.
              </p>
              <p className="rounded-card-sm border-l-4 border-cian-glow bg-white/[0.05] px-5 py-4 font-display text-lg text-cian-glow">
                Tus clientes ya te escriben por WhatsApp. ¿Esas conversaciones acaban en tu sistema o
                en el móvil de alguien?
              </p>
            </div>

            <ul className="grid gap-3">
              {PILAR_WHATSAPP.map((item, i) => (
                <li key={item} className="flex gap-3 rounded-card-sm border border-white/10 bg-white/[0.04] px-5 py-4 text-hueso/80">
                  {i === 6 ? (
                    <Bot aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-cian-glow" />
                  ) : (
                    <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-cian-glow" />
                  )}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ PILAR 3 — TODO CENTRALIZADO ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PilarBlock
            icon={Store}
            kicker="Pilar 3 · Todo centralizado"
            title="El TPV como columna vertebral, no como caja aislada"
            lead="Tienda física y online comparten catálogo, precios, clientes y números. La misma cifra en todos lados."
            items={PILAR_CENTRAL}
            argument="Deja de dirigir tu negocio con tres verdades distintas."
          />
        </div>
      </section>

      {/* ═══ OFERTA TPV CON ODOO ═══ */}
      <section className="section-dark py-16 md:py-24">
        <TpvOdooOffer dark ctaHref={ctaOferta} ctaLabel="Solicitar auditoría gratuita" />
      </section>

      {/* ═══ CROSS-LINKS ═══ */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-teal-dark">Relacionado:</span>
            <Link to="/odoo/ecommerce" className="font-semibold text-teal hover:text-teal-dark">→ Odoo para ecommerce</Link>
            <Link to="/apps-personalizadas" className="font-semibold text-teal hover:text-teal-dark">→ Apps a medida con IA</Link>
            <Link to="/agentes-ia/restaurantes" className="font-semibold text-teal hover:text-teal-dark">→ Agentes de IA</Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow mb-3">Preguntas frecuentes</p>
            <h2 className="text-3xl md:text-4xl text-balance">Lo que suelen preguntarnos</h2>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-3xl">
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
      </section>

      {/* ═══ CTA FINAL — AUDITORÍA ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">La auditoría gratuita</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance text-hueso">
              ¿Cuántas unidades te quedan de tu producto más vendido? ¿Dónde lo miras… y te fías?
            </h2>
            <p className="text-lg text-hueso/80 mb-8">
              Si has dudado, esa duda es el problema. Auditamos gratis tu stock y tus canales, te
              enseñamos dónde no cuadran las cifras y qué nivel lo arregla. Sin compromiso.
            </p>
            <a href={ctaFinal} target="_blank" rel="noopener noreferrer" className="btn-coral">
              Quiero mi auditoría gratuita <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-5 inline-flex items-center gap-2 text-base text-hueso/70">
              <ShieldCheck className="h-4 w-4 text-cian-glow" /> Respuesta en 24 h
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TpvInteligente;
