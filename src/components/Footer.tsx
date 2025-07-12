import React, { useState } from 'react';
import { Wifi, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [showSupport, setShowSupport] = useState(true);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Sobre Nós', href: '#about' },
      { label: 'Nossa História', href: '#' },
      { label: 'Carreiras', href: '#' },
      { label: 'Imprensa', href: '#' }
    ],
    services: [
      { label: 'Planos Residenciais', href: '#plans' },
      { label: 'Planos Empresariais', href: '#' },
      { label: 'Suporte Técnico', href: '#contact' },
      { label: 'Cobertura', href: '#' }
    ],
    support: [
      { label: 'Central de Ajuda', href: '#' },
      { label: 'Teste de Velocidade', href: '#' },
      { label: 'Minha Conta', href: '#' },
      { label: 'Status da Rede', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Botão Flutuante de Suporte */}
      {showSupport && (
        <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 1000 }}>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.55)', // vidro translúcido real
              borderRadius: '9999px',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
              padding: '0.5rem 1.5rem 0.5rem 1rem',
              minWidth: '120px',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(255,255,255,0.35)',
              transition: 'box-shadow 0.3s',
            }}
          >
            <button
              onClick={() => setShowSupport(false)}
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                background: 'rgba(255,255,255,0.7)',
                border: 'none',
                borderRadius: '9999px',
                width: '22px',
                height: '22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                fontSize: '15px',
                color: '#333',
                transition: 'background 0.2s',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.95)'}
              onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.7)'}
              aria-label="Fechar suporte"
            >
              ×
            </button>
            <a
              href="https://wa.me/5516981493961?text=Gostaria%20de%20atendimento%2C%20algu%C3%A9m%20dispon%C3%ADvel%3F"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: '#222',
                fontWeight: 500,
                fontSize: '1.08rem',
                letterSpacing: '0.01em',
                gap: '0.85rem',
                transition: 'color 0.2s',
              }}
            >
              <span style={{ userSelect: 'none', fontWeight: 600, fontSize: '1.08rem', letterSpacing: '0.01em' }}>suporte</span>
              <img src="/images/whats.png" alt="WhatsApp" style={{ width: '28px', height: '28px', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.10))', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.12)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
            </a>
          </div>
        </div>
      )}
      {/* Main Footer Content */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img src="/images/flash.png" alt="Flashcom Net Logo" className="h-8 lg:h-10" style={{ objectFit: 'contain' }} />
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                A melhor conexão de internet do Brasil. Velocidade, estabilidade e 
                atendimento excepcional para transformar sua experiência digital.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-orange" />
                  <span className="text-gray-300">(16) 98149-3961</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-orange" />
                  <span className="text-gray-300">flashcom.net2017@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-brand-orange" />
                  <span className="text-gray-300">Ribeirão Preto, SP</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Empresa</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-400 hover:text-brand-orange transition-colors duration-300"
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Serviços</h4>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link, index) => (
                      <li key={index}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-400 hover:text-brand-orange transition-colors duration-300"
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Suporte</h4>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link, index) => (
                      <li key={index}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-400 hover:text-brand-orange transition-colors duration-300"
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Fique por dentro</h4>
              <p className="text-gray-400 mb-4">
                Receba nossas novidades e promoções exclusivas
              </p>
              
              <div className="flex mb-6">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                />
                <button className="bg-brand-orange hover:bg-brand-orange-dark px-6 py-3 rounded-r-lg transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </button>
              </div>

              <div>
                <h5 className="font-medium mb-4">Siga-nos</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="bg-gray-800 hover:bg-brand-orange p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                        aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Flashcom Net. Todos os direitos reservados.
              </p>
              
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-300">
                  Política de Privacidade
                </button>
                <button className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-300">
                  Termos de Uso
                </button>
                <button className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-300">
                  Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
