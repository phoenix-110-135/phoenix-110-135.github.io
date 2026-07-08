export interface LanguageText {
  en: string;
  fa: string;
}

export interface SkillItem {
  name: string;
  iconName: string; // Used to map to Lucide icons
  level: number; // 0-100
  description: LanguageText;
}

export interface SkillCategory {
  id: string;
  title: LanguageText;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: LanguageText;
  description: LanguageText;
  longDescription: LanguageText;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  category: 'ai' | 'security' | 'dev' | 'fullstack';
  imagePlaceholder: string; // Dynamic CSS gradient or icon representation
}

export interface CertificateItem {
  id: number;
  title: LanguageText;
  issuer: LanguageText;
  date: LanguageText;
  description: LanguageText;
  credentialUrl?: string;
}

export interface TimelineEvent {
  id: number;
  year: string;
  title: LanguageText;
  subtitle: LanguageText;
  description: LanguageText;
  iconType: 'code' | 'security' | 'ai' | 'academic';
}

export interface ContactInfo {
  github: string;
  linkedin: string;
  email: string;
  telegram: string;
}
