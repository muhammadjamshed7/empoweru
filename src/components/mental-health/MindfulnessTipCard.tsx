import { Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MindfulnessTipCardProps {
  tip: string;
}

export function MindfulnessTipCard({ tip }: MindfulnessTipCardProps) {
  return (
    <Card className="shadow-xl flex flex-col h-full">
      <CardHeader className="flex flex-row items-center space-x-3 pb-3">
        <div className="p-2 bg-accent/10 rounded-md">
          <Lightbulb className="h-6 w-6 text-accent" />
        </div>
        <CardTitle className="font-headline text-xl text-foreground">Today’s Mindfulness Tip</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground font-body text-base">{tip}</p>
      </CardContent>
    </Card>
  );
}
