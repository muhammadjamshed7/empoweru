"use client";

import { useState, useEffect } from "react";
import { Smile } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const moods = [
  { emoji: "😃", label: "Happy" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😟", label: "Anxious" },
  { emoji: "💪", label: "Motivated" },
];

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const storedMood = localStorage.getItem("empoweru-mood");
    if (storedMood) {
      setSelectedMood(storedMood);
    }
  }, []);

  const handleMoodSelect = (moodLabel: string) => {
    setSelectedMood(moodLabel);
    localStorage.setItem("empoweru-mood", moodLabel);
    toast({
      title: "Mood Logged!",
      description: `You're feeling ${moodLabel.toLowerCase()} today.`,
    });
  };

  return (
    <Card className="shadow-xl flex flex-col h-full">
      <CardHeader className="flex flex-row items-center space-x-3 pb-3">
        <div className="p-2 bg-secondary/20 rounded-md">
         <Smile className="h-6 w-6 text-secondary-foreground" />
        </div>
        <CardTitle className="font-headline text-xl text-foreground">How are you feeling?</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {moods.map((mood) => (
            <Button
              key={mood.label}
              variant={selectedMood === mood.label ? "default" : "outline"}
              className="flex flex-col h-auto py-3 sm:py-4 items-center justify-center"
              onClick={() => handleMoodSelect(mood.label)}
            >
              <span className="text-3xl sm:text-4xl mb-1">{mood.emoji}</span>
              <span className="text-xs sm:text-sm font-body">{mood.label}</span>
            </Button>
          ))}
        </div>
        {selectedMood && (
          <p className="text-center text-muted-foreground font-body text-sm mt-2">
            Today you're feeling: {selectedMood}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
