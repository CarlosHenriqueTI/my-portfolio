'use client';

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const { theme } = useTheme();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(result.message || 'Erro ao enviar mensagem.');
      }
    } catch {
      toast.error('Erro ao enviar mensagem. Verifique sua conexão.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className={`py-32 px-6 ${
        theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
      }`}
      style={{
        background: theme === 'dark'
          ? 'radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.15), transparent 50%), linear-gradient(180deg, rgba(10, 10, 10, 0.8) 0%, rgba(20, 20, 30, 0.9) 100%)'
          : 'radial-gradient(ellipse at bottom, rgba(99, 102, 241, 0.12), transparent 50%), linear-gradient(180deg, rgba(225, 225, 228, 0.85) 0%, rgba(212, 212, 220, 0.95) 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className={`text-5xl md:text-6xl font-semibold mb-12 ${
            theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
          }`}>
            Vamos trabalhar juntos?
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-[#666666]'
          }`}>
            Estou disponível para novos projetos e oportunidades. Entre em contato para discutirmos como posso agregar valor ao seu time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className={`text-xs uppercase tracking-widest block mb-3 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3.5 rounded-lg border-2 focus:outline-none transition-all text-base ${
                  theme === 'dark' 
                    ? 'bg-gray-900/50 border-gray-800 text-white placeholder-gray-500 focus:border-gray-600 focus:bg-gray-900' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:bg-white'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                placeholder="Seu nome completo"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`text-xs uppercase tracking-widest block mb-3 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3.5 rounded-lg border-2 focus:outline-none transition-all text-base ${
                  theme === 'dark' 
                    ? 'bg-gray-900/50 border-gray-800 text-white placeholder-gray-500 focus:border-gray-600 focus:bg-gray-900' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:bg-white'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                placeholder="seu@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`text-xs uppercase tracking-widest block mb-3 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                rows={6}
                className={`w-full px-4 py-3.5 rounded-lg border-2 focus:outline-none resize-none transition-all text-base ${
                  theme === 'dark' 
                    ? 'bg-gray-900/50 border-gray-800 text-white placeholder-gray-500 focus:border-gray-600 focus:bg-gray-900' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:bg-white'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                placeholder="Conte-me sobre seu projeto..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`text-base font-medium py-3.5 px-10 rounded-lg border-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                theme === 'dark' 
                  ? 'border-white text-white hover:bg-white hover:text-black' 
                  : 'border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#999999] mb-8">
                Contato Direto
              </h3>
              <div className="space-y-6">
                <a 
                  href="mailto:carloshenriqueti09@gmail.com"
                  className={`flex items-center gap-4 text-xl transition-opacity hover:opacity-60 ${
                    theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
                  }`}
                >
                  <Mail size={24} />
                  <span>carloshenriqueti09@gmail.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#999999] mb-8">
                Redes Sociais
              </h3>
              <div className="space-y-6">
                <a 
                  href="https://www.linkedin.com/in/carlos-henriqueti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 text-xl transition-opacity hover:opacity-60 ${
                    theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
                  }`}
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/CarlosHenriqueTI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 text-xl transition-opacity hover:opacity-60 ${
                    theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
                  }`}
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#999999] mb-8">
                Disponibilidade
              </h3>
              <p className={`text-xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-[#666666]'
              }`}>
                Disponível para projetos freelance e oportunidades full-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
