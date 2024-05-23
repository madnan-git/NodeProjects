#! /usr/bin/env node

import inquirer from "inquirer";

let myBal = 8000;
console.log(myBal);
let myPin = 4560;
let tryAgain: number = 1;
while (tryAgain < 4) {

    const pinAns = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your pin code: ",
            type: "number"
        }
    ]);
    if (pinAns.pin === myPin) {
        console.log("Great! You have passed correct Pin code.");
        tryAgain = 4;

        const optAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select option to perform task",
                type: "list",
                choices: ["Cash Withdraw", "Fast Cash", "Balance Check"]
            }
        ]);
        if (optAns.operation === "Cash Withdraw") {
            const withdrawAmt = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number"
                }
            ]);
            if (withdrawAmt.amount <= myBal) {
                myBal -= withdrawAmt.amount;
                console.log(`Your remaining Balance is ${myBal}. `);
            }
            else {
                console.log("Insufficent Balance.");
            }
        }
        else if (optAns.operation === "Fast Cash") {
            const fastcashOpt = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Choose one option in a list:",
                    type: "list",
                    choices: ["1000", "2000", "5000", "10000"]
                }
            ]);
            if (fastcashOpt.amount === "1000" && fastcashOpt.amount <= myBal) {
                myBal -= fastcashOpt.amount;
                console.log(`Your remaining Balance is ${myBal}. `);
            }
            else if (fastcashOpt.amount === "2000" && fastcashOpt.amount <= myBal) {
                myBal -= fastcashOpt.amount;
                console.log(`Your remaining Balance is ${myBal}. `);
            }
            else if (fastcashOpt.amount === "5000" && fastcashOpt.amount <= myBal) {
                myBal -= fastcashOpt.amount;
                console.log(`Your remaining Balance is ${myBal}. `);
            }
            else if (fastcashOpt.amount === "10000" && fastcashOpt.amount <= myBal) {
                myBal -= fastcashOpt.amount;
                console.log(`Your remaining Balance is ${myBal}. `);
            }
            else {
                console.log("Insufficent Balance.");
            }
        }
        else if (optAns.operation === "Balance Check") {
            console.log(`Your Balance is ${myBal}. `);
        }
    }
    else {
        tryAgain++
        if (4 - tryAgain > 0) {
            console.log(`You have entered wrong pin code. You have ${4 - tryAgain} attempt left.`);
        } else { console.log("Sorry! Your Pin is blocked."); }
    }
}