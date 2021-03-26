"use strict";

//console.log('hello world');

const prompt = require('prompt-sync')();

const accountInfo = require('./account');



//console.log(accountInfo.userPin);
//console.log(accountInfo.userBalance);


// function getBalance(){}

// function withdraw(){}

// function deposit(){}

 function validatePin(){
 let userInput = prompt ("Please enter your Personal Identification Number.");


 let pinEntered;
if(pinEntered === accountInfo.userPin){
    return true;
    }
else(pinEntered !== accountInfo.userPin);{
    alert("Incorrect PIN entered. Please try again.");
    userInput;
    }
}
//console.log("correct PIN");
//return("correct PIN");

module.exports = {
    accountInfo: accountInfo,
}