'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Code, Award, Zap, TrendingUp, Monitor, Palette, GitBranch, Globe, Smartphone, Puzzle, Users, Search, Bolt } from 'lucide-react';
import { skillsData } from '../../lib/data';
import { useTheme } from '../../context/ThemeContext';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{coding: boolean[], professional: boolean[]}>({
    coding: new Array(skillsData.coding.length).fill(false),
    professional: new Array(skillsData.professional.length).fill(false)
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animar skills com delay escalonado
          skillsData.coding.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => ({
                ...prev,
                coding: prev.coding.map((_, i) => i === index ? true : prev.coding[i])
              }));
            }, index * 200);
          });
          
          skillsData.professional.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => ({
                ...prev,
                professional: prev.professional.map((_, i) => i === index ? true : prev.professional[i])
              }));
            }, index * 200 + 100);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillIcon = (skillName: string) => {
    const icons: {[key: string]: React.ReactNode} = {
      'JavaScript': <Monitor className="text-blue-400" size={14} />,
      'TypeScript': <Code className="text-indigo-400" size={14} />,
      'React.js': <Code className="text-purple-400" size={14} />,
      'HTML5': <Globe className="text-blue-500" size={14} />,
      'CSS3': <Palette className="text-indigo-500" size={14} />,
      'Git': <GitBranch className="text-purple-500" size={14} />,
      'Consumo de APIs': <Zap className="text-blue-600" size={14} />,
      'Design Responsivo': <Smartphone className="text-indigo-600" size={14} />,
      'Resolução de Problemas': <Puzzle className="text-purple-600" size={14} />,
      'Trabalho em Equipe': <Users className="text-blue-400" size={14} />,
      'Atenção aos Detalhes': <Search className="text-indigo-400" size={14} />,
      'Proatividade': <Bolt className="text-purple-400" size={14} />
    };
    return icons[skillName] || <Code className="text-gray-400" size={14} />;
  };

  const getSkillGradient = (level: number) => {
    if (level >= 90) return 'from-blue-500 to-purple-500';
    if (level >= 80) return 'from-indigo-500 to-blue-500';
    if (level >= 70) return 'from-purple-500 to-indigo-500';
    return 'from-blue-600 to-purple-600';
  };

  const getSkillWidthClass = (level: number, isAnimated: boolean) => {
    if (!isAnimated) return 'skill-fill-0';
    if (level >= 95) return 'skill-fill-95';
    if (level >= 90) return 'skill-fill-90';
    if (level >= 85) return 'skill-fill-85';
    if (level >= 80) return 'skill-fill-80';
    if (level >= 75) return 'skill-fill-75';
    return 'skill-fill-70';
  };

  const getSkillDelayClass = (index: number, baseDelay: number = 0) => {
    const totalDelay = index * 200 + baseDelay;
    if (totalDelay >= 1400) return 'skill-delay-1400';
    if (totalDelay >= 1200) return 'skill-delay-1200';
    if (totalDelay >= 1000) return 'skill-delay-1000';
    if (totalDelay >= 800) return 'skill-delay-800';
    if (totalDelay >= 600) return 'skill-delay-600';
    if (totalDelay >= 400) return 'skill-delay-400';
    if (totalDelay >= 200) return 'skill-delay-200';
    return 'skill-delay-0';
  };

  return (
    <section 
      ref={sectionRef}
      id="skills" 
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
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30' 
                  : 'bg-gradient-to-r from-blue-100 to-purple-100 border-blue-300'
              }`}>
                <TrendingUp className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={16} />
              </div>
              <h2 className={`text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold ${
                theme === 'dark' 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500' 
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
              }`}>
                Competências Técnicas
              </h2>
              <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border-purple-500/30' 
                  : 'bg-gradient-to-r from-purple-100 to-indigo-100 border-purple-300'
              }`}>
                <Zap className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} size={16} />
              </div>
            </div>
            <p className={`text-sm sm:text-base max-w-2xl mx-auto px-2 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Expertise técnica e habilidades interpessoais para desenvolvimento de soluções inovadoras
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Habilidades Técnicas */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-blue-500/30' 
                    : 'bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-300'
                }`}>
                  <Code className={`w-[18px] h-[18px] sm:w-6 sm:h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Tecnologias</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {skillsData.coding.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`group p-3 sm:p-4 rounded-lg sm:rounded-xl border shadow-lg transition-all duration-500 ${
                      theme === 'dark' 
                        ? 'bg-gray-800/50 backdrop-blur border-gray-700/50 hover:border-blue-500/30' 
                        : 'bg-white/90 backdrop-blur border-gray-200 hover:border-blue-400/50'
                    } ${animatedSkills.coding[index] ? 'animate-slideInLeft' : 'opacity-0'}`}
                  >
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="p-1.5">{getSkillIcon(skill.name)}</div>
                        <span className={`text-sm sm:text-base lg:text-lg font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className={`text-sm sm:text-base lg:text-lg font-bold ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}>{skill.level}%</span>
                        {skill.level >= 90 && <Award className="text-emerald-400" size={16} />}
                      </div>
                    </div>
                    
                    <div className={`relative w-full rounded-full h-2 sm:h-3 overflow-hidden ${
                      theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-200'
                    }`}>
                      <div className={`absolute inset-0 rounded-full ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-gray-700/30 to-gray-600/30' 
                          : 'bg-gradient-to-r from-gray-200/50 to-gray-300/50'
                      }`}></div>
                      <div
                        className={`h-full bg-gradient-to-r ${getSkillGradient(skill.level)} rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${getSkillWidthClass(skill.level, animatedSkills.coding[index])} ${getSkillDelayClass(index)}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Habilidades Profissionais */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-purple-500/20 to-violet-500/20 border-purple-500/30' 
                    : 'bg-gradient-to-r from-purple-100 to-violet-100 border-purple-300'
                }`}>
                  <Award className={`w-[18px] h-[18px] sm:w-6 sm:h-6 ${
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                </div>
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Soft Skills</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {skillsData.professional.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`group p-3 sm:p-4 rounded-lg sm:rounded-xl border shadow-lg transition-all duration-500 ${
                      theme === 'dark' 
                        ? 'bg-gray-800/50 backdrop-blur border-gray-700/50 hover:border-purple-500/30' 
                        : 'bg-white/90 backdrop-blur border-gray-200 hover:border-purple-400/50'
                    } ${animatedSkills.professional[index] ? 'animate-slideInRight' : 'opacity-0'}`}
                  >
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="p-1.5">{getSkillIcon(skill.name)}</div>
                        <span className={`text-sm sm:text-base lg:text-lg font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className={`text-sm sm:text-base lg:text-lg font-bold ${
                          theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                        }`}>{skill.level}%</span>
                        {skill.level >= 90 && <Award className="text-emerald-400" size={16} />}
                      </div>
                    </div>
                    
                    <div className={`relative w-full rounded-full h-2 sm:h-3 overflow-hidden ${
                      theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-200'
                    }`}>
                      <div className={`absolute inset-0 rounded-full ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-gray-700/30 to-gray-600/30' 
                          : 'bg-gradient-to-r from-gray-200/50 to-gray-300/50'
                      }`}></div>
                      <div
                        className={`h-full bg-gradient-to-r ${getSkillGradient(skill.level)} rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${getSkillWidthClass(skill.level, animatedSkills.professional[index])} ${getSkillDelayClass(index, 300)}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Estatísticas em destaque */}
          <div className={`mt-6 sm:mt-8 lg:mt-10 pt-6 sm:pt-8 border-t ${
            theme === 'dark' ? 'border-gray-700/50' : 'border-gray-300/50'
          }`}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              <div className={`text-center p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800/30 border-gray-700/30 hover:border-blue-500/30' 
                  : 'bg-white/50 border-gray-200 hover:border-blue-400/50'
              }`}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 mb-1">7+</div>
                <div className={`text-xs sm:text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Tecnologias</div>
              </div>
              <div className={`text-center p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800/30 border-gray-700/30 hover:border-purple-500/30' 
                  : 'bg-white/50 border-gray-200 hover:border-purple-400/50'
              }`}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">90%</div>
                <div className={`text-xs sm:text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Proficiência</div>
              </div>
              <div className={`text-center p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800/30 border-gray-700/30 hover:border-emerald-500/30' 
                  : 'bg-white/50 border-gray-200 hover:border-emerald-400/50'
              }`}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-400 mb-1">2+</div>
                <div className={`text-xs sm:text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Anos Experiência</div>
              </div>
              <div className={`text-center p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800/30 border-gray-700/30 hover:border-amber-500/30' 
                  : 'bg-white/50 border-gray-200 hover:border-amber-400/50'
              }`}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-400 mb-1">5+</div>
                <div className={`text-xs sm:text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Projetos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
