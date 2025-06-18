
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const ImageCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/86febd5b-eda5-4932-990a-d74158a07a0d.png",
      alt: "Producto robótico 1"
    },
    {
      src: "/lovable-uploads/0dfddcd1-14f3-4de4-b057-1356b3f4ccfa.png", 
      alt: "Producto robótico 2"
    },
    {
      src: "/lovable-uploads/95d35c4b-e51e-452f-ae66-e1ee11c9c6f4.png",
      alt: "Robot colaborativo en acción"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Carrusel de imágenes a la izquierda */}
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="glass-card p-6 rounded-2xl border border-white/30">
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-white">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Contenido de texto a la derecha */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-robotics-dark">
              Especialistas en robótica aplicada al sector de la construcción
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Te ayudamos a integrar robots móviles y colaborativos para mover materiales, 
              optimizar procesos repetitivos y resolver la falta de mano de obra. 
              Desde la elección del equipo hasta la puesta en marcha y la formación de tu personal.
            </p>
            <div className="flex items-start space-x-2">
              <span className="text-lg">📞</span>
              <p className="text-lg text-gray-700">
                <strong>Solicita una asesoría gratuita de 30 minutos.</strong> Descubre si tu empresa 
                puede implementar robótica de forma realista y rentable.
              </p>
            </div>
          </div>
          
          <Button 
            className="bg-robotics-blue hover:bg-robotics-blue/90 text-white px-8 py-3 text-lg font-semibold rounded-md"
          >
            Asesoría gratuita
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
