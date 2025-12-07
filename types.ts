export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  instagram: string;
  portfolio: string;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  role: string;
  timeline: string;
  tools: string[];
  problem: string[];
  approach: string[];
  result: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  skills: {
    graphicDesign: string[];
    videoEditing: string[];
    tools: string[];
    expertise: string[];
  };
  experience: Job[];
  projects: Project[];
  education: Education[];
  achievements: Achievement[];
  passionProjects: {
    title: string;
    description: string[];
  }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}