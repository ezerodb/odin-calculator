let number1 = "";
let operator = "";
let number2 = "";
let result = "";

function add(num1, num2) {
    return `${num1 + num2}`;
}

function subtract(num1, num2) {
    return `${num1 - num2}`;
}

function multiply(num1, num2) {
    return `${num1 * num2}`;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Why";
    } else {
        return `${num1 / num2}`;
    }
}

function percent(num1) {
    return `${num1 / 100}`;
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
            if (!operator) {
                if ((button.classList.contains('orange') || value === "%") && value !== "=") {
                    operator = value;
                    //console.log(`the operator is: ${operator}`)
                } else if (value === "+/-") {
                    if (number1.charAt(0) === "-") {
                        number1 = number1.slice(1);
                        screen.textContent = number1;
                    } else {
                        number1 = "-" + number1;
                        screen.textContent = number1;
                    }
                } else if (button.classList.contains('num')) {
                    number1 += value;
                    screen.textContent = number1;
                }
            } 
            
            
            
            
            
            
            
            
            
            
            
            if (value === "AC") {
                number1 = "";
                number2 = "";
                operator = "";
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