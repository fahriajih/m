import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class PersonalBranding extends JFrame {
    public PersonalBranding() {
        // Mengatur judul dan ukuran jendela
        setTitle("Personal Branding");
        setSize(400, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null); // Pusatkan jendela di layar

        // Membuat panel
        JPanel panel = new JPanel();
        panel.setBackground(new Color(40, 40, 40)); // Warna latar belakang
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS)); // Layout vertikal

        // Menambahkan gambar profil
        ImageIcon profileImage = new ImageIcon("foto.jpg"); // Ganti dengan nama file gambar
        JLabel imageLabel = new JLabel(profileImage);
        imageLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        panel.add(imageLabel);

        // Menambahkan nama
        JLabel nameLabel = new JLabel("John Doe");
        nameLabel.setFont(new Font("Arial", Font.BOLD, 24));
        nameLabel.setForeground(Color.WHITE);
        nameLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        panel.add(nameLabel);

        // Menambahkan deskripsi
        JLabel descriptionLabel = new JLabel("Programmer dan Desainer Web");
        descriptionLabel.setFont(new Font("Arial", Font.PLAIN, 16));
        descriptionLabel.setForeground(Color.LIGHT_GRAY);
        descriptionLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        panel.add(descriptionLabel);

        // Menambahkan email
        JLabel emailLabel = new JLabel("john@example.com");
        emailLabel.setFont(new Font("Arial", Font.PLAIN, 16));
        emailLabel.setForeground(Color.LIGHT_GRAY);
        emailLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        panel.add(emailLabel);

        // Menambahkan tombol untuk LinkedIn
        JButton linkedInButton = new JButton("Lihat Profil LinkedIn");
        linkedInButton.setAlignmentX(Component.CENTER_ALIGNMENT);
        linkedInButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Ganti URL dengan profil LinkedIn kamu
                openWebPage("https://www.linkedin.com/in/johndoe");
            }
        });
        panel.add(linkedInButton);

        // Menambahkan panel ke jendela
        add(panel);
    }

    private void openWebPage(String url) {
        try {
            java.awt.Desktop.getDesktop().browse(java.net.URI.create(url));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            PersonalBranding branding = new PersonalBranding();
            branding.setVisible(true);
        });
    }
}
