import java.util.Scanner;

public class PrimeRange {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // input lower and upper limit
        System.out.print("Enter lower limit: ");
        int lower = sc.nextInt();
        System.out.print("Enter upper limit: ");
        int upper = sc.nextInt();
        System.out.println("Prime numbers between " + lower + " and " + upper + " are:");
        // check each number in the range
        for (int num = lower; num <= upper; num++) {
            if (num <= 1) continue; // skip 0 and 1
            int count = 0; // divisor count
            // check how many numbers divide num
            for (int i = 1; i <= num; i++) {
                if (num % i == 0) {
                    count++;
                }
            }
            // prime has exactly 2 divisors: 1 and itself
            if (count == 2) {
                System.out.print(num + " ");
            }
        }
        sc.close();
    }
}
