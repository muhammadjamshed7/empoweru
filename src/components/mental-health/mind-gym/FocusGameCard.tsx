
"use client";

import { useState, useEffect, useRef } from "react";
import { MindGymTargetIcon } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const GAME_AREA_SIZE = 200; // px
const DOT_SIZE = 20; // px
const GAME_DURATION = 10; // seconds
const DOT_MOVE_INTERVAL = 800; // ms

export function FocusGameCard() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const dotMoveIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const { toast } = useToast();
  const scoreRef = useRef(score);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  const getRandomPosition = () => {
    const maxX = GAME_AREA_SIZE - DOT_SIZE;
    const maxY = GAME_AREA_SIZE - DOT_SIZE;
    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  const endGame = useCallback(() => {
    setGameActive(false); // This will trigger the useEffect cleanup for intervals
    // Defer the toast to prevent updates during render phase of other components
    setTimeout(() => {
      toast({ title: "Game Over!", description: `Your score: ${scoreRef.current}` });
    }, 0);
  }, [toast]); // setGameActive is stable, scoreRef.current is accessed inside

  useEffect(() => {
    const clearAllIntervals = () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
      if (dotMoveIntervalRef.current) {
        clearInterval(dotMoveIntervalRef.current);
        dotMoveIntervalRef.current = null;
      }
    };

    if (gameActive) {
      setDotPosition(getRandomPosition()); 
      
      dotMoveIntervalRef.current = setInterval(() => {
        setDotPosition(getRandomPosition());
      }, DOT_MOVE_INTERVAL);

      timerIntervalRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 1) {
            clearAllIntervals(); 
            endGame(); 
            return 0; 
          }
          return prevTimeLeft - 1; 
        });
      }, 1000);
    } else {
      clearAllIntervals();
    }

    return () => {
      clearAllIntervals();
    };
  }, [gameActive, endGame]);

  const startGame = () => {
    setScore(0);
    scoreRef.current = 0; 
    setTimeLeft(GAME_DURATION);
    setGameActive(true); 
    toast({ title: "Game Started!", description: "Tap the moving dot." });
  };

  const handleDotClick = () => {
    if (gameActive) {
      setScore((prevScore) => prevScore + 1);
      setDotPosition(getRandomPosition()); 
    }
  };

  return (
    <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
      <CardHeader className="flex flex-row items-center space-x-3 pb-2">
        <div className="p-2 bg-accent/10 rounded-md">
          <MindGymTargetIcon className="h-5 w-5 text-accent" />
        </div>
        <CardTitle className="font-headline text-lg text-foreground">Focus Game: Tap the Dot</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <CardDescription className="font-body text-sm mb-3">
          Test your focus! Tap the dot as many times as you can in {GAME_DURATION} seconds.
        </CardDescription>
        
        <div className="flex flex-col items-center space-y-4">
          <div
            ref={gameAreaRef}
            className="relative bg-muted/50 border border-border rounded-md overflow-hidden cursor-pointer"
            style={{ width: GAME_AREA_SIZE, height: GAME_AREA_SIZE }}
            onClick={!gameActive ? startGame : undefined}
          >
            {gameActive ? (
              <div
                className="absolute bg-primary rounded-full transition-all duration-150 ease-in-out"
                style={{
                  width: DOT_SIZE,
                  height: DOT_SIZE,
                  transform: `translate(${dotPosition.x}px, ${dotPosition.y}px)`,
                  boxShadow: '0 0 10px hsl(var(--primary))',
                }}
                onClick={handleDotClick}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-foreground font-semibold">
                Click to Start
              </div>
            )}
          </div>

          {!gameActive ? (
            <Button onClick={startGame} className="font-body">Start Game</Button>
          ) : (
            <div className="text-center">
              <p className="font-body text-lg">Time Left: <span className="font-bold text-primary">{timeLeft}s</span></p>
              <p className="font-body text-lg">Score: <span className="font-bold text-accent">{score}</span></p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
