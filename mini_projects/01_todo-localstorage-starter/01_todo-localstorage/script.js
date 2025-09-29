document.addEventListener('DOMContentLoaded', () => {
let textInput = document.getElementById("todo-input");
let btn = document.getElementById("add-task-btn");
let listItem = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

tasks.forEach((task) => render(task));

btn.addEventListener('click', () => {
    const input = textInput.value.trim();
    if (input === "") return;

    const task = {
        id: Date.now(),
        text: input,
        condition: false
    }
    tasks.push(task);
    saveTask();
    render(task)
    textInput.value = ""

    
});



function render(task){
    const li = document.createElement('li')
    li.setAttribute('data-id', task.id)
    if (task.condition) {
        li.classList.add("completed")
    }
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;
    li.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            return;
        }
        task.condition = !task.condition;
        li.classList.toggle("completed");
        saveTask();
    });

    li.querySelector('button').addEventListener('click', (e) => {
        e.stopPropagation() // prevent toggle from firing 
        tasks = tasks.filter(t => t.id !== task.id)
        li.remove();
        saveTask();
    });
    listItem.appendChild(li);
}


function saveTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
})


