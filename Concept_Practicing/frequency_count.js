const prompt = require("prompt-sync")();

// Different way of taking input from the user

//let numbers = [];

// for (let i = 0; i < 5; i++) {
//   numbers.push(Number(prompt(`Enter number ${i + 1}: `)));
// }

const frequencies = (numbers) => {
  let result = new Array(numbers.length).fill(0); // Trick to fix the length of the Array and Initialize result with 0s
  let visited = -1;
  for (const i in numbers) {
    let count = 1;
    for (const j in numbers) {
      let k = Number(j) + Number(i) + 1;
      if (numbers[Number(i)] == numbers[k]) {
        count += 1;
        result[k] = visited;
      }
    }
    if (result[Number(i)] != visited) {
      result[Number(i)] = count;
    }
  }
  return { result };
};

let numbers = Array.from({ length: 5 });

for (const number in numbers) {
  numbers[number] = Number(
    prompt(`Enter the ${Number(number) + 1} number of the array: `)
  );
}

console.log(
  `The frequency of each number in the array is: `,
  frequencies(numbers)
);
