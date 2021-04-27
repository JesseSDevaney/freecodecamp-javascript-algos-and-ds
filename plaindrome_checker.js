"use strict";

function palindrome(str){
  // check if the alphanumeric characters in `str` represent a palindrome
  // input: String
  // output: Boolean
  str = str.replace(/[\W_]/g, "");
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;
  while(i < j){
    if(str[i] !== str[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log("Expected: true\nOutcome: " + palindrome("eye") + "\n");
console.log("Expected: false\nOutcome: " + palindrome("not a palindrome") + "\n");
console.log("Expected: true\nOutcome: " + palindrome("A man, a plan, a canal. Panama") + "\n");
console.log("Expected: true\nOutcome: " + palindrome("never odd or even") + "\n");
console.log("Expected: false\nOutcome: " + palindrome("almostomla") + "\n");
console.log("Expected: true\nOutcome: " + palindrome("My age is 0, 0 si ega ym.") + "\n");
console.log("Expected: false\nOutcome: " + palindrome("1 eye for of 1 eye.") + "\n");
console.log("Expected: true\nOutcome: " + palindrome("0_0 (: /-\ :) 0-0") + "\n");
