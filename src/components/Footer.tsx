
import { Facebook, Linkedin, Mail, Phone, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE_DISPLAY, WHATSAPP_URL } from '@/config/contact';

/** Arquitectura de enlaces del footer — brief sección 2. Todas las rutas absolutas. */
const COLUMNS: { title: string; links: { label: string; to: string; external?: boolean }[] }[] = [
  {
    title: 'Servicios',
    links: [
      { label: 'Implantación Odoo', to: '/odoo' },
      { label: 'Kioscos de autoservicio', to: '/kioscos-autoservicio' },
      { label: 'Cajón de cobro automático', to: '/cajon-cobro-automatico' },
      { label: 'Apps con IA', to: '/apps-personalizadas' },
      { label: 'Robótica', to: '/robotica' },
    ],
  },
  {
    title: 'Sectores',
    links: [
      { label: 'Hostelería', to: '/odoo/hosteleria' },
      { label: 'Ecommerce', to: '/odoo/ecommerce' },
      { label: 'Transformación digital', to: '/transformacion-digital' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Cursos y mentoría', to: '/mentoria-ia' },
      { label: 'Canal de YouTube', to: 'https://www.youtube.com/@robotsconsultant', external: true },
      { label: 'Tienda', to: 'https://robotsconsultant.net/tienda', external: true },
      { label: 'Sobre mí', to: '/sobre-mi' },
      { label: 'Contacto', to: '/contacto' },
    ],
  },
];

const LEGAL = [
  { label: 'Política de Privacidad', to: '/politica-privacidad' },
  { label: 'Términos de Servicio', to: '/terminos-servicio' },
  { label: 'Política de Cookies', to: '/politica-cookies' },
  { label: 'Política de Compras', to: '/politica-compras' },
  { label: 'Política de Entrega', to: '/politica-entrega' },
  { label: 'Reembolsos y Cancelaciones', to: '/politica-reembolso' },
];

const linkClass = 'text-greige/80 hover:text-cian-glow transition-colors';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Marca + contacto */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-extrabold text-hueso mb-3">RobotsConsultant</h3>
            <p className="text-greige/80 text-base mb-6 max-w-sm">
              Partner oficial de Odoo. Automatización e IA para pymes de hostelería y ecommerce.
            </p>

            <ul className="space-y-3 mb-6 text-base">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`flex items-center ${linkClass}`}>
                  <Phone className="h-5 w-5 text-cian-glow shrink-0 mr-3" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@robotsconsultant.net" className={`flex items-center ${linkClass}`}>
                  <Mail className="h-5 w-5 text-cian-glow shrink-0 mr-3" />
                  <span>info@robotsconsultant.net</span>
                </a>
              </li>
            </ul>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578024748586"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={linkClass}
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.youtube.com/@robotsconsultant"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={linkClass}
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.instagram.com/robotsqueen/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={linkClass}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/robotsconsultant"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={linkClass}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Columnas de navegación */}
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="eyebrow mb-4">{column.title}</h3>
              <ul className="space-y-2.5 text-base">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.to} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.to} className={linkClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 rounded-card border border-white/10 bg-white/[0.04] p-7">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <h3 className="font-display text-xl font-bold text-hueso mb-1">Mantente actualizado</h3>
              <p className="text-greige/80 text-base">
                Novedades de Odoo, automatización e IA para tu negocio. Sin spam.
              </p>
            </div>
            <form className="flex w-full lg:w-auto lg:min-w-[380px]">
              <label htmlFor="footer-email" className="sr-only">
                Tu correo electrónico
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full rounded-l-full border border-white/15 bg-white/[0.06] px-5 py-3 text-hueso placeholder-greige/50 focus:outline-none focus:ring-2 focus:ring-cian-glow"
              />
              <button
                type="submit"
                className="rounded-r-full bg-coral px-6 py-3 font-semibold text-pantalla transition-all hover:brightness-105"
              >
                Unirse
              </button>
            </form>
          </div>
        </div>

        {/* Legal + datos fiscales */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="text-greige/60 text-sm">
              <p>© {currentYear} RobotsConsultant. Todos los derechos reservados.</p>
              <p className="mt-1">RobotsAdvisors OÜ · Registrikood: 14522788</p>
              <p>Harju maakond, Tallinn, Lasnamäe linnaosa, Lõõtsa tn 5, 11415, Estonia</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {LEGAL.map((item) => (
                <Link key={item.to} to={item.to} className="text-greige/60 hover:text-cian-glow text-sm transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
