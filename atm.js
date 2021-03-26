"use strict";

//console.log('hello world');

const prompt = require('prompt-sync')();

const accountInfo = require('./account');



//console.log(accountInfo.userPin);
//console.log(accountInfo.userBalance);


//  function getBalance(){
//      console.log("Your current balance is " + accountInfo.userBalance + ".");
//       return(accountInfo.userBalance)
//  }

// function withdraw(amountToWithdraw, currentBalance){
//}

// function deposit(amountToBeDeposited, currentBalance){

// }
let userInput = prompt ("Please enter your Personal Identification Number.");

function validatePin(userInput){

    userInput = prompt ("Please enter your Personal Identification Number.");

    if(userInput === accountInfo.userPin){
        console.log("Correct PIN")
        return true;
    }

    else(userInput !== accountInfo.userPin)
        alert("Incorrect PIN entered. Please try again.");

}
//let userInput = prompt ("Please enter your Personal Identification Number.");

validatePin(userInput);

//console.log("correct PIN");
//return("correct PIN");

// module.exports = {
   // accountInfo: accountInfo,
//}