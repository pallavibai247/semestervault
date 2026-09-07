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
    if (file) {
      window.open(file, "_blank", "noopener,noreferrer");
    }
  };

  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied successfully!");
    } catch {
      alert("Unable to copy code.");
    }
  };

  // =========================
  // JAVA LAB PROGRAMS 1 - 20
  // =========================

  const javaLabPrograms = [
    {
      number: 1,
      title:
        "Write a program to find factorial of list of number reading input as command line argument.",
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
      title:
        "Write a program to display all prime numbers between two limits.",
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

<h2>Mouse Keyboard Events Applet</h2>

<applet code="MouseKeyboardEvents.class"
        width="500"
        height="400">
</applet>

</body>
</html>`,
      commands: `javac MouseKeyboardEvents.java
appletviewer MouseKeyboardEvents.html`,
    },

    // =========================
    // JAVA PART B - 11 TO 20
    // =========================

    {
      number: 11,
      title:
        "Write a java program to demonstrate the usage of switch case statement.",
      code: `import java.util.Scanner;

class SwitchEg {

    public static void main(String arg[]) {

        int a;

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number between 1 and 5:");

        a = sc.nextInt();

        switch(a) {

            case 1:
                System.out.println("You entered One");
                break;

            case 2:
                System.out.println("You entered Two");
                break;

            case 3:
                System.out.println("You entered Three");
                break;

            case 4:
                System.out.println("You entered Four");
                break;

            case 5:
                System.out.println("You entered Five");
                break;

            default:
                System.out.println(
                    "You entered a number outside the range of 1 to 5"
                );
        }
    }
}`,
    },

    {
      number: 12,
      title: "Program to print first N Fibonacci numbers.",
      code: `import java.util.Scanner;

class fibo {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print(
            "Enter the number of terms in Fibonacci series: "
        );

        int n = sc.nextInt();

        int a = 0, b = 1, c;

        System.out.print(
            "Fibonacci Series: " + a + " " + b
        );

        for (int i = 2; i < n; i++) {

            c = a + b;

            System.out.print(" " + c);

            a = b;
            b = c;
        }

        System.out.println();
    }
}`,
    },

    {
      number: 13,
      title: "Write a program to find product of two matrices.",
      code: `import java.util.Scanner;

public class Matproduct {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print(
            "Enter the number of rows and columns for the first matrix: "
        );

        int r1 = sc.nextInt();
        int c1 = sc.nextInt();

        System.out.print(
            "Enter the number of rows and columns for the second matrix: "
        );

        int r2 = sc.nextInt();
        int c2 = sc.nextInt();

        if (c1 != r2) {

            System.out.println(
                "Matrix multiplication not possible."
            );

            return;
        }

        int[][] a = new int[r1][c1];

        System.out.println(
            "Enter elements of first matrix:"
        );

        for (int i = 0; i < r1; i++) {

            for (int j = 0; j < c1; j++) {

                a[i][j] = sc.nextInt();
            }
        }

        int[][] b = new int[r2][c2];

        System.out.println(
            "Enter elements of second matrix:"
        );

        for (int i = 0; i < r2; i++) {

            for (int j = 0; j < c2; j++) {

                b[i][j] = sc.nextInt();
            }
        }

        int[][] product = new int[r1][c2];

        for (int i = 0; i < r1; i++) {

            for (int j = 0; j < c2; j++) {

                product[i][j] = 0;

                for (int k = 0; k < c1; k++) {

                    product[i][j] +=
                        a[i][k] * b[k][j];
                }
            }
        }

        System.out.println(
            "Product of the matrices:"
        );

        for (int i = 0; i < r1; i++) {

            for (int j = 0; j < c2; j++) {

                System.out.print(
                    product[i][j] + " "
                );
            }

            System.out.println();
        }
    }
}`,
    },

    {
      number: 14,
      title:
        "Write a program to accept N string and sort in ascending order.",
      code: `import java.util.Scanner;

class StringSort {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print(
            "Enter the number of strings: "
        );

        int n = sc.nextInt();

        String[] strings = new String[n];

        System.out.println(
            "Enter the strings:"
        );

        for (int i = 0; i < n; i++) {

            strings[i] = sc.next();
        }

