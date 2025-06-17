
import { BriefcaseBusiness, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Cog className="h-8 w-8 text-robotics-blue" />,
    title: "Asesoramos, proveemos robots y equipamiento para robótica y automatizacion industrial.",
    description:
      "Optimizamos procesos productivos mediante soluciones de automatización robótica accesibles y escalables, diseñadas especialmente para pequeñas y medianas empresas.",
    benefits: [
      "Reducción de errores y tiempos de producción",
      "Aumento de la eficiencia operativa",
      "Integración con sistemas existentes",
    ],
  },
  {
    icon: <BriefcaseBusiness className="h-8 w-8 text-robotics-blue" />,
    title: "Visión Artificial",
    description:
      "Incorporamos sistemas de visión por computadora para el control de calidad, inspección automática, conteo, identificación y trazabilidad.",
    benefits: [
      "Detección automática de defectos y errores",
      "Mejora del control de calidad sin aumentar personal",
      "Datos en tiempo real para decisiones inteligentes",
    ],
  },
];

const AutomationVisionSection = () => (
  <section
    id="automation-vision"
    className="py-24 bg-white slide-in-section"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="inline-block bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          Tecnología para Robotica,
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-4">
          Automatización y Visión Artificial para PYMES
        </h2>
        <p className="text-lg text-gray-600">
          Impulsa la competitividad de tu empresa con soluciones inteligentes adaptadas a tus necesidades y presupuesto.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {services.map(({ icon, title, description, benefits }, i) => (
          <div
            key={title}
            className="glass-card rounded-2xl p-8 shadow-lg flex flex-col items-start animate-fade-in-up"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="mb-5">{icon}</div>
            <h3 className="text-xl font-semibold text-robotics-dark mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="mb-6 text-sm space-y-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start">
                  <span className="text-robotics-blue mr-2 mt-1">•</span>
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
            <Button
              size="sm"
              className="bg-robotics-blue text-white hover:bg-robotics-blue/90"
              asChild
            >
              <a href="#enroll">Solicitar información</a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AutomationVisionSection;
