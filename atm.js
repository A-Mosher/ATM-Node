"use strict";

//console.log('hello world');

const prompt = require('prompt-sync')();

const accountInfo = require('./account');



//console.log(accountInfo.userPin);
//console.log(accountInfo.userBalance);


function getBalance(){
      console.log("Your current balance is " + accountInfo.userBalance + ".");
       return(accountInfo.userBalance)
  }
getBalance();

function userWithdraw(amountToWithdraw, currentBalance){
     
     let userInput = prompt("How much would you like to withdraw?");
     let amountToWithdraw = userInput;
     let currentBalance = accountInfo.userBalance;
     let makeAWithdraw = (amountToWithdraw - currentBalance);
     console.log("You have completed your withdraw.");
     return makeAWithdraw;

}

 function userDeposit(amountToDeposit, currentBalance){

    let userInput = prompt("How much would you like to deposit?");
    let amountToDeposit = userInput;
    let currentBalance = accountInfo.userBalance;
    let makeADeposit = (amountToDeposit + currentBalance);
    console.log("You have completed your Deposit.");
    return makeADeposit;

}


let userInput = prompt ("Please enter your Personal Identification Number.");

function validatePin(userInput){

    userInput = prompt ("Please enter your Personal Identification Number.");

    if(userInput === accountInfo.userPin){
        console.log("Correct PIN")
        return true;
    }

    else{
        alert("Incorrect PIN entered. Please try again.");
    }
}

let userInput = prompt ("Please enter your Personal Identification Number.");

validatePin(userInput);

//console.log("correct PIN");
//return("correct PIN");

module.exports = {
    validatePin: validatePin,
    userDeposit: userDeposit,
    userWithdraw: userWithdraw,
    getBalance: getBalance,

}