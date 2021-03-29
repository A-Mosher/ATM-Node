"use strict";

const prompt = require('prompt-sync')();

const accountInfo = require('./account');

const atmMod = require('./atm');

//use switch case to navigate different atm menu options

function atmMenu(){
    let makeASelection = prompt("Please select from the following menu options. /n Enter 1 for: Current Balance /n Enter 2 to make a withdraw: /n Enter 3 to make a deposit /n Enter 4 to exit ")
    let menuResults;
    switch(makeASelection){
        case "1":
            menuResults = atmMod.getBalance;
            break;
        case "2":
            menuResults = atmMod.userWithdraw;
            break;
        case "3":
            menuResults = atmMod.userDeposit;
            break;
        case "4":
            console.log("Thank you, Goodbye.");
            break;
    }

}