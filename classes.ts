interface WarriorInterface {
  health: number;
  strength: number;

  receiveDamage(dmg: number);
}

// Error because you can't use an interface to create an object
// let myWarrior = new WarriorInterface();

class Soldier implements WarriorInterface {
  // health: number;
  // strength: number;

  constructor(
    public health: number,
    public strength: number
  ) {
    // this.health = health;
    // this.strength = strength;
  }

  receiveDamage(dmg: number) {
    this.health -= dmg;
  }
}

const somePerson = new Soldier(100, 25);
console.log(somePerson.health);


class Viking implements WarriorInterface {
  constructor (
    public name: string,
    public health: number,
    public strength: number
  ) { }

  receiveDamage (dmg: number) {
    this.health -= dmg;
    console.log("FOR ODIN!");
  }
}

const viking1 = new Viking("Ragnarr the Terrible", 200, 25);


class Samurai implements WarriorInterface {
  constructor (
    public weapon: string,
    public health: number,
    public strength: number
  ) { }

  receiveDamage(dmg: number) {
    this.health -= dmg;
    console.log("You fight well.");
  }
}

const samurai1 = new Samurai("Bow & Arrow", 200, 15);


function fight (warriorA: WarriorInterface, warriorB: WarriorInterface) {
  warriorA.receiveDamage( warriorB.strength );
  warriorB.receiveDamage( warriorA.strength );

  console.log(`After the fight: ${warriorA.health} vs. ${warriorB.health}`);
}

fight(somePerson, viking1);
fight(viking1, samurai1);


class Painter {
  constructor(
    public health: number,
    public style: string
  ) { }

  receiveDamage(dmg: number) {
    this.health -= dmg;
  }
}
