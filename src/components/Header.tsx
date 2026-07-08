import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Github, Send } from 'lucide-react';
import { navTranslations, personalInfo } from '../data';

interface HeaderProps {
  lang: 'en' | 'fa';
  setLang: (lang: 'en' | 'fa') => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'timeline', 'github', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'fa' : 'en');
  };

  const menuItems = [
    { id: 'home', label: navTranslations.home[lang] },
    { id: 'about', label: navTranslations.about[lang] },
    { id: 'skills', label: navTranslations.skills[lang] },
    { id: 'projects', label: navTranslations.projects[lang] },
    { id: 'certificates', label: navTranslations.certificates[lang] },
    { id: 'timeline', label: navTranslations.timeline[lang] },
    { id: 'github', label: navTranslations.github[lang] },
    { id: 'contact', label: navTranslations.contact[lang] },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-dark/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-cyan to-primary-purple flex items-center justify-center font-display font-bold text-lg text-bg-dark shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:scale-105 transition-transform duration-300">
            PH
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-white group-hover:text-primary-cyan transition-colors duration-300">
              {lang === 'en' ? 'Phoenix' : 'ققنوس'}
            </span>
            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">
              {lang === 'en' ? 'AI & Security' : 'هوش مصنوعی و امنیت'}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeSection === item.id
                  ? 'text-primary-cyan bg-white/5 font-semibold'
                  : 'text-gray-400 hover:text-white hover:bg-white/2'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions (Lang Switcher, Social, Resume) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-xs font-semibold text-white cursor-pointer"
            title={lang === 'en' ? 'Switch to Persian' : 'تغییر به انگلیسی'}
          >
            <Globe size={14} className="text-primary-cyan" />
            <span>{lang === 'en' ? 'Farsi' : 'English'}</span>
          </button>

          {/* Github */}
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Github size={18} />
          </a>

          {/* Telegram */}
          <a
            href={personalInfo.telegramUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-cyan hover:bg-white/5 transition-colors"
          >
            <Send size={16} />
          </a>
        </div>

        {/* Mobile menu and lang toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile Lang Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-white"
          >
            <Globe size={12} className="text-primary-cyan" />
            <span>{lang === 'en' ? 'FA' : 'EN'}</span>
          </button>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-72 max-w-sm bg-bg-dark/95 backdrop-blur-lg border-l border-white/10 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ direction: lang === 'fa' ? 'rtl' : 'ltr' }}
      >
        <div className="pt-16">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-start px-4 py-3 rounded-xl text-base transition-colors ${
                  activeSection === item.id
                    ? 'text-primary-cyan bg-white/5 font-semibold'
                    : 'text-gray-400 hover:text-white hover:bg-white/2'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
          <div className="flex items-center gap-4 justify-center">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.telegramUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-300 hover:text-primary-cyan transition-colors"
            >
              <Send size={18} />
            </a>
          </div>
          <div className="text-center text-xs text-gray-500 font-mono">
            {personalInfo.email}
          </div>
        </div>
      </div>
    </header>
  );
}
