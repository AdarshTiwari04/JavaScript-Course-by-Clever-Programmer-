const prompt = require("prompt-sync")();

// Answer

// const lettercounter = (phrase) => {
//   for (letters of phrase) {
//     count += 1;
//   }
// };

// const phrase = prompt(" Please Enter a String : ");
// let count = 0;
// lettercounter(phrase);

// console.log(`The phrase "${phrase}" has ${count} characters.`);

// Fuction to count characters (Method 1)

// const lettercounter = (phrase) => {
//   let result;
//   for (letter in phrase) {
//     result = Number(letter) + 1;
//   }
//   return { result }; // Here {result} is a quick trick to print answer as an object.
// };

// const phrase = prompt(" Please Enter a String : ");
// console.log(lettercounter(phrase));

// Function to count characters (Method 2)

const lettercounter = (phrase) => {
  return { result: phrase.length }; // Here {result} is a quick trick to print answer as an object.
};

const phrase = prompt(" Please Enter a String : ");
console.log(lettercounter(phrase));
