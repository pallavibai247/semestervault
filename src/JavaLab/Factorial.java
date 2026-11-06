public class Factorial {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Please provide numbers as command line arguments.");
            return;
        }
        for (int i = 0; i < args.length; i++) {
            int num = Integer.parseInt(args[i]); // convert string to integer
            if (num < 0) {
                System.out.println("Factorial is not defined for negative number: " + num);
                continue;
            }
            long fact = 1;
            for (int j = 1; j <= num; j++) {
                fact *= j;
            }
            System.out.println("Factorial of " + num + " = " + fact);
        }
    }
}
