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

//! for... of VS for....in VS .forEach method

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

! forEach method : It is not a loop but a method used when you want to perform an action on each element of the array. It doesn't return a new array, but it modifies the original array and it has 3 build-In arguments that can be passed and used to modify the original array. 

Examples 1:

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number); //! It shows the value of the array.
});

Examples 2:

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(`Number: ${number}, Index: ${index}`); // It shows the value and index of the array.
});

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

@@@@ To add a onClick event handlers to the buttons 

!Syntax:

let button = document.getElementById("myButton");

//! Always use a function or arrow function to tell the functionality of the button because it will not work if you don't make it a function.

button.onclick = () =>console.log("Button clicked!");

@@@@ To add a Event handler to a button.

!Syntax:

let button = document.getElementById("myButton");

button.addEventListener("click", () => console.log("Button clicked!"));

@@@@ To add a Event handler to multiple buttons.

!Syntax:

let buttons = document.getElementsByClassName("myButton");

for(let i=0; i<buttons.length; i++){
  buttons[i].addEventListener("click", () => console.log("Button " + (i+1) + " clicked!"));
}

@@@@ To select all the button or div with its class attribute 

!Syntax:

let buttons = document.querySelectorAll(".myButton");// Here we select all the buttons whose class name is "myButton" but to select all of them , we have to use a .class_name(dot) to tell the computer/system that we are entering a class name instead of a id.

