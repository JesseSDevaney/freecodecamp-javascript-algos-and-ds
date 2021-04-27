"use strict";

function telephoneCheck(str) {
  // invalid characters
  if (/[^\d-()\s]/g.test(str)){
    return false;
  }

  // if it only contains `(` but not `)` and vice versa
  let areaCodeOpenRegex = /\(/;
  let areaCodeCloseRegex = /\)/;
  if (areaCodeOpenRegex.test(str) ^ areaCodeCloseRegex.test(str)){
    return false;
  }

  // area code with `(` and `)` have only 3 digits inside
  let areaCodeRegex = /\(\d+\)/;
  let areaCodeMatch = str.match(areaCodeRegex);
  if(areaCodeMatch){
    if (areaCodeMatch[0].length !== 5){
      return false;
    }
  }

  // length of number should be between 10 and 11
  let numsOnly = str.replace(/[^\d]/g, "");
  if (numsOnly.length < 10 || numsOnly.length > 11){
    return false;
  }

  if (numsOnly.length === 11 && numsOnly[0] !== "1"){
    return false;
  }

  //check to make sure start of string is valid
  let validRegex = /^[\d\(]/;
  if (!validRegex.test(str)){
    return false;
  }

  return true;
}
