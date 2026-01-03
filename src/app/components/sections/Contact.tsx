'use client';

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const { theme } = useTheme();
  const { t } = useLanguage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('📝 Formulário enviado com dados:', formData);
    
    // Validação simples
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('🚀 Enviando requisição para /api/contact...');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📡 Resposta recebida:', response.status, response.statusText);
      const result = await response.json();
      console.log('📦 Dados da resposta:', result);

      if (response.ok) {
        console.log('✅ Sucesso! Exibindo toast...');
        toast.success('🎉 Mensagem enviada com sucesso! Em breve entrarei em contato.', {
          duration: 5000,
          style: {
            background: theme === 'dark' ? '#1e293b' : '#ffffff',
            color: theme === 'dark' ? '#f1f5f9' : '#0f172a',
            border: theme === 'dark' ? '1px solid #334155' : '1px solid #e2e8f0',
          },
        });
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
      } else {
        console.log('❌ Erro na resposta:', result);
        toast.error(`❌ ${result.message || 'Erro ao enviar mensagem. Tente novamente.'}`, {
          duration: 5000,
          style: {
            background: theme === 'dark' ? '#1e293b' : '#ffffff',
            color: theme === 'dark' ? '#f1f5f9' : '#0f172a',
            border: theme === 'dark' ? '1px solid #334155' : '1px solid #e2e8f0',
          },
        });
      }
    } catch (error) {
      console.error('🚫 Erro ao enviar mensagem:', error);
      toast.error('🚫 Erro ao enviar mensagem. Verifique sua conexão e tente novamente.', {
        duration: 5000,
        style: {
          background: theme === 'dark' ? '#1e293b' : '#ffffff',
          color: theme === 'dark' ? '#f1f5f9' : '#0f172a',
          border: theme === 'dark' ? '1px solid #334155' : '1px solid #e2e8f0',
        },
      });
    } finally {
      console.log('🏁 Finalizando envio...');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center relative overflow-hidden py-20">
      {/* Futuristic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 tech-grid ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2a] to-[#0a1a2a]' 
            : 'bg-gradient-to-br from-[#f0f4ff] via-[#e8f0ff] to-[#f0e8ff]'
        }`}></div>
        <div className="scanline-effect"></div>
      </div>

      {/* Geometric Accents - Hidden on mobile */}
      <div className="hidden md:block absolute top-10 right-10 geometric-corner opacity-30 pointer-events-none" style={{ width: '64px', height: '64px' }}></div>
      <div className="hidden md:block absolute bottom-10 left-10 geometric-corner opacity-30 pointer-events-none" style={{ width: '48px', height: '48px', transform: 'rotate(180deg)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 font-mono neon-text-magenta">
            <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{'<'}</span>
            {t('contact.title')}
            <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{'/>'}</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-magenta-400 to-purple-400 mx-auto rounded-full" style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)' }}></div>
          <p className={`text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto px-2 leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t('contact.description')}
          </p>
        </div>
        
        <form 
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6 max-w-xl mx-auto relative z-30"
        >
          <div>
            <label htmlFor="name" className={`block text-sm sm:text-base lg:text-lg font-bold mb-2 font-mono ${
              theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
            }`}>
              <User size={16} className="inline-block mr-2 sm:w-[20px] sm:h-[20px] neon-text-cyan" /> {t('contact.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className={`cyber-border rounded-lg sm:rounded-xl w-full py-2 sm:py-3 px-3 sm:px-4 leading-tight focus:outline-none transition-all duration-300 text-sm sm:text-base font-mono ${
                theme === 'dark' 
                  ? 'bg-[#0a0a1a]/80 backdrop-blur text-cyan-100 focus:shadow-[0_0_15px_rgba(0,240,255,0.5)] disabled:opacity-50' 
                  : 'bg-white/90 backdrop-blur text-cyan-900 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] disabled:opacity-50'
              }`}
              placeholder={t('contact.namePlaceholder')}
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className={`block text-sm sm:text-base lg:text-lg font-bold mb-2 font-mono ${
              theme === 'dark' ? 'text-magenta-300' : 'text-magenta-700'
            }`}>
              <Mail size={16} className="inline-block mr-2 sm:w-[20px] sm:h-[20px] neon-text-magenta" /> {t('contact.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className={`cyber-border rounded-lg sm:rounded-xl w-full py-2 sm:py-3 px-3 sm:px-4 leading-tight focus:outline-none transition-all duration-300 text-sm sm:text-base font-mono ${
                theme === 'dark' 
                  ? 'bg-[#0a0a1a]/80 backdrop-blur text-magenta-100 focus:shadow-[0_0_15px_rgba(255,0,255,0.5)] disabled:opacity-50' 
                  : 'bg-white/90 backdrop-blur text-magenta-900 focus:shadow-[0_0_15px_rgba(255,0,255,0.3)] disabled:opacity-50'
              }`}
              placeholder={t('contact.emailPlaceholder')}
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className={`block text-sm sm:text-base lg:text-lg font-bold mb-2 font-mono ${
              theme === 'dark' ? 'text-green-300' : 'text-green-700'
            }`}>
              <MessageSquare size={16} className="inline-block mr-2 sm:w-[20px] sm:h-[20px] neon-text-green" /> {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              disabled={isSubmitting}
              rows={4}
              className={`cyber-border rounded-lg sm:rounded-xl w-full py-2 sm:py-3 px-3 sm:px-4 leading-tight focus:outline-none transition-all duration-300 resize-none text-sm sm:text-base font-mono ${
                theme === 'dark' 
                  ? 'bg-[#0a0a1a]/80 backdrop-blur text-green-100 focus:shadow-[0_0_15px_rgba(0,255,136,0.5)] disabled:opacity-50' 
                  : 'bg-white/90 backdrop-blur text-green-900 focus:shadow-[0_0_15px_rgba(0,255,136,0.3)] disabled:opacity-50'
              }`}
              placeholder={t('contact.messagePlaceholder')}
              required
            ></textarea>
          </div>
          
          {/* Botão de envio */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="futuristic-btn w-full font-bold font-mono py-2.5 sm:py-3 px-4 sm:px-6 rounded focus:outline-none transition-all duration-300 flex items-center justify-center text-base sm:text-lg disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden group z-40"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2 sm:mr-3 relative z-10"></div>
                <span className="relative z-10 text-sm sm:text-base">{t('contact.sending')}</span>
              </>
            ) : (
              <>
                <span className="relative z-10 text-sm sm:text-base">{t('contact.submit')}</span>
                <Send size={18} className="ml-2 sm:ml-3 sm:w-5 sm:h-5 relative z-10" />
              </>
            )}
          </button>
          
          {/* Informações de contato alternativas */}
          <div className={`pt-4 sm:pt-6 border-t text-center ${
            theme === 'dark' ? 'border-gray-700/50' : 'border-gray-300/50'
          }`}>
            <p className={`text-xs sm:text-sm mb-3 sm:mb-4 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>{t('contact.alternative')}</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <a 
                href="mailto:carloshenriqueti09@gmail.com" 
                className={`transition-colors duration-300 flex items-center gap-2 hover:underline ${
                  theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                }`}
              >
                <Mail size={14} className="sm:w-4 sm:h-4" />
                <span className="break-all">carloshenriqueti09@gmail.com</span>
              </a>
              <span className={`hidden sm:inline ${
                theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
              }`}>•</span>
              <a 
                href="https://www.linkedin.com/in/carlos-henriqueti/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-colors duration-300 hover:underline ${
                  theme === 'dark' ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'
                }`}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
