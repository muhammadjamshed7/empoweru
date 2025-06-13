
import type { LucideIcon } from 'lucide-react';
import { Brain, Dumbbell, BookOpen, Code2, Sparkles, Home, ListChecks, User, Settings, Zap, Lightbulb, Puzzle, Target, Timer, Layers, Move, Sunrise, Shield, Activity, Scale, BarChart3, ChevronRight } from 'lucide-react';

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
  "Observe your thoughts without judgment, like clouds passing in thesky.",
  "Sip a warm drink mindfully, noticing its temperature, taste, and aroma."
];

export const motivationalQuotes: string[] = [
  "The best way to predict the future is to create it. - Peter Drucker",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Every moment is a fresh beginning. - T.S. Eliot",
  "Strive for progress, not perfection.",
  "The secret of getting ahead is getting started. - Mark Twain",
  "You are stronger than you think.",
  "Small steps every day lead to big results."
];

export const relaxationTips: { title: string; description: string }[] = [
  {
    title: "Focus on Your Breath",
    description: "Take slow, deep breaths. Inhale through your nose for 4 counts, hold for 4, and exhale slowly through your mouth for 6 counts."
  },
  {
    title: "Mindful Observation",
    description: "Pick an object around you and focus on its details - color, texture, shape. This helps ground you in the present."
  },
  {
    title: "Gentle Stretch",
    description: "Slowly stretch your neck, shoulders, and back to release tension. Even a few minutes can make a difference."
  },
  {
    title: "Quick Walk",
    description: "If possible, step away and take a brief walk, even if it's just around the room or office. Movement helps clear the mind."
  },
  {
    title: "Progressive Muscle Relaxation",
    description: "Tense and then relax different muscle groups in your body, starting from your toes and working your way up to your head."
  }
];

