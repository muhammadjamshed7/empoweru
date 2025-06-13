
"use client";

import { useState } from "react";
import { educationPathQuizQuestions, quizRecommendations, QuizQuestion, QuizRecommendation } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Lightbulb, CheckCircle2, RotateCcw, Cpu, FlaskConical, Palette, Briefcase, Rocket, Atom, Paintbrush, TrendingUp, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const recommendationIconMap: { [key: string]: LucideIcon } = {
  Cpu, FlaskConical, Palette, Briefcase, Rocket, Atom, Paintbrush, TrendingUp, Lightbulb
};

export function EducationPathQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [recommendation, setRecommendation] = useState<QuizRecommendation | null>(null);

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === undefined) return;
    const currentQuestion = educationPathQuizQuestions[currentQuestionIndex];
    const selectedCat = currentQuestion.options.find(opt => opt.value === selectedOption)?.category;
    
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: selectedCat || '' }));
    setSelectedOption(undefined); // Reset for next question

    if (currentQuestionIndex < educationPathQuizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateResult();
      setQuizCompleted(true);
    }
  };

  const calculateResult = () => {
    const categoryCounts: Record<string, number> = {};
    Object.values(answers).forEach(category => {
      if (category) {
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      }
    });
    
    // Add the category from the last question's selected option
    const lastQuestion = educationPathQuizQuestions[currentQuestionIndex];
    const lastSelectedCat = lastQuestion.options.find(opt => opt.value === selectedOption)?.category;
    if (lastSelectedCat) {
        categoryCounts[lastSelectedCat] = (categoryCounts[lastSelectedCat] || 0) + 1;
    }


    let bestMatch: QuizRecommendation | null = null;
    let maxScore = -1;

    quizRecommendations.forEach(rec => {
      if (rec.id === 'rec_default') return; // Skip default for now

      let currentScore = 0;
      rec.categories.forEach(cat => {
        if (categoryCounts[cat]) {
          currentScore += categoryCounts[cat]; // Simple sum for now, can be weighted
        }
      });
       // Give a slight bonus if multiple primary categories match
      if (rec.categories.every(cat => categoryCounts[cat] > 0) && rec.categories.length > 1) {
        currentScore += rec.categories.length * 0.5; 
      }


      if (currentScore > maxScore) {
        maxScore = currentScore;
        bestMatch = rec;
      }
    });
    
    if (maxScore > 0 && bestMatch) {
         setRecommendation(bestMatch);
    } else {
        // Fallback or more nuanced logic
        const sortedCategories = Object.entries(categoryCounts).sort(([,a],[,b]) => b-a);
        if (sortedCategories.length > 0) {
            const topCat = sortedCategories[0][0];
            const generalRec = quizRecommendations.find(r => r.id === `rec_general_${topCat}`);
            if (generalRec) {
                setRecommendation(generalRec);
                return;
            }
        }
        setRecommendation(quizRecommendations.find(rec => rec.id === 'rec_default') || null);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSelectedOption(undefined);
    setQuizCompleted(false);
    setRecommendation(null);
  };

  if (quizCompleted && recommendation) {
    const ResultIcon = recommendationIconMap[recommendation.icon] || Lightbulb;
    return (
      <Card className="bg-gradient-to-br from-accent/20 to-primary/20 p-6 text-center">
        <CardHeader className="p-0 mb-4">
          <div className="mx-auto mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <ResultIcon className="h-8 w-8" />
          </div>
          <CardTitle className="font-headline text-2xl text-foreground">{recommendation.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-muted-foreground mb-6 font-body">{recommendation.text}</p>
          <Button onClick={handleRestartQuiz} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" /> Retake Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = educationPathQuizQuestions[currentQuestionIndex];

  return (
    <div className="space-y-6">
      <CardDescription className="text-center font-body text-muted-foreground">
        Answer a few quick questions to find a learning direction that might suit you!
      </CardDescription>
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="font-headline text-lg text-foreground">
            Question {currentQuestionIndex + 1} / {educationPathQuizQuestions.length}
          </CardTitle>
          <p className="font-body text-muted-foreground pt-1">{currentQuestion.text}</p>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedOption} onValueChange={handleOptionChange} className="space-y-3">
            {currentQuestion.options.map(option => (
              <Label
                key={option.value}
                htmlFor={`${currentQuestion.id}-${option.value}`}
                className={cn(
                  "flex items-center space-x-3 rounded-md border p-4 cursor-pointer transition-colors hover:bg-muted/50",
                  selectedOption === option.value ? "bg-primary/10 border-primary ring-2 ring-primary" : "border-border"
                )}
              >
                <RadioGroupItem value={option.value} id={`${currentQuestion.id}-${option.value}`} />
                <span className="font-body text-sm text-foreground">{option.text}</span>
              </Label>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
      <div className="flex justify-end">
        <Button onClick={handleNextQuestion} disabled={selectedOption === undefined} className="font-body">
          {currentQuestionIndex < educationPathQuizQuestions.length - 1 ? "Next Question" : "Get Recommendation"}
          <CheckCircle2 className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

