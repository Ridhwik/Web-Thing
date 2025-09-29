const Person = {
    name: "Arthur",
    greet(){
       console.log(`Oh, ${this.name}`);
    }
}

Person.greet()

const otherRef = Person.greet
otherRef() // Lost of context due to change in reference 

const ref2 = Person.greet.bind({name: "John"});
ref2()
 // there are two more methods apply() and call() 
 //The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).
 //The call() method of Function instances calls this function with a given this value and arguments provided individually.