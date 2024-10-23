//? Rules for using the async / await

//? 1. You must create a function to use async functions
//? 2. You must use the word "async" to use async functions
//? 3. You must use the word "await" for all the promises

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    isReady
      ? resolve("  The Soup is Ready !! ")
      : reject("  No Soup Today !! ");
  }, 2000);
});

//! Old Way of writing promises or api calls with .then() method.

// // console.log(promise); // it only shows Promise {} but to get the data inside the promise you have to use .then() instead.
// promise.then((data) => console.log(data)).catch((err) => console.log(err));

// // Here we have to use both .then() and .catch() because otherwise the promise will only get the resovle data and not the reject data if something gets wrong.

//$ New ES6 way of writing promises or api calls with async and await methods

// const fetchData = async () => {
//   try {
//     //  const url = "https://jsonplaceholder.typicode.com/users/1";
//     const response = await promise; // or await fetch(url)
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchData(); // calling the function to fetch data.

//@ Advanced or Different way of writing async and await methods

//@ Note: In this code, we are using async/await to handle promises. It makes the code cleaner and easier to read. But keep in mind that async/await can only be used in async functions, not regular functions.

// async function fetchData() {
//   try {
//     const response = await promise; // or await fetch(url)
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchData(); // calling the function to fetch data.

//! How to get data from a async function

let data = {
  rating: undefined,
  tip: undefined,
  pay: undefined,
  review: undefined,
};

const fetchData = async () => {
  try {
    const response = await promise;
    console.log(response);
    data.rating = 5;
    data.tip = 0.2;
    data.pay = 10;
    data.review = 5;
    return data; // return the data after setting it in the object.
  } catch (err) {
    console.log(err);
    data.rating = 1;
    data.tip = 0;
    data.pay = 0;
    data.review = 1;
    return data; // return the data after setting it in the object.
  }
};

// Here, fetchData() function is a promise and you can only retrieve data from a promise using two methods : 1. .then() and 2.Async/await() function .
// You cannot console.log fetchData() directly thinking it as a normal function and cannot use await because to use await , you have to first have a async function outside.

// fetchData().then((value) => console.log(value)); // calling the function to fetch data.

const display = async () => {
  const data = await fetchData();
  console.log(data);
};

display(); // calling the function to fetch data and display it.
