import React from 'react';
// Removido import de lucide-react
import NetworkAnimation from './NetworkAnimation';
import Scene3D from './Scene3D';
import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import HeroButtons from './HeroButtons';
import HeroStats from './HeroStats';

const HeroSection = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[60vh] pt-16 lg:pt-28 pb-8 flex items-start justify-center overflow-hidden bg-black">
      {/* Background 3D Scene */}
      <Scene3D />
      {/* Background Network Animation */}
      <div className="absolute inset-0 z-10">
        <NetworkAnimation />
      </div>
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-20"></div>
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center perspective-1000">
        <div className="animate-fade-in">
          <HeroTitle />
          <HeroDescription />
          <HeroButtons />
          <HeroStats />
        </div>
      </div>
      {/* 3D Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <button
          onClick={scrollToPlans}
          className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </button>
      </div> */}
    </section>
  );
};

export default HeroSection;
