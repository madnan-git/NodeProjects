#! /usr/bin/env node

import inquirer from "inquirer";

let playAgain = true;

while (playAgain) {

    const randomNumber: number = Math.floor(Math.random() * 6 + 1);

    const answer = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: "Please guess a number between 1-6:"
        }
    ])

    if (answer.userGuessedNumber > 6 || answer.userGuessedNumber < 1) {
        console.log("Number should be between 1 to 6")
    } else {
        if (answer.userGuessedNumber === randomNumber) {
            console.log("Congratulations! You guessed right number.")
        }
        else {
            console.log("Sorry! You guessed wrong number.")
            console.log(`Random number is: ${randomNumber} and Your guessed number is: ${answer.userGuessedNumber}`)
        }
    }

    const playAgainAnswer = await inquirer.prompt([
        {
            name: "playAgain",
            type: "confirm",
            message: "Do you wish to play again?"
        }
    ])
    playAgain = playAgainAnswer.playAgain;
}