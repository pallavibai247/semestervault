import java.util.Scanner;

public class GeometryArea {
    // Method to calculate area of circle
    static double areaCircle(double radius) {
        return 3.14159 * radius * radius;
    }
    // Method to calculate area of rectangle
    static double areaRectangle(double length, double width) {
        return length * width;
    }
    // Method to calculate area of triangle
    static double areaTriangle(double base, double height) {
        return 0.5 * base * height;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Choose the figure to calculate area:");
        System.out.println("1. Circle");
        System.out.println("2. Rectangle");
        System.out.println("3. Triangle");
        System.out.print("Enter your choice (1-3): ");
        int choice = sc.nextInt();
        switch (choice) {
            case 1:
                System.out.print("Enter radius of circle: ");
                double r = sc.nextDouble();
                System.out.println("Area of Circle: " + areaCircle(r));
                break;
            case 2:
                System.out.print("Enter length of rectangle: ");
                double l = sc.nextDouble();
                System.out.print("Enter width of rectangle: ");
                double w = sc.nextDouble();
                System.out.println("Area of Rectangle: " + areaRectangle(l, w));
                break;
            case 3:
                System.out.print("Enter base of triangle: ");
                double b = sc.nextDouble();
                System.out.print("Enter height of triangle: ");
                double h = sc.nextDouble();
                System.out.println("Area of Triangle: " + areaTriangle(b, h));
                break;
            default:
                System.out.println("Invalid choice! Please enter 1, 2, or 3.");
        }
        sc.close();
    }
}
