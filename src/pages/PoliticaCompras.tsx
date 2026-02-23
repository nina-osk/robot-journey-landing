
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PoliticaCompras = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          📄 Política de Compras, Cancelaciones y Reembolsos
        </h1>
        <p className="text-lg font-semibold text-white mb-8">RobotsConsultant.net</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">1. Identificación del Vendedor</h2>
          <p className="mb-2">Este sitio web es operado por:</p>
          <ul className="space-y-1 ml-4">
            <li><strong className="text-white">RKontaktisik on CompanioEstonia OÜ</strong></li>
            <li>Registrikood: 14522788</li>
            <li>Dirección: Harju maakond, Tallinn, Lasnamäe linnaosa, Lõõtsa tn 5, 11415, Estonia</li>
            <li>Correo electrónico: <a href="mailto:legal@companio.email" className="text-[#667eea] hover:underline">legal@companio.email</a></li>
          </ul>
          <p className="mt-2">En adelante, "la Empresa".</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">2. Servicios Ofrecidos</h2>
          <p className="mb-2">RobotsConsultant ofrece:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Desarrollo personalizado de agentes de Inteligencia Artificial</li>
            <li>Desarrollo e implementación de tiendas eCommerce</li>
            <li>Automatizaciones empresariales</li>
            <li>Servicios tecnológicos a medida</li>
          </ul>
          <p className="mt-2">Todos los servicios son personalizados según los requisitos del cliente.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">3. Proceso de Compra</h2>
          <ol className="list-decimal ml-6 space-y-1">
            <li>El cliente solicita el servicio.</li>
            <li>Se acuerda alcance, precio y condiciones.</li>
            <li>El cliente realiza el pago total o parcial.</li>
            <li>La Empresa inicia la ejecución del servicio.</li>
          </ol>
          <p className="mt-2">El contrato se considera formalizado tras la confirmación del pago.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">4. Naturaleza del Servicio</h2>
          <p className="mb-2">Los servicios ofrecidos son:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Digitales</li>
            <li>Personalizados</li>
            <li>Ejecutados bajo encargo específico</li>
          </ul>
          <p className="mt-2">Por su naturaleza, pueden quedar excluidos del derecho de desistimiento conforme a la normativa europea cuando su ejecución haya comenzado con el consentimiento del cliente.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">5. Derecho de Desistimiento (Consumidores UE)</h2>
          <p className="mb-2">Si el cliente es consumidor en la Unión Europea, dispone de <strong className="text-white">14 días naturales</strong> desde la contratación para desistir del contrato, salvo que:</p>
          <ul className="list-disc ml-6 space-y-1 mb-2">
            <li>Haya solicitado expresamente el inicio inmediato del servicio, y</li>
            <li>Haya reconocido que pierde su derecho de desistimiento una vez iniciado el servicio.</li>
          </ul>
          <p className="mb-2">En caso de que el servicio ya haya comenzado, el cliente deberá abonar la parte proporcional efectivamente ejecutada hasta el momento de la cancelación.</p>
          <p className="mb-2">Para ejercer el desistimiento deberá enviar un email a: <a href="mailto:legal@companio.email" className="text-[#667eea] hover:underline">legal@companio.email</a></p>
          <p className="mb-1">Incluyendo:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Nombre completo</li>
            <li>Número de pedido o contrato</li>
            <li>Fecha de contratación</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">6. Cancelaciones</h2>
          <h3 className="text-lg font-semibold text-white mb-2">6.1 Antes del inicio del servicio</h3>
          <p className="mb-4">Se podrá cancelar con reembolso completo.</p>
          <h3 className="text-lg font-semibold text-white mb-2">6.2 Después del inicio del servicio</h3>
          <p className="mb-2">Se aplicarán las siguientes condiciones:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Si el proyecto está en fase inicial: se reembolsará el importe descontando el trabajo ya realizado.</li>
            <li>Si el proyecto está avanzado o finalizado: no habrá reembolso.</li>
          </ul>
          <p className="mt-2">Los servicios totalmente ejecutados no son reembolsables.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">7. Servicios Personalizados</h2>
          <p>De acuerdo con el artículo 16(c) de la Directiva 2011/83/UE, el derecho de desistimiento no aplica a bienes o servicios claramente personalizados.</p>
          <p className="mt-2">Dado que los desarrollos de IA y eCommerce se realizan bajo especificaciones individuales del cliente, pueden considerarse excluidos del derecho de desistimiento una vez iniciados.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">8. Reembolsos</h2>
          <p className="mb-2">Si procede un reembolso:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Se procesará en un plazo máximo de <strong className="text-white">14 días naturales</strong>.</li>
            <li>Se realizará mediante el mismo método de pago utilizado.</li>
            <li>El tiempo de reflejo dependerá de la entidad bancaria del cliente (5–10 días hábiles adicionales).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">9. Reclamaciones</h2>
          <p className="mb-2">El cliente puede presentar reclamaciones enviando un correo a: <a href="mailto:legal@companio.email" className="text-[#667eea] hover:underline">legal@companio.email</a></p>
          <p>La Empresa responderá en un plazo máximo de <strong className="text-white">7 días hábiles</strong>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">10. Prevención de Fraude</h2>
          <p className="mb-2">La Empresa podrá suspender o cancelar pedidos en caso de:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Sospecha de fraude</li>
            <li>Uso no autorizado de métodos de pago</li>
            <li>Información falsa</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">11. Legislación Aplicable</h2>
          <p>Este contrato se rige por la legislación de Estonia y la normativa de protección al consumidor de la Unión Europea.</p>
          <p className="mt-2">En caso de disputa, serán competentes los tribunales de Estonia, salvo disposición legal imperativa en contrario.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaCompras;
