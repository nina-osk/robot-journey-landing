/**
 * Roberta — el personaje de marca. Brief sección 1, «mapa de poses».
 *
 * Los archivos definitivos van en /public/roberta/<pose>.webp (+ .png de
 * respaldo). Mientras no existan, se pinta un placeholder con el nombre de la
 * pose para que el layout sea el real y sustituir la imagen no mueva nada.
 */

import { useState } from 'react';

export type RobertaPose =
  | 'saludando'          // cuerpo entero — heroes
  | 'cara-feliz'         // capítulos positivos, favicon, avatar del chat
  | 'cara-timida'        // capítulo del caos, FAQs
  | 'guino'              // CTA final de cada página
  | 'perfil-mochila'     // /sobre-mi y /apps-personalizadas
  | 'mano-movil';        // carta digital, WhatsApp, compra desde móvil

const POSE_ALT: Record<RobertaPose, string> = {
  'saludando': 'Roberta, la robot de RobotsConsultant, saludando',
  'cara-feliz': 'Roberta con cara contenta',
  'cara-timida': 'Roberta con cara tímida',
  'guino': 'Roberta guiñando un ojo mientras saluda',
  'perfil-mochila': 'Roberta de perfil, con su mochila, en camino',
  'mano-movil': 'Roberta sosteniendo un móvil',
};

interface RobertaProps {
  pose: RobertaPose;
  /** Ancho en píxeles. Máx. 300 en uso normal, hasta 480 en hero. */
  width?: number;
  className?: string;
  /** true solo para la Roberta del hero: precarga y sin lazy load. */
  priority?: boolean;
  alt?: string;
}

const Roberta = ({ pose, width = 300, className = '', priority = false, alt }: RobertaProps) => {
  const label = alt ?? POSE_ALT[pose];
  const [failed, setFailed] = useState(false);

  /*
   * Mientras las poses no estén exportadas, se dibuja el placeholder en lugar
   * de la imagen. No vale con reemplazar img.src en onError: dentro de
   * <picture> manda el <source> webp, así que el swap no se vería.
   */
  if (failed) {
    return (
      <div
        role="img"
        aria-label={`${label} (ilustración pendiente de exportar)`}
        className={`flex flex-col items-center justify-center gap-1 rounded-card border-2 border-dashed border-teal/50 bg-greige/30 font-mono text-teal-dark ${className}`}
        style={{ width: `${width}px`, height: `${width}px`, maxWidth: '100%' }}
      >
        <span className="text-xs tracking-[0.2em]">ROBERTA</span>
        <span className="text-xs opacity-70">{pose}</span>
      </div>
    );
  }

  return (
    <picture className={className}>
      <source srcSet={`/roberta/${pose}.webp`} type="image/webp" />
      <img
        src={`/roberta/${pose}.png`}
        alt={label}
        width={width}
        height={width}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        /* React 18 aún no conoce fetchPriority en camelCase: va en minúsculas */
        {...{ fetchpriority: priority ? 'high' : 'auto' }}
        style={{ width: `${width}px`, maxWidth: '100%', height: 'auto' }}
        onError={() => setFailed(true)}
      />
    </picture>
  );
};

export default Roberta;
