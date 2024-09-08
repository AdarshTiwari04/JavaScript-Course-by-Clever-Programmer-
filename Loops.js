// const fruits = ["Apple", "banana", "Pears", "Watermelon"];

// for (const fruit of fruits) {
//   console.log(fruit); // Outputs: Apple, banana, Pears, Watermelon
// }

const numbers = ["1", "2", "3", "4", "5"];

// for (const number of numbers) {
//   console.log(parseInt(number) + 1); // Outputs: 2, 3, 4, 5, 6
// }

// for (const number of numbers) {
//   console.log(number * 2);
// }

// How to get a new Array with double the value

// let result = [];

// for (const number of numbers) {
//   result.push(number * 2);
// }

// console.log(result); // Outputs: [2, 4, 6, 8, 10]

const double = (numbers) => {
  let result = [];

  for (const number of numbers) {
    result.push(number * 2);
  }
  return result;
};

console.log(double(numbers)); // Outputs: [2, 4, 6, 8, 10]
