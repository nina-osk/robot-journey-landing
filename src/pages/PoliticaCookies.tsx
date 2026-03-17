
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cookie } from 'lucide-react';

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Cookie className="h-8 w-8 text-[#667eea]" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Política de Cookies
            </h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
              <p className="text-gray-300 mb-4">Última actualización: Febrero 2026</p>
              <p className="text-gray-300">
                Esta Política de Cookies explica qué son las cookies, qué tipos de cookies utilizamos en RobotsConsultant.net y cómo puedes gestionarlas.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. ¿Qué son las Cookies?</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y para proporcionar información a los propietarios del sitio.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Tipos de Cookies que Utilizamos</h2>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">🟢 Cookies Necesarias</h3>
                  <p className="text-gray-300 mb-2">Son esenciales para el funcionamiento del sitio web. Sin ellas, el sitio no podría funcionar correctamente.</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Gestión de sesión</li>
                    <li>Preferencias de cookies (consentimiento GDPR)</li>
                    <li>Seguridad del sitio</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">Duración: Sesión / 1 año</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">🔵 Cookies de Análisis</h3>
                  <p className="text-gray-300 mb-2">Nos permiten entender cómo los visitantes interactúan con nuestro sitio web, recopilando información de forma anónima.</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Google Analytics</li>
                    <li>Estadísticas de visitas y navegación</li>
                    <li>Páginas más visitadas</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">Duración: Hasta 2 años</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">🟣 Cookies de Marketing</h3>
                  <p className="text-gray-300 mb-2">Se utilizan para rastrear a los visitantes en los sitios web con el fin de mostrar anuncios relevantes.</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Publicidad personalizada</li>
                    <li>Remarketing</li>
                    <li>Redes sociales</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">Duración: Hasta 2 años</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">🟠 Cookies Funcionales</h3>
                  <p className="text-gray-300 mb-2">Permiten funcionalidades mejoradas y personalización, como chat en vivo o contenido personalizado.</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Preferencias de idioma</li>
                    <li>Chat en vivo</li>
                    <li>Contenido personalizado</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">Duración: Hasta 1 año</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Gestión de Cookies</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                <p className="text-gray-300">
                  Puedes gestionar tus preferencias de cookies en cualquier momento:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Panel de consentimiento:</strong> Al acceder a nuestro sitio web, se muestra un panel donde puedes aceptar o rechazar las cookies no esenciales.</li>
                  <li><strong className="text-white">Configuración del navegador:</strong> Puedes configurar tu navegador para bloquear o eliminar cookies.</li>
                </ul>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Configuración por navegador:</h3>
                  <ul className="space-y-1 text-gray-300">
                    <li>• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#667eea] hover:underline">Google Chrome</a></li>
                    <li>• <a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-[#667eea] hover:underline">Mozilla Firefox</a></li>
                    <li>• <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#667eea] hover:underline">Safari</a></li>
                    <li>• <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#667eea] hover:underline">Microsoft Edge</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Cookies de Terceros</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 mb-3">Algunos terceros pueden instalar cookies en tu dispositivo cuando visitas nuestro sitio:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Google Analytics:</strong> para análisis de tráfico web</li>
                  <li><strong className="text-white">YouTube:</strong> para la reproducción de videos integrados</li>
                  <li><strong className="text-white">Redes Sociales:</strong> botones de compartir de Facebook, Instagram, LinkedIn</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Base Legal</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300">
                  El uso de cookies necesarias se basa en nuestro interés legítimo de garantizar el correcto funcionamiento del sitio. Para el resto de cookies, solicitamos tu consentimiento explícito conforme al Reglamento General de Protección de Datos (RGPD) y la Directiva ePrivacy.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Contacto</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300">
                  Si tienes preguntas sobre nuestra política de cookies, contacta con nosotros en:{' '}
                  <a href="mailto:info@robotsconsultant.net" className="text-[#667eea] hover:underline">info@robotsconsultant.net</a>
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

export default PoliticaCookies;
