
"use client";

import { useState, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { bmiCategories, BmiIcon } from "@/lib/constants";
import { cn } from "@/lib/utils";

const bmiFormSchema = z.object({
  age: z.coerce.number().min(1, "Age must be at least 1").max(120, "Age must be at most 120"),
  gender: z.enum(["male", "female", "other"]),
  height: z.coerce.number().min(50, "Height must be at least 50cm").max(300, "Height must be at most 300cm"),
  weight: z.coerce.number().min(1, "Weight must be at least 1kg").max(500, "Weight must be at most 500kg"),
});

type BmiFormValues = z.infer<typeof bmiFormSchema>;

interface BmiResult {
  value: number;
  categoryKey: keyof typeof bmiCategories;
}

const LOCAL_STORAGE_KEY = "empoweru-bmi-inputs";

export function BmiCalculator() {
  const [bmiResult, setBmiResult] = useState<BmiResult | null>(null);

  const form = useForm<BmiFormValues>({
    resolver: zodResolver(bmiFormSchema),
    defaultValues: {
      age: '', 
      gender: undefined,
      height: '',
      weight: '',
    },
  });

  useEffect(() => {
    const storedInputs = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedInputs) {
      try {
        const parsedInputs = JSON.parse(storedInputs) as Partial<BmiFormValues>;
        // Validate before setting, though zod resolver will also catch it on submit
        const result = bmiFormSchema.partial().safeParse(parsedInputs);
        if (result.success) {
            Object.entries(result.data).forEach(([key, value]) => {
                if (value !== undefined) {
                     form.setValue(key as keyof BmiFormValues, value as any);
                }
            });
        }
      } catch (error) {
        console.error("Failed to parse stored BMI inputs:", error);
      }
    }
  }, [form]);

  const onSubmit: SubmitHandler<BmiFormValues> = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    const heightInMeters = data.height / 100;
    const bmi = parseFloat((data.weight / (heightInMeters * heightInMeters)).toFixed(1));

    let categoryKey: keyof typeof bmiCategories = 'normal';
    if (bmi < 18.5) categoryKey = 'underweight';
    else if (bmi >= 18.5 && bmi <= 24.9) categoryKey = 'normal';
    else if (bmi >= 25 && bmi <= 29.9) categoryKey = 'overweight';
    else if (bmi >= 30) categoryKey = 'obese';
    
    setBmiResult({ value: bmi, categoryKey });
  };

  return (
    <Card className="shadow-lg dark:bg-slate-900 border dark:border-slate-700">
      <CardHeader className="flex flex-row items-center space-x-3 pb-3">
        <div className="p-2 bg-yellow-500/10 rounded-md">
            <BmiIcon className="h-7 w-7 text-yellow-400" />
        </div>
        <CardTitle className="font-headline text-xl text-foreground dark:text-yellow-300">Calculate Your BMI</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm mb-6 font-body text-muted-foreground dark:text-slate-400">
          Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
        </CardDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-slate-300">Age (years)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 25" {...field} className="dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 focus:ring-yellow-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-slate-300">Gender</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 focus:ring-yellow-500">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">
                        <SelectItem value="male" className="dark:focus:bg-slate-700">Male</SelectItem>
                        <SelectItem value="female" className="dark:focus:bg-slate-700">Female</SelectItem>
                        <SelectItem value="other" className="dark:focus:bg-slate-700">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-slate-300">Height (cm)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 175" {...field} className="dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 focus:ring-yellow-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-slate-300">Weight (kg)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 70" {...field} className="dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 focus:ring-yellow-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-background dark:text-slate-900 dark:hover:bg-yellow-400">Calculate BMI</Button>
          </form>
        </Form>

        {bmiResult && (
          <div className="mt-8 p-6 bg-muted/30 dark:bg-slate-800/50 rounded-lg border dark:border-slate-700">
            <h3 className="font-headline text-xl mb-2 text-foreground dark:text-slate-200">Your Result:</h3>
            <p className="text-3xl font-bold mb-1" style={{ color: `hsl(var(--${bmiCategories[bmiResult.categoryKey].colorClass.replace('text-', '')}-fg))` }}>
                 Your BMI is <span className={cn("font-extrabold", bmiCategories[bmiResult.categoryKey].colorClass)}>{bmiResult.value.toFixed(1)}</span>
            </p>
            <p className={cn("text-lg font-semibold mb-3", bmiCategories[bmiResult.categoryKey].colorClass)}>
                Category: {bmiCategories[bmiResult.categoryKey].label}
            </p>
            <Card className="dark:bg-slate-800/70 border-dashed dark:border-slate-600">
              <CardHeader className="pb-2">
                <CardTitle className="text-md font-semibold dark:text-slate-300">Fitness Advice:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground dark:text-slate-400">
                  {bmiCategories[bmiResult.categoryKey].advice}
                </p>
              </CardContent>
            </Card>
            <p className="text-xs text-muted-foreground mt-4 dark:text-slate-500">
              Note: BMI is a general indicator and may not be accurate for athletes or individuals with high muscle mass. Consult a healthcare professional for personalized advice.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

