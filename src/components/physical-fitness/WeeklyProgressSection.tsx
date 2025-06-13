
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressChartIcon, fitnessProgressMessages } from "@/lib/constants";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts'; // Example for future chart

// Example data structure for progress (replace with actual data source)
// const exampleProgressData = [
//   { week: 'W1', workouts: 3, mood: 'Good' },
//   { week: 'W2', workouts: 4, mood: 'Great' },
//   { week: 'W3', workouts: 2, mood: 'Okay' },
//   { week: 'W4', workouts: 5, mood: 'Excellent' },
// ];

export function WeeklyProgressSection() {
  const [dailyMessage, setDailyMessage] = useState("");

  useEffect(() => {
    const getDailyMessage = () => {
      const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
      return fitnessProgressMessages[dayOfYear % fitnessProgressMessages.length];
    };
    setDailyMessage(getDailyMessage());
  }, []);

  return (
    <Card className="shadow-lg dark:bg-slate-900 border dark:border-slate-700">
      <CardHeader className="flex flex-row items-center space-x-3 pb-3">
        <div className="p-2 bg-purple-500/10 rounded-md">
          <ProgressChartIcon className="h-7 w-7 text-purple-400" />
        </div>
        <CardTitle className="font-headline text-xl text-foreground dark:text-purple-300">Track Your Journey</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground dark:text-slate-400 mb-4 font-body">
          Visual progress tracking coming soon! For now, stay motivated with this thought:
        </p>
        {dailyMessage && (
          <div className="p-4 border border-dashed border-purple-500/50 dark:border-purple-600 rounded-lg bg-purple-500/5 dark:bg-slate-800/50">
            <p className="text-center font-semibold text-purple-600 dark:text-purple-300 font-body text-lg italic">
              "{dailyMessage}"
            </p>
          </div>
        )}
        {/* Placeholder for chart
        <div className="h-[250px] mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={exampleProgressData} margin={{ top: 20, right: 0, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} allowDecimals={false} />
              <Tooltip
                contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--foreground))'
                }}
                cursor={{ fill: 'hsl(var(--muted))', fillOpacity: 0.3 }}
              />
              <Bar dataKey="workouts" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="workouts" position="top" className="fill-foreground" fontSize={12} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        */}
      </CardContent>
    </Card>
  );
}
