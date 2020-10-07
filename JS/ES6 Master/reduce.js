// Array.reduce(), just as the name suggests is used to reduce all items in a list
// into a single object - a number, string or array. S it takes an array and
// returns a single value.

const users = [
  { name: "Laud", age: 13 },
  { name: "King_D", age: 15 },
  { name: "Staph", age: 17 },
  { name: "Parker", age: 12 }
];
// Example One - Finding the sum of the users' ages

let totalAge = users.reduce((total, user) => {
  total += user.age;
  return total;
}, 0);
console.log("Total Ages : ", totalAge); // 57

// Example Two - Creating an Array of users' names

let usernames = users.reduce((names, user) => {
  names.push(user.name);

  return names;
}, []);
console.log("All users : ", usernames); // [ 'Laud', 'King_D', 'Staph', 'Parker' ]

// Example Three - Checking if a given string of parentheses are balanced (())
function balancedParens(string) {
  return !string.split("").reduce((previous, char) => {
    if (previous < 0) return previous;
    if (char === "(") return ++previous;
    if (char === ")") return --previous;

    return previous;
  }, 0);
}

console.log(balancedParens("(())"));
