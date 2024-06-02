#! /usr/bin/env node

import inquirer from "inquirer"

console.log("Welcome To-Do List!")

let to_do_list = []
let condition = true 

while(condition) {

let addTask = await inquirer.prompt(
    [
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your to-do list?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Are you sure you want to add more in your to-do list?",
            default: "false"
        }
    ]
)

to_do_list.push(addTask.todo)
condition = addTask.addMore
console.log(to_do_list);
}