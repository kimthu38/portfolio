import html5Logo from '@/assets/icons/html5-logo.svg'
import javascriptLogo from '@/assets/icons/javascript-logo.svg'
import typescriptLogo from '@/assets/icons/typescript-logo.svg'
import reactLogo from '@/assets/icons/react-logo.svg'
import nextjsLogo from '@/assets/icons/nextjs-logo.svg'
import tailwindLogo from '@/assets/icons/tailwind-logo.svg'
import nodejsLogo from '@/assets/icons/nodejs-logo.svg'
import figmaLogo from '@/assets/icons/figma-logo.svg'
import mongodbLogo from '@/assets/icons/mongo-logo.svg'
import piniaLogo from '@/assets/icons/pinia-logo.svg'
import angularLogo from '@/assets/icons/angular-logo.svg'
import vuejsLogo from '@/assets/icons/vue-logo.svg'
import viteLogo from '@/assets/icons/vite-logo.svg'
import webpackLogo from '@/assets/icons/webpack-logo.svg'
import eslintLogo from '@/assets/icons/eslint-logo.svg'
import reactQueryLogo from '@/assets/icons/react-query-logo.svg'
import reduxLogo from '@/assets/icons/redux-logo.svg'
import framerLogo from '@/assets/icons/framer-logo.svg'
import cssLogo from '@/assets/icons/css-logo.svg'
import gitLogo from '@/assets/icons/git-logo.svg'
import rxjsLogo from '@/assets/icons/rxjs-logo.svg'

import {
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  GitFork,
  Globe,
  Layers,
  Link2,
  Mail,
  Palette,
  PenTool,
  Server,
  Share2,
  Sparkles,
  Terminal,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  database: Database,
  externalLink: ExternalLink,
  gitBranch: GitBranch,
  gitFork: GitFork,
  globe: Globe,
  layers: Layers,
  link: Link2,
  mail: Mail,
  palette: Palette,
  penTool: PenTool,
  server: Server,
  share: Share2,
  sparkles: Sparkles,
  terminal: Terminal,
  zap: Zap,
  html: html5Logo,
  javascript: javascriptLogo,
  typescript: typescriptLogo,
  react: reactLogo,
  nextjs: nextjsLogo,
  tailwind: tailwindLogo,
  nodejs: nodejsLogo,
  figma: figmaLogo,
  mongodb: mongodbLogo,
  pinia: piniaLogo,
  angular: angularLogo,
  vuejs: vuejsLogo,
  vite: viteLogo,
  webpack: webpackLogo,
  eslint: eslintLogo,
  reactQuery: reactQueryLogo,
  redux: reduxLogo,
  framer: framerLogo,
  css: cssLogo,
  gitLogo: gitLogo,
  rxjs: rxjsLogo,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code2;
}
