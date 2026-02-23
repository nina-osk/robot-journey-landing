
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#050505] text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">RobotsConsultant</h3>
            <p className="text-gray-400 mb-6">
              Empoderando a profesionales con habilidades avanzadas de programación robótica industrial desde 2018.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578024748586" className="text-gray-400 hover:text-[#667eea] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#667eea] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#667eea] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/robotsqueen/" className="text-gray-400 hover:text-[#667eea] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <circle cx="17.5" cy="6.5" r="1.5"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#667eea] transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-[#667eea] transition-colors">Robot Moviles</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#667eea] transition-colors">Kiosco de Autoservicio</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#667eea] transition-colors">Servicios</a>  
              </li>
              <li>
                <a href="https://robotsconsultant.net/tienda" className="text-gray-400 hover:text-[#667eea] transition-colors">Tienda</a> 
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#667eea] shrink-0 mr-3" />
                <span className="text-gray-400">+34 654 94 27 20</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#667eea] shrink-0 mr-3" />
                <span className="text-gray-400">info@robotsconsultant.net</span>
              </li>
              <li className="flex items-center">
                <a href="https://www.instagram.com/robotsqueen/" className="flex items-center text-gray-400 hover:text-[#667eea] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#667eea] shrink-0 mr-3">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <circle cx="17.5" cy="6.5" r="1.5"></circle>
                  </svg>
                  <span>@robotsqueen</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Mantente Actualizado</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete a nuestro boletín para recibir las últimas actualizaciones de cursos y noticias de la industria.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-4 py-2 bg-white/[0.05] border border-white/10 text-gray-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#667eea] w-full placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white px-4 py-2 rounded-r-md transition-all"
              >
                Unirse
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>© {currentYear} RobotsConsultant. Todos los derechos reservados.</p>
              <p className="mt-1">RKontaktisik on CompanioEstonia OÜ · Registrikood: 14522788</p>
              <p>Harju maakond, Tallinn, Lasnamäe linnaosa, Lõõtsa tn 5, 11415, Estonia</p>
              <p>info@robotsconsultant.net</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/politica-privacidad" className="text-gray-500 hover:text-gray-400 text-sm">Política de Privacidad</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Términos de Servicio</a>
              <a href="/politica-cookies" className="text-gray-500 hover:text-gray-400 text-sm">Política de Cookies</a>
              <a href="/politica-compras" className="text-gray-500 hover:text-gray-400 text-sm">Política de Compras</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
