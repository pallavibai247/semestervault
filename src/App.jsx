import java.util.Scanner;

public class PrimeRange {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Input lower and upper limit
        System.out.print("Enter lower limit: ");
        int lower = sc.nextInt();

        System.out.print("Enter upper limit: ");
        int upper = sc.nextInt();

        System.out.println(
            "Prime numbers between " + lower + " and " + upper + " are:"
        );

        // Check each number in the range
        for (int num = lower; num <= upper; num++) {

            if (num <= 1)
                continue;

            int count = 0;

            // Check how many numbers divide num
            for (int i = 1; i <= num; i++) {

                if (num % i == 0) {
                    count++;
                }
            }

            // Prime number has exactly two divisors
            if (count == 2) {
                System.out.print(num + " ");
            }
        }

        sc.close();
    }
}
