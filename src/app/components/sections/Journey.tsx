'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Users } from 'lucide-react';
import { educationData, experienceData } from '../../lib/data'; // Importa os dados
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Journey() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="journey" 
      className="min-h-screen flex items-center relative overflow-hidden py-20"
    >
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
      <div className="hidden md:block absolute top-10 left-10 geometric-corner opacity-30" style={{ width: '48px', height: '48px' }}></div>
      <div className="hidden md:block absolute bottom-10 right-10 geometric-corner opacity-30" style={{ width: '64px', height: '64px', transform: 'rotate(180deg)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 font-mono neon-text-magenta">
              <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{'<'}</span>
              {t('journey.title')}
              <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{'/>'}</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-magenta-400 to-purple-400 mx-auto rounded-full" style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)' }}></div>
            <p className={`text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto px-2 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('journey.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Educação */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-lg cyber-border bg-gradient-to-r from-cyan-500/20 to-green-500/20" style={{ boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)' }}>
                  <GraduationCap className="w-[18px] h-[18px] sm:w-6 sm:h-6 neon-text-cyan" />
                </div>
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold font-mono ${
                  theme === 'dark' ? 'neon-text-cyan' : 'text-cyan-600'
                }`}>{t('journey.education')}</h3>
              </div>
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {educationData.map((item, index) => (
                  <div 
                    key={index} 
                    className={`group neon-card p-3 sm:p-4 lg:p-5 rounded-lg transition-all duration-300 hover-lift ${
                      index === 0 ? 'delay-[400ms]' : 
                      index === 1 ? 'delay-[600ms]' : 
                      'delay-[800ms]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3">
                      <div className="flex-1">
                        <p className={`text-sm sm:text-base lg:text-lg font-semibold font-mono transition-colors duration-300 ${
                          theme === 'dark' ? 'neon-text-cyan group-hover:text-cyan-300' : 'text-cyan-600 group-hover:text-cyan-700'
                        }`}>
                          {item.course}
                        </p>
                        <div className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mt-1 font-mono ${
                          theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                        }`}>
                          <MapPin size={12} className="sm:w-4 sm:h-4" />
                          <span>{item.institution}</span>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mt-1 sm:mt-0 font-mono ${
                        theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                      }`}>
                        <Calendar size={12} className="sm:w-4 sm:h-4" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1 sm:space-y-2">
                      <h4 className={`text-xs sm:text-sm font-medium font-mono mb-1 sm:mb-2 ${
                        theme === 'dark' ? 'text-green-300' : 'text-green-700'
                      }`}>Principais conceitos:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                        {item.concepts.map((concept, cIndex) => (
                          <div key={cIndex} className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-mono ${
                            theme === 'dark' ? 'text-cyan-200' : 'text-cyan-700'
                          }`}>
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full neon-text-cyan" style={{ boxShadow: '0 0 5px rgba(0, 240, 255, 0.8)' }}></div>
                            <span>{concept}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>

            {/* Experiência */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-lg cyber-border bg-gradient-to-r from-magenta-500/20 to-purple-500/20" style={{ boxShadow: '0 0 15px rgba(255, 0, 255, 0.3)' }}>
                  <Briefcase className="w-[18px] h-[18px] sm:w-6 sm:h-6 neon-text-magenta" />
                </div>
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold font-mono ${
                  theme === 'dark' ? 'neon-text-magenta' : 'text-magenta-600'
                }`}>{t('journey.experience')}</h3>
              </div>
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {experienceData.map((item, index) => (
                  <div 
                    key={index} 
                    className={`group neon-card p-3 sm:p-4 lg:p-5 rounded-lg transition-all duration-300 hover-lift ${
                      index === 0 ? 'delay-[600ms]' : 
                      index === 1 ? 'delay-[800ms]' : 
                      'delay-1000'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3">
                      <div className="flex-1">
                        <p className={`text-sm sm:text-base lg:text-lg font-semibold font-mono transition-colors duration-300 ${
                          theme === 'dark' ? 'neon-text-magenta group-hover:text-magenta-300' : 'text-magenta-600 group-hover:text-magenta-700'
                        }`}>
                          {item.title}
                        </p>
                        <div className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mt-1 font-mono ${
                          theme === 'dark' ? 'text-magenta-300' : 'text-magenta-700'
                        }`}>
                          <Users size={12} className="sm:w-4 sm:h-4" />
                          <span>{item.company}</span>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mt-1 sm:mt-0 font-mono ${
                        theme === 'dark' ? 'text-magenta-400' : 'text-magenta-600'
                      }`}>
                        <Calendar size={12} className="sm:w-4 sm:h-4" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    
                    <p className={`text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed font-mono ${
                      theme === 'dark' ? 'text-magenta-200' : 'text-magenta-700'
                    }`}>
                      {item.descriptionIntro}
                    </p>
                    
                    <div className="space-y-1 sm:space-y-2">
                      <h4 className={`text-xs sm:text-sm font-medium font-mono mb-1 sm:mb-2 ${
                        theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
                      }`}>Principais responsabilidades:</h4>
                      <div className="space-y-1">
                        {item.responsibilities.map((resp, rIndex) => (
                          <div key={rIndex} className={`flex items-start gap-1 sm:gap-2 text-xs sm:text-sm font-mono ${
                            theme === 'dark' ? 'text-magenta-200' : 'text-magenta-700'
                          }`}>
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 neon-text-magenta" style={{ boxShadow: '0 0 5px rgba(255, 0, 255, 0.8)' }}></div>
                            <span className="leading-relaxed">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>

          {/* Timeline de destaque */}
          <div className={`mt-6 sm:mt-8 lg:mt-10 pt-6 sm:pt-8 border-t transition-all duration-1000 delay-800 ${
            theme === 'dark' ? 'border-gray-700/50' : 'border-gray-300/50'
          } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Principais Conquistas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              <div className={`text-center p-3 sm:p-4 rounded-lg sm:rounded-xl border group transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800/30 border-gray-700/30 hover:border-blue-500/30' 
                  : 'bg-white/50 border-gray-200 hover:border-blue-400/50'
              }`}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">6</div>
                <div className={`text-xs sm:text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Anos de Liderança</div>
              </div>
              
              <div className={`text-center p-3 sm:p-4 rounded-lg sm:rounded-xl border group transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800/30 border-gray-700/30 hover:border-purple-500/30' 
                  : 'bg-white/50 border-gray-200 hover:border-purple-400/50'
              }`}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">2+</div>
                <div className={`text-xs sm:text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Anos em Tech</div>
              </div>
              
              <div className={`text-center p-3 sm:p-4 rounded-lg sm:rounded-xl border group transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800/30 border-gray-700/30 hover:border-emerald-500/30' 
                  : 'bg-white/50 border-gray-200 hover:border-emerald-400/50'
              }`}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-400 mb-1 sm:mb-2">100%</div>
                <div className={`text-xs sm:text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Comprometimento</div>
              </div>
              
              <div className={`text-center p-3 sm:p-4 rounded-lg sm:rounded-xl border group transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800/30 border-gray-700/30 hover:border-amber-500/30' 
                  : 'bg-white/50 border-gray-200 hover:border-amber-400/50'
              }`}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-400 mb-1 sm:mb-2">∞</div>
                <div className={`text-xs sm:text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Evolução</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}