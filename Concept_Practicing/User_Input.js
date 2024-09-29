const prompt = require("prompt-sync")();

const food = Number(prompt("What is the cost of the Food? "));
const tipPercentage = Number(prompt("What will be the Tip Percentage? ") / 100);
const tipamount = food * tipPercentage;
const Total = food + tipamount;

console.log("Tip Amount:", tipamount);
console.log("Total Amount:", Total);
