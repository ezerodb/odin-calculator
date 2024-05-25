let number1 = "";
let operator = "";
let number2 = "";
let result = "";
let newOperator = "";

function add(num1, num2) {
    let numb1 = parseFloat(num1);
    let numb2 = parseFloat(num2);
    return `${numb1 + numb2}`;
}

function subtract(num1, num2) {
    let numb1 = parseFloat(num1);
    let numb2 = parseFloat(num2);
    return `${numb1 - numb2}`;
}

function multiply(num1, num2) {
    let numb1 = parseFloat(num1);
    let numb2 = parseFloat(num2);
    return `${numb1 * numb2}`;
}

function divide(num1, num2) {
    let numb1 = parseFloat(num1);
    let numb2 = parseFloat(num2);
    if (numb2 === 0) {
        return "Why";
    } else {
        return `${numb1 / numb2}`;
    }
}

function percent(num1) {
    let numb1 = parseFloat(num1);
    return `${numb1 / 100}`;
}

function operate(num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2)
    } else if (operator === "-") {
        return subtract(num1, num2)
    } else if (operator === "*") {
        return multiply(num1, num2)
    } else if (operator === "/") {
        return divide(num1, num2)
    } else {
        return percent(num1)
    } 
}

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            let screen = document.getElementById('screen');
            
            if (!number1 && !operator && !number2) {
                if (button.classList.contains('num')) {
                    number1 += value;
                    screen.textContent = number1;
                    console.log('added first number1')
                }
            } else if (number1 && !operator && !number2) {
                if (value === "+/-") {
                    if (number1.charAt(0) === "-") {
                        number1 = number1.slice(1);
                        screen.textContent = number1;
                    } else {
                        number1 = "-" + number1;
                        screen.textContent = number1;
                    }
                }
                if (button.classList.contains('orange')) {
                    operator = value;
                    console.log('added operator');
                } else if (button.classList.contains('num')) {
                    number1 += value;
                    screen.textContent = number1;
                    console.log('added to number1')
                }
            } else if (number1 && operator && !number2) {
                if (value === "+/-") {
                    if (number1.charAt(0) === "-") {
                        number1 = number1.slice(1);
                        screen.textContent = number1;
                    } else {
                        number1 = "-" + number1;
                        screen.textContent = number1;
                    }
                } else if (button.classList.contains('orange')) {
                    operator = value;
                    console.log('changed operator value');
                } else if (button.classList.contains('num')) {
                    number2 += value;
                    screen.textContent = number2;
                    console.log('added first number2');
                }
            } else {
                if (button.classList.contains('orange')) {

                    // operate, display result and use result as number1 for next operation
                    result = operate(number1, operator, number2);
                    number1 = result;
                    result = "";
                    operator = value;
                    number2 = "";
                    screen.textContent = number1;
                    console.log('operation completed')

                } else if (value === "+/-") {
                    if (number2.charAt(0) === "-") {
                        number2 = number2.slice(1);
                        screen.textContent = number2;
                    } else {
                        number2 = "-" + number2;
                        screen.textContent = number2;
                    }
                } else if (button.classList.contains('num')) {
                    number2 += value;
                    screen.textContent = number2;
                    console.log('added to number2')
                } 
            }

            if (value === "%") {
                if (screen.textContent) {
                    screen.textContent = operate(screen.textContent);
                }
            }
            
            if (value === "AC") {
                number1 = "";
                number2 = "";
                operator = "";
                result = "";
                screen.textContent = "";
            }
        })
    })

})

console.log(operate(1, "+", 2))
console.log(operate(1, "-", 2))
console.log(operate(1, "*", 2))
console.log(operate(1, "/", 2))
console.log(operate(95, "%", 2))