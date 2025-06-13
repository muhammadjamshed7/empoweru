import type { LucideIcon } from 'lucide-react';
import { Brain, Dumbbell, BookOpen, Code2, Sparkles, Home, ListChecks, User, Settings } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

export const dashboardSections: NavItem[] = [
  { title: "Mental Health", href: "/mental-health", icon: Brain, description: "Nurture your mind and well-being." },
  { title: "Physical Fitness", href: "/physical-fitness", icon: Dumbbell, description: "Stay active and energized." },
  { title: "Educational Zone", href: "/educational-zone", icon: BookOpen, description: "Expand your knowledge." },
  { title: "Programming Practice", href: "/programming-practice", icon: Code2, description: "Sharpen your coding skills." },
  { title: "AI Prompt Engineering", href: "/ai-prompt-engineering", icon: Sparkles, description: "Master the art of AI communication." },
];

export const bottomNavItems: NavItem[] = [
  { title: "Home", href: "/", icon: Home },
  { title: "Tasks", href: "/tasks", icon: ListChecks },
  { title: "Profile", href: "/profile", icon: User },
  { title: "Settings", href: "/settings", icon: Settings },
];

export const APP_NAME = "EmpowerU";
export const WELCOME_MESSAGE = "Welcome Back";

export const mindfulnessTips: string[] = [
  "Breathe deeply for 60 seconds to reset your mind.",
  "Notice 5 things you can see, 4 things you can feel, 3 things you can hear, 2 things you can smell, and 1 thing you can taste.",
  "Take a short walk and pay attention to your surroundings.",
  "Practice gratitude: name three things you are thankful for today.",
  "Close your eyes and focus on the sensation of your feet on the ground.",
  "Listen to a calming piece of music without distractions.",
  "Stretch your body gently for a few minutes.",
  "Think of one small act of kindness you can do today.",
  "Observe your thoughts without judgment, like clouds passing in the sky.",
  "Sip a warm drink mindfully, noticing its temperature, taste, and aroma."
];
