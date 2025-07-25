
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0d87c931-53e1-470f-ad83-99c83e63768c.png" 
              alt="Robots Consultant Technology" 
              className="h-16 md:h-20"
            />
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <a
              href="/" 
              className="text-sm font-medium text-gray-700 hover:text-robotics-blue transition-colors"
            >
              Inicio
            </a>
            <a 
              href="./robots-moviles" 
              className="text-sm font-medium text-gray-700 hover:text-robotics-blue transition-colors"
            >
              Robots Móviles
            </a>
            <a
              href="./kioscos-pago" 
              className="text-sm font-medium text-gray-700 hover:text-robotics-blue transition-colors"
            >
              Kioscos de pago
            </a>
            <a
              href="./servicios-odoo" 
              className="text-sm font-medium text-gray-700 hover:text-robotics-blue transition-colors"
            >
              Servicios Odoo
            </a>
            <a
              href="./sobre-mi" 
              className="text-sm font-medium text-gray-700 hover:text-robotics-blue transition-colors"
            >
              Sobre Mí
            </a>
            <a 
              href="https://robotsconsultant.net/tienda" 
              className="text-sm font-medium text-gray-700 hover:text-robotics-blue transition-colors"
            >
              Tienda
            </a>

            <Button 
              asChild 
              variant="default" 
              className="bg-robotics-blue hover:bg-robotics-blue/90 text-white rounded-md"
            >
              <a href="/#contacto">Contactar Ahora</a>
            </Button>
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-robotics-blue"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-card animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-robotics-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="./robots-moviles" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-robotics-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Robots Móviles
            </a>
            <a
              href="./kioscos-pago" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-robotics-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kioscos de pago
            </a>
            <a
              href="./servicios-odoo" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-robotics-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios Odoo
            </a>
            <a
              href="./sobre-mi" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-robotics-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Mí
            </a>
            <a
              href="https://robotsconsultant.net/tienda" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-robotics-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tienda
            </a>
            <Button 
              asChild 
              variant="default" 
              className="w-full bg-robotics-blue hover:bg-robotics-blue/90 text-white rounded-md mt-3"
            >
              <a href="/#contacto">Contactar Ahora</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