        System.out.println(
            "UnSorted strings:"
        );

        for (String str : strings) {

            System.out.println(str);
        }

        for (int i = 0; i < n - 1; i++) {

            for (int j = i + 1; j < n; j++) {

                if (strings[i].compareTo(strings[j]) > 0) {

                    String temp = strings[i];

                    strings[i] = strings[j];

                    strings[j] = temp;
                }
            }
        }

        System.out.println(
            "Sorted strings in ascending order:"
        );

        for (String str : strings) {

            System.out.println(str);
        }
    }
}`,
    },

    {
      number: 15,
      title:
        "Program to demonstrate the usage of classes and objects.",
      code: `public class ClassDemo {

    int var1;
    int var2;

    void method1() {

        System.out.println(
            "Method1 called with var1: "
            + var1
            + " and var2: "
            + var2
        );

        int sum = var1 + var2;

        System.out.println(
            "Sum of var1 and var2: "
            + sum
        );
    }

    public static void main(String[] args) {

        ClassDemo obj1 = new ClassDemo();

        obj1.var1 = 10;
        obj1.var2 = 20;

        obj1.method1();

        ClassDemo obj2 = new ClassDemo();

        obj2.var1 = 30;
        obj2.var2 = 40;

        obj2.method1();
    }
}`,
    },

    {
      number: 16,
      title:
        "Program to implement the concepts of multiple inheritance.",
      code: `interface xyz {

    public void functionx();
}

interface abc {

    public void functiona();
}

class MultipleInheritance
        implements xyz, abc {

    public void functionx() {

        System.out.println(
            "Function x from interface xyz"
        );
    }

    public void functiona() {

        System.out.println(
            "Function a from interface abc"
        );
    }

    public static void main(String[] args) {

        MultipleInheritance obj =
            new MultipleInheritance();

        obj.functionx();

        obj.functiona();
    }
}`,
    },

    {
      number: 17,
      title:
        "Write a program to demonstrate the concepts of multithreaded programming.",
      code: `class ThreadA extends Thread {

    public void run() {

        for (int i = 1; i <= 5; i++) {

            System.out.println(
                "Thread A: " + i
            );

            System.out.println(
                "End of Thread A "
            );
        }
    }
}

class ThreadB extends Thread {

    public void run() {

        for (int i = 6; i <= 10; i++) {

            System.out.println(
                "Thread B: " + i
            );

            System.out.println(
                "End of Thread B "
            );
        }
    }
}

public class MultiThread {

    public static void main(String[] args) {

        ThreadA threadA = new ThreadA();

        ThreadB threadB = new ThreadB();

        threadA.start();

        threadB.start();

        try {

            threadA.join();

            threadB.join();

        } catch (InterruptedException e) {

            System.out.println(
                "Thread interrupted: "
                + e.getMessage()
            );
        }

        System.out.println(
            "Both threads have completed execution."
        );

        for (int i = 11; i <= 15; i++) {

            System.out.println(
                "Main Thread: " + i
            );
        }

        System.out.println(
            "End of Main Thread "
        );
    }
}`,
    },

    {
      number: 18,
      title:
        "Write an applet program to find the sum of two integers using user input.",
      code: `import java.applet.Applet;
import java.awt.*;
import java.awt.event.*;

/*
<applet code="SumApplet" width=400 height=200>
</applet>
*/

public class SumApplet
        extends Applet
        implements ActionListener {

    TextField num1Field, num2Field;

    Button sumButton;

    Label resultLabel;

    public void init() {

        setLayout(new GridLayout(4, 2));

        add(new Label("Enter first number:"));

        num1Field = new TextField(10);

        add(num1Field);

        add(new Label("Enter second number:"));

        num2Field = new TextField(10);

        add(num2Field);

        sumButton = new Button(
            "Calculate Sum"
        );

        add(sumButton);

        sumButton.addActionListener(this);

        resultLabel = new Label(
            "Sum will be displayed here"
        );

        add(resultLabel);
    }

    public void actionPerformed(ActionEvent e) {

        try {

            int num1 =
                Integer.parseInt(
                    num1Field.getText()
                );

            int num2 =
                Integer.parseInt(
                    num2Field.getText()
                );

            int sum = num1 + num2;

            resultLabel.setText(
                "Sum: " + sum
            );

        } catch (NumberFormatException ex) {

            resultLabel.setText(
                "Invalid input! Enter integers only."
            );
        }
    }
}`,
    },

    {
      number: 19,
      title:
        "Write an applet program to draw human face.",
      code: `import java.applet.Applet;
