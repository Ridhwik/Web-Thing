function Car(maker, type) {
    this.type = type
    this.maker = maker
    
}

let car = new Car("BMW", "M4")
// console.log(car);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}


let tea = new Tea("Masala Tea")
// console.log(tea);
// console.log(tea.describe());


function Animal(species) {
    this.species = species;
    
}

Animal.prototype.sound = function() {
    return `${this.species} makes a sound `
}

let lion = new Animal("lion")
// console.log(lion.sound());


function Drink(name) {

    if(!new.target){
        throw new Error("NEW keyword laga le bhai");
        
    }

    this.name = name
}

// let drink = Drink("Vodka")
let drink = new Drink("Vodka")

