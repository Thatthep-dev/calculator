const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => (y !== 0 ? x / y : "Cannot divide by zero"),
};

function calResult(number1, operator, number2) {
  switch (operator) {
    case "add":
      const addResult = calculator.add(number1, number2);
      console.log("Addition:", addResult);
      break;

    case "subtract":
      const subtractResult = calculator.subtract(number1, number2);
      console.log("Subtraction:", subtractResult);
      break;

    case "multiply":
      const multiplyResult = calculator.multiply(number1, number2);
      console.log("Multiplication:", multiplyResult);
      break;

    case "divide":
      const divideResult = calculator.divide(number1, number2);
      console.log("Division:", divideResult);
      break;
  }
}

calResult(16, "add", 4);

// <-- GUI SECTION -->
const numBtnAll = document.querySelectorAll("#numBtn");
const oprBtnAll = document.querySelectorAll("#oprBtn");
const resultBtn = document.querySelector("#resultBtn");

numBtnAll.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`${button.textContent} got clicked`);
  });
});

oprBtnAll.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`${button.textContent} got clicked`);
  });
});

resultBtn.addEventListener("click", () => {
  console.log(`${resultBtn.textContent} got clicked`);
});
