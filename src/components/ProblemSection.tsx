import { AlertTriangle } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Te sientes abrumado por la tecnología?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Pierdes ventas, tiempo y oportunidades por no tener tu negocio automatizado.
              <br />
              <strong>No estás solo. Miles de pymes enfrentan lo mismo.</strong>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-12 w-12 text-red-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Problemas comunes</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">Gestión manual que consume horas diarias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">Clientes perdidos por falta de atención inmediata</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">Errores en pedidos y facturación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">Inventario descontrolado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">Competencia con mejor tecnología</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative">
              <img 
                src="/apps-presentation.jpg" 
                alt="Empresario frustrado con papeles y tecnología"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;