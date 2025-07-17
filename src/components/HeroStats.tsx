import React, { useRef, useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const stats = [
  { value: '800MB', label: 'Velocidade' },
  { value: '100% Fibra', label: 'Performance' },
  { value: '99.9%', label: 'Estabilidade' },
];

const HeroStats = () => {
  const apiRef = useRef(null);
  const [apiReady, setApiReady] = useState(false);

  // Quando a API estiver disponível, marca como pronta
  const handleSetApi = (instance) => {
    apiRef.current = instance;
    setApiReady(!!instance);
  };

  useEffect(() => {
    if (!apiReady || !apiRef.current) return;
    const api = apiRef.current;
    const interval = setInterval(() => {
      if (api.selectedScrollSnap() === stats.length - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [apiReady]);

  return (
  <>
    {/* Mobile: carrossel */}
    <div className="block sm:hidden w-full max-w-xs mx-auto mb-6">
        <Carousel setApi={handleSetApi}>
        <CarouselContent>
          {stats.map((stat) => (
            <CarouselItem key={stat.value}>
              <div className="card-3d glass-effect rounded-2xl p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
                <div className="text-3xl font-bold text-brand-orange mb-2 drop-shadow-lg">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
    {/* Desktop: grid */}
    <div className="hidden sm:grid grid-cols-3 gap-8 max-w-4xl mx-auto perspective-1000 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.value}
          className="card-3d glass-effect rounded-2xl p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500"
        >
          <div className="text-3xl lg:text-4xl font-bold text-brand-orange mb-2 drop-shadow-lg">{stat.value}</div>
          <div className="text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  </>
);
};

export default HeroStats; 