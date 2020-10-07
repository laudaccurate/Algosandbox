import java.util.Scanner;
import java.util.Arrays;

public class Solutions {
  public static void main(String[] args) {
    // GCD();
    int[] ints = new int[]{1,2,3,4,5,6,7,7,8,7,4,5,6,13,25};
    // evenIntegers(ints);
    // EQ2Bv();
    EQ3B();
  }

  // public static void GCD() {
  //   Scanner myScanner = new Scanner(System.in);
  //   System.out.println("Please enter a positive integer: ");
  //   int firstNumber = myScanner.nextInt();

  //   System.out.println("Please enter another a positive integer: ");
  //   int secondNumber = myScanner.nextInt();

  //   if (firstNumber <= 0 || secondNumber <= 0) {
  //     System.out.println("Please enter only positive numbers.");
  //     return;
  //   } else {
  //     int greatest, smallest;
  //     if (firstNumber > secondNumber) {
  //       greatest = firstNumber;
  //       smallest = secondNumber;
  //     } else {
  //       greatest = secondNumber;
  //       smallest = firstNumber;
  //     }
  //     for (int i = greatest; i > 0 ; i--) {
  //       if(greatest % i == 0 && smallest % i == 0) {
  //         System.out.println("The greatest common divisor of the two numbers is " + i);
  //         return;
  //       }
  //     }
  //   }
  // }

  public static void evenIntegers(int[] integers) {
    for (int i = 2; i < integers.length; i += 2) {
      System.out.println(integers[i]);
    }
  }

  public static void EQ2A() {
    for (int i = 10; i <= 1000; i++) {
      if(i % 5 == 0 && i % 6 == 0) {
        System.out.println(i);
      }
    }
  }
  // Q2Bi
  // int[] myNewArray = Arrays.copyOf(myArray, myArray.length);

  public static void EQ2Bii() {
    int[] myArray = new int[]{1,2,3,4};
    int sum = 0;
    for (int i = 0; i < myArray.length; i++) {
      sum += i;
    }
  }

  public static void EQ2Biii() {
    int[] myArray = new int[]{1,2,3,4,7,0};
    int minimum = myArray[0];
    for (int i = 0; i < myArray.length; i++) {
      if(myArray[i] < minimum) {
        minimum = myArray[i];
      }
    }
    System.out.println(minimum);
  }

  public static void EQ2Biv() {
    int[] myArray = new int[]{1,5,3,4,7,0,6,3,9,0,2};
    for (int i = 1; i < myArray.length; i += 2) {
      System.out.println(myArray[i]);
    }
  }

  public static void EQ2Bv() {
    int[] myArray = new int[]{1,5,3,4,0};
    for (int i = 0; i < myArray.length; i++) {
      for (int j = i + 1; j < myArray.length; j++) {
        if(myArray[j] < myArray[i]) {
          int temp = myArray[i];
          myArray[i] = myArray[j];
          myArray[j] = temp;
        }
      }
    }
    for (int i : myArray) {
      System.out.println(i);
    }
  }

  public static void EQ3A(int limit) {
    for (int i = 1; i <= limit; i++) {
      int factors = 0;
      for (int j = 1; j <= i; j++) {
        if(i % j == 0) {
          factors++;
        }
      }
      if(factors == 2) {
        System.out.println(i);
      }
    }
  }

  public static void EQ3B() {
    Scanner myScanner = new Scanner(System.in);
    System.out.println("Please enter the balance: ");
    double balance = myScanner.nextDouble();

    System.out.println("Please enter annual interest rate: ");
    int annualInterestRate = myScanner.nextInt();

    double interest = balance * (annualInterestRate / 1200);

    System.out.println("The interest for the next month is " + interest);
  }
}

