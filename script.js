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

let firstNumber;
let operator;
let secondNumber;


function operate(operator,firstNumber,secondNumber){
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
equal.addEventListener('click', () => {operate});


const zero = document.querySelector(".zero");
zero.addEventListener('click', () => {
    displayValue += "0";
    display.textContent = displayValue;
});


const one = document.querySelector(".one");
one.addEventListener('click', () => {
    displayValue += "1";
    display.textContent = displayValue;
});


const two = document.querySelector(".two");
two.addEventListener('click', () => {
    displayValue += "2";
    display.textContent = displayValue;
});

const three = document.querySelector(".three");
three.addEventListener('click', () => {
    displayValue += "3";
    display.textContent = displayValue;
});

const four = document.querySelector(".four");
four.addEventListener('click', () => {
    displayValue += "4";
    display.textContent = displayValue;
});

const five = document.querySelector(".five");
five.addEventListener('click', () => {
    displayValue += "5";
    display.textContent = displayValue;
});

const six = document.querySelector(".six");
six.addEventListener('click', () => {
    displayValue += "6";
    display.textContent = displayValue;
});

const seven = document.querySelector(".seven");
seven.addEventListener('click', () => {
    displayValue += "7";
    display.textContent = displayValue;
});

const eight = document.querySelector(".eight");
eight.addEventListener('click', () => {
    displayValue += "8";
    display.textContent = displayValue;
});

const nine = document.querySelector(".nine");
nine.addEventListener('click', () => {
    displayValue += "9";
    display.textContent = displayValue;
});


const add = document.querySelector(".add");
add.addEventListener('click', () => {
    displayValue += "+";
    display.textContent = displayValue;
});

const subtract = document.querySelector(".subtract");
subtract.addEventListener('click', () => {
    displayValue += "-";
    display.textContent = displayValue;
});

const multiply = document.querySelector(".multiply");
multiply.addEventListener('click', () => {
    displayValue += "x";
    display.textContent = displayValue;
});

const divide = document.querySelector(".divide");
divide.addEventListener('click', () => {
    displayValue += "/";
    display.textContent = displayValue;
});


const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', () => {
    displayValue += ".";
    display.textContent = displayValue;
});







