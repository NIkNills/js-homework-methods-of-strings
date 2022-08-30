"use strict";

let firstSentence = "But you have no right to call me a murderer";
let secondSentence = "Because they could stand that these were not monsters.";
let thirdSentence = "And I want to remember it. I never want to forget it.";

function stringCutter(str) {
  return str.slice(0, 30) + "...";
}

function registerInvertion(str) {
  return str
    .split("")
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");
}

function stringParsig(str) {
  let obj = {};

  obj.allSymbols = str.length;

  obj.symbolsWithoutSpaces = str
    .split("")
    .filter((item) => item.trim() !== "").length;

  obj.quantityOfWords = str.split(" ").length;

  obj.sentenceType =
    str[str.length - 1] === "!"
      ? "exclamation"
      : str[str.length - 1] === "?"
      ? "question"
      : str[str.length - 1] === "."
      ? "statement"
      : null;

  return obj;
}

function moderation(str, bannedWord) {
  return str
    .split(" ")
    .map((item) =>
      item.toLowerCase() !== bannedWord.toLowerCase()
        ? item
        : "*".repeat(bannedWord.length)
    )
    .join(" ");
}
