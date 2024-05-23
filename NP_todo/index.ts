#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];

let cond = true;

while (cond) {
    let taskAns = await inquirer.prompt([
        {
            name: "todo",
            message: "What do you want to do in your todos",
            type: "list",
            choices: ["Add Task", "Read Task", "Update Task", "Delete Task"]
        }])
    if (taskAns.todo === "Add Task") {
        const addTask = await inquirer.prompt([
            {
                name: "add",
                message: "Pleas add in your todos:",
                type: "input"
            }])
        todos.push(addTask.add);
        console.log(todos);
    }
    if (taskAns.todo === "Read Task") {
        console.log(todos);
    }
    if (taskAns.todo === "Update Task") {
        const updateTask = await inquirer.prompt([
            {
                name: "update",
                message: "Pleas select to update in your todos:",
                type: "list",
                choices: todos.map(todo => todo)
            }])
        let updateTodo = await inquirer.prompt({
            name: "updateItem",
            type: "input",
            message: "update todo",
        });
        let newTodo: any = todos.filter(val => val != updateTodo.updateItem)
        todos = [...newTodo, updateTodo.updateItem]
        console.log(todos)
    }

    //     {
    //         name: "addMore",
    //         message: "Dp you want to add more!",
    //         type: "confirm",
    //         default: "true"
    //     }
    // ])
    // todos.push(addTask.todo);
    // console.log(todos);

    // cond = addTask.addMore;
}