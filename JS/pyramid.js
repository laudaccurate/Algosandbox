//method 1

function pyramid(n) {
  let midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < 2 * n - 1; column++) {
      level += midpoint - row <= column && midpoint + row >= column ? "#" : " ";
    }

    console.log(level);
  }
}

// method 2 - recursive
function pyramid2(n, row = 0, level = "") {
  if (row === n) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid2(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  level +=
    midpoint - row <= level.length && midpoint + row >= level.length
      ? "#"
      : " ";

  pyramid2(n, row, level);
}

//method 3
function pyramid3(n) {
  let a = Math.floor((2 * n - 1) / 2);

  let count = 1;
  for (let i = 1; i <= n; i++) {
    console.log((".".repeat(a) + "#".repeat(count)).padEnd(2 * n - 1, "."));
    count += 2;
    a--;
  }
}

pyramid3(9);
