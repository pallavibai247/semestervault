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
      title: "Program 1 - Hello World",
      code: `class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
    },
    {
      title: "Program 2 - Addition of Two Numbers",
      code: `class Addition {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int sum = a + b;

        System.out.println("Sum = " + sum);
    }
}`,
    },
    {
      title: "Program 3 - Even or Odd",
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
      title: "Program 4 - Factorial",
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
      title: "Program 5 - Prime Number",
      code: `class Prime {
    public static void main(String[] args) {
        int n = 17;
        boolean prime = true;

        if (n < 2)
            prime = false;

        for (int i = 2; i <= n / 2; i++) {
            if (n % i == 0) {
                prime = false;
                break;
            }
        }

        if (prime)
            System.out.println("Prime Number");
        else
            System.out.println("Not a Prime Number");
    }
}`,
    },
    {
      title: "Program 6 - Reverse a Number",
      code: `class ReverseNumber {
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
      title: "Program 7 - Palindrome Number",
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
      title: "Program 8 - Fibonacci Series",
      code: `class Fibonacci {
    public static void main(String[] args) {
        int n = 10;
        int a = 0;
        int b = 1;

        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");

            int c = a + b;
            a = b;
            b = c;
        }
    }
}`,
    },
    {
      title: "Program 9 - Largest of Three Numbers",
      code: `class Largest {
    public static void main(String[] args) {
        int a = 10;
        int b = 25;
        int c = 15;

        if (a >= b && a >= c)
            System.out.println("Largest = " + a);
        else if (b >= a && b >= c)
            System.out.println("Largest = " + b);
        else
            System.out.println("Largest = " + c);
    }
}`,
    },
    {
      title: "Program 10 - Multiplication Table",
      code: `class MultiplicationTable {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + (n * i));
        }
    }
}`,
    },
  ];

  const shellPrograms = [
    {
      title: "Program 1 - Five Internal Commands",
      code: `pwd
Prints the present working directory.

$ pwd
/home/student

cd
Changes the current working directory.

$ cd /tmp
$ pwd
/tmp

echo
Displays text or variable values.

$ echo "Hello, Shell Lab!"
Hello, Shell Lab!

read
Accepts input from the keyboard and stores it in a variable.

$ read name
OpenAI

$ echo "Welcome, $name"
Welcome, OpenAI

export
Creates an environment variable that can be inherited by child processes.

$ export COLLEGE="ABC College"
$ echo "$COLLEGE"
ABC College`,
    },
    {
      title: "Program 2 - Five External Commands",
      code: `ls
Lists files and directories.

$ ls -l

cat
Displays file contents.

$ cat file.txt

grep
Searches for lines matching a pattern.

$ grep "hello" file.txt

sort
Sorts lines of text.

$ sort names.txt

date
Displays the current date and time.

$ date`,
    },
    {
      title: "Program 3 - Simple Interest",
      code: `#!/bin/bash

read -p "Enter principal: " p
read -p "Enter rate (%): " r
read -p "Enter time (years): " t

si=$(awk -v p="$p" -v r="$r" -v t="$t" 'BEGIN{printf "%.2f", p*r*t/100}')

echo "Simple Interest = $si"`,
    },
    {
      title: "Program 4 - Prime Numbers Between m and n",
      code: `#!/bin/bash

read -p "Enter m: " m
read -p "Enter n (m<n): " n

echo "Prime numbers:"

for ((x=m; x<=n; x++)); do
    if (( x < 2 )); then
        continue
    fi

    prime=1

    for ((d=2; d*d<=x; d++)); do
        if (( x%d==0 )); then
            prime=0
            break
        fi
    done

    ((prime)) && printf "%d " "$x"
done

echo`,
    },
    {
      title: "Program 5 - Reverse Number and Palindrome",
      code: `#!/bin/bash

read -p "Enter a number: " n

orig=$n
rev=0

while (( n > 0 )); do
    digit=$((n%10))
    rev=$((rev*10+digit))
    n=$((n/10))
done

echo "Reverse = $rev"

if (( orig == rev )); then
    echo "Palindrome"
else
    echo "Not Palindrome"
fi`,
    },
    {
      title: "Program 6 - Maximum and Minimum",
      code: `#!/bin/bash

read -p "Enter numbers separated by spaces: " -a a

max=\${a[0]}
min=\${a[0]}

for x in "\${a[@]}"; do
    ((x>max)) && max=$x
    ((x<min)) && min=$x
done

echo "Maximum = $max"
echo "Minimum = $min"`,
    },
    {
      title: "Program 7 - GCD and LCM",
      code: `#!/bin/bash

read -p "Enter two integers: " a b

x=$a
y=$b

while (( y != 0 )); do
    r=$((x%y))
    x=$y
    y=$r
done

gcd=$x
lcm=$((a*b/gcd))

echo "GCD = $gcd"
echo "LCM = $lcm"`,
    },
    {
      title: "Program 8 - Count Lines, Words and Characters",
      code: `#!/bin/bash

lines=0
words=0
chars=0

while IFS= read -r line || [[ -n "$line" ]]; do
    ((lines++))

    chars=$((chars + \${#line} + 1))

    read -ra arr <<< "$line"

    words=$((words + \${#arr[@]}))
done

echo "Lines = $lines"
echo "Words = $words"
echo "Characters = $chars"`,
    },
    {
      title: "Program 9 - List All Files in Directory",
      code: `#!/bin/bash

read -p "Enter directory: " dir

if [[ -d "$dir" ]]; then
    for f in "$dir"/*; do
        [[ -f "$f" ]] && echo "$(basename "$f")"
    done
else
    echo "Directory not found"
fi`,
    },
    {
      title: "Program 10 - Files with Read, Write and Execute Permissions",
      code: `#!/bin/bash

read -p "Enter directory: " dir

if [[ -d "$dir" ]]; then
    for f in "$dir"/*; do
        [[ -f "$f" && -r "$f" && -w "$f" && -x "$f" ]] && echo "$(basename "$f")"
    done
else
    echo "Directory not found"
fi`,
    },
    {
      title: "Program 11 - Leap Year",
      code: `#!/bin/bash

read -p "Enter year: " y

if (( y%400==0 || (y%4==0 && y%100!=0) )); then
    echo "$y is a Leap Year"
else
    echo "$y is not a Leap Year"
fi`,
    },
    {
      title: "Program 12 - Basic Calculator",
      code: `#!/bin/bash

read -p "Enter first number: " a
read -p "Enter operator (+ - * /): " op
read -p "Enter second number: " b

case "$op" in
    +)
        echo "Result = $((a+b))"
        ;;
    -)
        echo "Result = $((a-b))"
        ;;
    \\*)
        echo "Result = $((a*b))"
        ;;
    /)
        ((b!=0)) && awk -v a="$a" -v b="$b" 'BEGIN{printf "Result = %.2f\\n", a/b}' || echo "Division by zero not allowed"
        ;;
    *)
        echo "Invalid operator"
        ;;
esac`,
    },
    {
      title: "Program 13 - Count Positive, Negative and Zero",
      code: `#!/bin/bash

read -p "Enter numbers separated by spaces: " -a a

p=0
n=0
z=0

for x in "\${a[@]}"; do
    if ((x>0)); then
        ((p++))
    elif ((x<0)); then
        ((n++))
    else
        ((z++))
    fi
done

echo "Positive = $p"
echo "Negative = $n"
echo "Zero = $z"`,
    },
    {
      title: "Program 14 - Valid Triangle",
      code: `#!/bin/bash

read -p "Enter three angles: " a b c

if ((a>0 && b>0 && c>0 && a+b+c==180)); then
    echo "Valid Triangle"
else
    echo "Invalid Triangle"
fi`,
    },
    {
      title: "Program 15 - Factorial",
      code: `#!/bin/bash

read -p "Enter a non-negative integer: " n

fact=1

for ((i=2; i<=n; i++)); do
    fact=$((fact*i))
done

echo "Factorial = $fact"`,
    },
    {
      title: "Program 16 - Multiplication Table",
      code: `#!/bin/bash

read -p "Enter number: " n

for ((i=1; i<=10; i++)); do
    echo "$n x $i = $((n*i))"
done`,
    },
    {
      title: "Program 17 - Number of Digits and Sum of Digits",
      code: `#!/bin/bash

read -p "Enter an integer: " n

n=\${n#-}

if (( n==0 )); then
    count=1
    sum=0
else
    count=0
    sum=0

    while ((n>0)); do
        sum=$((sum+n%10))
        count=$((count+1))
        n=$((n/10))
    done
fi

echo "Number of digits = $count"
echo "Sum of digits = $sum"`,
    },
    {
      title: "Program 18 - Fibonacci Series",
      code: `#!/bin/bash

read -p "Enter n: " n

a=0
b=1

printf "Fibonacci: "

for ((i=0; i<n; i++)); do
    printf "%d " "$a"

    fn=$((a+b))
    a=$b
    b=$fn
done

echo`,
    },
    {
      title: "Program 19 - Reverse a String",
      code: `#!/bin/bash

read -r -p "Enter a string: " s

rev=""

for ((i=\${#s}-1; i>=0; i--)); do
    rev+="\${s:i:1}"
done

echo "Reverse = $rev"`,
    },
    {
      title: "Program 20 - String Palindrome",
      code: `#!/bin/bash

read -r -p "Enter a string: " s

rev=""

for ((i=\${#s}-1; i>=0; i--)); do
    rev+="\${s:i:1}"
done

if [[ "$s" == "$rev" ]]; then
    echo "Palindrome"
else
    echo "Not Palindrome"
fi`,
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

  const copyCode = () => {
    navigator.clipboard.writeText(note);
    alert("Code copied!");
  };

  return (
    <div className="app">
      <h1>📚 Semester Vault</h1>

      {!semester && (
        <div className="card">
          <h2>Select Semester</h2>

          {Object.keys(semesters).map((sem) => (
            <button
              key={sem}
              onClick={() => {
                setSemester(sem);
                setSubject("");
              }}
            >
              {sem}
            </button>
          ))}
        </div>
      )}

      {semester && !subject && (
        <div className="card">
          <button
            className="back-button"
            onClick={() => setSemester("")}
          >
            ← Back
          </button>

          <h2>{semester}</h2>

          {semesters[semester].map((sub) => (
            <button
              key={sub}
              onClick={() => setSubject(sub)}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {semester === "3rd Semester" &&
        subject === "Java Lab" &&
        !showCode && (
          <div className="card">
            <button
              className="back-button"
              onClick={() => setSubject("")}
            >
              ← Back
            </button>

            <h2>☕ Java Lab Programs</h2>

            {javaPrograms.map((program) => (
              <button
                key={program.title}
                onClick={() => openProgram(program)}
              >
                {program.title}
              </button>
            ))}
          </div>
        )}

      {semester === "3rd Semester" &&
        subject === "Shell Lab" &&
        !showCode && (
          <div className="card">
            <button
              className="back-button"
              onClick={() => setSubject("")}
            >
              ← Back
            </button>

            <h2>💻 Shell Lab Programs</h2>

            {shellPrograms.map((program) => (
              <button
                key={program.title}
                onClick={() => openProgram(program)}
              >
                {program.title}
              </button>
            ))}
          </div>
        )}

      {showCode && (
        <div className="card code-card">
          <button className="back-button" onClick={goBack}>
            ← Back to Programs
          </button>

          <button className="copy-button" onClick={copyCode}>
            📋 Copy Code
          </button>

          <pre className="code-box">
            <code>{note}</code>
          </pre>
        </div>
      )}

      {semester &&
        subject &&
        subject !== "Java Lab" &&
        subject !== "Shell Lab" &&
        !showCode && (
          <div className="card">
            <button
              className="back-button"
              onClick={() => setSubject("")}
            >
              ← Back
            </button>

            <h2>{subject}</h2>

            <p>📚 Notes for {subject} will be added here.</p>
          </div>
        )}
    </div>
  );
}

export default App;
