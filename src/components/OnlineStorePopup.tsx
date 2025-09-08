
import { useState, useEffect } from 'react';
import { X, ShoppingCart, Wrench, GraduationCap, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OnlineStorePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('onlineStorePopupShown');
    
    if (!popupShown) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('onlineStorePopupShown', 'true');
  };

  const visitStore = () => {
    window.open('https://robotsconsultant.systeme.io/paginaderegistro-aee9eab3-4709fe38', '_blank');
    closePopup();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 animate-fade-in">
      <div className={`fixed right-0 top-1/2 transform -translate-y-1/2 h-1/2 w-80 bg-white shadow-2xl transition-transform duration-500 ease-in-out rounded-l-lg ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="text-center flex-1 flex flex-col justify-center">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/c1e36c3f-139a-41f6-a37a-0cf435e2c3a9.png" 
                alt="Robots Consultant Technology" 
                className="h-8 mx-auto mb-2"
              />
              <h2 className="text-lg font-bold text-robotics-dark mb-1">
                ¡Crea tu Página Web GRATIS!
              </h2>
              <p className="text-sm text-gray-600">
                Aprende a hacer tu página web profesional con Odoo
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 mb-4">
              <div className="text-center">
                <ShoppingCart className="h-6 w-6 text-primary mx-auto mb-1" />
                <span className="text-xs text-gray-600 block">E-commerce Profesional</span>
              </div>
              <div className="text-center">
                <Cog className="h-6 w-6 text-primary mx-auto mb-1" />
                <span className="text-xs text-gray-600 block">CRM Integrado</span>
              </div>
              <div className="text-center">
                <GraduationCap className="h-6 w-6 text-primary mx-auto mb-1" />
                <span className="text-xs text-gray-600 block">Guía Paso a Paso</span>
              </div>
            </div>

            <div className="space-y-2">
              <Button 
                onClick={visitStore}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 text-sm"
              >
                Descargar Guía GRATIS
              </Button>
              <button
                onClick={closePopup}
                className="w-full text-gray-500 hover:text-gray-700 text-xs transition-colors"
              >
                Continuar navegando
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineStorePopup;
