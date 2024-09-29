const prompt = require("prompt-sync")();

const sumArray = (numbers) => {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }
  return { sum };
};

let numbers = Array.from({ length: 5 }); // Create an array of length 5

for (const number in numbers) {
  numbers[number] = Number(
    prompt(`Enter the ${Number(number) + 1} number of the array: `)
  );
}

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] = Number(prompt(`Enter number ${i + 1}: `));
// }

console.log(sumArray(numbers));
