
"use client";

import { useState, useEffect } from "react";
import type { GymWorkoutPlan as GymWorkoutPlanType, GymExercise } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dumbbell, Zap, ShieldCheck, Activity } from "lucide-react";

interface GymWorkoutPlanProps {
  plans: GymWorkoutPlanType[];
}

const goalIcons: { [key: string]: typeof Dumbbell } = { // Assuming all icons are LucideIcon type
  "Fat Loss": Zap,
  "Strength": Dumbbell,
  "Muscle Gain": Activity, 
};

export function GymWorkoutPlan({ plans }: GymWorkoutPlanProps) {
  const [selectedGoal, setSelectedGoal] = useState<GymWorkoutPlanType['goal'] | 'All'>('All');
  const [filteredPlans, setFilteredPlans] = useState<GymWorkoutPlanType[]>(plans);

  useEffect(() => {
    if (selectedGoal === 'All') {
      setFilteredPlans(plans);
    } else {
      setFilteredPlans(plans.filter(plan => plan.goal === selectedGoal));
    }
  }, [selectedGoal, plans]);

  const goals: (GymWorkoutPlanType['goal'] | 'All')[] = ['All', ...new Set(plans.map(p => p.goal))];

  return (
    <div className="space-y-6">
      <div className="flex justify-start">
        <Select
          value={selectedGoal}
          onValueChange={(value: GymWorkoutPlanType['goal'] | 'All') => setSelectedGoal(value)}
        >
          <SelectTrigger className="w-full sm:w-[280px] dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 focus:ring-green-500">
            <SelectValue placeholder="Select Goal" />
          </SelectTrigger>
          <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
            {goals.map(goal => (
              <SelectItem key={goal} value={goal} className="dark:text-slate-300 dark:focus:bg-slate-700">
                {goal}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredPlans.length === 0 && (
        <p className="text-center text-muted-foreground dark:text-slate-400 py-4 break-words">No workout plans found for the selected goal.</p>
      )}

      <Accordion type="single" collapsible className="w-full space-y-4">
        {filteredPlans.map((plan) => {
          const PlanIcon = goalIcons[plan.goal as keyof typeof goalIcons] || Activity;
          return (
          <AccordionItem key={plan.id} value={plan.id} className="border dark:border-slate-700 rounded-lg shadow-md dark:bg-slate-900 overflow-hidden">
            <AccordionTrigger className="p-4 hover:no-underline data-[state=open]:bg-slate-800/50 data-[state=open]:dark:bg-slate-800">
              <div className="flex items-center space-x-4 w-full">
                <div className="p-2 bg-blue-500/10 rounded-md">
                   <PlanIcon className="h-7 w-7 text-blue-400" />
                </div>
                <div className="text-left">
                  <h3 className="font-headline text-lg text-foreground dark:text-blue-300 break-words">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400 break-words">{plan.description}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-background dark:bg-slate-900/80">
              <ul className="space-y-3">
                {plan.exercises.map((exercise, index) => (
                  <li key={index} className="p-3 bg-muted/50 dark:bg-slate-800/70 rounded-md">
                    <p className="font-semibold text-foreground dark:text-slate-200 break-words">{exercise.name}</p>
                    <p className="text-sm text-muted-foreground dark:text-slate-400 break-words">
                      Sets: {exercise.sets} &bull; Reps: {exercise.reps} &bull; Rest: {exercise.rest}
                    </p>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
