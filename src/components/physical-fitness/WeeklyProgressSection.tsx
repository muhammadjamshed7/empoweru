
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressChartIcon, fitnessProgressMessages } from "@/lib/constants";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";

// Example data structure for progress
const weeklyActivityData = [
  { day: 'Mon', Running: 30, Weights: 0, Yoga: 20, Cycling: 0 },
  { day: 'Tue', Running: 0, Weights: 45, Yoga: 0, Cycling: 0 },
  { day: 'Wed', Running: 25, Weights: 0, Yoga: 0, Cycling: 30 },
  { day: 'Thu', Running: 0, Weights: 0, Yoga: 45, Cycling: 0 },
  { day: 'Fri', Running: 40, Weights: 30, Yoga: 0, Cycling: 0 },
  { day: 'Sat', Running: 0, Weights: 0, Yoga: 0, Cycling: 60 },
  { day: 'Sun', Running: 0, Weights: 0, Yoga: 30, Cycling: 0 },
];

const chartConfig = {
  Running: { label: "Running", color: "hsl(var(--chart-1))" },
  Weights: { label: "Weights", color: "hsl(var(--chart-2))" },
  Yoga: { label: "Yoga", color: "hsl(var(--chart-3))" },
  Cycling: { label: "Cycling", color: "hsl(var(--chart-4))" },
} satisfies ChartConfig;


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
        <p className="text-muted-foreground dark:text-slate-400 mb-6 font-body">
          Here's a sample of your weekly activity. Keep logging your workouts to see your progress!
        </p>
        
        <div className="h-[300px] mb-8">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <BarChart data={weeklyActivityData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false}
                axisLine={false}
                label={{ value: 'Minutes', angle: -90, position: 'insideLeft', offset: 10, style: { textAnchor: 'middle', fontSize: '12px', fill: 'hsl(var(--muted-foreground))' } }}
              />
              <ChartTooltip
                cursor={{ fill: 'hsl(var(--muted))', fillOpacity: 0.3 }}
                content={<ChartTooltipContent indicator="dot" />} 
              />
              <Legend content={<ChartLegendContent />} />
              {Object.entries(chartConfig).map(([key, value]) => (
                <Bar 
                  key={key} 
                  dataKey={key} 
                  stackId="a" 
                  fill={`var(--color-${key})`} 
                  radius={[4, 4, 0, 0]} 
                  name={value.label}
                />
              ))}
            </BarChart>
          </ChartContainer>
        </div>

        {dailyMessage && (
          <div className="p-4 border border-dashed border-purple-500/50 dark:border-purple-600 rounded-lg bg-purple-500/5 dark:bg-slate-800/50">
            <p className="text-center font-semibold text-purple-600 dark:text-purple-300 font-body text-lg italic">
              "{dailyMessage}"
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
