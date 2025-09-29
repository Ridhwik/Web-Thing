// EXAMPLE 1

document.getElementById("changeTextButton").addEventListener('click', function () {
   document.getElementById("myParagraph").textContent = "CONTENT CHANGE KAR DIYA BHAAAAIIIIIII"
    document.getElementById("myParagraph").style.backgroundColor = "blue";
    document.getElementById("myParagraph").style.padding = "10px";
    document.getElementById("myParagraph").style.color = "pink";

    
})



// Example 2

document.getElementById("highlightFirstCity").addEventListener('click', function () {
    let list = document.getElementById("citiesList")
    // list.firstElementChild.className = "highlight"
    list.firstElementChild.classList.add("highlight")

    
})

//Example 3

document.getElementById("changeOrder").addEventListener('click', function () {
    document.getElementById("coffeeType").textContent = "Espresso"
    document.getElementById("coffeeType").style.backgroundColor = "brown"
    document.getElementById("coffeeType").style.padding = "10px"
})

//Example 4
document.getElementById("addNewItem").addEventListener('click', function () {

    let newItem = document.createElement('li')
    newItem.textContent = "PEACE AND MONEY"
    let shop = document.getElementById("shoppingList")
    shop.appendChild(newItem);
})

//Example 5
document.getElementById("removeLastTask").addEventListener('click', function () {
    document.getElementById("taskList").lastElementChild.remove();
    
})

//Example 6
document.getElementById('clickMeButton').addEventListener('mouseover', function () {
    alert('Something happened')
})

//Example 7
document.getElementById('teaList').addEventListener('click', function (event) {
   
    if (event.target && event.target.matches('.teaItem')) {
        alert(`${event.target.textContent} is selected`)
    }
    
})


//Example 8
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let feed = document.getElementById('feedbackInput').value;
    
    document.getElementById('feedbackDisplay').textContent =`The Feedback is:${feed}`;
    
    
})


//Example 9
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('domStatus').textContent = "DOM Fullly loaded"
})

//Example 10
document.getElementById("toggleHighlight").addEventListener('click', function () {
    document.getElementById("descriptionText").classList.toggle("highlight")
    document.getElementById("descriptionText").style.color = "red"

    
    
})