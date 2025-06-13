
"use client";

import Link from "next/link";
import { ArrowLeft, BookHeart, Lightbulb, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StudyTipsSection } from "@/components/educational-zone/StudyTipsSection";
import { CareerGuidanceSection } from "@/components/educational-zone/CareerGuidanceSection";
import { CareerCounselingBanner } from "@/components/educational-zone/CareerCounselingBanner";
import { EducationPathQuiz } from "@/components/educational-zone/EducationPathQuiz";

export default function EducationalZonePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <div className="inline-flex items-center justify-center bg-primary/10 text-primary p-3 rounded-full mb-4">
          <BookHeart className="h-10 w-10" />
        </div>
        <h1 className="font-headline text-4xl font-bold text-foreground break-words">
          Learn. Grow. Choose Wisely.
        </h1>
        <p className="text-lg text-muted-foreground mt-2 font-body break-words">
          Your journey to knowledge and self-discovery starts here.
        </p>
      </header>

      <div className="space-y-12">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl text-foreground break-words">
              <Lightbulb className="mr-3 h-7 w-7 text-accent" />
              Study Smart: Tips for Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <StudyTipsSection />
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl text-foreground break-words">
              <Briefcase className="mr-3 h-7 w-7 text-accent" />
              Career Guidance Corner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CareerGuidanceSection />
          </CardContent>
        </Card>
        
        <CareerCounselingBanner />

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl text-foreground break-words">
              <GraduationCap className="mr-3 h-7 w-7 text-accent" />
              Education Path Builder
            </CardTitle>
          </CardHeader>
          <CardContent>
            <EducationPathQuiz />
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg">
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
