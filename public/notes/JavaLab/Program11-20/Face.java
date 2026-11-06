import java.applet.Applet;
import java.awt.*;
/*
<applet code="Face" width=300 height=350>
</applet>
*/
public class Face extends Applet {
    public void paint(Graphics g) {
        // Face outline
        g.setColor(Color.YELLOW);
        g.fillOval(50, 50, 200, 250);
        // Eyes
        g.setColor(Color.WHITE);
        g.fillOval(90, 120, 40, 25); // Left eye
        g.fillOval(170, 120, 40, 25); // Right eye
        g.setColor(Color.BLACK);
        g.fillOval(105, 130, 10, 10); // Left pupil
        g.fillOval(185, 130, 10, 10); // Right pupil
        // Eyebrows
        g.drawArc(85, 110, 50, 10, 0, 180); // Left eyebrow
        g.drawArc(165, 110, 50, 10, 0, 180); // Right eyebrow
        // Nose
        g.setColor(Color.ORANGE);
        g.fillOval(140, 160, 20, 30);
        // Mouth
        g.setColor(Color.RED);
        g.drawArc(110, 200, 80, 40, 0, -180);
        // Ears
        g.setColor(Color.YELLOW);
        g.fillOval(35, 130, 25, 50); // Left ear
        g.fillOval(240, 130, 25, 50); // Right ear
    }
}
