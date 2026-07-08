import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Shield, Brain, Terminal, X, Code } from 'lucide-react';
import { projectsData, projectTranslations } from '../data';
import { ProjectItem } from '../types';

interface ProjectsProps {
  lang: 'en' | 'fa';
}

export default function Projects({ lang }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'ai' | 'security' | 'dev'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getFilteredProjects = () => {
    if (filter === 'all') return projectsData;
    return projectsData.filter(p => p.category === filter);
  };

  const getCategoryIcon = (cat: 'ai' | 'security' | 'dev' | 'fullstack') => {
    switch (cat) {
      case 'security':
        return <Shield className="text-red-400" size={16} />;
      case 'ai':
        return <Brain className="text-primary-purple" size={16} />;
      default:
        return <Terminal className="text-primary-cyan" size={16} />;
    }
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-bg-dark border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="glow-blob w-[400px] h-[400px] bg-primary-purple/10 bottom-10 left-10 animate-glow" />
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
            {projectTranslations.title[lang]}
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
            {projectTranslations.subtitle[lang]}
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          {(['all', 'ai', 'security', 'dev'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer border ${
                filter === cat
                  ? 'bg-white/10 border-primary-cyan text-primary-cyan font-bold shadow-[0_0_15px_rgba(34,211,238,0.1)]'
                  : 'text-gray-400 bg-white/2 border-white/5 hover:text-white hover:bg-white/5'
              }`}
            >
              {projectTranslations[cat][lang]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {getFilteredProjects().map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="rounded-2xl glass-panel relative overflow-hidden group border border-white/5 flex flex-col justify-between"
              >
                {/* Visual Banner placeholder representing Project identity */}
                <div className={`h-48 w-full bg-gradient-to-tr ${project.imagePlaceholder} relative flex items-center justify-center p-6 overflow-hidden`}>
                  {/* Scope scanlines / visual overlay */}
                  <div className="absolute inset-0 bg-black/40 mix-blend-overlay opacity-60 pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.6)_100%)]" />
                  
                  {/* Center abstract logo badge representation */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-bg-dark/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    {getCategoryIcon(project.category)}
                  </div>

                  {/* Top category label inside card */}
                  <div className="absolute top-4 right-4 bg-bg-dark/85 border border-white/10 rounded-lg px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest text-primary-cyan uppercase flex items-center gap-1">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-display font-bold text-xl mb-3 group-hover:text-primary-cyan transition-colors duration-300">
                      {project.title[lang]}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                      {project.description[lang]}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-primary-cyan hover:text-white transition-colors cursor-pointer uppercase tracking-wider flex items-center gap-1"
                    >
                      <span>{lang === 'en' ? 'Read Case Study' : 'مطالعه جزئیات'}</span>
                      <span>&rarr;</span>
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                        title={projectTranslations.githubLink[lang]}
                      >
                        <Github size={16} />
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-gray-300 hover:text-primary-cyan transition-colors"
                          title={projectTranslations.demoLink[lang]}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Case Study Lightbox Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="bg-bg-dark border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative"
                onClick={(e) => e.stopPropagation()}
                style={{ direction: lang === 'fa' ? 'rtl' : 'ltr' }}
              >
                {/* Banner */}
                <div className={`h-40 w-full bg-gradient-to-tr ${selectedProject.imagePlaceholder} relative p-6 flex items-end`}>
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-8 h-8 rounded-full bg-bg-dark/80 hover:bg-bg-dark flex items-center justify-center text-white border border-white/10 transition-all"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-bg-dark/90 flex items-center justify-center text-white border border-white/10">
                      {getCategoryIcon(selectedProject.category)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-primary-cyan uppercase font-bold tracking-widest">{selectedProject.category}</span>
                      <h4 className="text-white font-display font-bold text-lg leading-tight mt-0.5">{selectedProject.title[lang]}</h4>
                    </div>
                  </div>
                </div>

                {/* Body Case Study */}
                <div className="p-6 sm:p-8 overflow-y-auto max-h-[50vh]">
                  <h5 className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-3">
                    {lang === 'en' ? 'Overview & Scope' : 'بررسی اجمالی و اهداف'}
                  </h5>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-sans mb-6">
                    {selectedProject.longDescription[lang]}
                  </p>

                  <h5 className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-3">
                    {lang === 'en' ? 'Technologies Applied' : 'تکنولوژی‌های پیاده‌سازی شده'}
                  </h5>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links inside Modal */}
                  <div className="flex flex-wrap gap-4 border-t border-white/5 pt-6 justify-between items-center">
                    <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{projectTranslations.underDevelopment[lang]}</span>
                    </span>

                    <div className="flex gap-3">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-display text-sm flex items-center gap-2 transition-all"
                      >
                        <Github size={14} />
                        <span>{projectTranslations.githubLink[lang]}</span>
                      </a>
                      {selectedProject.demoUrl && (
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary-cyan to-primary-purple text-bg-dark font-display font-semibold text-sm flex items-center gap-2 transition-all shadow-lg"
                        >
                          <ExternalLink size={14} />
                          <span>{projectTranslations.demoLink[lang]}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
