
import type { LucideIcon } from 'lucide-react';
import { Brain, Dumbbell, BookOpen, Code2, Sparkles, Home, ListChecks, User, Settings, Zap, Lightbulb, Puzzle, Target, Timer, Layers, Move, Sunrise, Shield, Activity, Scale, BarChart3, ChevronRight, Briefcase, GraduationCap, Users, Rocket, Palette, Film, Landmark, TrendingUp, Cpu, FlaskConical, Atom, Leaf, Microscope, Paintbrush, Newspaper, Megaphone, BookHeart, BrainCog, Bot, BrainCircuit, ExternalLink, Map, CheckSquare, Pill, Stethoscope, HeartPulse, MessageCircle } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

export const dashboardSections: NavItem[] = [
  { title: "Mental Health", href: "/mental-health", icon: Brain, description: "Nurture your mind and well-being." },
  { title: "Physical Fitness", href: "/physical-fitness", icon: Dumbbell, description: "Stay active and energized." },
  { title: "Educational Zone", href: "/educational-zone", icon: BookHeart, description: "Expand your knowledge & find your path." },
  { title: "Programming Practice", href: "/programming-practice", icon: Code2, description: "Sharpen your coding skills with Python." },
  { title: "AI & Modern Tech", href: "/ai-prompt-engineering", icon: Sparkles, description: "Master AI and explore trending technologies." },
  { title: "Let's chat with AI", href: "/ai-chat", icon: MessageCircle, description: "Have a conversation with an AI assistant." },
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
  "Small steps every day lead to big results.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don't watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
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
  icon: string; // Name of LucideIcon
  actionType: 'video' | 'gif' | 'text';
  actionLink?: string;
  duration?: number; // Optional duration in seconds
}

export const homeWorkouts: HomeWorkout[] = [
  { id: 'stretch', title: '5-Min Full Body Stretch', description: 'Gentle stretches for flexibility and relaxation.', icon: "Move", actionType: 'text', duration: 300 },
  { id: 'warmup', title: 'Morning Energizer', description: 'Quick routine to wake up your body.', icon: "Sunrise", actionType: 'text', duration: 180 },
  { id: 'cardio', title: '10-Min Cardio Blast', description: 'Jumping jacks, high knees, spot jogging.', icon: "Zap", actionType: 'text', duration: 600 },
  { id: 'core', title: 'Beginner Core Routine', description: 'Planks, crunches, and leg raises.', icon: "Shield", actionType: 'text', duration: 240 },
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
  icon: string; // Name of LucideIcon
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
export { Dumbbell as FitnessIcon };
export { Move as MoveIcon, Sunrise as SunriseIcon, Zap as ZapIcon, Shield as ShieldIcon, Activity as ActivityIcon };

// Educational Zone Constants
export interface StudyTip {
  id: string;
  ageGroup: 'Primary' | 'Middle School' | 'High School';
  tip: string;
  icon: string; // Name of LucideIcon
}

export const studyTips: StudyTip[] = [
  { id: 'p1', ageGroup: 'Primary', tip: 'Use colorful drawings to remember new words!', icon: 'Palette' },
  { id: 'p2', ageGroup: 'Primary', tip: 'Take short breaks to play every 20 minutes.', icon: 'Timer' },
  { id: 'p3', ageGroup: 'Primary', tip: 'Ask a grown-up to read with you.', icon: 'Users' },
  { id: 'm1', ageGroup: 'Middle School', tip: 'Create flashcards for key terms and dates.', icon: 'Layers' },
  { id: 'm2', ageGroup: 'Middle School', tip: 'Explain what you learned to a friend or family member.', icon: 'Lightbulb' },
  { id: 'm3', ageGroup: 'Middle School', tip: 'Find a quiet place to study without distractions.', icon: 'Home' },
  { id: 'h1', ageGroup: 'High School', tip: 'Use the Pomodoro Technique: 25-min study, 5-min break.', icon: 'Timer' },
  { id: 'h2', ageGroup: 'High School', tip: 'Form a study group for difficult subjects.', icon: 'Users' },
  { id: 'h3', ageGroup: 'High School', tip: 'Practice past exam papers to understand the format.', icon: 'BookOpen' },
  { id: 'h4', ageGroup: 'High School', tip: 'Revise with mind maps and colourful notes for better recall.', icon: 'BrainCog'},
];

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  sampleJobRoles: string[];
  salaryExpectations: string;
  studyRecommendations: string[];
  icon: string;
}

