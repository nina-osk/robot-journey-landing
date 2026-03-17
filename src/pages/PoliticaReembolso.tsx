import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PoliticaReembolso = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          💰 Política de Reembolso y Cancelación
        </h1>
        <p className="text-lg font-semibold text-white mb-8">RobotsAdvisors OÜ</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">1. Principios Generales</h2>
          <p className="mb-2">Esta política regula las condiciones de cancelación de los servicios contratados y el reembolso de las cantidades abonadas, en cumplimiento con la normativa de protección de los consumidores y usuarios, especialmente en lo relativo a contratos celebrados a distancia.</p>
          <p>El Cliente tiene derecho a ser informado de manera clara y comprensible sobre su derecho a desistir del contrato y las condiciones para su ejercicio, tal y como establece el <strong className="text-white">Artículo 97. Información precontractual de los contratos a distancia</strong> del Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios (TRLGDCU).</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">2. Derecho de Desistimiento</h2>
          <p className="mb-4">El Cliente, en su condición de consumidor, dispone de un plazo de <strong className="text-white">14 días naturales</strong> desde la fecha de celebración del contrato para desistir del mismo sin necesidad de justificación y sin penalización alguna.</p>
          
          <h3 className="text-lg font-semibold text-white mb-2">Cómo ejercer el derecho:</h3>
          <p className="mb-4">Para ejercer este derecho, el Cliente deberá notificar su decisión de desistir del contrato a RobotsAdvisors a través de una declaración inequívoca, enviada a la dirección de correo electrónico: <a href="mailto:oscarina.hernandezgarcia@gmail.com" className="text-[#667eea] hover:underline">oscarina.hernandezgarcia@gmail.com</a>.</p>
          
          <h3 className="text-lg font-semibold text-white mb-2">Consecuencias del desistimiento:</h3>
          <p>Una vez ejercido el derecho, RobotsAdvisors reembolsará al Cliente todos los pagos recibidos, sin demoras indebidas y, en todo caso, antes de que hayan transcurrido <strong className="text-white">14 días naturales</strong> desde la fecha en que haya sido informado de la decisión de desistimiento. El reembolso se efectuará utilizando el mismo medio de pago empleado por el Cliente para la transacción inicial.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">3. Excepciones y Limitaciones al Derecho de Desistimiento</h2>
          <p className="mb-4">Dada la naturaleza de los servicios y contenidos digitales ofrecidos, el derecho de desistimiento está sujeto a las excepciones contempladas en el <strong className="text-white">Artículo 103. Excepciones al derecho de desistimiento</strong> del TRLGDCU. A continuación, se detalla su aplicación a cada servicio:</p>

          <div className="ml-4">
            <h3 className="text-lg font-semibold text-white mb-3">a) Asesorías por Horas y Desarrollo de Agentes de IA a Medida (Prestación de Servicios)</h3>
            <ul className="list-disc ml-6 space-y-2 mb-6">
              <li>El derecho de desistimiento <strong className="text-white">no será aplicable</strong> una vez que el servicio de asesoría o desarrollo haya sido completamente ejecutado.</li>
              <li>Para que esta excepción aplique, la ejecución del servicio deberá haber comenzado con el <strong className="text-white">consentimiento previo y expreso</strong> del Cliente, quien además deberá haber reconocido ser consciente de que, una vez completado el servicio, habrá perdido su derecho de desistimiento.</li>
              <li><strong className="text-white">Ejecución parcial:</strong> Si el Cliente ejerce su derecho de desistimiento después de haber solicitado el inicio del servicio pero antes de su completa ejecución, deberá abonar a RobotsAdvisors un importe proporcional a la parte del servicio ya prestada, tal como se regula en el <strong className="text-white">Artículo 108. Obligaciones y responsabilidad del consumidor y usuario en caso de desistimiento.</strong></li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">b) Curso Pregrabado (Suministro de Contenido Digital)</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>El derecho de desistimiento <strong className="text-white">no será aplicable</strong> al contrato de suministro del curso pregrabado, ya que se trata de contenido digital no prestado en un soporte material.</li>
              <li>Para que esta excepción aplique, la ejecución (es decir, el acceso del Cliente al contenido del curso) deberá haber comenzado con el <strong className="text-white">consentimiento previo y expreso</strong> del Cliente, quien además deberá haber reconocido ser consciente de que, con dicho acceso, pierde su derecho de desistimiento.</li>
              <li className="mt-4 p-3 bg-white/[0.05] border border-[#667eea]/30 rounded">
                <strong className="text-white">IMPORTANTE:</strong> Durante el proceso de contratación de estos servicios, se solicitará al Cliente que otorgue este consentimiento expreso marcando una casilla específica, informándole claramente de la pérdida de su derecho de desistimiento una vez iniciada la ejecución del servicio o el acceso al contenido digital.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">4. Proceso de Reembolso</h2>
          <ul className="space-y-3">
            <li>
              <strong className="text-white">Plazo:</strong> Conforme al <strong className="text-white">Artículo 107. Obligaciones y derechos del empresario en caso de desistimiento</strong>, RobotsAdvisors procederá al reembolso de las cantidades correspondientes en un plazo máximo de <strong className="text-white">14 días naturales</strong> desde la comunicación del desistimiento.
            </li>
            <li>
              <strong className="text-white">Medio de pago:</strong> El reembolso se realizará a través del mismo medio de pago utilizado en la compra inicial (tarjeta bancaria).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">5. Cancelaciones fuera del Plazo de Desistimiento</h2>
          <p className="mb-2">Una vez transcurrido el plazo de <strong className="text-white">14 días naturales</strong> para el desistimiento, o una vez que el Cliente haya perdido dicho derecho por las causas expuestas en el apartado 3, <strong className="text-white">no se realizarán reembolsos</strong>.</p>
          <p>Las condiciones específicas para la cancelación de servicios de desarrollo a medida que se extiendan en el tiempo se detallarán en la propuesta personalizada correspondiente.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">6. Fundamento Jurídico</h2>
          <p className="mb-2">Esta política se establece en cumplimiento de la normativa de protección de los consumidores y usuarios en materia de contratos a distancia:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios (TRLGDCU)</li>
            <li>Directiva 2011/83/UE del Parlamento Europeo y del Consejo</li>
            <li>Normativa aplicable en Estonia como país de residencia de RobotsAdvisors OÜ</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">7. Contacto para Consultas y Reclamaciones</h2>
          <p className="mb-2">Si tienes alguna pregunta sobre esta política o deseas presentar una reclamación, puedes contactarnos en:</p>
          <ul className="space-y-1 ml-4">
            <li><strong className="text-white">Correo electrónico:</strong> <a href="mailto:info@robotsconsultant.net" className="text-[#667eea] hover:underline">info@robotsconsultant.net</a></li>
            <li><strong className="text-white">Entidad:</strong> RobotsAdvisors OÜ</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaReembolso;
