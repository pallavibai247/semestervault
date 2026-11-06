import java.util.Scanner;
class fibo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of terms in Fibonacci series: ");
        int n = sc.nextInt();
        if (n <= 0) {
            System.out.println("Number of terms must be positive.");
            sc.close();
            return;
        }
        int a = 0, b = 1, c;
        if (n == 1) {
            System.out.println("Fibonacci Series: 0");
            sc.close();
            return;
        }
        System.out.print("Fibonacci Series: " + a + " " + b);
        for (int i = 2; i < n; i++) {
            c = a + b;
            System.out.print(" " + c);
            a = b;
            b = c;
        }
        System.out.println();
        sc.close();
    }
}
