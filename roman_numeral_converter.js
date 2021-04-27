"use strict";

function convertToRoman(num) {
  // Convert the input Integer into its corresponding roman numeral
  // representation
  // Input: Integer
  // Output: String

  const digitsMap = ["I", "V", "X", "L", "C", "D", "M"];

  // convert Number into String representation and split based on
  // digit powers of 10
  const NUM_STR = String(num).split("");
  const NUM_LENGTH = numStr.length;
  let romanStr = "";

  for (let i = 0; i < numLength; i++){
    let digit = parseInt(numStr[i], 10);
    let digitsPlace = numLength - i;
    let placeBehind = false;
    let repeatBig = 1;
    let repeatSmall = 0;

    // find how many times to repeat each numeral and the order
    // in which to place them for each digits place
    switch(digit) {
      case 0:
        repeatBig = 0;
      case 1:
      case 2:
      case 3:
        repeatBig = digit;
        break;
      case 4:
        placeBehind = true;
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        repeatSmall = digit - 5;
        break;
      case 9:
        placeBehind = true;
        break;
    }


    if (placeBehind){
      romanStr += digitsMap[(digitsPlace - 1) * 2];
      romanStr += digitsMap[(digitsPlace - 1) * 2 + Math.round(digit/5)];
    } else {
      for (let j = 0; j < repeatBig; j++){
        romanStr += digitsMap[(digitsPlace - 1) * 2 + Math.round(digit/7)];
      }
      for (let j = 0; j < repeatSmall; j++){
        romanStr += digitsMap[(digitsPlace - 1) * 2];
      }
    }
  }

  return romanStr;
}