import java.awt.*;

/*
<applet code="Face" width=300 height=350>
</applet>
*/

public class Face extends Applet {

    public void paint(Graphics g) {

        g.setColor(Color.YELLOW);

        g.fillOval(
            50, 50, 200, 250
        );

        g.setColor(Color.WHITE);

        g.fillOval(
            90, 120, 40, 25
        );

        g.fillOval(
            170, 120, 40, 25
        );

        g.setColor(Color.BLACK);

        g.fillOval(
            105, 130, 10, 10
        );

        g.fillOval(
            185, 130, 10, 10
        );

        g.drawArc(
            85, 110, 50, 10, 0, 180
        );

        g.drawArc(
            165, 110, 50, 10, 0, 180
        );

        g.setColor(Color.ORANGE);

        g.fillOval(
            140, 160, 20, 30
        );

        g.setColor(Color.RED);

        g.drawArc(
            110, 200, 80, 40, 0, -180
        );

        g.setColor(Color.YELLOW);

        g.fillOval(
            35, 130, 25, 50
        );

        g.fillOval(
            240, 130, 25, 50
        );
    }
}`,
    },

    {
      number: 20,
      title:
        "Write an applet program to create a Bar Charts.",
      code: `import java.applet.Applet;
import java.awt.*;

/*
<applet code="Barchart" width=400 height=300>
</applet>
*/

public class Barchart extends Applet {

    int[] values = {
        80, 120, 60, 150, 100
    };

    String[] labels = {
        "A", "B", "C", "D", "E"
    };

    Color[] colors = {
        Color.RED,
        Color.GREEN,
        Color.BLUE,
        Color.ORANGE,
        Color.MAGENTA
    };

    public void paint(Graphics g) {

        int x = 50;

        int y = 250;

        int width = 40;

        int gap = 30;

        g.drawLine(
            40, 250, 350, 250
        );

        g.drawLine(
            40, 50, 40, 250
        );

        for (
            int i = 0;
            i < values.length;
            i++
        ) {

            g.setColor(colors[i]);

            g.fillRect(
                x,
                y - values[i],
                width,
                values[i]
            );

            g.setColor(Color.BLACK);

            g.drawRect(
                x,
                y - values[i],
                width,
                values[i]
            );

            g.drawString(
                labels[i],
                x + 10,
                y + 15
            );

            x += width + gap;
        }
    }
}`,
    },
  ];

  // =========================
  // SHELL LAB PROGRAMS 1 - 20
  // =========================

  const shellPrograms = [
    {
      number: 1,
      title: "Usage of Five Internal Commands",
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
      number: 2,
      title: "Usage of Five External Commands",
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
      number: 3,
      title: "Calculate Simple Interest",
      code: `#!/bin/bash
read -p "Enter principal: " p
read -p "Enter rate (%): " r
read -p "Enter time (years): " t
si=$(awk -v p="$p" -v r="$r" -v t="$t" 'BEGIN{printf "%.2f", p*r*t/100}')
echo "Simple Interest = $si"`,
    },

    {
      number: 4,
      title: "Print Prime Numbers Between m and n",
      code: `#!/bin/bash
read -p "Enter m: " m
read -p "Enter n (m<n): " n
echo "Prime numbers:"
for ((x=m; x<=n; x++)); do
 if (( x < 2 )); then continue; fi
 prime=1
 for ((d=2; d*d<=x; d++)); do
  if (( x%d==0 )); then prime=0; break; fi
 done
 ((prime)) && printf "%d " "$x"
done
echo`,
    },

    {
      number: 5,
      title: "Reverse Number and Check Palindrome",
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
      number: 6,
      title: "Find Maximum and Minimum",
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
      number: 7,
      title: "Generate GCD and LCM",
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
      number: 8,
      title: "Count Lines, Words and Characters",
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
      number: 9,
      title: "Display All Files in Directory",
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
      number: 10,
      title: "Files with Read, Write and Execute Permissions",
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
      number: 11,
      title: "Check Leap Year",
      code: `#!/bin/bash
