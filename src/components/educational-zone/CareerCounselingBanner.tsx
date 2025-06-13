
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb } from "lucide-react";

export function CareerCounselingBanner() {
  return (
    <Card className="bg-gradient-to-r from-primary/80 to-accent/80 text-primary-foreground shadow-xl p-6 md:p-8">
      <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-0">
        <div className="flex-1 space-y-3">
          <div className="flex items-center">
            <Lightbulb className="h-8 w-8 mr-3 text-yellow-300" />
            <h3 className="font-headline text-2xl break-words">Why Career Counseling Matters</h3>
          </div>
          <p className="text-base font-body break-words">
            Choosing a career early builds clarity and reduces anxiety.
            Speak to mentors or explore options based on your passion, not pressure.
          </p>
        </div>
        <Button asChild variant="secondary" size="lg" className="bg-background/20 hover:bg-background/30 text-primary-foreground font-headline mt-4 md:mt-0 md:ml-6 flex-shrink-0">
          <Link href="/book-mentor-session">
            <Users className="mr-2 h-5 w-5" />
            Book a Mentor Session
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