export interface CareerInterest {
  id: string;
  name: string; // Changed from union type to string to easily accommodate 'Pharmacy'
  description: string;
  icon: string;
  careerPaths: CareerPath[];
}

export const careerInterests: CareerInterest[] = [
  {
    id: 'tech',
    name: 'Technology',
    description: 'Explore careers in innovation, software, and digital solutions.',
    icon: 'Cpu',
    careerPaths: [
      { id: 'tech1', title: 'Software Engineer', description: 'Designs, develops, and maintains software applications.', requiredSkills: ['Programming (Python, Java, C++)', 'Problem-Solving', 'Data Structures'], sampleJobRoles: ['Web Developer', 'Mobile App Developer', 'Backend Engineer'], salaryExpectations: '$70k - $150k+', studyRecommendations: ['Computer Science', 'Software Engineering', 'Bootcamps'], icon: 'Code2' },
      { id: 'tech2', title: 'Data Scientist', description: 'Analyzes complex data to extract insights and inform decisions.', requiredSkills: ['Statistics', 'Machine Learning', 'Python/R', 'Data Visualization'], sampleJobRoles: ['Data Analyst', 'ML Engineer', 'Business Intelligence Analyst'], salaryExpectations: '$80k - $170k+', studyRecommendations: ['Data Science', 'Statistics', 'Mathematics', 'Computer Science'], icon: 'BarChart3' },
    ],
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Discover the world through research, experimentation, and healthcare.',
    icon: 'FlaskConical',
    careerPaths: [
      { id: 'sci1', title: 'Biomedical Researcher', description: 'Conducts studies to improve human health.', requiredSkills: ['Biology', 'Chemistry', 'Lab Techniques', 'Critical Thinking'], sampleJobRoles: ['Lab Technician', 'Research Scientist', 'Pharmacologist'], salaryExpectations: '$60k - $120k+', studyRecommendations: ['Biology', 'Biochemistry', 'Medical Science'], icon: 'Microscope' },
      { id: 'sci2', title: 'Environmental Scientist', description: 'Works to protect the environment and solve ecological problems.', requiredSkills: ['Ecology', 'Data Analysis', 'Field Work', 'Policy Knowledge'], sampleJobRoles: ['Conservationist', 'Sustainability Consultant', 'Pollution Analyst'], salaryExpectations: '$55k - $100k+', studyRecommendations: ['Environmental Science', 'Geology', 'Ecology'], icon: 'Leaf' },
    ],
  },
  {
    id: 'arts',
    name: 'Arts & Humanities',
    description: 'Engage in creative expression, communication, and cultural understanding.',
    icon: 'Palette',
    careerPaths: [
      { id: 'art1', title: 'Graphic Designer', description: 'Creates visual concepts for communication.', requiredSkills: ['Adobe Creative Suite', 'Typography', 'Visual Design', 'Creativity'], sampleJobRoles: ['UI/UX Designer', 'Illustrator', 'Brand Designer'], salaryExpectations: '$50k - $90k+', studyRecommendations: ['Graphic Design', 'Fine Arts', 'Digital Media'], icon: 'Paintbrush' },
      { id: 'art2', title: 'Journalist / Writer', description: 'Researches and writes stories for various media.', requiredSkills: ['Writing', 'Research', 'Interviewing', 'Communication'], sampleJobRoles: ['Content Creator', 'Editor', 'Reporter'], salaryExpectations: '$45k - $85k+', studyRecommendations: ['Journalism', 'English Literature', 'Communications'], icon: 'Newspaper' },
    ],
  },
  {
    id: 'business',
    name: 'Business & Finance',
    description: 'Lead, manage, and strategize in the world of commerce and economics.',
    icon: 'Briefcase',
    careerPaths: [
      { id: 'biz1', title: 'Marketing Manager', description: 'Develops and implements marketing strategies.', requiredSkills: ['Market Analysis', 'Digital Marketing', 'Communication', 'Creativity'], sampleJobRoles: ['Social Media Manager', 'Brand Manager', 'SEO Specialist'], salaryExpectations: '$65k - $130k+', studyRecommendations: ['Marketing', 'Business Administration', 'Communications'], icon: 'Megaphone' },
      { id: 'biz2', title: 'Financial Analyst', description: 'Provides guidance on investment decisions.', requiredSkills: ['Financial Modeling', 'Data Analysis', 'Economics', 'Attention to Detail'], sampleJobRoles: ['Investment Banker', 'Accountant', 'Portfolio Manager'], salaryExpectations: '$70k - $150k+', studyRecommendations: ['Finance', 'Economics', 'Accounting', 'Business Administration'], icon: 'TrendingUp' },
    ],
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    description: 'Focus on medication expertise, patient care, and health sciences.',
    icon: 'Pill',
    careerPaths: [
      { 
        id: 'pharma1', 
        title: 'Pharmacist', 
        description: 'Dispenses medications, counsels patients on drug use, and ensures safe medication practices. Works in community pharmacies, hospitals, or clinical settings.', 
        requiredSkills: ['Pharmaceutical Knowledge', 'Attention to Detail', 'Communication Skills', 'Patient Counseling', 'Understanding of Regulations'], 
        sampleJobRoles: ['Community Pharmacist', 'Hospital Pharmacist', 'Clinical Pharmacist', 'Pharmaceutical Researcher'], 
        salaryExpectations: '$100k - $140k+', 
        studyRecommendations: [
          'Doctor of Pharmacy (Pharm.D.) degree',
          'Pass state licensure exams (e.g., NAPLEX, MPJE in the US)',
          'Pre-pharmacy undergraduate coursework (chemistry, biology, physics, math)',
          'Pharmacy College Admission Test (PCAT) may be required'
        ], 
        icon: 'Stethoscope' 
      },
    ],
  },
];

