import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Timeline from './components/Timeline';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // English is the default language upon first entrance as requested
  const [lang, setLang] = useState<'en' | 'fa'>('en');

  // Dynamically change HTML document direction (RTL for Farsi, LTR for English)
  useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="bg-bg-dark text-gray-100 min-h-screen relative font-sans selection:bg-primary-cyan/20 selection:text-primary-cyan antialiased overflow-x-hidden">
      {/* Background Ambience Core Globs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-cyan/5 rounded-full filter blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-purple/5 rounded-full filter blur-[120px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Structured Single-Screen Sections Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header lang={lang} setLang={setLang} />
        
        <main className="flex-grow">
          <Hero lang={lang} />
          <About lang={lang} />
          <Skills lang={lang} />
          <Projects lang={lang} />
          <Certificates lang={lang} />
          <Timeline lang={lang} />
          <GithubSection lang={lang} />
          <Contact lang={lang} />
        </main>

        <Footer lang={lang} />
      </div>
    </div>
  );
}
