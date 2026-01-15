import { AlertTriangle } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Te sientes <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">abrumado</span> por la tecnología?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Pierdes ventas, tiempo y oportunidades por no tener tu negocio automatizado.
              <br />
              <strong className="text-white">No estás solo. Miles de pymes enfrentan lo mismo.</strong>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                  <AlertTriangle className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Problemas comunes</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#764ba2] mr-3 text-xl">•</span>
                  <span className="text-gray-400">Gestión manual que consume horas diarias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#764ba2] mr-3 text-xl">•</span>
                  <span className="text-gray-400">Clientes perdidos por falta de atención inmediata</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#764ba2] mr-3 text-xl">•</span>
                  <span className="text-gray-400">Errores en pedidos y facturación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#764ba2] mr-3 text-xl">•</span>
                  <span className="text-gray-400">Inventario descontrolado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#764ba2] mr-3 text-xl">•</span>
                  <span className="text-gray-400">Competencia con mejor tecnología</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/apps-presentation.png" 
                alt="Empresario frustrado con papeles y tecnología"
                className="rounded-2xl w-full h-80 object-cover border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
