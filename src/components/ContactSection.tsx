import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(16) 98149-3961",
      action: "tel:(16) 98149-3961",
      description: "Ligue para nós"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "(16) 98149-3961",
      action: "https://wa.me/5516981493961",
      description: "Fale conosco no WhatsApp"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "flashcom.net2017@gmail.com",
      action: "mailto:flashcom.net2017@gmail.com",
      description: "Envie um e-mail"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Rua Serra Negra, 604, Joquei Clube, Ribeirão Preto, SP",
      action: "#",
      description: "Nossa localização"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Fale Conosco
          </h2>
          <p className="text-xl text-brand-gray-500 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos revolucionar sua conexão com a internet
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Como podemos ajudar?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : '_self'}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="bg-brand-gray-100 rounded-2xl pt-6 pb-0 px-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col justify-between items-stretch text-left min-h-[150px]"
                  >
                    <div className="flex items-start space-x-4 w-full">
                      <div className="bg-white p-3 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-brand-orange" />
                      </div>
                      <div className="flex flex-col justify-center items-start flex-1">
                        <h4 className="font-semibold text-black mb-1">
                          {method.title}
                        </h4>
                        <p className="text-brand-gray-500 text-sm mb-1">
                          {method.value}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-end w-full mb-2">
                      <p className="text-brand-gray-500 text-xs text-center w-full">
                        {method.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Business Hours */}
            <div className="bg-brand-gray-100 rounded-2xl p-6">
              <h4 className="font-semibold text-black mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-brand-gray-500">
                <p>Segunda à Sexta: 8:30h às 18h</p>
                <p>Sábado: 8:30h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-brand-gray-500 font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-brand-gray-500 font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-brand-gray-500 font-medium mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-brand-gray-500 font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Como podemos ajudar você?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
