import java.applet.*;
import java.awt.*;
import java.awt.event.*;
/* <applet code="MouseKeyboardEvents" width=500 height=400></applet> */
public class MouseKeyboardEvents extends Applet
        implements MouseListener, MouseMotionListener, KeyListener {
    String msg = "";
    int x = 10, y = 20;
    public void init() {
        addMouseListener(this);
        addMouseMotionListener(this);
        addKeyListener(this);
        setBackground(Color.yellow);
        setForeground(Color.blue);
        // To receive keyboard input focus
        requestFocus();
    }
    public void paint(Graphics g) {
        g.drawString(msg, x, y);
    }
    // ---------------- Mouse Events ----------------
    public void mouseClicked(MouseEvent e) {
        msg = "Mouse Clicked";
        x = e.getX();
        y = e.getY();
        repaint();
    }
    public void mousePressed(MouseEvent e) {
        msg = "Mouse Pressed";
        repaint();
    }
    public void mouseReleased(MouseEvent e) {
        msg = "Mouse Released";
        repaint();
    }
    public void mouseEntered(MouseEvent e) {
        msg = "Mouse Entered Applet Area";
        repaint();
    }
    public void mouseExited(MouseEvent e) {
        msg = "Mouse Exited Applet Area";
        repaint();
    }
    // Mouse Motion Events
    public void mouseMoved(MouseEvent e) {
        msg = "Mouse Moved";
        x = e.getX();
        y = e.getY();
        repaint();
    }
    public void mouseDragged(MouseEvent e) {
        msg = "Mouse Dragged";
        x = e.getX();
        y = e.getY();
        repaint();
    }
    // ---------------- Keyboard Events ----------------
    public void keyPressed(KeyEvent e) {
        msg = "Key Pressed: " + e.getKeyChar();
        repaint();
    }
    public void keyReleased(KeyEvent e) {
        msg = "Key Released: " + e.getKeyChar();
        repaint();
    }
    public void keyTyped(KeyEvent e) {
        msg = "Key Typed: " + e.getKeyChar();
        repaint();
    }
}
