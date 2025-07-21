'use client';

import React from 'react';
import { Code } from 'lucide-react';
import { projectsData } from '../../lib/data';
import ImageCarousel from '../ImageCarousel';
import { useTheme } from '../../context/ThemeContext';

export default function Projects() {
  const { theme } = useTheme();
  
  return (
    <section id="projects" className="min-h-screen flex items-center relative overflow-hidden py-20">
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
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 ${
            theme === 'dark' 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
          }`}>
            Meus Projetos
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className={`text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto px-2 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Alguns dos projetos que desenvolvi aplicando conhecimentos em React, TypeScript e outras tecnologias
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className={`rounded-lg sm:rounded-xl shadow-lg border transform hover:scale-105 transition-all duration-300 overflow-hidden group ${
              theme === 'dark' 
                ? 'bg-slate-800/50 backdrop-blur border-slate-700/50 hover:border-blue-500/30' 
                : 'bg-white/90 backdrop-blur border-gray-200 hover:border-purple-400/50'
            }`}>
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
                <h3 className={`text-base sm:text-lg lg:text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-blue-300' : 'text-blue-600'
                }`}>{project.name}</h3>
                <p className={`mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.techs.map((tech, techIndex) => (
                    <span key={techIndex} className={`text-xs font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 hover:border-blue-400/50' 
                        : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-300 hover:border-blue-400'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`inline-flex items-center justify-center px-3 sm:px-4 py-2 font-semibold rounded-lg transition-all duration-300 text-center text-sm group-hover:shadow-lg transform group-hover:-translate-y-0.5 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 group-hover:shadow-blue-500/25' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 group-hover:shadow-blue-400/25'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">Ver Projeto</span>
                    <Code size={14} className="ml-2 sm:w-[18px] sm:h-[18px]" />
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
                        Acesso Admin
                      </a>
                      <div className={`mt-1 ${
                        theme === 'dark' ? 'text-gray-600' : 'text-gray-500'
                      }`}>{project.adminCreds}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
