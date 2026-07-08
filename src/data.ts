import { SkillCategory, ProjectItem, CertificateItem, TimelineEvent } from './types';

export const personalInfo = {
  name: {
    en: "Mohammad Ali Mohammadi Nia",
    fa: "محمد علی محمدی نیا"
  },
  title: {
    en: "Developer | AI Enthusiast | Cyber Security Learner",
    fa: "توسعه‌دهنده | علاقه‌مند به هوش مصنوعی | پژوهشگر امنیت سایبری"
  },
  githubUsername: "phoenix-110-135",
  githubUrl: "https://github.com/phoenix-110-135",
  linkedinUrl: "https://linkedin.com", // Placeholder
  telegramUrl: "https://t.me/phoenix_110_135", // Clean link based on standard username
  email: "a87h97@gmail.com"
};

export const navTranslations = {
  home: { en: "Home", fa: "خانه" },
  about: { en: "About", fa: "درباره من" },
  skills: { en: "Skills", fa: "مهارت‌ها" },
  projects: { en: "Projects", fa: "پروژه‌ها" },
  certificates: { en: "Certificates", fa: "گواهینامه‌ها" },
  timeline: { en: "Timeline", fa: "مسیر رشد" },
  github: { en: "GitHub", fa: "گیت‌هاب" },
  contact: { en: "Contact", fa: "تماس با من" }
};

export const heroTranslations = {
  greeting: {
    en: "Hello, I'm",
    fa: "سلام، من"
  },
  intro: {
    en: "I build secure, intelligent software. Specialized in bridging the gap between advanced Artificial Intelligence, modern Software Engineering, and Cyber Security.",
    fa: "من نرم‌افزارهای امن و هوشمند می‌سازم. تخصص من در پر کردن شکاف بین هوش مصنوعی پیشرفته، مهندسی نرم‌افزار مدرن و امنیت سایبری است."
  },
  viewProjects: {
    en: "View Projects",
    fa: "مشاهده پروژه‌ها"
  },
  downloadResume: {
    en: "Download Resume",
    fa: "دانلود رزومه"
  },
  contactMe: {
    en: "Contact Me",
    fa: "تماس با من"
  },
  experienceBadge: {
    en: "Active Developer & Researcher",
    fa: "توسعه‌دهنده و پژوهشگر فعال"
  }
};

export const aboutTranslations = {
  title: { en: "About Me", fa: "درباره من" },
  subtitle: { en: "My Journey & Vision", fa: "مسیر حرکت و دیدگاه من" },
  bioParagraph1: {
    en: "I am a passionate software developer and security researcher with a deep interest in Artificial Intelligence, Machine Learning, and Cyber Security. My core focus lies in the intersection of these fields: building intelligent, scalable applications while ensuring robust security standards, especially in AI systems (AI Security & LLM Safety).",
    fa: "من یک توسعه‌دهنده نرم‌افزار و پژوهشگر امنیت سایبری مشتاق با علاقه‌ای عمیق به هوش مصنوعی، یادگیری ماشین و امنیت اطلاعات هستم. تمرکز اصلی من در نقطه تلاقی این حوزه‌ها قرار دارد: ساخت برنامه‌های هوشمند و مقیاس‌پذیر در حالی که از استانداردهای امنیتی قوی، به ویژه در سیستم‌های هوش مصنوعی (امنیت هوش مصنوعی و ایمنی LLM) اطمینان حاصل می‌کنم."
  },
  bioParagraph2: {
    en: "I actively explore how cutting-edge machine learning tools can be deployed securely and defensively, and conversely, how malicious actors might exploit AI vulnerabilities (such as prompt injections, training data poisoning, and model extraction). I am constantly learning, building, and contributing to open-source software.",
    fa: "من به طور فعال بررسی می‌کنم که چگونه ابزارهای یادگیری ماشین پیشرفته می‌توانند به طور ایمن و دفاعی مستقر شوند و از سوی دیگر، چگونه مهاجمان ممکن است از آسیب‌پذیری‌های هوش مصنوعی (مانند تزریق پرامپت، مسمومیت داده‌های آموزشی و استخراج مدل) سوءاستفاده کنند. من همواره در حال یادگیری، ساختن و مشارکت در پروژه‌های متن‌باز هستم."
  },
  focusAreasTitle: {
    en: "Areas of Expertise",
    fa: "حوزه‌های تخصصی"
  },
  focusAreas: [
    {
      title: { en: "AI Security & LLM Safety", fa: "امنیت هوش مصنوعی و ایمنی LLM" },
      desc: {
        en: "Analyzing vulnerabilities in Large Language Models, defending against Prompt Injection attacks, and researching model alignment/guardrails.",
        fa: "تحلیل آسیب‌پذیری‌ها در مدل‌های زبانی بزرگ، دفاع در برابر حملات تزریق پرامپت (Prompt Injection) و پژوهش در زمینه همسوسازی و گاردریل‌های مدل."
      }
    },
    {
      title: { en: "Full-Stack Development", fa: "توسعه فول‌استک نرم‌افزار" },
      desc: {
        en: "Designing responsive, user-friendly architectures using Python, Node.js, and modern frameworks with secure coding practices.",
        fa: "طراحی معماری‌های ریسپانسیو و کاربرپسند با استفاده از پایتون، نود جی‌اس و فریم‌ورک‌های مدرن همراه با رعایت اصول کدنویسی امن."
      }
    },
    {
      title: { en: "Machine Learning Solutions", fa: "راه‌حل‌های یادگیری ماشین" },
      desc: {
        en: "Developing and fine-tuning predictive models, implementing LLM workflows, and creating autonomous AI Agents.",
        fa: "توسعه و بهینه‌سازی مدل‌های پیش‌بینی، پیاده‌سازی جریان‌های کاری مبتنی بر LLM و ساخت عامل‌های هوشمند خودمختار (AI Agents)."
      }
    },
    {
      title: { en: "Cyber Security & Pentesting", fa: "امنیت سایبری و تست نفوذ" },
      desc: {
        en: "Conducting web application vulnerability analysis, identifying secure authentication flaws, and adhering to OWASP security frameworks.",
        fa: "انجام تحلیل آسیب‌پذیری‌های برنامه‌های تحت وب، شناسایی نقص‌های احراز هویت امن و انطباق با چارچوب‌های امنیتی OWASP."
      }
    }
  ],
  stats: {
    projectsCompleted: { en: "Projects Completed", fa: "پروژه تکمیل شده" },
    certifications: { en: "Certificates Earned", fa: "گواهینامه دریافتی" },
    githubStars: { en: "Open Source Contributions", fa: "مشارکت فعال گیت‌هاب" },
    coffee: { en: "Hours of Learning & Coding", fa: "ساعت آموزش و کدنویسی" }
  }
};

