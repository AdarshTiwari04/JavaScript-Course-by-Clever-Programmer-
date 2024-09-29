const prompt = require("prompt-sync")();

//  A Advance Arrow function using multiple arguments,objects,template literals

// const introduction = (name, shirt, assets, debt) => {
//   const person = {
//     name: name,
//     shirt: shirt,
//     assets: assets,
//     debt: debt,
//   };
//   const intro = `Hello, My name is ${person.name} and I am wearing a ${
//     person.shirt
//   } shirt. My net worth is $${person.assets - person.debt}USD.`;
//   return intro;
// };

// const name = prompt("Enter your name: ");

// const shirt = prompt("Enter your favorite shirt color: ");

// const assets = Number(prompt("Enter your current assets: "));

// const debt = Number(prompt("Enter your current debt: "));

// console.log(introduction(name, shirt, assets, debt));

//  A Even more Advance Arrow function using multiple arguments,objects,template literals and Methods

const introduction = (name, shirt, assets, debt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: assets,
    debt: debt,
    networth: function () {
      // Here!! It is a function which calculate the net worth
      // this keyword refers to the particular value of the variable in the block scope
      return this.assets - this.debt;
    },
  };
  const intro = `Hello, My name is ${person.name} and I am wearing a ${
    person.shirt
  } shirt. My net worth is $${person.networth()}USD.`;
  // Here, person.networth() becomes a method which calculate the net worth
  // It is also called differently from normal object calls like person.shirt
  return intro;
};

const name = prompt("Enter your name: ");

const shirt = prompt("Enter your favorite shirt color: ");

const assets = Number(prompt("Enter your current assets: "));

const debt = Number(prompt("Enter your current debt: "));

console.log(introduction(name, shirt, assets, debt));
