"use strict";

// ! Define Variables
const btnNumbers = document.querySelectorAll(".number");
const inputField = document.querySelector(".input");
const btnOperators = document.querySelectorAll(".operator");
const btnEqual = document.querySelector(".btn--equal");
const btnDelete = document.querySelector(".btn--delete");
const btnClear = document.querySelector(".btn--clear");
let currentInput = "";

// ! SELECT all the number and displayed to the input field
for (let i = 0; i <= btnNumbers.length - 1; i++) {
  btnNumbers[i].addEventListener("click", function () {
    currentInput += btnNumbers[i].textContent;
    inputField.value = currentInput;
  });
}

// ! SELECT all the operator and displayed to the input field
for (let i = 0; i <= btnOperators.length - 1; i++) {
  btnOperators[i].addEventListener("click", function () {
    currentInput += btnOperators[i].textContent;
    inputField.value = currentInput;
  });
}

// ! Do the match and show the result
btnEqual.addEventListener("click", function () {
  const result = eval(currentInput);
  if (result) {
    inputField.value = result;
    currentInput = result.toString();
  }
});

// ! Delete button
btnDelete.addEventListener("click", function () {
  currentInput = currentInput.slice(0, -1);
  inputField.value = currentInput;
});

// ! clear btn
btnClear.addEventListener("click", function () {
  currentInput = "";
  inputField.value = currentInput;
});
