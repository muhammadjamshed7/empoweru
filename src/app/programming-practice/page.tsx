
"use client";

import Link from "next/link";
import { ArrowLeft, Code2, Map, CheckSquare } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PythonQuizSection } from "@/components/programming-practice/PythonQuizSection";


interface PythonTopic {
  id: string;
  title: string;
  explanation: string | React.ReactNode;
  codeExample?: string;
}

const pythonTopics: PythonTopic[] = [
  {
    id: "intro",
    title: "What is Python & Why Learn It?",
    explanation: (
      <>
        <p className="mb-2 break-words">Python is a popular, high-level, and incredibly versatile programming language known for its readability and simplicity. It's often described as being close to plain English, making it an excellent choice for beginners and a powerful tool for experienced developers.</p>
        <p className="font-semibold mt-3 mb-1 break-words">Key Advantages of Python:</p>
        <ul className="list-disc list-inside space-y-1 mb-2 break-words">
          <li><strong>Easy to Learn & Read:</strong> Clean syntax focuses on code readability.</li>
          <li><strong>Vast Libraries & Frameworks:</strong> A rich standard library and extensive third-party packages (like NumPy, Pandas, Requests) simplify complex tasks.</li>
          <li><strong>Large Community Support:</strong> Abundant resources, tutorials, and a helpful global community.</li>
          <li><strong>Cross-Platform Compatibility:</strong> Python runs on Windows, macOS, Linux, and other systems.</li>
          <li><strong>Highly Scalable:</strong> Suitable for small scripts to large, complex applications.</li>
        </ul>
        <p className="font-semibold mt-3 mb-1 break-words">What Can You Do With Python?</p>
        <p className="mb-2 break-words">Python's versatility opens doors to numerous exciting career paths and applications:</p>
        <ul className="list-disc list-inside space-y-1 mb-2 break-words">
          <li>
            <strong>Data Science & Analytics:</strong> Analyze data, create visualizations, and extract meaningful insights. Libraries like <strong>Pandas</strong> for data manipulation, <strong>NumPy</strong> for numerical operations, and <strong>Matplotlib/Seaborn</strong> for plotting are industry standards.
          </li>
          <li>
            <strong>Full-Stack Web Development:</strong> Build dynamic websites and web applications. Python handles the backend (server-side logic, databases) and can integrate with frontend technologies.
            <p className="font-semibold mt-2 mb-1 pl-4 break-words">Key Frameworks:</p>
            <ul className="list-disc list-inside ml-6 space-y-0.5 mb-1 break-words">
                <li><strong>Django:</strong> A high-level framework for rapid development of secure and maintainable websites. Great for large, complex projects.</li>
                <li><strong>Flask:</strong> A lightweight microframework, flexible and easier to start with for smaller applications or APIs.</li>
            </ul>
            <p className="font-semibold mt-2 mb-1 pl-4 break-words">Basic Web Dev Roadmap with Python:</p>
            <ol className="list-decimal list-inside ml-6 space-y-0.5 break-words">
                <li>Understand HTML, CSS, and JavaScript (the basics of how websites look and interact in the browser).</li>
                <li>Master Python fundamentals (variables, control flow, functions, data structures).</li>
                <li>Choose a framework (Flask or Django) and learn its core concepts:
                    <ul className="list-disc list-inside ml-6 space-y-0.5">
                        <li>Routing (how URLs map to code).</li>
                        <li>Templates (how to display dynamic data in HTML).</li>
                        <li>Forms (how to handle user input).</li>
                        <li>Database interaction (how to store and retrieve data, e.g., using Django ORM or SQLAlchemy with Flask).</li>
                    </ul>
                </li>
                <li>Build small projects to practice.</li>
                <li>Learn about deployment (how to get your web app online).</li>
            </ol>
          </li>
          <li>
            <strong>Machine Learning & Artificial Intelligence (AI):</strong> Develop predictive models, natural language processing tools, computer vision systems, and more. Python is the go-to language for AI/ML with libraries like <strong>Scikit-learn</strong>, <strong>TensorFlow</strong>, and <strong>PyTorch</strong>.
          </li>
          <li><strong>Automation & Scripting:</strong> Automate repetitive tasks, manage systems, and write utility scripts to improve efficiency.</li>
          <li><strong>Scientific & Numeric Computing:</strong> Used extensively in research, engineering, and academia for complex calculations.</li>
          <li><strong>Game Development:</strong> Libraries like Pygame allow for the creation of 2D games.</li>
          <li><strong>Desktop GUIs:</strong> Build user-friendly desktop applications with toolkits like Tkinter or PyQt.</li>
        </ul>
        <p className="break-words">Learning Python provides a solid foundation for many tech careers and empowers you to build amazing things!</p>
      </>
    ),
  },
  {
    id: "variables",
    title: "Variables and Data Types",
    explanation: (
      <>
        <p className="mb-2 break-words">Think of variables as labeled boxes where you can store information (data). You give a variable a name, and then you can put different types of data into it. Python figures out the type of data automatically (this is called dynamic typing).</p>
        <p className="font-semibold mt-2 mb-1 break-words">Common Data Types:</p>
        <ul className="list-disc list-inside space-y-1 mb-2 break-words">
          <li><strong>String (str):</strong> Used for text. Always enclosed in quotes (e.g., <code>"Hello"</code> or <code>'Python'</code>). You can join strings together (concatenation) or get parts of a string (slicing).</li>
          <li><strong>Integer (int):</strong> Used for whole numbers (e.g., <code>10</code>, <code>-5</code>, <code>0</code>).</li>
          <li><strong>Float (float):</strong> Used for numbers with decimal points (e.g., <code>3.14</code>, <code>-0.5</code>).</li>
          <li><strong>Boolean (bool):</strong> Represents truth values. Can only be <code>True</code> or <code>False</code>. Super important for making decisions in your code!</li>
        </ul>
        <p className="break-words">There are other important data types like Lists and Dictionaries, which we'll cover in their own sections!</p>
      </>
    ),
    codeExample: `
# String (text)
message = "Hello, Python learners!"
print(message)

# Integer (whole number)
user_score = 100
print(user_score)

# Float (decimal number)
item_price = 24.99
print(item_price)

# Boolean (True or False)
is_active = True
can_edit = False
print(is_active)

# You can change the value in a variable
user_score = user_score + 10 # user_score is now 110
print(user_score)
    `,
  },
  {
    id: "operators",
    title: "Basic Operators",
    explanation: (
      <>
        <p className="mb-2 break-words">Operators are special symbols or keywords that perform operations on values (operands). Think of them as the verbs of programming.</p>
        <p className="font-semibold mt-2 mb-1 break-words">Arithmetic Operators:</p>
        <ul className="list-disc list-inside space-y-1 mb-2 break-words">
          <li><code>+</code> (Addition), <code>-</code> (Subtraction), <code>*</code> (Multiplication), <code>/</code> (Division - always results in a float)</li>
          <li><code>//</code> (Floor Division - division that rounds down to the nearest whole number)</li>
          <li><code>%</code> (Modulus - gives the remainder of a division)</li>
          <li><code>**</code> (Exponentiation - raises to the power of)</li>
        </ul>
        <p className="font-semibold mt-2 mb-1 break-words">Comparison Operators (result in a Boolean - True or False):</p>
        <ul className="list-disc list-inside space-y-1 mb-2 break-words">
          <li><code>==</code> (Equal to), <code>!=</code> (Not equal to)</li>
          <li><code>&gt;</code> (Greater than), <code>&lt;</code> (Less than)</li>
          <li><code>&gt;=</code> (Greater than or equal to), <code>&lt;=</code> (Less than or equal to)</li>
        </ul>
        <p className="font-semibold mt-2 mb-1 break-words">Logical Operators (combine Boolean values):</p>
        <ul className="list-disc list-inside space-y-1 mb-2 break-words">
          <li><code>and</code> (True if both operands are true)</li>
          <li><code>or</code> (True if at least one operand is true)</li>
          <li><code>not</code> (Reverses the boolean value)</li>
        </ul>
        <p className="font-semibold mt-2 mb-1 break-words">Assignment Operators (assign values to variables):</p>
        <ul className="list-disc list-inside space-y-1 break-words">
            <li><code>=</code> (Assign), <code>+=</code> (Add and assign), <code>-=</code> (Subtract and assign), etc.</li>
        </ul>
      </>
    ),
    codeExample: `
# Arithmetic Operators
a = 15
b = 4
print(a + b)  # Addition: 19
print(a / b)  # Division: 3.75
print(a // b) # Floor Division: 3
print(a % b)  # Modulus: 3
print(b ** 2) # Exponentiation: 16

# Comparison Operators
x = 7
y = 7
print(x == y) # Equal to: True
print(x > 5)  # Greater than: True

# Logical Operators
is_sunny = True
is_warm = False
print(is_sunny and is_warm) # False (both must be true)
print(is_sunny or is_warm)  # True (at least one is true)
print(not is_warm)          # True (reverses the boolean)

# Assignment Operators
count = 5
count += 2 # equivalent to count = count + 2
print(count) # Output: 7
    `,
  },
  {
    id: "controlflow",
    title: "Control Flow: if/elif/else Statements",
    explanation: (
       <>
        <p className="mb-2 break-words">Control flow statements allow your program to make decisions and execute different blocks of code based on certain conditions. The most common way to do this is with <code>if</code>, <code>elif</code> (short for "else if"), and <code>else</code> statements.</p>
        <ul className="list-disc list-inside space-y-1 mb-2 break-words">
          <li><strong><code>if</code>:</strong> The code block under <code>if</code> runs only if its condition is <code>True</code>.</li>
          <li><strong><code>elif</code>:</strong> If the preceding <code>if</code> (or <code>elif</code>) condition was <code>False</code>, Python checks the <code>elif</code> condition. You can have multiple <code>elif</code> blocks.</li>
          <li><strong><code>else</code>:</strong> If all preceding <code>if</code> and <code>elif</code> conditions were <code>False</code>, the code block under <code>else</code> runs. This is optional.</li>
        </ul>
        <p className="break-words">You can also nest <code>if</code> statements inside other <code>if</code> statements for more complex decision-making, but try to keep it readable!</p>
      </>
    ),
    codeExample: `
age = 18
has_ticket = True

if age >= 18:
    print("You are an adult.")
    if has_ticket:
        print("Welcome to the event!")
    else:
        print("You need a ticket to enter.")
elif age >= 13:
    print("You are a teenager.")
else:
    print("You are a child.")

# Example without nested if
grade = 85
if grade >= 90:
    print("Excellent! You got an A.")
elif grade >= 80:
    print("Great job! You got a B.")
elif grade >= 70:
    print("Good effort. You got a C.")
else:
    print("Keep working hard!")
    `,
  },
  {
    id: "loops",
    title: "Loops: for and while",
    explanation: (
      <>
        <p className="mb-2 break-words">Loops are used to execute a block of code repeatedly. This is super useful for automating tasks or working with collections of items.</p>
        <p className="font-semibold mt-2 mb-1 break-words"><code>for</code> Loops:</p>
        <p className="mb-2 break-words">Used for iterating over a sequence (like a list, a string, or a range of numbers). It runs once for each item in the sequence.</p>
        <p className="font-semibold mt-2 mb-1 break-words"><code>while</code> Loops:</p>
        <p className="mb-2 break-words">Executes a block of code as long as a specified condition is <code>True</code>. It's crucial that the condition eventually becomes <code>False</code>, otherwise, you'll create an infinite loop!</p>
        <p className="mb-2 break-words">You can use <code>break</code> to exit a loop early, and <code>continue</code> to skip the current iteration and move to the next.</p>
      </>
    ),
    codeExample: `
# For loop (iterating over a list)
colors = ["red", "green", "blue"]
for color in colors:
    print(f"I like the color {color}")

# For loop with range() to repeat a certain number of times
for i in range(5): # range(5) generates numbers from 0 to 4
    print(f"Number: {i}")

# While loop (executes as long as a condition is true)
current_number = 1
while current_number <= 5:
    print(f"Current number in while loop: {current_number}")
    current_number += 1 # Important: update the condition variable!

# Example with break
attempts = 0
while True: # This could be an infinite loop
    print("Attempting...")
    attempts += 1
    if attempts >= 3:
        print("Max attempts reached.")
        break # Exit the loop
    `,
  },
  {
    id: "datastructures_lists",
    title: "Data Structures: Lists",
    explanation: (
      <>
        <p className="mb-2 break-words">Lists are one of the most versatile and commonly used data structures in Python. They allow you to store an ordered collection of items. Think of them as a numbered list where you can add, remove, or change items.</p>
        <ul className="list-disc list-inside space-y-1 mb-2 break-words">
          <li><strong>Ordered:</strong> Items are stored in a specific sequence, and this order is maintained.</li>
          <li><strong>Mutable:</strong> You can change the items in a list after it's created (add, remove, or modify).</li>
          <li><strong>Heterogeneous:</strong> Lists can hold items of different data types (e.g., numbers, strings, even other lists!).</li>
          <li><strong>Indexing:</strong> Access items by their position (index), starting from 0 for the first item. Negative indexing starts from the end (-1 for the last item).</li>
          <li><strong>Slicing:</strong> Extract a portion (a sub-list) from a list.</li>
        </ul>
        <p className="font-semibold mt-2 mb-1 break-words">Common List Methods:</p>
        <ul className="list-disc list-inside space-y-1 break-words">
          <li><code>append(item)</code>: Adds an item to the end of the list.</li>
          <li><code>insert(index, item)</code>: Inserts an item at a specific position.</li>
          <li><code>remove(item)</code>: Removes the first occurrence of an item.</li>
          <li><code>pop(index)</code>: Removes and returns the item at a specific index (or the last item if index is not provided).</li>
          <li><code>len(list)</code>: Returns the number of items in the list (this is a built-in function, not a method).</li>
        </ul>
      </>
    ),
    codeExample: `
# Creating a list
my_friends = ["Alice", "Bob", "Charlie"]
empty_list = []
mixed_list = [1, "apple", True, 3.14]

# Accessing items by index
print(my_friends[0])   # Output: Alice
print(my_friends[-1])  # Output: Charlie (last item)

# Slicing a list
print(my_friends[0:2]) # Output: ['Alice', 'Bob'] (items from index 0 up to, but not including, index 2)

# Modifying a list
my_friends[1] = "Barbara" # Change "Bob" to "Barbara"
print(my_friends)       # Output: ['Alice', 'Barbara', 'Charlie']

# Adding items
my_friends.append("David")
my_friends.insert(1, "Zoe") # Insert "Zoe" at index 1
print(my_friends)         # Output: ['Alice', 'Zoe', 'Barbara', 'Charlie', 'David']

# Removing items
my_friends.remove("Charlie")
popped_friend = my_friends.pop() # Removes and returns "David"
print(popped_friend)         # Output: David
print(my_friends)            # Output: ['Alice', 'Zoe', 'Barbara']

# Length of a list
print(len(my_friends)) # Output: 3

# Looping through a list
for friend in my_friends:
    print(f"Hello, {friend}!")
    `,
  },
  {
    id: "datastructures_dictionaries",
    title: "Data Structures: Dictionaries",
    explanation: (
      <>
        <p className="mb-2 break-words">Dictionaries are another incredibly useful data structure in Python. They store collections of items as key-value pairs. Think of them like a real-world dictionary where each word (key) has a definition (value).</p>
        <ul className="list-disc list-inside space-y-1 mb-2 break-words">
          <li><strong>Key-Value Pairs:</strong> Each item consists of a unique key and its associated value.</li>
          <li><strong>Unordered (Historically):</strong> In Python versions before 3.7, dictionaries were unordered. From Python 3.7+, they maintain insertion order.</li>
          <li><strong>Mutable:</strong> You can add, remove, or change key-value pairs after the dictionary is created.</li>
          <li><strong>Keys must be unique and immutable:</strong> Common key types are strings and numbers. Values can be of any data type and can be duplicated.</li>
        </ul>
        <p className="font-semibold mt-2 mb-1 break-words">Common Dictionary Methods & Operations:</p>
        <ul className="list-disc list-inside space-y-1 break-words">
          <li>Accessing value: <code>my_dict[key]</code> (raises an error if key not found) or <code>my_dict.get(key, default_value)</code> (returns <code>None</code> or a default value if key not found).</li>
          <li>Adding/Updating: <code>my_dict[new_key] = new_value</code>.</li>
          <li>Removing: <code>del my_dict[key]</code> or <code>my_dict.pop(key)</code>.</li>
          <li><code>keys()</code>: Returns a view of all keys.</li>
          <li><code>values()</code>: Returns a view of all values.</li>
          <li><code>items()</code>: Returns a view of all key-value pairs (as tuples).</li>
          <li><code>len(dict)</code>: Returns the number of key-value pairs.</li>
        </ul>
      </>
    ),
    codeExample: `
# Creating a dictionary
student_scores = {"Alice": 85, "Bob": 92, "Charlie": 78}
empty_dict = {}

# Accessing values
print(student_scores["Alice"])     # Output: 85
print(student_scores.get("David")) # Output: None (David is not in the dictionary)
print(student_scores.get("David", "Not found")) # Output: Not found

# Adding or updating items
student_scores["David"] = 95   # Add new entry
student_scores["Alice"] = 88   # Update Alice's score
print(student_scores)        # Output: {'Alice': 88, 'Bob': 92, 'Charlie': 78, 'David': 95}

# Removing items
del student_scores["Charlie"]
popped_score = student_scores.pop("Bob") # Removes Bob and returns his score
print(popped_score)         # Output: 92
print(student_scores)       # Output: {'Alice': 88, 'David': 95}

# Getting keys, values, items
print(list(student_scores.keys()))   # Output: ['Alice', 'David'] (converted to list for printing)
print(list(student_scores.values())) # Output: [88, 95]
print(list(student_scores.items()))  # Output: [('Alice', 88), ('David', 95)]

# Looping through a dictionary
for student, score in student_scores.items():
    print(f"{student} scored {score}")

# Checking if a key exists
if "Alice" in student_scores:
    print("Alice's score is available.")
    `,
  },
  {
    id: "functions",
    title: "Functions",
    explanation: (
      <>
        <p className="mb-2 break-words">Functions are blocks of reusable code that perform a specific task. They are fundamental to writing well-organized, efficient, and readable programs. Instead of writing the same code multiple times, you define it once in a function and then "call" (execute) that function whenever you need it.</p>
        <ul className="list-disc list-inside space-y-1 mb-2 break-words">
          <li><strong>Defining a Function:</strong> Use the <code>def</code> keyword, followed by the function name, parentheses <code>()</code>, and a colon <code>:</code>. The code block inside the function is indented.</li>
          <li><strong>Parameters and Arguments:</strong>
            <ul className="list-disc list-inside ml-4">
                <li><strong>Parameters</strong> are variables listed inside the parentheses in the function definition. They are like placeholders for the data the function expects to receive.</li>
                <li><strong>Arguments</strong> are the actual values you pass to the function when you call it.</li>
            </ul>
          </li>
          <li><strong>Return Values:</strong> Functions can optionally send a value back to the part of the code that called them using the <code>return</code> statement. If no <code>return</code> statement is used, or if <code>return</code> is used without a value, the function returns <code>None</code>.</li>
          <li><strong>Default Parameter Values:</strong> You can provide default values for parameters, making them optional when calling the function.</li>
          <li><strong>Docstrings:</strong> It's good practice to include a documentation string (docstring) as the first line inside a function (enclosed in triple quotes <code>"""Docstring goes here"""</code>). It explains what the function does.</li>
        </ul>
      </>
    ),
    codeExample: `
# Defining a simple function
def greet_user():
    """Prints a simple greeting."""
    print("Hello, welcome to Python functions!")

# Calling the function
greet_user() # Output: Hello, welcome to Python functions!

# Function with a parameter
def greet_by_name(name):
    """Greets a person by their name."""
    print(f"Hello, {name}!")

greet_by_name("Alice") # Output: Hello, Alice!
greet_by_name("Bob")   # Output: Hello, Bob!

# Function with multiple parameters and a return value
def add_numbers(x, y):
    """Adds two numbers and returns the sum."""
    sum_result = x + y
    return sum_result

result = add_numbers(5, 3)
print(f"The sum is: {result}") # Output: The sum is: 8
print(add_numbers(10, 20))    # Output: 30

# Function with a default parameter value
def describe_pet(animal_type, pet_name="Buddy"):
    """Displays information about a pet."""
    print(f"I have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name}.")

describe_pet("dog") # Uses default pet_name
# Output:
# I have a dog.
# My dog's name is Buddy.

describe_pet("cat", "Whiskers")
# Output:
# I have a cat.
# My cat's name is Whiskers.
    `,
  },
  {
    id: "error_handling",
    title: "Error Handling: try-except",
    explanation: (
      <>
        <p className="mb-2 break-words">Even with careful coding, programs can encounter errors during runtime (when the program is running). These errors, also called exceptions, can cause your program to crash if not handled properly. Python provides a way to anticipate and manage these errors using <code>try</code> and <code>except</code> blocks.</p>
        <ul className="list-disc list-inside space-y-1 mb-2 break-words">
          <li><strong><code>try</code> block:</strong> You place the code that might potentially cause an error inside the <code>try</code> block.</li>
          <li><strong><code>except</code> block:</strong> If an error occurs in the <code>try</code> block, Python looks for a matching <code>except</code> block. If found, the code in the <code>except</code> block is executed, and the program doesn't crash. You can specify the type of exception to catch (e.g., <code>except ValueError:</code>). A generic <code>except:</code> will catch any exception (but it's often better to be specific).</li>
          <li><strong><code>else</code> block (optional):</strong> The code in the <code>else</code> block executes if the <code>try</code> block completed successfully (no errors occurred).</li>
          <li><strong><code>finally</code> block (optional):</strong> The code in the <code>finally</code> block executes regardless of whether an error occurred or not. This is useful for cleanup operations, like closing a file.</li>
        </ul>
        <p className="break-words">Error handling makes your programs more robust and user-friendly.</p>
      </>
    ),
    codeExample: `
# Example 1: Handling division by zero
try:
    numerator = 10
    denominator = 0
    result = numerator / denominator
    print(f"Result is: {result}")
except ZeroDivisionError:
    print("Oops! You can't divide by zero.")
except TypeError:
    print("Oops! Make sure you are using numbers for division.")

# Example 2: Handling input conversion error
try:
    user_input = input("Enter a number: ")
    number = int(user_input) # This might cause a ValueError if input is not a number
    print(f"You entered the number: {number}")
except ValueError:
    print("Invalid input. Please enter a whole number.")
else:
    print("Input converted successfully!") # Runs if no ValueError occurred
finally:
    print("Exiting the input process.") # Runs no matter what

# Example 3: Generic exception (less preferred but can be useful)
try:
    # some_risky_operation()
    value = 10 / 0 
except Exception as e: # 'e' will hold information about the error
    print(f"An unexpected error occurred: {e}")
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
        <p className="text-lg text-muted-foreground mt-2 font-body break-words">
          Start your coding journey with these fundamental Python concepts and discover its power.
        </p>
      </header>

      <Card className="shadow-xl mb-12 bg-card">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-foreground flex items-center">
            <Map className="mr-3 h-7 w-7 text-accent" /> {/* Roadmap Icon */}
            Your Python Learning Roadmap
          </CardTitle>
          <CardDescription className="font-body break-words">
            Follow these steps to build a solid foundation in Python. This roadmap can lead you to exciting opportunities in various tech fields!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-4 text-muted-foreground font-body">
            <li>
              <strong>Master the Fundamentals:</strong>
              <p className="pl-4 break-words">Understand "What is Python?", variables, data types (numbers, strings, booleans), and basic operators. This is your building block!</p>
            </li>
            <li>
              <strong>Control the Flow:</strong>
              <p className="pl-4 break-words">Learn how to make decisions in your code with <code>if/elif/else</code> statements and repeat tasks efficiently using <code>for</code> and <code>while</code> loops.</p>
            </li>
            <li>
              <strong>Organize with Functions:</strong>
              <p className="pl-4 break-words">Write reusable blocks of code called functions to make your programs cleaner, more modular, and easier to understand.</p>
            </li>
            <li>
              <strong>Work with Collections - Lists & Dictionaries:</strong>
              <p className="pl-4 break-words">Explore Python's powerful data structures like Lists (ordered collections) and Dictionaries (key-value pairs) to store, manage, and manipulate groups of data effectively.</p>
            </li>
            <li>
              <strong>Handle Errors Gracefully:</strong>
              <p className="pl-4 break-words">Learn about <code>try-except</code> blocks to anticipate and manage potential runtime errors in your programs, making them more robust and user-friendly.</p>
            </li>
            <li>
              <strong>Practice Consistently:</strong>
              <p className="pl-4 break-words">The key to mastering programming is consistent practice! Build small projects, solve coding challenges, and don't be afraid to experiment.</p>
            </li>
            <li>
              <strong>Next Steps - Explore Further:</strong>
              <p className="pl-4 break-words">Once comfortable, dive into Object-Oriented Programming (OOP), explore Python's rich standard library, and discover third-party libraries for specific domains like web development (e.g., Django, Flask for full-stack), data science (e.g., NumPy, Pandas), or machine learning (e.g., Scikit-learn, TensorFlow).</p>
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card className="shadow-xl mb-12 bg-card">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-foreground">Core Python Concepts</CardTitle>
          <CardDescription className="font-body break-words">
            Expand each section to learn about key Python features with explanations and examples.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full space-y-3">
            {pythonTopics.map((topic) => (
              <AccordionItem key={topic.id} value={topic.id} className="border dark:border-slate-700 rounded-lg shadow-sm bg-background dark:bg-slate-800/30">
                <AccordionTrigger className="p-4 hover:no-underline font-semibold text-left text-foreground">
                  {topic.title}
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0 space-y-3">
                  <div className="text-muted-foreground font-body prose prose-sm max-w-none dark:prose-invert prose-p:break-words prose-li:break-words prose-strong:text-foreground/90 dark:prose-strong:text-slate-300 prose-code:bg-muted/80 prose-code:dark:bg-slate-700/80 prose-code:p-0.5 prose-code:rounded-sm prose-code:font-code prose-code:text-foreground dark:prose-code:text-slate-300">{topic.explanation}</div>
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

      <Card className="shadow-xl mb-12 bg-card">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-foreground flex items-center">
             <CheckSquare className="mr-3 h-7 w-7 text-accent" />
            Test Your Python Knowledge!
          </CardTitle>
          <CardDescription className="font-body break-words">
            Select a difficulty and see how much you've learned.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PythonQuizSection />
        </CardContent>
      </Card>


      <div className="text-center mt-10">
        <Button asChild variant="outline" size="lg">
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
