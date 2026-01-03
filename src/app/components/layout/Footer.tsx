'use client';

import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  return (
    <footer 
      className={`py-20 border-t ${
        theme === 'dark' 
          ? 'border-[#1a1a1a]' 
          : 'border-[#e0e0e0]'
      }`}
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(180deg, rgba(10, 10, 10, 0.95) 0%, rgba(15, 15, 20, 1) 100%)'
          : 'linear-gradient(180deg, rgba(220, 220, 224, 0.95) 0%, rgba(208, 208, 215, 1) 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-[#666666]' : 'text-[#666666]'
            }`}>
              &copy; {new Date().getFullYear()} Carlos Henrique
            </p>
            <p className="text-xs uppercase tracking-widest text-[#999999] mt-2">
              {t('footer.availability')}
            </p>
          </div>

          <div className="flex gap-8">
            <a 
              href="https://github.com/carlos" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-sm transition-opacity hover:opacity-60 ${
                theme === 'dark' ? 'text-[#666666]' : 'text-[#666666]'
              }`}
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/carlos" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-sm transition-opacity hover:opacity-60 ${
                theme === 'dark' ? 'text-[#666666]' : 'text-[#666666]'
              }`}
            >
              LinkedIn
            </a>
            <a 
              href="mailto:carlos@email.com"
              className={`text-sm transition-opacity hover:opacity-60 ${
                theme === 'dark' ? 'text-[#666666]' : 'text-[#666666]'
              }`}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
