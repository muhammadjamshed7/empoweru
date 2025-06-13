
"use client";

import Link from "next/link";
import { ArrowLeft, Code2, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PythonTopic {
  id: string;
  title: string;
  explanation: string | React.ReactNode;
  codeExample?: string;
}

const pythonTopics: PythonTopic[] = [
  {
    id: "intro",
    title: "What is Python?",
    explanation: (
      <>
        <p className="mb-2">Python is a popular, high-level, and versatile programming language known for its readability and simplicity. It's widely used in web development, data science, artificial intelligence, machine learning, automation, and more.</p>
        <p>Its design philosophy emphasizes code readability with its notable use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented and functional programming.</p>
      </>
    ),
  },
  {
    id: "variables",
    title: "Variables and Data Types",
    explanation: "Variables are containers for storing data values. Python has various data types, including:",
    codeExample: `
# String (text)
name = "Alice"
print(name)

# Integer (whole number)
age = 30
print(age)

# Float (decimal number)
price = 19.99
print(price)

# Boolean (True or False)
is_student = True
print(is_student)
    `,
  },
  {
    id: "operators",
    title: "Basic Operators",
    explanation: "Operators are used to perform operations on variables and values.",
    codeExample: `
# Arithmetic Operators
a = 10
b = 3
print(a + b)  # Addition: 13
print(a - b)  # Subtraction: 7
print(a * b)  # Multiplication: 30
print(a / b)  # Division: 3.33...
print(a % b)  # Modulus (remainder): 1
print(a ** b) # Exponentiation: 1000

# Comparison Operators
x = 5
y = 10
print(x == y) # Equal to: False
print(x != y) # Not equal to: True
print(x > y)  # Greater than: False
print(x < y)  # Less than: True
    `,
  },
  {
    id: "controlflow",
    title: "Control Flow: if/else Statements",
    explanation: "Conditional statements allow you to execute code blocks based on whether a condition is true or false.",
    codeExample: `
temperature = 25

if temperature > 30:
    print("It's a hot day!")
elif temperature > 20:
    print("It's a pleasant day.")
else:
    print("It's a bit cool.")
    `,
  },
  {
    id: "loops",
    title: "Loops: for and while",
    explanation: "Loops are used to execute a block of code repeatedly.",
    codeExample: `
# For loop (iterating over a sequence)
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# While loop (executes as long as a condition is true)
count = 0
while count < 5:
    print(f"Count is: {count}")
    count += 1 # Important: increment the counter!
    `,
  },
  {
    id: "functions",
    title: "Functions",
    explanation: "Functions are blocks of reusable code that perform a specific task. They help organize code and make it more modular.",
    codeExample: `
# Defining a function
def greet(name):
    return f"Hello, {name}!"

# Calling the function
message = greet("Bob")
print(message) # Output: Hello, Bob!

def add_numbers(x, y):
    return x + y

sum_result = add_numbers(5, 3)
print(sum_result) # Output: 8
    `,
  },
];

export default function ProgrammingPracticePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <div className="inline-flex items-center justify-center bg-primary/10 text-primary p-3 rounded-full mb-4">
          <Code2 className="h-10 w-10" />
        </div>
        <h1 className="font-headline text-4xl font-bold text-foreground">
          Programming Practice: Python Basics
        </h1>
        <p className="text-lg text-muted-foreground mt-2 font-body">
          Start your coding journey with these fundamental Python concepts.
        </p>
      </header>

      <Card className="shadow-xl mb-12">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-foreground">Core Python Concepts</CardTitle>
          <CardDescription className="font-body">
            Expand each section to learn about key Python features.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full space-y-3">
            {pythonTopics.map((topic) => (
              <AccordionItem key={topic.id} value={topic.id} className="border dark:border-slate-700 rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="p-4 hover:no-underline font-semibold text-left">
                  {topic.title}
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0 space-y-3">
                  <div className="text-muted-foreground font-body">{topic.explanation}</div>
                  {topic.codeExample && (
                    <div className="mt-4 p-3 bg-muted/50 dark:bg-slate-800/50 rounded-md overflow-x-auto">
                      <pre><code className="text-sm font-code text-foreground dark:text-slate-300">{topic.codeExample.trim()}</code></pre>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

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
```