// const redDiv = document.getElementById("Red");
// const YellowDiv = document.getElementById("Yellow");
// const GreenDiv = document.getElementById("Green");

// redDiv.onclick = () => {
//   console.log(" Red clicked ");
// };

// YellowDiv.onclick = () => {
//   console.log("Yellow clicked ");
// };

// GreenDiv.onclick = () => {
//   console.log("Green clicked ");
// };

const squares = document.querySelectorAll(".colorSquare");
const timesClicked = { Red: 0, Yellow: 0, Green: 0 };

squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];

    // console.log(`${square.value} clicked`);
  };
});

const clear_game = document.getElementById("resetButton");

clear_game.onclick = () => {
  squares.forEach((square) => {
    timesClicked[square.value] = 0;
    square.innerText = square.value;
  });
};
