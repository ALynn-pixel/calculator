
const screen = document.querySelector(".calculator-screen");
let firstOp = '';
let secondOp = '';
let currentOperation = null;
let clearTheScreen = false;


const numberButtons = Array.from(document.querySelectorAll(".numbers"));
numberButtons.forEach((button) => 
button.addEventListener("click", () => displayNumber(button.textContent)));

function displayNumber(number) {
  if (screen.textContent === "0" || clearTheScreen) resetScreen();  
  screen.textContent += number;
}//end function


function resetScreen() {
    screen.textContent = '';
    clearTheScreen = false;
} //end function


const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearScreen);

function clearScreen(){
    screen.textContent = "0";
    firstOP = '';
    secondOP = '';
    currentOperation = null;
}

function setOperands(number){
    if (firstOp == null){
        firstOp = number;
    }
      else  secondOp = number;
} //end function


const operatorButtons = Array.from(document.querySelectorAll(".operator"));
operatorButtons.forEach((button) => 
button.addEventListener("click", () => setOperator(button.textContent)));

function setOperator(operator) {
    if(currentOperation !== null || clearTheScreen) evaluate();
    firstOp = screen.textContent;
    currentOperation = operator;
    clearTheScreen = true;
} // end of function


const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", evaluate);

function evaluate(){
 if (currentOperation === "/" && screen.textContent === "0") {
     alert("You know better than that, bro!");
     resetScreen();
     return;
 }
 secondOp = screen.textContent;
 screen.textContent = operate(currentOperation, firstOp, secondOp);
}//end of function


const point = document.querySelector(".point");
point.addEventListener("click", setPoint);

function setPoint(){
    if (screen.textContent.includes(".")) return;
    screen.textContent += ".";
}

function roundResult(number) {
return Math.round(number * 1000) / 1000;
}


function add(a, b) {
    let result = a + b;
    return result;
}//end function

function subtract(a, b){
    let result = a - b;
    return result;
}//end function

function multiply(a, b) {
    let result = a * b;
    return result;
}//end function

function divide(a, b){
    let result = a / b;
    return result;
}//end function

function operate(op, a, b){
a = Number(a);
b = Number(b);
    switch (op) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            if (b === 0){
                return null;
            }
            else return divide(a,b);
        default:
            return null;    
    }
}//end function