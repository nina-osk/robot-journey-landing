import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/config/contact';

/** Rutas donde el botón no aporta (páginas legales) */
const HIDDEN_PREFIXES = ['/politica', '/terminos'];

/**
 * Botón de WhatsApp fijo en la parte inferior, solo en móvil — brief
 * sección 2 («Móvil»). Aparece tras un pequeño scroll para no pisar el CTA
 * del hero.
 */
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
      className={`fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:hidden transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-16 opacity-0'
      }`}
    >
      <a
        href={whatsappUrl('Hola, quiero mi diagnóstico gratuito.')}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-coral w-full max-w-sm shadow-xl shadow-pantalla/25"
      >
        <MessageCircle className="h-5 w-5" />
        Escríbenos por WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppSticky;
