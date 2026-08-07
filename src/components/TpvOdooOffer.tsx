import { Link } from 'react-router-dom';
import { Monitor, Package, Printer, BadgeCheck, Boxes, Settings, ScanLine, Check, ArrowRight, Gift, Globe } from 'lucide-react';

/**
 * Oferta «TPV con Odoo» — fuente única de la propuesta y sus precios.
 * Se usa en las dos landings de TPV (/tpv-hosteleria y /tpv-inteligente):
 * mismo producto y mismo precio, cambia solo el tono (light / dark).
 *
 * Si cambian los precios, se tocan AQUÍ y en ningún otro sitio.
 */

const INCLUIDO = [
  { icon: Monitor, t: 'Equipo TPV táctil', d: 'Windows o Android, listo para trabajar' },
  { icon: Package, t: 'Cajón portamonedas', d: 'Incluido en el precio' },
  { icon: Printer, t: 'Impresora térmica', d: 'Tickets al momento' },
  { icon: BadgeCheck, t: 'Odoo Enterprise · 1 año', d: 'Licencia incluida el primer año' },
];

const SERVICIOS = [
  {
    icon: Boxes,
    name: 'Configuración de Inventario Básico',
    price: '900',
    horas: 'unas 12 h de trabajo',
    detail: 'Carga de productos, establecimiento del stock inicial y valoración de existencias (FIFO o coste medio).',
  },
  {
    icon: Settings,
    name: 'Configuración del TPV',
    price: '900',
    horas: 'unas 12 h de trabajo',
    detail: 'Diseño de la interfaz de caja, parametrización de métodos de pago y conexión de la impresora térmica.',
  },
];

/** Precio de partida de la puesta en marcha completa (los dos servicios). */
export const TPV_ODOO_PRICE_FROM = '1.800';

interface Props {
  dark?: boolean;
  ctaHref: string;
  ctaLabel: string;
}