export const brainTeasers: { riddle: string; answer: string }[] = [
  { riddle: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", answer: "An echo" },
  { riddle: "What has keys but opens no locks?", answer: "A piano" },
  { riddle: "What is full of holes but still holds water?", answer: "A sponge" },
  { riddle: "What is always in front of you but can’t be seen?", answer: "The future" },
  { riddle: "What has an eye, but cannot see?", answer: "A needle" },
  { riddle: "What is so fragile that saying its name breaks it?", answer: "Silence" },
  { riddle: "What has to be broken before you can use it?", answer: "An egg" },
  { riddle: "What is lighter than a feather, but even the strongest person can't hold it for five minutes?", answer: "Your breath" },
  { riddle: "What has one head, one foot, and four legs?", answer: "A bed" },
  { riddle: "What invention lets you look right through a wall?", answer: "A window" }
];

export const positiveAffirmations: { front: string; back: string }[] = [
  { front: "I am…", back: "…capable of amazing things." },
  { front: "Today I will…", back: "…focus on what I can control." },
  { front: "I choose to be…", back: "…positive and optimistic." },
  { front: "My mind is…", back: "…calm and at peace." },
  { front: "I embrace…", back: "…challenges as opportunities." },
  { front: "I am grateful for…", back: "…the small joys in my day." },
  { front: "I forgive…", back: "…myself and others." },
  { front: "I attract…", back: "…positive energy." },
  { front: "I believe in…", back: "…my ability to succeed." },
  { front: "I am becoming…", back: "…a better version of myself." }
];

// Mind Gym Icons
export { Puzzle as MindGymPuzzleIcon };
export { Target as MindGymTargetIcon };
export { Timer as MindGymTimerIcon };
export { Layers as MindGymLayersIcon };
export { Brain as MindGymBrainIcon };

// Physical Fitness Section
export interface HomeWorkout {
  id: string;
  title: string;
  description: string;
  icon: string; // Changed from LucideIcon to string
  actionType: 'video' | 'gif' | 'text';
  actionLink?: string; // For video/gif
}

export const homeWorkouts: HomeWorkout[] = [
  { id: 'stretch', title: '5-Min Full Body Stretch', description: 'Gentle stretches for flexibility and relaxation.', icon: "Move", actionType: 'text' },
  { id: 'warmup', title: 'Morning Energizer', description: 'Quick routine to wake up your body.', icon: "Sunrise", actionType: 'text' },
  { id: 'cardio', title: '10-Min Cardio Blast', description: 'Jumping jacks, high knees, spot jogging.', icon: "Zap", actionType: 'text' },
  { id: 'core', title: 'Beginner Core Routine', description: 'Planks, crunches, and leg raises.', icon: "Shield", actionType: 'text' },
];

export interface GymExercise {
  name: string;
  sets: string;
  reps: string;
  rest: string;
}

export interface GymWorkoutPlan {
  id: string;
  goal: 'Fat Loss' | 'Strength' | 'Muscle Gain';
  title: string;
  description: string;
  exercises: GymExercise[];
  icon: string; // Changed from LucideIcon to string
}

export const gymWorkoutPlans: GymWorkoutPlan[] = [
  {
    id: 'fatloss1',
    goal: 'Fat Loss',
    title: 'Lean Machine Circuit',
    description: 'High-intensity circuit to maximize calorie burn.',
    icon: "Activity",
    exercises: [
      { name: 'Treadmill Run', sets: '1', reps: '20 mins', rest: 'N/A' },
      { name: 'Bodyweight Squats', sets: '3', reps: '15-20', rest: '60s' },
      { name: 'Push-ups', sets: '3', reps: 'As many as possible (AMRAP)', rest: '60s' },
      { name: 'Burpees', sets: '3', reps: '10-12', rest: '90s' },
    ],
  },
  {
    id: 'strength1',
    goal: 'Strength',
    title: 'Foundational Strength',
    description: 'Focus on compound lifts to build overall strength.',
    icon: "Dumbbell",
    exercises: [
      { name: 'Barbell Squats', sets: '5', reps: '5', rest: '2-3 mins' },
      { name: 'Bench Press', sets: '5', reps: '5', rest: '2-3 mins' },
      { name: 'Deadlifts', sets: '1', reps: '5', rest: '3-5 mins' },
      { name: 'Overhead Press', sets: '3', reps: '8-10', rest: '90s' },
    ],
  },
  {
    id: 'musclegain1',
    goal: 'Muscle Gain',
    title: 'Hypertrophy Builder',
    description: 'Volume-focused training for muscle growth.',
    icon: "Dumbbell",
    exercises: [
      { name: 'Dumbbell Bench Press', sets: '4', reps: '8-12', rest: '90s' },
      { name: 'Lat Pulldowns', sets: '4', reps: '10-12', rest: '90s' },
      { name: 'Leg Press', sets: '4', reps: '10-15', rest: '90s' },
      { name: 'Bicep Curls', sets: '3', reps: '12-15', rest: '60s' },
      { name: 'Tricep Pushdowns', sets: '3', reps: '12-15', rest: '60s' },
    ],
  },
];

export const bmiCategories: { [key: string]: { label: string; advice: string; colorClass: string } } = {
  underweight: { label: 'Underweight', advice: 'Your BMI suggests you are underweight. Consider consulting a nutritionist for a healthy weight gain plan focusing on nutrient-dense foods.', colorClass: 'text-blue-400' },
  normal: { label: 'Normal Weight', advice: 'Great! Your BMI is in the normal range. Maintain your healthy lifestyle with balanced nutrition and regular physical activity.', colorClass: 'text-green-400' },
  overweight: { label: 'Overweight', advice: 'Your BMI indicates you are overweight. Focus on creating a sustainable calorie deficit through a balanced diet and increasing regular exercise. Aim for at least 150 minutes of moderate-intensity cardio per week.', colorClass: 'text-yellow-400' },
  obese: { label: 'Obese', advice: 'Your BMI is in the obese range. It is highly advisable to consult a doctor or a registered dietitian for a personalized health plan. Gradual lifestyle changes are key.', colorClass: 'text-red-400' },
};

export const fitnessProgressMessages = [
  "Keep going! You're stronger than yesterday.",
  "Every step is progress, no matter how small.",
  "Consistency is the key to unlocking your potential.",
  "You're building a healthier, stronger you!",
  "Don't stop until you're proud."
];

export { Scale as BmiIcon };
export { BarChart3 as ProgressChartIcon };
export { ChevronRight as RightArrowIcon };
export { Dumbbell as FitnessIcon }; // Note: FitnessIcon is still a LucideIcon export for direct use elsewhere if needed
// Individual icons for mapping:
export { Move as MoveIcon, Sunrise as SunriseIcon, Zap as ZapIcon, Shield as ShieldIcon, Activity as ActivityIcon };

