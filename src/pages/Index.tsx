import { Link } from 'react-router-dom';
import {
  ArrowRight, AlertTriangle, Clock, PackageX, EyeOff,
  Monitor, Receipt, ChefHat, BarChart3, UtensilsCrossed, ShoppingBag, Youtube,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Roberta from '@/components/Roberta';
import Seo from '@/components/Seo';
import GDPRConsent from '@/components/GDPRConsent';
import OnlineStorePopup from '@/components/OnlineStorePopup';
import { whatsappUrl, SITE_URL, PHONE_TEL } from '@/config/contact';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RobotsConsultant',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    'Partner oficial de Odoo. Automatización e IA para pymes de hostelería y ecommerce.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE_TEL,
    contactType: 'sales',
    areaServed: 'ES',
    availableLanguage: 'Spanish',
  },
  sameAs: [
    'https://www.youtube.com/@robotsconsultant',
    'https://www.instagram.com/robotsqueen/',
    'https://www.facebook.com/profile.php?id=61578024748586',
  ],
};

/** Bloque «¿Tu empresa te tiene atrapado?» — copy heredado de ProblemSection. */
const PROBLEMS = [
  { icon: AlertTriangle, title: 'Caos operativo', text: 'Procesos manuales y fragmentados que generan ruido crítico en el día a día.' },
  { icon: Clock, title: 'Pérdida de tiempo', text: 'Horas interminables en tareas repetitivas que no aportan valor real.' },
  { icon: PackageX, title: 'Errores de stock', text: 'Desajustes constantes en el inventario que afectan a ventas y rentabilidad.' },
  { icon: EyeOff, title: 'Falta de control', text: 'Incapacidad de ver el estado real de tu negocio en tiempo real.' },
];

/** Pasos del ecosistema para la sección oscura firma. */
const ECOSYSTEM = [
  { icon: Monitor, label: 'Kiosco', text: 'El cliente pide y paga a su ritmo, sin cola.' },
  { icon: Receipt, label: 'TPV', text: 'La comanda se cobra y registra al céntimo.' },
  { icon: ChefHat, label: 'Cocina', text: 'Cada pantalla ve solo lo suyo, con tiempos.' },
  { icon: BarChart3, label: 'Métricas', text: 'Qué se vende, cuándo y con qué margen.' },
];

const YOUTUBE_VIDEOS = ['sOLfQvYjSNs', 'kh0oYd_EkZk', 'rTa7yggFCKU'];

