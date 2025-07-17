import React, { useState, useEffect } from 'react';
// Removido import de lucide-react

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'plans', 'benefits', 'contact'];
      let current = 'hero';
      const scrollPosition = window.scrollY + 100; // Usa o topo da tela + offset
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
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
    { label: 'Sobre Nós', id: 'benefits' },
    { label: 'Suporte', id: 'contact' },
  ];

  return (
    <header className="lg:fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      {/* Logo: absoluta só em lg+ */}
      <div
        className="cursor-pointer flex items-center pl-4 absolute top-0 left-0 z-50 lg:h-20 lg:pl-4 lg:absolute lg:top-0 lg:left-0 lg:z-50"
        onClick={() => scrollToSection('hero')}
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
        <div className="flex items-center justify-between min-h-16 lg:h-20">
          {/* Desktop Navigation centralizado na tela */}
          <nav className="hidden lg:flex items-center space-x-8 fixed left-1/2 top-0 h-16 lg:h-20 -translate-x-1/2 z-40">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-bold transition-all duration-300 transform hover:text-brand-orange hover:scale-105 ${activeSection === item.id ? 'text-brand-orange' : 'text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button no canto superior direito */}
          <button
            className="lg:hidden text-white hover:text-brand-orange transition-colors duration-300 fixed top-4 right-4 z-50 text-3xl font-bold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className="relative w-8 h-8 flex items-center justify-center">
              <span
                className={`block absolute w-8 h-1 rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 bg-[#ff6400] top-3.5' : 'bg-[#ff6400] top-2'}`}
                style={{ left: 0 }}
              ></span>
              <span
                className={`block absolute w-8 h-1 rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'bg-[#ff6400] top-4'}`}
                style={{ left: 0 }}
              ></span>
              <span
                className={`block absolute w-8 h-1 rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 bg-[#ff6400] top-3.5' : 'bg-[#ff6400] top-6'}`}
                style={{ left: 0 }}
              ></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-screen h-screen z-40 flex items-center justify-center backdrop-blur-md">
            <nav className="flex flex-col space-y-4 p-8 bg-[#181818] border border-gray-700 rounded-xl w-[90vw] max-w-xs mx-auto mt-0">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 font-medium text-left ${activeSection === item.id ? 'text-brand-orange' : 'text-gray-300'} hover:text-brand-orange`}
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
