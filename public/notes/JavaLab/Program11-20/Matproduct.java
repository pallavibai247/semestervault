import java.util.Scanner;
public class Matproduct {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows and columns for the first matrix: ");
        int r1 = sc.nextInt();
        int c1 = sc.nextInt();
        System.out.print("Enter the number of rows and columns for the second matrix: ");
        int r2 = sc.nextInt();
        int c2 = sc.nextInt();
        if (c1 != r2) {
            System.out.println("Matrix multiplication not possible.");
            sc.close();
            return;
        }
        int[][] a = new int[r1][c1];
        System.out.println("Enter elements of first matrix:");
        for (int i = 0; i < r1; i++) {
            for (int j = 0; j < c1; j++) {
                a[i][j] = sc.nextInt();
            }
        }
        int[][] b = new int[r2][c2];
        System.out.println("Enter elements of second matrix:");
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
                    product[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        System.out.println("Product of the matrices:");
        for (int i = 0; i < r1; i++) {
            for (int j = 0; j < c2; j++) {
                System.out.print(product[i][j] + " ");
            }
            System.out.println();
        }
        sc.close();
    }
}
