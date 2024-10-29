// Things You should know before creating the App

/* 

1. While loop:-

for loops ---> when you KNOW how many times you want to loop
while loops ----> when you are NOT SURE how many times you want to loop

let nums =0

while(nums<5)
{
console.log("Looping")
num++; // This runs the loop 5 times until the condition ie might 
}

Examples:

let finished=true

while(finished==true)
{
  // code to execute
  finished=false; // change this to false to stop the loop
}

2 .addEventListener:-

// DOM :- Document Object Model

let playDiv = document.getElementById('play');

! Method 1:-
! When the button is clicked, it will execute the code inside the Arrow function

playDiv.onclick = () => {
  console.log(" Yo Yo ");
  }

! Method 2:-
! When the button is clicked, it will execute the function inside the curly braces {}

playDiv.addEventListener('click', function() {
  console.log(" Yo Yo ");
});

@ Why you should use .addEventListerner other than .onclick

@1 . addEventListener allows you to attach multiple event handlers to the same element for the same event type.
@
!  Using addEventListener
@ element.addEventListener('click', firstFunction);
@ element.addEventListener('click', secondFunction); // Both will run when clicked
@
!  Using onclick
@ element.onclick = firstFunction;
@ element.onclick = secondFunction; // Only secondFunction will run, first is overwritten
@
@2. Support for Other Event Types like "mouseover", "keyup", "scroll" than onclick is limited to the click.


//** Most Important use of addEventListener is this :- 

* document.addEventListener('keydown', function(e) { //! document.addEventListener is a method used to attach an event listener to the entire HTML document
*  if (e.key == "q"){
*    console.log(" You pressed Q!");
*  }
*    else
*   {
*    console.log("Not Q!");
*    }
* }); 

3. <audio> tags

<audio> tags are used to play audio files in HTML

Example : 

<audio id="myAudio" src="audio.mp3"></audio> // Inside the HTML document

let myAudio = document.getElementById("myAudio");// Inside the JavaScript document
myAudio.play(); // Plays the audio

*/

class Game {
  constructor(player1Name = "pl1", player2Name = "pl2") {
    // Flag that indicates if the game is over or not
    this.theEnd = false;

    this.player1 = {
      name: player1Name,
      health: 100,
    };

    this.player2 = {
      name: player2Name,
      health: 100,
    };
  }

  //Starts the game and logs out the status of players
  start() {}

  //Console log the winner of the battle
  declareWinner() {}

  //If player 1 or player 2 health is below 0
  //Mark theEnd true, to stop the game
  checkTheEnd() {}

  //Console log the name and health of both players
  //Ex: Player 1: 100 | Player 2: 50
  playerStatus() {}

  //Reset health of player 1 and player 2 to 100
  //Reset theEnd to false
  reset() {}

  //Generate a random number between 1 and 10 using Math.random()
  //Use that number to decrease health from player 2
  pl1AttackPl2() {}

  //Generate a random number between 1 and 10 using Math.random()
  //Use that number to decrease health from player 1
  pl2AttackPl1() {}

  //Generate a random number between 1 and 5 using Math.random()
  //Use that number to increase health of player 1
  pl1Heal() {}

  //Generate a random number between 1 and 5 using Math.random()
  //Use that number to increase health of player 2
  pl2Heal() {}
}

// Initialize the class here
// Call the start function of the game
