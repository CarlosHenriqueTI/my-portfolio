'use client';

import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import ProfileImage from '../ProfileImage';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="w-full max-w-[1400px] bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-6 lg:p-10 mb-6 sm:mb-8 lg:mb-12 flex flex-col xl:flex-row items-center xl:items-start justify-between relative overflow-hidden border border-gray-700/50">
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-gray-950/20 rounded-xl sm:rounded-2xl"></div>
      
      <div className={`relative z-10 text-center xl:text-left w-full xl:w-3/5 mb-6 sm:mb-8 xl:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-3 sm:mb-4">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 text-emerald-400 rounded-full text-xs sm:text-sm font-medium border border-emerald-500/20 backdrop-blur">
            <span className="inline-flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Disponível para oportunidades
            </span>
          </span>
        </div>
        
        <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-4">
          <span className="text-gray-300">Olá, sou</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 whitespace-nowrap">
            Carlos Henrique
          </span>
        </h1>
        
        <div className="mb-4 sm:mb-6">
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-white mb-2">
            Desenvolvedor Frontend
          </p>
          <div className="flex flex-wrap justify-center xl:justify-start gap-2 sm:gap-3 text-xs sm:text-sm">
            <span className="px-3 sm:px-4 py-1.5 bg-blue-500/10 text-blue-300 rounded-md border border-blue-500/20 font-medium">React.js</span>
            <span className="px-3 sm:px-4 py-1.5 bg-gray-500/10 text-gray-300 rounded-md border border-gray-500/20 font-medium">Next.js</span>
            <span className="px-3 sm:px-4 py-1.5 bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/20 font-medium">TypeScript</span>
          </div>
        </div>
        
        <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto xl:mx-0 leading-relaxed">
          Criando experiências digitais excepcionais através de código limpo, design intuitivo e soluções inovadoras.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center xl:justify-start mb-6 sm:mb-8">
          <a 
            href="#contact" 
            className="group px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden text-sm sm:text-base"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Entrar em Contato
              <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a 
            href="#projects" 
            className="group px-6 sm:px-8 py-3 bg-white/5 backdrop-blur text-white font-semibold rounded-lg shadow-lg border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <span className="flex items-center justify-center gap-2">
              Ver Projetos
              <ArrowDown size={16} className="sm:w-[18px] sm:h-[18px]" />
            </span>
          </a>
          
          <a 
            href="/CV_CarlosHenrique.pdf" 
            download 
            className="group px-6 sm:px-8 py-3 bg-gray-800/50 backdrop-blur text-gray-200 font-semibold rounded-lg shadow-lg border border-gray-600/30 hover:border-emerald-500/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <span className="flex items-center justify-center gap-2">
              <span className="hidden sm:inline">Download</span> Currículo
              <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
            </span>
          </a>
        </div>
        
        <div className="flex gap-3 sm:gap-4 justify-center xl:justify-start">
          <a 
            href="https://www.linkedin.com/in/carlos-henriqueti/" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="LinkedIn Profile"
            className="group p-2.5 sm:p-3 bg-blue-600/20 backdrop-blur border border-blue-500/30 rounded-lg text-blue-300 hover:text-white hover:border-blue-400/50 hover:bg-blue-600/30 transition-all duration-300"
          >
            <Linkedin size={20} className="sm:w-[22px] sm:h-[22px] group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a 
            href="https://github.com/CarlosHenriqueTI" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="GitHub Profile"
            className="group p-2.5 sm:p-3 bg-gray-800/40 backdrop-blur border border-gray-600/30 rounded-lg text-gray-300 hover:text-white hover:border-gray-500/50 hover:bg-gray-700/50 transition-all duration-300"
          >
            <Github size={20} className="sm:w-[22px] sm:h-[22px] group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a 
            href="mailto:carloshenriqueti09@gmail.com" 
            title="Send Email"
            className="group p-2.5 sm:p-3 bg-purple-600/20 backdrop-blur border border-purple-500/30 rounded-lg text-purple-300 hover:text-white hover:border-purple-400/50 hover:bg-purple-600/30 transition-all duration-300"
          >
            <Mail size={20} className="sm:w-[22px] sm:h-[22px] group-hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
      
      {/* Seção da imagem */}
      <div className={`relative w-full xl:w-2/5 flex justify-center xl:justify-end transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
          {/* Container de efeitos de fundo */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-xl sm:rounded-2xl"></div>
          
          {/* Imagem principal */}
          <div className="relative w-full h-full">
            <ProfileImage
              src="/perfil.png"
              alt="Carlos Henrique - Desenvolvedor Frontend"
              width={320}
              height={320}
              className="w-full h-full rounded-xl sm:rounded-2xl object-cover border border-blue-500/30 shadow-xl transform hover:scale-105 transition-all duration-500"
              placeholder={false}
            />
            
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-blue-500/10 rounded-xl sm:rounded-2xl"></div>
          </div>
          
          {/* Indicadores profissionais */}
          <div className="absolute -top-2 -left-2 px-2 sm:px-3 py-1 bg-emerald-500/90 backdrop-blur text-white text-xs font-medium rounded-full border border-emerald-400/50">
            Disponível
          </div>
          
          <div className="absolute -bottom-2 -right-2 px-2 sm:px-3 py-1 bg-blue-500/90 backdrop-blur text-white text-xs font-medium rounded-full border border-blue-400/50">
            Frontend
          </div>
        </div>
      </div>
    </header>
  );
}