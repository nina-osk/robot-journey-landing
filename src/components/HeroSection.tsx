import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero-section"
      className="relative min-h-screen flex items-center bg-[#0a0a0a] pt-24 md:pt-32 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#667eea]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#764ba2]/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className={`flex-1 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
              Si tu negocio depende de ti para funcionar,{' '}
              <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                no es una empresa.
              </span>{' '}
              Es un autoempleo.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed">
              Especialistas en automatización ERP. 
              Transforma tu caos operativo en una estructura escalable y recupera tu libertad.
            </p>
            <Button 
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-0 rounded-full group"
              onClick={() => navigate('/transformacion-digital')}
            >
              Agenda tu sesión estratégica
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right visual - Dashboard mockup */}
          <div className={`flex-1 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#667eea]/20 bg-gradient-to-br from-white/[0.05] to-white/[0.02]">
              {/* Dashboard UI mockup */}
              <div className="absolute inset-0 p-6">
                {/* Top bar */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <div className="flex-1 h-6 bg-white/5 rounded-md ml-4" />
                </div>
                
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {['Ventas', 'Clientes', 'Inventario'].map((label, i) => (
                    <div key={i} className="bg-white/[0.04] border border-white/10 rounded-xl p-4">
                      <p className="text-[10px] text-gray-500 mb-1">{label}</p>
                      <p className="text-lg font-bold text-white">
                        {i === 0 ? '€24.5K' : i === 1 ? '1,248' : '99.2%'}
                      </p>
                      <div className={`text-[10px] mt-1 ${i === 2 ? 'text-green-400' : 'text-[#667eea]'}`}>
                        {i === 0 ? '+12.5%' : i === 1 ? '+8.3%' : 'Óptimo'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-gray-400 font-medium">Rendimiento mensual</p>
                    <div className="flex gap-2">
                      <div className="w-8 h-4 bg-[#667eea]/30 rounded" />
                      <div className="w-8 h-4 bg-[#764ba2]/30 rounded" />
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t" 
                        style={{ 
                          height: `${h}%`, 
                          background: `linear-gradient(to top, #667eea, #764ba2)`,
                          opacity: 0.6 + (i * 0.03)
                        }} 
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
                    <p className="text-[10px] text-gray-500 mb-2">Automatizaciones activas</p>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-[8px] text-white font-bold">
                          ✓
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
                    <p className="text-[10px] text-gray-500 mb-2">Estado del sistema</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400 font-medium">Operativo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
