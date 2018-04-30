// Error because you can't use an interface to create an object
// let myWarrior = new WarriorInterface();
class Soldier {
    // health: number;
    // strength: number;
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        // this.health = health;
        // this.strength = strength;
    }
    receiveDamage(dmg) {
        this.health -= dmg;
    }
}
const somePerson = new Soldier(100, 25);
console.log(somePerson.health);
class Viking {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(dmg) {
        this.health -= dmg;
        console.log("FOR ODIN!");
    }
}
const viking1 = new Viking("Ragnarr the Terrible", 200, 25);
class Samurai {
    constructor(weapon, health, strength) {
        this.weapon = weapon;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(dmg) {
        this.health -= dmg;
        console.log("You fight well.");
    }
}
const samurai1 = new Samurai("Bow & Arrow", 200, 15);
function fight(warriorA, warriorB) {
    warriorA.receiveDamage(warriorB.strength);
    warriorB.receiveDamage(warriorA.strength);
    console.log(`After the fight: ${warriorA.health} vs. ${warriorB.health}`);
}
fight(somePerson, viking1);
fight(viking1, samurai1);
class Painter {
    constructor(health, style) {
        this.health = health;
        this.style = style;
    }
    receiveDamage(dmg) {
        this.health -= dmg;
    }
}
