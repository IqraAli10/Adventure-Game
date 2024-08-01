import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDescrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDescrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    }
]);
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select your Opponent",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "What do you want to do?",
                choices: ["Attack", "fuel", "Run"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDescrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
            }
            if (num <= 0) {
                p1.fuelIncrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
            }
        }
        if (ask.opt == "Run") {
            console.log("You Loose, Better Luck Next Time..");
            process.exit();
        }
        if (ask.opt == "fuel") {
            p1.fuelIncrease();
            console.log(p1.name, ("fuel is"), p1.fuel);
        }
    }
} while (true);
// import inquirer from "inquirer";
// class Player {
//   name: string;
//   fuel: number = 100;
//   inventory: string[] = [];
//   constructor(name: string) {
//     this.name = name;
//   }
//   fuelDecrease(amount: number) {
//     this.fuel -= amount;
//   }
//   fuelIncrease() {
//     this.fuel = 100;
//   }
//   addItem(item: string) {
//     this.inventory.push(item);
//   }
// }
// class Opponent {
//   name: string;
//   fuel: number = 100;
//   weakness: string;
//   constructor(name: string, weakness: string) {
//     this.name = name;
//     this.weakness = weakness;
//   }
//   fuelDecrease(amount: number) {
//     this.fuel -= amount;
//   }
// }
// async function main() {
//   let player = await inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your daring adventurer's name?"
//     }
//   ]);
//   let p1 = new Player(player.name);
//   console.log(
//     `Welcome, ${p1.name}! Prepare to explore a post-apocalyptic wasteland filled with danger and potential rewards.`
//   );
//   let startingItems = await inquirer.prompt([
//     {
//       type: "checkbox",
//       name: "items",
//       message: "Scavenge for some starting supplies:",
//       choices: ["Rusty Wrench", "First-aid Kit", "Empty Water Bottle"]
//     }
//   ]);
//   startingItems.items.forEach((item: string) => p1.addItem(item));
//   let opponents = [
//     new Opponent("Feral Ghoul", "Headshot"),
//     new Opponent("Giant Rat", "Poison"),
//     new Opponent("Mutated Cyborg", "EMP Blast")
//   ];
// let condition=true;
//   do {
//     let opponentChoice = await inquirer.prompt([
//       {
//         type: "list",
//         name: "opponent",
//         message: "You encounter a menacing figure...",
//         choices: opponents.map((opponent) => opponent.name)
//       }
//     ]);
//     let selectedOpponent = opponents.find(
//       (opponent) => opponent.name === opponentChoice.opponent
//     );
//     if (!selectedOpponent) {
//       console.error("An error occurred. Please try again.");
//       break;
//     }
//     console.log(`Brace yourself! A ${selectedOpponent.name} approaches!`);
//     let actionChoice = await inquirer.prompt([
//       {
//         type: "list",
//         name: "action",
//         message: "What will you do?",
//         choices: [
//           "Attack",
//           "Run",
//           "Use Item (if available)" // Added option for using items
//         ]
//       }
//     ]);
//     if (actionChoice.action === "Attack") {
//       let attackResult = Math.floor(Math.random() * 2);
//       if (attackResult === 1) {
//         console.log("Your attack connects! The opponent falters.");
//         selectedOpponent.fuelDecrease(25);
//       } else {
//         console.log("The opponent dodges! You lose some fuel in the struggle.");
//         p1.fuelDecrease(10);
//       }
//     } else if (actionChoice.action === "Run") {
//       let escapeResult = Math.floor(Math.random() * 2);
//       if (escapeResult === 1) {
//         console.log("You manage to narrowly escape!");
//         break;
//       } else {
//         console.log("The opponent is too fast! You lose some fuel.");
//         p1.fuelDecrease(20);
//       }
//     } 
//     else if (actionChoice.action === "Use Item (if available)") {
//     if (p1.inventory.length === 0) {
//         console.log("You don't have any items to use!");
//       } else {
//         let itemChoice = await inquirer.prompt([
//           {
//             type: "list",
//             name: "item",
//             message: "Which item will you use?",
//             choices: p1.inventory
//           }
//         ]);
//         let selectedItem = itemChoice.item;
//         // if (selectedItem === "Rusty Wrench" && selectedOpponent.name === "Feral")
//         if (selectedItem === "Rusty Wrench" && selectedOpponent.weakness === "Headshot") {
//             console.log(
//                 "You land a critical blow with the wrench! The opponent is defeated!"
//             );
//             selectedOpponent.fuel = 0; // Simulate defeat
//         } else if (selectedItem === "First-aid Kit") {
//             console.log("You use the first-aid kit to heal yourself slightly.");
//             p1.fuelIncrease(); // Simulate health gain (replace with actual health if needed)
//         } else if (selectedItem === "Empty Water Bottle") {
//             console.log("Throwing an empty water bottle doesn't do much...");
//             p1.fuelDecrease(5); // Simulate wasted fuel
//         } else {
//             console.log("This item doesn't seem effective against this opponent.");
//         }
//       }
//     }}while(condition)}
