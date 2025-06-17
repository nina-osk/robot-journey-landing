
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Shield, Cookie, Users, FileText } from 'lucide-react';

const GDPRConsent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [acceptedAll, setAcceptedAll] = useState(false);
  const [individualConsents, setIndividualConsents] = useState({
    necessary: true, // Siempre necesarias
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Verificar si ya se dio el consentimiento
    const consent = localStorage.getItem('gdpr-consent');
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('gdpr-consent', JSON.stringify(consent));
    setIsOpen(false);
  };

  const handleAcceptSelected = () => {
    const consent = {
      ...individualConsents,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('gdpr-consent', JSON.stringify(consent));
    setIsOpen(false);
  };

  const handleRejectNonEssential = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('gdpr-consent', JSON.stringify(consent));
    setIsOpen(false);
  };

  const handleIndividualChange = (type: keyof typeof individualConsents, checked: boolean) => {
    if (type === 'necessary') return; // Las necesarias no se pueden desactivar
    setIndividualConsents(prev => ({
      ...prev,
      [type]: checked
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}} modal>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-robotics-blue" />
            <DialogTitle className="text-xl font-bold text-robotics-dark">
              Configuración de Privacidad
            </DialogTitle>
          </div>
          <DialogDescription className="text-left text-gray-600">
            Respetamos tu privacidad y cumplimos con el Reglamento General de Protección de Datos (RGPD). 
            Selecciona qué tipos de cookies y procesamiento de datos permites.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Cookies Necesarias */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-robotics-dark">Cookies Necesarias</h3>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox checked={true} disabled className="mt-1" />
              <div className="text-sm">
                <p className="font-medium">Siempre activas</p>
                <p className="text-gray-600">
                  Estas cookies son esenciales para el funcionamiento básico del sitio web y no se pueden desactivar.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies de Análisis */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-robotics-dark">Cookies de Análisis</h3>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox 
                checked={individualConsents.analytics}
                onCheckedChange={(checked) => handleIndividualChange('analytics', checked as boolean)}
                className="mt-1" 
              />
              <div className="text-sm">
                <p className="font-medium">Análisis y estadísticas</p>
                <p className="text-gray-600">
                  Nos ayudan a entender cómo interactúas con nuestro sitio para mejorarlo.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies de Marketing */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold text-robotics-dark">Cookies de Marketing</h3>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox 
                checked={individualConsents.marketing}
                onCheckedChange={(checked) => handleIndividualChange('marketing', checked as boolean)}
                className="mt-1" 
              />
              <div className="text-sm">
                <p className="font-medium">Publicidad personalizada</p>
                <p className="text-gray-600">
                  Para mostrarte contenido y ofertas relevantes basadas en tus intereses.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies Funcionales */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold text-robotics-dark">Cookies Funcionales</h3>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox 
                checked={individualConsents.functional}
                onCheckedChange={(checked) => handleIndividualChange('functional', checked as boolean)}
                className="mt-1" 
              />
              <div className="text-sm">
                <p className="font-medium">Funcionalidades mejoradas</p>
                <p className="text-gray-600">
                  Permiten funciones adicionales como chat en vivo, formularios mejorados, etc.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
            <p>
              <strong>Tus derechos:</strong> Puedes ejercer tus derechos de acceso, rectificación, supresión, 
              portabilidad y oposición contactándonos. Puedes cambiar tus preferencias en cualquier momento.
            </p>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button 
            variant="outline" 
            onClick={handleRejectNonEssential}
            className="w-full sm:w-auto order-3 sm:order-1"
          >
            Solo Esenciales
          </Button>
          <Button 
            variant="outline" 
            onClick={handleAcceptSelected}
            className="w-full sm:w-auto order-2"
          >
            Guardar Selección
          </Button>
          <Button 
            onClick={handleAcceptAll}
            className="w-full sm:w-auto bg-robotics-blue hover:bg-robotics-blue/90 order-1 sm:order-3"
          >
            Aceptar Todo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GDPRConsent;
