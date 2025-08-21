
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-robotics-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">RobotsConsultant</h3>
            <p className="text-gray-400 mb-6">
              Empoderando a profesionales con habilidades avanzadas de programación robótica industrial desde 2018.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578024748586" className="text-gray-400 hover:text-robotics-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-robotics-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-robotics-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/robotsqueen/" className="text-gray-400 hover:text-robotics-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-robotics-blue transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-robotics-blue transition-colors">Robot Moviles</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-robotics-blue transition-colors">Kiosco de Autoservicio</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-robotics-blue transition-colors">Servicios</a>  
              </li>
              <li>
                <a href="https://robotsconsultant.net/tienda" className="text-gray-400 hover:text-robotics-blue transition-colors">Tienda</a> 
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-robotics-blue shrink-0 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  Avenida Cerro del Aguila nº2<br />
                  Madrid, España, 27803
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-robotics-blue shrink-0 mr-3" />
                <span className="text-gray-400">+34 654 94 27 20</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-robotics-blue shrink-0 mr-3" />
                <span className="text-gray-400">info@robotsconsultant.net</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mantente Actualizado</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete a nuestro boletín para recibir las últimas actualizaciones de cursos y noticias de la industria.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-4 py-2 bg-gray-800 text-gray-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-robotics-blue w-full"
              />
              <button
                type="submit"
                className="bg-robotics-blue hover:bg-robotics-blue/90 text-white px-4 py-2 rounded-r-md"
              >
                Unirse
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} RobotcsConsultant. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Política de Privacidad</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Términos de Servicio</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Política de Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
