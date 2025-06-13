
"use client";

import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Move, Sunrise, Zap, Shield, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { HomeWorkout } from "@/lib/constants";
import { useState } from "react";
import { WorkoutInProgressDisplay } from "./WorkoutInProgressDisplay";

interface HomeWorkoutCardProps {
  workout: HomeWorkout;
}

const iconMap: { [key: string]: LucideIcon } = {
  Move: Move,
  Sunrise: Sunrise,
  Zap: Zap,
  Shield: Shield,
  Activity: Activity,
};


export function HomeWorkoutCard({ workout }: HomeWorkoutCardProps) {
  const { toast } = useToast();
  const WorkoutIcon = iconMap[workout.icon] || Move;
  const [isWorkoutInProgress, setIsWorkoutInProgress] = useState(false);

  const handleStartWorkout = () => {
    toast({
      title: "Workout Started!",
      description: `Starting ${workout.title}. Get ready!`,
      variant: "default",
    });
    setIsWorkoutInProgress(true);
    if (workout.actionType === 'video' && workout.actionLink) {
      window.open(workout.actionLink, '_blank');
    }
  };

  const handleWorkoutFinish = () => {
    setIsWorkoutInProgress(false);
    toast({
      title: "Workout Session Ended",
      description: `You've completed your session for ${workout.title}.`,
    });
  };

  return (
    <>
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
      {isWorkoutInProgress && (
        <WorkoutInProgressDisplay
          isOpen={isWorkoutInProgress}
          onClose={handleWorkoutFinish}
          workoutTitle={workout.title}
          duration={workout.duration || 60} // Default to 60s if no duration
        />
      )}
    </>
  );
}