export interface QuizQuestion {
  id: string;
  text: string;
  options: { text: string; value: string; category: 'tech' | 'science' | 'arts' | 'business' | 'analytical' | 'creative' | 'people' | 'detail' | 'healthcare' }[];
}

export const educationPathQuizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    text: 'Would you rather spend your afternoon...',
    options: [
      { text: 'Building a cool app or website?', value: 'a', category: 'tech' },
      { text: 'Conducting a fun science experiment?', value: 'b', category: 'science' },
      { text: 'Writing a story or drawing a picture?', value: 'c', category: 'arts' },
      { text: 'Organizing a school event or fundraiser?', value: 'd', category: 'business' },
      { text: 'Learning about how medicines help people?', value: 'e', category: 'healthcare' },
    ],
  },
  {
    id: 'q2',
    text: 'When facing a challenge, you tend to...',
    options: [
      { text: 'Analyze it logically and find a step-by-step solution.', value: 'a', category: 'analytical' },
      { text: 'Think outside the box and come up with unique ideas.', value: 'b', category: 'creative' },
      { text: 'Ask others for help and work together.', value: 'c', category: 'people' },
      { text: 'Focus on the small details to get it perfect.', value: 'd', category: 'detail' },
    ],
  },
  {
    id: 'q3',
    text: 'Which school subject excites you most?',
    options: [
      { text: 'Math or Computer Class', value: 'a', category: 'tech' },
      { text: 'Biology or Chemistry', value: 'b', category: 'science' },
      { text: 'English or Art Class', value: 'c', category: 'arts' },
      { text: 'Economics or Social Studies', value: 'd', category: 'business' },
      { text: 'Health or Anatomy Class', value: 'e', category: 'healthcare' },
    ],
  },
];

export interface QuizRecommendation {
  id: string;
  categories: string[]; // Primary categories that lead to this recommendation
  title: string;
  text: string;
  icon: string; // Lucide icon name
}

