
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MobileRobots from "./pages/MobileRobots";
import KioscosPago from "./pages/KioscosPago";
import PackRestaurante from "./pages/PackRestaurante";
import PackHotel from "./pages/PackHotel";
import PackEcommerce from "./pages/PackEcommerce";
import AboutMe from "./pages/AboutMe";
import OdooServices from "./pages/OdooServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/robots-moviles" element={<MobileRobots />} />
          <Route path="/kioscos-pago" element={<KioscosPago />} />
          <Route path="/pack-restaurante" element={<PackRestaurante />} />
          <Route path="/pack-hotel" element={<PackHotel />} />
          <Route path="/pack-ecommerce" element={<PackEcommerce />} />
          <Route path="/servicios-odoo" element={<OdooServices />} />
          <Route path="/sobre-mi" element={<AboutMe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
