import java.applet.*;
import java.awt.*;
/*
<applet code="BallAnimation.class" width=500 height=400>
</applet>
*/
public class BallAnimation extends Applet implements Runnable {
    int x = 0, y = 50; // Ball position
    int dx = 5; // Movement speed
    Thread t;
    boolean running;
    public void init() {
        setBackground(Color.white);
    }
    public void start() {
        running = true;
        t = new Thread(this);
        t.start();
    }
    public void run() {
        while (running) {
            x += dx;
            // Reverse direction when hitting edges
            if (x > getWidth() - 50 || x < 0) {
                dx = -dx;
            }
            repaint();
            try {
                Thread.sleep(50); // Slow down animation
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }
    public void stop() {
        running = false;
    }
    public void paint(Graphics g) {
        g.setColor(Color.red);
        g.fillOval(x, y, 50, 50); // Draw the ball
    }
}
