import React from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitFork, Calendar, Award, ExternalLink } from 'lucide-react';
import { githubTranslations, personalInfo } from '../data';

interface GithubSectionProps {
  lang: 'en' | 'fa';
}

export default function GithubSection({ lang }: GithubSectionProps) {
  // Generate a realistic representation of the GitHub Contribution Grid (52 weeks x 7 days)
  // Let's create an elegant grid of commitments
  const commitLevels = [0, 1, 2, 3, 2, 1, 0, 1, 3, 4, 2, 1, 3, 0, 1, 2, 4, 3, 1, 2, 0, 1, 2, 3, 4, 1, 2, 0, 3, 4, 2, 1, 2, 0, 3, 1, 4, 2, 1, 0, 2, 3, 4, 2, 1];
  
  const getCommitColor = (level: number) => {
    switch (level) {
      case 4: return 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]'; // Very active
      case 3: return 'bg-emerald-600';
      case 2: return 'bg-emerald-700';
      case 1: return 'bg-emerald-900'; // Light active
      default: return 'bg-white/5'; // No commit
    }
  };

  const primaryLanguages = [
    { name: 'Python', percent: 45, color: 'bg-yellow-500' },
    { name: 'JavaScript', percent: 35, color: 'bg-yellow-400' },
    { name: 'PHP', percent: 12, color: 'bg-indigo-400' },
    { name: 'Other', percent: 8, color: 'bg-gray-500' }
  ];

  return (
    <section id="github" className="relative py-24 overflow-hidden bg-bg-dark border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="glow-blob w-[300px] h-[300px] bg-emerald-500/5 top-1/2 left-10 animate-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-start mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight flex items-center justify-center md:justify-start gap-3"
          >
            <Github className="text-emerald-400 animate-pulse" size={28} />
            <span>{githubTranslations.title[lang]}</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mt-3 mx-auto md:mx-0 rounded-full origin-left"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm mt-3"
          >
            {githubTranslations.subtitle[lang]}
          </motion.p>
        </div>

        {/* Content Bento Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Narrative & Profile Box */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full filter blur-2xl" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                  <Github size={28} />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-lg leading-tight">
                    {lang === 'en' ? 'Open Source Profile' : 'پروفایل من در متن‌باز'}
                  </h3>
                  <span className="text-xs text-emerald-400 font-mono">@{personalInfo.githubUsername}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
                {githubTranslations.openSourceAdvocate[lang]}
              </p>

              {/* Progress bars of used languages */}
              <div className="space-y-4 pt-4">
                <h4 className="text-gray-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
                  {githubTranslations.languages[lang]}
                </h4>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden flex">
                  {primaryLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      className={`h-full ${lang.color}`}
                      style={{ width: `${lang.percent}%` }}
                      title={`${lang.name}: ${lang.percent}%`}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {primaryLanguages.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-1.5 text-xs text-gray-400">
                      <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                      <span>{lang.name}</span>
                      <span className="font-mono text-[10px] text-gray-500">{lang.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex w-full justify-center items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-bg-dark font-display font-bold text-sm shadow-[0_4px_15px_rgba(16,185,129,0.25)] transition-all cursor-pointer"
              >
                <span>{githubTranslations.viewProfileButton[lang]}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Grid visual stats dashboard */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Real commits visual representation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl glass-panel relative border border-white/5"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                  {lang === 'en' ? 'Active Code Contributions' : 'مشارکت‌های کدنویسی فعال'}
                </span>
                <span className="text-[10px] font-mono text-gray-500">YEAR // 2025-2026</span>
              </div>

              {/* Matrix blocks */}
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto no-scrollbar py-2">
                {commitLevels.map((level, idx) => (
                  <div
                    key={idx}
                    className={`w-3.5 h-3.5 rounded-[3px] transition-all duration-300 hover:scale-110 cursor-help ${getCommitColor(level)}`}
                    title={`Day ${idx + 1}: ${level * 2} commits`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between mt-4 text-[10px] font-mono text-gray-500">
                <span>{lang === 'en' ? 'Less' : 'کمتر'}</span>
                <div className="flex gap-1 items-center">
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-white/5" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-900" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500" />
                </div>
                <span>{lang === 'en' ? 'More' : 'بیشتر'}</span>
              </div>
            </motion.div>

            {/* Numerical Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="p-5 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 transition-colors text-center sm:text-start">
                <Star className="text-amber-500 mb-2 mx-auto sm:mx-0" size={18} />
                <div className="text-2xl font-bold text-white font-mono leading-none mb-1">42+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">{githubTranslations.totalStars[lang]}</div>
              </div>

              <div className="p-5 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 transition-colors text-center sm:text-start">
                <GitFork className="text-blue-400 mb-2 mx-auto sm:mx-0" size={18} />
                <div className="text-2xl font-bold text-white font-mono leading-none mb-1">24+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">{githubTranslations.publicRepos[lang]}</div>
              </div>

              <div className="p-5 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 transition-colors text-center sm:text-start">
                <Calendar className="text-emerald-400 mb-2 mx-auto sm:mx-0" size={18} />
                <div className="text-2xl font-bold text-white font-mono leading-none mb-1">524+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">{githubTranslations.commitsThisYear[lang]}</div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
