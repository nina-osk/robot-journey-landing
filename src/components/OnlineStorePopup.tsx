import { useState, useEffect } from 'react';
import { X, ShoppingCart, Cog, GraduationCap } from 'lucide-react';
import Roberta from '@/components/Roberta';

/**
 * Lead magnet «Crea tu página web gratis».
 *
 * Coreografía de popups: este NUNCA aparece mientras el aviso de cookies
 * está pendiente. Espera a que el consentimiento quede resuelto (evento
 * `gdpr-consent-saved` o valor ya guardado) y, a partir de ahí, deja al
 * usuario navegar POPUP_DELAY_MS antes de asomarse. Una vez cerrado, no
 * vuelve en toda la sesión.
 */
const POPUP_DELAY_MS = 15000;

const OnlineStorePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('onlineStorePopupShown')) return;

    let timer: number | undefined;
    const armTimer = () => {
      if (timer !== undefined) return;
      timer = window.setTimeout(() => setIsVisible(true), POPUP_DELAY_MS);
    };

    if (localStorage.getItem('gdpr-consent')) {
      armTimer();
    } else {
      window.addEventListener('gdpr-consent-saved', armTimer);
    }

    return () => {
      window.removeEventListener('gdpr-consent-saved', armTimer);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('onlineStorePopupShown', 'true');
  };

  const visitStore = () => {
    window.open('https://robotsconsultant.systeme.io/paginaderegistro-aee9eab3-4709fe38', '_blank');
    closePopup();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-pantalla/50 animate-fade-in" onClick={closePopup}>
      <div
        role="dialog"
        aria-label="Crea tu página web gratis"
        onClick={(e) => e.stopPropagation()}
        className="fixed right-0 top-1/2 w-[21rem] max-w-[92vw] -translate-y-1/2 rounded-l-card border border-greige border-r-0 bg-hueso shadow-2xl animate-fade-in"
      >
        <div className="relative p-7">
          <button
            onClick={closePopup}
            aria-label="Cerrar"
            className="absolute right-4 top-4 rounded-full p-1.5 text-pantalla/50 transition-colors hover:bg-greige/40 hover:text-pantalla"
          >
            <X size={20} />
          </button>

          <div className="mb-4 flex justify-center">
            <Roberta pose="cara-feliz" width={90} />
          </div>

          <p className="eyebrow text-center mb-2">Guía gratuita</p>
          <h2 className="font-display text-2xl font-bold text-pantalla text-center mb-2">
            Crea tu página web gratis
          </h2>
          <p className="text-center text-base text-pantalla/70 mb-6">
            Aprende a hacer tu página web profesional con Odoo, paso a paso.
          </p>

          <ul className="space-y-3 mb-6">
            {[
              { icon: ShoppingCart, label: 'E-commerce profesional' },
              { icon: Cog, label: 'CRM integrado' },
              { icon: GraduationCap, label: 'Guía paso a paso' },
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal/12 text-teal">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="text-base text-pantalla/80">{item.label}</span>
              </li>
            ))}
          </ul>

          <button onClick={visitStore} className="btn-coral w-full !py-3 mb-2">
            Descargar la guía gratis
          </button>
          <button
            onClick={closePopup}
            className="w-full text-center text-sm text-pantalla/50 transition-colors hover:text-pantalla"
          >
            Seguir navegando
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineStorePopup;
