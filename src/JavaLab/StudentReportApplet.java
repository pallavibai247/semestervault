import java.applet.*;
import java.awt.*;
import java.awt.event.*;
/*
<applet code="StudentReportApplet.class" width=500 height=400>
</applet>
*/
public class StudentReportApplet extends Applet implements ActionListener {
    Label l1, l2, l3, l4, l5;
    TextField t1, t2, t3, t4, t5;
    Button b1;
    int total;
    double percentage;
    public void init() {
        setLayout(new GridLayout(7, 2));
        l1 = new Label("Student Name:");
        t1 = new TextField(20);
        l2 = new Label("USN:");
        t2 = new TextField(20);
        l3 = new Label("Subject 1 Marks:");
        t3 = new TextField(5);
        l4 = new Label("Subject 2 Marks:");
        t4 = new TextField(5);
        l5 = new Label("Subject 3 Marks:");
        t5 = new TextField(5);
        b1 = new Button("Generate Report");
        b1.addActionListener(this);
        add(l1); add(t1);
        add(l2); add(t2);
        add(l3); add(t3);
        add(l4); add(t4);
        add(l5); add(t5);
        add(b1);
    }
    public void actionPerformed(ActionEvent e) {
        try {
            int m1 = Integer.parseInt(t3.getText());
            int m2 = Integer.parseInt(t4.getText());
            int m3 = Integer.parseInt(t5.getText());
            total = m1 + m2 + m3;
            percentage = total / 3.0;
            repaint();
        } catch (NumberFormatException ex) {
            total = 0;
            percentage = 0.0;
            repaint();
        }
    }
    public void paint(Graphics g) {
        g.drawString("----- Student Report -----", 50, 250);
        g.drawString("Name : " + t1.getText(), 50, 270);
        g.drawString("USN : " + t2.getText(), 50, 290);
        g.drawString("Total Marks : " + total, 50, 310);
        g.drawString("Percentage : " + String.format("%.2f", percentage) + "%", 50, 330);
    }
}
