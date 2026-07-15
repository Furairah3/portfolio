import { Home, FolderGit2, Briefcase, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type TabId = 'home' | 'projects' | 'experience' | 'contact';

export const TABS: { id: TabId; icon: LucideIcon }[] = [
  { id: 'home', icon: Home },
  { id: 'projects', icon: FolderGit2 },
  { id: 'experience', icon: Briefcase },
  { id: 'contact', icon: Mail },
];
