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
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code2;
}
