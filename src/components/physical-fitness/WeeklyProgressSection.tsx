
"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressChartIcon, fitnessProgressMessages } from "@/lib/constants";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { format, startOfWeek, endOfWeek, eachDayOfInterval, getDay, addDays } from 'date-fns';
import { useToast } from "@/hooks/use-toast";

interface ActivityLog {
  id: string;
  date: string; // ISO string
  activity: string;
  duration: number; // in minutes
}

interface ChartDataPoint {
  day: string; // 'Mon', 'Tue', etc.
  date: string; // 'YYYY-MM-DD' for tooltip
  Running?: number;
  Weights?: number;
  Yoga?: number;
  Cycling?: number;
  [key: string]: number | string | undefined; // For dynamic activity types
}

const chartConfig = {
  Running: { label: "Running", color: "hsl(var(--chart-1))" },
  Weights: { label: "Weights", color: "hsl(var(--chart-2))" },
  Yoga: { label: "Yoga", color: "hsl(var(--chart-3))" },
  Cycling: { label: "Cycling", color: "hsl(var(--chart-4))" },
} satisfies ChartConfig;

const LOCAL_STORAGE_KEY_ACTIVITIES = "empoweru-fitness-activities";
const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


export function WeeklyProgressSection() {
  const [dailyMessage, setDailyMessage] = useState("");
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([]);
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const { toast } = useToast();

  const processLogsForChart = useCallback((logs: ActivityLog[]): ChartDataPoint[] => {
    const today = new Date();
    const weekStart = startOfWeek(today, { weekStartsOn: 1 }); // Monday
    const weekEnd = endOfWeek(today, { weekStartsOn: 1 }); // Sunday
    const daysInWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });

    const initialChartData: ChartDataPoint[] = daysInWeek.map(date => ({
      day: format(date, 'E'), // 'Mon', 'Tue', etc.
      date: format(date, 'yyyy-MM-dd'),
      ...Object.fromEntries(Object.keys(chartConfig).map(key => [key, 0])) // Initialize all activities to 0
    }));

    logs.forEach(log => {
      const logDate = new Date(log.date);
      if (logDate >= weekStart && logDate <= weekEnd) {
        const dayIndex = initialChartData.findIndex(d => d.date === format(logDate, 'yyyy-MM-dd'));
        if (dayIndex !== -1 && chartConfig[log.activity as keyof typeof chartConfig]) {
            const currentDuration = initialChartData[dayIndex][log.activity] as number || 0;
            initialChartData[dayIndex][log.activity] = currentDuration + log.duration;
        }
      }
    });
    return initialChartData;
  }, []);

  useEffect(() => {
    const storedLogs = localStorage.getItem(LOCAL_STORAGE_KEY_ACTIVITIES);
    const parsedLogs = storedLogs ? JSON.parse(storedLogs) : [];
    setActivityLogs(parsedLogs);
  }, []);

  useEffect(() => {
    setChartData(processLogsForChart(activityLogs));
  }, [activityLogs, processLogsForChart]);
  

  useEffect(() => {
    const getDailyMessage = () => {
      const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
      return fitnessProgressMessages[dayOfYear % fitnessProgressMessages.length];
    };
    setDailyMessage(getDailyMessage());
  }, []);

  const handleLogActivity = (activity: string, duration: number) => {
    const newLog: ActivityLog = {
      id: new Date().toISOString() + Math.random().toString(), // simple unique id
      date: new Date().toISOString(),
      activity,
      duration,
    };
    const updatedLogs = [...activityLogs, newLog];
    setActivityLogs(updatedLogs);
    localStorage.setItem(LOCAL_STORAGE_KEY_ACTIVITIES, JSON.stringify(updatedLogs));
    toast({
      title: "Activity Logged!",
      description: `${duration} minutes of ${activity.toLowerCase()} recorded.`,
    });
  };

  const clearAllData = () => {
    setActivityLogs([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY_ACTIVITIES);
    toast({
        title: "Activity Data Cleared",
        description: "All your fitness activity logs have been removed.",
        variant: "destructive"
    });
  }

  return (
    <Card className="shadow-lg dark:bg-slate-900 border dark:border-slate-700">
      <CardHeader className="flex flex-row items-center space-x-3 pb-3">
        <div className="p-2 bg-purple-500/10 rounded-md">
          <ProgressChartIcon className="h-7 w-7 text-purple-400" />
        </div>
        <CardTitle className="font-headline text-xl text-foreground dark:text-purple-300">Track Your Journey</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground dark:text-slate-400 mb-2 font-body">
          Log your activities to see your weekly progress. Data is stored locally.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
            {(Object.keys(chartConfig) as Array<keyof typeof chartConfig>).map(activityKey => (
                 <Button key={activityKey} variant="outline" size="sm" onClick={() => handleLogActivity(activityKey, 30)} className="dark:border-purple-600 dark:text-purple-300 dark:hover:bg-purple-600/20">
                    Log 30min {chartConfig[activityKey].label}
                 </Button>
            ))}
            <Button variant="destructive" size="sm" onClick={clearAllData}>Clear All Logs</Button>
        </div>
        
        <div className="h-[300px] mb-8">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <BarChart data={chartData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
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
                content={<ChartTooltipContent 
                    indicator="dot" 
                    labelFormatter={(label, payload) => {
                        if (payload && payload.length > 0 && payload[0].payload.date) {
                            return `${label} (${format(new Date(payload[0].payload.date as string), 'MMM d')})`;
                        }
                        return label;
                    }}
                />} 
              />
              <ChartLegend content={<ChartLegendContent />} />
              {Object.entries(chartConfig).map(([key, value]) => (
                <Bar 
                  key={key} 
                  dataKey={key} 
                  stackId="a" 
                  fill={`var(--color-${key.toLowerCase()})`} // Ensure color key is lowercase if chartConfig uses it
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

