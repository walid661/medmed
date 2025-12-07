import { LucideIcon } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
}

export interface User {
  name: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  streak: number;
  gems: number;
  avatar: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  progress: number;
  color: 'red' | 'blue' | 'purple' | 'orange';
  icon: LucideIcon;
}

export interface StudentRank {
  rank: number;
  name: string;
  xp: number;
  avatar: string;
  isCurrentUser?: boolean;
}