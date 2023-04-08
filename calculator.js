let firstOperand = 0;
let displayValue = "";
let chosenOperator;
let finishedCalculating;

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

//INITALIZE
function init(){
    firstOperand = 0;
    displayValue = '';
    chosenOperator = undefined;
    finishedCalculating = 0;
    updateCurrentText();
    updateOperationText('');
}

//GETTING VALUE FROM USER
function updateCurrentValue(e){
    //e.target.id.slice(-1)
    if(displayValue === '' && e.target.id.slice(-1) === '0') { return; }
    if(finishedCalculating === 1)
    {
        init();
    }
    displayValue += e.target.id.slice(-1);
    updateCurrentText();
}

//SCREEN UPDATING AND CLEARING
function updateCurrentText(){
    mainText.textContent = displayValue;
    if(mainText.textContent === '') {mainText.textContent = '0';} //Dont let user delete the default 0
}

function updateOperationText(string){
    operationText.textContent = string;
}

function clearAll(){
    displayValue = '';
    firstOperand = 0;
    secondOperand = 0;
    mainText.textContent = '0';
    operationText.textContent = '';
}

function clearCurrentInput(){
    displayValue = '';
    mainText.textContent = '0';
}

function removeChar(){
    displayValue = displayValue.slice(0, displayValue.length-1);
    updateCurrentText();
}

//OPERATOR BUTTONS
function plusButton(){
    chosenOperator = '+';
    finishedCalculating = 0;
    if(firstOperand !== 0){
        firstOperand = firstOperand + Number(displayValue);
    } else {
    firstOperand = Number(displayValue);
    }
    updateOperationText(`${firstOperand} +`);
    clearCurrentInput();
}

function minusButton(){
    chosenOperator = '-';
    finishedCalculating = 0;
    if(firstOperand !== 0){
        firstOperand = firstOperand - Number(displayValue);
    } else {
    firstOperand = Number(displayValue);
    }
    updateOperationText(`${firstOperand} -`);
    clearCurrentInput();
}

function divideButton(){
    chosenOperator = '÷';
    finishedCalculating = 0;
    if(firstOperand !== 0){
        if(displayValue === ''){
            updateOperationText(`${firstOperand} ÷`);
            return;
        }
        firstOperand = Math.round(firstOperand / Number(displayValue) * 10) / 10;
    } else {
    firstOperand = Number(displayValue);
    }
    updateOperationText(`${firstOperand} ÷`);
    clearCurrentInput();
}

function multiplyButton(){
    chosenOperator = '*';
    finishedCalculating = 0;
    if(firstOperand !== 0){
        if(displayValue === ''){
            updateOperationText(`${firstOperand} *`);
            return;
        }
        firstOperand = firstOperand * Number(displayValue);
    } else {
    firstOperand = Number(displayValue);
    }
    updateOperationText(`${firstOperand} *`);
    clearCurrentInput();
}

function equalButton(){
    let sum;
    switch(chosenOperator){
        case '+':
            sum = firstOperand + Number(displayValue);
            break;
        case '-':
            sum = firstOperand - Number(displayValue);
            break;
        case '÷':
            sum = Math.round(firstOperand / Number(displayValue) * 10) / 10;
            break;
        case '*':
            sum = firstOperand * Number(displayValue);
            break;
        default:
            break;
    }
    updateOperationText(`${firstOperand} ${chosenOperator} ${Number(displayValue)} =`);
    displayValue = sum;
    updateCurrentText();
    finishedCalculating = 1;

    firstOperand = 0; // We zero this value because we want to get display value(sum) to be first operand if user decides to continue calculating based on sum
}


//EVENT LISTENERS
// Get the num-key references and add event listeners
for(let i=0; i<10;i++){
    keyReferences.push(document.querySelector(`#key${i}`));
}

for(let key of keyReferences){
    key.addEventListener('click', updateCurrentValue);
}

// Event listeners for operators and clear-remove
clearAllBtn.addEventListener('click', clearAll);
removeBtn.addEventListener('click', removeChar);
addBtn.addEventListener('click', plusButton);
subtractBtn.addEventListener('click', minusButton);
multiplyBtn.addEventListener('click', multiplyButton);
divideBtn.addEventListener('click', divideButton);
equalBtn.addEventListener('click', equalButton);