import java.util.Scanner;
class SwitchEg {
    public static void main(String arg[]) {
        int a;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number between 1 and 5:");
        a = sc.nextInt();
        switch(a) {
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
                System.out.println("You entered a number outside the range of 1 to 5");
        }
        sc.close();
    }
}
