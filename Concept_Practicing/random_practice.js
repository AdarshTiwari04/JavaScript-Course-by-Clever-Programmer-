const prompt = require("prompt-sync")();

const random_fruits = (fruits) => {
  random_Index = Math.floor(Math.random() * fruits.length);
  return fruits[random_Index];
};

const fruits = Array.from({ length: 5 }).fill("");

fruits.forEach((fruit, index) => {
  fruits[index] = prompt(`Enter fruit ${index + 1}: `);
});
console.log(random_fruits(fruits));
