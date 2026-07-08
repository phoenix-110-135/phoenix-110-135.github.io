import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Send, Terminal, Shield, Brain } from 'lucide-react';
import { personalInfo, heroTranslations } from '../data';

interface HeroProps {
  lang: 'en' | 'fa';
}

export default function Hero({ lang }: HeroProps) {
  const [glitchText, setGlitchText] = useState('');
  const textArrayEn = ["AI Security Researcher", "Full-Stack Developer", "Cyber Security Learner"];
  const textArrayFa = ["پژوهشگر امنیت هوش مصنوعی", "توسعه‌دهنده فول‌استک", "پژوهشگر امنیت سایبری"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeArray = lang === 'en' ? textArrayEn : textArrayFa;
    const currentFullText = activeArray[textIndex % activeArray.length];

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setGlitchText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setGlitchText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentFullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before delete
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex(prev => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, lang]);

  const handleScrollTo = (id: string) => {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-bg-dark"
    >
      {/* Background grids and glowing blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="glow-blob w-[400px] h-[400px] bg-primary-cyan/20 top-1/4 left-10 animate-glow" />
        <div className="glow-blob w-[450px] h-[450px] bg-primary-purple/15 bottom-1/4 right-10 animate-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column (Hero copy) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start">
          
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary-cyan/30 bg-primary-cyan/5 text-xs text-primary-cyan font-mono mb-6"
          >
            <Shield size={12} className="animate-pulse" />
            <span>{heroTranslations.experienceBadge[lang]}</span>
          </motion.div>

          {/* Title / Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl text-white tracking-tight leading-tight mb-4"
          >
            <span className="text-gray-400 block text-2xl sm:text-3xl font-normal mb-2">
              {heroTranslations.greeting[lang]}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400">
              {personalInfo.name[lang]}
            </span>
          </motion.h1>

          {/* Typing Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-8 mb-6 flex items-center justify-center lg:justify-start"
          >
            <span className="font-mono text-base sm:text-lg text-primary-cyan tracking-wider flex items-center gap-2">
              <Terminal size={16} />
              <span>{glitchText}</span>
              <span className="w-1.5 h-5 bg-primary-cyan animate-pulse rounded-xs" />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8"
          >
            {heroTranslations.intro[lang]}
          </motion.p>

          {/* Buttons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start w-full"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-cyan to-primary-purple text-bg-dark font-display font-semibold hover:opacity-90 shadow-[0_4px_20px_rgba(34,211,238,0.25)] transition-all cursor-pointer hover:scale-102 flex items-center gap-2"
            >
              <span>{heroTranslations.viewProjects[lang]}</span>
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all font-display font-medium cursor-pointer"
            >
              {heroTranslations.contactMe[lang]}
            </button>

            <a
              href="assets/resume.pdf"
              download="Mohammad_Ali_Mohammadi_Nia_CV.pdf"
              className="px-6 py-3.5 rounded-xl border border-primary-cyan/30 hover:border-primary-cyan bg-primary-cyan/5 text-primary-cyan transition-all font-display font-medium flex items-center gap-2"
            >
              <span>{heroTranslations.downloadResume[lang]}</span>
            </a>
          </motion.div>

          {/* Quick Stats Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center gap-6 border-t border-white/5 pt-8 w-full justify-center lg:justify-start"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-cyan/10 flex items-center justify-center text-primary-cyan">
                <Brain size={18} />
              </div>
              <div className="text-start">
                <div className="text-white font-bold font-mono">10+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">{lang === 'en' ? 'AI Frameworks' : 'ابزار هوش مصنوعی'}</div>
              </div>
            </div>

            <div className="w-px h-8 bg-white/5" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-purple/10 flex items-center justify-center text-primary-purple">
                <Shield size={18} />
              </div>
              <div className="text-start">
                <div className="text-white font-bold font-mono">15+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">{lang === 'en' ? 'Security Audits' : 'ممیزی‌های امنیتی'}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Futuristic interactive profile) */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-85 sm:h-85 xl:w-96 xl:h-96 group"
          >
            {/* Spinning decorative borders */}
            <div className="absolute -inset-4 rounded-3xl border border-dashed border-primary-cyan/20 animate-[spin_40s_linear_infinite]" />
            <div className="absolute -inset-2 rounded-3xl border border-gradient-to-r from-primary-cyan to-primary-purple opacity-30 animate-pulse-slow" />
            
            {/* Hologram lines / cyber aesthetic inside card */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.1)] flex items-center justify-center">
              
              {/* Dynamic SVG Hologram representation */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary-cyan">
                  {/* Concentric target circles */}
                  <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_60s_linear_infinite]" />
                  <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 4" className="animate-[spin_20s_linear_infinite]" />
                  
                  {/* Scope lines */}
                  <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />

                  {/* Corner focus brackets */}
                  <path d="M 40,80 L 40,40 L 80,40" stroke="currentColor" strokeWidth="2" />
                  <path d="M 320,40 L 360,40 L 360,80" stroke="currentColor" strokeWidth="2" />
                  <path d="M 40,320 L 40,360 L 80,360" stroke="currentColor" strokeWidth="2" />
                  <path d="M 320,360 L 360,360 L 360,320" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              {/* Profile Image Frame */}
              <div className="w-full h-full relative flex items-center justify-center p-4">
                {/* Fallback elegant graphical avatar if no real photo in assets/profile/profile.png */}
                <div className="absolute inset-4 rounded-xl bg-gradient-to-b from-primary-cyan/10 to-primary-purple/10 flex flex-col items-center justify-center text-center p-6 border border-white/5 backdrop-blur-md group-hover:scale-[0.98] transition-transform duration-500">
                  <div className="w-24 h-24 rounded-full bg-bg-dark/80 border-2 border-primary-cyan flex items-center justify-center text-primary-cyan shadow-[0_0_20px_rgba(34,211,238,0.3)] mb-4">
                    <Brain size={42} className="animate-pulse" />
                  </div>
                  <h3 className="text-white font-display font-bold text-lg">{personalInfo.name[lang]}</h3>
                  <p className="text-xs text-primary-cyan font-mono mt-1">phoenix-110-135</p>
                  
                  {/* Binary decoration streams */}
                  <div className="mt-4 text-[9px] font-mono text-gray-500 max-w-[200px] select-none leading-tight opacity-60">
                    01000001 01001001 20 01010011 01100101 01100011 01110101 01110010 01101001 01110100 01111001
                  </div>
                </div>

                {/* Real profile image overlay - references specified 'assets/profile/' */}
                <img
                  src="assets/profile/profile.png"
                  alt={personalInfo.name[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  onError={(e) => {
                    // Fail silently, keeping the beautiful fallback active
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                  onLoad={(e) => {
                    // Show image if it loads successfully
                    (e.target as HTMLImageElement).classList.remove('opacity-0');
                    (e.target as HTMLImageElement).classList.add('opacity-100');
                  }}
                />
              </div>

              {/* Live telemetry badge inside photo */}
              <div className="absolute bottom-4 right-4 z-20 bg-bg-dark/80 border border-primary-cyan/30 px-3 py-1 rounded-md text-[10px] font-mono text-primary-cyan flex items-center gap-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>ONLINE // SEC_READY</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors cursor-pointer" onClick={() => handleScrollTo('about')}>
        <span className="text-xs uppercase font-mono tracking-widest">{lang === 'en' ? 'Discover' : 'کاوش'}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={14} className="text-primary-cyan" />
        </motion.div>
      </div>
    </section>
  );
}
