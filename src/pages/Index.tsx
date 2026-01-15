
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import SmartStoreSection from '@/components/SmartStoreSection';
import NewServicesSection from '@/components/NewServicesSection';
import RobotsServicesSection from '@/components/RobotsServicesSection';
import RoboticProgrammingSection from '@/components/RoboticProgrammingSection';
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
      <ProblemSection />
      <SolutionSection />
      <SmartStoreSection />
      <NewServicesSection />
      <RobotsServicesSection />
      <RoboticProgrammingSection />
      <ContactSection />
      <Footer />
      <GDPRConsent />
      <OnlineStorePopup />
    </div>
  );
};

export default Index;
