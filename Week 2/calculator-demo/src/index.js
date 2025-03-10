import { add, subtract, multiply, divide } from './calculator.js';

console.log('Javascript loaded');

document.addEventListener("DOMContentLoaded", function() {
    const numberInput = document.getElementById('num1');
    const number2Input = document.getElementById('num2');
    const operatorSelect = document.getElementById('operator');
    const calculateButton = document.getElementById('calculate');
    const resultSection = document.getElementById('result');

    calculateButton.addEventListener("click", function() {
        const number1 = Number(numberInput.value);
        const number2 = Number(number2Input.value);
        const operation = operatorSelect.value;
        let result;

        if (isNaN(number1) || isNaN(number2)) {
            resultSection.innerText = 'Please enter valid numbers!';
            return;
        }

        switch (operation) {
            case "add":
                result = add(number1, number2);
                break;
            case "subtract":
                result = subtract(number1, number2);
                break;
            case "multiply":
                result = multiply(number1, number2);
                break;
            case "divide":
                if (number2 === 0) {
                    resultSection.innerText = "Cannot divide by zero.";
                    return;
                }
                result = divide(number1, number2);
                break;
            default:
                result = "Invalid operation";
        }
        console.log(result);
        resultSection.innerText = `${result}`;
    });
});
