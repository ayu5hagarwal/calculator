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
    return (a/b);
}

let displayValue = "";
let firstNumber="";
let operator="";
let secondNumber="";
let result = "";



function operate(operator,firstNumber,secondNumber){
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

        if(operator == "+"){
            return additon(firstNumber,secondNumber);
        }
        else if(operator == "-"){
            return subtractraction(firstNumber,secondNumber);
        }
        else if(operator == "*"){
            return multiplication(firstNumber,secondNumber);
        }
        else if(operator == "/"){
            if(secondNumber == 0){
                return "ERROR"
            }
            else{
            return division(firstNumber,secondNumber).toFixed(5);
            }
        }

}



const display = document.querySelector(".display");


const equal = document.querySelector(".equal");
equal.addEventListener('click', () => {
    if(firstNumber != 0 && operator != "" && secondNumber != 0){
    result = operate(operator,firstNumber,secondNumber);  
    displayValue = result;
    display.textContent = displayValue;
    operator = "";
    secondNumber = "";
    firstNumber = result;
    }
});



function handleNumberClick(number) {
    if (operator === "") {
        if (number === "." && !displayValue.includes(".")) {
            firstNumber = `${firstNumber}.`;
            displayValue = firstNumber;
            display.textContent = displayValue;
        } else if (number !== ".") {
            firstNumber = `${firstNumber}${number}`;
            displayValue = firstNumber;
            display.textContent = displayValue;
        }
    } else {
        if (number === "." && !displayValue.includes(".")) {
            secondNumber = `${secondNumber}.`;
            displayValue = secondNumber;
            display.textContent = displayValue;
        } else if (number !== ".") {
            secondNumber = `${secondNumber}${number}`;
            displayValue = secondNumber;
            display.textContent = displayValue;
        }
    }
   
}




function handleOperatorClick(Operator){
    if(operator == ""){
    operator += Operator;
    }
    else{
        result = operate(operator,firstNumber,secondNumber);  
        displayValue = result;
        display.textContent = displayValue;
        operator = "";
        secondNumber = "";
        firstNumber = result;
        operator += Operator;
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
    handleOperatorClick("+");   
});

const subtract = document.querySelector(".subtract");
subtract.addEventListener('click', () => {
    handleOperatorClick("-");   
});

const multiply = document.querySelector(".multiply");
multiply.addEventListener('click', () => {
    handleOperatorClick("*");   
});

const divide = document.querySelector(".divide");
divide.addEventListener('click', () => {
    handleOperatorClick("/");   
});


const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', () => {
    handleNumberClick(".");
});

const clear = document.querySelector(".clear");
clear.addEventListener('click', () =>{
    displayValue = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";  
    result = "";
    display.textContent = displayValue; 
});

const deleting = document.querySelector(".delete");
deleting.addEventListener('click', () => {
        if(displayValue.toString().length > 0){
        displayValue = displayValue.toString().slice(0,-1);
        display.textContent = displayValue;
        if(operator == ""){
            firstNumber = parseFloat(displayValue);
            if (isNaN(firstNumber)) {
                firstNumber = "";
            }
        }
        else{
            secondNumber = parseFloat(displayValue);
            if (isNaN(secondNumber)) {
                secondNumber = "";
            }
        }
        }
});




