/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const BillInput = document.getElementById("billTotalInput");
const TipInput = document.getElementById("tipInput");
const NumberOfPeopleDiv = document.getElementById("numberOfPeople");
const PerPersonTotalDiv = document.getElementById("perPersonTotal");

// Get number of people from number of people div

let NumberOfPeople = Number(NumberOfPeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const BillAmount = Number(BillInput.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  const TipAmount = Number(TipInput.value) / 100;

  // get the total tip amount
  const TotaltipAmount = BillAmount * TipAmount;

  // calculate the total (tip amount + bill)
  const Total = BillAmount + TotaltipAmount;

  // calculate the per person total (total divided by number of people)
  const PerPersonTotal = Total / NumberOfPeople;

  // update the perPersonTotal on DOM & show it to user
  PerPersonTotalDiv.innerText = `$${PerPersonTotal.toFixed(2)}`;
};

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  NumberOfPeople += 1;

  // update the DOM with the new number of people
  NumberOfPeopleDiv.innerText = NumberOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (NumberOfPeople <= 1) {
    throw "Hey! You cannot have less than 1 person!";
    return; // exit the function if number of people is already 1 or less.
  }

  // decrement the amount of people
  NumberOfPeople -= 1;

  // update the DOM with the new number of people
  NumberOfPeopleDiv.innerText = NumberOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
};
