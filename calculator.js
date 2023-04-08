let firstOperand;
let secondOperand;
let sum;
let displayValue = "";
let chosenOperator;

const keyReferences = [];

const mainText = document.querySelector('#screen-text');
const operationText = document.querySelector('#operation-text');

const subtractBtn = document.querySelector('#subtract');
const addBtn = document.querySelector('#add');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const dotBtn = document.querySelector('#dot');
const equalBtn = document.querySelector('#equal');

const removeBtn = document.querySelector('#remove');
const clearAllBtn = document.querySelector('#clear-all');



function operate(num1, num2, operator){
    switch(operator){
        case "add":
            add(num1,num2);
            break;
        case "subtract":
            subtract(num1,num2);
            break;
        case "divide":
            divide(num1,num2);
            break;
        case "multiply":
            multiply(num1,num2);
            break;
        default:
            break;
    }
}

function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function divide(num1,num2){
    return num1/num2;
}
function multiply(num1,num2){
    return num1*num2;
}

function updateCurrentValue(e){
    //e.target.id.slice(-1)
    displayValue += e.target.id.slice(-1);
    updateScreen();
}

function updateScreen(){
    mainText.textContent = displayValue;
}

function clear(){
    displayValue = '';
    mainText.textContent = '0';
}

function removeChar(){
    displayValue = displayValue.slice(0, displayValue.length-1);
    updateScreen();
}

// Get the num-key references and add event listeners
for(let i=0; i<10;i++){
    keyReferences.push(document.querySelector(`#key${i}`));
}

for(let key of keyReferences){
    key.addEventListener('click', updateCurrentValue);
}

// Event listeners for operators and clear-remove
clearAllBtn.addEventListener('click', clear);
removeBtn.addEventListener('click', removeChar);