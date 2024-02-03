//constants
const DEFAULT_VALUE = 0;

//start variables
let num1
let num2
let total
let operator
let displayValue

function startUp() {
    num1 = null;
    num2 = null;
    total = null;
    operator = null;
    displayValue = DEFAULT_VALUE;
};


//Event listeners
//Startup
window.addEventListener('DOMContentLoaded', () => {
    startUp();
    clearAllDisplay();
    clearNumber();
    numberInput();
    userOperator();
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
                if (displayValue == 0 || (operator !== null && operator !== '=')) {
                    displayValue = '';
                }
                //resets calc if last operator was = and next button was number
                if (operator == '=' && total == null) {
                    operator = null;
                }

                if (operator == '=' && total !== null) {
                    operator = null;
                    displayValue = '';
                }

            //verifies only one decimal is allowed per entry
            //not allowing 2nd decimal value to be added. Need to fix. 
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

function clearAllDisplay() {
    document.querySelector('.allClear').onclick = () => {
        startUp();
        updateDisplay();
    }; 
};

function clearNumber() {
    document.querySelector('.clear').onclick = () => {
        displayValue = DEFAULT_VALUE;
        updateDisplay(displayValue);
    }; 
}

function userOperator() {
    const btnOperator = document.querySelectorAll('.operator');

    btnOperator.forEach(input => {
        input.addEventListener('click', () => {
            //console.log(input.textContent);
            //checks last operator and current operator input
            if (operator == null && input.textContent !== '=') {
                operator = input.textContent;
                num1 = displayValue;
                //displayValue = 0; // move this to number button section
            } else if (operator == null && input.text == '=') {
                operator = null;
            } else if (operator !== '=' && num1 !== null) {
                num2 = displayValue;
                total = operate(num1,num2,operator);
                updateDisplay(total);
                operator = input.textContent;
                num1 = total;
                displayValue = total;
                //displayValue = 0; // move this to number button section
            } else if (operator == '=') {
                operator = input.textContent;
            }
        });
    });
};

//display is 0
//user enters num1
    //num1 flag as False
//user clicks = operator
    //check operator != '' || != '=', false ignore
//user clicks any other operator
    //save num1 save in displayVariable
    //set num1 flag as True
    //save operator
//resets displayVariable
//user enters num2
//user clicks any operator, run operate on num1 and num2 with previous operator
    //saves total to num1
    //if operator is '=', set num1 flag as False
//user clicks