export const skillsTranslations = {
  title: { en: "Skills & Expertise", fa: "مهارت‌ها و تخصص‌ها" },
  subtitle: { en: "Technical Proficiency & Tooling", fa: "سطح تسلط فنی و ابزارها" },
  experienceLevel: { en: "Proficiency", fa: "میزان تسلط" }
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: { en: "Programming & Frameworks", fa: "برنامه‌نویسی و فریم‌ورک‌ها" },
    skills: [
      { name: "Python", iconName: "Python", level: 90, description: { en: "Core language for AI, automation, and security scripting", fa: "زبان اصلی برای هوش مصنوعی، اتوماسیون و اسکریپت‌نویسی امنیتی" } },
      { name: "JavaScript", iconName: "JavaScript", level: 85, description: { en: "Interactive frontend features and cross-platform scripting", fa: "ویژگی‌های تعاملی فرانت‌اند و اسکریپت‌نویسی چندسکویی" } },
      { name: "PHP", iconName: "PHP", level: 75, description: { en: "Server-side web logic and legacy integration", fa: "منطق سمت سرور وب و یکپارچه‌سازی سیستم‌های قدیمی" } },
      { name: "Django", iconName: "Django", level: 80, description: { en: "Robust web framework with built-in security features", fa: "فریم‌ورک قدرتمند پایتون مجهز به ویژگی‌های امنیتی پیش‌فرض" } },
      { name: "Flask", iconName: "Flask", level: 85, description: { en: "Microframework for lightweight REST APIs and web services", fa: "میکرو فریم‌ورک سبک برای ایجاد APIهای REST سریع" } },
      { name: "Node.js", iconName: "NodeJS", level: 80, description: { en: "Asynchronous backend runtimes for scalable services", fa: "محیط اجرای نامتقارن سمت سرور برای سرویس‌های مقیاس‌پذیر" } },
      { name: "Express.js", iconName: "ExpressJS", level: 80, description: { en: "Minimalist web framework for Node.js API backends", fa: "فریم‌ورک وب سبک و انعطاف‌پذیر برای وب‌سرویس‌های نود جی‌اس" } }
    ]
  },
  {
    id: "ai",
    title: { en: "Artificial Intelligence", fa: "هوش مصنوعی" },
    skills: [
      { name: "Machine Learning", iconName: "BrainCircuit", level: 85, description: { en: "Regression, classification, and predictive pipeline development", fa: "توسعه خطوط لوله پیش‌بینی، رگرسیون و دسته‌بندی داده‌ها" } },
      { name: "Deep Learning", iconName: "Cpu", level: 80, description: { en: "Neural networks, computer vision, and NLP model creation", fa: "شبکه‌های عصبی عمیق، بینایی ماشین و پردازش زبان طبیعی" } },
      { name: "PyTorch", iconName: "Flame", level: 82, description: { en: "Deep learning experimentation and tensor computation", fa: "انجام آزمایش‌های یادگیری عمیق و محاسبات پیشرفته تنسورها" } },
      { name: "TensorFlow", iconName: "Grid", level: 78, description: { en: "Building and deploying robust production-ready models", fa: "ساخت و استقرار مدل‌های قدرتمند آماده محیط عملیاتی" } },
      { name: "LangChain", iconName: "Link", level: 85, description: { en: "Chaining LLMs and creating context-aware applications", fa: "زنجیره‌سازی مدل‌های زبانی بزرگ و ساخت برنامه‌های آگاه از متن" } },
      { name: "AI Agents", iconName: "Bot", level: 85, description: { en: "Designing autonomous, goal-oriented LLM-based agents", fa: "طراحی عامل‌های خودمختار هوشمند و هدف‌محور مبتنی بر LLM" } },
      { name: "LLM Applications", iconName: "Sparkles", level: 88, description: { en: "Integrating frontier LLMs into secure operational workflows", fa: "یکپارچه‌سازی مدل‌های زبانی بزرگ مطرح در فرآیندهای کاری امن" } }
    ]
  },
  {
    id: "security",
    title: { en: "Cyber & AI Security", fa: "امنیت سایبری و هوش مصنوعی" },
    skills: [
      { name: "Web Security", iconName: "ShieldAlert", level: 85, description: { en: "Vulnerability research, penetration testing, and secure coding", fa: "پژوهش روی آسیب‌پذیری‌ها، تست نفوذ و کدنویسی امن" } },
      { name: "AI Security", iconName: "ShieldCheck", level: 90, description: { en: "Defending LLMs against injection, evasion, and privacy attacks", fa: "دفاع از سیستم‌های هوش مصنوعی در برابر حملات تزریق، فرار و نشت داده" } },
      { name: "OWASP Concepts", iconName: "FileCheck", level: 88, description: { en: "Expert knowledge of web top 10 and LLM security risks", fa: "تسلط بر ده آسیب‌پذیری برتر وب و مخاطرات امنیتی مدل‌های زبانی" } },
      { name: "Secure Authentication", iconName: "Key", level: 85, description: { en: "Implementing OAuth2, JWT, and multi-factor authorization", fa: "پیاده‌سازی مکانیزم‌های پیشرفته احراز هویت مانند JWT و OAuth2" } },
      { name: "Vulnerability Analysis", iconName: "Search", level: 82, description: { en: "Analyzing threat vectors and scanning source code for flaws", fa: "تحلیل بردار‌های تهدید و اسکن سورس‌کدها برای یافتن باگ‌های امنیتی" } }
    ]
  },
  {
    id: "database",
    title: { en: "Database Systems", fa: "پایگاه‌های داده" },
    skills: [
      { name: "PostgreSQL", iconName: "Database", level: 85, description: { en: "Relational database schema design and advanced query tuning", fa: "طراحی ساختار پایگاه‌داده رابطه‌ای و بهینه‌سازی کوئری‌های پیچیده" } },
      { name: "MongoDB", iconName: "FileJson", level: 80, description: { en: "Flexible document-based database for rapid JSON structures", fa: "پایگاه‌داده سندمحور منعطف برای کار با ساختارهای پویای JSON" } },
      { name: "Redis", iconName: "Zap", level: 82, description: { en: "In-memory caching and session state management", fa: "ذخیره‌سازی سریع داده‌ها در حافظه موقت و مدیریت نشست‌های کاربر" } }
    ]
  },
  {
    id: "devops",
    title: { en: "DevOps & Tooling", fa: "دواپس و ابزارها" },
    skills: [
      { name: "Docker", iconName: "Container", level: 80, description: { en: "Containerizing web services for consistent environments", fa: "کانتینری‌سازی سرویس‌های وب برای تضمین یکپارچگی محیط اجرا" } },
      { name: "Linux", iconName: "Terminal", level: 85, description: { en: "Systems administration, shell scripting, and server hardening", fa: "مدیریت سیستم‌های لینوکسی، شل اسکریپتینگ و امن‌سازی سرور" } },
      { name: "Nginx", iconName: "Server", level: 75, description: { en: "Configuring high-performance reverse proxies and static hosts", fa: "پیکربندی سرورهای پروکسی معکوس پرسرعت و میزبانی استاتیک" } },
      { name: "Git", iconName: "GitBranch", level: 88, description: { en: "Advanced version control workflows and collaborative branching", fa: "کنترل نسخه پیشرفته و مدیریت شاخه‌های پروژه در کارهای تیمی" } },
      { name: "GitHub", iconName: "Github", level: 90, description: { en: "Continuous integration, actions, and open source collaboration", fa: "یکپارچه‌سازی مداوم، اکشن‌های گیت‌هاب و تعاملات پروژه‌های متن‌باز" } }
    ]
  }
];

