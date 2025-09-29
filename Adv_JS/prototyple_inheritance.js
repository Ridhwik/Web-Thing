function Person(name) {
    this.name = name 
}

Person.prototype.greet = function() {
    return `Hey, This is ${this.name}`
}

let var1 = new Person("Syfer")
console.log(var1.greet());
