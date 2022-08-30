"use strict";

let firstSentence = "But you have no right to call me a murderer";
let secondSentence = "Because they could stand that these were not monsters.";
let thirdSentence = "And I want to remember it. I never want to forget it.";

function stringCutter(str) {
  return str.slice(0, 30) + "...";
}

console.log(stringCutter(firstSentence));
console.log(stringCutter(secondSentence));
console.log(stringCutter(thirdSentence));

function registerInvertion(str) {
  return str
    .split("")
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");
}

console.log(registerInvertion("WTF"));
console.log(registerInvertion("Be my Valentine"));
console.log(registerInvertion("C&C Red Alert 3"));
