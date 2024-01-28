/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add(number1, number2) {
    return number1 + number2;
  }
  
  function addNumbers(add1, add2) {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
  
    document.querySelector('#sum').value = add(addNumber1, addNumber2)
  }
  
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  
  const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  
  const multiply = (number1, number2) => number1 * number2;
  
  const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
  
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
  };
  
  document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
  
  function divide(number1, number2) {
    return number1 / number2;
  }
  
  function divideNumbers(number1, number2) {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
  
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2)
  }
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  
  document.getElementById('getTotal').addEventListener('click', () => {

    const subtotal = parseFloat(document.getElementById('subtotal').value);
  
    const isMember = document.getElementById('member').checked;
  
    let total = subtotal;
    if (isMember) {
      total *= 0.8;
    }
  
    document.getElementById('total').textContent = `$ ${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent = numbersArray.join(',');

let oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = oddNumbers.join(',');

let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(',');

let sum = numbersArray.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').textContent = sum;

let multiplied = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multiplied.join(',');

let sumOfMultiplied = multiplied.reduce((sum, number) => sum + number);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;