export const projectTranslations = {
  title: { en: "Projects Portfolio", fa: "نمونه کارها و پروژه‌ها" },
  subtitle: { en: "Innovative Works in AI & Security", fa: "آثار نوآورانه در هوش مصنوعی و امنیت" },
  all: { en: "All", fa: "همه" },
  ai: { en: "AI & ML", fa: "هوش مصنوعی" },
  security: { en: "Cyber Security", fa: "امنیت سایبری" },
  dev: { en: "Web Dev", fa: "توسعه وب" },
  githubLink: { en: "GitHub Code", fa: "کد گیت‌هاب" },
  demoLink: { en: "Live Demo", fa: "پیش‌نمایش زنده" },
  underDevelopment: { en: "Active Project", fa: "پروژه فعال" }
};

export const projectsData: ProjectItem[] = [
  {
    id: "haftkhan",
    title: {
      en: "Haftkhan AI Security Challenges",
      fa: "چالش‌های امنیتی هوش مصنوعی هفت‌خوان"
    },
    description: {
      en: "An interactive educational platform designed for learning AI security, LLM safety, and adversarial prompt injections.",
      fa: "یک پلتفرم آموزشی و تعاملی طراحی شده برای یادگیری امنیت هوش مصنوعی، ایمنی مدل‌های زبانی بزرگ و تزریق پرامپت خصمانه."
    },
    longDescription: {
      en: "Haftkhan (named after the legendary seven quests of Rostam) challenges security researchers and developers to bypass or defend custom LLMs across seven progressively harder stages. Players learn about jailbreaking, prompt leaks, system prompt protection, and LLM guardrails in a secure, gamified sandbox.",
      fa: "هفت‌خوان (الهام گرفته از هفت خوان رستم) یک بستر شبیه‌سازی‌شده است که در آن پژوهشگران امنیت و برنامه‌نویسان باید تلاش کنند تا گاردریل‌های امنیتی مدل‌های زبانی را در ۷ مرحله با سختی صعودی دور بزنند یا تقویت کنند. کاربران تکنیک‌های فرار، نشت دستورات سیستمی و دفاع در برابر حملات تزریق را در محیطی بازی‌گونه فرا می‌گیرند."
    },
    tags: ["React", "Python", "FastAPI", "LLM Security", "LangChain", "Gemini API", "Tailwind CSS"],
    githubUrl: "https://github.com/phoenix-110-135/Haftkhan-AI-Security",
    demoUrl: "https://github.com/phoenix-110-135/Haftkhan-AI-Security", // Redirect link to repo as live demo isn't pre-hosted
    category: "security",
    imagePlaceholder: "from-red-600 to-amber-600"
  },
  {
    id: "antifakenews",
    title: {
      en: "Anti Fake News Platform",
      fa: "پلتفرم ضد اخبار جعلی"
    },
    description: {
      en: "AI-powered media analysis platform designed to detect misinformation, fake news, and propaganda using NLP models.",
      fa: "پلتفرمی مجهز به هوش مصنوعی برای تحلیل رسانه‌ها با هدف تشخیص اخبار جعلی، اطلاعات نادرست و شایعه‌پراکنی با کمک مدل‌های پردازش زبان طبیعی."
    },
    longDescription: {
      en: "This platform scrapes and processes real-time media feeds, applying deep-learning text classification models and NLP algorithms to compute a 'credibility score' for articles. It detects semantic biases, logical fallacies, and factual deviations, helping users identify echo chambers and verify sources easily.",
      fa: "این پلتفرم فیدهای خبری رسانه‌ها را به صورت زنده جمع‌آوری کرده و با اعمال مدل‌های طبقه‌بندی متن یادگیری عمیق و پردازش زبان طبیعی (NLP)، «امتیاز اعتبار» اخبار را محاسبه می‌کند. این سیستم سوگیری‌های معنایی، مغالطه‌های منطقی و انحرافات واقعی از حقیقت را شناسایی کرده و به کاربران در تشخیص منابع معتبر کمک می‌کند."
    },
    tags: ["Python", "Django", "NLP", "TensorFlow", "Scrapy", "Tailwind CSS", "NLTK"],
    githubUrl: "https://github.com/phoenix-110-135",
    category: "ai",
    imagePlaceholder: "from-blue-600 to-indigo-800"
  },
  {
    id: "llm-guard",
    title: {
      en: "LLM Guardrail Proxy",
      fa: "پروکسی محافظتی مدل‌های زبانی"
    },
    description: {
      en: "A lightweight security gateway proxy that filters input and output payloads for Large Language Models to block malicious payloads.",
      fa: "یک پروکسی واسط امنیتی و سبک که ورودی‌ها و خروجی‌های مدل‌های زبانی بزرگ را فیلتر کرده تا جلوی دستورات مخرب و نشت اطلاعات حساس را بگیرد."
    },
    longDescription: {
      en: "Implemented as a reverse proxy, this tool intercept API requests to OpenAI, Anthropic, or local HuggingFace endpoints. It scans incoming prompts for known injection signatures, detects PII (Personally Identifiable Information) in outgoing generations, and enforces strict rate-limits and safety token thresholds.",
      fa: "این ابزار به عنوان یک پروکسی معکوس، درخواست‌های API ارسالی به مدل‌های زبانی بزرگ را بررسی می‌کند. این سرویس پرامپت‌های ورودی را برای یافتن الگوهای تزریق اسکن کرده، اطلاعات حساس هویتی (PII) در پاسخ‌های خروجی را مسدود می‌کند و محدودیت‌های ترافیکی قوی اعمال می‌کند."
    },
    tags: ["Node.js", "Express", "RegEx Engines", "AI Security", "OAuth2", "Security Proxy"],
    githubUrl: "https://github.com/phoenix-110-135",
    category: "security",
    imagePlaceholder: "from-purple-600 to-pink-700"
  },
  {
    id: "autonomous-scanner",
    title: {
      en: "Autonomous Vulnerability Agent",
      fa: "عامل هوشمند اسکنر آسیب‌پذیری"
    },
    description: {
      en: "An experimental AI Agent capable of orchestrating web security scanners and compiling intelligent reports.",
      fa: "یک عامل هوش مصنوعی آزمایشی با قابلیت هماهنگ‌سازی اسکنرهای امنیت وب و گردآوری گزارش‌های تحلیلی هوشمند."
    },
    longDescription: {
      en: "Leveraging LangChain and GPT-4 / Gemini, this agent receives a target URL scope, dynamically decides which scanning tool to launch (Nmap, Nikto, OWASP ZAP), runs them inside sandbox environments, parses the raw output files, and creates beautifully formatted PDF vulnerability reports for human security analysts.",
      fa: "این عامل هوشمند با بهره‌گیری از LangChain و مدل‌های پیشرفته، آدرس هدف را به عنوان ورودی دریافت کرده و به صورت پویا تصمیم می‌گیرد چه ابزار اسکنی (مانند Nmap یا OWASP ZAP) را اجرا کند. سپس با تحلیل داده‌های خام، گزارش‌های فوق‌العاده دقیق و ساختاریافته نفوذ تولید می‌کند."
    },
    tags: ["LangChain", "Python", "Docker API", "OWASP ZAP", "AI Agents", "PDF Generation"],
    githubUrl: "https://github.com/phoenix-110-135",
    category: "ai",
    imagePlaceholder: "from-cyan-600 to-emerald-700"
  }
];

