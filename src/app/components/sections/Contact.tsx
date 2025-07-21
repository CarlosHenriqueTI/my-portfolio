'use client';

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
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
      {/* Gradiente de fundo sutil azul-roxo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/10' 
            : 'bg-gradient-to-br from-blue-50/20 via-indigo-50/10 to-purple-50/20'
        }`}></div>
      </div>

      {/* Background Pattern Sutil */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className={`absolute top-20 left-10 w-1 h-1 rounded-full ${
          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
        }`}></div>
        <div className={`absolute top-32 right-32 w-0.5 h-0.5 rounded-full ${
          theme === 'dark' ? 'bg-purple-400' : 'bg-purple-500'
        }`}></div>
        <div className={`absolute bottom-40 left-20 w-1 h-1 rounded-full ${
          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-500'
        }`}></div>
        <div className={`absolute top-60 right-1/4 w-0.5 h-0.5 rounded-full ${
          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
        }`}></div>
        
        {/* Connection Lines Sutis */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 800">
          <line x1="80" y1="160" x2="256" y2="256" stroke={theme === 'dark' ? '#3B82F6' : '#6366F1'} strokeWidth="0.3" opacity="0.3"/>
          <line x1="256" y1="256" x2="800" y2="160" stroke={theme === 'dark' ? '#8B5CF6' : '#8B5CF6'} strokeWidth="0.3" opacity="0.3"/>
          <line x1="160" y1="640" x2="640" y2="480" stroke={theme === 'dark' ? '#6366F1' : '#3B82F6'} strokeWidth="0.3" opacity="0.3"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 ${
            theme === 'dark' 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
          }`}>
            Entre em Contato
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className={`text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto px-2 leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Vamos discutir oportunidades profissionais e projetos inovadores
          </p>
        </div>
        
        <form 
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6 max-w-xl mx-auto relative z-30"
        >
          <div>
            <label htmlFor="name" className={`block text-sm sm:text-base lg:text-lg font-bold mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <User size={16} className={`inline-block mr-2 sm:w-[20px] sm:h-[20px] ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`} /> Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className={`shadow-inner border rounded-lg sm:rounded-xl w-full py-2 sm:py-3 px-3 sm:px-4 leading-tight focus:outline-none focus:ring-2 transition-all duration-300 text-sm sm:text-base ${
                theme === 'dark' 
                  ? 'bg-slate-800/50 backdrop-blur border-slate-700/50 text-gray-100 focus:ring-blue-500 focus:border-blue-500 hover:border-slate-600/50 disabled:opacity-50' 
                  : 'bg-white/90 backdrop-blur border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 disabled:opacity-50'
              }`}
              placeholder="Seu nome completo"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className={`block text-sm sm:text-base lg:text-lg font-bold mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <Mail size={16} className={`inline-block mr-2 sm:w-[20px] sm:h-[20px] ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`} /> E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className={`shadow-inner border rounded-lg sm:rounded-xl w-full py-2 sm:py-3 px-3 sm:px-4 leading-tight focus:outline-none focus:ring-2 transition-all duration-300 text-sm sm:text-base ${
                theme === 'dark' 
                  ? 'bg-slate-800/50 backdrop-blur border-slate-700/50 text-gray-100 focus:ring-purple-500 focus:border-purple-500 hover:border-slate-600/50 disabled:opacity-50' 
                  : 'bg-white/90 backdrop-blur border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500 hover:border-gray-400 disabled:opacity-50'
              }`}
              placeholder="seu.email@exemplo.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className={`block text-sm sm:text-base lg:text-lg font-bold mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <MessageSquare size={16} className={`inline-block mr-2 sm:w-[20px] sm:h-[20px] ${
                theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
              }`} /> Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              disabled={isSubmitting}
              rows={4}
              className={`shadow-inner border rounded-lg sm:rounded-xl w-full py-2 sm:py-3 px-3 sm:px-4 leading-tight focus:outline-none focus:ring-2 transition-all duration-300 resize-none text-sm sm:text-base ${
                theme === 'dark' 
                  ? 'bg-slate-800/50 backdrop-blur border-slate-700/50 text-gray-100 focus:ring-indigo-500 focus:border-indigo-500 hover:border-slate-600/50 disabled:opacity-50' 
                  : 'bg-white/90 backdrop-blur border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 hover:border-gray-400 disabled:opacity-50'
              }`}
              placeholder="Conte-me sobre sua ideia, projeto ou oportunidade..."
              required
            ></textarea>
          </div>
          
          {/* Botão de envio */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-bold py-3 px-6 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 flex items-center justify-center text-lg shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed relative z-40 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:ring-blue-500' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white focus:ring-blue-400'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <span>Enviar Mensagem</span>
                <Send size={20} className="ml-3" />
              </>
            )}
          </button>          {/* Informações de contato alternativas */}
          <div className={`pt-6 border-t text-center ${
            theme === 'dark' ? 'border-gray-700/50' : 'border-gray-300/50'
          }`}>
            <p className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>Ou entre em contato diretamente:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm">
              <a 
                href="mailto:carloshenriqueti09@gmail.com" 
                className={`transition-colors duration-300 flex items-center gap-2 hover:underline ${
                  theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                }`}
              >
                <Mail size={16} />
                carloshenriqueti09@gmail.com
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