export const quizRecommendations: QuizRecommendation[] = [
  { id: 'rec_tech_analytical', categories: ['tech', 'analytical'], title: 'Tech Innovator / Problem Solver', text: 'You seem to enjoy technology and logical problem-solving! Consider exploring fields like Software Engineering, Data Science, or Cybersecurity. These areas involve building, analyzing, and creating solutions with code and data.', icon: 'Cpu' },
  { id: 'rec_science_detail', categories: ['science', 'detail'], title: 'Scientific Explorer / Researcher', text: 'Your interest in science and attention to detail could lead you to a career in research, medicine, or environmental science. These paths involve investigation, experimentation, and making new discoveries.', icon: 'FlaskConical' },
  { id: 'rec_arts_creative', categories: ['arts', 'creative'], title: 'Creative Communicator / Artist', text: 'Your creative flair and love for arts suggest paths like Graphic Design, Writing, Filmmaking, or Performing Arts. These fields are all about expression, storytelling, and bringing ideas to life.', icon: 'Palette' },
  { id: 'rec_business_people', categories: ['business', 'people'], title: 'Business Leader / People Person', text: 'With your knack for organization and working with people, careers in Business Management, Marketing, Human Resources, or Entrepreneurship could be a great fit. These roles often involve strategy, communication, and leading teams.', icon: 'Briefcase' },
  { id: 'rec_healthcare_science', categories: ['healthcare', 'science', 'detail'], title: 'Healthcare Professional / Pharmacist', text: 'You show interest in healthcare and science, with an eye for detail. Fields like Pharmacy, Medicine, Nursing, or other allied health professions could be very rewarding, focusing on patient care and well-being.', icon: 'Pill'},
  { id: 'rec_general_tech', categories: ['tech'], title: 'Tech Explorer', text: 'You show a strong interest in technology! Fields like Web Development, Game Design, or IT Support could be exciting for you. Keep exploring coding and new tech trends!', icon: 'Rocket' },
  { id: 'rec_general_science', categories: ['science'], title: 'Curious Scientist', text: 'Your curiosity for science is a great asset! Consider looking into Biology, Chemistry, Physics, or even Astronomy. The world of discovery awaits!', icon: 'Atom' },
  { id: 'rec_general_arts', categories: ['arts'], title: 'Artistic Soul', text: 'Your passion for arts and humanities shines through! Explore areas like Creative Writing, Visual Arts, Music, or History. Express yourself and share your unique perspective.', icon: 'Paintbrush' },
  { id: 'rec_general_business', categories: ['business'], title: 'Future Entrepreneur', text: 'You have an inclination towards business and organization! Fields like Project Management, Marketing, or starting your own venture could be very rewarding.', icon: 'TrendingUp' },
  { id: 'rec_general_healthcare', categories: ['healthcare'], title: 'Caring Healer', text: 'Your interest in health points towards many fulfilling paths! Consider exploring nursing, physical therapy, medical assisting, or public health. Helping others is key!', icon: 'HeartPulse'},
  { id: 'rec_default', categories: [], title: 'Explorer of All Trades!', text: 'You have a mix of interests! That\'s fantastic. Keep exploring different subjects and activities to discover what truly excites you. Many careers combine skills from various fields.', icon: 'Lightbulb' },
];

// AI & Modern Tech Section
export interface TrendingTech {
  id: string;
  name: string;
  description: string;
  officialLink: string;
  icon: string; // Lucide icon name
  roadmapSteps?: string[];
}

