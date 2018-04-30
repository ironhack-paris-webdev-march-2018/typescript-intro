class Greeting {
  constructor(public message: string) {

  }

  sayHi() {
    return `Hello, ${this.message}!`;
  }
}

const myGreeter = new Greeting('world');
const otherGreeter = new Greeting('Céline');

console.log(myGreeter.message);

console.log(myGreeter.sayHi());
console.log(otherGreeter.sayHi());
