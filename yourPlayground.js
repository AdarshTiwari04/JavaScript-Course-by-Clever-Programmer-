console.log("Hello World");
console.log("Adarsh Tiwari");

//! Variable Description
const Name = "Adarsh";
console.log(Name);

//@ JavaScript Variable

//@ var : It is outdated & not used and his global scope.
//@ const : It is used if you know that the variable is not going to change and it has a global scope. const variable must be initialized.
//@ let : : It is used if you know that the variable is going to change and it does not have global scope. let variable cannot be initialized.

const sentence = "How are you doing today!!";
console.log(sentence);

//? What are Operators
//? + - * / **

//? const food = 20;
//? const tipPercentage = 0.2;
//? const tipAmount = food * tipPercentage;

//? console.log(tipAmount);

//? How to take input from a user?

//? const prompt = require("prompt-sync")();

//? const food_2 = prompt("What is the cost of the item? ");
//? const tipPercentage_2 = 0.2;
//? const tipAmount_2 = food_2 * tipPercentage_2;

//? console.log(tipAmount_2);

//$ How to take input from Multiple User ?

//$ const food_3 = prompt("What is the cost of the item? ");
//$ const tipPercentage_3 = prompt("What is the Tip Percentage ?") / 100;
//$ const tipAmount_3 = food_3 * tipPercentage_3;
//$ console.log(tipAmount_3);

//* How to display the Answer with 'Alert()'

//* alert (tipAmount_3) is not working, Use console.log instead .

//! This is how we use Typecasting in JavaScript

//! const food_4 = Number(prompt("What is the cost of the item? "));
//! const tipPercentage_4 = Number(prompt("What is the Tip Percentage ? ") / 100);
//! const tipAmount_4 = food_4 * tipPercentage_4;
//! const Total = food_4 + tipAmount_4;

//! console.log(Total);

//@ Data Types

//@ strings �� "Hello", 'World', "123", "2.5"
//@ numbers 1, 5, 10, 100, 2.5
//@ arrays []
//@ boolean true, false
//@ objects {}

/* 
Example:-

'100'+'20' = 10020

'100'+20 = '10020'

100+20 = 120
*/

//? Maths Methods

/* 
Math.floor
Math.ceil
Math.random
*/

//$ Conditional Operations

//$ ==,===,>=,<=,!=,!==

//* Functions

/*
function name(parameters) {
code
}
    examples: 
    
function greet(name) {
  console.log("Hello " + name + ", Nice to meet you");
}
greet("Adarsh");
*/

//! Template literals

/*
Examples: 
`Hello ${name}, Nice to meet you`
*/

//@ String Interpolation

/*
Referening a variable within a string. In this case, ${name} will be replaced with the value of the name.
*/

//? ES6 Way of writing functions (Arrow functions)

/*
Examples 1:
? Arrow functions with explicit return meaning with curly braces
const myFunction = (name) =>
{
  console.log(`Hello ${name} Nice to meet you`);
}

Example 2:
? Arrow functions with implicit return like if-else statements
const sumArrow = (a,b) => a+b;
*/

//$ Array

/*

const myArray = ['Apple', 'Banana', 'Orange'];

console.log(myArray[0]); // Apple
*/

//* How to push a Element in the array

/*
myArray.push('Mango');
console.log(myArray); //* ['Apple', 'Banana', 'Orange', 'Mango']
*/

//! How to use slice in the array

/*
! It starts from 0 up to less than 2 meaning [0,1]
console.log(myArray.slice(0, 2)); // ['Apple', 'Banana']

! It starts from 2 up to end meaning [2,3]
console.log(myArray.slice(2)); // ['Orange', 'Mango']
*/

//? How to use join in the array

/*
? It returns an array as a string:
console.log(myArray.join(", ")); // [Apple, Banana] as a string.

//@ Array Method

/*
Examples:
myArray.pop() // Removes the last element
myArray.shift() // Removes the first element
myArray.unshift('Kiwi') // Adds the element at the beginning
myArray.length() // Returns the length of the array
my array.indexOf() //  Returns the index of any element
*/

//$ Object

/*

$ Key: Values (pair)

Example:
const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

$ Access Object Properties with dot notation
console.log(person.name); // John Doe

$ Access Object Properties with bracket notation
console.log(person["age"]); // 30

$ Assign Object Properties with dot notation
person.phone = "7004065287";

$ Assign Object Properties with bracket notation

person["phone"] = '7004065287';

console.log(person);

*/

//? Loops

