'use client';

import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  return (
    <footer className="py-16 relative overflow-hidden border-t cyber-border">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 tech-grid ${
          theme === 'dark' 
            ? 'bg-gradient-to-t from-[#0a0a1a] to-[#1a0a2a]' 
            : 'bg-gradient-to-t from-[#f0f4ff] to-[#e8f0ff]'
        }`}></div>
        <div className="scanline-effect"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Logo ou Nome */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-mono neon-text-cyan">
              <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{'<'}</span>
              Carlos Henrique
              <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{'/>'}</span>
            </h3>
            <p className={`text-xs sm:text-sm mt-1 font-mono ${
              theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'
            }`}>{'// '} Desenvolvedor Frontend Júnior</p>
          </div>

          {/* Divisor */}
          <div className={`border-t pt-4 sm:pt-6 ${
            theme === 'dark' ? 'border-gray-700/50' : 'border-gray-300/50'
          }`}>
            {/* Feito com amor */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm font-mono ${
              theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
            }`}>
              <div className="flex items-center gap-1">
                <span>{t('footer.madeWith')}</span>
                <Heart size={12} className="text-magenta-400 animate-pulse sm:w-[14px] sm:h-[14px]" style={{ filter: 'drop-shadow(0 0 4px rgba(255, 0, 255, 0.6))' }} />
                <span>{t('footer.and')}</span>
                <Coffee size={12} className="text-yellow-400 sm:w-[14px] sm:h-[14px]" style={{ filter: 'drop-shadow(0 0 4px rgba(255, 255, 0, 0.6))' }} />
              </div>
              <div className="flex items-center gap-1">
                <span>{t('footer.using')}</span>
                <Code size={12} className="neon-text-cyan sm:w-[14px] sm:h-[14px]" />
                <span>React & Next.js</span>
              </div>
            </div>

            {/* Copyright */}
            <p className={`text-xs sm:text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              &copy; {new Date().getFullYear()} Carlos Henrique de Oliveira Henrique. {t('footer.copyright')}
            </p>
            
            {/* Status disponibilidade */}
            <div className="mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 bg-green-500/20 rounded text-xs cyber-border font-mono" style={{ boxShadow: '0 0 10px rgba(0, 255, 136, 0.3)' }}>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" style={{ boxShadow: '0 0 5px rgba(0, 255, 136, 0.8)' }}></div>
                <span className="neon-text-green">{t('footer.availability')}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}