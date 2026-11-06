
import { useState } from "react";
import "./App.css";

const javaPrograms = import.meta.glob("./JavaLab/*.java", {
  query: "?raw",
  import: "default",
  eager: true,
});

const javaProgramFiles = {
  1: "Factorial.java",
  2: "PrimeRange.java",
  3: "SortArrayExample.java",
  4: "StringOperations.java",
  5: "GeometryArea.java",
  6: "StudentMarks.java",
  7: "StudentReportApplet.java",
  8: "Bonus.java",
  9: "BallAnimation.java",
  10: "MouseKeyboardEvents.java",
  11: "SwitchEg.java",
  12: "fibo.java",
  13: "Matproduct.java",
  14: "StringSort.java",
  15: "ClassDemo.java",
  16: "MultipleInheritance.java",
  17: "MultiThread.java",
  18: "SumApplet.java",
  19: "Face.java",
  20: "Barchart.java",
};

const openJavaProgram = (number) => {
  const filename = javaProgramFiles[number];
  const code = javaPrograms[`./JavaLab/${filename}`];

  if (!code) {
    alert(`Program ${number} not found`);
    return;
  }

  const blob = new Blob([code], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);
  window.open(url, "_blank", "noopener,noreferrer");

  setTimeout(() => URL.revokeObjectURL(url), 60000);
};

