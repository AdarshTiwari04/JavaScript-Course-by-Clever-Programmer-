const prompt = require("prompt-sync")();

// Method 1:-

const wordfrequency = (phrase) => {
  let frequency = {};
  let array = phrase.split(" ");
  for (let words of array) {
    if (words in frequency) {
      frequency[words] += 1;
    } else {
      frequency[words] = 1;
    }
  }
  return frequency;
};

const phrase = prompt("Enter a sentence: ");
console.log(wordfrequency(phrase));

// Method 2:-

// const wordfrequency = (phrase) => {
//   phrase += " ";
//   let frequency = {};
//   let words = "";
//   for (let letter of phrase) {
//     if (letter == " ") {
//       if (words in frequency) {
//         frequency[words] += 1;
//       } else {
//         frequency[words] = 1;
//       }
//       words = "";
//     } else {
//       words += letter;
//     }
//   }
//   return frequency;
// };

// const phrase = prompt("Enter a sentence: ");
// console.log(wordfrequency(phrase));

// Method 3:-

// const wordfrequency = (phrase) => {
//   let frequency = {};
//   let words = "";
//   for (let [index, letter] of [...phrase].entries()) {
//     // A string in JavaScript is an iterable object, but it doesn't have an entries() method like arrays do.
//     if (index == phrase.length - 1 && letter != " ") {
//       words += letter;
//     } // Just to add the last letter of the string
//     if (letter == " " || index + 1 == phrase.length) {
//       if (words in frequency) {
//         frequency[words] += 1;
//       } else {
//         frequency[words] = 1;
//       }
//       words = "";
//     } else {
//       words += letter;
//     }
//   }
//   return frequency;
// };

// const phrase = prompt("Enter a sentence: ");
// console.log(wordfrequency(phrase));
