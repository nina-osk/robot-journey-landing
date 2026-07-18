import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, TrendingUp, RefreshCw, Truck, MessageCircle,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';
import { whatsappUrl, SITE_URL } from '@/config/contact';

/**
 * Landing «Los números claros» (avatar Javier).
 * Tono analítico, sin personaje narrador: aquí habla el sistema y hablan
 * los números. La sección de métricas (bloque 4) es la firma visual.
 */

const TITLE = 'Odoo para Ecommerce | Tu Tienda Online Conectada al ERP';
const DESCRIPTION =
  'Vende online con todo sincronizado: catálogo, stock, pedidos y facturación en Odoo. Integramos Shopify, WooCommerce y marketplaces.';

/** BLOQUE 2 — checklist de auditoría */
const COSTES = [
  '¿Cuántas horas a la semana pierde tu equipo copiando pedidos de Shopify a mano al programa de facturación?',
  '¿Cuántas ventas has perdido por vender online algo que ya no quedaba en la tienda?',
  '¿Sabes el margen real de cada producto después de portes, comisiones y devoluciones?',
  '¿Cuánto dinero tienes parado en stock que no rota desde hace meses?',
];

/** BLOQUE 3 — inventario integrado */
const INVENTARIO = [
  { t: 'Sin sobreventa ni roturas', d: 'El stock que ve tu web es el stock que existe.' },
  { t: 'Variantes y multialmacén', d: 'Tallas, colores, tienda, trastienda y almacén externo, todo trazado.' },
  { t: 'Reposición automática', d: 'Define mínimos por referencia y Odoo te prepara la orden de compra al proveedor. Tú revisas y confirmas.' },
  { t: 'Inventarios sin cerrar la tienda', d: 'Recuentos por zonas con lector de códigos, sin maratones de domingo.' },
];

/** BLOQUE 4 — métricas del panel */
const METRICAS = [
  { t: 'Ventas por canal', d: 'Cuánto vende la tienda, cuánto la web, cuánto cada marketplace — y su tendencia.' },
  { t: 'Margen por producto', d: 'El real, con comisiones y portes descontados. Descubre qué referencia te hace ganar y cuál solo te hace facturar.' },
  { t: 'Rotación de stock', d: 'Qué reponer el lunes y qué liquidar ya para recuperar caja.' },
  { t: 'Clientes', d: 'Quién repite, quién compra por ambos canales, ticket medio por segmento.' },
];

/** BLOQUE 5 — operativa conectada */
const OPERATIVA = [
  { icon: RefreshCw, d: 'Pedido web → albarán → factura → asiento contable: automático.' },
  { icon: TrendingUp, d: 'El TPV de tu tienda física (la caja con cerebro) conectado al mismo catálogo y al mismo stock que la web.' },
  { icon: Check, d: 'Integración nativa con Shopify y WooCommerce, y conectores para marketplaces.' },
  { icon: Truck, d: 'Envíos: etiquetas y seguimiento generados desde el propio pedido.' },
];

/** BLOQUE 7 */
const PASOS = [
  { t: 'Auditoría gratuita', d: 'Mapeamos tus canales, tus sistemas actuales y las horas que se pierden entre ellos. Te entregamos el diagnóstico con números, no con humo.' },
  { t: 'Implantación por fases', d: 'Primero inventario y pedidos; después métricas y automatizaciones. Sin parar tu venta ni un día.' },
  { t: 'Migración y formación', d: 'Movemos catálogo, clientes e histórico, y tu equipo aprende con tus datos reales.' },
  { t: 'Acompañamiento', d: 'Revisiones periódicas para exprimir el sistema a medida que creces.' },
];

