'use client';

import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import About from './components/sections/About';
import Journey from './components/sections/Journey';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Chatbot from './components/ui/Chatbot';
import LofiRadio from './components/ui/LofiRadio';
import ScrollProgress from './components/ui/ScrollProgress';
import SkipLinks from './components/ui/SkipLinks';
import FuturisticBackground from './components/ui/FuturisticBackground';

function HomePageContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen font-inter relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-[#0a0a1a] text-white' 
        : 'bg-[#f0f4ff] text-gray-900'
    }`}>
      <FuturisticBackground />
      <SkipLinks />
      <ScrollProgress />
      <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Toaster 
          position="top-right" 
          reverseOrder={false}
          toastOptions={{
            style: {
              background: theme === 'dark' ? '#1f2937' : '#ffffff',
              color: theme === 'dark' ? '#f3f4f6' : '#111827',
              border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
              fontSize: '14px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
          }}
        />
        <Navbar /> 
        <main id="main-content" role="main">
          <HeroSection />
            <About />
            <Skills />
            <Journey />
            <Projects />
            <Contact />    
          <Footer />
        </main>
      </div>
      <Chatbot />
      <LofiRadio />
    </div>
  );
}

export default function HomePage() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HomePageContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
