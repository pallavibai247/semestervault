import { useState } from "react";
import "./App.css";

function App() {
  const [semester, setSemester] = useState("3rd Semester");
  const [selectedProgram, setSelectedProgram] = useState(null);

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

  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied successfully!");
    } catch {
      alert("Unable to copy code.");
    }
  };

  const javaLabPrograms = [
    {
      number: 1,
      title:
        "Write a program to find factorial of list of number reading input as command line argument.",
      type: "link",
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
                fact *= j;
            }

            System.out.println("Factorial of " + num + " = " + fact);
        }
    }
}`,
    },

    {
      number: 2,
      title: "Write a program to display all prime numbers between two limits.",
      code: `import java.util.Scanner;

public class PrimeRange {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter lower limit: ");
        int lower = sc.nextInt();

        System.out.print("Enter upper limit: ");
        int upper = sc.nextInt();

        System.out.println(
            "Prime numbers between " + lower + " and " + upper + " are:"
        );

        for (int num = lower; num <= upper; num++) {

            if (num <= 1) {
                continue;
            }

            int count = 0;

            for (int i = 1; i <= num; i++) {

                if (num % i == 0) {
                    count++;
                }
            }

            if (count == 2) {
                System.out.print(num + " ");
            }
        }

        sc.close();
    }
}`,
    },

    {
      number: 3,
      title:
        "Write a program to sort list of elements in ascending and descending order and show the exception handling.",
      code: `import java.util.InputMismatchException;
import java.util.Scanner;

public class SortArrayExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        try {

            System.out.print("Enter the number of elements: ");
            int n = sc.nextInt();

            int[] arr = new int[n];

            System.out.println("Enter " + n + " elements:");

            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }

            System.out.print("\\nOriginal Array: ");

            for (int i = 0; i < n; i++) {
                System.out.print(arr[i] + " ");
            }

            for (int i = 0; i < n - 1; i++) {

                for (int j = i + 1; j < n; j++) {

                    if (arr[i] > arr[j]) {

                        int temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }

            System.out.print("\\nSorted in Ascending Order: ");

            for (int i = 0; i < n; i++) {
                System.out.print(arr[i] + " ");
            }

            System.out.print("\\nSorted in Descending Order: ");

            for (int i = n - 1; i >= 0; i--) {
                System.out.print(arr[i] + " ");
            }

        } catch (InputMismatchException e) {

            System.out.println(
                "\\nError: Please enter valid integer values only!"
            );

        } catch (Exception e) {

            System.out.println(
                "\\nAn unexpected error occurred: " + e.getMessage()
            );

        } finally {

            System.out.println(
                "\\n\\nProgram execution completed."
            );

            sc.close();
        }
    }
}`,
    },

    {
      number: 4,
      title: "Write a program to implement all string operations.",
      code: `import java.util.Scanner;

public class StringOperations {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first string: ");
        String str1 = sc.nextLine();

        System.out.print("Enter second string: ");
        String str2 = sc.nextLine();

        System.out.println(
            "\\nLength of first string: " + str1.length()
        );

        System.out.println(
            "Length of second string: " + str2.length()
        );

        String concat = str1 + str2;

        System.out.println(
            "\\nConcatenation of both strings: " + concat
        );

        if (str1.length() > 0) {
            System.out.println(
                "First character of first string: "
                + str1.charAt(0)
            );
        }

        if (str2.length() > 0) {
            System.out.println(
                "Last character of second string: "
                + str2.charAt(str2.length() - 1)
            );
        }

        if (str1.length() >= 3) {
            System.out.println(
                "\\nSubstring of first string (0-3): "
                + str1.substring(0, 3)
            );
        }

        System.out.println(
            "\\nString comparison using equals(): "
            + str1.equals(str2)
        );

        System.out.println(
            "\\nUppercase of first string: "
            + str1.toUpperCase()
        );

        System.out.println(
            "Lowercase of second string: "
            + str2.toLowerCase()
        );

        sc.close();
    }
}`,
    },

    {
      number: 5,
      title:
        "Write a program to find area of geometrical figures using method.",
      code: `import java.util.Scanner;

public class GeometryArea {

    static double areaCircle(double radius) {
        return 3.14159 * radius * radius;
    }

    static double areaRectangle(double length, double width) {
        return length * width;
    }

