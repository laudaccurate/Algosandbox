//A Pangram is a string that contains all letters of the alphabet at least once.

function isPangram(str) {
  let characters = str
    .toLowerCase()
    .replace(/\W/g, "")
    .split("");

  return new Set(characters).size === 26 ? "Pangram" : "Not Pangram";
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
