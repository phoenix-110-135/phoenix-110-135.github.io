import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BrainCircuit, Cpu, Flame, Grid, Link, Bot, Sparkles, 
  ShieldAlert, ShieldCheck, FileCheck, Key, Search,
  Database, FileJson, Zap, Container, Terminal, Server, GitBranch, Github, Code
} from 'lucide-react';
import { skillCategories, skillsTranslations } from '../data';

interface SkillsProps {
  lang: 'en' | 'fa';
}

export default function Skills({ lang }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Map iconName to Lucide icon component or custom styled SVG
  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      // Programming Brand Visuals
      case 'Python':
        return (
          <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.87 2c-3.13 0-5.75.05-6.04.14-2.58.85-2.73 2.91-2.73 5.43V9.6h6.14V10.2H2.22c-1.32 0-2.22.84-2.22 2.16v4.35c0 1.95 1.5 2.76 3.1 2.76h2.15v-3.05c0-1.84 1.48-3.35 3.32-3.35h6.14V11.1H14.8c-1.63 0-3.32-1.38-3.32-3.06V2H11.87z" opacity="0.8"/>
            <path d="M12.13 22c3.13 0 5.75-.05 6.04-.14 2.58-.85 2.73-2.91 2.73-5.43V14.4h-6.14v-.6h7.02c1.32 0 2.22-.84 2.22-2.16V7.29c0-1.95-1.5-2.76-3.1-2.76h-2.15v3.05c0 1.84-1.48 3.35-3.32 3.35H9.31v1.97h-.01c1.63 0 3.32 1.38 3.32 3.06V22h-.49z"/>
          </svg>
        );
      case 'JavaScript':
        return (
          <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v18H3V3zm11.53 14.18c.25.43.6.72 1.05.86.43.15.89.22 1.38.22.61 0 1.13-.15 1.56-.44.42-.3.63-.78.63-1.44 0-.48-.12-.86-.37-1.12-.24-.26-.64-.49-1.21-.7l-1.04-.37c-.89-.31-1.57-.69-2.03-1.15-.46-.46-.69-1.09-.69-1.88 0-.81.28-1.47.85-1.97.57-.5 1.34-.75 2.31-.75.87 0 1.58.21 2.14.63.56.42.88.99.98 1.71h-1.84c-.08-.34-.27-.61-.57-.8-.3-.2-.69-.3-1.18-.3-.48 0-.87.11-1.16.34-.3.23-.45.54-.45.92 0 .34.11.61.32.81.21.2.6.4 1.16.59l1.11.39c.96.34 1.67.75 2.14 1.23.47.48.71 1.12.71 1.93 0 .97-.33 1.74-.98 2.3-.65.56-1.53.84-2.63.84-.96 0-1.78-.23-2.45-.7-.67-.47-.99-1.18-.99-2.13h1.86v-.02zM7.53 15.35c.08.35.25.61.52.8.27.18.63.28 1.09.28.42 0 .75-.1 1-.3.25-.2.37-.53.37-.97V9.08h1.85v6.59c0 .91-.29 1.62-.86 2.14-.57.52-1.35.78-2.34.78-1.01 0-1.78-.26-2.31-.78-.53-.52-.78-1.22-.76-2.11h1.84c-.02.32-.1.54-.15.65z"/>
          </svg>
        );
      case 'PHP':
        return (
          <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.53 7.82c-.8 0-1.36.43-1.68 1.29l-.02.05c-.1.3-.16.63-.16.99 0 .86.36 1.48 1.08 1.88.32.17.69.26 1.13.26.79 0 1.34-.44 1.66-1.31l.01-.03c.1-.3.15-.63.15-.99 0-.87-.36-1.49-1.09-1.89a2.72 2.72 0 00-1.08-.25zm11.23 0c-.8 0-1.36.43-1.68 1.29l-.02.05c-.1.3-.16.63-.16.99 0 .86.36 1.48 1.08 1.88.32.17.69.26 1.13.26.79 0 1.34-.44 1.66-1.31l.01-.03c.1-.3.15-.63.15-.99 0-.87-.36-1.49-1.09-1.89a2.72 2.72 0 00-1.08-.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.8 11.2h-.9l-.33 1.4H5.2l1.24-5.32h1.76l-.21.88c.36-.61.99-.98 1.82-.98.78 0 1.37.24 1.76.71.4.48.55 1.17.43 2.05l-.3 1.38H9.3l.26-1.12c.07-.31.06-.52-.03-.64-.09-.13-.26-.19-.51-.19-.4 0-.7.24-.87.72l-.15.62zm6.21-2.42c.36-.61.99-.98 1.82-.98.78 0 1.37.24 1.76.71.4.48.55 1.17.43 2.05l-.3 1.38h-1.61l.26-1.12c.07-.31.06-.52-.03-.64-.09-.13-.26-.19-.51-.19-.4 0-.7.24-.87.72l-.15.62h-.9l-.33 1.4h-1.76l1.24-5.32h1.76l-.21.88zm-3.03.74l-.27 1.16H9.5l.27-1.16a1.18 1.18 0 011.12-.83c.31 0 .44.17.49.43.03.14-.01.29-.1.4z" />
          </svg>
        );
      case 'Django':
        return <Code className="text-emerald-500" size={24} />;
      case 'Flask':
        return <Terminal className="text-gray-300" size={24} />;
      case 'NodeJS':
        return <Code className="text-emerald-400" size={24} />;
      case 'ExpressJS':
        return <Server className="text-gray-400" size={24} />;
      
      // AI Visuals
      case 'BrainCircuit':
        return <BrainCircuit className="text-pink-400 animate-pulse" size={24} />;
      case 'Cpu':
        return <Cpu className="text-primary-purple" size={24} />;
      case 'Flame':
        return <Flame className="text-orange-500" size={24} />;
      case 'Grid':
        return <Grid className="text-blue-500" size={24} />;
      case 'Link':
        return <Link className="text-indigo-400" size={24} />;
      case 'Bot':
        return <Bot className="text-primary-cyan animate-bounce" size={24} style={{ animationDuration: '3s' }} />;
      case 'Sparkles':
        return <Sparkles className="text-amber-400" size={24} />;
      
      // Security Visuals
      case 'ShieldAlert':
        return <ShieldAlert className="text-red-500" size={24} />;
      case 'ShieldCheck':
        return <ShieldCheck className="text-emerald-400" size={24} />;
      case 'FileCheck':
        return <FileCheck className="text-sky-400" size={24} />;
      case 'Key':
        return <Key className="text-amber-500" size={24} />;
      case 'Search':
        return <Search className="text-primary-cyan" size={24} />;

      // Database Visuals
      case 'Database':
        return <Database className="text-blue-500" size={24} />;
      case 'FileJson':
        return <FileJson className="text-green-500" size={24} />;
      case 'Zap':
        return <Zap className="text-yellow-400" size={24} />;

      // DevOps Visuals
      case 'Container':
        return <Container className="text-sky-500" size={24} />;
      case 'Terminal':
        return <Terminal className="text-gray-400" size={24} />;
      case 'Server':
        return <Server className="text-gray-300" size={24} />;
      case 'GitBranch':
        return <GitBranch className="text-amber-500" size={24} />;
      case 'Github':
        return <Github className="text-white" size={24} />;

      default:
        return <Code className="text-primary-cyan" size={24} />;
    }
  };

  // Filter skills based on current category tab
  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return skillCategories.flatMap(cat => cat.skills);
    }
    const foundCategory = skillCategories.find(cat => cat.id === activeCategory);
    return foundCategory ? foundCategory.skills : [];
  };

  const tabs = [
    { id: 'all', label: lang === 'en' ? 'All Skills' : 'همه مهارت‌ها' },
    ...skillCategories.map(cat => ({ id: cat.id, label: cat.title[lang] }))
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-bg-dark border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="glow-blob w-[400px] h-[400px] bg-primary-cyan/10 top-1/3 left-1/4 animate-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-start mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
          >
            {skillsTranslations.title[lang]}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-primary-cyan to-primary-purple mt-3 mx-auto md:mx-0 rounded-full origin-left"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm mt-3"
          >
            {skillsTranslations.subtitle[lang]}
          </motion.p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start border-b border-white/5 pb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-gradient-to-r from-primary-cyan to-primary-purple text-bg-dark font-semibold shadow-[0_4px_15px_rgba(34,211,238,0.2)]'
                  : 'text-gray-400 bg-white/2 border border-white/5 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Deck Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {getFilteredSkills().map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={skill.name}
                className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary-cyan/25 transition-colors duration-300">
                      {renderSkillIcon(skill.iconName)}
                    </div>
                    
                    {/* Progress Percentage Badge */}
                    <span className="font-mono text-xs text-primary-cyan font-bold bg-primary-cyan/10 px-2.5 py-1 rounded-md">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="text-white font-display font-bold text-lg mb-2">
                    {skill.name}
                  </h3>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {skill.description[lang]}
                  </p>
                </div>

                {/* Animated Level Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                    <span>{skillsTranslations.experienceLevel[lang]}</span>
                    <span>{skill.level >= 85 ? (lang === 'en' ? 'Expert' : 'حرفه‌ای') : (lang === 'en' ? 'Intermediate' : 'متوسط')}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-primary-cyan to-primary-purple rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
