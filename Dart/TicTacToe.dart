import 'dart:io';
import 'dart:math';

//sets to record the user's placements and cortana's placements respectively
Set<int> playerPositions = new Set(); //used a set bcos set is an unordered list
Set<int> cortanaPositions = new Set();

main(List<String> args) {
  //characters to build the game board layout
  var gameBoard = [
    [' ', '|', ' ', '|', ' '],
    ['-', '+', '-', '+', '-'],
    [' ', '|', ' ', '|', ' '],
    ['-', '+', '-', '+', '-'],
    [' ', '|', ' ', '|', ' '],
  ];

  printGameBoard(gameBoard);

  //to keep the game running, we loop on true
  while (true) {
    //take the user's position and parse to integer
    print('Enter your placement number (1 - 9) :');
    String playerInput = stdin.readLineSync();
    int playerPos = int.parse(playerInput);

    //check if the position entered is vacant, else, ask again
    while (playerPositions.contains(playerPos) ||
        cortanaPositions.contains(playerPos)) {
      print('Position taken!! Enter another position (1 - 9) :');
      playerInput = stdin.readLineSync();
      playerPos = int.parse(playerInput);
    }
    placePiece(playerPos, gameBoard, 'player'); //place piece at user's position

    String result =
        checkWinner(); // if winning condition is met, end the game; else, continue..
    if (result.length > 0) {
      print(result);
      break;
    }

    //generate cortana's position randomly
    var rand = new Random();
    int cortanaPos = rand.nextInt(9) + 1;
    //check if the position is vacant, else, generate another position
    while (playerPositions.contains(cortanaPos) ||
        cortanaPositions.contains(cortanaPos)) {
      cortanaPos = rand.nextInt(9) + 1;
    }
    placePiece(cortanaPos, gameBoard,
        'cortana'); //place piece at the cortans's position

    printGameBoard(gameBoard);

    result =
        checkWinner(); // if winning condition is met, end the game; else, continue..
    if (result.length > 0) {
      print(result);
      break;
    }
  }
}

void printGameBoard(var gameBoard) {
  for (var row in gameBoard) {
    for (var c in row) {
      stdout.write(c);
    }
    print('');
  }
}

void placePiece(var pos, var gameBoard, String player) {
  var symbol;

  if (player == 'player') {
    symbol = 'X';
    playerPositions.add(pos);
  } else {
    symbol = 'O';
    cortanaPositions.add(pos);
  }

  switch (pos) {
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

String checkWinner() {
  var winningPositions = new List<List>();

  //list of winning conditions
  winningPositions.add([1, 2, 3]);
  winningPositions.add([4, 5, 6]);
  winningPositions.add([7, 8, 9]);
  winningPositions.add([1, 4, 7]);
  winningPositions.add([2, 5, 8]);
  winningPositions.add([3, 6, 9]);
  winningPositions.add([1, 5, 9]);
  winningPositions.add([3, 5, 7]);

  for (List l in winningPositions) {
    if (playerPositions.containsAll(l)) {
      //if player wins
      return "Congratulations!!! You won...";
    } else if (cortanaPositions.containsAll(l)) {
      //if cortana wins
      return "Sorry... Cortana won :(";
    } else if (playerPositions.length + cortanaPositions.length == 9) {
      // if there's a tie
      return "GAME OVER!!! Start Again...";
    }
  }

  return "";
}
