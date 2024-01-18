const buttonIncrement = document.querySelector(
  "button[data-action='increment']"
);
const buttonDecrement = document.querySelector(
  "button[data-action='decrement']"
);
const actualValue = document.querySelector("#value");

// buttonIncrement.addEventListener('click', onButtonIncrement);
buttonDecrement.addEventListener('click', onButtonDecrement);

function onButtonDecrement() {
    console.log('Click!!!')
}