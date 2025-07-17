import React from 'react';
import { Users, MapPin, Rocket, Heart } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const AboutSection = () => {
  const autoplay = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: false })).current;
  return (
    <section id="benefits" className="py-6 sm:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Conectando Pessoas, Impulsionando o Futuro
          </h2>
          <p className="text-xl text-gray-300 mb-4 sm:mb-8 leading-relaxed">
            Há mais de 08 anos, a Flashcom internet tem sido pioneira em tecnologia de fibra óptica, 
            transformando a forma como as pessoas se conectam com o mundo digital. Nossa missão 
            é simples: oferecer a melhor e mais estávelconexão de internet.
          </p>
          {/* Diferenciais: Mobile carrossel */}
          <div className="block sm:hidden mb-8 w-screen max-w-none relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <Carousel opts={{ loop: true }} plugins={[autoplay]}>
              <CarouselContent>
                <CarouselItem>
                  <div className="w-[90vw] max-w-xs mx-auto flex items-start space-x-4 card-3d shadow-lg border border-gray-800 hover:shadow-orange-500/20 transition-all duration-300 p-4 rounded-lg">
                    <div className="bg-brand-orange p-3 rounded-xl shadow-lg">
                      <Users className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Time Especializado</h4>
                      <p className="text-gray-400 text-sm">Profissionais certificados e experientes</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full max-w-xs mx-auto flex items-start space-x-4 card-3d hover:shadow-orange-500/20 transition-all duration-300 p-4 rounded-lg" style={{ animationDelay: '0.2s' }}>
                    <div className="bg-brand-orange p-3 rounded-xl shadow-lg floating-3d">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Cobertura Ampla</h4>
                      <p className="text-gray-400 text-sm">Presente em diversos bairros de Ribeirão Preto</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full max-w-xs mx-auto flex items-start space-x-4 card-3d hover:shadow-orange-500/20 transition-all duration-300 p-4 rounded-lg" style={{ animationDelay: '0.4s' }}>
                    <div className="bg-brand-orange p-3 rounded-xl shadow-lg floating-3d">
                      <Rocket className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Inovação Constante</h4>
                      <p className="text-gray-400 text-sm">Sempre na vanguarda tecnológica</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full max-w-xs mx-auto flex items-start space-x-4 card-3d hover:shadow-orange-500/20 transition-all duration-300 p-4 rounded-lg" style={{ animationDelay: '0.6s' }}>
                    <div className="bg-brand-orange p-3 rounded-xl shadow-lg floating-3d">
                      <Heart className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Foco no Cliente</h4>
                      <p className="text-gray-400 text-sm">Sua satisfação é nossa prioridade</p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          {/* Diferenciais: Desktop grid */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 perspective-1000">
            <div className="flex items-start space-x-4 card-3d shadow-lg border border-gray-800 hover:shadow-orange-500/20 transition-all duration-300 p-4 rounded-lg">
              <div className="bg-brand-orange p-3 rounded-xl shadow-lg">
                <Users className="h-6 w-6 text-black" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Time Especializado</h4>
                <p className="text-gray-400 text-sm">Profissionais certificados e experientes</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 card-3d hover:shadow-orange-500/20 transition-all duration-300 p-4 rounded-lg">
              <div className="bg-brand-orange p-3 rounded-xl shadow-lg floating-3d" style={{ animationDelay: '0.2s' }}>
                <MapPin className="h-6 w-6 text-black" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Cobertura Ampla</h4>
                <p className="text-gray-400 text-sm">Presente em diversos bairros de Ribeirão Preto</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 card-3d hover:shadow-orange-500/20 transition-all duration-300 p-4 rounded-lg">
              <div className="bg-brand-orange p-3 rounded-xl shadow-lg floating-3d" style={{ animationDelay: '0.4s' }}>
                <Rocket className="h-6 w-6 text-black" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Inovação Constante</h4>
                <p className="text-gray-400 text-sm">Sempre na vanguarda tecnológica</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 card-3d hover:shadow-orange-500/20 transition-all duration-300 p-4 rounded-lg" style={{ animationDelay: '0.6s' }}>
              <div className="bg-brand-orange p-3 rounded-xl shadow-lg floating-3d">
                <Heart className="h-6 w-6 text-black" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Foco no Cliente</h4>
                <p className="text-gray-400 text-sm">Sua satisfação é nossa prioridade</p>
              </div>
            </div>
          </div>
        </div> {/* Fim do bloco animate-fade-in mb-8 */}
        {/* Visual Element with 3D effects */}
        <div className="relative perspective-1000">
          <div className="bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 rounded-3xl p-8 backdrop-blur-sm card-3d">
            <div className="glass-effect rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
                <p className="text-gray-300 leading-relaxed">
                  "Conectar pessoas e empresas através da melhor tecnologia de internet, 
                  promovendo o desenvolvimento digital e social das comunidades que atendemos."
                </p>
              </div>
            </div>
          </div>
          {/* Floating 3D Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-orange/20 rounded-full floating-3d"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-orange/30 rounded-full floating-3d" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 -left-8 w-12 h-12 bg-brand-orange/25 rounded-full floating-3d" style={{ animationDelay: '2s' }}></div>
        </div>
      </div> {/* Fim do max-w-7xl ... */}
    </section>
  );
};

export default AboutSection;
