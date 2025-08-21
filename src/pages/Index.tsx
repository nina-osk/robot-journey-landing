
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PacksSection from '@/components/PacksSection';
import OnlineStoreSection from '@/components/OnlineStoreSection';
import NewServicesSection from '@/components/NewServicesSection';
import RobotsServicesSection from '@/components/RobotsServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import GDPRConsent from '@/components/GDPRConsent';
import OnlineStorePopup from '@/components/OnlineStorePopup';

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
      <HeroSection />
      <PacksSection />
      <OnlineStoreSection />
      <NewServicesSection />
      <RobotsServicesSection />
      <ContactSection />
      <Footer />
      <GDPRConsent />
      <OnlineStorePopup />
    </div>
  );
};

export default Index;
