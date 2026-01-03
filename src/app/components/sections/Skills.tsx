'use client';

import React from 'react';
import { skillsData } from '../../lib/data';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Skills() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section 
      id="skills" 
      className={`py-32 ${
        theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
      }`}
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(135deg, rgba(15, 15, 25, 0.6) 0%, rgba(25, 15, 35, 0.6) 100%)'
          : 'linear-gradient(135deg, rgba(220, 220, 224, 0.8) 0%, rgba(208, 208, 215, 0.85) 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-5xl md:text-6xl font-bold mb-20 ${
          theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
        }`}>
          {t('skills.title')}
        </h2>

        <div className="space-y-20">
          {/* Habilidades Técnicas */}
          <div className="space-y-8">
            <h3 className="text-xs uppercase tracking-widest text-[#999999] mb-8">
              {t('skills.tech')}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skillsData.coding.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <span className={`text-lg font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
                  }`}>
                    {skill.name}
                  </span>
                  <div className="text-xs uppercase tracking-widest text-[#999999]">
                    {skill.level}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades Profissionais */}
          <div className="space-y-8">
            <h3 className="text-xs uppercase tracking-widest text-[#999999] mb-8">
              {t('skills.soft')}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skillsData.professional.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <span className={`text-lg font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
                  }`}>
                    {skill.name}
                  </span>
                  <div className="text-xs uppercase tracking-widest text-[#999999]">
                    {skill.level}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
