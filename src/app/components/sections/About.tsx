'use client';

import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function About() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section 
      id="about" 
      className={`py-32 ${
        theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
      }`}
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(180deg, rgba(10, 10, 10, 0.5) 0%, rgba(20, 20, 30, 0.8) 100%)'
          : 'linear-gradient(180deg, rgba(232, 232, 232, 0.9) 0%, rgba(220, 220, 224, 0.95) 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-5xl md:text-6xl font-bold mb-20 ${
          theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
        }`}>
          {t('about.title')}
        </h2>

        <div className="space-y-12">
          <p className="text-xl md:text-2xl leading-relaxed text-[#666666]">
            {t('about.description1')}
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed text-[#666666]">
            {t('about.description2')}
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <span className="text-xs uppercase tracking-widest text-[#999999]">
              {t('about.age')}: {t('about.ageValue')}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#999999]">
              {t('about.location')}: {t('about.locationValue')}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#999999]">
              {t('about.education')}: {t('about.educationValue')}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#999999]">
              {t('about.focus')}: {t('about.focusValue')}
            </span>
          </div>

          <div className="pt-12">
            <a 
              href="#contact" 
              className={`inline-block text-lg font-medium transition-opacity hover:opacity-60 ${
                theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
              }`}
            >
              {t('about.cta')} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
