import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;

public class index {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://www.google.com");
            URLConnection con = url.openConnection();
            InputStream stream = con.getInputStream();

            int c;
            while ((c = stream.read()) != -1) {  // Correct condition
                System.out.print((char) c);  // Print correctly
            }

            stream.close();  // Close the stream
        } catch (IOException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
