import javax.swing.*;

public class Palindrome{
    
    public static void main(String[] args) {
        String word;
        word = JOptionPane.showInputDialog(null, "Enter your word:");
        if(isPalindrome(word)) {
            JOptionPane.showMessageDialog(null, "The word "+ word + " is palindrome.");
        } else {
            JOptionPane.showMessageDialog(null, "The word "+ word + " is not palindrome.");
        }
    }
    
    public static boolean isPalindrome(String word) {
        int back = 0;
        int front = word.length()-1;
        
        while(back < front) {
            if(word.charAt(back) != word.charAt(front)) {
                return false;
            }
            back++;
            front--;
        }
        
        return true;
    }
}

