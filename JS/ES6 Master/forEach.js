const colors = ["red", "green", "blue"];

// classic for-loop
// for (var i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// foreEach helper
// colors.forEach(color => {
//   console.log(color);
// });

//Example 2
// When looking to call a function a number of times passing s different arg
// each time, or to perform the same operation on all items in a list - forEach
const numbers = [1, 2, 3, 4, 5];

let sum = 0;

function adder(number) {
  sum += number;
}

//it can be used for already declared fxns, in which case the function isn't evoked
numbers.forEach(adder);

console.log(sum);
