import { add, subtract, multiply, divide} from './calculator'

document.addEventListener("DOMContentLoaded", function() {
    const numberInput = document.getElementById('num1');
    const number2Input = document.getElementById('num2');
    const operatorSelect = document.getElementById('operator');
    const calculateButton = document.getElementById('calculate');
    const reseultSection = document.getElementById('result');

    calculateButton.addEventListener("click", function() {
        const number1 = Number(numberInput.value);
        const number2 = Number(number2Input.value);
        const operation = operatorSelect.value;
        let result;

        //NaN stands for Not a Number
        //isNaN('a') --> true
        //isNaN(10) -->false
        if(isNaN(num1) || isNaN(num2)) {
            reseultSection.innerText = 'Please enter valid numbers!';
            return;
    }

    switch(operation) {
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
                result = divide(number1, number2);
                break;

            default:
                result = "Invalid operation";
        }

        resultSection.innerText = `Result: ${result}`;
    });
});