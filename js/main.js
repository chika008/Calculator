const values = document.querySelector("#values");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll(".btn");
const darthVader = document.querySelector("#dark-btn");
const yoda = document.querySelector("#light-theme");
const calc = document.querySelector(".calc");
const calcResult = document.querySelector("#calc-result");

const calculate = (input) => {
  return Function(`'use strict'; return (${input})`)();
};

const toggleDarkTheme = () => {
  calc.classList.toggle("calc--dark");
  calcResult.classList.toggle("calc__result--dark");
  values.classList.toggle("calc__values--dark");

  buttons.forEach((el) => {
    if (el.id === "clear" || el.id === "backspace") {
      el.classList.toggle("btn--default-color-dark");
    } else if (["/", "*", "-", "+"].includes(el.id)) {
      el.classList.toggle("btn--bg-red-200");
      el.classList.toggle("btn--bg-blue-200");
    } else if (el.id === "equal") {
      el.classList.toggle("equal--dark");
    } else {
      el.classList.toggle("btn--dark");
    }
  });
};

buttons.forEach((element) => {
  element.onclick = () => {
    if (element.id === "clear") {
      values.innerHTML = "";
      result.innerHTML = "0";
    } else if (element.id === "backspace") {
      let string = values.innerHTML.toString();
      values.innerHTML = string.slice(0, -1);
    } else if (element.id && element.id !== "equal") {
      values.innerHTML += element.id;
    } else if (element.id === "equal") {
      let lol = calculate(values.innerHTML);
      result.innerHTML = lol;
    }
  };
});

darthVader.addEventListener("click", toggleDarkTheme);
yoda.addEventListener("click", toggleDarkTheme);