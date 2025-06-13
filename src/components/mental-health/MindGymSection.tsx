
"use client";

import { MindGymBrainIcon } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainTeaserCard } from "@/components/mental-health/mind-gym/BrainTeaserCard";
import { FocusGameCard } from "@/components/mental-health/mind-gym/FocusGameCard";
import { MeditationTimerCard } from "@/components/mental-health/mind-gym/MeditationTimerCard";
import { PositiveAffirmationsSection } from "@/components/mental-health/mind-gym/PositiveAffirmationsSection";

export function MindGymSection() {
  return (
    <Card className="shadow-xl bg-gradient-to-br from-background to-muted/30">
      <CardHeader className="text-center pb-4">
        <div className="inline-flex items-center justify-center bg-accent/10 text-accent p-3 rounded-full mb-3 mx-auto">
          <MindGymBrainIcon className="h-8 w-8" />
        </div>
        <CardTitle className="font-headline text-3xl text-foreground">
          Mind Gym: Strengthen Your Mental Muscles
        </CardTitle>
        <p className="text-muted-foreground font-body">
          Engage in fun activities to train focus and reduce stress.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <BrainTeaserCard />
        <FocusGameCard />
        <MeditationTimerCard />
        <PositiveAffirmationsSection />
      </CardContent>
    </Card>
  );
}
