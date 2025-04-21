
import { useEffect, useRef, useState } from "react";
import { Box, HardDrive, Wrench, Gear } from "lucide-react";
import { Button } from "@/components/ui/button";

const robotParts = [
  {
    id: "controlador",
    name: "Controlador Programable",
    icon: <HardDrive className="h-8 w-8 text-robotics-blue" />,
    description: "Cerebro central para tu robot: admite múltiples motores, sensores y rutinas personalizadas.",
    specs: [
      "Soporta hasta 6 ejes",
      "Compatible con motores paso a paso y servomotores",
      "Entradas y salidas digitales",
      "Comunicaciones estándar: Ethernet, USB",
    ],
    price: "$499"
  },
  {
    id: "estructura",
    name: "Estructura Modular de Aluminio",
    icon: <Box className="h-8 w-8 text-robotics-blue" />,
    description: "Perfil extruido de aluminio anodizado, ligero, resistente y expandible.",
    specs: [
      "Perfiles de 30x30mm y 40x40mm",
      "Conectores y esquineros incluidos",
      "Superficie resistente a corrosión",
      "Compatible con sensores y actuadores estándar"
    ],
    price: "$179"
  },
  {
    id: "actuadores",
    name: "Kit de Actuadores y Motores",
    icon: <Wrench className="h-8 w-8 text-robotics-blue" />,
    description: "Motores DC, servos y reductores para todos los movimientos de tu robot.",
    specs: [
      "4 Motores pasoa paso NEMA17",
      "2 Servomotores de precisión",
      "Cables y sistemas de engranaje",
      "Fuente de alimentación 24V/10A"
    ],
    price: "$389"
  },
  {
    id: "sensores",
    name: "Kit de Sensores Inteligentes",
    icon: <Gear className="h-8 w-8 text-robotics-blue" />,
    description: "Incluye sensores de proximidad, finales de carrera, módulo de fuerza y sensor de distancia.",
    specs: [
      "3 Sensores inductivos",
      "2 Sensores ópticos",
      "1 Sensor de fuerza (gripper)",
      "Cableado y fijaciones incluidos"
    ],
    price: "$149"
  }
];

const RobotPartsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activePart, setActivePart] = useState("controlador");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="robot-parts"
      className="py-24 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Venta de Piezas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-4">
            Consigue Todo Para Armar tu Robot
          </h2>
          <p className="text-lg text-gray-600">
            Selecciona los componentes y kits ideales para tu proyecto robótico, compatibles con múltiples plataformas.
          </p>
        </div>
        <div className={`slide-in-section ${isVisible ? "visible" : ""}`}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {robotParts.map((part) => (
              <button
                key={part.id}
                onClick={() => setActivePart(part.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activePart === part.id
                    ? "bg-robotics-blue text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {part.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {robotParts.map((part) => (
              <div
                key={part.id}
                className={`transition-all duration-500 transform h-full ${
                  activePart === part.id
                    ? "scale-105 opacity-100 z-10"
                    : "scale-95 opacity-70 hover:opacity-90"
                }`}
              >
                <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
                  <div className="mb-6">{part.icon}</div>
                  <h3 className="text-xl font-bold text-robotics-dark mb-3">
                    {part.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{part.description}</p>
                  <ul className="space-y-3 mb-8">
                    {part.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-sm text-gray-600">• {spec}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col gap-2">
                    <span className="text-2xl font-bold text-robotics-dark mb-2">
                      {part.price}
                    </span>
                    <Button
                      asChild
                      className={`w-full ${
                        activePart === part.id
                          ? "bg-robotics-blue hover:bg-robotics-blue/90"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      <a href="#contact" className="block w-full">
                        Lo quiero
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RobotPartsSection;
