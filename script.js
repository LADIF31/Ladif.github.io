const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};


const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = '0';
};

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value);
  });
});

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = '';
  switch (calculationOperator) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = '';
};

equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
});

const clearBtn = document.querySelector('.all-clear');

const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '0';
};

clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
});

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (Event) => {
  console.log(Event.target.value);
});

inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return;
  }
  currentNumber += dot;
};

decimal.addEventListener('click', (Event) => {
  inputDecimal(Event.target.value);
  updateScreen(currentNumber);
});
