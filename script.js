//constants
const DEFAULT_VALUE = 0;

//variables
let num1
let num2
let operator = '';
let displayValue = DEFAULT_VALUE;

//Event listeners
//Startup
window.addEventListener('DOMContentLoaded', () => {
    clearDisplay()
    numberInput()
    userOperator()
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

function operate(a, b, operator) {  
    a = Number(a);
    b = Number(b);
    
    if (operator == '+') {
        return add(a,b);
    } else if (operator == '-') {
        return subtract(a,b);
    } else if (operator == '*') {
        return multiply(a,b);
    } else if (operator == '/') {
        return divide(a,b);
    };
};

function numberInput() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(btnNum => {
        btnNum.addEventListener('click', () => {            
            //removes initial 0 value
            if (displayValue == 0) {
                displayValue = '';
            }
            //verifies only one decimal is allowed per entry
            if (btnNum.textContent !== '.' ||
            !displayValue.includes('.')) {
            displayValue += btnNum.textContent;
            updateDisplay(displayValue);
            };
        });
    });
    return Number(displayValue);
};

function updateDisplay(text = DEFAULT_VALUE) {
    document.querySelector('.display').textContent = text;
};

function clearDisplay() {
    document.querySelector('.clear').onclick = () => {
        displayValue = DEFAULT_VALUE;
        updateDisplay();
    }; 
};

function userOperator() {
    const btnOperator = document.querySelectorAll('.operator');

    btnOperator.forEach(input => {
        input.addEventListener('click', () => {
            if (operator !== '' && operator !== '=') {
                num2 = displayValue;
                displayValue = operate(num1, num2, operator)
                updateDisplay(displayValue)
            } else if (operator !== '=' && input.textContent == '=') {
                num2 = displayValue;
                displayValue = operate(num1, num2, operator)
                updateDisplay(displayValue)
                operator = '';
            }
            num1 = displayValue;
            operator = input.textContent;
            displayValue = '';

        })
    })
    
}