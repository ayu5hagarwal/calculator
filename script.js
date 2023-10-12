function additon(a,b){
    return a+b;
}

function subtractraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return (a/b).toPrecision(4);
}

let firstNumber=0;
let operator="";
let secondNumber=0;


function operate(operator,firstNumber,secondNumber){
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    if(operator == "+"){
        return additon(firstNumber,secondNumber);
    }
    else if(operator == "-"){
        return subtractraction(firstNumber,secondNumber);
    }
    if(operator == "*"){
        return multiplication(firstNumber,secondNumber);
    }
    if(operator == "/"){
        return division(firstNumber,secondNumber);
    }
}

let displayValue = "";

const display = document.querySelector(".display");

const equal = document.querySelector(".equal");
equal.addEventListener('click', () => {
    displayValue = operate(operator,firstNumber,secondNumber);
    display.textContent = displayValue;
});


function handleNumberClick(number){
    displayValue += number;
    display.textContent = displayValue;
    if(operator === ""){
        firstNumber = firstNumber*10 + number;
    }
    else{
        secondNumber = secondNumber*10 + number;
    }
}


const zero = document.querySelector(".zero");
zero.addEventListener('click', () => {
    handleNumberClick(0);
});


const one = document.querySelector(".one");
one.addEventListener('click', () => {
   handleNumberClick(1);
});


const two = document.querySelector(".two");
two.addEventListener('click', () => {
    handleNumberClick(2);
});

const three = document.querySelector(".three");
three.addEventListener('click', () => {
    handleNumberClick(3);
});

const four = document.querySelector(".four");
four.addEventListener('click', () => {
    handleNumberClick(4);
});

const five = document.querySelector(".five");
five.addEventListener('click', () => {
    handleNumberClick(5);
});

const six = document.querySelector(".six");
six.addEventListener('click', () => {
    handleNumberClick(6);
});

const seven = document.querySelector(".seven");
seven.addEventListener('click', () => {
    handleNumberClick(7);
});

const eight = document.querySelector(".eight");
eight.addEventListener('click', () => {
    handleNumberClick(8);
});

const nine = document.querySelector(".nine");
nine.addEventListener('click', () => {
    handleNumberClick(9);
});


const add = document.querySelector(".add");
add.addEventListener('click', () => {
    displayValue += "+";
    display.textContent = displayValue;
    operator += "+";
});

const subtract = document.querySelector(".subtract");
subtract.addEventListener('click', () => {
    displayValue += "-";
    display.textContent = displayValue;
    operator += "-";
});

const multiply = document.querySelector(".multiply");
multiply.addEventListener('click', () => {
    displayValue += "*";
    display.textContent = displayValue;
    operator += "*";
});

const divide = document.querySelector(".divide");
divide.addEventListener('click', () => {
    displayValue += "/";
    display.textContent = displayValue;
    operator += "/";
});


const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', () => {
    displayValue += ".";
    display.textContent = displayValue;
});


const clear = document.querySelector(".clear");
clear.addEventListener('click', () =>{
    displayValue = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = "";  
    display.textContent = displayValue; 
});






