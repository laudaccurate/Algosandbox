// To iterate over all items in a list, performing an operation on each, or to pluck
// some data off a list of objects - map

// Example 1
const numbers = [1, 2, 3, 4, 5];

var double = numbers.map(number => number * 2);

console.log(double);

// Example 2
const cars = [
  { model: "Corolla", brand: "Toyota", price: "Cheap" },
  { model: "Camaro", brand: "Chevrolet", price: "Moderate" },
  { model: "CX-20", brand: "Benz", price: "Expensive" }
];

let prices = cars.map(car => car.price);

console.log(prices);
