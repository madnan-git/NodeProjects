#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter the First Number: ", type: "number", name: "firstNumber" },
    { message: "Enter the Second Number: ", type: "number", name: "secondNumber" },
    {
        message: "Select on of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modules", "Power", "Percentage"],
    }
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Modules") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else if (answer.operator === "Power") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else if (answer.operator === "Percentage") {
    console.log(`Percentage Calculates - works Total Value is First Number and rate of % on Second Number:`);
    console.log((answer.firstNumber * answer.secondNumber) / 100);
}
else {
    console.log("Please select valid operator");
}
console.log("Please Try Again the same command for another Calculation!, Thanks");
