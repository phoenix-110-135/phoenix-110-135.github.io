import React from 'react';
import { motion } from 'motion/react';
import { Code, Shield, BrainCircuit, Calendar, Award } from 'lucide-react';
import { timelineData, timelineTranslations } from '../data';

interface TimelineProps {
  lang: 'en' | 'fa';
}

export default function Timeline({ lang }: TimelineProps) {
  const getTimelineIcon = (type: 'code' | 'security' | 'ai' | 'academic') => {
    switch (type) {
      case 'security':
        return <Shield className="text-red-400" size={18} />;
      case 'ai':
        return <BrainCircuit className="text-primary-purple animate-pulse" size={18} />;
      case 'academic':
        return <Award className="text-amber-400" size={18} />;
      default:
        return <Code className="text-primary-cyan" size={18} />;
    }
  };

  return (
    <section id="timeline" className="relative py-24 overflow-hidden bg-bg-dark border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="glow-blob w-[350px] h-[350px] bg-primary-cyan/5 bottom-1/4 right-1/4 animate-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-start mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
          >
            {timelineTranslations.title[lang]}
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
            {timelineTranslations.subtitle[lang]}
          </motion.p>
        </div>

        {/* Timeline Line & Cards */}
        <div className="relative">
          
          {/* Center Line for Desktop, Left Line for Mobile (Adjust for RTL/LTR) */}
          <div 
            className={`absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-cyan via-primary-purple to-transparent`}
            style={{
              left: lang === 'fa' 
                ? 'calc(100% - 1.25rem)' 
                : '1.25rem',
              transform: 'translateX(-50%)',
              '@media (min-width: 1024px)': {
                left: '50%',
              }
            } as any}
          />
          
          {/* Custom inline helper to handle desktop centering in modern React without complex stylesheets */}
          <style dangerouslySetInnerHTML={{__html: `
            @media (min-width: 1024px) {
              .center-timeline-line {
                left: 50% !important;
              }
            }
          `}} />
          <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-cyan via-primary-purple to-transparent center-timeline-line hidden lg:block" style={{ left: '50%', transform: 'translateX(-50%)' }} />

          <div className="space-y-12">
            {timelineData.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`flex flex-col lg:flex-row items-stretch relative w-full ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  style={{ direction: lang === 'fa' ? 'rtl' : 'ltr' }}
                >
                  {/* Timeline Spacer for Desktop */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Timeline Node Point indicator */}
                  <div 
                    className={`absolute top-6 z-20 w-10 h-10 rounded-xl bg-bg-dark border-2 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 ${
                      event.id === 5 
                        ? 'border-primary-purple shadow-[0_0_15px_rgba(192,132,252,0.4)]'
                        : 'border-primary-cyan shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                    }`}
                    style={{
                      left: lang === 'fa' ? 'auto' : '1.25rem',
                      right: lang === 'fa' ? '1.25rem' : 'auto',
                      transform: 'translateX(50%)',
                      '@media (min-width: 1024px)': {
                        left: '50%',
                        right: 'auto',
                        transform: 'translateX(-50%)'
                      }
                    } as any}
                  >
                    {/* Inner small styles for desktop node centering */}
                    <style dangerouslySetInnerHTML={{__html: `
                      @media (min-width: 1024px) {
                        .node-${event.id} {
                          left: 50% !important;
                          right: auto !important;
                          transform: translateX(-50%) !important;
                        }
                      }
                    `}} />
                    <div className={`node-${event.id} absolute top-0 flex items-center justify-center w-full h-full`}>
                      {getTimelineIcon(event.iconType)}
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div 
                    className="w-full lg:w-1/2 pl-12 lg:pl-0 pr-0 lg:px-12 relative z-10"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden group hover:border-primary-cyan/20 transition-all duration-300"
                    >
                      {/* Top year label */}
                      <div className="flex items-center gap-1.5 text-xs font-mono text-primary-cyan font-bold tracking-widest mb-3 uppercase">
                        <Calendar size={12} />
                        <span>{event.year}</span>
                      </div>

                      <h3 className="text-white font-display font-bold text-lg sm:text-xl mb-1 group-hover:text-primary-cyan transition-colors duration-300">
                        {event.title[lang]}
                      </h3>
                      
                      <h4 className="text-gray-400 font-mono text-xs sm:text-sm font-medium mb-4">
                        {event.subtitle[lang]}
                      </h4>

                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
                        {event.description[lang]}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
