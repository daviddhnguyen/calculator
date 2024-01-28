//constants
const DEFAULT_VALUE = 0;

//start variables
let num1
let num2
let totalFlag
let operator
let displayValue

function startUp() {
    num1 = 0;
    num2 = 0;
    totalFlag = false;
    operator = '';
    displayValue = DEFAULT_VALUE;
};


//Event listeners
//Startup
window.addEventListener('DOMContentLoaded', () => {
    startUp();
    clearDisplay();
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
            if (displayValue == 0 || totalFlag == false) {
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
        startUp();
        updateDisplay();
    }; 
};

function userOperator() {
    const btnOperator = document.querySelectorAll('.operator');

    btnOperator.forEach(input => {
        input.addEventListener('click', () => {
            console.log(input.textContent);
            //any other operator that is not =
            if (operator !== '' && input.textContent !== '=' && operator !== '=') {
                num2 = displayValue;
                displayValue = operate(num1, num2, operator)
                num1 = displayValue;
                totalFlag = true;
                updateDisplay(displayValue)
            } else if (operator !== '=' && input.textContent == '=') { //executes = operator
                num2 = displayValue;
                displayValue = operate(num1, num2, operator)
                num1 = displayValue;
                updateDisplay(displayValue)
                operator = '';
                totalFlag = false;
            } else if (operator == '') {
                num1 = totalFlag == false ? displayValue: num1;
                operator = input.textContent;
                displayValue = '';
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