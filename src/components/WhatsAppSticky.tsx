import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/config/contact';

/** Rutas donde el CTA no aporta (páginas legales) */
const HIDDEN_PREFIXES = ['/politica', '/terminos'];

/**
 * Brazo robótico de Roberta, dibujado con el lenguaje visual del personaje:
 * segmentos crema y teal, articulaciones coral con anilla clara. Sale del
 * borde derecho y su mano abierta «presenta» la píldora de WhatsApp.
 */
const RobertaArm = () => (
  <svg
    viewBox="0 0 300 150"
    width="300"
    height="150"
    aria-hidden
    className="block"
  >
    {/* hombro anclado al borde de la pantalla */}
    <rect x="262" y="42" width="46" height="66" rx="16" fill="hsl(var(--teal-dark))" />
    <circle cx="285" cy="75" r="7" fill="hsl(var(--cian-glow))" opacity="0.0" />
    <circle cx="285" cy="75" r="6" fill="hsl(var(--hueso))" opacity="0.85" />

    {/* brazo superior (crema, como el cuerpo de Roberta) */}
    <rect x="196" y="58" width="86" height="34" rx="17" fill="#E7E1D6" stroke="hsl(var(--greige))" strokeWidth="2" />
    <rect x="206" y="64" width="18" height="22" rx="9" fill="hsl(var(--teal))" opacity="0.55" />

    {/* codo: articulación coral con anilla */}
    <circle cx="192" cy="75" r="18" fill="hsl(var(--coral))" stroke="hsl(11 62% 55%)" strokeWidth="2.5" />
    <circle cx="192" cy="75" r="8" fill="none" stroke="#FFF6EF" strokeWidth="3" opacity="0.9" />

    {/* antebrazo teal */}
    <rect x="104" y="60" width="86" height="30" rx="15" fill="hsl(var(--teal))" stroke="hsl(var(--teal-dark))" strokeWidth="2" />

    {/* muñeca */}
    <circle cx="102" cy="75" r="12" fill="hsl(var(--coral))" stroke="hsl(11 62% 55%)" strokeWidth="2" />
    <circle cx="102" cy="75" r="5" fill="none" stroke="#FFF6EF" strokeWidth="2.5" opacity="0.9" />

    {/* mano coral abierta, palma hacia arriba, presentando */}
    <g stroke="hsl(11 62% 55%)" strokeWidth="2" fill="hsl(var(--coral))">
      <rect x="38" y="58" width="60" height="34" rx="15" />
      {/* dedos en abanico */}
      <rect x="42" y="26" width="12" height="38" rx="6" transform="rotate(-14 48 45)" />
      <rect x="60" y="22" width="12" height="42" rx="6" transform="rotate(-4 66 43)" />
      <rect x="78" y="24" width="12" height="40" rx="6" transform="rotate(6 84 44)" />
      {/* pulgar */}
      <rect x="30" y="66" width="26" height="13" rx="6.5" transform="rotate(24 43 72)" />
    </g>
  </svg>
);

const WhatsAppSticky = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (HIDDEN_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return null;

  return (
    <div
      className={`fixed bottom-4 right-0 z-40 transition-transform duration-700 [transition-timing-function:cubic-bezier(0.34,1.4,0.5,1)] ${
        visible ? 'translate-x-0' : 'translate-x-[110%]'
      }`}
    >
      {/* la escala responsive vive en su propia capa para no pelearse con la animación */}
      <div className={`scale-[0.62] sm:scale-75 md:scale-100 origin-bottom-right ${visible ? '' : 'pointer-events-none'}`}>
        <div className="relative arm-idle">
        <RobertaArm />

        {/* La píldora aparece sobre la palma cuando el brazo ya está fuera */}
        <a
          href={whatsappUrl('Hola, quiero mi diagnóstico gratuito.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escríbenos por WhatsApp"
          className={`btn-coral absolute -top-8 left-0 whitespace-nowrap !px-5 !py-2.5 text-base shadow-xl shadow-pantalla/25 origin-bottom transition-all duration-300 delay-300 ${
            visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <MessageCircle className="h-5 w-5" />
          Escríbenos
        </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppSticky;
