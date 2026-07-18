import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@/config/contact';

/**
 * Fuente única de SEO por página — brief sección 4, fix 2.
 *
 * Por qué existe: index.html traía un canonical y un bloque Open Graph fijos
 * apuntando a la home. Como las páginas solo sobrescribían el <title> vía
 * Helmet, TODAS las URLs se compartían en redes con la tarjeta de la home y
 * emitían un canonical duplicado. index.html conserva ahora solo lo invariante
 * (site_name, locale, twitter:card) y cada página declara lo suyo aquí.
 */

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SeoProps {
  title: string;
  description: string;
  /** Ruta absoluta empezando por '/', p. ej. '/odoo/hosteleria' */
  path: string;
  /** URL absoluta o ruta '/...'. Por defecto, la imagen genérica del sitio. */
  image?: string;
  type?: 'website' | 'article';
  /** true para páginas que no deben indexarse (gracias, tests, etc.) */
  noindex?: boolean;
  /** Bloques JSON-LD adicionales (Service, FAQPage, Product…) */
  schemas?: Record<string, unknown>[];
  children?: React.ReactNode;
}

const Seo = ({
  title,
  description,
  path,
  image,
  type = 'website',
  noindex = false,
  schemas = [],
  children,
}: SeoProps) => {
  const url = `${SITE_URL}${path === '/' ? '/' : path.replace(/\/$/, '')}`;
  const ogImage = !image
    ? DEFAULT_OG_IMAGE
    : image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      {children}
    </Helmet>
  );
};

export default Seo;
