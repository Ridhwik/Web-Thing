let computer = {cpu: 64};
let lenovo = {
    screen: "HD",
    __proto__: computer,
};
let tomHardware = {};

// console.log(computer);
// console.log(`computer ` , computer.__proto__);
// console.log(`lenovo ` , lenovo.__proto__);



let genericCar = {
    typres: 4,
    streering: 1   
};

let tesla = {
    Driver: "AI"
};

Object.setPrototypeOf(tesla, genericCar)

console.log(`tesla`, Object.getPrototypeOf(tesla));
