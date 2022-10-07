const values = document.querySelector("#values");
const result = document.querySelector("#result");

const buttons = document.querySelectorAll(".btn");

buttons.forEach((element) => {
  element.onclick = () => {
    if (element.id === "clear") {
      values.innerHTML = "";
      result.innerHTML = "0";
    } else if (element.id === "backspace") {
      let string = values.innerHTML.toString();
      values.innerHTML = string.slice(0, -1);
    } else if (element.id != "" && element.id != "equal") {
      values.innerHTML += element.id;
    } else if (element.id === "equal") {
      let lol = eval(values.innerHTML);
      result.innerHTML = lol;
    }
    console.log(element.id);
  };
});

/* dark-theme */

const darthVader = document.querySelector("#dark-btn");
const yoda = document.querySelector("#light-theme");

const calc = document.querySelector(".calc");
const calcResult = document.querySelector("#calc-result");

darthVader.addEventListener("click", (event) => {
  darthVader.style.display = "none";
  yoda.style.display = "block";
  calc.classList.add("calc--dark");
  calcResult.classList.add("calc__result--dark");
  values.classList.add("calc__values--dark");
  buttons.forEach((el) => {
    if (el.id === "clear" || el.id === "backspace") {
      el.classList.add("btn--default-color-dark");
    } else if (
      el.id === "/" ||
      el.id === "*" ||
      el.id === "-" ||
      el.id === "+"
    ) {
      el.classList.add("btn--bg-red-200");
      el.classList.remove("btn--bg-blue-200");
    } else if (el.id === "equal") {
      el.classList.add("equal--dark");
    } else {
      el.classList.add("btn--dark");
    }
  });
});

yoda.addEventListener("click", (event) => {
  darthVader.style.display = "block";
  yoda.style.display = "none";
  calc.classList.remove("calc--dark");
  calcResult.classList.remove("calc__result--dark");
  values.classList.remove("calc__values--dark");
  buttons.forEach((el) => {
    if (el.id === "clear" || el.id === "backspace") {
      el.classList.remove("btn--default-color-dark");
    } else if (
      el.id === "/" ||
      el.id === "*" ||
      el.id === "-" ||
      el.id === "+"
    ) {
      el.classList.remove("btn--bg-red-200");
      el.classList.add("btn--bg-blue-200");
    } else if (el.id === "equal") {
      el.classList.remove("equal--dark");
    } else {
      el.classList.remove("btn--dark");
    }
  });
});
