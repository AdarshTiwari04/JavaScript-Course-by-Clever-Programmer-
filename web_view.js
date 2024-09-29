//const prompt = require("prompt-sync")();

const actors = [
  {
    name: "John Doe",
    age: 25,
    movies: ["Inception", "The Dark Knight", "Pulp Fiction"],
  },
  {
    name: "Jane Smith",
    age: 30,
    movies: [
      "The Godfather",
      "The Matrix",
      "Eternal Sunshine of the Spotless Mind",
    ],
  },
  {
    name: "Michael Brown",
    age: 40,
    movies: ["Casablanca", "Psycho", "The Shawshank Redemption"],
  },
  {
    name: "Leonardo DiCaprio",
    age: 35,
    movies: ["Avatar", "Titanic", "The Avengers"],
  },
  {
    name: "Robert Downey Jr.",
    age: 50,
    movies: ["Jurassic Park", "The Avengers", "Avengers: Endgame"],
  },
  {
    name: "Chris Evans",
    age: 38,
    movies: [
      "The Godfather",
      "Eternal Sunshine of the Spotless Mind",
      "The Matrix",
    ],
  },
];

let result = actors.filter((actor) => actor.age > 30);
let display_name = result.map((actor) => actor.name).join(", ");

web_view.innerHTML = `<h1> ${display_name} </h1>`;
