'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSelector from '../ui/LanguageSelector';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.journey'), href: '#journey' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav 
      id="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'dark' 
            ? 'bg-[#0a0a1a]/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20 scanline-effect' 
            : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-cyan-500/30'
          : 'bg-transparent'
      }`}
      style={scrolled ? { boxShadow: '0 4px 20px rgba(0, 240, 255, 0.15)' } : {}}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className={`text-2xl font-bold font-mono ${
                theme === 'dark' ? 'neon-text-cyan' : 'text-cyan-600'
              }`}
              aria-label="Carlos Henrique - Ir para o início"
            >
              <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-500'}>{'<'}</span>
              CH
              <span className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-500'}>{'/>'}</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium font-mono transition-all duration-300 relative group ${
                    theme === 'dark' 
                      ? 'text-cyan-300 hover:text-cyan-100' 
                      : 'text-cyan-600 hover:text-cyan-800'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gradient-to-r from-cyan-400 via-magenta-400 to-purple-400 neon-underline"></span>
                </a>
              ))}
              
              {/* Language Selector */}
              <div>
                <LanguageSelector />
              </div>
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`rounded-lg transition-all duration-300 p-2 cyber-border ${
                  theme === 'dark'
                    ? 'bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300'
                    : 'bg-cyan-100 text-cyan-600 hover:bg-cyan-200 hover:text-cyan-700'
                }`}
                style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.2)' }}
                title={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
                aria-label={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
              >
                {theme === 'dark' ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300 cyber-border bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20"
              style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.2)' }}
              aria-label={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
            >
              {theme === 'dark' ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 cyber-border ${
                theme === 'dark' 
                  ? 'text-cyan-300 hover:text-cyan-100 bg-magenta-500/10 hover:bg-magenta-500/20' 
                  : 'text-cyan-600 hover:text-cyan-800 bg-cyan-500/10 hover:bg-cyan-500/20'
              }`}
              style={{ boxShadow: '0 0 10px rgba(255, 0, 255, 0.2)' }}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className={`md:hidden absolute top-16 left-0 right-0 border-t scanline-effect ${
              theme === 'dark' 
                ? 'bg-[#0a0a1a]/98 backdrop-blur-md border-cyan-500/20' 
                : 'bg-white/98 backdrop-blur-md border-cyan-500/30'
            }`}
            style={{ boxShadow: '0 4px 20px rgba(0, 240, 255, 0.15)' }}
            role="menu"
            aria-label="Menu de navegação mobile"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium font-mono transition-all duration-300 rounded-lg cyber-border ${
                    theme === 'dark' 
                      ? 'text-cyan-300 hover:text-cyan-100 hover:bg-cyan-500/10' 
                      : 'text-cyan-600 hover:text-cyan-800 hover:bg-cyan-500/10'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
