import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Award, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificatesData, certificatesTranslations } from '../data';

interface CertificatesProps {
  lang: 'en' | 'fa';
}

export default function Certificates({ lang }: CertificatesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive items count to show at once
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = certificatesData.length;
  const maxIndex = totalItems - itemsToShow;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Autoplay effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, maxIndex, itemsToShow]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (diffX > swipeThreshold) {
      // Swipe Left -> Next
      handleNext();
    } else if (diffX < -swipeThreshold) {
      // Swipe Right -> Prev
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="certificates" className="relative py-24 overflow-hidden bg-bg-dark border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="glow-blob w-[300px] h-[300px] bg-primary-cyan/10 top-10 right-10 animate-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-center md:text-start">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
            >
              {certificatesTranslations.title[lang]}
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
              {certificatesTranslations.subtitle[lang]}
            </motion.p>
          </div>

          {/* Slider Controls */}
          <div className="flex justify-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-cyan/50 hover:bg-white/10 transition-all cursor-pointer shadow-lg"
              aria-label="Previous Certificate"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-cyan/50 hover:bg-white/10 transition-all cursor-pointer shadow-lg"
              aria-label="Next Certificate"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider Window Container */}
        <div
          className="relative overflow-hidden p-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Translating Track */}
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                className="flex-shrink-0 transition-all duration-300"
                style={{
                  width: `calc(${100 / itemsToShow}% - ${(6 * (itemsToShow - 1)) / itemsToShow}px)`,
                }}
              >
                <div className="rounded-2xl glass-panel relative overflow-hidden group border border-white/5 flex flex-col justify-between h-[380px]">
                  
                  {/* Certificate Image Frame with error fallback */}
                  <div className="relative h-44 bg-slate-900 border-b border-white/5 overflow-hidden flex items-center justify-center">
                    
                    {/* The beautiful fallback Vector Card - visible until image loads */}
                    <div className="absolute inset-0 bg-gradient-to-br from-bg-dark to-slate-950 p-6 flex flex-col justify-between z-0">
                      {/* Security Guilloche vector pattern in fallback */}
                      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M 0,20 Q 50,50 100,20 T 200,20" stroke="currentColor" strokeWidth="0.5" className="text-primary-cyan" />
                          <path d="M 0,40 Q 50,70 100,40 T 200,40" stroke="currentColor" strokeWidth="0.5" className="text-primary-purple" />
                          <path d="M 0,60 Q 50,90 100,60 T 200,60" stroke="currentColor" strokeWidth="0.5" className="text-primary-cyan" />
                        </svg>
                      </div>

                      <div className="flex items-center justify-between">
                        <Award size={26} className="text-primary-cyan animate-pulse-slow" />
                        <span className="text-[9px] font-mono font-bold tracking-wider text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase">
                          {certificatesTranslations.secured[lang]}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] text-gray-500 font-mono tracking-wider">{cert.issuer[lang]}</span>
                        <h4 className="text-white font-display font-semibold text-sm line-clamp-2 leading-tight">
                          {cert.title[lang]}
                        </h4>
                      </div>

                      {/* Decal stamp hologram */}
                      <div className="flex items-center justify-between border-t border-white/5 pt-3">
                        <span className="text-[9px] font-mono text-gray-500">ID: SEC-00{cert.id}</span>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-primary-cyan to-primary-purple animate-pulse" />
                      </div>
                    </div>

                    {/* Actual certificate photo - paths under 'certificates/' as requested */}
                    <img
                      src={`certificates/certificate-${cert.id}.png`}
                      alt={cert.title[lang]}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 group-hover:scale-105 transition-all duration-500"
                      onError={(e) => {
                        // Fail silently, maintaining vector background active
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                      onLoad={(e) => {
                        // Display actual photo if exists in assets
                        (e.target as HTMLImageElement).classList.remove('opacity-0');
                        (e.target as HTMLImageElement).classList.add('opacity-100');
                      }}
                    />
                  </div>

                  {/* Copy Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-gray-500 font-mono text-[10px] sm:text-xs mb-2">
                        <Calendar size={12} className="text-primary-cyan" />
                        <span>{cert.date[lang]}</span>
                      </div>

                      <h3 className="text-white font-display font-bold text-base line-clamp-1 mb-2 group-hover:text-primary-cyan transition-colors duration-300">
                        {cert.title[lang]}
                      </h3>
                      
                      <p className="text-gray-400 text-xs leading-relaxed font-sans line-clamp-3">
                        {cert.description[lang]}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 border-t border-white/5 pt-4 text-xs font-semibold text-primary-cyan group-hover:text-white transition-colors">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>{cert.issuer[lang]}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel indicators dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-primary-cyan' : 'w-1.5 bg-white/10'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
