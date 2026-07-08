import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, Github, Linkedin, MessageSquare, ChevronRight, CheckCircle } from 'lucide-react';
import { contactTranslations, personalInfo } from '../data';

interface ContactProps {
  lang: 'en' | 'fa';
}

export default function Contact({ lang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);

    // Simulate sending email
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto close success alert after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="text-primary-cyan" size={20} />,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      name: 'Telegram',
      icon: <MessageSquare className="text-primary-purple" size={20} />,
      value: '@phoenix_110_135',
      href: personalInfo.telegramUrl
    },
    {
      name: 'GitHub',
      icon: <Github className="text-emerald-400" size={20} />,
      value: 'phoenix-110-135',
      href: personalInfo.githubUrl
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="text-blue-400" size={20} />,
      value: 'Mohammad Ali Mohammadi Nia',
      href: personalInfo.linkedinUrl
    }
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-bg-dark border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="glow-blob w-[400px] h-[400px] bg-primary-cyan/5 bottom-0 right-10 animate-glow" />
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
            {contactTranslations.title[lang]}
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
            {contactTranslations.subtitle[lang]}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Social Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-white font-display font-bold text-lg mb-4">
              {contactTranslations.findMeOn[lang]}
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-between p-5 rounded-2xl glass-panel glass-panel-hover border border-white/5 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary-cyan/20 transition-all duration-300">
                      {link.icon}
                    </div>
                    <div className="text-start">
                      <span className="text-xs text-gray-500 font-mono tracking-wider">{link.name}</span>
                      <h4 className="text-white text-sm sm:text-base font-semibold group-hover:text-primary-cyan transition-colors duration-300">
                        {link.value}
                      </h4>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl glass-panel relative border border-white/5"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Inputs grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-medium text-gray-400">
                      {contactTranslations.nameLabel[lang]}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/2 hover:bg-white/5 focus:bg-bg-dark focus:border-primary-cyan text-sm text-white transition-all outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-medium text-gray-400">
                      {contactTranslations.emailLabel[lang]}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/2 hover:bg-white/5 focus:bg-bg-dark focus:border-primary-cyan text-sm text-white transition-all outline-none"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-medium text-gray-400">
                    {contactTranslations.subjectLabel[lang]}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Cyber Security Collaboration"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/2 hover:bg-white/5 focus:bg-bg-dark focus:border-primary-cyan text-sm text-white transition-all outline-none"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-medium text-gray-400">
                    {contactTranslations.messageLabel[lang]}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/2 hover:bg-white/5 focus:bg-bg-dark focus:border-primary-cyan text-sm text-white transition-all outline-none resize-none"
                  />
                </div>

                {/* Success Feedback banner */}
                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm flex items-start gap-3"
                    >
                      <CheckCircle className="text-emerald-500 flex-shrink-0" size={18} />
                      <p className="font-sans leading-tight">
                        {contactTranslations.successMessage[lang]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Actions submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary-cyan to-primary-purple text-bg-dark font-display font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(34,211,238,0.2)] disabled:opacity-55"
                  >
                    <span>{submitting ? contactTranslations.sending[lang] : contactTranslations.sendButton[lang]}</span>
                    <Send size={14} className={submitting ? 'animate-pulse' : ''} />
                  </button>
                </div>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
