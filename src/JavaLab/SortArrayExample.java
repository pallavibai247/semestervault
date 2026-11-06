import java.util.*;

public class SortArrayExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.print("Enter the number of elements: ");
            int n = sc.nextInt();
            if (n < 0) {
                System.out.println("Number of elements cannot be negative.");
                return;
            }
            int[] arr = new int[n];
            System.out.println("Enter " + n + " elements:");
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            // Display original array
            System.out.print("\nOriginal Array: ");
            for (int i = 0; i < n; i++) {
                System.out.print(arr[i] + " ");
            }
            // Sorting in ascending order (using simple comparison)
            for (int i = 0; i < n - 1; i++) {
                for (int j = i + 1; j < n; j++) {
                    if (arr[i] > arr[j]) {
                        int temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            // Display ascending order
            System.out.print("\nSorted in Ascending Order: ");
            for (int i = 0; i < n; i++) {
                System.out.print(arr[i] + " ");
            }
            // Display descending order
            System.out.print("\nSorted in Descending Order: ");
            for (int i = n - 1; i >= 0; i--) {
                System.out.print(arr[i] + " ");
            }
        } catch (InputMismatchException e) {
            System.out.println("\nError: Please enter valid integer values only!");
        } catch (Exception e) {
            System.out.println("\nAn unexpected error occurred: " + e.getMessage());
        } finally {
            System.out.println("\n\nProgram execution completed.");
            sc.close();
        }
    }
}
