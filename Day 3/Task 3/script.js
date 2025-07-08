//Task Three\

let currentInput = '0';
let previousInput = '';
let operation = null;
let resetInput = false;

function updateDisplay() {
    const display = document.getElementById('Answer');
    display.value = currentInput;
}

function EnterNumber(number) {
    if (currentInput === '0' || resetInput) {
        currentInput = number;
        resetInput = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function EnterOperator(op) {
    if (operation !== null) EnterEqual();
    previousInput = currentInput;
    operation = op;
    resetInput = true;
}

function EnterEqual() {
    if (operation === null || resetInput) return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operation) {
        case '+':
            result = prev+current;
            break;
        case '-':
            result = prev-current;
            break;
        case '*':
            result = prev*current;
            break;
        case '/':
            result = prev/current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operation = null;
    resetInput = true;
    updateDisplay();
}

function EnterClear() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    updateDisplay();
}

updateDisplay();