    static double areaTriangle(double base, double height) {
        return 0.5 * base * height;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println(
            "Choose the figure to calculate area:"
        );

        System.out.println("1. Circle");
        System.out.println("2. Rectangle");
        System.out.println("3. Triangle");

        System.out.print("Enter your choice (1-3): ");
        int choice = sc.nextInt();

        switch (choice) {

            case 1:

                System.out.print(
                    "Enter radius of circle: "
                );

                double r = sc.nextDouble();

                System.out.println(
                    "Area of Circle: " + areaCircle(r)
                );

                break;

            case 2:

                System.out.print(
                    "Enter length of rectangle: "
                );

                double l = sc.nextDouble();

                System.out.print(
                    "Enter width of rectangle: "
                );

                double w = sc.nextDouble();

                System.out.println(
                    "Area of Rectangle: "
                    + areaRectangle(l, w)
                );

                break;

            case 3:

                System.out.print(
                    "Enter base of triangle: "
                );

                double b = sc.nextDouble();

                System.out.print(
                    "Enter height of triangle: "
                );

                double h = sc.nextDouble();

                System.out.println(
                    "Area of Triangle: "
                    + areaTriangle(b, h)
                );

                break;

            default:

                System.out.println(
                    "Invalid choice! Please enter 1, 2, or 3."
                );
        }

        sc.close();
    }
}`,
    },

    {
      number: 6,
      title:
        "Write a program to implement constructor overloading by passing different number of parameters of different types.",
      code: `class StudentMarks {

    int id;
    String name;
    double marks;

    StudentMarks() {

        id = 0;
        name = "Unknown";
        marks = 0.0;
    }

    StudentMarks(int i) {

        id = i;
        name = "Not given";
        marks = 0.0;
    }

    StudentMarks(int i, String n) {

        id = i;
        name = n;
        marks = 0.0;
    }

    StudentMarks(int i, String n, double m) {

        id = i;
        name = n;
        marks = m;
    }

    void display() {

        System.out.println(
            id + " " + name + " " + marks
        );
    }

    public static void main(String[] args) {

        StudentMarks s1 = new StudentMarks();

        StudentMarks s2 =
            new StudentMarks(101);

        StudentMarks s3 =
            new StudentMarks(102, "Ram");

        StudentMarks s4 =
            new StudentMarks(103, "Sita", 89);

        s1.display();
        s2.display();
        s3.display();
        s4.display();
    }
}`,
    },

    {
      number: 7,
      title:
        "Write a program to create student report using applet, read the input using text boxes and display the output using buttons.",
      code: `import java.applet.Applet;
import java.awt.*;
import java.awt.event.*;

public class StudentReportApplet extends Applet
        implements ActionListener {

    Label l1, l2, l3, l4, l5;
    TextField t1, t2, t3, t4, t5;
    Button b1;

    int total;
    double percentage;

    public void init() {

        setLayout(new GridLayout(7, 2));

        l1 = new Label("Student Name:");
        t1 = new TextField(20);

        l2 = new Label("USN:");
        t2 = new TextField(20);

        l3 = new Label("Subject 1 Marks:");
        t3 = new TextField(5);

        l4 = new Label("Subject 2 Marks:");
        t4 = new TextField(5);

        l5 = new Label("Subject 3 Marks:");
        t5 = new TextField(5);

        b1 = new Button("Generate Report");

        b1.addActionListener(this);

        add(l1);
        add(t1);

        add(l2);
        add(t2);

        add(l3);
        add(t3);

        add(l4);
        add(t4);

        add(l5);
        add(t5);

        add(b1);
    }

    public void actionPerformed(ActionEvent e) {

        int m1 = Integer.parseInt(t3.getText());
        int m2 = Integer.parseInt(t4.getText());
        int m3 = Integer.parseInt(t5.getText());

        total = m1 + m2 + m3;

        percentage = total / 3.0;

        repaint();
    }

    public void paint(Graphics g) {

        g.drawString(
            "----- Student Report -----",
            50, 250
        );

        g.drawString(
            "Name : " + t1.getText(),
            50, 270
        );

        g.drawString(
            "USN  : " + t2.getText(),
            50, 290
        );

        g.drawString(
            "Total Marks : " + total,
            50, 310
        );

        g.drawString(
            "Percentage : "
            + String.format("%.2f", percentage)
            + "%",
            50, 330
        );
    }
}`,
      html: `<html>
<body>

<h2>Student Report Applet</h2>

<applet code="StudentReportApplet.class"
        width="500"
        height="400">
</applet>

