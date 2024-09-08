/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

const prompt = require("prompt-sync")();

const add = (a, b) => {
  return `The Sum of the Two number are : ${a + b}`;
};

const sub = (a, b) => {
  return `The Difference of the Two number are : ${a - b}`;
};

const div = (a, b) => {
  if (b == 0) {
    return "Cannot divide by zero!";
  } else {
    return `The Solution after division of the Two number are : ${Math.floor(
      a / b
    )}`;
  }
};

const mul = (a, b) => {
  return `The Solution after multiplication of the Two number are : ${a * b}`;
};

/* 
  TODO: create a function that console logs the result of any of the above operations.
*/

const Solution = (choice) => {
  let a = Number(prompt(" Please enter the First number : "));
  let b = Number(prompt(" Please enter the Second number : "));

  if (choice == 1) {
    console.log(add(a, b));
  } else if (choice == 2) {
    console.log(sub(a, b));
  } else if (choice == 3) {
    console.log(div(a, b));
  } else if (choice == 4) {
    console.log(mul(a, b));
  }
};

console.log("Please enter a corresponding value to perform the specific task.");
console.log(" Add : 1 , Subtraction : 2 , Division : 3 , Multiplication : 4 ");
const choice = Number(prompt(" Enter your choice : "));

Solution(choice);
