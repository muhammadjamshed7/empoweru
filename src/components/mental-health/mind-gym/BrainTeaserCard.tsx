
"use client";

import { useState, useEffect } from "react";
import { MindGymPuzzleIcon, brainTeasers } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export function BrainTeaserCard() {
  const [dailyTeaser, setDailyTeaser] = useState<{ riddle: string; answer: string } | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const getDailyTeaser = () => {
      const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
      return brainTeasers[dayOfYear % brainTeasers.length];
    };
    setDailyTeaser(getDailyTeaser());
    setShowAnswer(false); // Reset on new teaser
  }, []);

  if (!dailyTeaser) {
    return (
      <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
        <CardHeader>
          <CardTitle>Loading Brain Teaser...</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
      <CardHeader className="flex flex-row items-center space-x-3 pb-2">
        <div className="p-2 bg-primary/10 rounded-md">
          <MindGymPuzzleIcon className="h-5 w-5 text-primary" />
        </div>
        <CardTitle className="font-headline text-lg text-foreground">Brain Teaser of the Day</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <CardDescription className="font-body text-base mb-3 min-h-[40px]">{dailyTeaser.riddle}</CardDescription>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAnswer(!showAnswer)}
          className="w-full sm:w-auto font-body"
        >
          {showAnswer ? "Hide Answer" : "Reveal Answer"}
          {showAnswer ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
        </Button>
        {showAnswer && (
          <p className="mt-3 p-3 bg-primary/5 border border-primary/20 rounded-md text-primary-foreground font-semibold font-body text-center">
            Answer: {dailyTeaser.answer}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
