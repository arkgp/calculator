'use strict';

let displayValue = "";
const numbers = document.querySelectorAll('.numbers');
const erase = document.querySelector('#erase');
const deleteButton = document.querySelector('#delete');

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
    
        case '-':
            subtract(num1, num2);
            break;

        case '*':
            multiply(num1, num2);
            break;

        case '/':
            divide(num1, num2);
            break;                
    }
}

function display() {
    const displayScreen = document.querySelector('#user-input div');
    displayScreen.textContent = displayValue.replace(/(.)(?=(\d{3})+$)/g,'$1,');
}

numbers.forEach( (number) => {
    number.addEventListener('click', function() {
        if (displayValue.length < 15) {
            displayValue += number.innerText;
            display();
        }
        
    });
});

erase.addEventListener('click', function() {
    displayValue = "0";
    display();
    displayValue = "";
});

deleteButton.addEventListener('click', function() {
    if (displayValue.length > 1) {
        const substring = displayValue.substring(0, displayValue.length - 1);
        displayValue = substring;
        display();
    } else {
        displayValue = "0";
        display();
        displayValue = "";
    }
});