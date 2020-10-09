import java.util.Scanner;
import java.util.Random;
import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;


public class TicTacToe {
  //lists to record the user's placements and the CPU's placements respectively
  static ArrayList<Integer> playerPositions = new ArrayList<Integer>();
  static ArrayList<Integer> cpuPositions = new ArrayList<Integer>();

  public static void main(String[] args) {
    //characters to build the game board layout
    char[][] gameBoard = {
      {' ', '|', ' ', '|', ' '},
      {'-', '+', '-', '+', '-'},
      {' ', '|', ' ', '|', ' '},
      {'-', '+', '-', '+', '-'},
      {' ', '|', ' ', '|', ' '},
    };

    printGameBoard(gameBoard);

    //to keep the game running, we loop on true
    while(true) {
      Scanner scan = new Scanner(System.in);
      //take the user's position
      System.out.println("Enter your placement (1 - 9):");
      int playerPosition = scan.nextInt();

      //check if the position entered is vacant, else, ask again
      while(playerPositions.contains(playerPosition) || cpuPositions.contains(playerPosition)) {
        System.out.println("Position taken!! Enter another position (1 - 9): ");
        playerPosition = scan.nextInt();
      }
      placePiece(playerPosition, gameBoard, "player"); //place piece at the user's position

      String result = checkWinner(); // if winning condition is met, end the game; else, continue..
      if(result.length() > 0) {
        System.out.println(result);
        break;
      }
      
      //generate cpu position randomly
      Random rand = new Random();
      int cpuPosition = rand.nextInt(9) + 1;

      //check if the position entered is vacant, else, generate another position
      while(cpuPositions.contains(cpuPosition) || playerPositions.contains(cpuPosition)) {
        cpuPosition = rand.nextInt(9) + 1;
      }
      placePiece(cpuPosition, gameBoard, "cpu"); //place piece at the cpu's position
      
      printGameBoard(gameBoard); //print the gameboard with the placements

      result = checkWinner(); // if winning condition is met, then end the game; else, continue..
      if(result.length() > 0) {
        System.out.println(result);
        break;
      }
    }
    
  }
  
  //print the layout of the game board from the characters in the gameBoard array
  public static void printGameBoard(char[][] gameBoard) {
    for (char[] row : gameBoard) {
      for (char c : row ) {
        System.out.print(c);
      }
      System.out.println();
    }
  }
  
  //method that places a piece (X or O) at the position entered by player or generated by CPU
  public static void placePiece(int position, char[][] gameBoard, String user) {
    char symbol;
    //determine which piece to place, depending on whose turn it is
    if( user == "player") {
      symbol = 'X';
      playerPositions.add(position);
    } else {
      symbol = 'O'; 
      cpuPositions.add(position);
    }

    //place the piece at the position that the user entered or the CPU generated 
    switch (position) {
      case 1:
        gameBoard[0][0] = symbol;
        break;
      case 2:
        gameBoard[0][2] = symbol;
        break;
      case 3:
        gameBoard[0][4] = symbol;
        break;
      case 4:
        gameBoard[2][0] = symbol;
        break;
      case 5:
        gameBoard[2][2] = symbol;
        break;
      case 6:
        gameBoard[2][4] = symbol;
        break;
      case 7:
        gameBoard[4][0] = symbol;
        break;
      case 8:
        gameBoard[4][2] = symbol;
        break;
      case 9:
        gameBoard[4][4] = symbol;
        break;
    
      default:
        break;
    }
  }


  //method that checks the placements against the winning conditions
  public static String checkWinner() {
    //list of winning conditions
    List<List> winningPositions = new ArrayList<List>();
    winningPositions.add(Arrays.asList(1,2,3));
    winningPositions.add(Arrays.asList(4,5,6));
    winningPositions.add(Arrays.asList(7,8,9));
    winningPositions.add(Arrays.asList(1,4,7));
    winningPositions.add(Arrays.asList(2,5,8));
    winningPositions.add(Arrays.asList(3,6,9));
    winningPositions.add(Arrays.asList(1,5,9));
    winningPositions.add(Arrays.asList(3,5,7));

    for(List l : winningPositions) {
      if(playerPositions.containsAll(l)) { //if player wins
        return "Congratulations!!! You won...";

      } else if(cpuPositions.containsAll(l)) { //if cpu wins
        return "Sorry... Cortana won :(";

      } else if(playerPositions.size() + cpuPositions.size() == 9) { // if there's a tie
        return "GAME OVER!!! Start Again...";
      }
    }

    return "";
  }
}