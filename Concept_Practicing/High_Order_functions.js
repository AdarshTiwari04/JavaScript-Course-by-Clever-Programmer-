// const prompt = require("prompt-sync")();

// Method 1:

// const filter = (numbers, greaterThan) => {
//   let result = [];
//   for (const number of numbers) {
//     if (number > greaterThan) {
//       result.push(number);
//     }
//   }
//   return result;
// };

// const length = prompt(" Enter the length of the Array : ");
// let numbers = Array.from({ length: length });
// for (const number in numbers) {
//   numbers[number] = Number(prompt(`Enter number ${Number(number) + 1}: `));
// }
// console.log(filter(numbers, 3));

// Method 2:
//console.log(numbers.filter((number) => number > 6));

// Method 3:

const actors = [
  {
    name: "John Doe",
    age: 25,
    networth: 100,
    movies: ["Inception", "The Dark Knight", "Pulp Fiction"],
  },
  {
    name: "Jane Smith",
    age: 30,
    networth: 150,
    movies: [
      "The Godfather",
      "The Matrix",
      "Eternal Sunshine of the Spotless Mind",
    ],
  },
  {
    name: "Michael Brown",
    age: 40,
    networth: 200,
    movies: ["Casablanca", "Psycho", "The Shawshank Redemption"],
  },
];

// console.log(
//   actors.filter((actor) => actor.age > 30 && actor.name == "Michael Brown")
// );

//? .reduce function

//? const nums = [1, 2, 3, 4];
//? const result = nums.reduce((a, b) => a + b, 0);// Here in .reduce, we can even pass a functional function also like Sum_array instead

//? console.log(result);
//? const Sum_array = (a, b) => {
//?   return a + b;
//? };

//? Here in reduce function, we can pass a functional function also like Sum_array instead but it expects a specific kind of callback function that takes two arguments, the accumulator and the current value.
//? const nums = [1, 2, 3, 4];
//? const result = nums.reduce(Sum_array);

//? console.log(result);

//!  const nums = [1, 2, 3, 4];
//!  const result = nums.reduce((a, b) => a + b, 0);// Here in .reduce, we can even pass a functional function also like Sum_array instead

//! console.log(result);

//! const Muiltiply = (a, b) => {
//!   return a * b;
//! };

//! Here in reduce function, we can pass a functional function also like Sum_array instead but it expects a specific kind of callback function that takes two arguments, the accumulator and the current value.
//! const nums = [1, 2, 3, 4];
//! const result = nums.reduce(Muiltiply);

//! console.log(result);

//@ Method 1 ( for networth addition of the object properties )

//@ let display_networth = actors.map((actor) => actor.networth);
//@ let result = display_networth.reduce((prev, curr) => prev + curr);

//@ Method 2 ( for networth addition of the object properties )

let result = actors.reduce((prev, curr) => prev + curr.networth, 0);

console.log(result);
