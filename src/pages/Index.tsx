
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import RobotPartsSection from '@/components/CourseSection';
import FeatureSection from '@/components/FeatureSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AutomationVisionSection from "@/components/AutomationVisionSection";
import SocialRobotsSection from '@/components/SocialRobotsSection';
import GDPRConsent from '@/components/GDPRConsent';
import OnlineStorePopup from '@/components/OnlineStorePopup';
import ImageCarousel from '@/components/ImageCarousel';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.slide-in-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      {/* Introduction Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-relaxed">
                <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                  💬 "No necesitas ser experto en tecnología para automatizar tu negocio."
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-4">
                Sólo necesitas la herramienta adecuada que trabaje por ti.
              </p>
              <p className="text-lg sm:text-xl text-robotics-blue font-bold mb-4">
                RobotsConsultant: La única empresa que garantiza tu transformación digital mientras construye un futuro más inclusivo. No vendemos tecnología, creamos ecosistemas de éxito sostenible.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-robotics-dark font-semibold mb-6">
                Somos Especialistas en ERP Odoo, automatizaciones y soluciones robóticas colaborativas
              </p>
              
              <div className="flex items-center justify-center space-x-12 opacity-70">
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/bfe6bd59-2f34-4a21-8391-eec584496997.png" 
                    alt="Odoo ERP" 
                    className="h-12 mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-600 font-medium">ERP Odoo</p>
                </div>
                
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/5a99c305-6368-4347-a88f-7234f99136be.png" 
                    alt="n8n Automation" 
                    className="h-12 mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-600 font-medium">Automatización n8n</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 z-0" />
        <div className="relative z-10 max-w-6xl w-full px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-robotics-dark mb-6 leading-tight">
              Automatiza sin gastar una fortuna
            </h2>
            <p className="text-2xl sm:text-3xl text-gray-700 mb-6 font-medium">
              Kioscos inteligentes + CRM con IA + Odoo = Tu negocio funcionando solo, 24/7.
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Reduce errores, ahorra tiempo y ofrece una experiencia moderna a tus clientes.
            </p>
            
            <div className="flex flex-col items-center space-y-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Sin ataduras (código abierto)</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Integra ventas, stock y CRM en un solo sistema</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Ideal para retail, clínicas, restaurantes y más</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-gray-600 hover:bg-gray-700 text-white rounded-md text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                >
                  <a href="/kioscos-pago" className="inline-flex items-center">
                    Más información de los kioscos
                  </a>
                </Button>
                
                <Button 
                  asChild
                  size="lg" 
                  className="bg-robotics-blue hover:bg-robotics-blue/90 text-white rounded-md text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                >
                  <a href="#contacto" className="inline-flex items-center">
                    Solicita tu demo gratuita
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-500 animate-bounce">
                <ArrowDown className="w-5 h-5" />
                <span className="text-sm">Descubre más</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Hero Section - now secondary */}
      <section className="relative flex flex-col items-center justify-center py-8 bg-gradient-to-r from-white via-blue-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white z-0" />
        <div className="relative z-10 max-w-6xl w-full px-4">
          <div className="text-center">
            <div className="mb-6">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <AutomationVisionSection />
      <RobotPartsSection />
      <SocialRobotsSection />
      <ContactSection />
      <Footer />
      <GDPRConsent />
      <OnlineStorePopup />
    </div>
  );
};

export default Index;
