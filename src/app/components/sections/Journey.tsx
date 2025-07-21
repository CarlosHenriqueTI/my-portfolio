'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Users } from 'lucide-react';
import { educationData, experienceData } from '../../lib/data'; // Importa os dados
import { useTheme } from '../../context/ThemeContext';

export default function Journey() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

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
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h2 className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 ${
              theme === 'dark' 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
            }`}>
              Trajetória Profissional
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className={`text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto px-2 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Uma transição estratégica da liderança militar para a inovação tecnológica
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Educação */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-blue-500/30' 
                    : 'bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-300'
                }`}>
                  <GraduationCap className={`w-[18px] h-[18px] sm:w-6 sm:h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Formação Acadêmica</h3>
              </div>
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {educationData.map((item, index) => (
                  <div 
                    key={index} 
                    className={`group p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl border shadow-lg transition-all duration-300 transform hover:scale-105 ${
                      theme === 'dark' 
                        ? 'bg-gray-800/50 backdrop-blur border-gray-700/50 hover:border-blue-500/30' 
                        : 'bg-white/90 backdrop-blur border-gray-200 hover:border-blue-400/50'
                    } ${
                      index === 0 ? 'delay-[400ms]' : 
                      index === 1 ? 'delay-[600ms]' : 
                      'delay-[800ms]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3">
                      <div className="flex-1">
                        <p className={`text-sm sm:text-base lg:text-lg font-semibold group-hover:text-blue-200 transition-colors duration-300 ${
                          theme === 'dark' ? 'text-blue-300' : 'text-blue-600'
                        }`}>
                          {item.course}
                        </p>
                        <div className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mt-1 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <MapPin size={12} className="sm:w-4 sm:h-4" />
                          <span>{item.institution}</span>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mt-1 sm:mt-0 ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                      }`}>
                        <Calendar size={12} className="sm:w-4 sm:h-4" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1 sm:space-y-2">
                      <h4 className={`text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>Principais conceitos:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                        {item.concepts.map((concept, cIndex) => (
                          <div key={cIndex} className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full"></div>
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
                <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-purple-500/20 to-violet-500/20 border-purple-500/30' 
                    : 'bg-gradient-to-r from-purple-100 to-violet-100 border-purple-300'
                }`}>
                  <Briefcase className={`w-[18px] h-[18px] sm:w-6 sm:h-6 ${
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                </div>
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Experiência Profissional</h3>
              </div>
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {experienceData.map((item, index) => (
                  <div 
                    key={index} 
                    className={`group p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl border shadow-lg transition-all duration-300 transform hover:scale-105 ${
                      theme === 'dark' 
                        ? 'bg-gray-800/50 backdrop-blur border-gray-700/50 hover:border-purple-500/30' 
                        : 'bg-white/90 backdrop-blur border-gray-200 hover:border-purple-400/50'
                    } ${
                      index === 0 ? 'delay-[600ms]' : 
                      index === 1 ? 'delay-[800ms]' : 
                      'delay-1000'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3">
                      <div className="flex-1">
                        <p className={`text-sm sm:text-base lg:text-lg font-semibold group-hover:text-purple-200 transition-colors duration-300 ${
                          theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
                        }`}>
                          {item.title}
                        </p>
                        <div className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mt-1 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Users size={12} className="sm:w-4 sm:h-4" />
                          <span>{item.company}</span>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mt-1 sm:mt-0 ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                      }`}>
                        <Calendar size={12} className="sm:w-4 sm:h-4" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    
                    <p className={`text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.descriptionIntro}
                    </p>
                    
                    <div className="space-y-1 sm:space-y-2">
                      <h4 className={`text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>Principais responsabilidades:</h4>
                      <div className="space-y-1">
                        {item.responsibilities.map((resp, rIndex) => (
                          <div key={rIndex} className={`flex items-start gap-1 sm:gap-2 text-xs sm:text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
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