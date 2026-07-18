import { Link } from 'react-router-dom';
import {
  ArrowRight, Bot, Boxes, HandPlatter, Cpu, Cog, ScanEye, Zap, Wrench,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Footer from '@/components/Footer';
import Roberta from '@/components/Roberta';
import Seo from '@/components/Seo';
import { whatsappUrl, SITE_URL } from '@/config/contact';

const TITLE = 'Robótica y automatización industrial | ROS2 y cobots';
const DESCRIPTION =
  'Robots móviles, colaborativos e industriales para tu empresa. Programación ROS2, cobots Universal Robots, pick & place y control de calidad con visión artificial.';

const ROBOTS = [
  { icon: Boxes, title: 'Robots móviles', text: 'Autónomos para transporte y logística interna: llevan el material solo, sin operario.' },
  { icon: HandPlatter, title: 'Robots de servicio', text: 'Camareros, recepcionistas y asistentes de eventos que atienden e informan.' },
  { icon: Cog, title: 'Robots industriales', text: 'Automatización de líneas: ensamblaje, paletizado y trabajos pesados o repetitivos.' },
];

const ROS2 = [
  { icon: Cpu, title: 'Programación ROS2', text: 'Desarrollo de aplicaciones robóticas en ROS2 para brazos robóticos y cobots.' },
  { icon: Bot, title: 'Universal Robots', text: 'Programación especializada en cobots UR3, UR5 y UR10.' },
  { icon: Wrench, title: 'Integración industrial', text: 'Conectividad con sistemas y protocolos de comunicación de planta.' },
  { icon: Zap, title: 'Pick & Place', text: 'Recogida y colocación automatizada con visión artificial.' },
  { icon: ScanEye, title: 'Control de calidad', text: 'Inspección automatizada con cámaras y sensores integrados.' },
  { icon: Cog, title: 'Soldadura colaborativa', text: 'Secuencias de soldadura con cobots certificados para trabajar junto al personal.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Robótica y automatización industrial',
  serviceType: 'Integración de robótica, programación ROS2 y cobots',
  provider: { '@type': 'Organization', name: 'RobotsConsultant', url: SITE_URL },
  description: DESCRIPTION,
  areaServed: 'ES',
  url: `${SITE_URL}/robotica`,
};

const Robotica = () => {
  useScrollReveal();

  const ctaHero = whatsappUrl('Hola, quiero información sobre robótica y automatización.');
  const ctaTecnico = whatsappUrl('Hola, necesito programación ROS2 / cobots.');

  return (
    <div className="min-h-screen bg-hueso text-pantalla">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/robotica"
        type="article"
        schemas={[serviceSchema]}
      />
      <Navbar />

      {/* HERO */}
      <header className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Robótica</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
                Robots que hacen el trabajo pesado para que tu equipo haga el importante
              </h1>
              <p className="text-lg md:text-xl text-pantalla/75 mb-8 max-w-2xl">
                Desde robots móviles que mueven material solos hasta cobots que trabajan codo
                con codo con tu personal. Los integramos, los programamos y te acompañamos.
              </p>
              <a href={ctaHero} target="_blank" rel="noopener noreferrer" className="btn-coral">
                Quiero información <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Roberta pose="saludando" width={420} priority className="animate-float" />
            </div>
          </div>
        </div>
      </header>

      {/* TIPOS DE ROBOT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Qué instalamos</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              Un robot para cada tarea
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ROBOTS.map((robot) => (
              <div key={robot.title} className="card-roberta">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-teal/12 text-teal">
                  <robot.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl mb-2">{robot.title}</h3>
                <p className="text-pantalla/75">{robot.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTE TÉCNICA: ROS2 — sección oscura */}
      <section className="section-dark py-16 md:py-24 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--cian-glow)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cian-glow)) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 75% 60% at 50% 40%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 60% at 50% 40%, black, transparent)',
          }}
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Ingeniería robótica</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 text-balance text-hueso">
              Programación ROS2 y cobots a medida
            </h2>
            <p className="text-lg text-hueso/75">
              Cuando el proyecto pide algo hecho a medida, entramos en el código. Desarrollamos
              y programamos la célula robótica completa, la integramos con tu planta y la dejamos
              funcionando.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {ROS2.map((item) => (
              <div key={item.title} className="card-roberta">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card-sm bg-cian-glow/10 text-cian-glow">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg mb-2 text-hueso">{item.title}</h3>
                <p className="text-hueso/70 text-base">{item.text}</p>
              </div>
            ))}
          </div>

          <a href={ctaTecnico} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Hablar con un ingeniero <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
                Cuéntanos qué tarea quieres automatizar. Te decimos si un robot es la respuesta.
              </h2>
              <a href={ctaHero} target="_blank" rel="noopener noreferrer" className="btn-coral">
                Quiero mi diagnóstico gratuito <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-5 text-base text-pantalla/70">
                ¿Buscas software de gestión en vez de robots?{' '}
                <Link to="/odoo" className="font-semibold text-teal hover:text-teal-dark">
                  Descubre Odoo →
                </Link>
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Roberta pose="guino" width={300} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Robotica;
