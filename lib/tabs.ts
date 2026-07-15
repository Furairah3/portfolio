import { Home, FolderGit2, User, Briefcase, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type TabId = 'home' | 'projects' | 'about' | 'experience' | 'contact';

export const TABS: { id: TabId; label: string; icon: LucideIcon }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];
