function outer() {
    let count = 8

    return function () {
        count++;
        return count;
    }
}


let val = outer();
console.log(val());
console.log(val());
console.log(val());
console.log(val());
console.log(val());
