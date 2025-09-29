
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.hitesh = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.hitesh());
let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.hitesh());


class Vehicle  {
    constructor(make, model) {
        this.make = make 
        this.model = model
    }

    start(){
        return `${this.make} car's and the model ${this.model} is the best`
    }
}


class Car extends Vehicle {
    constructor(make, model,HP, torque) {
        super(make, model);
        this.HP = HP
        this.torque = torque
    }

    drive(){
        return `${this.make} ${this.model} car have ${this.HP} HP and ${this.torque} torque `;
    }
}


let car1 = new Vehicle("Tesla", "X1")
// console.log(car1.start());


let car2 = new Car("Tesla","X1",2000, 7000)
// console.log(car2.drive());

// Encapsulation

class Bankaccount {
     #balance = 0;
    
    deposit(amount){
        this.#balance += amount
         return this.#balance;
       
    }

    getBalance(){
        return `Your balance is ${this.#balance}`
    }
}

let acc1 = new Bankaccount()
// console.log(acc1.deposit(500000));
// console.log(acc1.getBalance());


// Abstraction

class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }

  pressStartButton() {
    let msgone = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgone} + ${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());



// Polymorphism

class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());



// static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3)); ERROR 

// console.log(Calculator.add(2, 3)); CORRECT


// GETTERS AND SETTERS 

class BankAccount {

    #_salary;

    constructor(name,salary) {
        if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
        this.name = name
        this.#_salary = salary
    }

    get salary(){
        return `You are not allowed to see salary ${this.#_salary}`;
    }

    set salary(value){
        if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this.#_salary = value;
    }

    }
}


let person = new BankAccount("Tom Cruse", 1000000)
console.log(person.salary);
person.salary = 20000;
console.log(person.salary);


