
"use client";

import Link from "next/link";
import { ArrowLeft, Dumbbell, Zap, Move, Sunrise, Shield, Activity, Scale, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { homeWorkouts, gymWorkoutPlans, fitnessProgressMessages, FitnessIcon } from "@/lib/constants";
import type { HomeWorkout } from "@/lib/constants";
import { HomeWorkoutCard } from "@/components/physical-fitness/HomeWorkoutCard";
import { GymWorkoutPlan } from "@/components/physical-fitness/GymWorkoutPlan";
import { BmiCalculator } from "@/components/physical-fitness/BmiCalculator";
import { WeeklyProgressSection } from "@/components/physical-fitness/WeeklyProgressSection";

export default function PhysicalFitnessPage() {
  return (
    <div className="container mx-auto px-4 py-8 dark:bg-slate-950 min-h-[calc(100vh-4rem)]">
      <header className="mb-8 text-center">
        <div className="inline-flex items-center justify-center bg-green-500/10 text-green-400 p-3 rounded-full mb-4">
          <FitnessIcon className="h-10 w-10" />
        </div>
        <h1 className="font-headline text-4xl font-bold text-foreground dark:text-green-300">
          Stay Fit. Stay Strong.
        </h1>
        <p className="text-lg text-muted-foreground mt-2 font-body">
          Your journey to a healthier you starts now.
        </p>
      </header>

      {/* Home Workout Routines Section */}
      <section className="mb-12">
        <h2 className="font-headline text-2xl font-semibold mb-4 text-foreground dark:text-green-400">Home Workouts</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex space-x-4 pb-4">
            {homeWorkouts.map((workout) => (
              <HomeWorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Gym Workout Plans Section */}
      <section className="mb-12">
         <h2 className="font-headline text-2xl font-semibold mb-4 text-foreground dark:text-green-400">Gym Workout Plans</h2>
        <GymWorkoutPlan plans={gymWorkoutPlans} />
      </section>

      {/* BMI Calculator Section */}
      <section className="mb-12">
        <h2 className="font-headline text-2xl font-semibold mb-4 text-foreground dark:text-green-400">BMI Calculator &amp; Advice</h2>
        <BmiCalculator />
      </section>

      {/* Weekly Progress Tracker Section */}
      <section className="mb-12">
        <h2 className="font-headline text-2xl font-semibold mb-4 text-foreground dark:text-green-400">Your Progress</h2>
        <WeeklyProgressSection />
      </section>

      <div className="text-center mt-8">
        <Button asChild variant="outline" size="lg" className="dark:border-green-500 dark:text-green-400 dark:hover:bg-green-500/10">
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
