'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSelector from '../ui/LanguageSelector';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl`}
      style={{ 
        borderBottom: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
        background: theme === 'dark'
          ? 'linear-gradient(180deg, rgba(10, 10, 10, 0.85) 0%, rgba(15, 15, 20, 0.75) 100%)'
          : 'linear-gradient(180deg, rgba(232, 232, 232, 0.9) 0%, rgba(220, 220, 224, 0.85) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-center items-center h-16">

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-opacity duration-200 hover:opacity-60 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            <div className="flex items-center gap-6 ml-6">
              <LanguageSelector />
              
              <button
                onClick={toggleTheme}
                className={`text-sm transition-opacity duration-200 hover:opacity-60 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
                aria-label={theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
              >
                {theme === 'dark' ? '☀' : '☾'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-6 flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg font-medium transition-opacity hover:opacity-60 ${
                  theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <LanguageSelector />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
