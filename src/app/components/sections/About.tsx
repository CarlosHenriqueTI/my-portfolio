'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, GraduationCap, Target, Heart } from 'lucide-react';
import ProfileImage from '../ProfileImage';
import { useTheme } from '../../context/ThemeContext';

export default function About() {
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

  const stats = [
    { icon: <Calendar className="text-blue-500" size={20} />, label: 'Idade', value: '25 anos' },
    { icon: <MapPin className="text-indigo-500" size={20} />, label: 'Localização', value: 'RS, Brasil' },
    { icon: <GraduationCap className="text-purple-500" size={20} />, label: 'Formação', value: 'ADS - UniSenac' },
    { icon: <Target className="text-blue-600" size={20} />, label: 'Foco', value: 'Frontend React' }
  ];

  const highlights = [
    {
      icon: '💻',
      title: 'Desenvolvimento Frontend',
      description: 'Especializado em React.js, TypeScript e desenvolvimento de interfaces modernas e responsivas'
    },
    {
      icon: '🎯',
      title: 'Transição de Carreira',
      description: 'Do Exército para a tecnologia, aplicando disciplina militar aos desafios do desenvolvimento'
    },
    {
      icon: '🚀',
      title: 'Aprendizado Contínuo',
      description: 'Comprometido com a evolução constante e implementação das melhores práticas de desenvolvimento'
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
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
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
              theme === 'dark' 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
            }`}>
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Sou um desenvolvedor frontend apaixonado por criar experiências digitais excepcionais. 
                Com uma base sólida em React.js, TypeScript e design responsivo, transformo ideias em 
                interfaces funcionais e atraentes.
              </p>
              
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Minha jornada na tecnologia começou com uma transição de carreira do exército, 
                trazendo disciplina e dedicação para cada projeto que desenvolvo.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className={`rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow duration-300 ${
                  theme === 'dark' 
                    ? 'bg-slate-800/50 backdrop-blur border-slate-700/50 hover:border-blue-500/30' 
                    : 'bg-white/90 backdrop-blur border-gray-100 hover:border-purple-400/50'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    {stat.icon}
                    <span className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>{stat.label}</span>
                  </div>
                  <p className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Heart size={20} />
                Vamos Trabalhar Juntos
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className={`w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 ${
                theme === 'dark' 
                  ? 'border-slate-700 bg-slate-800' 
                  : 'border-white bg-white'
              }`}>
                <ProfileImage
                  src="/perfil-2.jpg"
                  alt="Carlos Henrique - About"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  placeholder={false}
                />
              </div>
              
              {/* Decorative Elements com gradiente azul-roxo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {highlight.title}
                </h3>
                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
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
