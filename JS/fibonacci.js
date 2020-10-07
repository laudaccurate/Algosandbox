// method 1
function fib(n) {
  let fibs = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
  }

  return fibs[n];
}

// method 2

function memoize(fn) {
  let cache = {};

  return function(...args) {
    if (cache[args]) return cache[args];

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) return n;

  return fib1(n - 1) + fib1(n - 2);
}

const fib1 = memoize(slowFib);

console.log(fib1(5));
