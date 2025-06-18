
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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
    <div className="w-full max-w-4xl mx-auto">
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
  );
};

export default ImageCarousel;
