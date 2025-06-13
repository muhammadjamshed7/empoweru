
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motivationalQuotes } from '@/lib/constants';
import { Timer, Sparkles, X } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { useToast } from '@/hooks/use-toast';

interface WorkoutInProgressDisplayProps {
  isOpen: boolean;
  onClose: () => void;
  workoutTitle: string;
  duration: number; // Duration in seconds
}

export function WorkoutInProgressDisplay({
  isOpen,
  onClose,
  workoutTitle,
  duration,
}: WorkoutInProgressDisplayProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [currentQuote, setCurrentQuote] = useState("");
  const { toast } = useToast();

  const selectRandomQuote = useCallback(() => {
    if (motivationalQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
      setCurrentQuote(motivationalQuotes[randomIndex]);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeLeft(duration); // Reset timer when opened
      selectRandomQuote(); // Select initial quote
    }
  }, [isOpen, duration, selectRandomQuote]);

  useEffect(() => {
    if (!isOpen || timeLeft <= 0) {
      if (timeLeft <= 0 && isOpen) { // Timer finished naturally
        toast({
          title: "Workout Complete!",
          description: `Great job completing ${workoutTitle}!`,
        });
        onClose(); // Auto-close when timer finishes
      }
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [isOpen, timeLeft, onClose, workoutTitle, toast]);

  useEffect(() => {
    if (!isOpen) return;

    const quoteIntervalId = setInterval(() => {
      selectRandomQuote();
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(quoteIntervalId);
  }, [isOpen, selectRandomQuote]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? ((duration - timeLeft) / duration) * 100 : 0;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md p-0 dark:bg-slate-900 border-green-500/50 shadow-2xl shadow-green-500/30">
        <DialogHeader className="p-6 pb-2 bg-slate-800/50 rounded-t-lg">
          <DialogTitle className="text-2xl font-headline text-center text-green-300 flex items-center justify-center">
            <Timer className="mr-3 h-7 w-7" />
            {workoutTitle}
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 space-y-6 flex flex-col items-center">
          <div className="text-7xl font-mono font-bold text-green-400 tabular-nums">
            {formatTime(timeLeft)}
          </div>
          <Progress value={progressPercentage} className="w-full h-3 bg-slate-700 [&>div]:bg-green-500" />
          
          {currentQuote && (
            <div className="text-center p-4 bg-slate-800/60 rounded-lg min-h-[100px] flex flex-col justify-center items-center w-full">
              <Sparkles className="h-6 w-6 text-yellow-400 mb-2" />
              <p className="text-lg italic text-slate-300 font-body">
                "{currentQuote}"
              </p>
            </div>
          )}
        </div>
        <DialogFooter className="p-6 pt-2 bg-slate-800/50 rounded-b-lg">
          <Button
            type="button"
            variant="destructive"
            onClick={onClose}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-body"
          >
            Finish Workout Early
          </Button>
        </DialogFooter>
         <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground dark:text-slate-400 hover:dark:text-slate-200">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
