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
import ScrollProgress from './components/ui/ScrollProgress';
import SkipLinks from './components/ui/SkipLinks';

function HomePageContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-[#1a1a1a] text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <SkipLinks />
      <ScrollProgress />
      <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Toaster 
          position="top-right" 
          reverseOrder={false}
          toastOptions={{
            style: {
              background: theme === 'dark' ? '#1f2937' : '#ffffff',
              color: theme === 'dark' ? '#f3f4f6' : '#111827',
              border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
              fontSize: '14px',
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