/** BLOQUE 9 — fuente única para el acordeón y el schema FAQPage */
const FAQS = [
  {
    q: '¿Se integra con mi tienda Shopify o WooCommerce actual?',
    a: 'Sí, de forma nativa: productos, stock, pedidos y clientes sincronizados en ambos sentidos. No tienes que rehacer tu tienda.',
  },
  {
    q: '¿Puedo migrar mi catálogo, clientes e histórico de ventas?',
    a: 'Sí. Migramos tus datos desde tu sistema actual (Shopify, Excel, otro ERP) de forma segura y validada antes de arrancar.',
  },
  {
    q: '¿Qué pasa con el TPV de mi tienda física?',
    a: 'Lo analizamos en la auditoría: en muchos casos se sustituye por el TPV de Odoo para tener un único sistema; en otros, se integra lo que ya tienes.',
  },
  {
    q: '¿Vendo también en Amazon o Miravia, sirve?',
    a: 'Sí: existen conectores para los principales marketplaces, con el stock centralizado en Odoo.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Depende de canales, volumen y módulos. Trabajamos por fases y en la auditoría gratuita te damos un presupuesto cerrado, sin sorpresas.',
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
  name: 'Odoo para ecommerce',
  serviceType: 'Integración de ecommerce omnicanal con ERP',
  provider: { '@type': 'Organization', name: 'RobotsConsultant', url: SITE_URL },
  description: DESCRIPTION,
  areaServed: 'ES',
  url: `${SITE_URL}/odoo/ecommerce`,
};

/** Barra del gráfico «ventas por canal» del dashboard mockup. */
const ChannelBar = ({ label, value, pct }: { label: string; value: string; pct: number }) => (
  <div>
    <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.12em]">
      <span className="text-hueso/70">{label}</span>
      <span className="text-cian-glow">{value}</span>
    </div>
    <div className="mt-1.5 h-2 rounded-full bg-white/[0.07]">
      <div
        className="h-2 rounded-full bg-cian-glow/80"
        style={{ width: `${pct}%` }}
      />
    </div>
  </div>
);

