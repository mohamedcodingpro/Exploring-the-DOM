// index.js

// DOM references
const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const inputBox = document.querySelector('.theInputValue');
const fruitList = document.querySelector('.fruits');

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
