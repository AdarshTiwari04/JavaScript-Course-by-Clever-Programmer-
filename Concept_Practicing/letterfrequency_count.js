const prompt = require("prompt-sync")();

const letterFrequency = (phrase) => {
  console.log(phrase);
  let frequency = {};
  for (const letter of phrase) {
    if (letter in frequency == true) {
      // 'in' is used to check the key is present in an object.
      // letter is checked in frequency object if any the same name as letter was present in frequency object.It returns in only true or false.
      frequency[letter]++; // incremental opertaors
    } else {
      frequency[letter] = 1;
    }
  }
  return { frequency };
};

const phrase = prompt("Please Enter a String : ");

console.log(letterFrequency(phrase));
