import { useState } from "react";
import "./App.css";

function App() {
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [note, setNote] = useState("");
  const [showCode, setShowCode] = useState(false);

  const semesters = {
    "3rd Semester": [
      "Java",
      "CC",
      "DAA",
      "DBMS",
      "Java Lab",
      "DBMS Lab",
      "Shell Lab",
    ],
    "4th Semester": [
      "Subject 1",
      "Subject 2",
      "Subject 3",
      "Subject 4",
    ],
    "5th Semester": [
      "Subject 1",
      "Subject 2",
      "Subject 3",
      "Subject 4",
    ],
    "6th Semester": [
      "Subject 1",
      "Subject 2",
      "Subject 3",
      "Subject 4",
    ],
  };

  const javaPrograms = [
    {
      number: 1,
      title: "Hello World",
      code: `class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
    },
    {
      number: 2,
      title: "Add Two Numbers",
      code: `class Add {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int sum = a + b;

        System.out.println("Sum = " + sum);
    }
}`,
    },
    {
      number: 3,
      title: "Check Even or Odd",
      code: `class EvenOdd {
    public static void main(String[] args) {
        int n = 10;

        if (n % 2 == 0)
            System.out.println("Even");
        else
            System.out.println("Odd");
    }
}`,
    },
    {
      number: 4,
      title: "Find Largest Number",
      code: `class Largest {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int c = 15;

        if (a > b && a > c)
            System.out.println(a + " is largest");
        else if (b > c)
            System.out.println(b + " is largest");
        else
            System.out.println(c + " is largest");
    }
}`,
    },
    {
      number: 5,
      title: "Factorial",
      code: `class Factorial {
    public static void main(String[] args) {
        int n = 5;
        int fact = 1;

        for (int i = 1; i <= n; i++) {
            fact = fact * i;
        }

        System.out.println("Factorial = " + fact);
    }
}`,
    },
    {
      number: 6,
      title: "Prime Number",
      code: `class Prime {
    public static void main(String[] args) {
        int n = 7;
        boolean prime = true;

        for (int i = 2; i < n; i++) {
            if (n % i == 0) {
                prime = false;
                break;
            }
        }

        if (prime)
            System.out.println("Prime");
        else
            System.out.println("Not Prime");
    }
}`,
    },
    {
      number: 7,
      title: "Reverse Number",
      code: `class Reverse {
    public static void main(String[] args) {
        int n = 1234;
        int rev = 0;

        while (n != 0) {
            int digit = n % 10;
            rev = rev * 10 + digit;
            n = n / 10;
        }

        System.out.println("Reverse = " + rev);
    }
}`,
    },
    {
      number: 8,
      title: "Palindrome Number",
      code: `class Palindrome {
    public static void main(String[] args) {
        int n = 121;
        int original = n;
        int rev = 0;

        while (n != 0) {
            int digit = n % 10;
            rev = rev * 10 + digit;
            n = n / 10;
        }

        if (original == rev)
            System.out.println("Palindrome");
        else
            System.out.println("Not Palindrome");
    }
}`,
    },
    {
      number: 9,
      title: "Fibonacci Series",
      code: `class Fibonacci {
    public static void main(String[] args) {
        int n = 10;
        int a = 0;
        int b = 1;

        for (int i = 1; i <= n; i++) {
            System.out.print(a + " ");

            int c = a + b;
            a = b;
            b = c;
        }
    }
}`,
    },
    {
      number: 10,
      title: "Array Elements",
      code: `class ArrayExample {
    public static void main(String[] args) {
        int[] a = {10, 20, 30, 40, 50};

        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }
}`,
    },
  ];

  const shellPrograms = [
    {
      number: 1,
      title: "Hello World",
      code: `#!/bin/bash

echo "Hello World"
echo "This is Shell Programming"`,
    },
    {
      number: 2,
      title: "Display Date",
      code: `#!/bin/bash

date`,
    },
    {
      number: 3,
      title: "Display Calendar",
      code: `#!/bin/bash

cal`,
    },
    {
      number: 4,
      title: "Add Two Numbers",
      code: `#!/bin/bash

a=10
b=20

sum=$((a+b))

echo "Sum = $sum"`,
    },
    {
      number: 5,
      title: "Check Even or Odd",
      code: `#!/bin/bash

echo "Enter a number:"
read n

if [ $((n%2)) -eq 0 ]
then
    echo "Even number"
else
    echo "Odd number"
fi`,
    },
    {
      number: 6,
      title: "Find Largest Number",
      code: `#!/bin/bash

echo "Enter first number:"
read a

echo "Enter second number:"
read b

if [ $a -gt $b ]
then
    echo "$a is largest"
else
    echo "$b is largest"
fi`,
    },
    {
      number: 7,
      title: "Factorial",
      code: `#!/bin/bash

echo "Enter a number:"
read n

fact=1

for ((i=1; i<=n; i++))
do
    fact=$((fact*i))
done

echo "Factorial = $fact"`,
    },
    {
      number: 8,
      title: "Multiplication Table",
      code: `#!/bin/bash

echo "Enter a number:"
read n

for ((i=1; i<=10; i++))
do
    echo "$n x $i = $((n*i))"
done`,
    },
    {
      number: 9,
      title: "Reverse Number",
      code: `#!/bin/bash

echo "Enter a number:"
read n

rev=0

while [ $n -gt 0 ]
do
    digit=$((n%10))
    rev=$((rev*10+digit))
    n=$((n/10))
done

echo "Reverse = $rev"`,
    },
    {
      number: 10,
      title: "Check Palindrome",
      code: `#!/bin/bash

echo "Enter a number:"
read n

original=$n
rev=0

while [ $n -gt 0 ]
do
    digit=$((n%10))
    rev=$((rev*10+digit))
    n=$((n/10))
done

if [ $original -eq $rev ]
then
    echo "Palindrome"
else
    echo "Not Palindrome"
fi`,
    },
    {
      number: 11,
      title: "Count 1 to 10",
      code: `#!/bin/bash

for ((i=1; i<=10; i++))
do
    echo $i
done`,
    },
    {
      number: 12,
      title: "Sum of Natural Numbers",
      code: `#!/bin/bash

echo "Enter n:"
read n

sum=0

for ((i=1; i<=n; i++))
do
    sum=$((sum+i))
done

echo "Sum = $sum"`,
    },
    {
      number: 13,
      title: "Check Positive or Negative",
      code: `#!/bin/bash

echo "Enter a number:"
read n

if [ $n -gt 0 ]
then
    echo "Positive"
elif [ $n -lt 0 ]
then
    echo "Negative"
else
    echo "Zero"
fi`,
    },
    {
      number: 14,
      title: "Check Prime Number",
      code: `#!/bin/bash

echo "Enter a number:"
read n

count=0

for ((i=1; i<=n; i++))
do
    if [ $((n%i)) -eq 0 ]
    then
        count=$((count+1))
    fi
done

if [ $count -eq 2 ]
then
    echo "Prime number"
else
    echo "Not a prime number"
fi`,
    },
    {
      number: 15,
      title: "Fibonacci Series",
      code: `#!/bin/bash

echo "Enter number of terms:"
read n

a=0
b=1

for ((i=1; i<=n; i++))
do
    echo -n "$a "
    c=$((a+b))
    a=$b
    b=$c
done`,
    },
    {
      number: 16,
      title: "Display User Name",
      code: `#!/bin/bash

echo "Current user is:"
whoami`,
    },
    {
      number: 17,
      title: "Display Working Directory",
      code: `#!/bin/bash

pwd`,
    },
    {
      number: 18,
      title: "List Files",
      code: `#!/bin/bash

ls`,
    },
    {
      number: 19,
      title: "Create Directory",
      code: `#!/bin/bash

echo "Enter directory name:"
read name

mkdir "$name"

echo "Directory created"`,
    },
    {
      number: 20,
      title: "Delete File",
      code: `#!/bin/bash

echo "Enter file name:"
read name

rm "$name"

echo "File deleted"`,
    },
  ];

  const openProgram = (program) => {
    setNote(program.code);
    setShowCode(true);
  };

  const goBack = () => {
    setShowCode(false);
    setNote("");
  };

  return (
    <div className="app">
      <header>
        <h1>📚 My Notes</h1>
        <p>Semester Notes & Lab Programs</p>
      </header>

      {!semester && (
        <div className="container">
          <h2>Select Semester</h2>

          <div className="button-grid">
            {Object.keys(semesters).map((sem) => (
              <button
                key={sem}
                onClick={() => setSemester(sem)}
              >
                📖 {sem}
              </button>
            ))}
          </div>
        </div>
      )}

      {semester && !subject && (
        <div className="container">
          <button
            className="back-button"
            onClick={() => setSemester("")}
          >
            ← Back
          </button>

          <h2>{semester}</h2>

          <div className="button-grid">
            {semesters[semester].map((sub) => (
              <button
                key={sub}
                onClick={() => setSubject(sub)}
              >
                📚 {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {semester && subject && !showCode && (
        <div className="container">
          <button
            className="back-button"
            onClick={() => setSubject("")}
          >
            ← Back
          </button>

          <h2>{subject}</h2>

          {subject === "Java Lab" && (
            <div>
              <h3>☕ Java Lab Programs</h3>

              <div className="program-list">
                {javaPrograms.map((program) => (
                  <button
                    key={program.number}
                    onClick={() => openProgram(program)}
                  >
                    Program {program.number} - {program.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {subject === "Shell Lab" && (
            <div>
              <h3>💻 Shell Lab Programs</h3>

              <div className="program-list">
                {shellPrograms.map((program) => (
                  <button
                    key={program.number}
                    onClick={() => openProgram(program)}
                  >
                    Program {program.number} - {program.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {subject !== "Java Lab" &&
            subject !== "Shell Lab" && (
              <div className="note-box">
                <h3>📝 {subject} Notes</h3>
                <p>Notes will be added here.</p>
              </div>
            )}
        </div>
      )}

      {showCode && (
        <div className="container">
          <button
            className="back-button"
            onClick={goBack}
          >
            ← Back to Programs
          </button>

          <h2>💻 Program Code</h2>

          <pre className="code-box">
            <code>{note}</code>
          </pre>

          <button
            className="copy-button"
            onClick={() => navigator.clipboard.writeText(note)}
          >
            📋 Copy Code
          </button>
        </div>
      )}

      <footer>
        <p>© 2026 My Notes</p>
      </footer>
    </div>
  );
}

export default App;
