//     name     type   value
//      |        |       |
let  myNumber: number = 42;

myNumber = 2000;

// Error because the variable's type is "number"
// myNumber = "2000";

let now = new Date();

let needsCoffee: boolean = false;

needsCoffee = true;
needsCoffee = Boolean(1);

// Error because the variable's type is "boolean"
// needsCoffee = 1;


// other types
// string
// void (null & undefined)
// any

// Use "any" sparingly because it defeats the purpose of TypeScript
let craziness: any = 42;

craziness = {};


let foods: Array<string> = [];
let albums: string[] = [ "Revolver" ];

foods.push("pizza");

// Error because the array is supposed to be of strings
// let albums: string[] = [true];

// Error because the array is supposed to be of strings
// foods.push(999);


function quadPower (x: number) {
  return x * x * x * x;
}

console.log( quadPower(20) );

// Error because x is supposed to be a number
// console.log( quadPower("hello") );

function calculateAverage (arr: Array<number>) {
  const total =
    arr.reduce((sum, oneNumber) => {
      return sum + oneNumber;
    });

  return total / arr.length;
}

console.log( calculateAverage([50, 100, 75]) );

// Error because the array needs to be of numbers
// console.log( calculateAverage(["a", "b", "c"]) );
