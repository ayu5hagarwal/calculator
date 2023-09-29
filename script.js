function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return (a/b).toPrecision(4);
}

let firstNumber;
let operator;
let secondNumber;


function operate(operator,firstNumber,secondNumber){
    return operator(firstNumber,secondNumber);
}

let displayValue = "";

function one(){
    displayValue = "1";
    return displayValue;
}

const one = document.querySelector(".one");
one.addEventListener('click', one);