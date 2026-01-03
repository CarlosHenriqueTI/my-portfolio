'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Code, Award, Zap, TrendingUp, Monitor, Palette, GitBranch, Globe, Smartphone, Puzzle, Users, Search, Bolt } from 'lucide-react';
import { skillsData } from '../../lib/data';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{coding: boolean[], professional: boolean[]}>({
    coding: new Array(skillsData.coding.length).fill(false),
    professional: new Array(skillsData.professional.length).fill(false)
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const { t } = useLanguage();

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
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 rounded-lg cyber-border bg-gradient-to-r from-cyan-500/20 to-magenta-500/20" style={{ boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)' }}>
                <TrendingUp className="neon-text-cyan" size={16} />
              </div>
              <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-mono neon-text-magenta">
                <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{'<'}</span>
                {t('skills.title')}
                <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{'/>'}</span>
              </h2>
              <div className="p-2 sm:p-3 rounded-lg cyber-border bg-gradient-to-r from-magenta-500/20 to-purple-500/20" style={{ boxShadow: '0 0 15px rgba(255, 0, 255, 0.3)' }}>
                <Zap className="neon-text-magenta" size={16} />
              </div>
            </div>
            <p className={`text-sm sm:text-base max-w-2xl mx-auto px-2 leading-relaxed font-mono ${
              theme === 'dark' ? 'text-cyan-200' : 'text-cyan-700'
            }`}>
              {'// '} Expertise técnica e habilidades interpessoais
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Habilidades Técnicas */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-lg cyber-border bg-gradient-to-r from-cyan-500/20 to-green-500/20" style={{ boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)' }}>
                  <Code className="w-[18px] h-[18px] sm:w-6 sm:h-6 neon-text-cyan" />
                </div>
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold font-mono ${
                  theme === 'dark' ? 'neon-text-cyan' : 'text-cyan-600'
                }`}>{t('skills.tech')}</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {skillsData.coding.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`group neon-card p-3 sm:p-4 rounded-lg transition-all duration-500 ${animatedSkills.coding[index] ? 'animate-slideInLeft' : 'opacity-0'}`}
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
                      theme === 'dark' ? 'bg-gray-900/50 border border-cyan-500/20' : 'bg-gray-200 border border-cyan-300'
                    }`}>
                      <div
                        className={`h-full bg-gradient-to-r from-cyan-400 via-green-400 to-emerald-400 rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${getSkillWidthClass(skill.level, animatedSkills.coding[index])} ${getSkillDelayClass(index)}`}
                        style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(16, 185, 129, 0.3)' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Habilidades Profissionais */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-lg cyber-border bg-gradient-to-r from-magenta-500/20 to-purple-500/20" style={{ boxShadow: '0 0 15px rgba(255, 0, 255, 0.3)' }}>
                  <Award className="w-[18px] h-[18px] sm:w-6 sm:h-6 neon-text-magenta" />
                </div>
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold font-mono ${
                  theme === 'dark' ? 'neon-text-magenta' : 'text-magenta-600'
                }`}>{t('skills.soft')}</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {skillsData.professional.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`group neon-card p-3 sm:p-4 rounded-lg transition-all duration-500 ${animatedSkills.professional[index] ? 'animate-slideInRight' : 'opacity-0'}`}
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
                      theme === 'dark' ? 'bg-gray-900/50 border border-cyan-500/20' : 'bg-gray-200 border border-cyan-300'
                    }`}>
                      <div
                        className={`h-full bg-gradient-to-r from-cyan-400 via-magenta-400 to-purple-400 rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${getSkillWidthClass(skill.level, animatedSkills.professional[index])} ${getSkillDelayClass(index, 300)}`}
                        style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3)' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-shimmer"></div>
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
