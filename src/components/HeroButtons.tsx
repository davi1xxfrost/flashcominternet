import React from 'react';

const HeroButtons = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mb-8 sm:mb-12 w-full">
      <a
        href="https://wa.me/5516981493961?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20de%20internet%20dispon%C3%ADveis."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-orange hover:bg-brand-orange-dark text-black px-6 py-3 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl orange-glow animate-pulse flex items-center justify-center w-full sm:w-auto"
        style={{ animation: 'pulse3d 2s ease-in-out infinite', textDecoration: 'none' }}
      >
        Contate-nos
      </a>
      <div className="flex flex-row gap-2 w-full sm:w-auto">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-black px-4 py-2 rounded-xl text-sm sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 glass-effect w-full sm:w-auto"
        >
          Saiba Mais
        </button>
        <a
          href="https://flashcom.sgp.net.br/accounts/central/login"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-black px-4 py-2 rounded-xl text-sm sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 glass-effect w-full sm:w-auto"
          style={{ textDecoration: 'none' }}
        >
          Área do Cliente
        </a>
      </div>
    </div>
  );
};

export default HeroButtons; 