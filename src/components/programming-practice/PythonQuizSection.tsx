
"use client";

import { useState } from "react";
import { pythonQuizData, type PythonQuizDifficulty, type PythonQuizQuestion, type QuizOption } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, RefreshCw, ChevronRight, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type QuizPhase = 'selectingDifficulty' | 'inProgress' | 'completed';

interface UserAnswer {
  questionId: string;
  selectedOptionText: string;
  isCorrect: boolean;
}

export function PythonQuizSection() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<PythonQuizDifficulty | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [score, setScore] = useState(0);
  const [quizPhase, setQuizPhase] = useState<QuizPhase>('selectingDifficulty');
  const [selectedOptionValue, setSelectedOptionValue] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleDifficultySelect = (level: 'Easy' | 'Intermediate' | 'Hard') => {
    const difficulty = pythonQuizData.find(d => d.level === level);
    if (difficulty) {
      setSelectedDifficulty(difficulty);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setScore(0);
      setQuizPhase('inProgress');
      setSelectedOptionValue(null);
      setShowFeedback(false);
    }
  };

  const handleOptionSelect = (optionText: string) => {
    if (showFeedback) return; // Don't allow changing answer after submission
    setSelectedOptionValue(optionText);
  };

  const handleSubmitAnswer = () => {
    if (!selectedDifficulty || selectedOptionValue === null) return;

    const currentQuestion = selectedDifficulty.questions[currentQuestionIndex];
    const selectedOpt = currentQuestion.options.find(opt => opt.text === selectedOptionValue);

    if (selectedOpt) {
      const isCorrect = selectedOpt.isCorrect;
      if (isCorrect) {
        setScore(prevScore => prevScore + 1);
      }
      setUserAnswers(prevAnswers => [
        ...prevAnswers,
        {
          questionId: currentQuestion.id,
          selectedOptionText: selectedOpt.text,
          isCorrect: isCorrect,
        },
      ]);
      setShowFeedback(true);
    }
  };

  const handleNextQuestion = () => {
    if (!selectedDifficulty) return;
    setShowFeedback(false);
    setSelectedOptionValue(null);
    if (currentQuestionIndex < selectedDifficulty.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setQuizPhase('completed');
    }
  };

  const handleRestartQuiz = () => {
    setQuizPhase('selectingDifficulty');
    setSelectedDifficulty(null);
    // Other states reset by handleDifficultySelect
  };

  if (quizPhase === 'selectingDifficulty') {
    return (
      <div className="space-y-4">
        <p className="text-center text-muted-foreground font-body break-words">Choose a difficulty level to start the quiz.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {(['Easy', 'Intermediate', 'Hard'] as const).map(level => (
            <Button key={level} onClick={() => handleDifficultySelect(level)} size="lg" className="font-body">
              {level}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  if (quizPhase === 'completed') {
    return (
      <div className="text-center space-y-6">
        <CardTitle className="font-headline text-2xl text-foreground break-words">Quiz Completed!</CardTitle>
        <p className="text-xl font-semibold text-primary break-words">
          Your Score: {score} / {selectedDifficulty?.questions.length || 0}
        </p>
        <div className="space-y-2">
            <h3 className="font-semibold text-lg text-foreground break-words">Review Your Answers:</h3>
            <ul className="text-left max-w-md mx-auto space-y-3">
                {selectedDifficulty?.questions.map((q, idx) => {
                    const userAnswer = userAnswers[idx];
                    const correctAnswer = q.options.find(opt => opt.isCorrect)?.text;
                    return (
                        <li key={q.id} className="p-3 border rounded-md bg-muted/30">
                            <p className="font-medium text-foreground break-words">{idx + 1}. {q.questionText}</p>
                            <p className={cn("text-sm break-words", userAnswer?.isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400")}>
                                Your answer: {userAnswer?.selectedOptionText || "Not answered"} {userAnswer?.isCorrect ? <CheckCircle className="inline h-4 w-4 ml-1"/> : <XCircle className="inline h-4 w-4 ml-1"/>}
                            </p>
                            {!userAnswer?.isCorrect && <p className="text-sm text-green-600 dark:text-green-400 break-words">Correct answer: {correctAnswer}</p>}
                            {q.explanation && <p className="text-xs text-muted-foreground mt-1 italic break-words">Explanation: {q.explanation}</p>}
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={handleRestartQuiz} variant="outline" size="lg" className="font-body">
            <RefreshCw className="mr-2 h-4 w-4" /> Try Another Difficulty
          </Button>
        </div>
      </div>
    );
  }

  if (!selectedDifficulty) return null; // Should not happen if phase is 'inProgress'

  const currentQuestion = selectedDifficulty.questions[currentQuestionIndex];
  const feedbackForSelected = currentQuestion.options.find(opt => opt.text === selectedOptionValue);


  return (
    <div className="space-y-6">
      <CardHeader className="p-0 text-center sm:text-left">
        <CardTitle className="font-headline text-xl text-primary break-words">
          {selectedDifficulty.level} Quiz - Question {currentQuestionIndex + 1} of {selectedDifficulty.questions.length}
        </CardTitle>
        <CardDescription className="font-body text-foreground pt-1 break-words">{currentQuestion.questionText}</CardDescription>
      </CardHeader>

      <RadioGroup
        value={selectedOptionValue || ""}
        onValueChange={handleOptionSelect}
        className="space-y-3"
        disabled={showFeedback}
      >
        {currentQuestion.options.map(option => (
          <Label
            key={option.text}
            htmlFor={`${currentQuestion.id}-${option.text}`}
            className={cn(
              "flex items-center space-x-3 rounded-md border p-4 cursor-pointer transition-colors hover:bg-muted/50 dark:border-slate-700",
              selectedOptionValue === option.text && !showFeedback && "bg-primary/10 border-primary ring-2 ring-primary",
              showFeedback && option.isCorrect && "bg-green-500/20 border-green-500 ring-2 ring-green-500 text-green-700 dark:text-green-300",
              showFeedback && !option.isCorrect && selectedOptionValue === option.text && "bg-red-500/20 border-red-500 ring-2 ring-red-500 text-red-700 dark:text-red-400",
              showFeedback && "cursor-not-allowed opacity-80"
            )}
          >
            <RadioGroupItem 
              value={option.text} 
              id={`${currentQuestion.id}-${option.text}`}
              disabled={showFeedback}
              className={cn(
                  showFeedback && option.isCorrect && "border-green-500 text-green-600",
                  showFeedback && !option.isCorrect && selectedOptionValue === option.text && "border-red-500 text-red-600"
              )}
            />
            <span className="font-body text-sm text-foreground break-words">{option.text}</span>
             {showFeedback && option.isCorrect && <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 ml-auto" />}
             {showFeedback && !option.isCorrect && selectedOptionValue === option.text && <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 ml-auto" />}
          </Label>
        ))}
      </RadioGroup>

      {showFeedback && currentQuestion.explanation && (
        <div className="mt-4 p-3 bg-blue-500/10 dark:bg-blue-900/30 border border-blue-500/30 rounded-md">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 flex items-center break-words">
            <HelpCircle className="h-4 w-4 mr-2" /> Explanation:
          </p>
          <p className="text-sm text-muted-foreground dark:text-slate-400 break-words">{currentQuestion.explanation}</p>
        </div>
      )}

      <div className="flex justify-end pt-2">
        {!showFeedback ? (
          <Button onClick={handleSubmitAnswer} disabled={selectedOptionValue === null} className="font-body">
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion} className="font-body">
            {currentQuestionIndex < selectedDifficulty.questions.length - 1 ? "Next Question" : "Finish Quiz"}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
       <p className="text-sm text-muted-foreground text-center font-body break-words">Current Score: {score} / {selectedDifficulty.questions.length}</p>
    </div>
  );
}

