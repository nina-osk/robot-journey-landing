import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, Star, ShoppingCart, Package, Calculator, Users,
  Globe, Truck, BarChart3, Receipt, Database, ShieldCheck, GraduationCap,
  RefreshCw, UtensilsCrossed, ShoppingBag, Store,
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

/**
 * Página pilar de Odoo: implantación + migración (id="migracion", donde
 * apunta el desplegable del menú). Sin bloque de cita/Calendly: la
 * conversión de toda la web es por WhatsApp.
 */

const TITLE = 'Implantación y Migración de Odoo | Partner Oficial | RobotsConsultant';
const DESCRIPTION =
  'Implantamos y migramos Odoo ERP: ventas, TPV, inventario, contabilidad y CRM en un solo sistema. Diagnóstico gratuito, formación incluida y soporte continuo.';

/** Módulos que Odoo unifica */
const MODULOS = [
  { icon: ShoppingCart, label: 'Ventas y TPV' },
  { icon: Package, label: 'Inventario' },
  { icon: Calculator, label: 'Contabilidad' },
  { icon: Users, label: 'CRM' },
  { icon: Globe, label: 'Ecommerce' },
  { icon: Truck, label: 'Compras' },
  { icon: Receipt, label: 'Facturación' },
  { icon: BarChart3, label: 'Informes' },
];

/** Proceso de implantación en 4 pasos (brief: tarjetas numeradas) */
const PASOS = [
  { t: 'Diagnóstico gratuito', d: 'Analizamos tus procesos y te decimos qué módulos necesitas de verdad — y cuáles no. Presupuesto cerrado, sin sorpresas.' },
  { t: 'Implantación por fases', d: 'Configuramos Odoo empezando por lo que más duele. Tu negocio no se para ni un día.' },
  { t: 'Formación del equipo', d: 'Capacitación práctica con tus datos reales. Hasta el perfil menos tecnológico lo domina.' },
  { t: 'Soporte y acompañamiento', d: 'No desaparecemos tras la instalación: mantenimiento, actualizaciones y nuevas personalizaciones.' },
];

/** Migración: desde dónde traemos los datos */
const ORIGENES = ['Excel y hojas sueltas', 'Sage', 'Holded', 'A3', 'Access', 'Otro ERP', 'Odoo 12–17'];

const PASOS_MIGRACION = [
  { icon: Database, t: 'Auditoría de datos', d: 'Revisamos qué datos tienes, en qué estado están y qué merece la pena migrar. Limpieza incluida.' },
  { icon: RefreshCw, t: 'Migración validada', d: 'Clientes, productos, stock, histórico y contabilidad se transfieren y se validan contra el origen, dato a dato.' },
  { icon: ShieldCheck, t: 'Sin parar tu negocio', d: 'Trabajamos en paralelo con tu sistema actual y solo cambiamos cuando todo está comprobado. Inactividad mínima.' },
  { icon: GraduationCap, t: 'Formación en lo nuevo', d: 'Tu equipo aprende el nuevo Odoo con tus datos reales, no con demos genéricas.' },
];

/** Enlaces internos del pilar hacia sus páginas hijas */
const SECTORES = [
  { icon: UtensilsCrossed, title: 'Hostelería', desc: 'TPV, kioscos, cocina y escandallos. La historia de Roberta.', to: '/odoo/hosteleria' },
  { icon: ShoppingBag, title: 'Ecommerce', desc: 'Catálogo, stock y pedidos sincronizados. Los números claros.', to: '/odoo/ecommerce' },
  { icon: Store, title: 'Integración Shopify', desc: 'Tu tienda Shopify conectada a Odoo en ambos sentidos.', to: '/odoo/integracion-shopify' },
];

