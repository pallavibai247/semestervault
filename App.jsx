import { useState } from "react";
import "./App.css";

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const javaLabPrograms = [
    {
      title: "Program 1: Factorial of a list of numbers using command-line arguments",
      code: `public class Factorial {
    public static void main(String[] args) {

        if (args.length == 0) {
            System.out.println("Please provide numbers as command line arguments.");
            return;
        }

        for (int i = 0; i < args.length; i++) {
            int num = Integer.parseInt(args[i]);
            long fact = 1;

            for (int j = 1; j <= num; j++) {
                fact = fact * j;
            }

            System.out.println("Factorial of " + num + " = " + fact);
        }
    }
}`,
      output: `Factorial of 5 = 120
Factorial of 3 = 6
Factorial of 7 = 5040`,
    },
  ];

  const subjects = [
    "Java",
    "CC",
    "DAA",
    "DBMS",
    "Java Lab",
    "DBMS Lab",
    "Shell Lab",
  ];

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  if (selectedSubject === "Java Lab") {
    return (
      <div className="app">
        <header>
          <h1>📚 SemesterVault</h1>
          <p>3rd Semester - Java Lab</p>
        </header>

        <main>
          <button
            className="back-button"
            onClick={() => setSelectedSubject(null)}
          >
            ← Back to Subjects
          </button>

          <h2>☕ Java Lab Programs</h2>

          {javaLabPrograms.map((program, index) => (
            <div className="program-card" key={index}>
              <h3>{program.title}</h3>

              <div className="code-header">
                <span>Java</span>
                <button onClick={() => copyCode(program.code)}>
                  📋 Copy Code
                </button>
              </div>

              <pre>
                <code>{program.code}</code>
              </pre>

              <h4>Output:</h4>

              <pre className="output">
                {program.output}
              </pre>
            </div>
          ))}
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header>
        <h1>📚 SemesterVault</h1>
        <p>Your BCA Notes Collection</p>
      </header>

      <main>
        <h2>3rd Semester</h2>

        <div className="subject-grid">
          {subjects.map((subject) => (
            <button
              className="subject-card"
              key={subject}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject === "Java Lab" ? "☕ " : "📖 "}
              {subject}
            </button>
          ))}
        </div>

        <p className="coming-soon">
          Select a subject to view your notes.
        </p>
      </main>
    </div>
  );
}

export default App;
