'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, GraduationCap, Target, Heart } from 'lucide-react';
import ProfileImage from '../ProfileImage';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function About() {
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

  const stats = [
    { icon: <Calendar className="text-blue-500" size={20} />, label: t('about.age'), value: t('about.ageValue') },
    { icon: <MapPin className="text-indigo-500" size={20} />, label: t('about.location'), value: t('about.locationValue') },
    { icon: <GraduationCap className="text-purple-500" size={20} />, label: t('about.education'), value: t('about.educationValue') },
    { icon: <Target className="text-blue-600" size={20} />, label: t('about.focus'), value: t('about.focusValue') }
  ];

  const highlights = [
    {
      icon: '💻',
      title: t('about.highlight1.title'),
      description: t('about.highlight1.description')
    },
    {
      icon: '🎯',
      title: t('about.highlight2.title'),
      description: t('about.highlight2.description')
    },
    {
      icon: '🚀',
      title: t('about.highlight3.title'),
      description: t('about.highlight3.description')
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
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
      <div className="hidden md:block absolute top-10 right-10 geometric-corner opacity-30" style={{ width: '64px', height: '64px' }}></div>
      <div className="hidden md:block absolute bottom-10 left-10 geometric-corner opacity-30" style={{ width: '48px', height: '48px', transform: 'rotate(180deg)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-mono neon-text-magenta">
              <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{'<'}</span>
              {t('about.title')}
              <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}>{'/>'}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-magenta-400 to-purple-400 mx-auto rounded-full" style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)' }}></div>
          </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <p className={`text-sm sm:text-base lg:text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t('about.description1')}
              </p>
              
              <p className={`text-sm sm:text-base lg:text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t('about.description2')}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="neon-card rounded-xl p-4 sm:p-6 transition-all duration-300 hover-lift">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="p-1.5 sm:p-2 rounded cyber-border bg-gradient-to-br from-cyan-500/20 to-magenta-500/20" style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.2)' }}>
                      {React.cloneElement(stat.icon, { size: 16, className: `${stat.icon.props.className} sm:w-5 sm:h-5` })}
                    </div>
                    <span className={`text-xs sm:text-sm font-medium font-mono ${
                      theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'
                    }`}>{stat.label}</span>
                  </div>
                  <p className={`text-sm sm:text-base lg:text-lg font-semibold font-mono ${
                    theme === 'dark' ? 'neon-text-cyan' : 'text-cyan-700'
                  }`}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="#contact" 
                className="futuristic-btn inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base font-semibold font-mono transition-all duration-300 relative overflow-hidden group"
              >
                <Heart size={18} className="relative z-10 sm:w-5 sm:h-5" />
                <span className="relative z-10">{t('about.cta')}</span>
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden cyber-border relative" style={{ boxShadow: '0 0 30px rgba(0, 240, 255, 0.3), 0 0 60px rgba(255, 0, 255, 0.2)' }}>
                <ProfileImage
                  src="/perfil-2.jpg"
                  alt="Carlos Henrique - About"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  placeholder={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-magenta-500/20 pointer-events-none"></div>
              </div>
              
              {/* Decorative Elements - Futuristic - Hidden on mobile */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-magenta-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 20px rgba(0, 240, 255, 0.6)' }}></div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-magenta-500 to-purple-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 15px rgba(255, 0, 255, 0.6)' }}></div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="neon-card text-center group p-5 sm:p-6 rounded-xl hover-lift">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
                  {highlight.icon}
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 font-mono ${
                  theme === 'dark' ? 'neon-text-cyan' : 'text-cyan-700'
                }`}>
                  {highlight.title}
                </h3>
                <p className={`leading-relaxed font-mono text-xs sm:text-sm ${
                  theme === 'dark' ? 'text-cyan-200' : 'text-cyan-600'
                }`}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
