import React, { useState, useEffect } from 'react';
// Removido import de lucide-react

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Planos', id: 'plans' },
    { label: 'Sobre Nós', id: 'about' },
    { label: 'Suporte', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent lg:bg-[rgba(0,0,0,0.8)]">
      {/* Logo: absoluta só em lg+ */}
      <div
        className="cursor-pointer flex items-center h-16 lg:h-20 pl-4 lg:pl-4 lg:absolute lg:top-0 lg:left-0 lg:z-50 -mt-3 lg:mt-0"
        onClick={() => scrollToSection('hero')}
        style={{ height: '100%' }}
      >
        <img src={`${import.meta.env.BASE_URL}images/flash.png`} alt="Flashcom Net Logo" className="h-20 lg:h-28 w-auto object-contain" />
      </div>
      {/* Botão Promoções: absoluto só em lg+ */}
      <div
        className="hidden lg:flex items-center h-16 lg:h-20 pr-4 lg:pr-6 lg:absolute lg:top-0 lg:right-0 lg:z-50"
        style={{ height: '100%' }}
      >
        <button className="bg-brand-orange hover:bg-brand-orange-dark text-black px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50 orange-glow">
          Promoções
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Desktop Navigation centralizado na tela */}
          <nav className="hidden lg:flex items-center space-x-8 fixed left-1/2 top-0 h-16 lg:h-20 -translate-x-1/2 z-40">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white font-bold hover:text-brand-orange transition-all duration-300 transform hover:scale-105"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button no canto superior direito */}
          <button
            className="lg:hidden text-white hover:text-brand-orange transition-colors duration-300 absolute top-4 right-4 z-50 text-3xl font-bold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{top: '1rem', right: '1rem'}}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? '×' : <span style={{fontSize: '2rem', lineHeight: 1}}>&#9776;</span>}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass-effect border-t border-gray-700 py-4 rounded-b-lg">
            <nav className="flex flex-col space-y-4 pl-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-brand-orange transition-colors duration-300 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              {/* Promoções igual aos outros itens no mobile */}
              <button
                className="text-gray-300 hover:text-brand-orange transition-colors duration-300 font-medium text-left"
                onClick={() => {/* ação de promoções aqui, se desejar */}}
              >
                Promoções
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
