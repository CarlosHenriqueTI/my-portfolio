'use client';

import React from 'react';
import { educationData, experienceData } from '../../lib/data';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Journey() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section 
      id="journey" 
      className={`py-32 px-6 ${
        theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
      }`}
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(180deg, rgba(10, 10, 10, 0.9) 0%, rgba(20, 15, 30, 0.95) 100%)'
          : 'linear-gradient(180deg, rgba(225, 225, 228, 0.9) 0%, rgba(215, 215, 222, 0.95) 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-5xl md:text-6xl font-semibold mb-20 ${
          theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
        }`}>
          {t('journey.title')}
        </h2>

        <div className="space-y-32">
          {/* Educação */}
          <div className="space-y-16">
            <h3 className="text-xs uppercase tracking-widest text-[#999999] mb-12">
              {t('journey.education')}
            </h3>
            <div className="space-y-16">
              {educationData.map((edu, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-xs uppercase tracking-widest text-[#999999]">
                    {edu.period}
                  </div>
                  <h4 className={`text-2xl md:text-3xl font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
                  }`}>
                    {edu.course}
                  </h4>
                  <p className={`text-lg ${
                    theme === 'dark' ? 'text-gray-300' : 'text-[#666666]'
                  }`}>
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experiência */}
          <div className="space-y-16">
            <h3 className="text-xs uppercase tracking-widest text-[#999999] mb-12">
              {t('journey.experience')}
            </h3>
            <div className="space-y-16">
              {experienceData.map((exp, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-xs uppercase tracking-widest text-[#999999]">
                    {exp.period}
                  </div>
                  <h4 className={`text-2xl md:text-3xl font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
                  }`}>
                    {exp.title}
                  </h4>
                  <p className={`text-lg ${
                    theme === 'dark' ? 'text-gray-300' : 'text-[#666666]'
                  }`}>
                    {exp.company}
                  </p>
                  {exp.descriptionIntro && (
                    <p className={`text-base max-w-3xl ${
                      theme === 'dark' ? 'text-gray-400' : 'text-[#999999]'
                    }`}>
                      {exp.descriptionIntro}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
