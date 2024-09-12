const prompt = require("prompt-sync")();

const Max_number = (numbers) => {
  let result = numbers[0];
  for (const number of numbers) {
    if (number > result) {
      result = number;
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

console.log(Max_number(numbers));
