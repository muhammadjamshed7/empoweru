
"use client";

import { useState, useEffect, useRef } from "react";
import { MindGymTimerIcon } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TIMER_OPTIONS = [
  { label: "3 Min", value: 3 * 60 },
  { label: "5 Min", value: 5 * 60 },
  { label: "10 Min", value: 10 * 60 },
];

export function MeditationTimerCard() {
  const [selectedDuration, setSelectedDuration] = useState<number>(TIMER_OPTIONS[1].value);
  const [timeLeft, setTimeLeft] = useState<number>(selectedDuration);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      toast({ title: "Meditation Complete!", description: "Well done. Take a moment to notice how you feel." });
      // Optionally reset or play a sound
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, timeLeft]);

  const handleSetDuration = (duration: number) => {
    if (isRunning) return; // Don't change duration while timer is running
    setSelectedDuration(duration);
    setTimeLeft(duration);
  };

  const toggleTimer = () => {
    if (timeLeft === 0) { // If timer ended, reset before starting
      setTimeLeft(selectedDuration);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(selectedDuration);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = ((selectedDuration - timeLeft) / selectedDuration) * 100;

  return (
    <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
      <CardHeader className="flex flex-row items-center space-x-3 pb-2">
        <div className="p-2 bg-secondary/20 rounded-md">
          <MindGymTimerIcon className="h-5 w-5 text-secondary-foreground" />
        </div>
        <CardTitle className="font-headline text-lg text-foreground">Guided Meditation Timer</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <CardDescription className="font-body text-sm mb-4">
          Choose a duration and find a quiet space to meditate.
        </CardDescription>
        
        <div className="flex justify-center space-x-2 mb-6">
          {TIMER_OPTIONS.map((option) => (
            <Button
              key={option.value}
              variant={selectedDuration === option.value && !isRunning ? "default" : "outline"}
              size="sm"
              onClick={() => handleSetDuration(option.value)}
              disabled={isRunning}
              className="font-body"
            >
              {option.label}
            </Button>
          ))}
        </div>

        <div className="text-center mb-4">
          <div className="relative w-32 h-32 mx-auto mb-2">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-muted/30"
                strokeWidth="3"
                fill="none"
                stroke="currentColor"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-primary"
                strokeWidth="3"
                strokeDasharray={`${progressPercentage}, 100`}
                strokeLinecap="round"
                fill="none"
                stroke="currentColor"
                transform="rotate(-90 18 18)"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-3xl font-bold text-foreground">
                  {formatTime(timeLeft)}
                </span>
             </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-3">
          <Button variant="ghost" size="icon" onClick={resetTimer} aria-label="Reset Timer">
            <RotateCcw className="h-6 w-6" />
          </Button>
          <Button 
            variant="default" 
            size="lg" 
            onClick={toggleTimer} 
            className="w-32 font-body"
            aria-label={isRunning ? "Pause Timer" : "Start Timer"}
          >
            {isRunning ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
            {isRunning ? "Pause" : (timeLeft === 0 || timeLeft === selectedDuration ? "Start" : "Resume")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
