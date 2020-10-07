let dieRollsArray = [];
let roleDiceAmount = document.querySelector("#number-rolls");
let reset = document.querySelector("#reset-button");
let rollButton = document.querySelector("#roll-button");
let totalnumber = document.querySelector("total");
let showbutton = document.querySelector("show-all-rolls");
let numberRolls = 20;
let count = 0;

rollButton.addEventListener("click", function () {
  //console.log("Nice Roll!");
  let newRoleDiceAmount = Number(roleDiceAmount.innerHTML) + 1;
  roleDiceAmount.innerHTML = newRoleDiceAmount;
  if (Math.random() * 6 + 1) {
    console.log("Amount Rolled!");
    let newtotalnumberValue = Number(totalnumber.innerHTML) + 1;
    totalnumber.innerHTML = newtotalnumberValue;
  }
  dieRollsArray.push(roleDiceAmount);
});
showbutton.addEventListener("click", function () {
  const newDiceString = '<li class="dice1">' + numberRolled + "</li>";
  allRollsElement.innerHTML += newDiceString;
});
reset.addEventListener("click", function () {
  let newNumberofresetsValue = Number(numberofresets.innerHTML) + 1;
  numberofresets.innerHTML = newNumberofresetsValue;
  dice1.innerHTML = 0;
  dice2.innerHTML = 0;
  dice3.innerHTML = 0;
  dice4.innerHTML = 0;
});
