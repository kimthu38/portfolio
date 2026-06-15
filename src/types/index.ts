export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: "languages" | "frameworks" | "tools";
}

export interface Project {
  id: string;
  title: string;
  description: string[];
  image?: string;
  imageAlt?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: "work" | "education" | "milestone";
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    email: string;
    location: string;
    about: string[];
    socialLinks: SocialLink[];
    summary: string[];
  };
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  navLinks: { label: string; href: string }[];
}
