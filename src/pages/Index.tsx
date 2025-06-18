
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
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-20 bg-gradient-to-r from-white via-blue-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white z-0" />
        <div className="relative z-10 max-w-6xl w-full px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-robotics-dark mb-6 leading-tight">
              Venta Robots Móviles y Colaborativos
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Especialistas en soluciones robóticas colaborativas <br />
              venta robots y cobots, asesoramiento y soporte técnico para tu empresa.
            </p>
          </div>
          
          <div className="mb-12">
            <ImageCarousel />
          </div>
          
          <div className="text-center">
            <a
              href="#testimonials"
              className="inline-flex items-center gap-3 bg-robotics-blue hover:bg-robotics-blue/90 text-white text-lg font-semibold px-8 py-4 rounded-md shadow transition-colors"
            >
              Ver robots disponibles
            </a>
          </div>
        </div>
      </section>
      <SocialRobotsSection />
      <ServicesSection />
      <AutomationVisionSection />
      <FeatureSection />
      <RobotPartsSection />
      <ContactSection />
      <Footer />
      <GDPRConsent />
      <OnlineStorePopup />
    </div>
  );
};

export default Index;
