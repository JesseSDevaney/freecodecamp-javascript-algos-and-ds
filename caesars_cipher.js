"use strict";

// version 1
function rot13(str) {
  const rot13Map = {
    "A": "N",
    "B": "O",
    "C": "P",
    "D": "Q",
    "E": "R",
    "F": "S",
    "G": "T",
    "H": "U",
    "I": "V",
    "J": "W",
    "K": "X",
    "L": "Y",
    "M": "Z",
    "N": "A",
    "O": "B",
    "P": "C",
    "Q": "D",
    "R": "E",
    "S": "F",
    "T": "G",
    "U": "H",
    "V": "I",
    "W": "J",
    "X": "K",
    "Y": "L",
    "Z": "M"
  };

  let decipheredStr;
  let strArr = str.split(""); // decompose string into each char
  strArr = strArr.map(char => /\w/.test(char) ? rot13Map[char] : char);
  decipheredStr = strArr.join("");
  return decipheredStr;
}