export const trendingTechnologies: TrendingTech[] = [
  {
    id: 'gen_ai_genkit',
    name: 'Generative AI (with Genkit)',
    description: 'Explore the future of AI by building applications with large language models using Google\'s Genkit, a powerful open-source framework for Node.js/TypeScript.',
    officialLink: 'https://firebase.google.com/docs/genkit',
    icon: 'Bot',
    roadmapSteps: [
      'Understand core AI and Machine Learning concepts.',
      'Learn JavaScript/TypeScript and Node.js fundamentals.',
      'Explore Genkit documentation and examples.',
      'Practice building small AI-powered flows (e.g., text generation, summarization).',
      'Experiment with different models and prompt engineering techniques.',
      'Integrate Genkit flows into web applications (e.g., using Next.js).',
    ]
  },
  {
    id: 'nextjs',
    name: 'Next.js (App Router)',
    description: 'Build full-stack web applications with the latest features of React and the powerful Next.js App Router for server components, efficient data fetching, and improved routing.',
    officialLink: 'https://nextjs.org/docs',
    icon: 'Sparkles', 
    roadmapSteps: [
      'Master React fundamentals (components, state, props, hooks).',
      'Learn core Next.js concepts (pages, layouts, routing with App Router).',
      'Understand Server Components vs. Client Components.',
      'Practice data fetching (Server Actions, Route Handlers, client-side).',
      'Explore styling options (Tailwind CSS, CSS Modules).',
      'Deploy your Next.js applications (e.g., Vercel, Firebase App Hosting).',
    ]
  },
  {
    id: 'python_ai_ml',
    name: 'Python for AI/ML',
    description: 'The leading programming language for Artificial Intelligence and Machine Learning development due to its extensive libraries (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch) and clear syntax.',
    officialLink: 'https://www.python.org/about/gettingstarted/',
    icon: 'Code2',
    roadmapSteps: [
      'Learn Python basics (variables, data types, control flow, functions, OOP).',
      'Master NumPy for numerical computation and Pandas for data manipulation.',
      'Study Scikit-learn for traditional machine learning algorithms.',
      'Dive into TensorFlow or PyTorch for deep learning and neural networks.',
      'Practice with real-world datasets and projects (e.g., Kaggle competitions).',
      'Explore specific AI fields like NLP or Computer Vision.',
    ]
  },
  {
    id: 'machine_learning',
    name: 'Machine Learning Concepts',
    description: 'Understand the fundamentals of Machine Learning, including supervised learning (classification, regression), unsupervised learning (clustering), model evaluation, and feature engineering.',
    officialLink: 'https://developers.google.com/machine-learning/crash-course',
    icon: 'BrainCircuit',
     roadmapSteps: [
      'Grasp basic statistics and probability.',
      'Learn about different types of ML algorithms and their use cases.',
      'Understand data preprocessing and feature engineering.',
      'Study model evaluation metrics (accuracy, precision, recall, F1-score, AUC).',
      'Learn about overfitting, underfitting, and regularization techniques.',
      'Practice implementing models using libraries like Scikit-learn.',
    ]
  },
  {
    id: 'agentic_ai',
    name: 'Agentic AI & Future AI Systems',
    description: 'Dive into Agentic AI, where systems proactively achieve goals, make decisions, and learn from interactions. This is a key direction for future AI, leading to more autonomous and capable intelligent systems. Understanding this field involves a multi-faceted learning journey.',
    officialLink: 'https://ai.google/responsibility/principles/', 
    icon: 'BrainCircuit',
    roadmapSteps: [
      'Master Python: The cornerstone for AI development.',
      'Solidify Core Machine Learning: Understand supervised, unsupervised, and reinforcement learning.',
      'Explore Deep Learning: Neural networks (CNNs, RNNs), and especially Transformers.',
      'Learn Natural Language Processing (NLP): Essential for AI communication and understanding.',
      'Deep Dive into Reinforcement Learning (RL): Crucial for decision-making and agent behavior.',
      'Understand LLMs & Generative AI: Tools like Genkit are vital for building modern AI apps.',
      'Study AI Ethics and Safety: Critical for responsible development of advanced AI.',
      'Explore Multi-Agent Systems & Robotics (Optional): For advanced interaction and physical embodiment.',
    ],
  }
];

// Python Quiz Section
export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface PythonQuizQuestion {
  id: string;
  questionText: string;
  options: QuizOption[];
  explanation?: string;
}

export interface PythonQuizDifficulty {
  level: 'Easy' | 'Intermediate' | 'Hard';
  questions: PythonQuizQuestion[];
}

