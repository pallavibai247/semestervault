import { useState } from "react";
import "./App.css";

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

    "4th Semester": [
      "Subject 1",
      "Subject 2",
      "Subject 3",
    ],

    "5th Semester": [
      "Subject 1",
      "Subject 2",
      "Subject 3",
    ],

    "6th Semester": [
      "Subject 1",
      "Subject 2",
      "Subject 3",
    ],
  };

  const openNote = (file) => {
    window.open(file, "_blank");
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
                  <button
                    onClick={() =>
                      openNote("/notes/DAA-Module-1.pdf")
                    }
                  >
                    Module 1
                  </button>
                )}

                {/* DBMS */}

                {subject === "DBMS" && (
                  <>
                    <button
                      onClick={() =>
                        openNote("/notes/DBMS-Unit-1.pdf")
                      }
                    >
                      Unit 1
                    </button>

                    <button
                      onClick={() =>
                        openNote(
                          "/notes/DBMS-Unit-1-Chapter-2.pdf"
                        )
                      }
                    >
                      Chapter 2
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/DBMS-Unit-2.pdf")
                      }
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

                {/* SHELL LAB */}

                {subject === "Shell Lab" && (
                  <>
                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program1.sh")
                      }
                    >
                      Program 1
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program2.sh")
                      }
                    >
                      Program 2
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program3.sh")
                      }
                    >
                      Program 3
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program4.sh")
                      }
                    >
                      Program 4
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program5.sh")
                      }
                    >
                      Program 5
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program6.sh")
                      }
                    >
                      Program 6
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program7.sh")
                      }
                    >
                      Program 7
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program8.sh")
                      }
                    >
                      Program 8
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program9.sh")
                      }
                    >
                      Program 9
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program10.sh")
                      }
                    >
                      Program 10
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program11.sh")
                      }
                    >
                      Program 11
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program12.sh")
                      }
                    >
                      Program 12
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program13.sh")
                      }
                    >
                      Program 13
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program14.sh")
                      }
                    >
                      Program 14
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program15.sh")
                      }
                    >
                      Program 15
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program16.sh")
                      }
                    >
                      Program 16
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program17.sh")
                      }
                    >
                      Program 17
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program18.sh")
                      }
                    >
                      Program 18
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program19.sh")
                      }
                    >
                      Program 19
                    </button>

                    <button
                      onClick={() =>
                        openNote("/notes/Shell/program20.sh")
                      }
                    >
                      Program 20
                    </button>
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
