import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle } from 'lucide-react';

const SolutionSection = () => {
  const images = [
    { src: '/lovable-uploads/siteco-instalacion1.png', alt: 'Cajón de cobro automático SITECO instalado en comercio' },
    { src: '/lovable-uploads/siteco-producto.png', alt: 'Cajón de cobro automático SITECO - vista producto' },
    { src: '/lovable-uploads/siteco-instalacion2.png', alt: 'SITECO integrado con TPV en bar' },
  ];

  return (
    <section className="py-16 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ayudamos a las <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">PYMEs</span> en sus procesos de digitalización y automatización de procesos clave
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Si tienes manejo de efectivo, probablemente tienes descuadres de caja. Mira cómo solucionarlo:
          </p>
        </div>

        {/* Video YouTube Short */}
        <div className="max-w-md mx-auto mb-16">
          <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-[#667eea]/20 border border-white/10">
            <iframe
              src="https://www.youtube.com/embed/qOdJPMJivEM"
              title="Descuadres de caja - Solución"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Galería de fotos */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Cajón de cobro automático <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">SITECO</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-[#667eea]/10 bg-white/[0.03]">
                <img src={img.src} alt={img.alt} className="w-full h-72 object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Características técnicas */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Características <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Técnicas</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Columna izquierda */}
            <div className="space-y-6">
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">Nuevo cajón de cobro automático</h4>
                <p className="text-gray-400 mb-4">
                  Diseñado en color negro y con un formato más compacto, incorpora un <strong className="text-white">mini PC con pantalla táctil de 7"</strong> integrada en el frontal, lo que permite:
                </p>
                <ul className="space-y-2">
                  {[
                    'Operar el dispositivo de forma directa',
                    'Visualizar en tiempo real los productos adquiridos',
                    'Mostrar al cliente el importe depositado, lo pendiente por ingresar y el cambio a devolver',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#667eea] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm mt-4">*Medidas: 45cm de alto, 44cm de fondo y 57cm de ancho.*</p>
              </div>

              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-[#667eea] mb-1">Integración universal</h4>
                <p className="text-gray-300">Facilidad de integración con cualquier software TPV o ERP.</p>
              </div>

              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Lector de Billetes JCM VEGA PRO</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    'Admisión de billetes nacionales, configurable la admisión',
                    'Lector de billetes con cashbox de 300 billetes',
                    'Velocidad de validación de billetes: 2,5 segundos',
                    'Introducción de billetes de forma unitaria',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#667eea] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Reciclador de Billetes RC-TWIN</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    'Dos cassette de reciclaje de 30 + 30 billetes configurable para cualquier denominación',
                    'Velocidad de devolución de billetes: 2 segundos',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#667eea] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="space-y-6">
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Admisión de Monedas</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    'Admisión de monedas nacionales, configurable la aceptación de monedas',
                    'Aceptación óptima a granel, hasta 20 monedas mezcladas',
                    'Velocidad de validación: 4 monedas/segundo',
                    'Clasificador de alta velocidad de 3 vías',
                    'Eliminación automática de objetos extraños en admisión',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#667eea] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Reciclador de Monedas</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    'Capacidad total depende de la configuración',
                    'Hasta 3 discriminadores, devolución de monedas configurable',
                    'Velocidad de devolución hasta 18 monedas/segundo',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#667eea] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-white/[0.05] border border-white/10 rounded-xl p-4">
                  <p className="text-gray-400 text-xs font-semibold mb-2">Ejemplo de capacidad:</p>
                  <div className="grid grid-cols-2 gap-1 text-gray-300 text-xs">
                    <span>2€ → 160 Uds.</span>
                    <span>0,50€ → 230 Uds.</span>
                    <span>0,10€ → 500 Uds.</span>
                    <span>0,02€ → 170 Uds.</span>
                    <span>1€ → 320 Uds.</span>
                    <span>0,20€ → 250 Uds.</span>
                    <span>0,05€ → 200 Uds.</span>
                    <span>0,01€ → 340 Uds.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-0 rounded-full group"
            onClick={() => window.open('https://wa.me/34624377029?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20el%20caj%C3%B3n%20de%20cobro%20autom%C3%A1tico%20SITECO', '_blank')}
          >
            <Calendar className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Solicita información aquí
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
