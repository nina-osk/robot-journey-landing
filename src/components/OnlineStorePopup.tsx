
import { useState, useEffect } from 'react';
import { X, ShoppingCart, Wrench, GraduationCap } from 'lucide-react';
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
    // Replace with your actual store URL
    window.open('https://tu-tienda-online.com', '_blank');
    closePopup();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl animate-scale-in">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <div className="mb-6">
            <ShoppingCart className="h-16 w-16 text-robotics-blue mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-robotics-dark mb-2">
              ¡Visita Nuestra Tienda Online!
            </h2>
            <p className="text-gray-600">
              Encuentra todo lo que necesitas para robótica
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
            <div className="text-center">
              <Wrench className="h-8 w-8 text-robotics-blue mx-auto mb-2" />
              <span className="text-gray-600">Piezas y Repuestos</span>
            </div>
            <div className="text-center">
              <ShoppingCart className="h-8 w-8 text-robotics-blue mx-auto mb-2" />
              <span className="text-gray-600">Robots Industriales</span>
            </div>
            <div className="text-center">
              <GraduationCap className="h-8 w-8 text-robotics-blue mx-auto mb-2" />
              <span className="text-gray-600">Robots Educativos</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={visitStore}
              className="w-full bg-robotics-blue hover:bg-robotics-blue/90 text-white font-semibold py-3"
            >
              Ir a la Tienda Online
            </Button>
            <button
              onClick={closePopup}
              className="w-full text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              Continuar navegando
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineStorePopup;
