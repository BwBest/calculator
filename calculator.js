let firstOperand;
let secondOperand;
let sum;
let displayValue = "";

const keyReferences = [];
const mainText = document.querySelector('#screen-text');
const operationText = document.querySelector('#operation-text');



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

function updateScreen(e){
    //e.target.id.slice(-1)
    displayValue += e.target.id.slice(-1);
    mainText.textContent = displayValue;
}

// Get the key references and add event listeners
for(let i=0; i<10;i++){
    keyReferences.push(document.querySelector(`#key${i}`));
}

for(let key of keyReferences){
    key.addEventListener('click', updateScreen);
}