const TpvOdooOffer = ({ dark = false, ctaHref, ctaLabel }: Props) => {
  const c = dark
    ? {
        eyebrow: 'eyebrow',
        h2: 'text-hueso',
        lead: 'text-hueso/80',
        incWrap: 'border border-cian-glow/25 bg-cian-glow/[0.05]',
        incIcon: 'bg-cian-glow/10 text-cian-glow',
        incTitle: 'text-hueso',
        incDesc: 'text-hueso/60',
        card: 'border border-white/10 bg-white/[0.04]',
        cardIcon: 'bg-cian-glow/10 text-cian-glow',
        cardTitle: 'text-hueso',
        cardDetail: 'text-hueso/70',
        price: 'text-cian-glow',
        priceLabel: 'text-hueso/60',
        note: 'border border-white/10 bg-white/[0.03] text-hueso/75',
        noteIcon: 'text-cian-glow',
        noteStrong: 'text-hueso',
      }
    : {
        eyebrow: 'eyebrow',
        h2: 'text-pantalla',
        lead: 'text-pantalla/75',
        incWrap: 'border-2 border-coral bg-white',
        incIcon: 'bg-teal/10 text-teal',
        incTitle: 'text-pantalla',
        incDesc: 'text-pantalla/60',
        card: 'border border-greige bg-white',
        cardIcon: 'bg-teal/10 text-teal',
        cardTitle: 'text-pantalla',
        cardDetail: 'text-pantalla/75',
        price: 'text-coral',
        priceLabel: 'text-teal-dark',
        note: 'border border-greige bg-white text-pantalla/75',
        noteIcon: 'text-teal',
        noteStrong: 'text-pantalla',
      };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-12">
        <p className={`${c.eyebrow} mb-3`}>Qué incluye</p>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl mb-4 text-balance ${c.h2}`}>
          TPV con Odoo, todo incluido en el precio
        </h2>
        <p className={`text-lg ${c.lead}`}>
          El equipo (Windows o Android), el cajón y la impresora vienen incluidos, y estrenas Odoo
          Enterprise con un año de licencia. Solo se presupuesta la puesta en marcha.
        </p>
      </div>

      {/* Incluido en el precio */}
      <div className={`rounded-card ${c.incWrap} p-6 md:p-8 mb-6`}>
        <p className={`font-mono text-xs uppercase tracking-[0.14em] ${c.priceLabel} mb-5`}>
          Incluido en el precio
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INCLUIDO.map((item) => (
            <div key={item.t}>
              <div className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-card-sm ${c.incIcon}`}>
                <item.icon className="h-6 w-6" />
              </div>
              <p className={`font-semibold ${c.incTitle}`}>{item.t}</p>
              <p className={`text-sm ${c.incDesc}`}>{item.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Servicios de puesta en marcha */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {SERVICIOS.map((serv) => (
          <div key={serv.name} className={`rounded-card ${c.card} p-7 flex flex-col`}>
            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm ${c.cardIcon}`}>
              <serv.icon className="h-6 w-6" />
            </div>
            <h3 className={`text-xl mb-2 ${c.cardTitle}`}>{serv.name}</h3>
            <p className={`text-base ${c.cardDetail} mb-6 flex-1`}>{serv.detail}</p>
            <div className="flex items-end justify-between">
              <div>
                <p className={`font-mono text-xs uppercase tracking-[0.14em] ${c.priceLabel}`}>Desde</p>
                <p className={`font-display text-4xl font-extrabold ${c.price}`}>{serv.price} €</p>
              </div>
              <p className={`font-mono text-xs ${c.incDesc}`}>{serv.horas}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Integración avanzada opcional */}
      <div className={`rounded-card ${c.note} p-6 md:p-7 mb-8 flex flex-col sm:flex-row sm:items-center gap-4`}>
        <ScanLine className={`h-8 w-8 shrink-0 ${c.noteIcon}`} />
        <p className="text-base">
          <strong className={c.noteStrong}>Integración avanzada (opcional):</strong> ¿necesitas lector
          de códigos de barras por PDA para inventario o una pasarela de pago física (datáfono
          integrado)? Calcula unas 4–5 h adicionales por dispositivo.
        </p>
      </div>

      {/* Bonus: página web con Odoo gratis por la compra del pack */}
      <div className={`rounded-card mb-8 p-6 md:p-8 ${dark ? 'border border-coral/40 bg-coral/[0.08]' : 'border-2 border-coral bg-coral/5'}`}>
        <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1 mb-4 font-mono text-xs uppercase tracking-[0.12em] ${dark ? 'bg-coral/20 text-coral' : 'bg-coral text-white'}`}>
          <Gift className="h-4 w-4" /> Bonus por la compra de tu pack
        </span>
        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div className="flex items-start gap-4">
            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-card-sm shrink-0 ${dark ? 'bg-cian-glow/10 text-cian-glow' : 'bg-teal/10 text-teal'}`}>
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <h3 className={`text-xl mb-1 ${c.cardTitle}`}>Página web con Odoo, incluida</h3>
              <p className={`text-base ${c.cardDetail}`}>
                Te montamos tu página web sobre Odoo, integrada con tu catálogo y tu stock. Y encaja
                con el{' '}
                <Link to="/metodo-5-estrellas" className="font-semibold underline decoration-coral/50 hover:decoration-coral">
                  Método 5 Estrellas
                </Link>.
              </p>
            </div>
          </div>
          <div className="text-center md:pl-6 md:border-l md:border-greige/30">
            <span className={`block font-mono text-lg line-through ${c.incDesc}`}>1.700 €</span>
            <span className="block font-display text-5xl font-extrabold text-coral leading-none">0 €</span>
            <span className={`mt-2 inline-block rounded-full px-3 py-0.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] ${dark ? 'bg-coral/20 text-coral' : 'bg-coral text-white'}`}>
              Gratis
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn-coral">
          {ctaLabel} <ArrowRight className="h-5 w-5" />
        </a>
        <p className={`inline-flex items-center gap-2 text-sm ${c.incDesc}`}>
          <Check className={`h-4 w-4 ${c.noteIcon}`} /> Puesta en marcha completa desde {TPV_ODOO_PRICE_FROM} € · sin sorpresas
        </p>
      </div>
    </div>
  );
};

export default TpvOdooOffer;
