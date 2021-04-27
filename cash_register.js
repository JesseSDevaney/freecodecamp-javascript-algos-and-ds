"use strict";

function checkCashRegister(price, cash, cid) {
  const currencyArr = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE",
                       "QUARTER", "DIME", "NICKEL", "PENNY"];
  const valueArr = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

  let change = cash - price;
  let closedStatus = true;
  const changeArr = [];

  // loop through currencyArr taking from the largest bills before cycling
  // to smaller bills for change
  for (let i = 0; i < currencyArr.length && change !== 0; i++){
    // current currency name
    let currency = currencyArr[i];
    // current currency unit value
    let unitValue = valueArr[i];
    // cash available in cid for that currency
    let amtAvailable = cid[cid.length - (i + 1)][1];
    let amountToTake = 0;

    if (change >= unitValue && amtAvailable !== 0){
      if(change >= amtAvailable){
        amountToTake = amtAvailable;
        change -= amountToTake;
        change = change.toFixed(2); // round to two decimal places
      } else {
        closedStatus = false; // we did not take all of the available amount
        amountToTake = Math.floor(change/unitValue) * unitValue;
        change -= amountToTake;
        change = change.toFixed(2); // round to two decimal places
      }

      changeArr.push([currency, amountToTake]);
    }
  }


  if (change != 0){
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  } else if (closedStatus){
    return {
      status: "CLOSED",
      change: cid
    };
  } else {
    return {
      status: "OPEN",
      change: changeArr
    };
  }
}
