#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


///////////////////class for player and opponent////////////////
class Player{
    name : string;
    constructor(name : string){
        this.name = name;
    } 
    }

class Opponent{
    name : string;
    constructor(name : string){
        this.name = name;
    }
}


///////////////for player name and select opponent///////////////////

let player = await inquirer.prompt([
    {
        name : "name",
        type : "input",
        message : chalk.bold.italic.magenta("Please Enter Your Name:")
    },
])


let opponent = await inquirer.prompt([
    {
        name : "select",
        type : "list",
        message : chalk.bold.italic.green("Please Select Your Opponent!"),
        choices : ['Skeleton' , 'Grainy', 'Zombie']

    },
])

////////////collect data///////////
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
                    


if(opponent.select == "Skeleton"){
    console.log(`${chalk.bold.magenta(p1.name)} VS ${chalk.bold.yellow(o1.name)}`)};

 let ask = await inquirer.prompt(
        {
          name : "choices",
          type : "list" ,
          message : chalk.bold.italic.green("Select Your Option"),
          choices : ["Attack", "Drink", "Run"],
        });


    if(ask.choices === "Attack"){
        let fuel = 100
        console.log(chalk.bold.red("attack enemy"));
    } 
    if(ask.choices === "Drink"){
        console.log(chalk.bold.red("drink portion"));   
    }
    if(ask.choices === "Run Away"){
        console.log(chalk.bold.red("warning! fuel low please refuel soon"));   
    }
    