const OdooEcommerce = () => {
  useScrollReveal();

  const ctaAuditoria = whatsappUrl('Hola, quiero mi auditoría gratuita de ecommerce.');

  return (
    <div className="min-h-screen bg-hueso text-pantalla">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/odoo/ecommerce"
        type="article"
        schemas={[serviceSchema, faqSchema]}
      />
      <Navbar />

      {/* ═══ BLOQUE 1 — HERO ═══ */}
      <header className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Partner oficial de Odoo · Comercio omnicanal</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
                Odoo para ecommerce: tus métricas claras y todo tu inventario en un solo sistema
              </h1>
              <p className="text-lg md:text-xl text-pantalla/75 mb-8 max-w-2xl">
                Si vendes en tienda física y online, ya conoces el problema: dos stocks, tres
                Excels y cero visión real de lo que pasa. Odoo lo une todo — ventas, inventario,
                pedidos y números — en un panel que te dice qué está pasando y qué hacer a
                continuación.
              </p>
              <a href={ctaAuditoria} target="_blank" rel="noopener noreferrer" className="btn-coral">
                Quiero mi auditoría gratuita <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Mockup del dashboard en claro, con datos de ejemplo realistas */}
            <div className="rounded-card border border-greige bg-white p-6 shadow-[0_1px_3px_rgba(23,23,27,0.04),0_16px_40px_-16px_rgba(23,23,27,0.14)]">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-teal-dark">
                  Panel · hoy
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-teal">
                  <span className="h-2 w-2 rounded-full bg-teal animate-pulse" /> En vivo
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { k: 'Ventas', v: '2.418 €' },
                  { k: 'Pedidos', v: '47' },
                  { k: 'Margen', v: '31,4%' },
                ].map((stat) => (
                  <div key={stat.k} className="rounded-card-sm border border-greige bg-hueso p-3.5 text-center">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-pantalla/50 mb-1">{stat.k}</p>
                    <p className="font-display text-xl md:text-2xl font-extrabold text-teal-dark">{stat.v}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 font-mono text-sm">
                {[
                  { canal: 'Tienda física', v: '1.086 €', pct: 45 },
                  { canal: 'Web', v: '874 €', pct: 36 },
                  { canal: 'Marketplace', v: '458 €', pct: 19 },
                ].map((row) => (
                  <div key={row.canal}>
                    <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.1em]">
                      <span className="text-pantalla/60">{row.canal}</span>
                      <span className="text-teal-dark font-semibold">{row.v}</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-greige/40">
                      <div className="h-2 rounded-full bg-teal" style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 border-t border-greige pt-4 font-mono text-xs text-pantalla/50">
                STOCK SINCRONIZADO · 1.204 REFERENCIAS · 3 CANALES
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ BLOQUE 2 — EL COSTE DE LO DESCONECTADO ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Checklist de auditoría</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              ¿Cuánto te cuesta no tenerlo conectado?
            </h2>
          </div>

          <ol className="grid sm:grid-cols-2 gap-6 mb-10">
            {COSTES.map((pregunta, index) => (
              <li key={pregunta} className="card-roberta">
                <p className="font-mono text-sm text-coral mb-3">
                  {String(index + 1).padStart(2, '0')} /
                </p>
                <p className="text-lg text-pantalla/85">{pregunta}</p>
              </li>
            ))}
          </ol>

          <div className="mx-auto max-w-3xl rounded-card border border-greige bg-hueso p-7">
            <p className="text-lg text-pantalla/80">
              Si no puedes responder con un número exacto, ese es el diagnóstico. No te falta
              trabajo: <strong className="text-pantalla">te falta un sistema</strong>. Un ERP (el
              sistema nervioso de tu negocio) que conecte cada venta, cada canal y cada euro.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BLOQUE 3 — INVENTARIO INTEGRADO ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Inventario integrado</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 text-balance">
              Un solo stock, vendas donde vendas
            </h2>
            <p className="text-lg text-pantalla/75">
              Tienda física, Shopify, marketplaces: cada venta descuenta el mismo inventario, en
              tiempo real. Si se vende la última unidad en el mostrador, desaparece de la web en
              segundos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {INVENTARIO.map((item) => (
              <div key={item.t} className="card-roberta flex gap-4">
                <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal/12 text-teal">
                  <Check className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl mb-1.5">{item.t}</h3>
                  <p className="text-pantalla/75 text-base">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/odoo/integracion-shopify"
            className="font-semibold text-teal hover:text-teal-dark"
          >
            → Cómo integramos Shopify con Odoo
          </Link>
        </div>
      </section>

      {/* ═══ BLOQUE 4 — MÉTRICAS · sección oscura firma de esta página ═══ */}
      <section className="section-dark py-16 md:py-24 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--cian-glow)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cian-glow)) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 75% 65% at 50% 40%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 40%, black, transparent)',
          }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-3">El panel</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 text-balance text-hueso">
              Tu negocio en números, en tiempo real
            </h2>
            <p className="text-lg text-hueso/75">
              Deja de decidir por intuición. El panel de Odoo te muestra:
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start mb-12">
            {/* Dashboard mockup protagonista */}
            <div className="rounded-card border border-cian-glow/25 bg-white/[0.03] p-6 backdrop-blur-sm lg:sticky lg:top-28">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-cian-glow">
                  Ventas por canal · semana 29
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-cian-glow">
                  <span className="h-2 w-2 rounded-full bg-cian-glow animate-pulse" /> Live
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <ChannelBar label="Tienda física" value="6.412 €" pct={62} />
                <ChannelBar label="Web (Shopify)" value="4.980 €" pct={48} />
                <ChannelBar label="Amazon" value="2.230 €" pct={22} />
              </div>

              <div className="rounded-card-sm border border-white/10 bg-white/[0.03] p-4 font-mono text-sm">
                <p className="text-[11px] uppercase tracking-[0.14em] text-hueso/50 mb-3">
                  Margen real por referencia
                </p>
                <div className="space-y-2">
                  {[
                    { ref: 'ZAP-042', m: '+38%', good: true },
                    { ref: 'CAM-118', m: '+24%', good: true },
                    { ref: 'BOL-007', m: '−3%', good: false },
                  ].map((row) => (
                    <div key={row.ref} className="flex items-center justify-between">
                      <span className="text-hueso/70">{row.ref}</span>
                      <span className={row.good ? 'text-cian-glow' : 'text-coral'}>{row.m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-5 border-t border-white/10 pt-4 font-mono text-xs text-hueso/50">
                LA MISMA CIFRA EN TODOS LADOS · UN ÚNICO SISTEMA
              </p>
            </div>

            {/* Las cuatro métricas */}
            <div className="space-y-5">
              {METRICAS.map((metrica, index) => (
                <div key={metrica.t} className="card-roberta">
                  <p className="font-mono text-sm text-cian-glow mb-2">
                    {String(index + 1).padStart(2, '0')} /
                  </p>
                  <h3 className="text-xl mb-2 text-hueso">{metrica.t}</h3>
                  <p className="text-hueso/70">{metrica.d}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="max-w-3xl text-lg text-hueso/80">
            Todo desde el móvil, en cualquier momento. La misma cifra en todos lados, porque sale
            de un único sistema — <strong className="text-cian-glow">se acabó el «según qué Excel mires»</strong>.
          </p>
        </div>
      </section>

      {/* ═══ BLOQUE 5 — OPERATIVA CONECTADA ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Operativa conectada</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              Del clic a la contabilidad, sin picar datos
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {OPERATIVA.map((item) => (
              <div key={item.d} className="card-roberta flex gap-4 items-start">
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-card-sm bg-teal/12 text-teal">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="text-pantalla/80 text-lg">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-3xl rounded-card border border-greige bg-hueso p-7 mb-8">
            <p className="text-lg text-pantalla/80">
              Cada paso que hoy hace una persona copiando datos es un paso que mañana hace el
              sistema <strong className="text-pantalla">sin equivocarse</strong>.
            </p>
          </div>

          <Link
            to="/odoo/integracion-shopify"
            className="font-semibold text-teal hover:text-teal-dark"
          >
            → Integrar Shopify con Odoo
          </Link>
        </div>
      </section>

      {/* ═══ BLOQUE 6 — UPSELL: AGENTE IA ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-card border-2 border-coral bg-white p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="shrink-0 inline-flex h-16 w-16 items-center justify-center rounded-card-sm bg-coral/12 text-coral">
                <MessageCircle className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl mb-4 text-balance">
                  ¿Y quién atiende a las 23:47?
                </h2>
                <p className="text-lg text-pantalla/75 mb-6">
                  Tu Agente IA en WhatsApp: responde dudas, recomienda productos y recupera
                  carritos abandonados a cualquier hora. Y como está conectado a tu Odoo, nunca
                  promete un stock que no existe.
                </p>
                <a
                  href={whatsappUrl('Hola, quiero conocer el Agente IA Pro para WhatsApp.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Conocer el Agente IA Pro <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
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
              { cifra: 'Horas', label: 'de administración ahorradas cada semana' },
              { cifra: 'Cero', label: 'sobreventa entre canales' },
              { cifra: 'Margen', label: 'real visible por producto' },
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
            <blockquote className="text-lg md:text-xl text-pantalla/85 mb-5">
              «Su experiencia con Odoo Enterprise fue clave. Personalizaron el CRM para nuestro
              equipo de ventas y los resultados son tangibles: un 20% más de oportunidades
              cerradas este trimestre.»
            </blockquote>
            <figcaption className="font-mono text-xs uppercase tracking-[0.14em] text-teal-dark">
              Carlos Ruiz · Director Comercial
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
              <h2 className="text-3xl md:text-4xl text-balance">Lo que suelen preguntarnos</h2>
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

      {/* ═══ BLOQUE 10 — CTA FINAL ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance text-hueso">
              Deja de dirigir tu negocio a ciegas
            </h2>
            <p className="text-lg text-hueso/75 mb-8">
              En 30 minutos te decimos cuántas horas y cuánto margen estás dejando sobre la mesa
              — con tus números, no con promesas.
            </p>
            <a href={ctaAuditoria} target="_blank" rel="noopener noreferrer" className="btn-coral">
              Quiero mi auditoría gratuita <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-5 text-base text-hueso/70">
              Respuesta en menos de 24 h. Sin compromiso.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OdooEcommerce;
