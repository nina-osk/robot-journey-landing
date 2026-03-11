
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-[#667eea]" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Política de Privacidad
            </h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
              <p className="text-gray-300 mb-4">Última actualización: Febrero 2026</p>
              <p className="text-gray-300">
                En RobotsConsultant, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política describe cómo recopilamos, usamos y protegemos tu información.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Responsable del Tratamiento</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <ul className="space-y-2 text-gray-300">
                  <li><strong className="text-white">Empresa:</strong> RobotsAdvisors OÜ</li>
                  <li><strong className="text-white">Registrikood:</strong> 14522788</li>
                  <li><strong className="text-white">Dirección:</strong> Harju maakond, Tallinn, Lasnamäe linnaosa, Lõõtsa tn 5, 11415, Estonia</li>
                  <li><strong className="text-white">Correo electrónico:</strong> info@robotsconsultant.net</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Datos que Recopilamos</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#667eea] mb-2">Datos proporcionados por el usuario:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Nombre y apellidos</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Número de teléfono</li>
                    <li>Información de la empresa</li>
                    <li>Datos de facturación y pago</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#667eea] mb-2">Datos recopilados automáticamente:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Dirección IP</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Páginas visitadas y tiempo de navegación</li>
                    <li>Cookies y tecnologías similares</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Finalidad del Tratamiento</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Prestación de los servicios contratados</li>
                  <li>Gestión de la relación comercial</li>
                  <li>Envío de comunicaciones comerciales (con consentimiento)</li>
                  <li>Cumplimiento de obligaciones legales</li>
                  <li>Mejora de nuestros servicios y experiencia de usuario</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Base Legal</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Ejecución del contrato:</strong> para la prestación de servicios solicitados</li>
                  <li><strong className="text-white">Consentimiento:</strong> para el envío de comunicaciones comerciales</li>
                  <li><strong className="text-white">Interés legítimo:</strong> para la mejora de nuestros servicios</li>
                  <li><strong className="text-white">Obligación legal:</strong> para el cumplimiento de normativas fiscales y mercantiles</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Destinatarios de los Datos</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300">
                  No compartiremos tus datos con terceros salvo obligación legal o cuando sea necesario para la prestación del servicio (proveedores de hosting, pasarelas de pago, etc.). En estos casos, exigimos garantías adecuadas de protección de datos.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Transferencias Internacionales</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300">
                  Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo. En estos casos, garantizamos que existen las salvaguardas adecuadas conforme al RGPD.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">7. Conservación de los Datos</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300">
                  Conservaremos tus datos personales durante el tiempo necesario para cumplir con la finalidad para la que fueron recopilados, y posteriormente durante los plazos legalmente establecidos.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">8. Tus Derechos</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 mb-3">Como titular de los datos, tienes derecho a:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Acceso:</strong> conocer qué datos tenemos sobre ti</li>
                  <li><strong className="text-white">Rectificación:</strong> corregir datos inexactos</li>
                  <li><strong className="text-white">Supresión:</strong> solicitar la eliminación de tus datos</li>
                  <li><strong className="text-white">Portabilidad:</strong> recibir tus datos en formato estructurado</li>
                  <li><strong className="text-white">Oposición:</strong> oponerte al tratamiento de tus datos</li>
                  <li><strong className="text-white">Limitación:</strong> solicitar la limitación del tratamiento</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Para ejercer estos derechos, contacta con nosotros en: <a href="mailto:legal@companio.email" className="text-[#667eea] hover:underline">legal@companio.email</a>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">9. Seguridad</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300">
                  Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">10. Modificaciones</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300">
                  Nos reservamos el derecho de modificar esta política de privacidad. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;
