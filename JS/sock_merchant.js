// Complete the sockMerchant function in the editor below.
// It must return an integer representing the number of matching pairs of socks that
// are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock

function sockMerchant(n, ar) {
  let sock_map = {};
  let pairs_count = 0;

  for (let sock of ar) {
    sock_map[sock] = sock_map[sock] ? sock_map[sock] + 1 : 1;

    if (parseInt(sock_map[sock]) / 2 === 1) {
      pairs_count++;
      sock_map[sock] = 0;
    }
  }

  return pairs_count;
}
