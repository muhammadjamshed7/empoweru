"use client";

import { useState, useEffect } from "react";
import { Wind } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BreathingAnimation() {
  const [animationText, setAnimationText] = useState("Inhale");

  useEffect(() => {
    const cycle = () => {
      setAnimationText("Inhale"); // 4s
      setTimeout(() => {
        setAnimationText("Hold"); // 4s
        setTimeout(() => {
          setAnimationText("Exhale"); // 4s
        }, 4000); // Hold duration
      }, 4000); // Inhale duration
    };

    cycle(); // Initial call
    const intervalId = setInterval(cycle, 12000); // Total cycle duration (4+4+4 = 12s)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card className="shadow-xl flex flex-col h-full">
      <CardHeader className="flex flex-row items-center space-x-3 pb-3">
        <div className="p-2 bg-primary/10 rounded-md">
         <Wind className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="font-headline text-xl text-foreground">Guided Breathing</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center flex-grow py-8">
        <div className="relative w-40 h-40 md:w-48 md:h-48">
          <div className="absolute inset-0 bg-primary/20 rounded-full breathing-circle-animation"></div>
          <div className="absolute inset-2 bg-background rounded-full breathing-circle-animation" style={{ animationDelay: '-0.2s' }}></div>
          <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center breathing-circle-animation">
            <span className="text-xl font-semibold text-primary-foreground font-body">
              {animationText}
            </span>
          </div>
        </div>
        <p className="mt-6 text-muted-foreground font-body text-center">
          Inhale for 4s, Hold for 4s, Exhale for 4s. Repeat.
        </p>
      </CardContent>
    </Card>
  );
}
