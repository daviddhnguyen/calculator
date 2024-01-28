//constants
const DEFAULT_DISPLAY = 0;

//variables
let num1
let num2
let operator
let displayValue = DEFAULT_DISPLAY;

//Event listeners
//Startup
window.addEventListener('DOMContentLoaded', () => {
    newDisplay();
  });



//functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a*b;
};

function divide(a, b) {
    return a/b;
};

function operate(num1, num2, operator) {
    return operator(a, b);
};

function newDisplay() {
    const numbers = document.querySelectorAll('.number');
    displayValue = '';
    numbers.forEach(btnNum => {
        btnNum.addEventListener('click', () => {            
            //verifies only one decimal is allowed per entry
            if (btnNum.textContent !== '.' ||
            !displayValue.includes('.')) {
            displayValue += btnNum.textContent;

            document.querySelector('.display').textContent
            = displayValue;
            };
        });
    });
    return Number(displayValue);
}