export const certificatesTranslations = {
  title: { en: "Certifications", fa: "مدارک و گواهینامه‌ها" },
  subtitle: { en: "Professional Courses & Verifications", fa: "دوره‌های تخصصی گذرانده شده و مدارک معتبر" },
  viewCredential: { en: "Verify Credential", fa: "تایید اعتبار مدرک" },
  secured: { en: "Official Certificate", fa: "گواهی رسمی" }
};

// 12 Certificates as requested by the user
export const certificatesData: CertificateItem[] = [
  {
    id: 1,
    title: { en: "AI Security Essentials", fa: "اصول و مبانی امنیت هوش مصنوعی" },
    issuer: { en: "DeepLearning.AI", fa: "مؤسسه دیپ‌لرنینگ" },
    date: { en: "November 2025", fa: "آبان ۱۴۰۴" },
    description: { en: "Advanced study of adversarial attacks, prompt injection prevention, and watermarking models.", fa: "مطالعه پیشرفته حملات خصمانه، روش‌های پیشگیری از تزریق پرامپت و تکنیک‌های واترمارک مدل." }
  },
  {
    id: 2,
    title: { en: "Practical Web Pentesting", fa: "تست نفوذ کاربردی برنامه‌های تحت وب" },
    issuer: { en: "TCM Security", fa: "مؤسسه امنیتی TCM" },
    date: { en: "September 2025", fa: "شهریور ۱۴۰۴" },
    description: { en: "Hands-on penetration testing training covering SQL injection, XSS, CSRF, and custom network structures.", fa: "آموزش عملی تست نفوذ شامل کشف و بهره‌برداری آسیب‌پذیری‌های وب نظیر SQL Injection و XSS." }
  },
  {
    id: 3,
    title: { en: "Neural Networks and Deep Learning", fa: "شبکه‌های عصبی و یادگیری عمیق" },
    issuer: { en: "Coursera / Stanford", fa: "کورسرا / دانشگاه استنفورد" },
    date: { en: "July 2025", fa: "تیر ۱۴۰۴" },
    description: { en: "Mathematical foundations of deep learning, forward/backpropagation, and multi-layer neural optimization.", fa: "مبانی ریاضی یادگیری عمیق، رفت و برگشت پس‌انتشار و بهینه‌سازی شبکه‌های چندلایه." }
  },
  {
    id: 4,
    title: { en: "OWASP Top 10 Security Professional", fa: "متخصص امنیت استانداردهای ده‌گانه OWASP" },
    issuer: { en: "PortSwigger Web Security", fa: "آکادمی امنیت پورت‌سویگر" },
    date: { en: "May 2025", fa: "اردیبهشت ۱۴۰۴" },
    description: { en: "Rigorous verification of exploitation and mitigation techniques for the ten most critical web app flaws.", fa: "تاییدیه تخصصی در زمینه روش‌های سوءاستفاده و دفاع در برابر ۱۰ آسیب‌پذیری بحرانی وب." }
  },
  {
    id: 5,
    title: { en: "Generative AI with Large Language Models", fa: "هوش مصنوعی مولد با مدل‌های زبانی بزرگ" },
    issuer: { en: "AWS / DeepLearning.AI", fa: "آمازون و دیپ‌لرنینگ" },
    date: { en: "March 2025", fa: "اسفند ۱۴۰۳" },
    description: { en: "In-depth training on LLM lifecycle, instruction fine-tuning, RLHF, and computational optimization.", fa: "آموزش دقیق چرخه حیات مدل‌های زبانی، تنظیم دقیق دستورات، RLHF و بهینه‌سازی محاسباتی." }
  },
  {
    id: 6,
    title: { en: "Python for Cybersecurity Specialists", fa: "برنامه‌نویسی پایتون برای متخصصین امنیت" },
    issuer: { en: "OffSec (Offensive Security)", fa: "مؤسسه آفنسیو سکیوریتی" },
    date: { en: "January 2025", fa: "دی ۱۴۰۳" },
    description: { en: "Developing proprietary network tools, customized port scanners, and automation exploits using Python.", fa: "توسعه ابزارهای شبکه اختصاصی، اسکنرهای پورت سفارشی و اکسپلویت‌های اتوماسیون با پایتون." }
  },
  {
    id: 7,
    title: { en: "Django Enterprise Secure Web Systems", fa: "طراحی سیستم‌های وب امن سازمانی با جنگو" },
    issuer: { en: "Udemy Certified", fa: "گواهی‌نامه رسمی یودمی" },
    date: { en: "October 2024", fa: "مهر ۱۴۰۳" },
    description: { en: "Architecting scale backend apps with secure cookie handling, CSRF defense, and optimized PostgreSQL pipelines.", fa: "معماری برنامه‌های بک‌اند مقیاس‌پذیر همراه با کوکی‌های امن، دفاع CSRF و پایگاه‌داده جنگو." }
  },
  {
    id: 8,
    title: { en: "Docker & Kubernetes Container Security", fa: "امنیت کانتینرها در داکر و کوبرنتیز" },
    issuer: { en: "Linux Foundation", fa: "بنیاد لینوکس" },
    date: { en: "August 2024", fa: "مرداد ۱۴۰۳" },
    description: { en: "Hardening Dockerfiles, rootless setups, kernel namespace configuration, and runtime monitoring.", fa: "امن‌سازی داکرفایل‌ها، تنظیمات بدون دسترسی روت، پیکربندی فضاهای نام هسته و نظارت بر زمان اجرا." }
  },
  {
    id: 9,
    title: { en: "Prompt Engineering Advanced Techniques", fa: "تکنیک‌های پیشرفته مهندسی پرامپت" },
    issuer: { en: "Vanderbilt University", fa: "دانشگاه وندربیلت" },
    date: { en: "June 2024", fa: "خرداد ۱۴۰۳" },
    description: { en: "Mastering chain-of-thought, ReAct framework, and meta-prompts for complex agent systems.", fa: "تسلط بر الگوهای زنجیره تفکر، چارچوب ReAct و پرامپت‌های متا برای سیستم‌های عامل هوشمند." }
  },
  {
    id: 10,
    title: { en: "Database Design and SQL Hardening", fa: "طراحی پایگاه‌داده و امن‌سازی اس‌کیوال" },
    issuer: { en: "Oracle Academy", fa: "آکادمی اوراکل" },
    date: { en: "April 2024", fa: "فروردین ۱۴۰۳" },
    description: { en: "Normal forms, secure user role permissions, stored procedure hardening, and blind SQL injection prevention.", fa: "نرمال‌سازی پایگاه‌داده، پرمیشن‌های امن نقش کاربر، توابع ذخیره‌شده و مقابله با حملات Blind SQL." }
  },
  {
    id: 11,
    title: { en: "AI Ethics, Governance & Model Safety", fa: "اخلاق، حاکمیت و ایمنی مدل‌های هوش مصنوعی" },
    issuer: { en: "Microsoft Certified", fa: "مدرک رسمی مایکروسافت" },
    date: { en: "February 2024", fa: "بهمن ۱۴۰۲" },
    description: { en: "Analyzing bias, system toxicity, and safety guardrails for generative neural applications.", fa: "بررسی سوگیری، سمیت سیستم و ایجاد گاردریل‌های ایمنی برای برنامه‌های عصبی مولد." },
  },
  {
    id: 12,
    title: { en: "CompTIA Security+ Blueprint", fa: "مفاهیم و آمادگی آزمون سکوریتی پلاس" },
    issuer: { en: "CompTIA Academic Partner", fa: "شریک آموزشی کامپتیا" },
    date: { en: "November 2023", fa: "آبان ۱۴۰۲" },
    description: { en: "Comprehensive understanding of network protocols, threat analysis, cryptography, and risk mitigation.", fa: "درک جامع پروتکل‌های شبکه، تحلیل بردارهای تهدید، مبانی رمزنگاری و مدیریت ریسک‌های امنیتی." }
  },
  {
    id: 13,
    title: { en: "ISO 27001 Information Security Lead", fa: "ممیزی امنیت اطلاعات ایزو ۲۷۰۰۱" },
    issuer: { en: "PECB Certified", fa: "گواهی‌نامه رسمی PECB" },
    date: { en: "September 2023", fa: "شهریور ۱۴۰۲" },
    description: { en: "Comprehensive training on establishing, auditing, and upgrading Information Security Management Systems (ISMS).", fa: "دوره جامع پیاده‌سازی، ممیزی و ارتقای سیستم‌های مدیریت امنیت اطلاعات (ISMS)." }
  }
];

