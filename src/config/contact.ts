/**
 * Fuente única de verdad para los datos de contacto.
 * Brief sección 4, fix 4: un solo teléfono en header, footer y schema.
 * Cualquier cambio de número se hace aquí y en ningún otro sitio.
 */

/** Número en formato E.164 sin '+', tal y como lo espera wa.me */
export const PHONE_E164 = '34654942720';

/** Formato de lectura para mostrar en pantalla */
export const PHONE_DISPLAY = '+34 654 94 27 20';

/** Formato para href="tel:" y para schema.org */
export const PHONE_TEL = '+34654942720';

export const EMAIL = 'info@robotsconsultant.net';

export const SITE_URL = 'https://robotsconsultant.net';

/** Mensaje por defecto que se precarga al abrir WhatsApp */
const DEFAULT_WHATSAPP_MESSAGE = 'Hola, quiero mi diagnóstico gratuito.';

/**
 * Construye el enlace de WhatsApp. Pasa un mensaje propio para que el CTA
 * de cada página llegue ya contextualizado.
 */
export const whatsappUrl = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;

/** Enlace de WhatsApp genérico, para cuando no hace falta contexto */
export const WHATSAPP_URL = whatsappUrl();
