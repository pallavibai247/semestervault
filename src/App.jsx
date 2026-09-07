import { useState } from "react";
import "./App.css";

function App() {
  const [semester, setSemester] = useState("3rd Semester");
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

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

  // =========================================================
  // JAVA LAB PROGRAMS 1 - 10
  // Earlier uploaded Java programs
  // =========================================================

  const javaPrograms1to10 = [
    {
      number: 1,
      title:
        "Write a program to find factorial of list of numbers reading input as command line argument.",
      code: `public class Factorial {
    public static void main(String[] args) {

        if (args.length == 0) {
            System.out.println("Please enter numbers as command line arguments.");
            return;
        }

        for (String value : args) {
            try {
                int n = Integer.parseInt(value);

                if (n < 0) {
                    System.out.println(
                        "Factorial is not possible for negative number: " + n
                    );
                    continue;
                }

                long fact = 1;

                for (int i = 1; i <= n; i++) {
                    fact = fact * i;
                }

                System.out.println("Factorial of " + n + " = " + fact);

            } catch (NumberFormatException e) {
                System.out.println("Invalid number: " + value);
            }
        }
    }
}`,
    },

    {
      number: 2,
      title: "Write a program to display all prime numbers between two limits.",
      code: `import java.util.Scanner;

public class PrimeNumbers {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter lower limit: ");
        int lower = sc.nextInt();

        System.out.print("Enter upper limit: ");
        int upper = sc.nextInt();

        System.out.println("Prime numbers are:");

        for (int n = lower; n <= upper; n++) {

            if (n < 2) {
                continue;
            }

            boolean prime = true;

            for (int i = 2; i * i <= n; i++) {
                if (n % i == 0) {
                    prime = false;
                    break;
                }
            }

            if (prime) {
                System.out.print(n + " ");
            }
        }

        sc.close();
    }
}`,
    },

    {
      number: 3,
      title:
        "Write a program to sort list of elements in ascending and descending order and show exception handling.",
      code: `import java.util.InputMismatchException;
import java.util.Scanner;

public class Sorting {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        try {
            System.out.print("Enter number of elements: ");
            int n = sc.nextInt();

            if (n <= 0) {
                System.out.println("Number of elements must be positive.");
                return;
            }

            int[] a = new int[n];

            System.out.println("Enter elements:");

            for (int i = 0; i < n; i++) {
                a[i] = sc.nextInt();
            }

            // Ascending order
            for (int i = 0; i < n - 1; i++) {
                for (int j = i + 1; j < n; j++) {

                    if (a[i] > a[j]) {
                        int temp = a[i];
                        a[i] = a[j];
                        a[j] = temp;
                    }
                }
            }

            System.out.print("Ascending order: ");

            for (int i = 0; i < n; i++) {
                System.out.print(a[i] + " ");
            }

            System.out.print("\\nDescending order: ");

            for (int i = n - 1; i >= 0; i--) {
                System.out.print(a[i] + " ");
            }

            System.out.println();

        } catch (InputMismatchException e) {
            System.out.println("Exception: Please enter integers only.");
        }

        sc.close();
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
        String s1 = sc.nextLine();

        System.out.print("Enter second string: ");
        String s2 = sc.nextLine();

        System.out.println("\\nString Operations");

        System.out.println("Length of first string: " + s1.length());
        System.out.println("Length of second string: " + s2.length());

        System.out.println("Concatenation: " + s1.concat(s2));

        System.out.println("Equals: " + s1.equals(s2));

        System.out.println(
            "Equals ignoring case: " + s1.equalsIgnoreCase(s2)
        );

        System.out.println("First string uppercase: " + s1.toUpperCase());

        System.out.println("Second string lowercase: " + s2.toLowerCase());

        if (!s1.isEmpty()) {
            System.out.println("First character: " + s1.charAt(0));
        }

        if (!s2.isEmpty()) {
            System.out.println(
                "Last character: " + s2.charAt(s2.length() - 1)
            );
        }

        System.out.println("CompareTo: " + s1.compareTo(s2));

        if (s1.length() >= 3) {
            System.out.println(
                "Substring of first string: " + s1.substring(0, 3)
            );
        }

        sc.close();
    }
}`,
    },

    {
      number: 5,
      title: "Write a program to find area of geometrical figures using methods.",
      code: `import java.util.Scanner;

public class GeometryArea {

    static double areaCircle(double radius) {
        return Math.PI * radius * radius;
    }

    static double areaRectangle(double length, double width) {
        return length * width;
    }

    static double areaTriangle(double base, double height) {
        return 0.5 * base * height;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("1. Circle");
        System.out.println("2. Rectangle");
        System.out.println("3. Triangle");

        System.out.print("Enter your choice: ");
        int choice = sc.nextInt();

        switch (choice) {

            case 1:
                System.out.print("Enter radius: ");
                double r = sc.nextDouble();

                System.out.println(
                    "Area of Circle = " + areaCircle(r)
                );
                break;

            case 2:
                System.out.print("Enter length: ");
                double l = sc.nextDouble();

                System.out.print("Enter width: ");
                double w = sc.nextDouble();

                System.out.println(
                    "Area of Rectangle = " + areaRectangle(l, w)
                );
                break;

            case 3:
                System.out.print("Enter base: ");
                double b = sc.nextDouble();

                System.out.print("Enter height: ");
                double h = sc.nextDouble();

                System.out.println(
                    "Area of Triangle = " + areaTriangle(b, h)
                );
                break;

            default:
                System.out.println("Invalid choice.");
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
        name = "Not Given";
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
            "ID: " + id +
            ", Name: " + name +
            ", Marks: " + marks
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

public class StudentReportApplet
        extends Applet
        implements ActionListener {

    TextField nameField;
    TextField usnField;
    TextField marks1Field;
    TextField marks2Field;
    TextField marks3Field;

    Button button;

    String result = "";

    public void init() {

        setLayout(new GridLayout(7, 2));

        add(new Label("Student Name:"));
        nameField = new TextField();
        add(nameField);

        add(new Label("USN:"));
        usnField = new TextField();
        add(usnField);

        add(new Label("Subject 1 Marks:"));
        marks1Field = new TextField();
        add(marks1Field);

        add(new Label("Subject 2 Marks:"));
        marks2Field = new TextField();
        add(marks2Field);

        add(new Label("Subject 3 Marks:"));
        marks3Field = new TextField();
        add(marks3Field);

        button = new Button("Generate Report");
        button.addActionListener(this);
        add(button);
    }

    public void actionPerformed(ActionEvent e) {

        try {
            int m1 = Integer.parseInt(marks1Field.getText());
            int m2 = Integer.parseInt(marks2Field.getText());
            int m3 = Integer.parseInt(marks3Field.getText());

            int total = m1 + m2 + m3;
            double percentage = total / 3.0;

            result =
                "Name: " + nameField.getText() +
                "\\nUSN: " + usnField.getText() +
                "\\nTotal: " + total +
                "\\nPercentage: " + percentage;

            repaint();

        } catch (NumberFormatException ex) {
            result = "Enter valid marks.";
            repaint();
        }
    }

    public void paint(Graphics g) {

        super.paint(g);

        int y = 250;

        for (String line : result.split("\\\\n")) {
            g.drawString(line, 50, y);
            y += 20;
        }
    }
}`,
      html: `<html>
<body>
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

    double salary;

    Department(double salary) {
        this.salary = salary;
    }

    abstract double calculateBonus();

    void display() {
        System.out.println(
            "Salary = " + salary +
            ", Bonus = " + calculateBonus()
        );
    }
}

class Accounts extends Department {

    Accounts(double salary) {
        super(salary);
    }

    double calculateBonus() {
        return salary * 0.20;
    }
}

class Sales extends Department {

    Sales(double salary) {
        super(salary);
    }

    double calculateBonus() {
        return salary * 0.15;
    }
}

class Production extends Department {

    Production(double salary) {
        super(salary);
    }

    double calculateBonus() {
        return salary * 0.10;
    }
}

public class Bonus {

    public static void main(String[] args) {

        Department accounts =
            new Accounts(15000);

        Department sales =
            new Sales(20000);

        Department production =
            new Production(25000);

        System.out.println("Accounts Department:");
        accounts.display();

        System.out.println("Sales Department:");
        sales.display();

        System.out.println("Production Department:");
        production.display();
    }
}`,
    },

    {
      number: 9,
      title: "Write an applet program to animate a ball.",
      code: `import java.applet.Applet;
import java.awt.*;

public class BallAnimation
        extends Applet
        implements Runnable {

    int x = 0;
    int y = 50;
    int dx = 5;

    Thread t;

    public void init() {
        setBackground(Color.WHITE);
    }

    public void start() {

        if (t == null) {
            t = new Thread(this);
            t.start();
        }
    }

    public void stop() {
        t = null;
    }

    public void run() {

        while (t != null) {

            x = x + dx;

            if (x > getWidth() - 30 || x < 0) {
                dx = -dx;
            }

            repaint();

            try {
                Thread.sleep(50);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }

    public void paint(Graphics g) {

        super.paint(g);

        g.setColor(Color.RED);
        g.fillOval(x, y, 30, 30);
    }
}`,
    },

    {
      number: 10,
      title:
        "Write a program to demonstrate mouse and keyboard events.",
      code: `import java.applet.Applet;
import java.awt.*;
import java.awt.event.*;

public class MouseKeyboardEvents
        extends Applet
        implements MouseListener,
                   MouseMotionListener,
                   KeyListener {

    String msg = "";
    int x = 20;
    int y = 50;

    public void init() {

        setBackground(Color.YELLOW);
        setForeground(Color.BLUE);

        addMouseListener(this);
        addMouseMotionListener(this);
        addKeyListener(this);

        setFocusable(true);
        requestFocus();
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
        msg = "Mouse Entered";
        repaint();
    }

    public void mouseExited(MouseEvent e) {
        msg = "Mouse Exited";
        repaint();
    }

    public void mouseDragged(MouseEvent e) {
        msg = "Mouse Dragged";
        x = e.getX();
        y = e.getY();
        repaint();
    }

    public void mouseMoved(MouseEvent e) {
        msg = "Mouse Moved";
        x = e.getX();
        y = e.getY();
        repaint();
    }

    public void keyPressed(KeyEvent e) {
        msg = "Key Pressed: " + e.getKeyChar();
        repaint();
    }

    public void keyReleased(KeyEvent e) {
        msg = "Key Released";
        repaint();
    }

    public void keyTyped(KeyEvent e) {
        msg = "Key Typed: " + e.getKeyChar();
        repaint();
    }

    public void paint(Graphics g) {

        super.paint(g);

        g.drawString(msg, x, y);
    }
}`,
    },
  ];

  // =========================================================
  // JAVA PART B PROGRAMS 11 - 20
  // From JavaProgrammingLab_SEP.pdf
  // =========================================================

  const javaPrograms11to20 = [
    {
      number: 11,
      title:
        "Write a java program to demonstrate the usage of switch case statement.",
      code: `import java.util.Scanner;

class SwitchEg {

    public static void main(String arg[]) {

        int a;

        Scanner sc = new Scanner(System.in);

        System.out.println(
            "Enter a number between 1 and 5:"
        );

        a = sc.nextInt();

        switch (a) {

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

        sc.close();
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

        if (n <= 0) {
            System.out.println(
                "Please enter a positive number."
            );
            sc.close();
            return;
        }

        int a = 0;
        int b = 1;

        System.out.print(
            "Fibonacci Series: "
        );

        for (int i = 0; i < n; i++) {

            System.out.print(a + " ");

            int c = a + b;
            a = b;
            b = c;
        }

        System.out.println();

        sc.close();
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
            "Enter rows and columns for first matrix: "
        );

        int r1 = sc.nextInt();
        int c1 = sc.nextInt();

        System.out.print(
            "Enter rows and columns for second matrix: "
        );

        int r2 = sc.nextInt();
        int c2 = sc.nextInt();

        if (c1 != r2) {

            System.out.println(
                "Matrix multiplication not possible."
            );

            sc.close();
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

        int[][] product =
            new int[r1][c2];

        for (int i = 0; i < r1; i++) {

            for (int j = 0; j < c2; j++) {

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

        sc.close();
    }
}`,
    },

    {
      number: 14,
      title:
        "Write a program to accept N strings and sort in ascending order.",
      code: `import java.util.Scanner;

class StringSort {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print(
            "Enter the number of strings: "
        );

        int n = sc.nextInt();

        String[] strings =
            new String[n];

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

        // Sort strings in ascending order

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

        sc.close();
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

        ClassDemo obj1 =
            new ClassDemo();

        obj1.var1 = 10;
        obj1.var2 = 20;

        obj1.method1();

        ClassDemo obj2 =
            new ClassDemo();

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

        ThreadA threadA =
            new ThreadA();

        ThreadB threadB =
            new ThreadB();

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

            Thread.currentThread().interrupt();
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

public class SumApplet
        extends Applet
        implements ActionListener {

    TextField num1Field;
    TextField num2Field;

    Button sumButton;

    Label resultLabel;

    public void init() {

        setLayout(new GridLayout(4, 2));

        add(
            new Label("Enter first number:")
        );

        num1Field =
            new TextField(10);

        add(num1Field);

        add(
            new Label("Enter second number:")
        );

        num2Field =
            new TextField(10);

        add(num2Field);

        sumButton =
            new Button("Calculate Sum");

        add(sumButton);

        sumButton.addActionListener(this);

        resultLabel =
            new Label("Sum will be displayed here");

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
      html: `<html>
<body>
<applet code="SumApplet.class"
        width="400"
        height="200">
</applet>
</body>
</html>`,
    },

    {
      number: 19,
      title: "Write an applet program to draw human face.",
      code: `import java.applet.Applet;
import java.awt.*;

public class Face extends Applet {

    public void paint(Graphics g) {

        // Face outline
        g.setColor(Color.YELLOW);

        g.fillOval(
            50, 50, 200, 250
        );

        // Eyes
        g.setColor(Color.WHITE);

        g.fillOval(
            90, 120, 40, 25
        );

        g.fillOval(
            170, 120, 40, 25
        );

        // Pupils
        g.setColor(Color.BLACK);

        g.fillOval(
            105, 130, 10, 10
        );

        g.fillOval(
            185, 130, 10, 10
        );

        // Eyebrows
        g.drawArc(
            85, 110, 50, 10, 0, 180
        );

        g.drawArc(
            165, 110, 50, 10, 0, 180
        );

        // Nose
        g.setColor(Color.ORANGE);

        g.fillOval(
            140, 160, 20, 30
        );

        // Mouth
        g.setColor(Color.RED);

        g.drawArc(
            110, 200, 80, 40, 0, -180
        );

        // Ears
        g.setColor(Color.YELLOW);

        g.fillOval(
            35, 130, 25, 50
        );

        g.fillOval(
            240, 130, 25, 50
        );
    }
}`,
      html: `<html>
<body>
<applet code="Face.class"
        width="300"
        height="350">
</applet>
</body>
</html>`,
    },

    {
      number: 20,
      title: "Write an applet program to create a Bar Chart.",
      code: `import java.applet.Applet;
import java.awt.*;

public class Barchart extends Applet {

    int[] values =
        {80, 120, 60, 150, 100};

    String[] labels =
        {"A", "B", "C", "D", "E"};

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

        // Draw axes
        g.drawLine(
            40, 250, 350, 250
        );

        g.drawLine(
            40, 50, 40, 250
        );

        // Draw bars
        for (int i = 0;
             i < values.length;
             i++) {

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
      html: `<html>
<body>
<applet code="Barchart.class"
        width="400"
        height="300">
</applet>
</body>
</html>`,
    },
  ];

  // Combine Java 1-10 and Part B 11-20
  const javaLabPrograms = [
    ...javaPrograms1to10,
    ...javaPrograms11to20,
  ];

  // =========================================================
  // COPY CODE
  // =========================================================

  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied successfully!");
    } catch (error) {
      alert("Unable to copy code.");
    }
  };

  // =========================================================
  // SUBJECT CLICK
  // =========================================================

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedProgram(null);
  };

  // =========================================================
  // PROGRAM CLICK
  // =========================================================

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  // =========================================================
  // PROGRAM VIEW
  // =========================================================

  if (selectedProgram) {
    return (
      <div className="app">
        <header className="header">
          <h1>📚 Semester Vault</h1>
          <p>Your Notes & Lab Programs</p>
        </header>

        <main className="container">
          <button
            className="back-button"
            onClick={() => setSelectedProgram(null)}
          >
            ← Back to Java Lab
          </button>

          <div className="program-page">
            <h2>
              Java Lab Program {selectedProgram.number}
            </h2>

            <h3>{selectedProgram.title}</h3>

            <div className="code-header">
              <span>Java Code</span>

              <button
                onClick={() =>
                  copyCode(selectedProgram.code)
                }
              >
                📋 Copy Code
              </button>
            </div>

            <pre className="code-box">
              <code>{selectedProgram.code}</code>
            </pre>

            {selectedProgram.html && (
              <>
                <div className="code-header">
                  <span>HTML Code</span>

                  <button
                    onClick={() =>
                      copyCode(selectedProgram.html)
                    }
                  >
                    📋 Copy HTML
                  </button>
                </div>

                <pre className="code-box">
                  <code>{selectedProgram.html}</code>
                </pre>
              </>
            )}
          </div>
        </main>
      </div>
    );
  }

  // =========================================================
  // MAIN PAGE
  // =========================================================

  return (
    <div className="app">

      <header className="header">
        <h1>📚 Semester Vault</h1>
        <p>
          Notes, Programs and Lab Materials
        </p>
      </header>

      <div className="semester-buttons">

        {Object.keys(subjects).map((sem) => (

          <button
            key={sem}
            className={
              semester === sem
                ? "semester active"
                : "semester"
            }
            onClick={() => {
              setSemester(sem);
              setSelectedSubject(null);
            }}
          >
            {sem}
          </button>

        ))}

      </div>

      <main className="container">

        <h2>{semester}</h2>

        <div className="subject-grid">

          {subjects[semester].map((subject) => (

            <button
              key={subject}
              className="subject-card"
              onClick={() =>
                handleSubjectClick(subject)
              }
            >
              {subject === "Java" && "☕ "}
              {subject === "CC" && "💻 "}
              {subject === "DAA" && "⚙️ "}
              {subject === "DBMS" && "🗄️ "}
              {subject === "Java Lab" && "☕ "}
              {subject === "DBMS Lab" && "🗄️ "}
              {subject === "Shell Lab" && "⌨️ "}

              {subject}
            </button>

          ))}

        </div>

        {selectedSubject === "Java Lab" && (

          <section className="lab-section">

            <h2>☕ Java Lab Programs</h2>

            <p>
              Programs 1–10: Earlier Java Lab programs
              <br />
              Programs 11–20: Part B
            </p>

            <div className="program-grid">

              {javaLabPrograms.map((program) => (

                <button
                  key={program.number}
                  className="program-button"
                  onClick={() =>
                    handleProgramClick(program)
                  }
                >
                  Program {program.number}
                  <span>
                    {program.title}
                  </span>
                </button>

              ))}

            </div>

          </section>

        )}

        {selectedSubject === "Java" && (

          <section className="notes-section">

            <h2>☕ Java Notes</h2>

            <div className="note-card">
              <h3>Java Basics</h3>
              <p>
                Java is a high-level,
                object-oriented and platform-independent
                programming language.
              </p>
            </div>

            <div className="note-card">
              <h3>JDK, JRE and JVM</h3>
              <p>
                JDK is used for Java development.
                JRE provides the environment to run Java
                programs.
                JVM executes Java bytecode.
              </p>
            </div>

          </section>

        )}

        {selectedSubject === "CC" && (

          <section className="notes-section">

            <h2>💻 Computer Concepts</h2>

            <div className="note-card">
              <h3>Computer Concepts</h3>
              <p>
                Add your CC notes and study material here.
              </p>
            </div>

          </section>

        )}

        {selectedSubject === "DAA" && (

          <section className="notes-section">

            <h2>⚙️ DAA</h2>

            <div className="note-card">
              <h3>Design and Analysis of Algorithms</h3>
              <p>
                Add your DAA notes and programs here.
              </p>
            </div>

          </section>

        )}

        {selectedSubject === "DBMS" && (

          <section className="notes-section">

            <h2>🗄️ DBMS</h2>

            <div className="note-card">
              <h3>Database Management System</h3>
              <p>
                Add your DBMS notes here.
              </p>
            </div>

          </section>

        )}

        {selectedSubject === "DBMS Lab" && (

          <section className="notes-section">

            <h2>🗄️ DBMS Lab</h2>

            <div className="note-card">
              <h3>DBMS Lab Programs</h3>
              <p>
                Add your DBMS Lab programs here.
              </p>
            </div>

          </section>

        )}

        {selectedSubject === "Shell Lab" && (

          <section className="notes-section">

            <h2>⌨️ Shell Lab</h2>

            <p>
              Your existing Shell Lab programs are kept
              separately. This section has NOT been changed.
            </p>

          </section>

        )}

      </main>

      <footer className="footer">
        <p>
          © 2026 Semester Vault
        </p>
      </footer>

    </div>
  );
}

export default App;
