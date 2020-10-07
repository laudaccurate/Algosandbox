function birthdayCakeCandles(ar) {
  ar.sort((a, b) => a - b);
  console.log(ar);
  if (ar[ar.length - 1] === ar[0]) return ar.length;

  let tallestCandle = ar[ar.length - 1];
  let candleCount = 1;

  for (let i = ar.length - 2; i >= 0; i--) {
    if (ar[i] === tallestCandle) candleCount += 1;
    else break;
  }

  console.log(candleCount);
  return candleCount;
}
let arr = [1000, 999, 1000, 1000, 1000, 999, 999, 987, 1000, 978, 967];
birthdayCakeCandles(arr);
