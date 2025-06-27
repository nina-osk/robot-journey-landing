
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
      <section className="relative py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-robotics-dark mb-6 leading-relaxed">
            💬 "No necesitas ser experto en tecnología para automatizar tu negocio. 
            Sólo necesitas la herramienta adecuada que trabaje por ti."
          </h1>
          <p className="text-lg text-gray-700 font-medium">
            Somos Especialistas en ERP Odoo, automatizaciones y soluciones robóticas colaborativas
          </p>
        </div>
      </section>
      
      {/* Main Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 z-0" />
        <div className="relative z-10 max-w-6xl w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-robotics-dark mb-6 leading-tight">
              Automatiza sin gastar una fortuna
            </h2>
            <p className="text-2xl sm:text-3xl text-gray-700 mb-8 font-medium">
              Kioscos inteligentes + CRM con IA + Odoo = Tu negocio funcionando solo, 24/7.
            </p>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Reduce errores, ahorra tiempo y ofrece una experiencia moderna a tus clientes.
            </p>
            
            <div className="flex flex-col items-center space-y-8 mb-12">
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
              
              <Button 
                asChild
                size="lg" 
                className="bg-robotics-blue hover:bg-robotics-blue/90 text-white rounded-md text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
              >
                <a href="#contacto" className="inline-flex items-center">
                  Solicita tu demo gratuita
                </a>
              </Button>
              
              <div className="flex items-center space-x-2 text-gray-500 animate-bounce">
                <ArrowDown className="w-5 h-5" />
                <span className="text-sm">Descubre más</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Hero Section - now secondary */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-20 bg-gradient-to-r from-white via-blue-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white z-0" />
        <div className="relative z-10 max-w-6xl w-full px-4">
          <div className="text-center mb-12">
            <div className="mb-12">
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
