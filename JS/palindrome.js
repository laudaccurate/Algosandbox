//method 1
function palindrome1(str) {
  return (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  );
}

// method 2
function palindrome2(str) {
  return str
    .split("")
    .every((char, index) => char === str[str.length - 1 - index]);
}