read -p "Enter year: " y

if (( y%400==0 || (y%4==0 && y%100!=0) )); then
 echo "$y is a Leap Year"
else
 echo "$y is not a Leap Year"
fi`,
    },

    {
      number: 12,
      title: "Basic Calculator",
      code: `#!/bin/bash
read -p "Enter first number: " a
read -p "Enter operator (+ - * /): " op
read -p "Enter second number: " b

case "$op" in
 +) echo "Result = $((a+b))" ;;
 -) echo "Result = $((a-b))" ;;
 \\*) echo "Result = $((a*b))" ;;
 /) ((b!=0)) && awk -v a="$a" -v b="$b" 'BEGIN{printf "Result = %.2f\\n", a/b}' || echo "Division by zero not allowed" ;;
 *) echo "Invalid operator" ;;
esac`,
    },

    {
      number: 13,
      title: "Count Positive, Negative and Zero",
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
      number: 14,
      title: "Check Valid Triangle",
      code: `#!/bin/bash
read -p "Enter three angles: " a b c

if ((a>0 && b>0 && c>0 && a+b+c==180)); then
 echo "Valid Triangle"
else
 echo "Invalid Triangle"
fi`,
    },

    {
      number: 15,
      title: "Factorial",
      code: `#!/bin/bash
read -p "Enter a non-negative integer: " n

fact=1

for ((i=2; i<=n; i++)); do
 fact=$((fact*i))
done

echo "Factorial = $fact"`,
    },

    {
      number: 16,
      title: "Multiplication Table",
      code: `#!/bin/bash
read -p "Enter number: " n

for ((i=1; i<=10; i++)); do
 echo "$n x $i = $((n*i))"
done`,
    },

    {
      number: 17,
      title: "Count Digits and Sum Digits",
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
      number: 18,
      title: "Fibonacci Series",
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
      number: 19,
      title: "Reverse a String",
      code: `#!/bin/bash
read -r -p "Enter a string: " s

rev=""

for ((i=\${#s}-1; i>=0; i--)); do
 rev+="\${s:i:1}"
done

echo "Reverse = $rev"`,
    },

    {
      number: 20,
      title: "String Palindrome",
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

  // =========================
  // PROGRAM VIEW
  // =========================

  if (selectedProgram) {
    const isShell = selectedProgram.type === "shell";

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

              <h4>
                {isShell ? "Shell Code" : "Java Code"}
              </h4>

              <button
                onClick={() =>
                  copyCode(selectedProgram.code)
                }
              >
                📋 Copy Code
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

          </main>

        </div>

      </div>
    );
  }

  // =========================
  // MAIN WEBSITE
  // =========================

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
                          openNote("/notes/java/JAVA%20MODULE-2.pdf")
                        )
                      }
                    >
                      Module 2
                    </button>
                  </>
                )}

                {/* JAVA LAB */}

                {subject === "Java Lab" && (
                  <div className="program-list">

                    {javaLabPrograms.map(
                      (program) => (

                        <button
                          key={program.number}
                          onClick={() =>
                            setSelectedProgram({
                              ...program,
                              type: "java",
                            })
                          }
                        >
                          Program {program.number}
                        </button>

                      )
                    )}

                  </div>
                )}

                {/* SHELL LAB */}

                {subject === "Shell Lab" && (
                  <div className="program-list">

                    {shellPrograms.map(
                      (program) => (

                        <button
                          key={program.number}
                          onClick={() =>
                            setSelectedProgram({
                              ...program,
                              type: "shell",
                            })
                          }
                        >
                          Program {program.number}
                        </button>

                      )
                    )}

                  </div>
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
                      openNote(
                        "/notes/DAA-Module-1.pdf"
                      )
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

                {/* OTHER SUBJECTS */}

                {subject !== "Java" &&
                  subject !== "CC" &&
                  subject !== "DAA" &&
                  subject !== "DBMS" &&
                  subject !== "Java Lab" &&
                  subject !== "Shell Lab" && (
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

        </main>

      </div>

    </div>
  );
}

export default App;
