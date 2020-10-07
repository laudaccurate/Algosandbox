// method 1
function maxchar1(str) {
  let chars = {};
  let maxchar = null;
  let max = 0;

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;

    if (chars[char] > max) {
      max = chars[char];
      maxchar = char;
    }
  }

  return [maxchar, max];
}

console.log(maxchar1("frhujsnkmhlllksjdlllllihjyll"));
