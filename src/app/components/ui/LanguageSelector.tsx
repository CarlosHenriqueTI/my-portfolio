'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt' as const, name: 'Português', flag: '🇧🇷' },
    { code: 'en' as const, name: 'English', flag: '🇺🇸' }
  ];

  const handleLanguageChange = (langCode: 'pt' | 'en') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
          theme === 'dark'
            ? 'bg-slate-800 text-blue-400 hover:bg-slate-700 hover:text-blue-300'
            : 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700'
        }`}
        aria-label="Selecionar idioma"
        aria-expanded={isOpen}
      >
        <Globe size={20} aria-hidden="true" />
        <span className="text-sm font-medium uppercase">{language}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute top-full right-0 mt-2 rounded-lg shadow-lg border overflow-hidden glass-card ${
              theme === 'dark'
                ? 'bg-slate-800/95 border-slate-700'
                : 'bg-white/95 border-gray-200'
            }`}
            style={{ minWidth: '160px' }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                  language === lang.code
                    ? theme === 'dark'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-500 text-white'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:bg-slate-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