const Index = () => {
  const ctaHero = whatsappUrl('Hola, quiero mi diagnóstico gratuito.');
  const ctaFinal = whatsappUrl('Hola, quiero automatizar mi negocio con RobotsConsultant.');

  return (
    <div className="min-h-screen bg-hueso text-pantalla">
      <Seo
        title="Automatización e IA para pymes de hostelería y ecommerce | RobotsConsultant"
        description="Partner oficial de Odoo. Automatizamos tu restaurante o tienda online: TPV, kioscos, stock, ecommerce y apps con IA. Diagnóstico gratuito."
        path="/"
        image="/roberta/saludando.png"
        schemas={[organizationSchema]}
      />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <header className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Partner oficial de Odoo</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
                Automatización e IA para pymes de hostelería y ecommerce
              </h1>
              <p className="text-lg md:text-xl text-pantalla/75 mb-8 max-w-2xl">
                Tu negocio no debería depender de que tú estés delante. Conectamos ventas,
                cocina, stock y números en un solo sistema para que recuperes el control —
                y tu tiempo.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href={ctaHero} target="_blank" rel="noopener noreferrer" className="btn-coral">
                  Quiero mi diagnóstico gratuito <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href={whatsappUrl('Hola, quiero ver cómo funciona vuestro sistema.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>

            {/* En móvil, Roberta debajo del H1 */}
            <div className="flex justify-center lg:justify-end">
              <Roberta pose="saludando" width={460} priority />
            </div>
          </div>
        </div>
      </header>

      {/* ═══ ¿TU EMPRESA TE TIENE ATRAPADO? ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">El problema</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              ¿Tu empresa te tiene atrapado?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROBLEMS.map((problem) => (
              <div key={problem.title} className="card-roberta">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-coral/12 text-coral">
                  <problem.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl mb-2">{problem.title}</h3>
                <p className="text-pantalla/75 text-base">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECCIÓN OSCURA FIRMA: EL ECOSISTEMA ═══ */}
      <section className="section-dark py-16 md:py-24 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--cian-glow)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cian-glow)) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, black, transparent)',
          }}
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-3">Un solo sistema</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 text-balance text-hueso">
              Todo conectado, del kiosco a las métricas
            </h2>
            <p className="text-lg text-hueso/75">
              Lo que se pide en el kiosco viaja al TPV, salta a la pantalla de cocina y se
              refleja al instante en tus números. Sin papelitos, sin gritos, sin sorpresas
              en el cierre de caja.
            </p>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-4">
            {ECOSYSTEM.map((step, index, all) => (
              <li key={step.label} className="relative">
                <div className="card-roberta h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-cian-glow/10 text-cian-glow">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-cian-glow mb-2">
                    Paso {index + 1}
                  </p>
                  <h3 className="text-xl mb-2 text-hueso">{step.label}</h3>
                  <p className="text-hueso/70 text-base">{step.text}</p>
                </div>
                {/* Conector de circuito hacia el siguiente paso */}
                {index < all.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden lg:block absolute top-16 -right-4 w-8 h-px bg-cian-glow/50"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ DOS PUERTAS: HOSTELERÍA Y ECOMMERCE ═══ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">¿Por dónde empiezas?</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              Elige tu camino
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Hostelería — Carmen */}
            <Link
              to="/odoo/hosteleria"
              className="group card-roberta flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-card-sm bg-teal/12 text-teal">
                <UtensilsCrossed className="h-7 w-7" />
              </div>
              <h3 className="text-2xl mb-3">Hostelería</h3>
              <p className="text-pantalla/75 mb-6 flex-1">
                Restaurantes y cafeterías como el de Carmen. TPV, kioscos de autoservicio,
                pantallas de cocina, escandallos y stock que se descuenta solo.
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-teal group-hover:text-teal-dark">
                Ver la historia de Roberta <ArrowRight className="h-5 w-5" />
              </span>
            </Link>

            {/* Ecommerce — Javier */}
            <Link
              to="/odoo/ecommerce"
              className="group card-roberta flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-card-sm bg-coral/12 text-coral">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <h3 className="text-2xl mb-3">Ecommerce</h3>
              <p className="text-pantalla/75 mb-6 flex-1">
                Tiendas online como la de Javier. Catálogo, stock y pedidos sincronizados,
                con un agente de IA en WhatsApp que atiende y vende por ti.
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-coral group-hover:brightness-90">
                Automatizar mi tienda <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ QUIÉN ESTÁ DETRÁS ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
            {/*
              Collage de dos fotos de la sesión VR. La trasera usa
              background-image a propósito: si /oscarina-vr-2.jpg aún no está
              exportada, queda como tarjeta decorativa greige en vez de icono
              de imagen rota.
            */}
            <div className="relative flex justify-center lg:justify-start">
              <div
                aria-hidden
                className="absolute -top-5 left-8 lg:left-14 hidden sm:block h-[70%] w-[62%] max-w-xs rotate-6 rounded-card border border-greige bg-greige/40 bg-cover bg-center shadow-lg"
                style={{ backgroundImage: "url('/oscarina-vr-2.jpg')" }}
              />
              <img
                src="/oscarina-vr.jpg"
                alt="Ing. Oscarina Hernández, fundadora de RobotsConsultant, con unas gafas de realidad virtual"
                className="relative w-full max-w-sm aspect-[4/5] -rotate-2 rounded-card object-cover shadow-[0_1px_3px_rgba(23,23,27,0.06),0_24px_48px_-16px_rgba(23,23,27,0.18)]"
                loading="lazy"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.dataset.fallback) return;
                  img.dataset.fallback = '1';
                  img.src = '/fotomiav2.png';
                }}
              />
            </div>

            <div>
              <p className="eyebrow mb-3">Quién está detrás</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
                Ingeniera de robots, obsesionada con tus clientes
              </h2>
              <p className="text-lg text-pantalla/75 mb-4">
                Soy la Ing. Oscarina Hernández. Vengo del mundo de la robótica industrial
                — Universal Robots, KUKA, ROS — y hoy aplico esa misma ingeniería a algo más
                cercano: que tu negocio funcione solo y tus clientes lo noten.
              </p>
              <p className="text-lg text-pantalla/75 mb-8">
                Porque la tecnología es la mitad del trabajo. La otra mitad es la experiencia
                de la persona que entra por tu puerta o llega a tu web: menos esperas, mejor
                atención y ganas de volver.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/sobre-mi" className="btn-secondary">
                  Conóceme mejor
                </Link>
                <Link to="/mentoria-ia" className="btn-secondary">
                  Mentoría en IA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        ═══ EL CANAL DE YOUTUBE ═══
        Principal centro de adquisición de clientes: aquí el CTA fuerte es
        suscribirse, no WhatsApp. Una fila de vídeos, según el brief.
      */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center mb-12">
            <div>
              <p className="eyebrow mb-3">El canal · nuevo vídeo cada semana</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 text-balance">
                Te enseño gratis en YouTube lo que otros te cobran por PowerPoint
              </h2>
              <p className="text-lg text-pantalla/75">
                Automatización, Odoo e IA aplicados a negocios reales, sin humo y en español.
                Empieza por aquí: mira dos vídeos y sabrás si somos tu equipo antes de
                escribirnos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:items-end lg:justify-end">
              <a
                href="https://www.youtube.com/@robotsconsultant?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral"
              >
                <Youtube className="h-5 w-5" /> Suscribirme al canal
              </a>
              <a
                href="https://www.youtube.com/@robotsconsultant"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Ver todos los vídeos
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {YOUTUBE_VIDEOS.map((id) => (
              <div
                key={id}
                className="overflow-hidden rounded-card border border-greige bg-white shadow-sm"
              >
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="Vídeo de RobotsConsultant"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance text-hueso">
                Cuéntanos dónde pierdes tiempo. Te decimos por dónde empezar.
              </h2>
              <a href={ctaFinal} target="_blank" rel="noopener noreferrer" className="btn-coral">
                Quiero mi diagnóstico gratuito <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-5 text-base text-hueso/70">
                Te respondemos en menos de 24 h. Sin compromiso y sin tecnicismos.
              </p>
              <p className="mt-3 text-base text-hueso/70">
                ¿Aún no estás lista para escribirnos?{' '}
                <a
                  href="https://www.youtube.com/@robotsconsultant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cian-glow hover:underline"
                >
                  Empieza por el canal de YouTube →
                </a>
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Roberta pose="guino" width={300} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <GDPRConsent />
      <OnlineStorePopup />
    </div>
  );
};

export default Index;
