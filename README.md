# Kim Thu — Frontend Developer Portfolio

Personal portfolio website showcasing my projects and experience as a frontend developer.

**Live:** [kim.is-a.dev](https://kim.is-a.dev)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui, Radix UI
- **Animations:** Framer Motion
- **Icons:** Hugeicons, Lucide React
- **Theming:** next-themes (light/dark mode)

## Features

- Single-page layout with smooth scroll navigation
- Dark / light theme toggle
- Animated sections using Framer Motion
- SEO optimized — metadata, Open Graph, sitemap, robots.txt
- Fully responsive design

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/          # Next.js App Router — layout, page, metadata
├── components/   # Section components (Hero, About, Skills, Projects, Experience, Contact)
├── data/         # portfolioData.ts — single source of truth for all content
├── types/        # TypeScript types
└── lib/          # Utility helpers
```

## Customization

All content (personal info, skills, projects, experience) lives in [`src/data/portfolioData.ts`](src/data/portfolioData.ts). Edit that file to update the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
