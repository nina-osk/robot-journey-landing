import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Se prerenderiza a dist/404.html (scripts/prerender.mjs) y nginx la sirve
 * con estado 404 en cualquier URL que no exista. Antes el servidor devolvía
 * la home con 200 y Google lo trataba como "soft 404".
 */
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Seo
        title="Página no encontrada | RobotsConsultant"
        description="La página que buscas no existe o se ha movido."
        path="/404"
        noindex
      />
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-xl">
          <p className="text-sm tracking-widest text-teal-dark mb-4">ERROR 404</p>
          <h1 className="text-4xl md:text-5xl mb-6 text-balance">
            Esta página no existe o se ha movido
          </h1>
          <p className="text-lg mb-8">
            Puede que el enlace esté mal escrito o que hayamos reorganizado la web.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/"
              className="rounded-full bg-coral px-6 py-3 font-semibold text-pantalla hover:opacity-90"
            >
              Ir al inicio
            </a>
            <a
              href="/contacto"
              className="rounded-full border-2 border-teal-dark px-6 py-3 font-semibold text-teal-dark hover:bg-teal-dark hover:text-hueso"
            >
              Contactar
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
