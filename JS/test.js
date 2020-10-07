function fib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

// for (let i = 1; i < 100; i++) {
//   console.log(i + ": " + fib(i));
// }

let factorial = BigInt(1);
for (let i = 25; i > 1; i--) {
  factorial *= i;
}

// console.log("factorial: ", factorial);

let matrix = [[1, 2, 3, 4], [3, 2, 5, 7], [4, 7, 8, 9], [6, 7, 8, 9]];

let slices = [];
let N = matrix.length;

for (let i = 0; i < N; i++) {
  let slice = [];

  for (let j = 0; j < N; j++) {
    if (j > 0 && j < N - 1 && Math.abs(i - j) <= 1) {
      slice.push(matrix[j][j]);
    }
  }
}
