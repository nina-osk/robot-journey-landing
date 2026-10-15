import { useEffect, useRef } from 'react';
import { Mic } from 'lucide-react';
import { RETELL_WIDGET } from '@/config/retell';

/** Alturas de las barras del ecualizador (se animan con .voice-bar) */
const BARS = [0.5, 0.8, 1, 0.7, 0.9, 0.6, 1, 0.75, 0.55, 0.85, 0.65];

/**
 * Hueco reservado para la demo de voz de Retell AI.
 *
 * El script se inyecta desde JS al montar, y no en el HTML: un <script> escrito
 * en JSX no se ejecuta, y si se metiera en el prerender se cargaría dos veces.
 * La configuración vive en src/config/retell.ts.
 */
const RetellSlot = () => {
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slot = slotRef.current;
    if (!RETELL_WIDGET || !slot) return;

    const script = document.createElement('script');
    script.src = RETELL_WIDGET.src;
    script.async = true;
    for (const [name, value] of Object.entries(RETELL_WIDGET.attributes)) {
      script.setAttribute(name, value);
    }
    slot.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="section-dark relative overflow-hidden rounded-card border border-cian-glow/25 p-8 md:p-10 text-center">
      {/* Micrófono con anillo que late */}
      <div className="relative mx-auto mb-6 h-20 w-20">
        <span className="ring-pulse absolute inset-0 rounded-full border-2 border-cian-glow" aria-hidden />
        <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-cian-glow/15 text-cian-glow">
          <Mic className="h-9 w-9" />
        </span>
      </div>

      <p className="eyebrow mb-3">Asistente de voz · demo</p>
      <h3 className="text-2xl md:text-3xl mb-3 text-hueso">Habla con mi asistente</h3>

      {/* Ecualizador decorativo */}
      <div className="mx-auto mb-6 flex h-12 items-end justify-center gap-1.5" aria-hidden>
        {BARS.map((h, i) => (
          <span
            key={i}
            className="voice-bar block w-1.5 rounded-full bg-cian-glow"
            style={{ height: `${h * 100}%`, animationDelay: `${i * 0.09}s` }}
          />
        ))}
      </div>

      {/* Aquí se monta el widget de Retell (src/config/retell.ts) */}
      <div ref={slotRef} id="retell-demo" className="min-h-[1px]">
        {!RETELL_WIDGET && (
          <p className="text-hueso/70">
            La demo de voz llega muy pronto. Pregúntale por precios, plazos o si la mentoría
            encaja con tu tienda: te contestará como lo haría el asistente que montamos juntas.
          </p>
        )}
      </div>
    </div>
  );
};

export default RetellSlot;
