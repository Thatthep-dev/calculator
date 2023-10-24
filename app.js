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
    case "subtract":
      const subtractResult = calculator.subtract(number1, number2);
      console.log("Subtraction:", subtractResult);
    case "multiply":
      const multiplyResult = calculator.multiply(number1, number2);
      console.log("Multiplication:", multiplyResult);
    case "divide":
      const divideResult = calculator.divide(number1, number2);
      console.log("Division:", divideResult);
  }
}

calResult(16, "add", 4);
