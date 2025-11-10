'use client';

import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfileImage from '../ProfileImage';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function HeroSection() {
  const [visitCount, setVisitCount] = useState(0);
  const { theme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
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
      {/* Futuristic Background with Grid */}
      <div className="absolute inset-0 tech-grid">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2a] to-[#0a1a2a]' 
            : 'bg-gradient-to-br from-[#f0f4ff] via-[#e8f0ff] to-[#f0e8ff]'
        }`}></div>
        
        {/* Animated Scan Lines */}
        <div className="scanline-effect absolute inset-0" />
        
        {/* Geometric Corner Accents */}
        <div className="hidden md:block absolute top-20 left-10 w-32 h-32 border-2 border-cyan-400/30" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 30%, 70% 30%, 70% 70%, 30% 70%, 30% 100%, 0 100%)'
        }} />
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-magenta-400/30" style={{
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 30% 70%, 30% 30%, 70% 30%, 70% 0)'
        }} />
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
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{'<'}</span>
              {t('hero.greeting')}
              <br />
              {t('hero.iam')}{' '}
              <span className="neon-text-cyan relative">
                Carlos Henrique
              </span>
              <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{' />'}</span>
            </motion.h1>
            
            <motion.p 
              className={`text-base sm:text-lg md:text-xl font-semibold mb-2 font-mono ${
                theme === 'dark' ? 'text-green-400' : 'text-green-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-magenta-400">const</span> role = <span className="neon-text-green">&quot;{t('hero.role')}&quot;</span>;
            </motion.p>
            
            <motion.p 
              className={`text-xs sm:text-sm mb-6 sm:mb-8 font-mono ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('hero.tagline')}
            </motion.p>
            
            <motion.a 
              href="#about" 
              className="futuristic-btn inline-block relative px-6 sm:px-8 py-2 sm:py-3 rounded font-semibold text-sm sm:text-base mb-6 sm:mb-8 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              aria-label={t('hero.cta')}
            >
              <span className="relative z-10">{t('hero.cta')} ➔</span>
            </motion.a>
            
            {/* Social Links com cores mais profissionais */}
            <motion.div 
              className="flex gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a 
                href="https://www.linkedin.com/in/carlos-henriqueti/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="Perfil no LinkedIn"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-white transition-all duration-300 cyber-border bg-gradient-to-br from-blue-500/20 to-cyan-500/20 hover:from-blue-500/40 hover:to-cyan-500/40 backdrop-blur-sm"
                style={{ boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
              </motion.a>
              <motion.a 
                href="https://github.com/CarlosHenriqueTI" 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub Profile"
                aria-label="Perfil no GitHub"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-white transition-all duration-300 cyber-border bg-gradient-to-br from-gray-500/20 to-purple-500/20 hover:from-gray-500/40 hover:to-purple-500/40 backdrop-blur-sm"
                style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
              </motion.a>
              <motion.a 
                href="mailto:carloshenriqueti09@gmail.com"
                title="Send Email"
                aria-label="Enviar email"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-white transition-all duration-300 cyber-border bg-gradient-to-br from-pink-500/20 to-magenta-500/20 hover:from-pink-500/40 hover:to-magenta-500/40 backdrop-blur-sm"
                style={{ boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
              </motion.a>
            </motion.div>

            {/* Contador de Visitas */}
            <motion.div 
              className={`mt-6 sm:mt-8 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm border transition-all duration-300 glass-card ${
                theme === 'dark' 
                  ? 'bg-slate-800/50 border-slate-700/50 text-gray-300' 
                  : 'bg-white/80 border-gray-200/50 text-gray-700'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Eye size={14} className={`sm:w-4 sm:h-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium">
                {visitCount > 0 ? (
                  <>
                    <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>
                      {visitCount.toLocaleString()}
                    </span>
                    {' '}
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      {visitCount === 1 ? t('hero.visit') : t('hero.visits')}
                    </span>
                  </>
                ) : (
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {t('hero.loading')}
                  </span>
                )}
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar Profissional */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Gradiente de fundo profissional azul-roxo */}
              <motion.div 
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full absolute -z-10 -top-4 -left-4 shadow-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Container da imagem com borda sutil */}
              <motion.div 
                className={`w-56 h-56 sm:w-72 sm:h-72 lg:w-88 lg:h-88 rounded-full overflow-hidden relative border-4 ${
                  theme === 'dark' 
                    ? 'border-slate-700 bg-slate-800 shadow-2xl' 
                    : 'border-white bg-white shadow-2xl'
                }`}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <ProfileImage
                  src="/perfil.png"
                  alt="Carlos Henrique - Desenvolvedor Frontend"
                  width={350}
                  height={350}
                  className="w-full h-full object-cover object-center"
                  placeholder={false}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
