
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      <Helmet>
        <title>RobotsConsultant Agency | IA, Automatización y Robots para Empresas en España</title>
        <meta name="description" content="Agencia especializada en IA y automatización para empresas: agentes de IA, apps personalizadas, integración Odoo, tiendas Shopify y robots móviles. Reduce costes y multiplica tu productividad." />
        <link rel="canonical" href="https://robotsconsultant.net/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "RobotsConsultant Agency",
          "url": "https://robotsconsultant.net",
          "logo": "https://robotsconsultant.net/logo.svg",
          "description": "Agencia de IA y automatización para negocios. Agentes IA, apps personalizadas, Odoo, Shopify y robots.",
          "contactPoint": { "@type": "ContactPoint", "telephone": "+34-654-942-720", "contactType": "sales", "areaServed": "ES", "availableLanguage": "Spanish" },
          "sameAs": ["https://robotsconsultant.net"]
        })}</script>
      </Helmet>
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
