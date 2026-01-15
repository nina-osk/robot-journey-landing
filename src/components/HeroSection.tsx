import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Phone, Mail } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = document.getElementById('hero-section');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a]"
    >
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-[500px] h-[500px] bg-[#667eea]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/5 w-[500px] h-[500px] bg-[#764ba2]/20 rounded-full blur-3xl" />
      </div>
      
      <div className={`relative z-10 max-w-4xl mx-auto px-4 text-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            🏠 <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Digitaliza tu negocio sin complicaciones
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light mb-8">
            sin perder tiempo y sin ser experto en tecnología
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Soluciones listas para usar que automatizan tu atención, ventas y gestión desde el primer día. 
            Transformamos tu empresa a través de la tecnología, automatizaciones, ERP, kioscos inteligentes 
            y soluciones robóticas que impulsan tu crecimiento.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-0"
            onClick={() => window.location.href = '/kioscos-pago'}
          >
            Ver Soluciones
          </Button>
          <div className="flex flex-col gap-2 items-center">
            <Button asChild size="sm" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
              <a 
                href="https://wa.me/34654942720" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>+34 654 94 27 20</span>
              </a>
            </Button>
            <Button asChild size="sm" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
              <a 
                href="mailto:info@robotsconsultant.net"
                className="flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>info@robotsconsultant.net</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
