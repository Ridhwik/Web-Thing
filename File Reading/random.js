const fs = require('fs');
const filePath = './tasks.json'

const loadTask = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);   
        
    } catch (error) {
        return []
    }
}

const saveTask = (tasks) => {

    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);

}

const addTask = (task) => {

    const tasks = loadTask();
    tasks.push({ task });
    saveTask(tasks);
    console.log("Saved The Task!!")

}

const listTask = () => {
    const tasks = loadTask();

    if (tasks.length === 0) {
        console.log("No tasks found!");
        return;
    }

    console.log("Your Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.task}`);
    });

} 

const deleteTask = (index) => {

   const tasks = loadTask();

    const taskIndex = parseInt(index) - 1;

    if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
        console.log("Invalid task number!");
        return;
    }

    const deletedTask = tasks.splice(taskIndex, 1);

    saveTask(tasks);

    console.log(`Deleted task: ${deletedTask[0].task}`);

}


const command = process.argv[2]
const argument = process.argv[3]
const argument0 = process.argv[0] // Contains node File Location 
const argument1 = process.argv[1] // Contains the location of the current script


console.log(command)
console.log(argument)
console.log(argument0)
console.log(argument1)




if (command === 'add') {
    addTask(argument);
}else if (command === 'list') {
    listTask();
}else if(command === 'delete'){
    deleteTask(argument);
}else{
    console.log("Invalid Activity");
}