
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AffirmationFlipCardProps {
  frontText: string;
  backText: string;
}

export function AffirmationFlipCard({ frontText, backText }: AffirmationFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-48 h-32 [perspective:1000px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <Card
        className={cn(
          "relative w-full h-full rounded-lg shadow-md transition-transform duration-700 [transform-style:preserve-3d]",
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        )}
      >
        {/* Front of the card */}
        <CardContent
          className={cn(
            "absolute w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-primary/70 to-accent/70 text-primary-foreground [backface-visibility:hidden] rounded-lg"
          )}
        >
          <p className="text-center font-semibold text-lg font-body">{frontText}</p>
        </CardContent>
        
        {/* Back of the card */}
        <CardContent
          className={cn(
            "absolute w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-accent/70 to-primary/70 text-accent-foreground [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-lg"
          )}
        >
          <p className="text-center font-medium text-sm font-body">{backText}</p>
        </CardContent>
      </Card>
    </div>
  );
}
