const orderSoup = () => console.log(" Soup is Ready ");

console.log(" You start the convo with your girlfriend 👧"); // Here, This line of code runs first !!
setTimeout(() => orderSoup(), 2000); // 1000 ms is 1s in real world. // And Finally this line of code runs!!
console.log(" Still speaking "); //Then, This line of code runs in Second !!

// Here It is shown that you can start a request before and your response is ready at some point of time Later.