export const timelineTranslations = {
  title: { en: "My Learning Path", fa: "مسیر رشد و یادگیری من" },
  subtitle: { en: "Milestones in Code, AI, and Cybersecurity", fa: "نقاط عطف من در برنامه‌نویسی، هوش مصنوعی و امنیت اطلاعات" }
};

export const timelineData: TimelineEvent[] = [
  {
    id: 1,
    year: "2021",
    title: { en: "The Coding Spark", fa: "آغاز مسیر برنامه‌نویسی" },
    subtitle: { en: "Fundamentals & Automation", fa: "یادگیری مبانی و اتوماسیون" },
    description: {
      en: "Began my journey with Python and JavaScript. Discovered the power of scripting to automate repetitive workflows, and built my very first static web components.",
      fa: "مسیر خودم را با یادگیری پایتون و جاوا اسکریپت آغاز کردم. قدرت اسکریپت‌نویسی برای اتوماسیون کارهای تکراری را کشف کردم و اولین کدهای وب خود را نوشتم."
    },
    iconType: "code"
  },
  {
    id: 2,
    year: "2022",
    title: { en: "Full-Stack Exploration", fa: "کاوش در توسعه فول‌استک" },
    subtitle: { en: "Databases & Backends", fa: "پایگاه‌های داده و بک‌اند" },
    description: {
      en: "Learned server-side architectures, database design (PostgreSQL, MongoDB), and web frameworks like Django and Express.js to construct dynamic applications.",
      fa: "معماری‌های سمت سرور، طراحی پایگاه‌داده (پستگرس، مونگو دی‌بی) و فریم‌ورک‌های وب مانند جنگو و اکسپرس جی‌اس را برای ساخت برنامه‌های پویا آموختم."
    },
    iconType: "code"
  },
  {
    id: 3,
    year: "2023",
    title: { en: "Diving into Cyber Security", fa: "شیرجه عمیق به دنیای امنیت" },
    subtitle: { en: "Web Pentesting & Vulnerability", fa: "تست نفوذ وب و تحلیل آسیب‌پذیری" },
    description: {
      en: "Shifted focus to Cyber Security. Mastered the OWASP Top 10 vulnerabilities, secure web system designs, and actively started solving web security capture-the-flag (CTF) challenges.",
      fa: "تمرکز خودم را به سمت امنیت سایبری معطوف کردم. آسیب‌پذیری‌های ده‌گانه OWASP و طراحی سیستم‌های وب امن را به طور کامل آموختم و حل چالش‌های امنیتی CTF را آغاز کردم."
    },
    iconType: "security"
  },
  {
    id: 4,
    year: "2024",
    title: { en: "AI & Machine Learning Era", fa: "عصر هوش مصنوعی و یادگیری ماشین" },
    subtitle: { en: "Neural Networks & LLMs", fa: "شبکه‌های عصبی و مدل‌های زبانی بزرگ" },
    description: {
      en: "Immersed in Machine Learning theory and frameworks (PyTorch, TensorFlow). Started building contextual search applications and LLM chatbots.",
      fa: "در تئوری یادگیری ماشین و فریم‌ورک‌های آن (پای‌تورچ، تنسورفلو) غوطه‌ور شدم. شروع به ساخت برنامه‌های جستجوی متنی و ربات‌های چت با مدل‌های زبانی کردم."
    },
    iconType: "ai"
  },
  {
    id: 5,
    year: "2025 - Present",
    title: { en: "AI Security Fusion", fa: "همگرایی امنیت سایبری و هوش مصنوعی" },
    subtitle: { en: "Defensive AI & Guardrails", fa: "هوش مصنوعی دفاعی و توسعه هفت‌خوان" },
    description: {
      en: "Fused security knowledge with AI development. Designed the 'Haftkhan AI Security Challenges' platform, researching active protection proxies, prompt injection mitigations, and LLM alignement.",
      fa: "دانش امنیتی را با هوش مصنوعی ادغام کردم. پلتفرم چالش‌های امنیتی هوش مصنوعی «هفت‌خوان» را طراحی کردم و در حال پژوهش روی پروکسی‌های دفاعی و مقابله با تزریق پرامپت هستم."
    },
    iconType: "security"
  }
];

