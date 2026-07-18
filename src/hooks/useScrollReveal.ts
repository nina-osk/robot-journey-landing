import { useEffect } from 'react';

/**
 * Animación de aparición al hacer scroll para las páginas rediseñadas.
 *
 * Observa los elementos `[data-reveal]` y todas las `.card-roberta` de la
 * página: los que entran en el viewport aparecen con un fade + subida, y las
 * tarjetas hermanas se escalonan entre sí. Todo se aplica con estilos inline
 * desde JS, así el HTML prerenderizado nunca depende de una clase CSS para
 * ser visible y los lectores sin JavaScript ven el contenido completo.
 *
 * Respeta `prefers-reduced-motion`: si el usuario pide menos movimiento, no
 * se anima nada.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal], .card-roberta')
    );
    if (!targets.length) return;

    /* Retardo escalonado entre hermanos que comparten padre */
    const siblingIndex = new Map<HTMLElement, number>();
    const counters = new Map<Element, number>();
    for (const el of targets) {
      const parent = el.parentElement ?? document.body;
      const index = counters.get(parent) ?? 0;
      counters.set(parent, index + 1);
      siblingIndex.set(el, index);
    }

    const reveal = (el: HTMLElement) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    for (const el of targets) {
      const rect = el.getBoundingClientRect();
      /* Lo que ya está a la vista no se oculta: cero parpadeos */
      if (rect.top < window.innerHeight && rect.bottom > 0) continue;

      const delay = Math.min(siblingIndex.get(el) ?? 0, 5) * 90;
      el.style.opacity = '0';
      el.style.transform = 'translateY(26px)';
      el.style.transition = `opacity 0.65s ease-out ${delay}ms, transform 0.65s ease-out ${delay}ms`;
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);
}