export const pythonQuizData: PythonQuizDifficulty[] = [
  {
    level: 'Easy',
    questions: [
      {
        id: 'e1',
        questionText: "What keyword is used to define a function in Python?",
        options: [
          { text: "func", isCorrect: false },
          { text: "def", isCorrect: true },
          { text: "function", isCorrect: false },
          { text: "define", isCorrect: false },
        ],
        explanation: "'def' is the keyword used to define a function in Python."
      },
      {
        id: 'e2',
        questionText: "Which of these is a valid variable name in Python?",
        options: [
          { text: "my-variable", isCorrect: false },
          { text: "2variable", isCorrect: false },
          { text: "my_variable", isCorrect: true },
          { text: "$variable", isCorrect: false },
        ],
        explanation: "Python variable names can contain letters, numbers, and underscores, but cannot start with a number or contain hyphens or special characters like '$'."
      },
      {
        id: 'e3',
        questionText: "What is the output of `print(10 / 2)` in Python 3?",
        options: [
          { text: "5", isCorrect: false },
          { text: "5.0", isCorrect: true },
          { text: "Error", isCorrect: false },
          { text: "10/2", isCorrect: false },
        ],
        explanation: "In Python 3, division (/) always results in a float."
      },
      {
        id: 'e4',
        questionText: "What is the data type of the value `True` in Python?",
        options: [
          { text: "string", isCorrect: false },
          { text: "integer", isCorrect: false },
          { text: "boolean", isCorrect: true },
          { text: "float", isCorrect: false },
        ],
        explanation: "`True` and `False` are boolean values in Python, represented by the `bool` data type."
      },
      {
        id: 'e5',
        questionText: "Which symbol is used to start a single-line comment in Python?",
        options: [
          { text: "//", isCorrect: false },
          { text: "#", isCorrect: true },
          { text: "/*", isCorrect: false },
          { text: "--", isCorrect: false },
        ],
        explanation: "The `#` symbol is used for single-line comments in Python. Anything after `#` on the same line is ignored by the interpreter."
      }
    ]
  },
  {
    level: 'Intermediate',
    questions: [
      {
        id: 'i1',
        questionText: "What does the `append()` method do for a list in Python?",
        options: [
          { text: "Removes an item from the list", isCorrect: false },
          { text: "Adds an item to the beginning of the list", isCorrect: false },
          { text: "Adds an item to the end of the list", isCorrect: true },
          { text: "Sorts the list", isCorrect: false },
        ],
        explanation: "The `append()` method adds a single item to the end of an existing list."
      },
      {
        id: 'i2',
        questionText: "Which loop is best suited for iterating a specific number of times?",
        options: [
          { text: "while loop", isCorrect: false },
          { text: "for loop with range()", isCorrect: true },
          { text: "if/else statement", isCorrect: false },
          { text: "do-while loop (Python doesn't have this)", isCorrect: false },
        ],
        explanation: "A `for` loop combined with `range()` (e.g., `for i in range(5):`) is ideal for executing a block of code a predetermined number of times."
      },
      {
        id: 'i3',
        questionText: "How do you access the value associated with the key 'name' in a dictionary `my_dict`?",
        options: [
          { text: "my_dict.get_value('name')", isCorrect: false },
          { text: "my_dict.name", isCorrect: false },
          { text: "my_dict['name']", isCorrect: true },
          { text: "my_dict('name')", isCorrect: false },
        ],
        explanation: "You use square bracket notation `my_dict['key']` or the `get()` method `my_dict.get('key')` to access values in a dictionary."
      },
      {
        id: 'i4',
        questionText: "What is the output of `print(7 // 2)` in Python?",
        options: [
          { text: "3.5", isCorrect: false },
          { text: "3", isCorrect: true },
          { text: "4", isCorrect: false },
          { text: "Error", isCorrect: false },
        ],
        explanation: "The `//` operator performs floor division, which divides and rounds down to the nearest whole number. So, 7 divided by 2 is 3.5, and rounding down gives 3."
      },
      {
        id: 'i5',
        questionText: "Consider the code: `count = 10`. What is the value of `count` after the statement `count -= 3` is executed?",
        options: [
          { text: "10", isCorrect: false },
          { text: "3", isCorrect: false },
          { text: "7", isCorrect: true },
          { text: "13", isCorrect: false },
        ],
        explanation: "The `-=` operator is an assignment operator that subtracts the right operand from the left operand and assigns the result back to the left operand. So, `count -= 3` is equivalent to `count = count - 3`."
      }
    ]
  },
  {
    level: 'Hard',
    questions: [
      {
        id: 'h1',
        questionText: "What is the primary purpose of a `try-except` block in Python?",
        options: [
          { text: "To speed up code execution", isCorrect: false },
          { text: "To define reusable blocks of code", isCorrect: false },
          { text: "To handle potential runtime errors gracefully", isCorrect: true },
          { text: "To create conditional logic", isCorrect: false },
        ],
        explanation: "`try-except` blocks are used for error handling, allowing the program to manage exceptions that might occur during runtime without crashing."
      },
      {
        id: 'h2',
        questionText: "What will `my_list = [1, 2, 3, 4, 5]; print(my_list[-2:])` output?",
        options: [
          { text: "[4, 5]", isCorrect: true },
          { text: "[1, 2, 3, 4]", isCorrect: false },
          { text: "[3, 4, 5]", isCorrect: false },
          { text: "Error", isCorrect: false },
        ],
        explanation: "Slicing with `[-2:]` starts from the second to last element (index -2) and goes to the end of the list."
      },
       {
        id: 'h3',
        questionText: "In Python, a function that does not explicitly use a `return` statement will return what value by default?",
        options: [
          { text: "0", isCorrect: false },
          { text: "None", isCorrect: true },
          { text: "True", isCorrect: false },
          { text: "An error will occur", isCorrect: false },
        ],
        explanation: "If a function doesn't have an explicit `return` statement, or has a `return` statement without a value, it implicitly returns `None`."
      },
      {
        id: 'h4',
        questionText: "What is the output of the following code snippet?\n```python\nmy_dict = {'fruit': 'apple', 'color': 'red'}\nprint(my_dict.get('size', 'medium'))\n```",
        options: [
          { text: "'apple'", isCorrect: false },
          { text: "'red'", isCorrect: false },
          { text: "'medium'", isCorrect: true },
          { text: "Error", isCorrect: false },
        ],
        explanation: "The `get()` method for dictionaries returns the value for a specified key. If the key is not found (like 'size' here), it returns the default value provided (in this case, 'medium'), instead of raising a KeyError."
      },
      {
        id: 'h5',
        questionText: "Which of the following statements best describes Python lists?",
        options: [
          { text: "Lists are immutable, meaning their elements cannot be changed after creation.", isCorrect: false },
          { text: "Lists can only store items of the same data type.", isCorrect: false },
          { text: "Lists are ordered collections and their elements can be changed after creation (mutable).", isCorrect: true },
          { text: "List elements are accessed by key-value pairs.", isCorrect: false },
        ],
        explanation: "Python lists are ordered (maintain the sequence of items), mutable (elements can be changed, added, or removed after creation), and can store items of different data types. Dictionaries use key-value pairs for access."
      }
    ]
  }
];


