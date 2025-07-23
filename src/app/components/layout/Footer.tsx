'use client';

import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className="py-16 relative overflow-hidden">
      {/* Gradiente de fundo sutil azul-roxo */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/10' 
            : 'bg-gradient-to-br from-blue-50/20 via-indigo-50/10 to-purple-50/20'
        }`}></div>
      </div>

      {/* Background Pattern Sutil */}
      <div className="absolute inset-0 opacity-10">
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
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 800">
          <line x1="80" y1="160" x2="256" y2="256" stroke={theme === 'dark' ? '#3B82F6' : '#6366F1'} strokeWidth="0.3" opacity="0.3"/>
          <line x1="256" y1="256" x2="800" y2="160" stroke={theme === 'dark' ? '#8B5CF6' : '#8B5CF6'} strokeWidth="0.3" opacity="0.3"/>
          <line x1="160" y1="640" x2="640" y2="480" stroke={theme === 'dark' ? '#6366F1' : '#3B82F6'} strokeWidth="0.3" opacity="0.3"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Logo ou Nome */}
          <div className="mb-4 sm:mb-6">
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${
              theme === 'dark' 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
            }`}>
              Carlos Henrique
            </h3>
            <p className={`text-xs sm:text-sm mt-1 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>Desenvolvedor Frontend Júnior</p>
          </div>

          {/* Divisor */}
          <div className={`border-t pt-4 sm:pt-6 ${
            theme === 'dark' ? 'border-gray-700/50' : 'border-gray-300/50'
          }`}>
            {/* Feito com amor */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              <div className="flex items-center gap-1">
                <span>Feito com</span>
                <Heart size={12} className="text-red-400 animate-pulse sm:w-[14px] sm:h-[14px]" />
                <span>e</span>
                <Coffee size={12} className="text-yellow-600 sm:w-[14px] sm:h-[14px]" />
              </div>
              <div className="flex items-center gap-1">
                <span>usando</span>
                <Code size={12} className={`sm:w-[14px] sm:h-[14px] ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                }`} />
                <span>React & Next.js</span>
              </div>
            </div>

            {/* Copyright */}
            <p className={`text-xs sm:text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              &copy; {new Date().getFullYear()} Carlos Henrique de Oliveira Henrique. Todos os direitos reservados.
            </p>
            
            {/* Status disponibilidade */}
            <div className="mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                Disponível para oportunidades
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}