function App() {
  const [semester, setSemester] = useState("3rd Semester");

  const subjects = {
    "3rd Semester": [
      "Java",
      "CC",
      "DAA",
      "DBMS",
      "Java Lab",
      "DBMS Lab",
      "Shell Lab",
    ],
    "4th Semester": ["Subject 1", "Subject 2", "Subject 3"],
    "5th Semester": ["Subject 1", "Subject 2", "Subject 3"],
    "6th Semester": ["Subject 1", "Subject 2", "Subject 3"],
  };

  const openNote = (file) => {
    if (file) {
      window.open(file, "_blank");
    }
  };

  return (
    <div className="app">
      <header>
        <h1>📚 My Notes</h1>
        <p>My Semester Notes</p>
      </header>

      <div className="container">
        <aside>
          <h2>Semesters</h2>

          <button onClick={() => setSemester("3rd Semester")}>
            📘 3rd Semester
          </button>

          <button onClick={() => setSemester("4th Semester")}>
            📗 4th Semester
          </button>

          <button onClick={() => setSemester("5th Semester")}>
            📙 5th Semester
          </button>

          <button onClick={() => setSemester("6th Semester")}>
            📕 6th Semester
          </button>
        </aside>

        <main>
          <h2>{semester}</h2>

          <div className="subjects">
            {subjects[semester].map((subject) => (
              <div className="subject" key={subject}>
                <h3>📖 {subject}</h3>
                <p>Click to view notes</p>

                {/* JAVA */}
                {subject === "Java" && (
                  <>
                    <button
                      onClick={() =>
                        openNote(
                          "https://1drv.ms/p/c/187D7A65FFEBBE6D/IQSufqaL3kAOR4K375kwyzu9AZgsMS5ekkQx4W4foZGYlIM?em=2&wdAr=1.7777777777777777"
                        )
                      }
                    >
                      Module 1 Part 1
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Module-1%20Part-2.pdf")
                      }
                    >
                      Module 1 Part 2
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/JAVA%20MODULE-2.pdf")
                      }
                    >
                      Module 2
                    </button>
                  </>
                )}

                {/* CC */}
                {subject === "CC" && (
                  <button
                    onClick={() =>
                      openNote(
                        "https://1drv.ms/p/c/187D7A65FFEBBE6D/IQTGO4lPB1EeRKaXN-EA735tAeqnC8fz_NfWSQjmqaFxvvs?em=2&wdAr=1.7777777777777777"
                      )
                    }
                  >
                    Module 1
                  </button>
                )}

                {/* DAA */}
                {subject === "DAA" && (
                  <>
                    <button
                      onClick={() => openNote("/notes/DAA-Unit1.pdf")}
                    >
                      Unit 1
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/DAA-Module-1.pdf")
                      }
                    >
                      Module 1
                    </button>

                    <button
                      onClick={() => openNote("/notes/DAA-Unit2.pdf")}
                    >
                      Module 2
                    </button>
                  </>
                )}

                {/* DBMS */}
                {subject === "DBMS" && (
                  <>
                    <button
                      onClick={() => openNote("/notes/DBMS-Unit-1.pdf")}
                    >
                      Unit 1
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/DBMS-Unit-1-Chapter-2.pdf")
                      }
                    >
                      Chapter 2
                    </button>

                    <button
                      onClick={() => openNote("/notes/DBMS-Unit-2.pdf")}
                    >
                      Unit 2
                    </button>

                    <button
                      onClick={() =>
                        openNote(
                          "https://1drv.ms/p/c/187D7A65FFEBBE6D/IQQB_8nFVTDCSZOefAISUxiBAUD-RL-jq4BdMKNGYt_XBok?em=2&wdAr=1.7777777777777777"
                        )
                      }
                    >
                      Unit 2 Part 2
                    </button>
                  </>
                )}

                {/* DBMS LAB */}
                {subject === "DBMS Lab" && (
                  <>
                    <h4>Part A – SQL Programs</h4>

                    <button onClick={() => openNote("/notes/DBMSLab/SQL1-DDL-Commands.txt")}>
                      Program 1 – DDL Commands
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/SQL2-DML-Commands.txt")}>
                      Program 2 – DML Commands
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/SQL3-TCL-Commands.txt")}>
                      Program 3 – TCL Commands
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/SQL4-Nested-Queries.txt")}>
                      Program 4 – Nested Queries
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/SQL5-Aggregate-Functions.txt")}>
                      Program 5 – Aggregate Functions
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/SQL6-Join-Operations.txt")}>
                      Program 6 – Join Operations
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/SQL7-Views.txt")}>
                      Program 7 – Views
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/SQL8-Single-Line-Functions.txt")}>
                      Program 8 – Single-Line Functions
                    </button>

                    <h4>Part B – PL/SQL Programs</h4>

                    <button onClick={() => openNote("/notes/DBMSLab/PLSQL1-Largest-Three-Numbers.txt")}>
                      Program 1 – Largest of Three Numbers
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/PLSQL2-Reverse-Number.txt")}>
                      Program 2 – Reverse Number
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/PLSQL3-Factorial.txt")}>
                      Program 3 – Factorial
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/PLSQL4-Prime-Number.txt")}>
                      Program 4 – Prime Number
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/PLSQL5-Fibonacci-Series.txt")}>
                      Program 5 – Fibonacci Series
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/PLSQL6-Insert-Employee.txt")}>
                      Program 6 – Insert Employee
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/PLSQL7-Predefined-Exception.txt")}>
                      Program 7 – Predefined Exception
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/PLSQL8-Sum-Procedure.txt")}>
                      Program 8 – Sum Procedure
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/PLSQL9-Square-Procedure.txt")}>
                      Program 9 – Square Procedure
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/PLSQL10-Maximum-Function.txt")}>
                      Program 10 – Maximum Function
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/PLSQL11-Package-Student.txt")}>
                      Program 11 – Student Package
                    </button>

                    <button onClick={() => openNote("/notes/DBMSLab/PLSQL12-Cursor-Procedure.txt")}>
                      Program 12 – Cursor Procedure
                    </button>
                  </>
                )}

                {/* JAVA LAB – ORIGINAL MAPPING */}
                {subject === "Java Lab" && (
                  <>
                    {Array.from({ length: 20 }, (_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => openJavaProgram(i + 1)}
                      >
                        Program {i + 1}
                      </button>
                    ))}
                  </>
                )}

                {/* SHELL LAB – ORIGINAL PATHS */}
                {subject === "Shell Lab" && (
                  <>
                    {Array.from({ length: 20 }, (_, i) => (
                      <button
                        key={i + 1}
                        onClick={() =>
                          openNote(`/notes/Shell/program${i + 1}.txt`)
                        }
                      >
                        Program {i + 1}
                      </button>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
