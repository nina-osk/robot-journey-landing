import { Link } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, Coins, Clock, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Footer from '@/components/Footer';
import Roberta from '@/components/Roberta';
import Seo from '@/components/Seo';
import { whatsappUrl, SITE_URL } from '@/config/contact';

const TITLE = 'Cajón de cobro automático | Cero errores de caja';
const DESCRIPTION =
  'Cajón inteligente que cuenta, cobra y da el cambio solo. Elimina errores de caja y descuadres, y libera a tu equipo para atender. Integrado con tu TPV y Odoo.';

const BENEFITS = [
  { icon: ShieldCheck, title: 'Cero descuadres', text: 'La máquina cuenta y da el cambio exacto. El cierre de caja cuadra siempre, al céntimo.' },
  { icon: Coins, title: 'Menos manipulación de efectivo', text: 'Tu equipo no toca el dinero: se acaban los errores, los robos hormiga y las discusiones.' },
  { icon: Clock, title: 'Cobros más rápidos', text: 'El cliente paga y recibe el cambio en segundos, sin esperar a que nadie busque monedas.' },
  { icon: TrendingUp, title: 'Integrado con tu TPV', text: 'Cada cobro queda registrado en Odoo. Ventas, caja y contabilidad hablan el mismo idioma.' },
];

type Pack = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  featured?: boolean;
};

const PACKS: Pack[] = [
  {
    name: 'Básico',
    price: 'Consultar',
    tagline: 'Para un punto de cobro',
    features: [
      'Cajón de cobro automático',
      'Integración con tu TPV actual',
      'Instalación y puesta en marcha',
      'Formación del equipo',
    ],
  },
  {
    name: 'Profesional',
    price: 'Consultar',
    tagline: 'El montaje completo',
    featured: true,
    features: [
      'Todo lo del pack Básico',
      'TPV con Odoo incluido',
      'Conexión con stock y métricas',
      'Soporte prioritario',
      'Acompañamiento en la puesta en marcha',
    ],
  },
  {
    name: 'Multi-local',
    price: 'Consultar',
    tagline: 'Para cadenas y franquicias',
    features: [
      'Todo lo del pack Profesional',
      'Varios puntos de cobro',
      'Panel unificado de todos los locales',
      'Informes consolidados en Odoo',
    ],
  },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cajón de cobro automático',
  description: DESCRIPTION,
  brand: { '@type': 'Brand', name: 'RobotsConsultant' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/cajon-cobro-automatico`,
  },
};

const CajonCobroAutomatico = () => {
  useScrollReveal();

  const ctaHero = whatsappUrl('Hola, quiero información del cajón de cobro automático.');

  return (
    <div className="min-h-screen bg-hueso text-pantalla">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/cajon-cobro-automatico"
        type="article"
        schemas={[productSchema]}
      />
      <Navbar />

      {/* HERO */}
      <header className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Efectivo bajo control</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
                El cajón que cuenta, cobra y da el cambio solo
              </h1>
              <p className="text-lg md:text-xl text-pantalla/75 mb-8 max-w-2xl">
                Si el cierre de caja nunca te cuadra, el problema no es tu equipo: es que el
                dinero pasa por demasiadas manos. Un cajón de cobro automático lo resuelve de
                raíz.
              </p>
              <a href={ctaHero} target="_blank" rel="noopener noreferrer" className="btn-coral">
                Quiero información <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Roberta pose="cara-feliz" width={380} priority />
            </div>
          </div>
        </div>
      </header>

      {/* BENEFICIOS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Por qué merece la pena</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              Menos errores, menos tiempo, más control
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="card-roberta">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-teal/12 text-teal">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl mb-2">{benefit.title}</h3>
                <p className="text-pantalla/75">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Elige tu pack</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              Una solución para cada tamaño de negocio
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PACKS.map((pack) => (
              <div
                key={pack.name}
                className={
                  pack.featured
                    ? 'relative rounded-card border-2 border-coral bg-white p-7 shadow-lg md:-mt-3'
                    : 'card-roberta'
                }
              >
                {pack.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-coral px-4 py-1 font-mono text-xs uppercase tracking-[0.14em] text-pantalla">
                    El más contratado
                  </span>
                )}
                <h3 className="text-2xl mb-1">{pack.name}</h3>
                <p className="text-pantalla/60 text-base mb-4">{pack.tagline}</p>
                <p className="font-display text-3xl font-extrabold text-teal-dark mb-6">
                  {pack.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-base text-pantalla/80">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(`Hola, me interesa el pack ${pack.name} del cajón de cobro automático.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pack.featured ? 'btn-coral w-full' : 'btn-secondary w-full'}
                >
                  Lo quiero
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-base text-pantalla/60">
            ¿Tienes una cafetería o restaurante?{' '}
            <Link to="/odoo/hosteleria" className="font-semibold text-teal hover:text-teal-dark">
              Míralo dentro de la historia de Roberta →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CajonCobroAutomatico;
