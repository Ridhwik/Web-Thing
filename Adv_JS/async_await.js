function fetchData() {
   return new Promise((reslove, reject) => {
    setTimeout(() => {
        const name = "Arthur"
        reslove({name: "Arthur", comment: `Oh, ${name}`})
    }, 3000);
   })
}

async function getData() {
    try {
        console.log("fetching Data from RDR2...... ");
        const data = await fetchData()
        console.log("Fetching done.");
         console.log(data);
         
        
    } catch (error) {
        console.warn(error);
        
    }
}

getData()