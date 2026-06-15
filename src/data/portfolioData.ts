import type { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Kim Thu",
    role: "Frontend Developer",
    tagline: "Crafting pixel-perfect interfaces with performance in mind.",
    email: "kimthu38.nt@gmail.com",
    location: "Ho Chi Minh City, Vietnam",
    about: [
      "I'm a frontend developer passionate about building accessible, performant web experiences. I love turning complex problems into elegant, intuitive interfaces.",
      "With a strong foundation in React and the modern JavaScript ecosystem, I focus on clean architecture, thoughtful UX, and smooth animations that delight users without sacrificing speed.",
    ],
    socialLinks: [
      { name: "GitHub", href: "https://github.com/kimthu38", icon: "gitFork" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/thuntk", icon: "share" },
      { name: "Email", href: "mailto:kimthu38.nt@gmail.com", icon: "mail" },
    ],
  },
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  skills: [
    { name: "React", icon: "layers", category: "frontend" },
    { name: "Next.js", icon: "globe", category: "frontend" },
    { name: "TypeScript", icon: "code", category: "frontend" },
    { name: "Tailwind CSS", icon: "palette", category: "frontend" },
    { name: "Framer Motion", icon: "sparkles", category: "frontend" },
    { name: "Node.js", icon: "server", category: "backend" },
    { name: "PostgreSQL", icon: "database", category: "backend" },
    { name: "Git", icon: "gitBranch", category: "tools" },
    { name: "Figma", icon: "penTool", category: "tools" },
    { name: "Testing", icon: "terminal", category: "tools" },
    { name: "Performance", icon: "zap", category: "tools" },
  ],
  projects: [
    {
      id: "devflow",
      title: "DevFlow Dashboard",
      description:
        "A real-time developer analytics dashboard with interactive charts, team metrics, and customizable widgets built for engineering teams.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
      imageAlt: "DevFlow Dashboard preview",
      tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: "shopwave",
      title: "ShopWave E-Commerce",
      description:
        "A headless e-commerce storefront with server-side rendering, cart persistence, and Stripe checkout integration.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      imageAlt: "ShopWave E-Commerce preview",
      tags: ["React", "Next.js", "Stripe", "Prisma"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: "taskforge",
      title: "TaskForge",
      description:
        "A collaborative task management app with drag-and-drop boards, real-time updates, and keyboard-first navigation.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
      imageAlt: "TaskForge preview",
      tags: ["React", "TypeScript", "Framer Motion", "Supabase"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: "weatherly",
      title: "Weatherly",
      description:
        "A minimal weather app with geolocation, 7-day forecasts, and beautiful animated weather icons.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
      imageAlt: "Weatherly app preview",
      tags: ["Next.js", "Tailwind", "OpenWeather API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ],
  experience: [
    {
      id: "exp-1",
      title: "Senior Frontend Developer",
      organization: "TechNova Solutions",
      period: "2023 — Present",
      description:
        "Lead frontend development for SaaS products serving 50k+ users. Architected design system, improved Core Web Vitals by 40%, and mentored junior developers.",
      type: "work",
    },
    {
      id: "exp-2",
      title: "Frontend Developer",
      organization: "Digital Craft Studio",
      period: "2021 — 2023",
      description:
        "Built responsive web applications for clients in fintech and healthcare. Implemented accessibility standards (WCAG 2.1) across all deliverables.",
      type: "work",
    },
    {
      id: "exp-3",
      title: "B.S. Computer Science",
      organization: "State University",
      period: "2017 — 2021",
      description:
        "Focused on human-computer interaction and web technologies. Graduated with honors and completed capstone on progressive web applications.",
      type: "education",
    },
    {
      id: "exp-4",
      title: "Open Source Contributor",
      organization: "React Ecosystem",
      period: "2022 — Present",
      description:
        "Contributing to UI libraries and documentation improvements. Active in community discussions and bug fixes for popular React packages.",
      type: "milestone",
    },
  ],
};
