// Promises are used to simulate the async behaviour or manually create async behaviour in JS 
// Takes to parameters, (reslove, reject) and have 3 states: pending, fulfilled, rejected 

function fetchData() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            let success = false
            if (success) {
                reslove("Data fetching is done")
            }
            else{
                reject("Not fetched at all")
            }
        }, 3000);
    })
}

// let var1 = fetchData()
// console.log(var1);



fetchData()
    .then((Data) => console.log(Data))
.catch((error) => console.warn(error))