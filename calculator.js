
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <style>
        .calculator {
            width: 200px;
            margin: 50px auto;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
        }
        .display {
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
            text-align: right;
            font-size: 1.5em;
            padding-right: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .button {
            padding: 20px;
            font-size: 1.2em;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #4CAF50;
            color: white;
        }
        .button.operator {
            background-color: #f39c12;
        }
        .button.clear {
            background-color: #e74c3c;
            grid-column: span 2;
        }
        .button.equals {
            background-color: #3498db;
            grid-column: span 2;
        }
    </style>
</head>
<body>

<div class="calculator">
    <input type="text" id="display" class="display" disabled>
    <div class="buttons">
        <button class="button" onclick="appendNumber('7')">7</button>
        <button class="button" onclick="appendNumber('8')">8</button>
        <button class="button" onclick="appendNumber('9')">9</button>
        <button class="button operator" onclick="chooseOperator('/')">/</button>

        <button class="button" onclick="appendNumber('4')">4</button>
        <button class="button" onclick="appendNumber('5')">5</button>
        <button class="button" onclick="appendNumber('6')">6</button>
        <button class="button operator" onclick="chooseOperator('*')">*</button>

        <button class="button" onclick="appendNumber('1')">1</button>
        <button class="button" onclick="appendNumber('2')">2</button>
        <button class="button" onclick="appendNumber('3')">3</button>
        <button class="button operator" onclick="chooseOperator('-')">-</button>

        <button class="button" onclick="appendNumber('0')">0</button>
        <button class="button clear" onclick="clearDisplay()">C</button>
        <button class="button equals" onclick="calculateResult()">=</button>
        <button class="button operator" onclick="chooseOperator('+')">+</button>
    </div>
</div>

<script>
    let displayValue = '';
    let currentOperator = '';
    let firstOperand = null;

    function appendNumber(number) {
        displayValue += number;
        updateDisplay();
    }

    function chooseOperator(operator) {
        if (displayValue === '') return;

        if (firstOperand === null) {
            firstOperand = parseFloat(displayValue);
        } else if (currentOperator !== '') {
            firstOperand = operate(firstOperand, parseFloat(displayValue), currentOperator);
        }

        currentOperator = operator;
        displayValue = '';
    }

    function calculateResult() {
        if (firstOperand === null || displayValue === '') return;

        displayValue = operate(firstOperand, parseFloat(displayValue), currentOperator).toString();
        firstOperand = null;
        currentOperator = '';
        updateDisplay();
    }

    function clearDisplay() {
        displayValue = '';
        currentOperator = '';
        firstOperand = null;
        updateDisplay();
    }

    function updateDisplay() {
        document.getElementById('display').value = displayValue;
    }

    function operate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return b;
        }
    }
</script>

</body>
</html>

