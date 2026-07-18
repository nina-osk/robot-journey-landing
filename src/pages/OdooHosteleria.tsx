import { Link } from 'react-router-dom';
import {
  Smartphone, MonitorSmartphone, Receipt, ChefHat, Package,
  ShoppingCart, BarChart3, ArrowRight, Quote,
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

const PAGE_URL = `${SITE_URL}/odoo/hosteleria`;
const TITLE = 'Odoo para Hostelería | Gestión Integral de tu Restaurante';
const DESCRIPTION =
  'Gestiona tu restaurante o cafetería con Odoo: TPV, escandallos, stock, compras y facturación conectados. Con kioscos de autoservicio integrados.';

/** BLOQUE 9 — fuente única para el acordeón y para el schema FAQPage. */
const FAQS = [
  {
    q: '¿Cuánto cuesta implantar Odoo en una cafetería?',
    a: 'Depende de los módulos y del tamaño del local. Trabajamos por fases para que empieces por lo esencial sin una gran inversión inicial. En el diagnóstico gratuito te damos un presupuesto cerrado.',
  },
  {
    q: '¿Tengo que tirar mi TPV o mi datáfono actual?',
    a: 'No necesariamente. Analizamos lo que ya tienes y te decimos qué se puede aprovechar e integrar y qué conviene sustituir.',
  },
  {
    q: '¿Y si mi equipo no se aclara con la tecnología?',
    a: 'Está diseñado para camareros, no para informáticos. La formación está incluida y el sistema es más fácil que el WhatsApp.',
  },
  {
    q: '¿Cuánto se tarda? ¿Tengo que cerrar el local?',
    a: 'No. Implantamos por fases y fuera de tus horas punta. La mayoría de cafeterías están operativas con el sistema básico en pocas semanas.',
  },
  {
    q: '¿Sirve si tengo más de un local?',
    a: 'Sí: Odoo centraliza varios locales con stock, ventas e informes unificados en un solo panel.',
  },
];

/** BLOQUE 7 */
const PASOS = [
  { t: 'Diagnóstico gratuito', d: 'Visitamos tu local (o videollamada) y mapeamos dónde pierdes tiempo y dinero.' },
  { t: 'Implantación por fases', d: 'Empezamos por lo que más duele. Sin cerrar ni un solo día.' },
  { t: 'Formación del equipo', d: 'Hasta el camarero menos tecnológico lo domina en una tarde.' },
  { t: 'Acompañamiento', d: 'No desaparecemos tras la instalación: crecemos contigo.' },
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
  name: 'Implantación de Odoo para hostelería',
  serviceType: 'Implantación de ERP y TPV para restaurantes y cafeterías',
  provider: { '@type': 'Organization', name: 'RobotsConsultant', url: SITE_URL },
  description: DESCRIPTION,
  areaServed: 'ES',
  url: PAGE_URL,
};

/** Encabezado de capítulo, con su número en mono y su pose de Roberta. */
const ChapterHeading = ({ num, title }: { num: string; title: string }) => (
  <>
    <p className="eyebrow mb-3">{num}</p>
    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">{title}</h2>
  </>
);

const FeatureCard = ({
  icon: Icon, title, children,
}: { icon: typeof Smartphone; title: string; children: React.ReactNode }) => (
  <div className="card-roberta">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-teal/10 text-teal">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl mb-3">{title}</h3>
    <p className="text-pantalla/75">{children}</p>
  </div>
);

const OdooHosteleria = () => {
  useScrollReveal();

  const ctaHero = whatsappUrl('Hola, quiero esto en mi negocio de hostelería.');
  const ctaMedio = whatsappUrl('Hola, quiero recuperar mi tiempo con Odoo.');
  const ctaFinal = whatsappUrl('Hola, quiero mi diagnóstico gratuito para mi restaurante.');

  return (
    <div className="min-h-screen bg-hueso text-pantalla">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/odoo/hosteleria"
        type="article"
        image="/roberta/saludando.png"
        schemas={[faqSchema, serviceSchema]}
      />

      <Navbar />

      {/* ═══ BLOQUE 1 — HERO ═══ */}
      <header className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">🤖 Una historia de cafeterías, robots y tiempo libre</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
                Odoo para cafeterías y restaurantes: la historia de cómo recuperé mi vida
              </h1>
              <p className="text-lg md:text-xl text-pantalla/75 mb-8 max-w-2xl">
                Hola. Soy Roberta. Soy un robot y tengo una cafetería en Madrid. Sí, has leído bien.
                Y aunque yo no necesito dormir, hubo una época en la que mi negocio me tenía frita.
                Te cuento cómo lo arreglé — porque lo que me funcionó a mí, funciona todavía mejor
                si eres humana.
              </p>

              <a href={ctaHero} target="_blank" rel="noopener noreferrer" className="btn-coral">
                Quiero esto en mi negocio <ArrowRight className="h-5 w-5" />
              </a>

              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-greige bg-white px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-teal-dark">
                <span className="h-2 w-2 rounded-full bg-teal" />
                Partner oficial de Odoo
              </p>
            </div>

            {/* En móvil Roberta va debajo del H1, nunca compitiendo en horizontal */}
            <div className="flex justify-center lg:justify-end">
              <Roberta pose="saludando" width={480} priority className="animate-float" />
            </div>
          </div>
        </div>
      </header>

      {/* ═══ BLOQUE 2 — CAPÍTULO 1 ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
            <div className="order-2 lg:order-1 flex justify-center">
              <Roberta pose="cara-timida" width={260} />
            </div>

            <div className="order-1 lg:order-2 max-w-2xl">
              <ChapterHeading num="Capítulo 1" title="La cafetería que me tenía frita" />
              <p className="text-lg text-pantalla/75 mb-6">
                Abrí La Chispa con toda la ilusión del mundo. Seis meses después, mi día a día era esto:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Cola en la barra a las 8:30 mientras yo hacía cafés y cobraba a la vez',
                  'Comandas a gritos («¡marchando una mixta!») que a veces marchaban… y a veces no',
                  'El camarero nuevo preguntándome los precios delante del cliente',
                  'Un cierre de caja que nunca cuadraba y un Excel de inventario que mentía más que un lunes',
                  'Clientes que miraban la cola, daban media vuelta y se iban a la cafetería de enfrente',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-lg text-pantalla/75">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-pantalla/75 mb-4">
                Lo peor no era el caos. Era que <strong className="text-pantalla">todo dependía de mí</strong>.
                Si yo no estaba, aquello se paraba.
              </p>
              <p className="font-display text-2xl md:text-3xl text-teal-dark">
                ¿Te suena? Pues tú encima necesitas dormir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BLOQUE 3 — CAPÍTULO 2 ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <ChapterHeading num="Capítulo 2" title="Lo primero que arreglé fueron mis clientes" />
            <p className="text-lg text-pantalla/75">
              No empecé por la cocina ni por la caja. Empecé por la experiencia de la gente que me paga.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <FeatureCard icon={Smartphone} title="📱 Carta digital">
              Un QR en cada mesa. Fotos que dan hambre, alérgenos claros y carta en varios idiomas
              para los guiris del barrio. La actualizo en dos minutos desde el móvil: si se acaba la
              tarta de queso, desaparece de la carta ella sola. Se acabó el «de eso no me queda» con
              carita de pena.
            </FeatureCard>

            <FeatureCard icon={MonitorSmartphone} title="🖥️ Kiosco de autoservicio">
              Una pantalla donde el cliente pide y paga a su ritmo, sin cola y sin agobios. Y aquí
              viene lo mejor: el kiosco <strong className="text-pantalla">nunca</strong> se olvida de
              preguntar «¿lo quieres con croissant por 1,50 € más?». Mi ticket medio subió entre un
              10 y un 30% sin contratar a nadie.
            </FeatureCard>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 rounded-card border border-greige bg-white p-7">
            <Roberta pose="mano-movil" width={120} className="shrink-0" />
            <div>
              <p className="text-lg mb-3">
                <strong>Resultado:</strong> el cliente pide mejor, espera menos y vuelve más.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link to="/kioscos-autoservicio" className="font-semibold text-teal hover:text-teal-dark">
                  → Kioscos de autoservicio
                </Link>
                <Link to="/cajon-cobro-automatico" className="font-semibold text-teal hover:text-teal-dark">
                  → Cajón de cobro automático
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BLOQUE 4 — CAPÍTULO 3 · sección oscura «cara de Roberta» ═══ */}
      <section className="section-dark py-16 md:py-24 relative overflow-hidden">
        {/* Líneas de circuito cian que conectan los bloques */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--cian-glow)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cian-glow)) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
          }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <ChapterHeading num="Capítulo 3" title="Después, mi equipo" />
            <p className="text-xl text-hueso/80">
              La comanda ya no se grita: <strong className="text-cian-glow">viaja sola</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="card-roberta">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-cian-glow/10 text-cian-glow">
                <Receipt className="h-6 w-6" />
              </div>
              <h3 className="text-xl mb-3 text-hueso">🧾 TPV con Odoo</h3>
              <p className="text-hueso/70">
                El TPV (la caja registradora con cerebro) permite a mi equipo marcar la comanda en la
                mesa o en barra, cobrar en segundos, dividir la cuenta sin dramas… y todo queda
                registrado al céntimo. El cierre de caja pasó de 40 minutos y un misterio a{' '}
                <strong className="text-cian-glow">5 minutos y cero sorpresas</strong>.
              </p>
            </div>

            <div className="card-roberta">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-cian-glow/10 text-cian-glow">
                <ChefHat className="h-6 w-6" />
              </div>
              <h3 className="text-xl mb-3 text-hueso">👨‍🍳 Pantallas de cocina y barra</h3>
              <p className="text-hueso/70">
                Cocina ve solo lo suyo. La barra, solo lo suyo. Con tiempos, orden de salida y avisos.
                Cero papelitos, cero «¿esto de quién era?». Cuando el plato sale, se marca en pantalla
                y a otra cosa.
              </p>
            </div>
          </div>

          {/* Ecosistema conectado */}
          <div className="rounded-card border border-cian-glow/25 bg-cian-glow/[0.05] p-7">
            <p className="text-lg text-hueso/85 mb-6">
              <strong className="text-cian-glow">Todo conectado:</strong> lo que se pide en el kiosco,
              en la mesa o en la barra aparece al instante donde tiene que aparecer. Mi equipo dejó de
              apagar fuegos y empezó a atender personas.
            </p>
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-3 font-mono text-xs uppercase tracking-[0.14em]">
              {['Kiosco', 'TPV', 'Cocina', 'Métricas'].map((step, index, all) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="rounded-full border border-cian-glow/40 px-4 py-2 text-cian-glow">
                    {step}
                  </span>
                  {index < all.length - 1 && <span aria-hidden className="text-cian-glow/50">──</span>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══ BLOQUE 5 — CAPÍTULO 4 ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div>
              <ChapterHeading num="Capítulo 4" title="Y por último, yo" />
              <p className="text-lg text-pantalla/75 mb-10">
                Esta es la parte que nadie ve. Y la que me devolvió la vida.
              </p>

              <div className="space-y-6">
                <FeatureCard icon={Package} title="📦 Inventario que se descuenta solo">
                  Cada café vendido descuenta su leche y su café del stock. Escandallos reales (saber
                  cuánto te cuesta de verdad cada plato) y mermas bajo control.
                </FeatureCard>

                <FeatureCard icon={ShoppingCart} title="🛒 Compras automáticas">
                  Cuando el stock baja del mínimo, Odoo me deja preparado el pedido al proveedor. Yo
                  solo reviso y confirmo desde el móvil, con el vermú en la otra mano.
                </FeatureCard>

                <FeatureCard icon={BarChart3} title="📊 Métricas en tiempo real">
                  Qué se vende, a qué hora, qué margen deja cada cosa. Descubrí que mi bocadillo
                  «estrella» me hacía perder dinero y que uno que ni promocionaba era oro puro. Ahora
                  decido con datos, no con corazonadas.
                </FeatureCard>
              </div>

              <p className="mt-10 text-lg text-pantalla/75">
                Todo esto vive en un único sistema: <strong className="text-pantalla">Odoo, el ERP</strong>{' '}
                (el sistema nervioso de tu negocio). Un solo lugar donde ventas, cocina, stock y
                números se hablan entre sí.
              </p>
            </div>

            <div className="flex justify-center lg:sticky lg:top-28">
              <Roberta pose="cara-feliz" width={280} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BLOQUE 6 — EL GIRO ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-card border-2 border-coral bg-white p-8 md:p-12 text-center">
            <p className="text-xl md:text-2xl mb-5">
              Te voy a confesar algo: <strong className="font-display">Roberta no existe.</strong>{' '}
              Todavía no hay robots con cafetería propia. Dales tiempo.
            </p>
            <p className="text-lg text-pantalla/75 mb-5">
              Pero todo lo que te ha contado sí existe, funciona hoy en negocios reales, y lo implanta
              el equipo que la ha creado:{' '}
              <strong className="text-pantalla">
                RobotsConsultant, partner oficial de Odoo especializado en hostelería
              </strong>
              .
            </p>
            <p className="font-display text-2xl md:text-3xl text-teal-dark mb-8">
              La diferencia es que tú sí eres real. Y tu tiempo, también.
            </p>
            <a href={ctaMedio} target="_blank" rel="noopener noreferrer" className="btn-coral">
              Quiero recuperar mi tiempo <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ BLOQUE 7 — CÓMO LO IMPLANTAMOS ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">El proceso</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">Cómo lo implantamos</h2>
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

      {/* ═══ BLOQUE 8 — PRUEBA SOCIAL ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { cifra: '+10–30%', label: 'de ticket medio con kiosco' },
              { cifra: '~10 h', label: 'de gestión ahorradas a la semana' },
              { cifra: 'Al céntimo', label: 'caja cuadrada, cero sorpresas' },
            ].map((item) => (
              <div key={item.label} className="card-roberta text-center">
                <p className="font-display text-4xl md:text-5xl font-extrabold text-coral mb-2">
                  {item.cifra}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal-dark">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <figure className="mx-auto max-w-3xl card-roberta">
            <Quote aria-hidden className="h-8 w-8 text-coral mb-4" />
            <blockquote className="text-lg md:text-xl text-pantalla/85 mb-5">
              Antes teníamos 5 programas distintos para gestionar el negocio. Era un caos.
              RobotsConsultant lo centralizó todo en Odoo y ahora ahorramos unas 10 horas de trabajo
              administrativo a la semana.
            </blockquote>
            <figcaption className="font-mono text-xs uppercase tracking-[0.14em] text-teal-dark">
              María González
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ═══ BLOQUE 9 — FAQ ═══ */}
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
                <AccordionItem
                  key={faq.q}
                  value={`faq-${index}`}
                  className="border-b border-greige"
                >
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

      {/* ═══ BLOQUE 10 — CTA FINAL ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
                Roberta recuperó su tiempo sin necesitar dormir. Imagina lo que puedes recuperar tú.
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

export default OdooHosteleria;
