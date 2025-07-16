import React from 'react';
import { Users, MapPin, Rocket, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
              Conectando Pessoas, Impulsionando o Futuro
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Há mais de 08 anos, a Flashcom internet tem sido pioneira em tecnologia de fibra óptica, 
              transformando a forma como as pessoas se conectam com o mundo digital. Nossa missão 
              é simples: oferecer a melhor e mais estávelconexão de internet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 perspective-1000">
              <div className="flex items-start space-x-4 card-3d hover:shadow-orange-500/20 transition-all duration-300 p-4 rounded-lg">
                <div className="bg-brand-orange p-3 rounded-xl shadow-lg floating-3d">
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

              <div className="flex items-start space-x-4 card-3d hover:shadow-orange-500/20 transition-all duration-300 p-4 rounded-lg">
                <div className="bg-brand-orange p-3 rounded-xl shadow-lg floating-3d" style={{ animationDelay: '0.6s' }}>
                  <Heart className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Foco no Cliente</h4>
                  <p className="text-gray-400 text-sm">Sua satisfação é nossa prioridade</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-orange hover:bg-brand-orange-dark text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50">Conheça Nossa História</button>
              <button className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 glass-effect">Ver Localização</button>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
