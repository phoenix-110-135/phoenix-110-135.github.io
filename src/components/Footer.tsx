import React from 'react';
import { Github, Send, ArrowUp } from 'lucide-react';
import { footerTranslations, personalInfo } from '../data';

interface FooterProps {
  lang: 'en' | 'fa';
}

export default function Footer({ lang }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      className="bg-bg-dark border-t border-white/5 py-12 relative overflow-hidden"
      style={{ direction: lang === 'fa' ? 'rtl' : 'ltr' }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand logo & tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start">
          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-cyan to-primary-purple flex items-center justify-center font-display font-bold text-sm text-bg-dark">
              PH
            </div>
            <span className="font-display font-bold tracking-tight text-white text-base">
              {personalInfo.name[lang]}
            </span>
          </div>
          <p className="text-gray-500 text-xs font-mono">
            {footerTranslations.tagline[lang]}
          </p>
        </div>

        {/* Copyright notice */}
        <div className="text-center text-xs text-gray-500 font-sans">
          <span>&copy; {new Date().getFullYear()} {personalInfo.name[lang]}. </span>
          <span>{footerTranslations.rights[lang]}</span>
        </div>

        {/* Quick social connections & Scroll top */}
        <div className="flex items-center gap-4">
          
          {/* GitHub */}
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            title="GitHub"
          >
            <Github size={16} />
          </a>

          {/* Telegram */}
          <a
            href={personalInfo.telegramUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-cyan hover:bg-white/5 transition-all"
            title="Telegram"
          >
            <Send size={14} />
          </a>

          {/* Scroll to top */}
          <button
            onClick={handleScrollToTop}
            className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary-cyan hover:bg-white/10 transition-all cursor-pointer shadow-lg"
            title={lang === 'en' ? 'Back to Top' : 'برگشت به بالا'}
          >
            <ArrowUp size={16} />
          </button>

        </div>

      </div>
    </footer>
  );
}
