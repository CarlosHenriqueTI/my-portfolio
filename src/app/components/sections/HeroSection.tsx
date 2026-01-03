'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '../../context/ThemeContext';

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-24 pb-12" style={{
      background: theme === 'dark' 
        ? 'radial-gradient(ellipse at top, rgba(29, 78, 216, 0.15), transparent 50%), radial-gradient(ellipse at bottom, rgba(147, 51, 234, 0.1), transparent 50%)'
        : 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.12), transparent 50%), radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.08), transparent 50%), linear-gradient(180deg, #e8e8e8 0%, #dcdce0 100%)'
    }}>
      <div className="max-w-6xl w-full text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
            <Image
              src="/perfil.png"
              alt="Carlos Henrique"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Main Headline - Stockholm Style */}
        <h1 className={`text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-6 max-w-4xl mx-auto ${
          theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
        }`} style={{ letterSpacing: '-0.02em' }}>
          Sou Carlos Henrique, criando experiências digitais através do desenvolvimento frontend.
        </h1>

        {/* Subtitle */}
        <p className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-[#666666]'
        }`}>
          Desenvolvedor Frontend Júnior especializado em React, Next.js e TypeScript, transformando ideias em interfaces modernas e funcionais.
        </p>

        {/* Tabs/Role  */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className={`tag px-4 py-2 text-xs ${
            theme === 'dark' ? 'text-gray-400' : 'text-[#999999]'
          }`}>
            FRONTEND DEVELOPER
          </span>
          <span className={`tag px-4 py-2 text-xs ${
            theme === 'dark' ? 'text-gray-400' : 'text-[#999999]'
          }`}>
            REACT · NEXT.JS · TYPESCRIPT
          </span>
          <span className={`tag px-4 py-2 text-xs ${
            theme === 'dark' ? 'text-gray-400' : 'text-[#999999]'
          }`}>
            BRASIL
          </span>
          <span className={`tag px-4 py-2 text-xs ${
            theme === 'dark' ? 'text-gray-400' : 'text-[#999999]'
          }`}>
            DISPONÍVEL PARA PROJETOS
          </span>
        </div>

        {/* CTA */}
        <a 
          href="#projects"
          className={`inline-block text-sm md:text-base font-medium transition-opacity hover:opacity-60 ${
            theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
          }`}
        >
          Ver Projetos ↓
        </a>
      </div>
    </section>
  );
}
