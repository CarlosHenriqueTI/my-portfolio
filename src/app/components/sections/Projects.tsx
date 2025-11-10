'use client';

import React from 'react';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectsData } from '../../lib/data';
import ImageCarousel from '../ImageCarousel';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Projects() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };
  
  return (
    <section id="projects" className="min-h-screen flex items-center relative overflow-hidden py-20">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 tech-grid ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2a] to-[#0a1a2a]' 
            : 'bg-gradient-to-br from-[#f0f4ff] via-[#e8f0ff] to-[#f0e8ff]'
        }`}></div>
        <div className="scanline-effect"></div>
      </div>

      {/* Geometric Accents - Hidden on mobile */}
      <div className="hidden md:block absolute top-10 right-10 geometric-corner opacity-30" style={{ width: '64px', height: '64px' }}></div>
      <div className="hidden md:block absolute bottom-10 left-10 geometric-corner opacity-30" style={{ width: '48px', height: '48px', transform: 'rotate(180deg)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 font-mono neon-text-magenta">
            <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{'<'}</span>
            {t('projects.title')}
            <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{'/>'}</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-magenta-400 to-purple-400 mx-auto rounded-full" style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)' }}></div>
          <p className={`text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto px-2 font-mono ${
            theme === 'dark' ? 'text-cyan-200' : 'text-cyan-700'
          }`}>
            {t('projects.description')}
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index} 
              className="neon-card rounded-lg sm:rounded-xl overflow-hidden group hover-lift"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Carousel de Imagens */}
              <div className="relative">
                <ImageCarousel 
                  images={project.images} 
                  projectName={project.name}
                />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-t from-slate-900/50 via-transparent to-transparent' 
                    : 'bg-gradient-to-t from-blue-50/30 via-transparent to-transparent'
                }`}></div>
              </div>
              
              {/* Conteúdo do Card */}
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className={`text-base sm:text-lg lg:text-xl font-semibold mb-2 font-mono transition-colors duration-300 ${
                  theme === 'dark' ? 'neon-text-cyan group-hover:text-cyan-300' : 'text-cyan-600 group-hover:text-cyan-700'
                }`}>{project.name}</h3>
                <p className={`mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed font-mono ${
                  theme === 'dark' ? 'text-cyan-200' : 'text-cyan-700'
                }`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.techs.map((tech, techIndex) => (
                    <span key={techIndex} className={`text-xs font-medium font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded border transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 text-cyan-300 border-cyan-500/50 hover:border-magenta-400/70' 
                        : 'bg-gradient-to-r from-cyan-100 to-magenta-100 text-cyan-700 border-cyan-300 hover:border-magenta-400'
                    }`} style={{ boxShadow: '0 0 5px rgba(0, 240, 255, 0.2)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="futuristic-btn inline-flex items-center justify-center px-3 sm:px-4 py-2 font-semibold font-mono rounded transition-all duration-300 text-center text-sm relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 text-xs sm:text-sm">{t('projects.viewProject')}</span>
                    <Code size={14} className="ml-2 sm:w-[18px] sm:h-[18px] relative z-10" />
                  </a>
                  
                  {project.adminLink && (
                    <div className={`text-xs text-center rounded-lg p-2 border ${
                      theme === 'dark' 
                        ? 'text-gray-500 bg-gray-800/50 border-gray-700/30' 
                        : 'text-gray-600 bg-gray-50 border-gray-200'
                    }`}>
                      <a href={project.adminLink} target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 hover:underline ${
                        theme === 'dark' ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-500'
                      }`}>
                        {t('projects.adminAccess')}
                      </a>
                      <div className={`mt-1 ${
                        theme === 'dark' ? 'text-gray-600' : 'text-gray-500'
                      }`}>{project.adminCreds}</div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