buttons.forEach((button) => {
  button.onclick = () => {
    console.log(`${button.value} clicked`);
  };

*/

//$ How to innerText value of a Input element

/*

!Syntax:

let input = document.getElementById("myInput");

console.log(input.value); //! You have to use the .value attribute on the input element to take it's value into account.

*/

//? How to fix the decimal value of a Input element and Display it on the DOM

/*

!Syntax:

let input = document.getElementById("myInput");

console.log(Number(input.value).toFixed(2)); //! You have to use the .toFixed(2) attribute on the input element to display the decimal value upto 2 decimal places.

*/

//? How to give comma in the Displayed value on the DOM ( Speacial case for United States )

/*

!Syntax:

let input = document.getElementById("myInput");

let value = Number(input.value).toLocaleString('en-US'); //! You have to use the .localestring to convert the display value according to the United States Number System or differnt Countries.

*/

//? How to throw an error if the condition is false

/*

!Syntax:

let input = document.getElementById("myInput");

if(Number(input.value) < 0){
  throw new Error("Input value must be greater than or equal to 0");
}

*/

//@ Short Note:

//@ You can not use the .toLocaleString and .toFixed methods on the Display element Simultaneously.

//$ API:-

//? API stands for Application Programming Interface and It lets your app communicate with other services to fetch data. The rules and protocols are described in the following section below :-
/* 
- APIs are provided by different organizations or companies.
- APIs are used to interact with web services, databases, APIs, or other applications.
- APIs are written in different programming languages such as JavaScript, Java, Python, Ruby, etc.
- APIs are designed to be easy to use and understand.
- APIs are designed to be consistent and well-documented.
- APIs are designed to follow best practices for security, performance, and reliability.

//? Types of API Categories: // Most Common Ones:
- RESTful APIs: These APIs use HTTP methods like GET, POST, PUT, DELETE, and PATCH to perform CRUD (Create, Read, Update, Delete) operations.
- Websockets APIs: These APIs use WebSockets to enable real-time communication between clients and servers.
- Real-time APIs: These APIs use technologies like WebSockets or Server-Sent Events (SSE) to provide real-time updates to clients.
- Streaming APIs: These APIs use technologies like WebSockets or Server-Sent Events (SSE) to stream data in real-time.
- Data APIs: These APIs provide access to data stored in databases or other storage systems.
- Machine Learning APIs: These APIs provide access to machine learning models for predicting or analyzing data.
- Geolocation APIs: These APIs provide access to geolocation services for retrieving user location information.
- Payment Processing APIs: These APIs provide access to payment processing services for processing payments.
- API Gateways: These APIs act as gateways between clients and APIs, managing authentication, authorization, and routing requests.


//? API Protocols:
- REST: Representational State Transfer (REST) is a software architectural style for designing APIs that allows clients to interact with a server using standard HTTP methods like GET, POST, PUT, DELETE, and PATCH.

- Websockets: Websockets are a protocol that allows two parties to communicate continuously and in real-time using a single TCP connection. Websockets are used by web services to enable real-time communication between clients and servers.

- Real-time APIs: Real-time APIs use technologies like WebSockets or Server-Sent Events (SSE) to provide real-time updates to clients. Real-time APIs are designed to be efficient and scalable, allowing clients to receive notifications and updates in real-time.

- Streaming APIs: Streaming APIs use technologies like WebSockets or Server-Sent Events (SSE) to stream data in real-time. Streaming APIs are designed to be efficient and scalable, allowing clients to subscribe to specific streams of data and receive updates in real-time.

- Data APIs: Data APIs provide access to data stored in databases or other storage systems. Data APIs are designed to be flexible and scalable, allowing clients to interact with the data in a consistent and efficient manner.

- Machine Learning APIs: Machine Learning APIs provide access to machine learning models for predicting or analyzing data. Machine Learning APIs are designed to be flexible and scalable, allowing clients to integrate machine learning functionality into their applications.

- Geolocation APIs: Geolocation APIs provide access to geolocation services for retrieving user location information. Geolocation APIs are designed to be flexible and scalable, allowing clients to integrate geolocation functionality into their applications.

- Payment Processing APIs: Payment Processing APIs provide access to payment processing services for processing payments. Payment Processing APIs are designed to be flexible and scalable, allowing clients to integrate payment processing functionality into their applications.

- API Gateways: API Gateways act as gateways between clients and APIs, managing authentication, authorization, and routing requests. API Gateways are designed to be flexible and scalable, allowing clients to securely access and interact with APIs.

*/

//? What is a Promise?

//! A Promise is an object that represents the eventual completion or failure of an asynchronous operation. Promises are used to handle asynchronous code and provide a way to handle the result or error of the asynchronous operation.

//? Difference between Asynchronous and Synchronous Code Execution

/*

- Asynchronous: Asynchronous code is written to handle multiple tasks simultaneously. It allows the program to continue executing other tasks while waiting for the result of an asynchronous operation.

- Synchronous: Synchronous code is written to handle multiple tasks sequentially. It waits for the result of one task before executing the next task.

*/

//? What is Fetch API ??

//! Fetch API is a modern JavaScript interface for making HTTP requests. It provides a global fetch() function that takes a URL as an argument and returns a Promise that resolves to a Response object. The Response object provides methods to access the response body, status, and headers.

//? Fetch API to get data from an API

/*

!Syntax:

fetch("https://api.example.com/data")
.then((response) => response.json()) // .then() method is chained to the fetch() call to handle the response asynchronously.
.then((data) => console.log(data)) // returns a Response object

! Some other methods to chain to fetch method :-
.catch((error) => console.error("Error:", error))
.finally(() => console.log("Fetch completed"));

*/

//@ Short Trick for Replacing or appending images or strings in DOM Manipulation

/*

!Syntax:

let element = document.getElementById("myElement");

element.innerHTML += "<div>New Div</div>"; // Adds New inner HTML content with the existing inner HTML content.

element.innerHTML = "<div>New Div</div>"; // replaces the inner HTML content of the element with a New One.

*/

//$ How to Loop through an Object

/*

!Syntax:

let myObj = {
  name: "John",
  age: 30,
  city: "New York"
}
  
Object.keys(myObj)//! This method in JavaScript allows you to get an array of all the keys of a given object. The JS feature is designed to loop over all the properties of an object because it is a simple way to access and manipulate each key individually.

*/

//? The difference between info.powerstats.stat and info.powerstats[stat]

//! The difference between info.powerstats and info.powerstats[stat] is that info.powerstats,stat is used for static properties that means stat is explicitly the name of the property.
//! For example, info.powerstats.strength would access the strength property of powerstats
//! but In info.powerstats[stat] , firstly evaluates the value of the stat property , and then that property is accessed.
//! For example, if stat = 'strength', then info.powerstats[stat] is equivalent to info.powerstats.strength.

//@ Asynchronous Programming Interface

//@ In JavaScript, there are two main types of APIs:

//@ 1. Callbacks: This is a simple callback function that is passed as an argument to another function. When the other function is finished executing, it calls the callback function. Callbacks are commonly used when you want to perform an action after another action has completed.

//@ 2. Promises: Promises are an alternative to callbacks. They represent the eventual completion or failure of an asynchronous operation. Promises provide a way to handle asynchronous code and provide a way to handle the result or error of the asynchronous operation. Promises are used when you want to perform an action and then continue executing other code after the action has completed.

//! Callbacks Example:

/*

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();

  setTimeout(() => {
    console.log("I'm waiting now.");
  }, 2000);
}

greet("John", () => {
  console.log("Callback function called.");
});

*/

//! Promises Example:

/*

const greet = (name) => {
  return new Promise((resolve, reject) => {
    console.log(`Hello, ${name}!`);
    setTimeout(() => {
      resolve("Promise resolved successfully.");
    }, 2000);
  })
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
};

*/

greet("John");

//! Promises and Async/Await Example:

/*

const greet = async (name) => {
  try {
    console.log(`Hello, ${name}!`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("I'm waiting now.");
    return "Async/Await resolved successfully.";
  } catch (error) {
    console.error(error);
    throw error;
  }
  // .then((message) => {
  //   console.log(message);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
};

greet("John")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

  */

//$ How to use or mimic asynchronous programming in javascript

//$ setTimeout(() => {function}, 2000) // setTimeout is  a function in JavaScript that allows you to execute a piece of code or a function after a specified delay.

//! Ternary operator

//! The ternary operator is a shorthand for an if-else statement. It is used to conditionally assign a value to a variable.

//! condition ? expressionIfTrue : expressionIfFalse;

/*

!!! Example:

let x = 10;
let result = x > 5 ? "Greater than 5" : "Less than or equal to 5";

console.log(result); // Output: Greater than 5

*/

//? Rules for using the async / await

//? 1. You must create a function to use async functions
//? 2. You must use the word "async" to use async functions
//? 3. You must use the word "await" for all the promises

//! Old Way of writing promises or api calls with .then() method.

//! // console.log(promise); // it only shows Promise {} but to get the data inside the promise you have to use .then() instead.
//! promise.then((data) => console.log(data)).catch((err) => console.log(err));

//! // Here we have to use both .then() and .catch() because otherwise the promise will only get the resovle data and not the reject data if something gets wrong.

//$ New ES6 way of writing promises or api calls with async and await methods

//$ const fetchData = async () => {
//$   try {
//$     //  const url = "https://jsonplaceholder.typicode.com/users/1";
//$     const response = await promise; // or await fetch(url)
//$    console.log(response);
//$   } catch (err) {
//$     console.log(err);
//$   }
//$ };

//$ fetchData(); // calling the function to fetch data.

//@ Note: In this code, we are using async/await to handle promises. It makes the code cleaner and easier to read. But keep in mind that async/await can only be used in async functions, not regular functions.

//! How to get data from a async function

//! let data = {
//!   rating: undefined,
//!   tip: undefined,
//! };

//! const fetchData = async () => {
//!   try {
//!     const response = await promise;
//!     console.log(response);
//!     data.rating = 5;
//!     data.tip = 0.2;
//!     return data; // return the data after setting it in the object.
//!   } catch (err) {
//!     console.log(err);
//!     data.rating = 1;
//!     data.tip = 0;
//!     return data; // return the data after setting it in the object.
//!   }
//! };

// Here, fetchData() function is a promise and you can only retrieve data from a promise using two methods : 1. .then() and 2.Async/await() function .
// You cannot console.log fetchData() directly thinking it as a normal function and cannot use await because to use await , you have to first have a async function outside.

// fetchData().then((value) => console.log(value)); // calling the function to fetch data.

//! const display = async () => {
//!   const data = await fetchData();
//!   console.log(data);
//! };

//! display(); // calling the function to fetch data and display it.