/*

? for loop:(With index)
const fruits = ["Apple", "Banana", "Orange",]
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

? for loop:(Without index)
?Here, fruit is the key or the variable and fruits is the array to print.
?you can change the name of fruit (key) to any like vari
for (const fruit of friuts) {
  console.log(fruit);
}
  */

//* How to loop in a string phrase

/*
const phrase = "Hello World";
for (let i = 0; i < phrase.length; i++) {
  console.log(phrase[i]);
}
*/

//! for... of VS for....in

/*
! for... in :Normally it loops through properties names/ keys or the index of the array but can be used otherwise also. It is commonly used for objects.

Examples:
  const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

for (const key in person) {
  console.log(key);//! it shows the property name.
}

for (const key in person) {
  console.log(person[key]);//! it show the value of the property.
}


! for... of : it loops through values of the Array or a string . It is used for array or iterable / strings .

Examples:

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number); //! It shows the value of the array.
}

*/

//@ Short trick for taking an input in an array

//@ let numbers = Array.from({ length: 5 }); // Create an array of length 5

//@ let arr = new Array(length).fill(0);

//@ let numbers = Array.from({ length: 5 }).fill(0); // Create an array of length 5 and fills it with the value 0

//$ Different way of taking input from the user

//$ let numbers = [];

//$ for (let i = 0; i < 5; i++) {
//$   numbers.push(Number(prompt(`Enter number ${i + 1}: `)));
//$ }

//! Short Notes:

//! let frequency = {}; // initializes an empty object called frequency.

//! let Array = []; // initializes an empty array called Array with undefined values.

//? Higher Order Functions

/*
map - Map Function loops through the entire array and returns always in array. Here, we don't have to create a extra array to store or push the result into.
filter - Filter Function loops through the entire array and returns always in array after matching the given conditions.
reduce - Reduce Function loops through the entire array and sum all the vaue then returns it as a array.

! .map Syntax:
const numbers = [1, 2, 3, 4, 5];
numbers.map(variable_name => functionality)

Examples 1:
? map functions with explicit return meaning with curly braces
const numbers = [1, 2, 3, 4, 5];

numbers.map(number => {
  console.log(number)
  console.log(number * 2)
  }

Example 2:
? map functions with implicit return like if-else statements
const numbers = [1, 2, 3, 4, 5];

numbers.map(number => console.log(number * 2)

! .filter Syntax:
const numbers = [1, 2, 3, 4, 5];
numbers.filter(variable_name => condition) 

Example 1:
? filter functions with implicit return if-else condition
const numbers = [1, 2, 3, 4, 5];

numbers.filter((number) => number>4)

! .reduce Syntax:
const numbers = [1, 2, 3, 4, 5];
numbers.reduce(variable_name => functionality, number)

Example 1:
? .reduce functions with implicit return like if-else statements
const numbers = [1, 2, 3, 4, 5];

numbers.reduce((prev,curr) => prev+curr , 0)

? .reduce functions with explicit return meaning with curly braces
const numbers = [1, 2, 3, 4, 5];

numbers.reduce(function(prev, curr){
  return prev+curr
})

*/

//@ DOM - Document Object Mode

//@ It is basically a way  that allows JavaScript and other programming languages to interact with HTML.

/*
!Basically after connecting your javascript file to HTML file , you can call or get the access of a specific div element from javascript file itself.

!Syntax:
!element_id or tag_id .innerHTML = functionality

Examples:
web_view.innerHTML = `<h1> ${result[0].name} </h1>`;

*/

//? Short Note :

//? For printing the entire object to the dom , you can also use the JSON.stringify function to print the object.

/*

Examples:
web_view.innerHTML = `<h1> ${JSON.stringify(result)} </h1>`;

*/

//$ DOM Manuplation : ( Don't take a tag dirtectly to manipulate instead take the div ID of the element to change it's innerHTML like <h1> tags etc.)

/*

@@@@ To get the text inside a specific div element from the DOM to the javascript file.

!Syntax:
let newDiv = document.getElementById("Title");

console.log(newDiv.innerText);


@@@@ To change the text inside a specific div element from the javascript file to the DOM.

!Syntax:

let newDiv = document.getElementById("Title");

newDiv.innerText = "This is a new title";



@@@@ To Change the HTML from the javascript file

!Syntax:

let newDiv = document.getElementById("Title");

newDiv.innerHTML = `<h1>Title</h1>`;

@@@@ To change the styles from the javascript file

!Syntax:

let newDiv = document.getElementById("Title");

newDiv.style.color = "red";
newDiv.style.fontSize = "24px";

*/