const FAQS = [
  {
    q: '¿Cuánto cuesta implementar Odoo?',
    a: 'Depende totalmente de la complejidad de tu empresa y la versión elegida (Community o Enterprise). Por eso, nuestro primer paso es siempre un diagnóstico gratuito para darte un presupuesto cerrado y sin sorpresas.',
  },
  {
    q: '¿Cuánto tiempo tarda el proceso de implementación de Odoo?',
    a: 'Una implementación básica puede tardar unas pocas semanas, mientras que proyectos más complejos pueden llevar varios meses. En nuestra hoja de ruta inicial te daremos una estimación de tiempo precisa.',
  },
  {
    q: 'Mi equipo no es muy tecnológico, ¿será difícil para ellos usar Odoo?',
    a: 'Odoo es conocido por su interfaz amigable. Además, nuestro servicio incluye una formación completa y práctica para asegurar que todo tu equipo se sienta cómodo y aproveche la herramienta al máximo.',
  },
  {
    q: '¿Qué diferencias hay entre Odoo Community y Enterprise?',
    a: 'Odoo Community es gratuito y de código abierto, ideal para PyMES con funcionalidades básicas. Odoo Enterprise incluye módulos avanzados, soporte oficial, hosting en la nube y mayor escalabilidad. Te ayudamos a elegir la versión que mejor se adapte a tu presupuesto y necesidades.',
  },
  {
    q: '¿Puedo migrar mis datos desde mi sistema actual a Odoo?',
    a: 'Sí, ofrecemos servicios de migración completos. Podemos transferir datos desde Excel, Access, otros ERPs o sistemas contables. Garantizamos la integridad de tus datos y minimizamos el tiempo de inactividad durante la transición.',
  },
  {
    q: '¿Qué tipo de soporte ofrecen después de la implementación de Odoo?',
    a: 'Ofrecemos soporte técnico continuo, actualizaciones, mantenimiento y nuevas personalizaciones. También disponemos de planes de soporte mensual y formación adicional según las necesidades de tu equipo.',
  },
  {
    q: '¿Odoo funciona en la nube o necesito servidores propios?',
    a: 'Odoo puede funcionar en ambos modos. Podemos instalarlo en tus servidores locales para mayor control, o configurarlo en la nube (Odoo.sh, AWS, Azure) para mayor flexibilidad y menor mantenimiento. Te asesoramos sobre la mejor opción según tu caso.',
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
  name: 'Implantación y migración de Odoo ERP',
  serviceType: 'Implantación, migración, personalización y soporte de Odoo',
  provider: { '@type': 'Organization', name: 'RobotsConsultant', url: SITE_URL },
  description: DESCRIPTION,
  areaServed: 'ES',
  url: `${SITE_URL}/odoo`,
};

const TESTIMONIOS = [
  {
    quote:
      'Antes teníamos 5 programas distintos para gestionar el negocio. Era un caos. El equipo de RobotsConsultant centralizó todo en Odoo y el proceso fue increíblemente fácil. Ahora ahorramos unas 10 horas de trabajo administrativo a la semana.',
    author: 'María González',
    role: 'CEO de Distribuidora MG',
  },
  {
    quote:
      'Su experiencia con Odoo Enterprise fue clave. Personalizaron el CRM para nuestro equipo de ventas y los resultados son tangibles: un 20% más de oportunidades cerradas este trimestre.',
    author: 'Carlos Ruiz',
    role: 'Director Comercial de TechSales',
  },
];

const OdooServices = () => {
  useScrollReveal();

  const ctaImplantacion = whatsappUrl('Hola, quiero mi diagnóstico gratuito de implantación de Odoo.');
  const ctaMigracion = whatsappUrl('Hola, quiero migrar mi sistema actual a Odoo.');

  return (
    <div className="min-h-screen bg-hueso text-pantalla">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/odoo"
        schemas={[serviceSchema, faqSchema]}
      />
      <Navbar />

      {/* ═══ HERO — IMPLANTACIÓN ═══ */}
      <header className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Partner oficial de Odoo · Implantación y migración</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
                Implantación de Odoo: todo tu negocio en un solo sistema
              </h1>
              <p className="text-lg md:text-xl text-pantalla/75 mb-8 max-w-2xl">
                Ventas, inventario, contabilidad, CRM y ecommerce dejan de vivir en programas
                separados que no se hablan. Instalamos Odoo, lo adaptamos a tu negocio y
                formamos a tu equipo — desde la primera reunión hasta mucho después de arrancar.
              </p>
              <a href={ctaImplantacion} target="_blank" rel="noopener noreferrer" className="btn-coral">
                Quiero mi diagnóstico gratuito <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Los módulos como visual del hero */}
            <div className="grid grid-cols-2 gap-3">
              {MODULOS.map((modulo) => (
                <div
                  key={modulo.label}
                  className="flex items-center gap-3 rounded-card-sm border border-greige bg-white px-4 py-3.5 shadow-sm"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal/12 text-teal">
                    <modulo.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-pantalla/70">
                    {modulo.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ═══ COMMUNITY VS ENTERPRISE ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Elige tu versión</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              ¿Community o Enterprise? Te ayudamos a decidir
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-roberta">
              <h3 className="text-2xl mb-1">Odoo Community</h3>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal-dark mb-5">
                Gratuito · código abierto
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Sin coste de licencia: pagas solo la implantación',
                  'Módulos esenciales: ventas, stock, compras, facturación',
                  'Ideal para pymes que empiezan a digitalizarse',
                  'Alojado donde tú decidas',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base text-pantalla/80">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl('Hola, quiero información sobre Odoo Community.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                Conocer Community
              </a>
            </div>

            <div className="relative rounded-card border-2 border-coral bg-white p-7 shadow-lg">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-coral px-4 py-1 font-mono text-xs uppercase tracking-[0.14em] text-pantalla">
                El más completo
              </span>
              <h3 className="text-2xl mb-1">Odoo Enterprise</h3>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal-dark mb-5">
                Licencia oficial · soporte de Odoo
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Todos los módulos avanzados: TPV completo, fabricación, RRHH',
                  'Soporte oficial de Odoo y actualizaciones garantizadas',
                  'Hosting en la nube (Odoo.sh) sin preocuparte de servidores',
                  'Escala contigo: multiempresa, multialmacén, multiidioma',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base text-pantalla/80">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl('Hola, quiero información sobre Odoo Enterprise.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral w-full"
              >
                Conocer Enterprise
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESO DE IMPLANTACIÓN — 4 PASOS NUMERADOS ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">El proceso</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              Cómo implantamos Odoo en tu empresa
            </h2>
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

      {/* ═══ MIGRACIÓN — sección oscura (destino del menú Odoo ▾ Migración) ═══ */}
      <section id="migracion" className="section-dark py-16 md:py-24 relative overflow-hidden scroll-mt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--cian-glow)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cian-glow)) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 75% 60% at 50% 40%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 60% at 50% 40%, black, transparent)',
          }}
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow mb-3">Migración a Odoo</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 text-balance text-hueso">
              ¿Atrapada en un ERP antiguo o en mil Excels? Te mudamos sin dramas
            </h2>
            <p className="text-lg text-hueso/75">
              Migrar da miedo por una razón: tus datos son tu negocio. Por eso nuestra migración
              se valida dato a dato y tu sistema actual sigue funcionando hasta que el nuevo
              está comprobado.
            </p>
          </div>

          {/* Desde dónde migramos */}
          <div className="mb-12 flex flex-wrap gap-3">
            {ORIGENES.map((origen) => (
              <span
                key={origen}
                className="rounded-full border border-cian-glow/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-cian-glow"
              >
                {origen}
              </span>
            ))}
            <span className="rounded-full bg-cian-glow px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-pantalla">
              → Odoo 18
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {PASOS_MIGRACION.map((paso) => (
              <div key={paso.t} className="card-roberta">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-cian-glow/10 text-cian-glow">
                  <paso.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg mb-2 text-hueso">{paso.t}</h3>
                <p className="text-hueso/70 text-base">{paso.d}</p>
              </div>
            ))}
          </div>

          <a href={ctaMigracion} target="_blank" rel="noopener noreferrer" className="btn-coral">
            Quiero migrar a Odoo <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* ═══ SOLUCIONES POR SECTOR ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Odoo por sector</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              Tu sector tiene su propia página
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SECTORES.map((sector) => (
              <Link
                key={sector.to}
                to={sector.to}
                className="group card-roberta flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-teal/12 text-teal">
                  <sector.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl mb-2">{sector.title}</h3>
                <p className="text-pantalla/75 mb-5 flex-1">{sector.desc}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-teal group-hover:text-teal-dark">
                  Ver más <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIOS ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Clientes reales</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              Lo que dicen quienes ya dieron el paso
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIOS.map((testimonio) => (
              <figure key={testimonio.author} className="card-roberta">
                <div className="mb-4 flex gap-1" aria-label="5 estrellas">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-coral text-coral" />
                  ))}
                </div>
                <blockquote className="text-lg text-pantalla/85 mb-5">
                  «{testimonio.quote}»
                </blockquote>
                <figcaption>
                  <p className="font-semibold">{testimonio.author}</p>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal-dark">
                    {testimonio.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance text-hueso">
                Un solo sistema, un solo equipo que te acompaña
              </h2>
              <a href={ctaImplantacion} target="_blank" rel="noopener noreferrer" className="btn-coral">
                Quiero mi diagnóstico gratuito <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-5 text-base text-hueso/70">
                Te respondemos en menos de 24 h. Sin compromiso y sin tecnicismos.
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

export default OdooServices;
