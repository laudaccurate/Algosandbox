//method 1
function reverse1(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

//method 2
function reverse2(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

//method 3
function reverse3(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

console.log(reverse3("Ghana"));
// console.log(reverse("Nigeria"));
// console.log(reverse("Egypt"));
