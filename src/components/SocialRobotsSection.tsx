
import { MessageSquare, Bot, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const robotServices = [
  {
    icon: <Bot className="h-8 w-8 text-robotics-blue" />,
    title: "Asistentes de Eventos e Entretenimiento",
    description: "Robots que ofrecen información, entretenimiento y asistencia a los asistentes.",
    description2: "Robots conversacionales que interactúan con los invitados, responden preguntas y guían durante el evento.",
    features: ["Interacción natural mediante IA", "Multilingüe", "Personalizable según el evento"],
  },
  {
    icon: <Users className="h-8 w-8 text-robotics-blue" />,
    title: "Robots de vigilancia y Seguridad",
    description: "Robots que patrullan el área del evento, asegurando la seguridad y el control de acceso.",
    features: ["Monitoreo en tiempo real", "Detección de intrusos", "Alertas automáticas"]
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-robotics-blue" />,
    title: "Recepción Automática",
    description: "Robots recepcionistas que dan la bienvenida y registran a los invitados de forma eficiente.",
    features: ["Registro de invitados", "Control de acceso", "Información del evento"],
  },
];

const SocialRobotsSection = () => {
  return (
    <section className="py-24 bg-gray-50 slide-in-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Robótica Social
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-4">
            Venta de Robots Sociales para Eventos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Revoluciona tus eventos con robots conversacionales que interactúan de forma natural con los invitados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {robotServices.map((service) => (
            <Card key={service.title} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-gray-600">
                      <span className="text-robotics-blue mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-robotics-blue text-white hover:bg-robotics-blue/90"
            asChild
          >
            <a href="#contact">Solicitar Robot para Evento</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialRobotsSection;
