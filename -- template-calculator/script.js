const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;


function addDecimal() {
  if (awaitingNextValue) return;
  //if no decimal  add one
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}


function sendNumberValue(number) {
  //replace current display value if first value is entered
  if (awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  } else {
    //if current display value is 0 replace it if not add number to display value
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
  }
}

function sendNumberValue(number) {
  //replace current display value if first value is entered
  if (awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  } else {
    //if current display value is 0 replace it if not add number to display value
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
  }
}

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  //asign first value
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    const calculation = calculate[operatorValue](firstValue, currentValue);
    calculatorDisplay.textContent = calculation;
    firstValue = calculation;
  }
  //ready for next value, store opertor
  awaitingNextValue = true;
  operatorValue = operator;
  //prevent multiple operators
  if (operatorValue && awaitingNextValue) {
    operatorValue = operator;
    return;
  }
}
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
      inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
 } else if (inputBtn.classList.contains('operator')) {
      inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
      inputBtn.addEventListener('click', () => addDecimal());
    }
  });

//calculate values with operators
const calculate = {
  '/': (firstNumber, secondNumber) => firstNumber / secondNumber,

  '*': (firstNumber, secondNumber) => firstNumber * secondNumber,

  '+': (firstNumber, secondNumber) => firstNumber + secondNumber,

  '-': (firstNumber, secondNumber) => firstNumber - secondNumber,

  '=': (firstNumber, secondNumber) => secondNumber,
};
  //reset display
  function resetAll() {
     firstValue = 0;
 operatorValue = '';
 awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
  }

  //event lsitener 
  clearBtn.addEventListener('click', resetAll);