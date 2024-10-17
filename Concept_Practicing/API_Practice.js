// Here this program show us the asynchronous behaviour of the code.

console.log(" Run First");

fetch("https://dog.ceo/api/breeds/image/random")
  .then((respone) => respone.json())
  .then((data) => console.log(" Run Second ", data));

console.log(" Run Third");
