'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.journey': 'Trajetória',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.greeting': 'Olá,',
    'hero.iam': 'eu sou',
    'hero.role': 'Desenvolvedor Frontend',
    'hero.tagline': '// Criando experiências digitais do futuro',
    'hero.cta': 'Sobre Mim',
    'hero.visits': 'visitas',
    'hero.visit': 'visita',
    'hero.loading': 'Carregando...',
    
    // About Section
    'about.title': 'About',
    'about.age': 'Idade',
    'about.location': 'Localização',
    'about.education': 'Formação',
    'about.focus': 'Foco',
    'about.ageValue': '25 anos',
    'about.locationValue': 'RS, Brasil',
    'about.educationValue': 'ADS - UniSenac',
    'about.focusValue': 'Frontend React',
    'about.description1': 'Sou um desenvolvedor frontend apaixonado por criar experiências digitais excepcionais. Com uma base sólida em React.js, TypeScript e design responsivo, transformo ideias em interfaces funcionais e atraentes.',
    'about.description2': 'Minha jornada na tecnologia começou com uma transição de carreira do exército, trazendo disciplina e dedicação para cada projeto que desenvolvo.',
    'about.cta': 'Vamos Trabalhar Juntos',
    'about.highlight1.title': 'Desenvolvimento Frontend',
    'about.highlight1.description': 'Especializado em React.js, TypeScript e desenvolvimento de interfaces modernas e responsivas',
    'about.highlight2.title': 'Transição de Carreira',
    'about.highlight2.description': 'Do Exército para a tecnologia, aplicando disciplina militar aos desafios do desenvolvimento',
    'about.highlight3.title': 'Aprendizado Contínuo',
    'about.highlight3.description': 'Comprometido com a evolução constante e implementação das melhores práticas de desenvolvimento',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.tech': 'Habilidades Técnicas',
    'skills.soft': 'Soft Skills',
    
    // Journey Section
    'journey.title': 'Journey',
    'journey.description': 'Uma transição estratégica da liderança militar para a inovação tecnológica',
    'journey.education': 'Educação',
    'journey.experience': 'Experiência',
    
    // Projects Section
    'projects.title': 'Projetos',
    'projects.description': '// Aplicando conhecimentos em React, TypeScript e tecnologias futuristas',
    'projects.viewProject': 'Ver Projeto',
    'projects.adminAccess': 'Acesso Admin',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.description': 'Vamos discutir oportunidades profissionais e projetos inovadores',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.message': 'Mensagem',
    'contact.namePlaceholder': 'Seu nome completo',
    'contact.emailPlaceholder': 'seu.email@exemplo.com',
    'contact.messagePlaceholder': 'Conte-me sobre sua ideia, projeto ou oportunidade...',
    'contact.send': 'Enviar Mensagem',
    'contact.sending': 'Enviando...',
    'contact.alternative': 'Ou entre em contato diretamente:',
    
    // Footer
    'footer.role': '// Desenvolvedor Frontend Júnior',
    'footer.madeWith': 'Feito com',
    'footer.and': 'e',
    'footer.using': 'usando',
    'footer.rights': 'Todos os direitos reservados',
    'footer.available': 'Disponível para oportunidades',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.journey': 'Journey',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello,',
    'hero.iam': "I'm",
    'hero.role': 'Frontend Developer',
    'hero.tagline': '// Creating digital experiences of the future',
    'hero.cta': 'About Me',
    'hero.visits': 'visits',
    'hero.visit': 'visit',
    'hero.loading': 'Loading...',
    
    // About Section
    'about.title': 'About',
    'about.age': 'Age',
    'about.location': 'Location',
    'about.education': 'Education',
    'about.focus': 'Focus',
    'about.ageValue': '25 years',
    'about.locationValue': 'RS, Brazil',
    'about.educationValue': 'ADS - UniSenac',
    'about.focusValue': 'Frontend React',
    'about.description1': "I'm a frontend developer passionate about creating exceptional digital experiences. With a solid foundation in React.js, TypeScript, and responsive design, I transform ideas into functional and attractive interfaces.",
    'about.description2': 'My journey in technology began with a career transition from the army, bringing discipline and dedication to every project I develop.',
    'about.cta': "Let's Work Together",
    'about.highlight1.title': 'Frontend Development',
    'about.highlight1.description': 'Specialized in React.js, TypeScript and development of modern and responsive interfaces',
    'about.highlight2.title': 'Career Transition',
    'about.highlight2.description': 'From Army to technology, applying military discipline to development challenges',
    'about.highlight3.title': 'Continuous Learning',
    'about.highlight3.description': 'Committed to constant evolution and implementation of best development practices',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.tech': 'Technical Skills',
    'skills.soft': 'Soft Skills',
    
    // Journey Section
    'journey.title': 'Journey',
    'journey.description': 'A strategic transition from military leadership to technological innovation',
    'journey.education': 'Education',
    'journey.experience': 'Experience',
    
    // Projects Section
    'projects.title': 'Projects',
    'projects.description': '// Applying knowledge in React, TypeScript and futuristic technologies',
    'projects.viewProject': 'View Project',
    'projects.adminAccess': 'Admin Access',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.description': "Let's discuss professional opportunities and innovative projects",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Your full name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.messagePlaceholder': 'Tell me about your idea, project or opportunity...',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.alternative': 'Or contact directly:',
    
    // Footer
    'footer.role': '// Junior Frontend Developer',
    'footer.madeWith': 'Made with',
    'footer.and': 'and',
    'footer.using': 'using',
    'footer.rights': 'All rights reserved',
    'footer.available': 'Available for opportunities',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    // Recupera idioma do localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
