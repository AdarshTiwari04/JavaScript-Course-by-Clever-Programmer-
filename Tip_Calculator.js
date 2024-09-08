const prompt = require("prompt-sync")();

function calculateFoodTotal(a, b) {
  return `The Total Cost of the food : ${a + Math.floor((a * b) / 100)}`;
}

let food = Number(prompt("What is the cost of the food? "));
let tipPercentage = Number(prompt("What will be the tipPercentage? "));

const sum = calculateFoodTotal(food, tipPercentage);
console.log(sum);
