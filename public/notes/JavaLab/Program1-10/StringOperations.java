import java.util.*;

public class StringOperations {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Input two strings
        System.out.print("Enter first string: ");
        String str1 = sc.nextLine();
        System.out.print("Enter second string: ");
        String str2 = sc.nextLine();
        // 1. Length of strings
        System.out.println("\nLength of first string: " + str1.length());
        System.out.println("Length of second string: " + str2.length());
        // 2. Concatenation
        String concat = str1 + str2;
        System.out.println("\nConcatenation of both strings: " + concat);
        // 3. Character access
        if (str1.length() > 0)
            System.out.println("First character of first string: " + str1.charAt(0));
        if (str2.length() > 0)
            System.out.println("Last character of second string: " + str2.charAt(str2.length() - 1));
        // 4. Substring
        if (str1.length() >= 3)
            System.out.println("\nSubstring of first string (0-3): " + str1.substring(0, 3));
        // 5. String comparison
        System.out.println("\nString comparison using equals(): " + str1.equals(str2));
        // 6. Case conversion
        System.out.println("\nUppercase of first string: " + str1.toUpperCase());
        System.out.println("Lowercase of second string: " + str2.toLowerCase());
        sc.close();
    }
}