export const githubTranslations = {
  title: { en: "GitHub Contributions", fa: "فعالیت‌های من در گیت‌هاب" },
  subtitle: { en: "Open Source Engagement & Coding Activity", fa: "مشارکت در پروژه‌های متن‌باز و فعالیت‌های کدنویسی" },
  statsTitle: { en: "Repository Statistics", fa: "آمار مخازن و کدنویسی" },
  viewProfileButton: { en: "Visit My GitHub Profile", fa: "مشاهده پروفایل گیت‌هاب من" },
  openSourceAdvocate: {
    en: "Active contributor to open-source software, building modular utilities, and designing interactive educational platforms for developers and security analysts.",
    fa: "مشارکت‌کننده فعال در نرم‌افزارهای متن‌باز، توسعه‌دهنده ابزارهای ماژولار و طراح پلتفرم‌های تعاملی آموزشی برای برنامه‌نویسان و تحلیل‌گران امنیت."
  },
  totalStars: { en: "Stars Received", fa: "ستاره‌های دریافتی" },
  publicRepos: { en: "Public Repositories", fa: "مخازن عمومی" },
  commitsThisYear: { en: "Commits (Last Year)", fa: "کامیت‌ها (سال گذشته)" },
  languages: { en: "Primary Languages", fa: "زبان‌های اصلی" }
};

