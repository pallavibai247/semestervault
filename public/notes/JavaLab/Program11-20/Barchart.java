import java.applet.Applet;
import java.awt.*;
/*
<applet code="Barchart" width=400 height=300>
</applet>
*/
public class Barchart extends Applet {
    int[] values = {80, 120, 60, 150, 100};
    String[] labels = {"A", "B", "C", "D", "E"};
    Color[] colors = {Color.RED, Color.GREEN, Color.BLUE, Color.ORANGE, Color.MAGENTA};
    public void paint(Graphics g) {
        int x = 50;
        int y = 250;
        int width = 40;
        int gap = 30;
        // Draw axes
        g.drawLine(40, 250, 350, 250); // X-axis
        g.drawLine(40, 50, 40, 250); // Y-axis
        // Draw bars
        for (int i = 0; i < values.length; i++) {
            g.setColor(colors[i]);
            g.fillRect(x, y - values[i], width, values[i]);
            g.setColor(Color.BLACK);
            g.drawRect(x, y - values[i], width, values[i]);
            g.drawString(labels[i], x + 10, y + 15);
            x += width + gap;
        }
    }
}