</body>
</html>`,
    },

    {
      number: 8,
      title:
        "Write a program to calculate bonus for different departments using method overriding.",
      code: `abstract class Department {

    double salary, bonus, netsalary;

    abstract void calbonus(double salary);

    abstract void display();
}

class Accounts extends Department {

    public void calbonus(double sal) {

        salary = sal;
        bonus = sal * 0.20;
        netsalary = salary + bonus;
    }

    void display() {

        System.out.println(
            "Accounts\\t" + salary
            + "\\t\\t" + bonus
            + "\\t" + netsalary
        );
    }
}

class Sales extends Department {

    public void calbonus(double sal) {

        salary = sal;
        bonus = sal * 0.15;
        netsalary = salary + bonus;
    }

    void display() {

        System.out.println(
            "Sales\\t\\t" + salary
            + "\\t\\t" + bonus
            + "\\t" + netsalary
        );
    }
}

class Production extends Department {

    public void calbonus(double sal) {

        salary = sal;
        bonus = sal * 0.10;
        netsalary = salary + bonus;
    }

    void display() {

        System.out.println(
            "Production\\t" + salary
            + "\\t\\t" + bonus
            + "\\t" + netsalary
        );
    }
}

public class Bonus {

    public static void main(String[] args) {

        double basic[] = {
            15000, 20000, 25000
        };

        Department d[] =
            new Department[3];

        d[0] = new Accounts();
        d[1] = new Sales();
        d[2] = new Production();

        System.out.println(
            "Department\\tBasic salary\\tBonus\\tSalary"
        );

        System.out.println(
            "------------------------------------------------"
        );

        for (int i = 0; i < basic.length; i++) {

            d[i].calbonus(basic[i]);
            d[i].display();
        }
    }
}`,
    },

    {
      number: 9,
      title:
        "Write a program to implement thread, applets and graphics by implementing animation of ball moving.",
      code: `import java.applet.Applet;
import java.awt.*;

public class BallAnimation
        extends Applet implements Runnable {

    int x = 0, y = 50;
    int dx = 5;

    Thread t;

    public void init() {

        setBackground(Color.white);
    }

    public void start() {

        t = new Thread(this);
        t.start();
    }

    public void run() {

        while (true) {

            x += dx;

            if (x > getWidth() - 50 || x < 0) {
                dx = -dx;
            }

            repaint();

            try {

                Thread.sleep(50);

            } catch (InterruptedException e) {

                break;
            }
        }
    }

    public void paint(Graphics g) {

        g.setColor(Color.red);

        g.fillOval(x, y, 50, 50);
    }
}`,
      html: `<html>
<body>

<h2>Ball Animation Applet</h2>

<applet code="BallAnimation.class"
        width="500"
        height="400">
</applet>

</body>
</html>`,
      commands: `javac BallAnimation.java
appletviewer BallAnimation.html`,
    },

    {
      number: 10,
      title:
        "Write a program to implement mouse events and keyboard events.",
      code: `import java.applet.Applet;
import java.awt.*;
import java.awt.event.*;

public class MouseKeyboardEvents
        extends Applet
        implements MouseListener,
                   MouseMotionListener,
                   KeyListener {

    String msg = "";

    int x = 10, y = 20;

    public void init() {

        addMouseListener(this);
        addMouseMotionListener(this);
        addKeyListener(this);

        setBackground(Color.yellow);
        setForeground(Color.blue);

        requestFocus();
    }

    public void paint(Graphics g) {

        g.drawString(msg, x, y);
    }

    public void mouseClicked(MouseEvent e) {

        msg = "Mouse Clicked";

        x = e.getX();
        y = e.getY();

        repaint();
    }

    public void mousePressed(MouseEvent e) {

        msg = "Mouse Pressed";

        repaint();
    }

    public void mouseReleased(MouseEvent e) {

        msg = "Mouse Released";

        repaint();
    }

    public void mouseEntered(MouseEvent e) {

        msg = "Mouse Entered Applet Area";

        repaint();
    }

    public void mouseExited(MouseEvent e) {

        msg = "Mouse Exited Applet Area";

        repaint();
    }

    public void mouseMoved(MouseEvent e) {

        msg = "Mouse Moved";

        x = e.getX();
        y = e.getY();

        repaint();
    }

    public void mouseDragged(MouseEvent e) {

        msg = "Mouse Dragged";

        x = e.getX();
        y = e.getY();

        repaint();
    }

    public void keyPressed(KeyEvent e) {

        msg = "Key Pressed: "
              + e.getKeyChar();

        repaint();
    }

    public void keyReleased(KeyEvent e) {

        msg = "Key Released: "
              + e.getKeyChar();

        repaint();
    }

    public void keyTyped(KeyEvent e) {

        msg = "Key Typed: "
              + e.getKeyChar();

        repaint();
    }
}`,
      html: `<html>