// Placeholder for educational zone icons
export { BookOpen as EduBookOpenIcon, Lightbulb as EduLightbulbIcon, Briefcase as EduBriefcaseIcon, GraduationCap as EduGraduationCapIcon, Users as EduUsersIcon, Rocket as EduRocketIcon, Palette as EduPaletteIcon, Film as EduFilmIcon, Landmark as EduLandmarkIcon, TrendingUp as EduTrendingUpIcon, Cpu as EduCpuIcon, FlaskConical as EduFlaskIcon, Atom as EduAtomIcon, Leaf as EduLeafIcon, Microscope as EduMicroscopeIcon, Paintbrush as EduPaintbrushIcon, Newspaper as EduNewspaperIcon, Megaphone as EduMegaphoneIcon };
export { BookHeart as EduZoneIcon };
export { BrainCog as EduBrainCogIcon };

// Export new icons for AI/Tech page
export { Bot as BotIcon, BrainCircuit as BrainCircuitIcon, ExternalLink as ExternalLinkIcon };
export { Map as MapIcon, CheckSquare as CheckSquareIcon };
// Export icons for Pharmacy
export { Pill as PillIcon, Stethoscope as StethoscopeIcon };
// Export icons for Healthcare general
export { HeartPulse as HeartPulseIcon };
// Export icon for AI Chat
export { MessageCircle as AIChatIcon };
    

    