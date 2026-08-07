import { Link } from 'react-router-dom';
import {
  Receipt, SplitSquareHorizontal, ChefHat, Clock, BarChart3,
  ArrowRight, Coins,
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
import TpvOdooOffer from '@/components/TpvOdooOffer';

const PAGE_URL = `${SITE_URL}/tpv-hosteleria`;
const TITLE = 'TPV para Restaurantes y Cafeterías | Instalación en Madrid';
const DESCRIPTION =
  'TPV para restaurantes, bares y cafeterías con Odoo: comanda en mesa, cobro en segundos, cierre de caja al céntimo y pantallas de cocina. Instalación en Madrid. Diagnóstico gratuito.';

/** Precio "desde" de la gama de hostelería. */
const PRICE_FROM = '1.800';

const breadcrumb = breadcrumbSchema([
  { name: 'Inicio', path: '/' },
  { name: 'TPV para Restaurantes', path: '/tpv-hosteleria' },
]);

/** Fuente única para el acordeón y para el schema FAQPage. */
const FAQS = [
  {
    q: '¿Cuánto cuesta un TPV para restaurante?',
    a: `El equipo (Windows o Android), el cajón y la impresora vienen incluidos, y estrenas Odoo Enterprise con un año de licencia. Solo se presupuesta la puesta en marcha: desde ${PRICE_FROM} € (900 € de configuración de inventario + 900 € de configuración del TPV). En el diagnóstico gratuito te damos el número cerrado.`,
  },
  {
    q: '¿Tengo que tirar mi datáfono o mi TPV actual?',
    a: 'No siempre. Revisamos lo que ya tienes y te decimos qué se puede integrar y qué conviene sustituir. La idea es que no pagues dos veces por lo mismo.',
  },
  {
    q: '¿Es difícil de usar para el equipo?',
    a: 'Está pensado para camareros, no para informáticos. La formación va incluida y la mayoría lo domina en una tarde. Marcar una comanda es más fácil que mandar un audio de WhatsApp.',
  },
  {
    q: '¿Puedo dividir la cuenta y cobrar por partes?',
    a: 'Sí. El TPV divide la cuenta por comensal o por productos, admite pagos mixtos (tarjeta + efectivo) y deja todo registrado al céntimo para que el cierre de caja cuadre solo.',
  },
  {
    q: '¿Funciona si tengo varios locales?',
    a: 'Sí. Al ir sobre Odoo, centraliza varios locales con ventas, stock e informes unificados en un único panel. Ves cada local por separado y todo junto.',
  },
  {
    q: '¿Hacéis la instalación en Madrid?',
    a: 'Sí, instalamos y formamos presencialmente en Madrid y alrededores, y damos soporte remoto al resto de España. Implantamos por fases y fuera de tus horas punta: no cierras ni un día.',
  },
];

const PASOS = [
  { t: 'Diagnóstico gratuito', d: 'Vemos tu local (o videollamada) y detectamos dónde pierdes tiempo y dinero en el servicio.' },
  { t: 'Presupuesto cerrado', d: `Te decimos exactamente qué incluye y cuánto cuesta, desde ${PRICE_FROM} €. Sin letra pequeña.` },
  { t: 'Instalación y formación', d: 'Montamos el TPV y formamos al equipo en una tarde. Sin cerrar el local.' },
  { t: 'Soporte continuo', d: 'No desaparecemos tras la instalación: seguimos contigo cuando surge cualquier duda.' },
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
  name: 'TPV para restaurantes y cafeterías',
  serviceType: 'Instalación de TPV con Odoo para hostelería',
  provider: { '@type': 'Organization', name: 'RobotsConsultant', url: SITE_URL },
  description: DESCRIPTION,
  areaServed: [
    { '@type': 'City', name: 'Madrid' },
    { '@type': 'Country', name: 'España' },
  ],
  url: PAGE_URL,
  offers: {
    '@type': 'Offer',
    price: '1800',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: PAGE_URL,
  },
};

const FeatureCard = ({
  icon: Icon, title, children,
}: { icon: typeof Receipt; title: string; children: React.ReactNode }) => (
  <div className="card-roberta">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-teal/10 text-teal">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl mb-3">{title}</h3>
    <p className="text-pantalla/75">{children}</p>
  </div>
);

const TpvHosteleria = () => {
  useScrollReveal();

  const ctaHero = whatsappUrl('Hola, quiero información sobre el TPV para mi restaurante.');
  const ctaPack = whatsappUrl(`Hola, me interesa el TPV para hostelería (desde ${PRICE_FROM} €). ¿Me pasáis presupuesto?`);
  const ctaFinal = whatsappUrl('Hola, quiero mi diagnóstico gratuito de TPV para mi restaurante.');

  return (
    <div className="min-h-screen bg-hueso text-pantalla">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/tpv-hosteleria"
        image="/roberta/saludando.png"
        schemas={[serviceSchema, faqSchema, breadcrumb]}
      />

      <Navbar />

      {/* ═══ HERO ═══ */}
      <header className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">🍽️ TPV para hostelería · Partner oficial de Odoo</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
                El TPV para restaurantes que hace que la caja cuadre sola
              </h1>
              <p className="text-lg md:text-xl text-pantalla/75 mb-8 max-w-2xl">
                Comanda en la mesa, cobro en segundos, división de cuenta sin dramas y un cierre de
                caja al céntimo. Un TPV sobre Odoo pensado para bares, cafeterías y restaurantes —
                con kioscos y cocina conectados. Instalación en Madrid.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={ctaHero} target="_blank" rel="noopener noreferrer" className="btn-coral">
                  Quiero información <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#pack"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-greige bg-white px-6 py-3 font-semibold text-teal-dark hover:border-teal"
                >
                  Ver qué incluye y el precio
                </a>
              </div>

              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-greige bg-white px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-teal-dark">
                <span className="h-2 w-2 rounded-full bg-teal" />
                Desde {PRICE_FROM} € · presupuesto cerrado
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
              Si el servicio depende de gritar comandas, algo se te escapa
            </h2>
            <p className="text-lg text-pantalla/75">
              La hora punta lo destapa todo: colas en barra, comandas que se pierden, el camarero
              nuevo preguntando precios delante del cliente y un cierre de caja que nunca cuadra.
              No es que tu equipo falle — es que le falta la herramienta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard icon={Receipt} title="🧾 Comanda que viaja sola">
              El camarero marca en la mesa o en barra y la comanda llega al instante a cocina y a
              caja. Cero papelitos, cero «¿esto de quién era?».
            </FeatureCard>
            <FeatureCard icon={SplitSquareHorizontal} title="💳 Cobro y división sin dramas">
              Cobra en segundos, divide la cuenta por comensal o por productos y admite pagos mixtos.
              Todo queda registrado al céntimo.
            </FeatureCard>
            <FeatureCard icon={ChefHat} title="👨‍🍳 Cocina y barra conectadas">
              Cada pantalla ve solo lo suyo, con tiempos y orden de salida. El plato sale, se marca y
              a otra cosa.
            </FeatureCard>
            <FeatureCard icon={Clock} title="⏱️ Cierre de caja en 5 minutos">
              Pasa de 40 minutos y un misterio a 5 minutos y cero sorpresas. La caja cuadra sola.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* ═══ POR QUÉ ODOO ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="eyebrow mb-3">Por qué sobre Odoo</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
                No es solo una caja registradora. Es todo el negocio conectado.
              </h2>
              <p className="text-lg text-hueso/80 mb-6">
                Un TPV normal cobra y poco más. El nuestro va sobre <strong className="text-cian-glow">Odoo</strong>,
                así que la venta descuenta stock, alimenta tus informes y se conecta con compras,
                escandallos y facturación. Un solo sistema en lugar de cinco programas que no se hablan.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link to="/kioscos-autoservicio" className="font-semibold text-cian-glow hover:text-white">
                  → Kioscos de autoservicio
                </Link>
                <Link to="/cajon-cobro-automatico" className="font-semibold text-cian-glow hover:text-white">
                  → Cajón de cobro automático
                </Link>
                <Link to="/odoo/hosteleria" className="font-semibold text-cian-glow hover:text-white">
                  → Odoo para hostelería
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Roberta pose="mano-movil" width={280} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OFERTA TPV CON ODOO ═══ */}
      <section id="pack" className="py-16 md:py-24 bg-white scroll-mt-24">
        <TpvOdooOffer ctaHref={ctaPack} ctaLabel="Pedir presupuesto" />
      </section>

      {/* ═══ PROCESO ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">El proceso</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">Cómo lo ponemos en marcha</h2>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PASOS.map((paso, index) => (
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

      {/* ═══ MÉTRICAS ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Coins, cifra: '+10–30%', label: 'de ticket medio con kiosco' },
              { icon: Clock, cifra: '~5 min', label: 'de cierre de caja, cuadrado' },
              { icon: BarChart3, cifra: 'Al céntimo', label: 'cada venta, en tus informes' },
            ].map((item) => (
              <div key={item.label} className="card-roberta text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-teal/10 text-teal">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="font-display text-4xl md:text-5xl font-extrabold text-coral mb-2">
                  {item.cifra}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal-dark">
                  {item.label}
                </p>
              </div>
            ))}
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

      {/* ═══ CTA FINAL ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
                Pon el TPV a trabajar por ti. Empieza por el diagnóstico gratuito.
              </h2>
              <a href={ctaFinal} target="_blank" rel="noopener noreferrer" className="btn-coral">
                Quiero mi diagnóstico gratuito <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-5 text-base text-hueso/70">
                Te respondemos en menos de 24 h. Sin compromiso y sin rollos comerciales.
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

export default TpvHosteleria;
