
"use client";

import { MindGymLayersIcon, positiveAffirmations } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AffirmationFlipCard } from "./AffirmationFlipCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function PositiveAffirmationsSection() {
  return (
    <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
      <CardHeader className="flex flex-row items-center space-x-3 pb-2">
        <div className="p-2 bg-primary/10 rounded-md">
          <MindGymLayersIcon className="h-5 w-5 text-primary" />
        </div>
        <CardTitle className="font-headline text-lg text-foreground break-words">Positive Affirmation Flip Cards</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <CardDescription className="font-body text-sm mb-4 break-words">
          Tap a card to flip it and reveal an uplifting message.
        </CardDescription>
        <ScrollArea className="w-full whitespace-nowrap rounded-md pb-4">
          <div className="flex space-x-4">
            {positiveAffirmations.map((affirmation, index) => (
              <AffirmationFlipCard
                key={index}
                frontText={affirmation.front}
                backText={affirmation.back}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
