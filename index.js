// index.js

// DOM references
const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const removeMessageButton = document.querySelector('.removeMessageButton');
const inputBox = document.querySelector('.theInputValue');
const fruitList = document.querySelector('.fruits');
const newFruitInput = document.querySelector('.newFruitInput');
const addFruitButton = document.querySelector('.addFruitButton');

// Display message after 3 seconds
setTimeout(function() {
    myMessage.innerText = 'This is a message in the DOM!';
}, 3000);

// Show message from input box
theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
    }
});

// Remove message from DOM
removeMessageButton.addEventListener('click', function() {
    myMessage.innerText = '';
});

// Toggle dark mode on myMessage click
myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode');
});

// List of fruits
const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

// Create list of fruits dynamically
fruits.forEach(fruit => {
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
});

// Add new fruit to the list
addFruitButton.addEventListener('click', function() {
    if (newFruitInput.value.trim().length > 0) {
        const li = document.createElement('li');
        li.innerText = newFruitInput.value;
        fruitList.appendChild(li);
        newFruitInput.value = ''; // clear the input box after adding
    }
});
