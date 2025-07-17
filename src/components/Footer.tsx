import React from 'react';
import { Phone, Mail, MapPin, HelpCircle, Gauge, User } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const supportLinks = [
    { label: 'Central de Ajuda', href: 'https://wa.me/5516981493961?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20a%20internet.', external: true, icon: HelpCircle },
    { label: 'Teste de Velocidade', href: 'https://www.speedtest.net/', external: true, icon: Gauge },
    { label: 'Minha Conta', href: '#', icon: User }
  ];

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800 pt-4 sm:pt-10 pb-2 sm:pb-4 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <div className='border-t border-gray-800 mb-4'></div>
        <div className="flex flex-col items-center gap-4 sm:gap-10 md:gap-0 md:flex-row md:items-start md:justify-center">
        {/* Coluna 1: Nome da empresa simples */}
        <div className="flex-1 min-w-[220px] flex flex-col items-center text-center px-4">
          <h3 className="font-semibold text-base text-white mb-2 tracking-wide">Flashcom Internet</h3>
          <p className="text-sm leading-relaxed max-w-xs md:max-w-sm mb-6 md:mb-0 mt-2">
            A melhor conexão de internet do Brasil. Velocidade, estabilidade e atendimento excepcional para transformar sua experiência digital.
          </p>
        </div>
        {/* Divisória */}
        <div className="hidden md:block h-28 border-l border-gray-800 mx-8" />
        {/* Colunas Contato e Suporte lado a lado no mobile */}
        <div className="w-full md:w-auto grid grid-cols-2 gap-2 md:flex md:flex-row md:items-start md:justify-center">
          {/* Coluna 2: Contato */}
          <div className="flex-1 min-w-[150px] flex flex-col items-start text-left px-2 md:items-center md:text-center">
            <h3 className="font-semibold text-base text-white mb-2 tracking-wide">Contato</h3>
            <div className="flex items-center gap-2 text-sm justify-center md:justify-center">
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>(16) 98149-3961</span>
            </div>
            <div className="flex items-center gap-2 text-sm justify-center md:justify-center">
              <Mail className="w-4 h-4 text-brand-orange" />
              <span>flashcom.net2017@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm justify-center md:justify-center">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>Ribeirão Preto, SP</span>
            </div>
          </div>
          {/* Coluna 3: Suporte */}
          <div className="flex-1 min-w-[150px] flex flex-col items-start text-left px-2 pl-8 md:pl-2 md:items-center md:text-center">
            <h3 className="font-semibold text-base text-white mb-2 tracking-wide">Suporte</h3>
            <ul className="space-y-1">
              {supportLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`hover:text-brand-orange transition-colors duration-200 text-sm flex items-center gap-2 justify-start md:justify-center${item.label === 'Teste de Velocidade' ? ' whitespace-nowrap' : ''}`}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      <Icon className="w-4 h-4 text-brand-orange" />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Divisória */}
        <div className="hidden md:block h-28 border-l border-gray-800 mx-8" />
        </div>
      </div>
      <div className="mt-4 sm:mt-10 border-t border-gray-800 pt-3 sm:pt-5 text-center text-gray-500 text-sm">
        © {currentYear} Flashcom Net. Todos os direitos reservados |
        <a
          href="https://www.instagram.com/flash_grafico/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 transition-colors duration-200 no-underline"
          style={{ color: '#bbedff', opacity: 0.7, fontWeight: 'normal' }}
        >
          @flash_grafico
        </a>
        </div>
      </footer>
  );
};

export default Footer;
