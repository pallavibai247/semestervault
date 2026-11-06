import java.util.Scanner;
class StringSort {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of strings: ");
        int n = sc.nextInt();
        if (n < 0) {
            System.out.println("Number of strings cannot be negative.");
            sc.close();
            return;
        }
        String[] strings = new String[n];
        System.out.println("Enter the strings:");
        for (int i = 0; i < n; i++) {
            strings[i] = sc.next();
        }
        System.out.println("UnSorted strings:");
        for (String str : strings) {
            System.out.println(str);
        }
        // Sort the strings in ascending order
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (strings[i].compareTo(strings[j]) > 0) {
                    String temp = strings[i];
                    strings[i] = strings[j];
                    strings[j] = temp;
                }
            }
        }
        System.out.println("Sorted strings in ascending order:");
        for (String str : strings) {
            System.out.println(str);
        }
        sc.close();
    }
}
