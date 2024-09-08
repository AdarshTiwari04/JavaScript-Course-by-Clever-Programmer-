const prompt = require("prompt-sync")();

let weather;
console.log("Please tell if it is raining outside or the sky is clear");

weather = prompt("Enter weather (rainy/clear): ");

if (weather == "rainy") {
  console.log("Grab your umbrella ���");
} else {
  console.log("Wear your sunglasses ��");
}
