public class ClassDemo {
    int var1;
    int var2;
    void method1() {
        System.out.println("Method1 called with var1: " + var1 + " and var2: " + var2);
        int sum = var1 + var2;
        System.out.println("Sum of var1 and var2: " + sum);
    }
    public static void main(String[] args) {
        ClassDemo obj1 = new ClassDemo();
        obj1.var1 = 10;
        obj1.var2 = 20;
        obj1.method1();
        ClassDemo obj2 = new ClassDemo();
        obj2.var1 = 30;
        obj2.var2 = 40;
        obj2.method1();
    }
}