export const contactTranslations = {
  title: { en: "Get In Touch", fa: "ارتباط با من" },
  subtitle: { en: "Let's Collaborate on Code, AI, or Security Projects", fa: "بیایید روی پروژه‌های برنامه‌نویسی، هوش مصنوعی یا امنیتی با هم همکاری کنیم" },
  nameLabel: { en: "Your Name", fa: "نام شما" },
  emailLabel: { en: "Your Email", fa: "ایمیل شما" },
  subjectLabel: { en: "Subject", fa: "موضوع پیام" },
  messageLabel: { en: "Message", fa: "متن پیام" },
  sendButton: { en: "Send Message", fa: "ارسال پیام" },
  sending: { en: "Sending...", fa: "در حال ارسال..." },
  successMessage: { en: "Thank you! Your message has been sent successfully. I will get back to you soon.", fa: "سپاسگزارم! پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهم گرفت." },
  errorMessage: { en: "An error occurred. Please try contacting me directly via email or social links.", fa: "خطایی رخ داد. لطفا مستقیما از طریق ایمیل یا شبکه‌های اجتماعی ارتباط برقرار کنید." },
  findMeOn: { en: "Find Me On", fa: "من را پیدا کنید در" }
};

export const footerTranslations = {
  rights: {
    en: "All Rights Reserved.",
    fa: "تمامی حقوق مادی و معنوی محفوظ است."
  },
  crafted: {
    en: "Designed & Coded with ❤️ by",
    fa: "طراحی و توسعه با عشق ❤️ توسط"
  },
  tagline: {
    en: "Building the future with Code, AI and Security",
    fa: "ساختن آینده با برنامه‌نویسی، هوش مصنوعی و امنیت"
  }
};
