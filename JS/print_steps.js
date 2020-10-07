// method 1
function steps(n) {
  for (let i = 0; i < n; i++) {
    let stairs = "";

    for (let j = 0; j < n; j++) {
      stairs += j <= i ? "#" : " ";
    }

    console.log(stairs);
  }
}

//method 2 'David'
function steps2(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padEnd(n));
  }
}

// method 3 - recursive
function steps3(n, row = 0, step = "") {
  if (row === n) return;

  if (step.length === row + 1) {
    console.log(step);
    return steps3(n, row + 1);
  }

  step += step.length <= row + 1 ? "#" : " ";

  steps3(n, row, step);
}

steps3(9);
