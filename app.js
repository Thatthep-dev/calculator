const calculator = {
  add: (x, y) => parseInt(x) + parseInt(y),
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => (y !== 0 ? x / y : "Cannot divide by zero"),
};

function calResult(number1, operator, number2) {
  switch (operator) {
    case "add":
      const addResult = calculator.add(number1, number2);
      console.log("Addition:", addResult);
      return addResult;

    case "subtract":
      const subtractResult = calculator.subtract(number1, number2);
      console.log("Subtraction:", subtractResult);
      return subtractResult;

    case "multiply":
      const multiplyResult = calculator.multiply(number1, number2);
      console.log("Multiplication:", multiplyResult);
      return multiplyResult;

    case "divide":
      const divideResult = calculator.divide(number1, number2);
      console.log("Division:", divideResult);
      return divideResult;
  }
}

// <-- GUI SECTION -->
const numBtnAll = document.querySelectorAll("#numBtn");
const oprBtnAll = document.querySelectorAll(".oprBtn");
const resultBtn = document.querySelector("#resultBtn");
const monitorScreen = document.querySelector("#numOnScreen");

let currentInput = "";
let operator = "";
let result = "";

numBtnAll.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    monitorScreen.textContent = currentInput;
    console.log(`${button.textContent} got clicked`);
  });
});

oprBtnAll.forEach((button) => {
  button.addEventListener("click", () => {
    result = parseInt(currentInput);
    currentInput = "";
    monitorScreen.textContent = currentInput;
    operator = button.id;
    console.log(`${operator} is Operator`);
  });
});

// Show number on monitor
let finalResult = "";
console.log(finalResult);

resultBtn.addEventListener("click", () => {
  finalResult = calResult(result, operator, currentInput);
  monitorScreen.textContent = finalResult;
  console.log(`${finalResult} is finalResult`);
});
