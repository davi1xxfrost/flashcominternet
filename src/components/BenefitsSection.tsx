import React from 'react';
import { Zap, Shield, Headphones, Router, Clock, Award, ArrowUpCircle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Ultravelocidade",
      description: "Conexão de fibra óptica com velocidade de até 800 Mega  para download e upload simétrico",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Shield,
      title: "Máxima Segurança",
      description: "Rede protegida com criptografia avançada e proteção contra ataques cibernéticos",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: ArrowUpCircle,
      title: "Upgrade Fácil",
      description: "Planos flexíveis e possibilidade de aumento de velocidade sempre que precisar",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Router,
      title: "Wi-Fi de Alta Performance",
      description: "Equipamentos para cobertura completa em toda sua casa",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Clock,
      title: "Instalação Rápida",
      description: "Técnicos especializados instalam sua conexão em até 48 horas após aprovação",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Award,
      title: "Melhor Custo-Benefício",
      description: "Preços competitivos com a melhor qualidade de serviço do mercado",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Por que Somos a Melhor Escolha?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos a melhor experiência em conectividade com tecnologia de ponta e atendimento excepcional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group card-3d glass-effect rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-4 border border-gray-800 hover:border-brand-orange/30"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gradient-to-r ${benefit.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
