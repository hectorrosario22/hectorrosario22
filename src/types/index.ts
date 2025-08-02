export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  education: string;
  experience: string;
  interests: string[];
  bio: {
    short: string;
    long: string;
  };
  social: {
    github: string;
    linkedin: string;
  };
}

export interface Skill {
  name: string;
  icon: string | string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface ProjectCategory {
  id: string;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl: string | null;
}

export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Experience {
  work: WorkExperience[];
  education: Education;
}
