import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const SolutionSection = () => {
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
        <div className="max-w-md mx-auto mb-12">
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

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-0 rounded-full group"
            onClick={() => document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' })}
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
