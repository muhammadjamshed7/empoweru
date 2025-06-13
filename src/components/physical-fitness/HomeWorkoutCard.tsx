
"use client";

import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Move, Sunrise, Zap, Shield } from "lucide-react"; // Import specific icons
import { useToast } from "@/hooks/use-toast";
import type { HomeWorkout } from "@/lib/constants";

interface HomeWorkoutCardProps {
  workout: HomeWorkout;
}

const iconMap: { [key: string]: LucideIcon } = {
  Move: Move,
  Sunrise: Sunrise,
  Zap: Zap,
  Shield: Shield,
  // Add other icons here if new home workout types are added
};


export function HomeWorkoutCard({ workout }: HomeWorkoutCardProps) {
  const { toast } = useToast();
  const WorkoutIcon = iconMap[workout.icon] || Move; // Default to Move if icon not found

  const handleStartWorkout = () => {
    // Placeholder for starting workout (e.g., open modal, video, or new page)
    toast({
      title: "Workout Started!",
      description: `Starting ${workout.title}. Get ready!`,
      variant: "default",
    });
    if (workout.actionType === 'video' && workout.actionLink) {
      window.open(workout.actionLink, '_blank');
    }
  };

  return (
    <Card className="w-72 min-w-[280px] flex-shrink-0 shadow-lg dark:bg-slate-900 border dark:border-slate-700 hover:shadow-green-500/20 transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-green-500/10 rounded-md">
            <WorkoutIcon className="h-7 w-7 text-green-400" />
          </div>
          <CardTitle className="font-headline text-lg text-foreground dark:text-green-300">{workout.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <CardDescription className="text-sm mb-4 font-body text-muted-foreground dark:text-slate-400 flex-grow min-h-[40px]">{workout.description}</CardDescription>
        <Button onClick={handleStartWorkout} variant="default" className="w-full mt-auto font-body bg-green-500 hover:bg-green-600 text-background dark:text-slate-900 dark:hover:bg-green-400">
          Start Routine <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

