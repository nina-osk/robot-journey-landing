import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PoliticaEntrega = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          📦 Política de Entrega de Servicios y Contenidos Digitales
        </h1>
        <p className="text-lg font-semibold text-white mb-8">RobotsAdvisors OÜ</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">1. Principios Generales</h2>
          <p className="mb-2">En RobotsAdvisors OÜ, todos nuestros servicios y productos son de naturaleza digital o consisten en la prestación de servicios profesionales. Por ello, la "entrega" se refiere al acceso, ejecución o puesta a disposición del servicio o contenido digital contratado por el Cliente.</p>
          <p>Nos comprometemos a realizar la entrega de los servicios y productos con la máxima diligencia y en los plazos y formas que se describen a continuación, de acuerdo con lo establecido en la normativa de protección de los consumidores y usuarios.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">2. Plazos y Métodos de Entrega por Tipo de Servicio</h2>
          <p className="mb-4">Dada la distinta naturaleza de nuestros servicios, la política de entrega se especifica para cada uno de ellos:</p>

          <div className="ml-4">
            <h3 className="text-lg font-semibold text-white mb-3">2.1. Asesorías por Horas</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <strong className="text-white">Método de Entrega:</strong> La asesoría se presta a través de una sesión de videoconferencia (o el medio acordado con el Cliente) en la fecha y hora previamente agendadas.
              </li>
              <li>
                <strong className="text-white">Plazo de Ejecución:</strong> La "entrega" del servicio se produce durante la realización de la sesión contratada. Se considera completada una vez finalizada la sesión en el tiempo acordado.
              </li>
              <li>
                <strong className="text-white">Confirmación:</strong> Tras la contratación, el Cliente recibirá un correo electrónico de confirmación con el enlace a la sesión y los detalles de la cita.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">2.2. Desarrollo de Agentes de IA a Medida</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <strong className="text-white">Método de Entrega:</strong> La entrega consiste en la puesta a disposición del Cliente del agente de inteligencia artificial finalizado y funcional, a través de un medio digital acordado (ej. acceso a un repositorio, envío de archivos, integración en una plataforma, etc.).
              </li>
              <li>
                <strong className="text-white">Plazo de Ejecución:</strong> Los plazos de desarrollo y entrega específicos para cada proyecto se detallarán en la propuesta de servicio personalizada que el Cliente deberá aceptar antes de iniciar el trabajo. Dicha propuesta formará parte integrante del contrato.
              </li>
              <li>
                <strong className="text-white">Confirmación:</strong> La entrega se considerará completada con el envío de la comunicación formal por parte de RobotsAdvisors OÜ que notifique la finalización del desarrollo y facilite el acceso al agente de IA, de acuerdo con lo pactado en la propuesta.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">2.3. Curso Pregrabado sobre Desarrollo de Agentes de IA</h3>
            <ul className="space-y-2">
              <li>
                <strong className="text-white">Método de Entrega:</strong> El acceso al curso se entregará de forma inmediata tras la confirmación del pago.
              </li>
              <li>
                <strong className="text-white">Plazo de Ejecución:</strong> La entrega se materializa mediante el envío de un correo electrónico automático a la dirección proporcionada por el Cliente, que contendrá las credenciales de acceso (usuario y contraseña) o un enlace directo para acceder a la plataforma donde se aloja el contenido del curso.
              </li>
              <li>
                <strong className="text-white">Confirmación:</strong> Se considerará que el producto ha sido entregado en el momento en que el correo electrónico con la información de acceso es enviado satisfactoriamente. Es responsabilidad del Cliente asegurarse de que la dirección de correo electrónico proporcionada es correcta y de revisar su bandeja de entrada (incluida la de correo no deseado).
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">3. Confirmación de la Entrega y Ejecución</h2>
          <p>Para todos los servicios, RobotsAdvisors OÜ facilitará al Cliente una confirmación de la contratación y de los detalles de la entrega en un soporte duradero (correo electrónico), cumpliendo con la obligación de información precontractual y contractual.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">4. Incidencias en la Entrega</h2>
          <p className="mb-2">Si el Cliente experimenta cualquier problema para acceder a un servicio o contenido digital (por ejemplo, no recibe el correo de acceso al curso o tiene problemas con el enlace de la asesoría), deberá comunicarlo a la mayor brevedad posible a través de la dirección de correo electrónico: <a href="mailto:oscarina.hernandezgarcia@gmail.com" className="text-[#667eea] hover:underline">oscarina.hernandezgarcia@gmail.com</a>.</p>
          <p>RobotsAdvisors OÜ se compromete a investigar la incidencia y ofrecer una solución diligente para garantizar que el Cliente reciba el servicio o producto contratado en las condiciones acordadas.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">5. Fundamento Jurídico</h2>
          <p className="mb-2">Esta política se establece en cumplimiento de las obligaciones de información y ejecución contractual dispuestas en la normativa de protección de los consumidores, en particular:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong className="text-white">Artículo 60</strong> del Texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios, que exige informar de forma clara sobre los procedimientos de entrega y la fecha de ejecución del servicio antes de la contratación.</li>
            <li><strong className="text-white">Artículo 97</strong> del Texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios, que reitera estos deberes de información para los contratos celebrados a distancia.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaEntrega;
