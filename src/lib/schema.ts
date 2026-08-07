import { SITE_URL, PHONE_TEL, EMAIL } from '@/config/contact';

/**
 * Constructores de JSON-LD reutilizables (schema.org).
 * Centralizados aquí para que el NAP y la URL salgan siempre de config/contact.
 */

/** Redes sociales oficiales — mismas que el Organization de la home. */
export const SAME_AS = [
  'https://www.youtube.com/@robotsconsultant',
  'https://www.instagram.com/robotsqueen/',
  'https://www.facebook.com/profile.php?id=61578024748586',
];

/**
 * Negocio local con área de servicio. La entidad legal está en Estonia
 * (RobotsAdvisors OÜ), así que no declaramos dirección postal: usamos
 * areaServed para las búsquedas locales de Madrid ("tpv restaurante Madrid").
 * Un Perfil de Empresa de Google con ubicación en Madrid refuerza esto.
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'RobotsConsultant',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/og-image.png`,
  telephone: PHONE_TEL,
  email: EMAIL,
  priceRange: '€€',
  description:
    'Automatización e IA para pymes de hostelería y comercio. Partner oficial de Odoo: TPV, kioscos de autoservicio, control de stock y ecommerce.',
  areaServed: [
    { '@type': 'City', name: 'Madrid' },
    { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' },
    { '@type': 'Country', name: 'España' },
  ],
  sameAs: SAME_AS,
};

/**
 * BreadcrumbList a partir de una lista de tramos {name, path}.
 * El primer tramo suele ser {name: 'Inicio', path: '/'}.
 */
export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path === '/' ? '/' : item.path.replace(/\/$/, '')}`,
  })),
});
