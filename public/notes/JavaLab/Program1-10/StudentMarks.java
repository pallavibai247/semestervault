class StudentMarks {
    int id;
    String name;
    double marks;
    // Default constructor (no parameters)
    StudentMarks() {
        id = 0;
        name = "Unknown";
        marks = 0.0;
    }
    // Constructor with one parameter (int)
    StudentMarks(int i) {
        id = i;
        name = "Not given";
        marks = 0.0;
    }
    // Constructor with two parameters (int, String)
    StudentMarks(int i, String n) {
        id = i;
        name = n;
        marks = 0.0;
    }
    // Constructor with three parameters (int, String, double)
    StudentMarks(int i, String n, double m) {
        id = i;
        name = n;
        marks = m;
    }
    void display() {
        System.out.println(id + " " + name + " " + marks);
    }
    public static void main(String[] args) {
        StudentMarks s1 = new StudentMarks(); // No arguments
        StudentMarks s2 = new StudentMarks(101); // One argument (int)
        StudentMarks s3 = new StudentMarks(102, "Ram"); // Two arguments (int, String)
        StudentMarks s4 = new StudentMarks(103, "Sita", 89); // Three arguments (int, String, double)
        s1.display();
        s2.display();
        s3.display();
        s4.display();
    }
}
