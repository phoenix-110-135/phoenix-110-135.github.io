import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Terminal, Cpu, ShieldCheck, Award, Layers, Github, BookOpen } from 'lucide-react';
import { aboutTranslations, personalInfo } from '../data';

interface AboutProps {
  lang: 'en' | 'fa';
}

export default function About({ lang }: AboutProps) {
  const iconsMap = [
    <ShieldAlert className="text-red-400" size={24} />,
    <Terminal className="text-primary-cyan" size={24} />,
    <Cpu className="text-primary-purple" size={24} />,
    <ShieldCheck className="text-emerald-400" size={24} />
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-bg-dark border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="glow-blob w-[300px] h-[300px] bg-primary-purple/10 top-1/2 right-10 animate-glow" />
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
            {aboutTranslations.title[lang]}
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
            {aboutTranslations.subtitle[lang]}
          </motion.p>
        </div>

        {/* Narrative & Stats Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: lang === 'en' ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden group border border-white/5"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cyan/5 rounded-full filter blur-2xl group-hover:bg-primary-cyan/10 transition-colors duration-500" />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans mb-6">
                {aboutTranslations.bioParagraph1[lang]}
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
                {aboutTranslations.bioParagraph2[lang]}
              </p>
            </motion.div>

            {/* Core Values / Focus Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutTranslations.focusAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                    {iconsMap[idx] || <Layers className="text-primary-cyan" size={24} />}
                  </div>
                  <h4 className="text-white font-display font-semibold text-sm sm:text-base mb-2">
                    {area.title[lang]}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-sans">
                    {area.desc[lang]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Graphical Dashboard & Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Stat Card 1 - Projects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl glass-panel relative overflow-hidden flex flex-col items-center justify-center text-center aspect-square"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-cyan/10 flex items-center justify-center text-primary-cyan mb-4">
                <Layers size={22} />
              </div>
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                15+
              </span>
              <span className="text-xs text-gray-400 font-medium">
                {aboutTranslations.stats.projectsCompleted[lang]}
              </span>
            </motion.div>

            {/* Stat Card 2 - Certificates */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl glass-panel relative overflow-hidden flex flex-col items-center justify-center text-center aspect-square"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-4">
                <Award size={22} />
              </div>
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                12+
              </span>
              <span className="text-xs text-gray-400 font-medium">
                {aboutTranslations.stats.certifications[lang]}
              </span>
            </motion.div>

            {/* Stat Card 3 - Open Source */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl glass-panel relative overflow-hidden flex flex-col items-center justify-center text-center aspect-square"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Github size={22} />
              </div>
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                200+
              </span>
              <span className="text-xs text-gray-400 font-medium">
                {aboutTranslations.stats.githubStars[lang]}
              </span>
            </motion.div>

            {/* Stat Card 4 - Hours of learning */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl glass-panel relative overflow-hidden flex flex-col items-center justify-center text-center aspect-square"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
                <BookOpen size={22} />
              </div>
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                1,500+
              </span>
              <span className="text-xs text-gray-400 font-medium">
                {aboutTranslations.stats.coffee[lang]}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
