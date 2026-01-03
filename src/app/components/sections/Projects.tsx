'use client';

import React from 'react';
import { projectsData } from '../../lib/data';
import ImageCarousel from '../ImageCarousel';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Projects() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  return (
    <section 
      id="projects" 
      className={`py-32 ${
        theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
      }`}
      style={{
        background: theme === 'dark'
          ? 'radial-gradient(ellipse at center, rgba(30, 30, 45, 0.4), transparent 70%), linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.8) 100%)'
          : 'radial-gradient(ellipse at center, rgba(165, 180, 252, 0.15), transparent 70%), linear-gradient(180deg, rgba(225, 225, 228, 0.8) 0%, rgba(212, 212, 220, 0.9) 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-5xl md:text-6xl font-bold mb-20 ${
          theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
        }`}>
          {t('projects.title')}
        </h2>
        
        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <div key={index} className="space-y-6">
              <div className="transition-opacity hover:opacity-90 rounded-lg overflow-hidden">
                <ImageCarousel 
                  images={project.images} 
                  projectName={project.name}
                />
              </div>
              
              <div className="space-y-4">
                <h3 className={`text-3xl md:text-4xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
                }`}>
                  {project.name}
                </h3>
                
                <p className="text-xl text-[#666666] leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.techs.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs uppercase tracking-widest text-[#999999]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`inline-block text-lg font-medium transition-opacity hover:opacity-60 ${
                      theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
                    }`}
                  >
                    {t('projects.viewProject')} →
                  </a>
                  
                  {project.adminLink && (
                    <div className="mt-4 text-sm text-[#999999]">
                      <a 
                        href={project.adminLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition-opacity hover:opacity-60"
                      >
                        {t('projects.adminAccess')}
                      </a>
                      <span className="ml-2">{project.adminCreds}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