<body>

<applet code="MouseKeyboardEvents.class"
        width="500"
        height="400">
</applet>

</body>
</html>`,
      commands: `javac MouseKeyboardEvents.java
appletviewer MouseKeyboardEvents.html`,
    },
  ];

  return (
    <div className="app">

      <header>
        <h1>📚 My Notes</h1>
        <p>My Semester Notes</p>
      </header>

      <div className="container">

        <aside>
          <h2>Semesters</h2>

          <button
            onClick={() => {
              setSemester("3rd Semester");
              setSelectedProgram(null);
            }}
          >
            📘 3rd Semester
          </button>

          <button
            onClick={() => {
              setSemester("4th Semester");
              setSelectedProgram(null);
            }}
          >
            📗 4th Semester
          </button>

          <button
            onClick={() => {
              setSemester("5th Semester");
              setSelectedProgram(null);
            }}
          >
            📙 5th Semester
          </button>

          <button
            onClick={() => {
              setSemester("6th Semester");
              setSelectedProgram(null);
            }}
          >
            📕 6th Semester
          </button>
        </aside>

        <main>

          <h2>{semester}</h2>

          {selectedProgram && (
            <div className="program-view">

              <button
                onClick={() => setSelectedProgram(null)}
              >
                ← Back to Subjects
              </button>

              <h2>
                Program {selectedProgram.number}
              </h2>

              <h3>
                {selectedProgram.title}
              </h3>

              <h4>Java Code</h4>

              <button
                onClick={() =>
                  copyCode(selectedProgram.code)
                }
              >
                📋 Copy Java Code
              </button>

              <pre>
                <code>
                  {selectedProgram.code}
                </code>
              </pre>

              {selectedProgram.html && (
                <>
                  <h4>HTML Code</h4>

                  <button
                    onClick={() =>
                      copyCode(selectedProgram.html)
                    }
                  >
                    📋 Copy HTML Code
                  </button>

                  <pre>
                    <code>
                      {selectedProgram.html}
                    </code>
                  </pre>
                </>
              )}

              {selectedProgram.commands && (
                <>
                  <h4>Command Prompt</h4>

                  <pre>
                    <code>
                      {selectedProgram.commands}
                    </code>
                  </pre>
                </>
              )}

            </div>
          )}

          {!selectedProgram && (
            <div className="subjects">

              {subjects[semester].map((subject) => (

                <div
                  className="subject"
                  key={subject}
                >

                  <h3>📖 {subject}</h3>

                  <p>
                    Click to view notes
                  </p>

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
                          openNote(
                            "/notes/Module-1%20Part-2.pdf"
                          )
                        }
                      >
                        Module 1 Part 2
                      </button>

                      <button
                        onClick={() =>
                          openNote(
                            "/notes/JAVA%20MODULE-2.pdf"
                          )
                        }
                      >
                        Module 2
                      </button>
                    </>
                  )}

                  {subject === "Java Lab" && (
                    <div className="program-list">

                      {javaLabPrograms.map(
                        (program) => (

                          <button
                            key={program.number}
                            onClick={() =>
                              setSelectedProgram(
                                program
                              )
                            }
                          >
                            Program {program.number}
                          </button>

                        )
                      )}

                    </div>
                  )}

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

                  {subject === "DAA" && (
                    <button
                      onClick={() =>
                        openNote(
                          "/notes/DAA-Module-1.pdf"
                        )
                      }
                    >
                      Module 1
                    </button>
                  )}

                  {subject === "DBMS" && (
                    <>
                      <button
                        onClick={() =>
                          openNote(
                            "/notes/DBMS-Unit-1.pdf"
                          )
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
                          openNote(
                            "/notes/DBMS-Unit-2.pdf"
                          )
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

                  {subject !== "Java" &&
                    subject !== "CC" &&
                    subject !== "DAA" &&
                    subject !== "DBMS" &&
                    subject !== "Java Lab" && (
                      <button
                        onClick={() =>
                          alert(
                            `Notes for ${subject} will be added soon.`
                          )
                        }
                      >
                        View Notes
                      </button>
                    )}

                </div>

              ))}

            </div>
          )}

        </main>

      </div>

    </div>
  );
}

export default App;
