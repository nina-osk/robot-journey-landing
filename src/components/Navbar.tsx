import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.svg';
import { whatsappUrl } from '@/config/contact';

/** Menú del brief, sección 2. Todas las rutas absolutas. */
type NavItem = { label: string; to: string; children?: { label: string; to: string }[] };

const NAV: NavItem[] = [
  { label: 'Inicio', to: '/' },
  {
    label: 'Odoo',
    to: '/odoo',
    children: [
      { label: 'Implantación', to: '/odoo' },
      { label: 'Migración', to: '/odoo#migracion' },
    ],
  },
  { label: 'Hostelería', to: '/odoo/hosteleria' },
  { label: 'Ecommerce', to: '/odoo/ecommerce' },
  { label: 'Kioscos', to: '/kioscos-autoservicio' },
  { label: 'Apps con IA', to: '/apps-personalizadas' },
  { label: 'Robótica', to: '/robotica' },
  { label: 'Cursos', to: '/mentoria-ia' },
];

const CTA_HREF = whatsappUrl('Hola, quiero mi diagnóstico gratuito.');

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Cerrar los menús al navegar a otra ruta */
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  /* Cerrar el desplegable al hacer clic fuera o pulsar Escape */
  useEffect(() => {
    if (!openDropdown) return;

    const onPointerDown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenDropdown(null);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [openDropdown]);

  const isActive = (to: string) => pathname === to;

  const linkClass = (to: string) =>
    `text-base font-medium transition-colors ${
      isActive(to) ? 'text-teal-dark' : 'text-pantalla/75 hover:text-teal'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-hueso/90 backdrop-blur-md shadow-sm border-b border-greige'
          : 'bg-hueso'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <Link to="/" className="flex shrink-0 items-center" aria-label="RobotsConsultant, ir a inicio">
            <img
              src={logo}
              alt="RobotsConsultant"
              className="h-10 md:h-11 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Navegación de escritorio */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Principal">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="relative" ref={openDropdown === item.label ? dropdownRef : undefined}>
                  <button
                    type="button"
                    className={`flex items-center gap-1 ${linkClass(item.to)}`}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full mt-3 min-w-[210px] rounded-card-sm border border-greige bg-white p-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block rounded-full px-4 py-2.5 text-base text-pantalla/80 transition-colors hover:bg-teal/10 hover:text-teal-dark"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.to} to={item.to} className={linkClass(item.to)}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral hidden sm:inline-flex !px-5 !py-2.5 text-base"
            >
              Diagnóstico gratis
            </a>

            <button
              type="button"
              className="xl:hidden rounded-full p-2 text-pantalla hover:bg-greige/40 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil: las 8 entradas y el CTA coral al final */}
      {mobileMenuOpen && (
        <nav
          className="xl:hidden border-t border-greige bg-hueso px-4 pb-6 pt-3 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
          aria-label="Principal (móvil)"
        >
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className={`block rounded-full px-4 py-3 ${
                    isActive(item.to) ? 'bg-teal/10 text-teal-dark' : 'text-pantalla/80 hover:bg-greige/40'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4 border-l-2 border-greige pl-3">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          className="block rounded-full px-4 py-2.5 text-base text-pantalla/70 hover:bg-greige/40"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral mt-5 w-full"
          >
            Diagnóstico gratis
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
