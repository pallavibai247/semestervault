import java.applet.Applet;
import java.awt.*;
import java.awt.event.*;
/*
<applet code="SumApplet" width=400 height=200>
</applet>
*/
public class SumApplet extends Applet implements ActionListener {
    TextField num1Field, num2Field;
    Button sumButton;
    Label resultLabel;
    public void init() {
        // Set layout
        setLayout(new GridLayout(4, 2));
        // Input fields
        add(new Label("Enter first number:"));
        num1Field = new TextField(10);
        add(num1Field);
        add(new Label("Enter second number:"));
        num2Field = new TextField(10);
        add(num2Field);
        // Button
        sumButton = new Button("Calculate Sum");
        add(sumButton);
        sumButton.addActionListener(this);
        // Result label
        resultLabel = new Label("Sum will be displayed here");
        add(resultLabel);
    }
    public void actionPerformed(ActionEvent e) {
        try {
            int num1 = Integer.parseInt(num1Field.getText());
            int num2 = Integer.parseInt(num2Field.getText());
            int sum = num1 + num2;
            resultLabel.setText("Sum: " + sum);
        } catch (NumberFormatException ex) {
            resultLabel.setText("Invalid input! Enter integers only.");
        }
    }
}
