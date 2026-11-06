class ThreadA extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Thread A: " + i);
            System.out.println("End of Thread A ");
        }
    }
}
class ThreadB extends Thread {
    public void run() {
        for (int i = 6; i <= 10; i++) {
            System.out.println("Thread B: " + i);
            System.out.println("End of Thread B ");
        }
    }
}
public class MultiThread {
    public static void main(String[] args) {
        ThreadA threadA = new ThreadA();
        ThreadB threadB = new ThreadB();
        threadA.start();
        threadB.start();
        try {
            threadA.join();
            threadB.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            System.out.println("Thread interrupted: " + e.getMessage());
        }
        System.out.println("Both threads have completed execution.");
        for (int i = 11; i <= 15; i++) {
            System.out.println("Main Thread: " + i);
        }
        System.out.println("End of Main Thread ");
    }
}
