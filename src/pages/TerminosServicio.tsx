
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TerminosServicio = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          Términos y Condiciones Generales de Contratación de RobotsAdvisors
        </h1>
        <p className="text-sm text-gray-400 mb-8">Fecha de última actualización: 5 de marzo de 2026</p>
        <p className="mb-8">Bienvenido/a a RobotsAdvisors. Te rogamos que leas detenidamente los siguientes Términos y Condiciones (en adelante, "T&C") antes de contratar cualquiera de nuestros servicios. La contratación de los mismos implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este documento.</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">1. Identificación de las Partes</h2>
          <p className="mb-2"><strong className="text-white">Prestador del Servicio:</strong> La entidad que ofrece y presta los servicios a través de este sitio web es RobotAdvisors OÜ, sociedad constituida y registrada en Estonia, con código de registro 17425904, inscrita en el Tartu Maakohtu registriosakonna.</p>
          <p className="mb-2"><strong className="text-white">Domicilio social:</strong> Harju maakond, Tallinn, Lasnamäe linnaosa, Lõõtsa tn 5, 11415.</p>
          <p className="mb-2"><strong className="text-white">Correo electrónico de contacto:</strong> <a href="mailto:info@robotsconsultant.net" className="text-[#667eea] hover:underline">info@robotsconsultant.net</a>.</p>
          <p className="mb-2"><strong className="text-white">Contacto legal en Estonia:</strong> RobotsAdvisors OÜ, con código de registro 14522788. (En adelante, "RobotsAdvisors").</p>
          <p className="mb-2"><strong className="text-white">Cliente:</strong> La persona física o jurídica que contrata los servicios ofrecidos por RobotsAdvisors a través del sitio web. El Cliente declara ser mayor de edad y tener la capacidad legal necesaria para contratar los servicios. (En adelante, el "Cliente").</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">2. Objeto y Aceptación</h2>
          <p className="mb-2">El objeto de estos T&C es regular la relación contractual de compraventa de servicios entre RobotsAdvisors y el Cliente.</p>
          <p>La aceptación de estos T&C es un requisito indispensable para la adquisición de cualquier producto o servicio. Se entenderá que el Cliente acepta estos T&C al marcar la casilla correspondiente durante el proceso de contratación, manifestando así su consentimiento expreso.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">3. Proceso de Contratación</h2>
          <p className="mb-2">El proceso para contratar los servicios de RobotsAdvisors es el siguiente:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong className="text-white">Selección del servicio:</strong> El Cliente seleccionará el servicio deseado (asesoría, desarrollo a medida o curso) en el sitio web.</li>
            <li><strong className="text-white">Resumen del pedido:</strong> Se mostrará un resumen con el servicio seleccionado y el precio final.</li>
            <li><strong className="text-white">Datos de pago:</strong> El Cliente introducirá los datos de su tarjeta bancaria en la pasarela de pago segura.</li>
            <li><strong className="text-white">Aceptación de T&C:</strong> El Cliente deberá marcar la casilla de aceptación de los presentes T&C y de la Política de Privacidad.</li>
            <li><strong className="text-white">Confirmación:</strong> Una vez realizado el pago, el Cliente recibirá un correo electrónico de confirmación con los detalles de su compra y el acceso al servicio contratado.</li>
          </ol>
          <p className="mt-2">Este proceso se rige, entre otras, por la normativa sobre contratación a distancia, como el Artículo 98 del Texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">4. Descripción de los Servicios</h2>
          <p className="mb-2">RobotsAdvisors ofrece los siguientes servicios:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong className="text-white">Asesorías por horas:</strong> Sesiones de consultoría especializada en el desarrollo y aplicación de agentes de inteligencia artificial. La duración y el contenido se acuerdan previamente con el Cliente.</li>
            <li><strong className="text-white">Desarrollo de agentes de IA a medida:</strong> Creación de soluciones de inteligencia artificial personalizadas según los requisitos y necesidades específicas del Cliente. El alcance, plazos y entregables se definirán en una propuesta específica para cada proyecto.</li>
            <li><strong className="text-white">Curso pregrabado sobre desarrollo de agentes de IA para ecommerce:</strong> Acceso a material formativo en formato vídeo y documental, alojado en una plataforma online, para el aprendizaje autónomo del Cliente.</li>
          </ul>
          <p className="mt-2">Las características esenciales de cada servicio se detallan en la página de venta correspondiente, en cumplimiento del Artículo 20 del Texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">5. Precios y Forma de Pago</h2>
          <p className="mb-2"><strong className="text-white">Precios:</strong> Todos los precios mostrados en el sitio web están expresados en Euros (€) e incluyen el Impuesto sobre el Valor Añadido (IVA) aplicable.</p>
          <p><strong className="text-white">Forma de Pago:</strong> El único medio de pago aceptado es la tarjeta bancaria (crédito o débito) a través de la pasarela de pago segura proporcionada en el sitio web. El pago se realiza en el momento de la contratación.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">6. Derecho de Desistimiento</h2>
          <p className="mb-2">De acuerdo con la legislación vigente, el Cliente tiene derecho a desistir del contrato en un plazo de 14 días naturales sin necesidad de justificación.</p>
          <h3 className="text-lg font-semibold text-white mb-2 mt-4">Excepciones al Derecho de Desistimiento:</h3>
          <p className="mb-2">Conforme al Artículo 103 del Texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios, el derecho de desistimiento no será aplicable en los siguientes casos:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong className="text-white">Servicios de Asesoría y Desarrollo a medida:</strong> Una vez que el servicio haya sido completamente ejecutado. Para iniciar la prestación del servicio antes de que finalice el plazo de desistimiento, se requerirá el consentimiento expreso del Cliente, quien será informado de que, una vez completada la ejecución, habrá perdido su derecho de desistimiento.</li>
            <li><strong className="text-white">Curso pregrabado (Contenido digital):</strong> El derecho de desistimiento no será aplicable al suministro de contenido digital que no se preste en un soporte material cuando la ejecución haya comenzado. Para ello, se requerirá el consentimiento expreso previo del Cliente, con el conocimiento por su parte de que, en consecuencia, pierde su derecho de desistimiento.</li>
          </ul>
          <p className="mt-2">Para ejercer el derecho de desistimiento en los casos aplicables, el Cliente deberá notificar su decisión a RobotsAdvisors a través del correo electrónico de contacto, dentro del plazo indicado.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">7. Propiedad Intelectual</h2>
          <p className="mb-2">Todos los contenidos, materiales, metodologías y desarrollos proporcionados por RobotsAdvisors, incluyendo el curso pregrabado y los agentes de IA desarrollados (salvo acuerdo en contrario en la propuesta específica), son propiedad exclusiva de RobotsAdvisors y están protegidos por las leyes de propiedad intelectual.</p>
          <p>El Cliente adquiere una licencia de uso personal e intransferible para los materiales del curso. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin la autorización expresa de RobotsAdvisors.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">8. Obligaciones de las Partes</h2>
          <h3 className="text-lg font-semibold text-white mb-2">Obligaciones de RobotsAdvisors:</h3>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>Prestar los servicios con la máxima diligencia y profesionalidad.</li>
            <li>Proporcionar al Cliente la información precontractual necesaria de forma clara y comprensible, tal como exige el Artículo 60 del Texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios.</li>
            <li>Garantizar la confidencialidad de la información proporcionada por el Cliente.</li>
          </ul>
          <h3 className="text-lg font-semibold text-white mb-2">Obligaciones del Cliente:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Abonar el precio de los servicios en el momento de la contratación.</li>
            <li>Proporcionar información veraz y completa para la correcta prestación del servicio.</li>
            <li>Utilizar los servicios y materiales de acuerdo con la ley y los presentes T&C.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">9. Protección de Datos Personales</h2>
          <p className="mb-2">RobotsAdvisors se compromete a cumplir con la normativa vigente en materia de protección de datos personales, en particular el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018.</p>
          <p>Los datos personales del Cliente serán tratados con la finalidad de gestionar la relación contractual. Para más información, el Cliente puede consultar nuestra <a href="/politica-privacidad" className="text-[#667eea] hover:underline">Política de Privacidad</a>, que forma parte integrante de estos T&C.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">10. Ley Aplicable y Jurisdicción Competente</h2>
          <p className="mb-2">La relación entre RobotsAdvisors OÜ y el Cliente se regirá por la legislación de Estonia. No obstante, dicha elección de ley no privará al Cliente, en su condición de consumidor, de la protección que le confieran las disposiciones imperativas de la legislación del país en el que tenga su residencia habitual, de conformidad con lo establecido en el Reglamento (CE) n.º 593/2008 del Parlamento Europeo y del Consejo, de 17 de junio de 2008, sobre la ley aplicable a las obligaciones contractuales (Roma I).</p>
          <p className="mb-2">Para la resolución de cualquier controversia que pudiera surgir en relación con la interpretación o ejecución de los presentes Términos y Condiciones, las partes se someten a la jurisdicción de los Juzgados y Tribunales de Tallin (Estonia).</p>
          <p>Sin embargo, de acuerdo con el Reglamento (UE) n.º 1215/2012 del Parlamento Europeo y del Consejo, de 12 de diciembre de 2012, si el Cliente tiene la condición de consumidor, podrá optar por presentar su demanda ante los tribunales de Estonia o ante los tribunales del Estado miembro de la Unión Europea en el que tenga su domicilio.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TerminosServicio;
