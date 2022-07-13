const buttonNumber = document.querySelectorAll("[data-number]");
const buttonOperator = document.querySelectorAll("[data-operator]");
const buttonEqual = document.querySelector("[data-equal]");
const buttonDelete = document.querySelector("[data-delete]");
const buttonDeleteAll = document.querySelector("[data-delete-all]");
const textTopValue = document.querySelector("[data-top-value]");
const textBottomValue = document.querySelector("[data-bottom-value]");

class Calculator {
  constructor(textBottomValue, textTopValue) {
    this.textBottomValue = textBottomValue;
    this.textTopValue = textTopValue;
    this.bottomValue = "";
    this.topValue = "";
    this.operator = undefined;
  }

  addNumber(number) {
    if (this.bottomValue.length < 19) {
      if (number === "." && !this.bottomValue.includes(".")) {
        this.bottomValue += number;
      } else if (number !== ".") {
        this.bottomValue += number;
      }
    }
  }

  printDisplay() {
    this.textBottomValue.innerText = this.bottomValue;
    this.textTopValue.innerText = this.topValue;
  }

  delete() {
    this.bottomValue = this.bottomValue.slice(0, -1);
  }

  chooseOperator(operator) {
    if (this.bottomValue === "") return;
    if (this.topValue !== "") {
      this.makeCalculation();
    }

    this.operator = operator;
    this.topValue = this.bottomValue;
    this.bottomValue = "";
  }

  makeCalculation() {
    let result;
    const convertedTopValue = parseFloat(this.topValue);
    const convertedBottomValue = parseFloat(this.bottomValue);

    switch (this.operator) {
      case "+":
        result = convertedTopValue + convertedBottomValue;
        break;
      case "-":
        result = convertedTopValue - convertedBottomValue;
        break;
      case "x":
        result = convertedTopValue * convertedBottomValue;
        break;
      case "÷":
        result = convertedTopValue / convertedBottomValue;
        break;
      default:
        return;
    }
    this.bottomValue = result;
    this.operator = undefined;
    this.topValue = "";
  }

  cleanDisplay() {
    this.bottomValue = "";
    this.topValue = "";
    this.operator = undefined;
  }
}

const calculator = new Calculator(textBottomValue, textTopValue);

buttonNumber.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addNumber(button.innerText);
    calculator.printDisplay();
  });
});

buttonDelete.addEventListener("click", () => {
  calculator.delete();
  calculator.printDisplay();
});

buttonOperator.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperator(button.innerText);
    calculator.printDisplay();
  });
});

buttonEqual.addEventListener("click", () => {
  calculator.makeCalculation();
  calculator.printDisplay();
});

buttonDeleteAll.addEventListener("click", () => {
  calculator.cleanDisplay();
  calculator.printDisplay();
});
