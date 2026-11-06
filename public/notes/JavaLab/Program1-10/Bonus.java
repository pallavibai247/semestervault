abstract class Department {
    double salary, bonus, netsalary;
    abstract void calbonus(double salary);
    abstract void display();
}
class Accounts extends Department {
    public void calbonus(double sal) {
        salary = sal;
        bonus = sal * 0.2;
        netsalary = salary + bonus;
    }
    void display() {
        System.out.println("Accounts \t" + salary + "\t\t" + bonus + "\t" + netsalary);
    }
}
class Sales extends Department {
    public void calbonus(double sal) {
        salary = sal;
        bonus = sal * 0.15;
        netsalary = salary + bonus;
    }
    void display() {
        System.out.println("Sales \t\t" + salary + "\t\t" + bonus + "\t" + netsalary);
    }
}
class Production extends Department {
    public void calbonus(double sal) {
        salary = sal;
        bonus = sal * 0.1;
        netsalary = salary + bonus;
    }
    void display() {
        System.out.println("Production \t" + salary + "\t\t" + bonus + "\t" + netsalary);
    }
}
class Bonus {
    public static void main(String args[]) {
        int i;
        double basic[] = {15000, 20000, 25000};
        Department d[] = new Department[3];
        d[0] = new Accounts();
        d[1] = new Sales();
        d[2] = new Production();
        System.out.println("Department \t Basic salary \t Bonus \t Salary");
        System.out.println("................................................");
        for (i = 0; i < basic.length; i++) {
            d[i].calbonus(basic[i]);
            d[i].display();
        }
    }
}
