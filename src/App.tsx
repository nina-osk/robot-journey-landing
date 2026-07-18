
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import KioscosPago from "./pages/KioscosPago";
import PackRestaurante from "./pages/PackRestaurante";
import PackHotel from "./pages/PackHotel";
import PackEcommerce from "./pages/PackEcommerce";
import AboutMe from "./pages/AboutMe";
import AppsPersonalizadas from "./pages/AppsPersonalizadas";
import OdooServices from "./pages/OdooServices";
import OdooHosteleria from "./pages/OdooHosteleria";
import OdooEcommerce from "./pages/OdooEcommerce";
import CajonCobroAutomatico from "./pages/CajonCobroAutomatico";
import Robotica from "./pages/Robotica";
import TransformacionDigital from "./pages/TransformacionDigital";
import AgentesIA from "./pages/AgentesIA";
import AgentesIARestaurantes from "./pages/AgentesIARestaurantes";
import ShopifyServices from "./pages/ShopifyServices";
import MentoriaIA from "./pages/MentoriaIA";
import Contacto from "./pages/Contacto";
import PoliticaCompras from "./pages/PoliticaCompras";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaCookies from "./pages/PoliticaCookies";
import TerminosServicio from "./pages/TerminosServicio";
import PoliticaEntrega from "./pages/PoliticaEntrega";
import PoliticaReembolso from "./pages/PoliticaReembolso";
import NotFound from "./pages/NotFound";
import WhatsAppSticky from "./components/WhatsAppSticky";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WhatsAppSticky />
        <Routes>
          <Route path="/" element={<Index />} />

          {/* --- Arquitectura de URLs del rediseño (brief sección 3) --- */}
          <Route path="/odoo" element={<OdooServices />} />
          <Route path="/odoo/hosteleria" element={<OdooHosteleria />} />
          <Route path="/odoo/ecommerce" element={<OdooEcommerce />} />
          <Route path="/odoo/integracion-shopify" element={<ShopifyServices />} />
          <Route path="/kioscos-autoservicio" element={<KioscosPago />} />
          <Route path="/cajon-cobro-automatico" element={<CajonCobroAutomatico />} />
          <Route path="/robotica" element={<Robotica />} />

          {/*
            Redirecciones 301 servidas por public/.htaccess. Estas Navigate
            cubren la navegación interna del SPA, donde Apache no interviene.
          */}
          <Route path="/servicios-odoo" element={<Navigate to="/odoo" replace />} />
          <Route path="/shopify" element={<Navigate to="/odoo/integracion-shopify" replace />} />
          <Route path="/kioscos-pago" element={<Navigate to="/kioscos-autoservicio" replace />} />
          <Route path="/robots-moviles" element={<Navigate to="/robotica" replace />} />

          <Route path="/pack-restaurante" element={<PackRestaurante />} />
          <Route path="/pack-hotel" element={<PackHotel />} />
          <Route path="/pack-ecommerce" element={<PackEcommerce />} />
          <Route path="/transformacion-digital" element={<TransformacionDigital />} />
          <Route path="/agentes-ia" element={<AgentesIA />} />
          <Route path="/agentes-ia/restaurantes" element={<AgentesIARestaurantes />} />
          <Route path="/mentoria-ia" element={<MentoriaIA />} />
          <Route path="/sobre-mi" element={<AboutMe />} />
          <Route path="/apps-personalizadas" element={<AppsPersonalizadas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/politica-compras" element={<PoliticaCompras />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="/terminos-servicio" element={<TerminosServicio />} />
          <Route path="/politica-entrega" element={<PoliticaEntrega />} />
          <Route path="/politica-reembolso" element={<PoliticaReembolso />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
