import React from 'react';
import { Check, Wifi, Zap, Shield, Signal, Router, TrendingUp, Crown, Rocket } from 'lucide-react';

const PlansSection = () => {
  const plansTop = [
    {
      name: "Essencial",
      speed: "70",
      price: "59,99",
      features: [
        "Wi-Fi Grátis",
        "Wi-Fi Grátis",
        "Wi-Fi Grátis",
        "Wi-Fi Grátis"
      ],
      popular: false,
      icon: Signal
    },
    {
      name: "Básico",
      speed: "100",
      price: "79,99",
      features: [
        "Wi-Fi Grátis",
        "Wi-Fi Grátis",
        "Wi-Fi Grátis",
        "Wi-Fi Grátis"
      ],
      popular: false,
      icon: Router
    }
  ];
  const padronizedFeatures = [
    "Wi-Fi Grátis",
    "Wi-Fi Grátis",
    "Wi-Fi Grátis",
    "Wi-Fi Grátis"
  ];
  const plansBottom = [
    {
      name: "Intermediário",
      speed: "400",
      price: "89,99",
      features: padronizedFeatures,
      popular: false,
      icon: TrendingUp
    },
    {
      name: "Premium",
      speed: "600",
      price: "99,99",
      features: padronizedFeatures,
      popular: true,
      icon: Crown
    },
    {
      name: "Ultra",
      speed: "800",
      price: "139,99",
      features: padronizedFeatures,
      popular: false,
      icon: Rocket
    }
  ];

  return (
    <section id="plans" className="py-2 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Escolha o Plano Perfeito para Você
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planos pensados para atender todas as suas necessidades de conectividade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto mb-4 sm:mb-8">
          {plansTop.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative card-3d glass-effect rounded-3xl p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-4 flex flex-col items-center justify-between w-full min-w-[220px] max-w-[300px] mx-auto ${
                  plan.popular ? 'border-2 border-brand-orange ring-4 ring-brand-orange/20 orange-glow' : 'border border-gray-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-orange text-black px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Mais Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-4 w-full">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-2 shadow-lg floating-3d ${
                    plan.popular ? 'bg-brand-orange text-black mt-2' : 'bg-gray-100 text-brand-orange'
                  }`}>
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-1 uppercase tracking-wide">{plan.name}</h3>
                  <div className="mb-2 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold text-brand-orange drop-shadow-lg leading-none">{plan.speed}</span>
                    <span className="text-gray-600 text-base font-semibold mt-0.5 uppercase tracking-widest">Mega</span>
                  </div>
                  <div className="text-center mb-1">
                    <span className="text-xs text-gray-500">Por apenas</span>
                    <div className="text-2xl font-bold text-brand-orange">
                      R$ {plan.price}
                      <span className="text-base text-gray-600">/mês</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mb-4 w-full">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <Check className="h-4 w-4 text-brand-orange mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mt-auto text-sm ${
                    plan.popular
                      ? 'bg-brand-orange hover:bg-brand-orange-dark text-black hover:shadow-orange-500/50'
                      : 'bg-gray-900 hover:bg-gray-700 text-white border border-gray-300'
                  }`}
                >
                  Contratar Agora
                </button>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {plansBottom.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative card-3d glass-effect rounded-3xl p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-4 flex flex-col items-center justify-between w-full min-w-[220px] max-w-[300px] mx-auto ${
                  plan.popular ? 'border-2 border-brand-orange ring-4 ring-brand-orange/20 orange-glow' : 'border border-gray-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-orange text-black px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Mais Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-4 w-full">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-2 shadow-lg floating-3d ${
                    plan.popular ? 'bg-brand-orange text-black mt-2' : 'bg-gray-100 text-brand-orange'
                  }`}>
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-1 uppercase tracking-wide">{plan.name}</h3>
                  <div className="mb-2 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold text-brand-orange drop-shadow-lg leading-none">{plan.speed}</span>
                    <span className="text-gray-600 text-base font-semibold mt-0.5 uppercase tracking-widest">Mega</span>
                  </div>
                  <div className="text-center mb-1">
                    <span className="text-xs text-gray-500">Por apenas</span>
                    <div className="text-2xl font-bold text-brand-orange">
                      R$ {plan.price}
                      <span className="text-base text-gray-600">/mês</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mb-4 w-full">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <Check className="h-4 w-4 text-brand-orange mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mt-auto text-sm ${
                    plan.popular
                      ? 'bg-brand-orange hover:bg-brand-orange-dark text-black hover:shadow-orange-500/50'
                      : 'bg-gray-900 hover:bg-gray-700 text-white border border-gray-300'
                  }`}
                >
                  Contratar Agora
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            Todos os planos incluem instalação gratuita para nome não negativado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
