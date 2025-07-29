'use client';

import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Eye } from 'lucide-react';
import ProfileImage from '../ProfileImage';
import { useTheme } from '../../context/ThemeContext';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visitCount, setVisitCount] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
    
    // Sistema de contador de visitas
    const updateVisitCount = () => {
      const today = new Date().toDateString();
      const lastVisit = localStorage.getItem('portfolio-last-visit');
      const currentCount = parseInt(localStorage.getItem('portfolio-visit-count') || '0');
      
      // Se é uma nova visita (diferente dia ou primeira vez)
      if (lastVisit !== today) {
        const newCount = currentCount + 1;
        localStorage.setItem('portfolio-visit-count', newCount.toString());
        localStorage.setItem('portfolio-last-visit', today);
        setVisitCount(newCount);
      } else {
        setVisitCount(currentCount);
      }
    };

    updateVisitCount();
  }, []);

  return (
    <section id="home" className="min-h-screen pt-16 pb-20 flex items-center relative overflow-hidden">
      {/* Gradiente de fundo sutil azul-roxo */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20' 
            : 'bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/30'
        }`}></div>
      </div>

      {/* Background Pattern Sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-20 left-10 w-1 h-1 rounded-full ${
          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
        }`}></div>
        <div className={`absolute top-32 left-32 w-0.5 h-0.5 rounded-full ${
          theme === 'dark' ? 'bg-purple-400' : 'bg-purple-500'
        }`}></div>
        <div className={`absolute top-40 right-20 w-1 h-1 rounded-full ${
          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-500'
        }`}></div>
        <div className={`absolute bottom-40 left-20 w-0.5 h-0.5 rounded-full ${
          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
        }`}></div>
        <div className={`absolute bottom-60 right-40 w-1 h-1 rounded-full ${
          theme === 'dark' ? 'bg-purple-400' : 'bg-purple-500'
        }`}></div>
        <div className={`absolute top-60 left-1/4 w-0.5 h-0.5 rounded-full ${
          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-500'
        }`}></div>
        <div className={`absolute bottom-32 right-1/3 w-1 h-1 rounded-full ${
          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
        }`}></div>
        
        {/* Connection Lines Sutis */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 800">
          <line x1="80" y1="160" x2="256" y2="256" stroke={theme === 'dark' ? '#3B82F6' : '#6366F1'} strokeWidth="0.3" opacity="0.3"/>
          <line x1="256" y1="256" x2="800" y2="160" stroke={theme === 'dark' ? '#8B5CF6' : '#8B5CF6'} strokeWidth="0.3" opacity="0.3"/>
          <line x1="160" y1="640" x2="640" y2="480" stroke={theme === 'dark' ? '#6366F1' : '#3B82F6'} strokeWidth="0.3" opacity="0.3"/>
          <line x1="200" y1="480" x2="600" y2="256" stroke={theme === 'dark' ? '#8B5CF6' : '#8B5CF6'} strokeWidth="0.3" opacity="0.3"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h1 className={`text-5xl lg:text-7xl font-bold mb-6 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Olá,
              <br />
              eu sou{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Carlos Henrique
              </span>
            </h1>
            
            <p className={`text-xl font-semibold mb-8 ${
              theme === 'dark' ? 'text-blue-300' : 'text-indigo-700'
            }`}>
              Desenvolvedor Frontend Júnior
            </p>
            
            <a href="#about" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mb-8 shadow-lg hover:shadow-xl">
              Sobre Mim ➔
            </a>
            
            {/* Social Links com cores mais profissionais */}
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/carlos-henriqueti/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/20' 
                    : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/20'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/CarlosHenriqueTI" 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub Profile"
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-700 hover:bg-gray-800 shadow-lg hover:shadow-gray-500/20' 
                    : 'bg-gray-800 hover:bg-gray-900 shadow-lg hover:shadow-gray-500/20'
                }`}
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:carloshenriqueti09@gmail.com"
                title="Send Email"
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/20' 
                    : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/20'
                }`}
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Contador de Visitas */}
            <div className={`mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-slate-800/50 border-slate-700/50 text-gray-300' 
                : 'bg-white/80 border-gray-200/50 text-gray-700'
            }`}>
              <Eye size={16} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
              <span className="text-sm font-medium">
                {visitCount > 0 ? (
                  <>
                    <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>
                      {visitCount.toLocaleString()}
                    </span>
                    {' '}
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      {visitCount === 1 ? 'visita' : 'visitas'}
                    </span>
                  </>
                ) : (
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    Carregando...
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Right Content - Avatar Profissional */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Gradiente de fundo profissional azul-roxo */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full absolute -z-10 -top-4 -left-4 shadow-2xl"></div>
              
              {/* Container da imagem com borda sutil */}
              <div className={`w-72 h-72 lg:w-88 lg:h-88 rounded-full overflow-hidden relative border-4 ${
                theme === 'dark' 
                  ? 'border-slate-700 bg-slate-800 shadow-2xl' 
                  : 'border-white bg-white shadow-2xl'
              }`}>
                <ProfileImage
                  src="/perfil.png"
                  alt="Carlos Henrique - Desenvolvedor Frontend"
                  width={350}
                  height={350}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  placeholder={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
