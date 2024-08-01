import inquirer from "inquirer";

class Player{
    name:string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDescrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}

class Opponent{
    name:string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDescrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    }
])

let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select your Opponent",
        choices: ["Skeleton", "Alien", "Zombie"]

    }
])

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    if (opponent.select == "Skeleton"){
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "What do you want to do?",
                choices: ["Attack","fuel", "Run"]

            }
        ])
        if (ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if (num > 0){
                p1.fuelDescrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                
            }

            if (num <= 0){
                p1.fuelIncrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
            }
        }
        if(ask.opt == "Run"){
            console.log("You Loose, Better Luck Next Time..");
            process.exit()
        }
        if(ask.opt== "fuel"){
            p1.fuelIncrease()
            console.log(p1.name,( "fuel is" ),p1.fuel);
    }
}
}
while(true)

