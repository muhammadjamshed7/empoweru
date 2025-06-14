
import { ArrowLeft, Brain } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MindfulnessTipCard } from "@/components/mental-health/MindfulnessTipCard";
import { BreathingAnimation } from "@/components/mental-health/BreathingAnimation";
import { MoodTracker } from "@/components/mental-health/MoodTracker";
import { JournalEntry } from "@/components/mental-health/JournalEntry";
import { MotivationalQuoteCard } from "@/components/mental-health/MotivationalQuoteCard";
import { MindGymSection } from "@/components/mental-health/MindGymSection";
import { mindfulnessTips } from "@/lib/constants";

export default function MentalHealthPage() {
  const getDailyTip = () => {
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    return mindfulnessTips[dayOfYear % mindfulnessTips.length];
  };

  const dailyTip = getDailyTip();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <div className="inline-flex items-center justify-center bg-primary/10 text-primary p-3 rounded-full mb-4">
          <Brain className="h-10 w-10" />
        </div>
        <h1 className="font-headline text-4xl font-bold text-foreground break-words">
          Your Mental Space
        </h1>
        <p className="text-lg text-muted-foreground mt-2 font-body break-words">
          “Peace begins with a deep breath.”
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <MindfulnessTipCard tip={dailyTip} />
        <BreathingAnimation />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <MoodTracker />
        <JournalEntry />
      </div>
      
      <div className="mb-8">
        <MotivationalQuoteCard />
      </div>

      <div className="mb-12">
        <MindGymSection />
      </div>

      <div className="text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
