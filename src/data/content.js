// -----------------------------------------------------------------------
// Central content store.
//
// Every section reads from here instead of hard-coding copy inline. When
// you add a backend, this is the file to swap: turn each constant into a
// hook (e.g. useProjects()) that fetches from your API but returns data
// shaped the same way, and no component below needs to change.
// See src/lib/api.js for a starting point.
// -----------------------------------------------------------------------

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "interests", label: "Interests" },
  { id: "journey", label: "Journey" },
  { id: "goals", label: "Goals" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Hi, I'm",
  name: "Ahsan Ahmed Sifat",
  alias: "Sifat",
  roles: ["Computer Science & Engineering Student", "Aspiring Software Engineer"],
  intro:
    "I am a Computer Science and Engineering student passionate about software development, Artificial Intelligence, Machine Learning, and building practical digital solutions.",
};

export const about = {
  paragraphs: [
    "I'm a **Computer Science and Engineering** student who genuinely enjoys the process of building things — from a first working line of code to a full application someone can actually use. That's what pulled me toward **software development** in the first place, and it's what keeps me at it.",
    "Over time, I've become just as interested in **Artificial Intelligence and Machine Learning** — not as a buzzword, but as a way of solving problems that plain rule-based software can't. I like understanding not just *what* a model predicts, but *why*, which is what draws me toward explainability in particular.",
    "I try to stay a beginner in the useful sense — **always learning new tools and technologies** rather than settling on what I already know. The long-term goal is straightforward: become a capable, professional **software engineer** who builds things that hold up in the real world.",
  ],
  facts: [
    { label: "Studying", value: "Computer Science & Engineering" },
    { label: "Focus Areas", value: "Software Dev, AI & ML" },
    { label: "Currently", value: "Building & learning" },
    { label: "Off duty", value: "Playing football" },
  ],
};

export const education = {
  degree: "Bachelor of Science in Computer Science and Engineering",
  school: "University of Information Technology & Sciences (UITS)",
  status: "Current Student",
};

export const skillCategories = [
  { title: "Frontend", items: ["React", "JavaScript", "Vite", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend", items: ["Go (Golang)", "REST APIs"] },
  { title: "Database", items: ["PostgreSQL"] },
  { title: "Programming & AI", items: ["Python", "Machine Learning", "Explainable AI"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Kaggle", "Google Colab"], wide: true },
];

export const projects = [
  {
    id: "lift-gift",
    number: "01",
    title: "Lift Gift",
    description:
      "A blood and organ donation and collection platform, built to make it easier for donors and recipients to find and coordinate life-saving contributions.",
    tech: ["React", "Go", "PostgreSQL"],
    image: "/projects/lift-gift.png",
    projectUrl: null, // set a real URL when it's ready
    githubUrl: "https://github.com/aasifat/LifeGift-Urgent-Organ-and-Blood-Donation-Matching",
  },
  {
    id: "gov-eservice-guidance",
    number: "02",
    title: "Government E-Service Guidance",
    description:
      "A guidance platform that walks users through government services — NID, driving license, education, and passport — in plain steps.",
    tech: ["React", "JavaScript", "Tailwind CSS","Go", "PostgreSQL", "Machine Learning","AI"],
    image: "/projects/gov-eservice-guidance.png",
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: "explainable-ai-medical",
    number: "03",
    title: "Explainable AI Medical Report Generation",
    description:
      "A research project on chest X-ray classification that surfaces why a model reaches its prediction, using Grad-CAM and Transformer Attention Rollout.",
    tech: ["Python", "Machine Learning", "GoLang", "Attention Rollout"],
    image: null,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: "familytree",
    number: "04",
    title: "FamilyTree",
    description: "A application for visually mapping and exploring family relationships.",
    tech: ["React", "JavaScript","GoLang", "PostgreSQL"],
    image: "/projects/familytree.png",
    projectUrl: "https://rootswood-frontend.vercel.app/",
    githubUrl: "https://github.com/aasifat/rootswood-backend",
  },
];

export const interests = [
  { glyph: "⚽", title: "Football", note: "Playing & watching", accent: true },
//  { glyph: "🇦🇷", title: "Argentina National Team", note: "Match-day regular", accent: true },
  { glyph: "10", title: "Lionel Messi", note: "The standard I watch for", accent: true },
  { glyph: "🤖", title: "Artificial Intelligence", note: "Curiosity turned focus" },
  { glyph: "📈", title: "Machine Learning", note: "Models & how they think" },
  { glyph: "🛠️", title: "Learning New Tech", note: "Always something new" },
  { glyph: "🗣️", title: "English Communication", note: "Actively improving" },
];

export const journey = [
  { minute: "0'", tag: "Kick-off", text: "Started learning programming and Computer Science." },
  { minute: "15'", tag: "Early Play", text: "Began building web development projects." },
  { minute: "30'", tag: "Building Rhythm", text: "Learned modern frontend technologies." },
  { minute: "45'", tag: "Half-Time", text: "Explored backend development using Go and PostgreSQL.", ht: true },
  { minute: "60'", tag: "Second Half", text: "Started working with Artificial Intelligence and Machine Learning." },
  { minute: "75'", tag: "Late Push", text: "Began researching Explainable AI." },
  { minute: "90'+", tag: "Stoppage Time · Ongoing", text: "Continues improving technical and communication skills.", now: true },
];

export const goals = [
  "Become a professional software engineer.",
  "Improve full-stack development skills.",
  "Build useful and practical software.",
  "Learn more about Artificial Intelligence and Machine Learning.",
  "Improve English communication and fluency.",
  "Work on meaningful and impactful projects.",
];

// Contact links are placeholders on purpose — drop real URLs in once ready.
export const contactLinks = [
  { label: "GitHub", href: "https://github.com/aasifat" },
  { label: "Facebook", href: "https://www.facebook.com/ahsan.ahmed.sifat" },
  { label: "Email", href: "mailto:ahsanahmedsifat@gmail.com" },
  { label: "Other", href: null },
];
